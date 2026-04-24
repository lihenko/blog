import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/BlogContent.module.css";

import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { getPosts, getPostUrl, stripHtml } from "@/app/lib/wp";

const SITE_URL = "https://lihenko.com.ua";
const POSTS_PER_PAGE = 9;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

function getCurrentPage(page?: string) {
  const parsed = Number(page);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
}

function getBlogPath(page: number) {
  return page > 1 ? `/blog?page=${page}` : "/blog";
}

function getBlogUrl(page: number) {
  return `${SITE_URL}${getBlogPath(page)}`;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { page } = await searchParams;
  const currentPage = getCurrentPage(page);
  const canonical = getBlogUrl(currentPage);

  const title =
    currentPage > 1
      ? `WordPress & Next.js Blog - Page ${currentPage}`
      : "WordPress & Next.js Blog";

  const description =
    currentPage > 1
      ? `Browse WordPress and Next.js articles, guides, fixes, and performance tips. Page ${currentPage}.`
      : "Browse WordPress and Next.js articles, guides, fixes, and performance tips.";

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

export default async function BlogPage({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = getCurrentPage(page);

  let after: string | undefined = undefined;
  let postsData;

  for (let i = 1; i <= currentPage; i++) {
    postsData = await getPosts(POSTS_PER_PAGE, after);
    after = postsData.pageInfo.endCursor;

    if (!postsData.pageInfo.hasNextPage) break;
  }

  const posts = postsData?.nodes ?? [];
  const hasNextPage = postsData?.pageInfo?.hasNextPage ?? false;
  const canonical = getBlogUrl(currentPage);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonical}#collection`,
    url: canonical,
    name:
      currentPage > 1
        ? `WordPress & Next.js Blog - Page ${currentPage}`
        : "WordPress & Next.js Blog",
    description:
      currentPage > 1
        ? `Browse WordPress and Next.js articles, guides, fixes, and performance tips. Page ${currentPage}.`
        : "Browse WordPress and Next.js articles, guides, fixes, and performance tips.",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "Thing",
      name: "WordPress and Next.js",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${getPostUrl(post)}`,
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

      <section className="container py-16 lg:py-24">
        <Breadcrumbs currentPath="/blog" />

        <h1 className="mb-16 text-center text-3xl font-bold md:text-5xl">
          {currentPage > 1
            ? `WordPress & Next.js Blog - Page ${currentPage}`
            : "WordPress & Next.js Blog"}
        </h1>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const title = stripHtml(post.title);
              const excerpt = stripHtml(post.excerpt).slice(0, 120);
              const featuredImage = post.featuredImage?.node;
              const category = post.categories?.nodes?.[0];

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-xl border transition hover:shadow-md"
                >
                  {featuredImage?.sourceUrl && (
                    <Link href={getPostUrl(post)}>
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

                    {category?.name && (
                      <p className="mb-3 text-xs uppercase tracking-wide text-gray-500">
                        {category.name}
                      </p>
                    )}

                    <Link
                      href={getPostUrl(post)}
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
              href={getBlogPath(currentPage - 1)}
              className="rounded-lg border px-4 py-2 transition hover:bg-gray-50"
            >
              ← Previous
            </Link>
          ) : (
            <div />
          )}

          {hasNextPage && (
            <Link
              href={getBlogPath(currentPage + 1)}
              className="rounded-lg bg-black px-4 py-2 text-white transition hover:opacity-90"
            >
              Next →
            </Link>
          )}
        </div>
      </section>
      <section className={styles.prose + " prose-lg mx-auto mb-16 lg:mb-24 max-w-4xl bg-gray-50 p-6 rounded-xl"}>
            <div>
                <p>This blog focuses on solving real website problems and helping businesses keep their WordPress and Next.js projects running smoothly. Here you’ll find practical articles about fixing errors, improving website speed, and maintaining stable performance.</p>

                <p>We cover common issues such as WordPress errors, slow loading websites, broken functionality, and migration challenges. Each guide is based on real experience and shows proven ways to restore and optimize websites without unnecessary risks.</p>

                <p>If your website is not working properly, loads too slowly, or needs improvements, these articles will help you understand the problem and find the right solution.</p>

                <p>Looking for a fast and reliable fix? Professional WordPress support, performance optimization, and Next.js development services are available to get your website back on track.</p>
            </div>
        </section>
      
    </>
  );
}
