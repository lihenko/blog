import type { MetadataRoute } from "next";
import { getAllPostsForSitemap, getCategories } from "@/app/lib/wp";

const SITE_URL = "https://lihenko.com.ua";

const STATIC_PAGES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/fix-wordpress-bugs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wordpress-maintenance", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/speed-optimization", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/wordpress-to-nextjs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/figma-to-nextjs", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/free-audit", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/testimonials", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.9, changeFrequency: "daily" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, posts] = await Promise.all([
    getCategories(),
    getAllPostsForSitemap(),
  ]);

  const usedCategorySlugs = new Set(
    posts.flatMap((post) => post.categories?.nodes?.map((c) => c.slug) ?? [])
  );

  const staticPages = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const categoryPages = categories
    .filter((category) => usedCategorySlugs.has(category.slug))
    .map((category) => ({
      url: `${SITE_URL}/blog/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const postPages = posts.map((post) => {
    const primaryCategory =
      post.categories?.nodes?.[0]?.slug || "uncategorized";

    return {
      url: `${SITE_URL}/blog/${primaryCategory}/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...staticPages, ...categoryPages, ...postPages];
}
