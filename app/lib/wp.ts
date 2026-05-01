const WP_API_URL = "https://wp.lihenko.com.ua/graphql";
const SITE_URL = "https://lihenko.com.ua";

/* =========================
   TYPES
========================= */

export type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  seo?: {
    metaDesc?: string | null;
    canonical?: string | null;
  };
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  seo?: {
    metaDesc?: string | null;
    canonical?: string | null;
  };
  categories: {
    nodes: Category[];
  };
  featuredImage?: {
    node?: {
      sourceUrl: string;
      altText: string;
    };
  };
};

/* =========================
   CORE FETCH
========================= */

async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors, null, 2));
  }

  return json.data;
}

/* =========================
   HELPERS
========================= */

export function stripHtml(html: string = ""): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8216;/g, "\u2018") // '
    .replace(/&#8217;/g, "\u2019") // '
    .replace(/&#8220;/g, "\u201C") // "
    .replace(/&#8221;/g, "\u201D") // "
    .replace(/&#8222;/g, "\u201E") // „
    .replace(/&#8211;/g, "\u2013") // –
    .replace(/&#8212;/g, "\u2014") // —
    .replace(/&#038;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&[a-z]+;/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function getPrimaryCategory(post: Post): string {
  return post.categories?.nodes?.[0]?.slug ?? "uncategorized";
}

export function getPostUrl(post: Post): string {
  return `/blog/${getPrimaryCategory(post)}/${post.slug}`;
}

export function getPostMeta(post: Post) {
  const category = getPrimaryCategory(post);
  const fallbackCanonical = `${SITE_URL}/blog/${category}/${post.slug}`;
  const canonical = post.seo?.canonical || fallbackCanonical;
  const title = stripHtml(post.title);
  const description =
    post.seo?.metaDesc?.trim() || stripHtml(post.excerpt).slice(0, 160);
  const image = post.featuredImage?.node?.sourceUrl;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: image ? [image] : [],
    },
  };
}

/* =========================
   FRAGMENTS
========================= */

const POST_CARD_FIELDS = `
  id
  title
  slug
  excerpt
  date
  categories {
    nodes {
      id
      name
      slug
    }
  }
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
`;

const PAGE_INFO_FIELDS = `
  pageInfo {
    hasNextPage
    endCursor
  }
`;

/* =========================
   POSTS (PAGINATED)
========================= */

export async function getPosts(first = 10, after?: string) {
  const data = await fetchGraphQL<{
    posts: {
      nodes: Post[];
      pageInfo: { hasNextPage: boolean; endCursor: string };
    };
  }>(
    `query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes { ${POST_CARD_FIELDS} }
        ${PAGE_INFO_FIELDS}
      }
    }`,
    { first, after }
  );

  return data.posts;
}

/* =========================
   POSTS BY CATEGORY
========================= */

export async function getPostsByCategory(
  categorySlug: string,
  first = 9,
  after?: string
) {
  const data = await fetchGraphQL<{
    posts: {
      nodes: Post[];
      pageInfo: { hasNextPage: boolean; endCursor: string };
    };
  }>(
    `query GetPostsByCategory($categorySlug: String!, $first: Int!, $after: String) {
      posts(first: $first, after: $after, where: { categoryName: $categorySlug }) {
        nodes { ${POST_CARD_FIELDS} }
        ${PAGE_INFO_FIELDS}
      }
    }`,
    { categorySlug, first, after }
  );

  return data.posts;
}

/* =========================
   RELATED POSTS
========================= */

export async function getRelatedPosts(
  currentSlug: string,
  categorySlug: string,
  limit = 3
) {
  const postsData = await getPostsByCategory(categorySlug, limit + 1);

  return postsData.nodes
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit);
}

/* =========================
   SINGLE POST
========================= */

export async function getPost(slug: string): Promise<Post | null> {
  const data = await fetchGraphQL<{ post: Post | null }>(
    `query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        slug
        excerpt
        content
        date
        seo {
          metaDesc
          canonical
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }`,
    { slug }
  );

  return data.post;
}

/* =========================
   CATEGORIES
========================= */

export async function getCategories(): Promise<Category[]> {
  const data = await fetchGraphQL<{ categories: { nodes: Category[] } }>(
    `query GetCategories {
      categories(first: 50) {
        nodes {
          id
          name
          slug
          description
          seo {
            metaDesc
            canonical
          }
        }
      }
    }`
  );

  return data.categories.nodes;
}

/* =========================
   SITEMAP
========================= */

export async function getAllPostsForSitemap(): Promise<Post[]> {
  const allPosts: Post[] = [];
  let after: string | undefined = undefined;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await getPosts(50, after);
    allPosts.push(...data.nodes);
    hasNextPage = data.pageInfo.hasNextPage;
    after = data.pageInfo.endCursor;
  }

  return allPosts;
}