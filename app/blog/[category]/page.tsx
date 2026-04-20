import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import {
  getCategories,
  getPostsByCategory,
  stripHtml,
} from "@/app/lib/wp";

const SITE_URL = "https://lihenko.com.ua";
const POSTS_PER_PAGE = 9;

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
};

function getCurrentPage(page?: string) {
  const parsed = Number(page);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
}

function getCategoryPath(category: string, page: number) {
  return page > 1 ? `/blog/${category}?page=${page}` : `/blog/${category}`;
}

function getCategoryUrl(category: string, page: number) {
  return `${SITE_URL}${getCategoryPath(category, page)}`;
}

function getCategoryDescription(category: {
  name: string;
  description?: string | null;
  seo?: { metaDesc?: string | null };
}, currentPage: number) {
  const fallback =
    currentPage > 1
      ? `Browse ${category.name} articles and guides. Page ${currentPage}.`
      : `Browse ${category.name} articles and guides.`;

  return (
    category.seo?.metaDesc?.trim() ||
    stripHtml(category.description || "").slice(0, 160) ||
    fallback
  );
}

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const [{ category }, { page }] = await Promise.all([params, searchParams]);

  const categories = await getCategories();
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) return {};

  const currentPage = getCurrentPage(page);
  const canonical =
    currentCategory.seo?.canonical?.trim() ||
    getCategoryUrl(category, currentPage);

  const title =
    currentPage > 1
      ? `${currentCategory.name} Articles - Page ${currentPage}`
      : `${currentCategory.name} Articles`;

  const description = getCategoryDescription(currentCategory, currentPage);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: Props) {
  const [{ category }, { page }] = await Promise.all([params, searchParams]);

  const categories = await getCategories();
  const currentCategory = categories.find((c) => c.slug === category);

  if (!currentCategory) return notFound();

  const currentPage = getCurrentPage(page);

  let after: string | undefined = undefined;
  let postsData;

  for (let i = 1; i <= currentPage; i++) {
    postsData = await getPostsByCategory(category, POSTS_PER_PAGE, after);
    after = postsData.pageInfo.endCursor;

    if (!postsData.pageInfo.hasNextPage) break;
  }

  const posts = postsData?.nodes ?? [];
  const hasNextPage = postsData?.pageInfo?.hasNextPage ?? false;
  const canonical =
    currentCategory.seo?.canonical?.trim() ||
    getCategoryUrl(category, currentPage);
  const description = getCategoryDescription(currentCategory, currentPage);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonical}#collection`,
    url: canonical,
    name:
      currentPage > 1
        ? `${currentCategory.name} - Page ${currentPage}`
        : currentCategory.name,
    description,
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: currentCategory.name,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${category}/${post.slug}`,
        name: stripHtml(post.title),
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />

      <div className="container py-16 lg:py-24">
        <Breadcrumbs
          category={currentCategory.slug}
          currentPath={getCategoryPath(category, currentPage)}
        />

        <h1 className="mb-16 text-center text-3xl font-bold md:text-5xl">
          {currentPage > 1
            ? `${currentCategory.name} - Page ${currentPage}`
            : currentCategory.name}
        </h1>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts in this category.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const primaryCategory =
                post.categories.nodes[0]?.slug || category;
              const title = stripHtml(post.title);
              const excerpt = stripHtml(post.excerpt).slice(0, 120);
              const featuredImage = post.featuredImage?.node;

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-xl border transition hover:shadow-md"
                >
                  {featuredImage?.sourceUrl && (
                    <Link href={`/blog/${primaryCategory}/${post.slug}`}>
                      <Image
                        src={featuredImage.sourceUrl}
                        alt={featuredImage.altText || title}
                        width={1536}
                        height={1024}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="aspect-3/2 w-full object-cover"
                      />
                    </Link>
                  )}

                  <div className="p-4">
                    <h2 className="mb-2 text-xl font-semibold">{title}</h2>

                    <p className="mb-4 text-sm text-gray-600">
                      {excerpt}...
                    </p>

                    <Link
                      href={`/blog/${primaryCategory}/${post.slug}`}
                      className="text-blue-600 hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        <div className="mt-12 flex justify-between">
          {currentPage > 1 ? (
            <Link
              href={getCategoryPath(category, currentPage - 1)}
              className="rounded-lg border px-4 py-2 transition hover:bg-gray-50"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {hasNextPage && (
            <Link
              href={getCategoryPath(category, currentPage + 1)}
              className="rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90"
            >
              Next →
            </Link>
          )}
        </div>

        {currentCategory.description && (
          <section className="prose prose-lg mx-auto mt-16 max-w-4xl bg-gray-50 p-6 rounded-xl">
            <div
              dangerouslySetInnerHTML={{
                __html: currentCategory.description,
              }}
            />
          </section>
        )}
      </div>
    </>
  );
}
