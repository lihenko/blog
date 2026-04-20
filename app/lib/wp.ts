const WP_API_URL = "https://wp.lihenko.com.ua/graphql";

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
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("GraphQL request failed");
  }

  const json = await res.json();

  if (json.errors) {
    const errorMessage = JSON.stringify(json.errors, null, 2);
    console.error(errorMessage);
    throw new Error(errorMessage);
    }


  return json.data;
}

/* =========================
   POSTS (PAGINATED)
========================= */

export async function getPosts(first = 10, after?: string) {
  const data = await fetchGraphQL<{
    posts: {
      nodes: Post[];
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  }>(
    `
    query GetPosts($first: Int!, $after: String) {
      posts(first: $first, after: $after) {
        nodes {
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
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    `,
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
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string;
      };
    };
  }>(
    `
    query GetPostsByCategory($categorySlug: String!, $first: Int!, $after: String) {
      posts(
        first: $first
        after: $after
        where: { categoryName: $categorySlug }
      ) {
        nodes {
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
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
    `,
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

export async function getPost(slug: string) {
  const data = await fetchGraphQL<{
    post: Post;
  }>(
    `
    query GetPost($slug: ID!) {
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
    }
    `,
    { slug }
  );

  return data.post;
}



/* =========================
   CATEGORIES
========================= */

export async function getCategories() {
  const data = await fetchGraphQL<{
    categories: {
      nodes: Category[];
    };
  }>(`
    query GetCategories {
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
    }
  `);

  return data.categories.nodes;
}


/* =========================
   HELPERS
========================= */

export function getPrimaryCategory(post: Post): string {
  return post.categories?.nodes?.[0]?.slug || "uncategorized";
}

export function getPostUrl(post: Post): string {
  return `/blog/${getPrimaryCategory(post)}/${post.slug}`;
}

export function stripHtml(html: string = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}


const SITE_URL = "https://lihenko.com.ua";

export function getPostMeta(post: Post) {
  const category = getPrimaryCategory(post);
  const fallbackCanonical = `${SITE_URL}/blog/${category}/${post.slug}`;
  const canonical = post.seo?.canonical || fallbackCanonical;
  const description =
    post.seo?.metaDesc?.trim() || stripHtml(post.excerpt).slice(0, 160);

  return {
    title: stripHtml(post.title),
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: stripHtml(post.title),
      description,
      url: canonical,
      images: post.featuredImage?.node?.sourceUrl
        ? [post.featuredImage.node.sourceUrl]
        : [],
    },
  };
}



export async function getAllPostsForSitemap() {
  let allPosts: Post[] = [];
  let after: string | undefined = undefined;
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await getPosts(50, after);

    allPosts = [...allPosts, ...data.nodes];
    hasNextPage = data.pageInfo.hasNextPage;
    after = data.pageInfo.endCursor;
  }

  return allPosts;
}

