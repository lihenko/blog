import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/components/BlogContent.module.css";

import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import {
  getPost,
  getRelatedPosts,
  getPrimaryCategory,
  getPostMeta,
  stripHtml,
} from "@/app/lib/wp";

type Params = Promise<{
  category: string;
  slug: string;
}>;

const SITE_URL = "https://lihenko.com.ua";

const getCachedPost = cache(async (slug: string) => {
  return getPost(slug);
});

type TocItem = {
  id: string;
  text: string;
  level: "h2" | "h3";
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

function buildTocAndContent(html: string): {
  content: string;
  toc: TocItem[];
} {
  const toc: TocItem[] = [];
  const usedIds = new Map<string, number>();

  const content = html.replace(
    /<h([23])([^>]*)>(.*?)<\/h[23]>/gi,
    (_, level, attrs, innerHtml) => {
      const text = stripHtml(innerHtml).trim();
      if (!text) return `<h${level}${attrs}>${innerHtml}</h${level}>`;

      let id = slugify(text);
      const count = usedIds.get(id) ?? 0;
      usedIds.set(id, count + 1);

      if (count > 0) {
        id = `${id}-${count + 1}`;
      }

      toc.push({
        id,
        text,
        level: `h${level}` as "h2" | "h3",
      });

      if (/id=/i.test(attrs)) {
        return `<h${level}${attrs}>${innerHtml}</h${level}>`;
      }

      return `<h${level}${attrs} id="${id}">${innerHtml}</h${level}>`;
    }
  );

  return { content, toc };
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getCachedPost(slug);

  if (!post) return {};

  return getPostMeta(post);
}

export default async function PostPage({
  params,
}: {
  params: Params;
}) {
  const { slug, category } = await params;
  const post = await getCachedPost(slug);

  if (!post) {
    return notFound();
  }

  const primaryCategory = getPrimaryCategory(post);

  if (primaryCategory !== category) {
    return notFound();
  }

  const relatedPosts = await getRelatedPosts(slug, primaryCategory, 3);
  const featuredImage = post.featuredImage?.node;

  const canonical =
    post.seo?.canonical?.trim() ||
    `${SITE_URL}/blog/${primaryCategory}/${post.slug}`;

  const description =
    post.seo?.metaDesc?.trim() || stripHtml(post.excerpt).slice(0, 160);

  const { content, toc } = buildTocAndContent(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${canonical}#article`,
    headline: stripHtml(post.title),
    description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    url: canonical,
    articleSection: primaryCategory,
    ...(featuredImage?.sourceUrl && {
      image: [featuredImage.sourceUrl],
    }),
    author: {
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <article className="container py-16 lg:py-24">
        <Breadcrumbs
          category={primaryCategory}
          title={stripHtml(post.title)}
          currentPath={`/blog/${primaryCategory}/${post.slug}`}
        />

        <h1
          className="mb-14 text-center text-3xl font-bold md:text-5xl"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        <div className="mx-auto max-w-3xl">
          {featuredImage?.sourceUrl && (
            <Image
              src={featuredImage.sourceUrl}
              alt={featuredImage.altText || stripHtml(post.title)}
              width={1536}
              height={1024}
              sizes="(max-width: 768px) 100vw, 768px"
              className="mb-6 aspect-3/2 w-full rounded-xl object-cover"
              priority
            />
          )}

          {toc.length > 0 && (
            <nav className="mb-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <h2 className="mb-3 text-lg font-semibold">Зміст</h2>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li
                    key={item.id}
                    className={item.level === "h3" ? "ml-4" : ""}
                  >
                    <a
                      href={`#${item.id}`}
                      className="text-gray-700 transition hover:text-black"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div
            className={styles.prose + " prose-lg mb-8 max-w-none prose-img:rounded-xl prose-img:w-full prose-img:h-auto"}
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <p className="mb-12 text-sm uppercase text-gray-500">
            Posted in: {primaryCategory}
          </p>
        </div>

        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-2xl font-bold md:text-3xl">
              Related Posts
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const relatedCategory = getPrimaryCategory(relatedPost);
                const relatedImage = relatedPost.featuredImage?.node;

                return (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedCategory}/${relatedPost.slug}`}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {relatedImage?.sourceUrl && (
                      <Image
                        src={relatedImage.sourceUrl}
                        alt={relatedImage.altText || stripHtml(relatedPost.title)}
                        width={1536}
                        height={1024}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="aspect-3/2 w-full object-cover"
                      />
                    )}

                    <div className="p-5">
                      <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                        {relatedCategory}
                      </p>

                      <h3 className="mb-3 text-lg font-semibold leading-snug">
                        {stripHtml(relatedPost.title)}
                      </h3>

                      <p className="text-sm text-gray-600">
                        {stripHtml(relatedPost.excerpt).slice(0, 120)}...
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
