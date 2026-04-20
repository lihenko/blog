import Link from "next/link";

type BreadcrumbsProps = {
  category?: string;
  title?: string;
  currentPath?: string;
};

const SITE_URL = "https://lihenko.com.ua";

export function Breadcrumbs({
  category,
  title,
  currentPath,
}: BreadcrumbsProps) {
  const items = [
    {
      name: "Blog",
      url: `${SITE_URL}/blog`,
    },
    ...(category
      ? [
          {
            name: category,
            url: title
              ? `${SITE_URL}/blog/${category}`
              : `${SITE_URL}${currentPath || `/blog/${category}`}`,
          },
        ]
      : []),
    ...(title && currentPath
      ? [
          {
            name: title,
            url: `${SITE_URL}${currentPath}`,
          },
        ]
      : []),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="mb-16 text-sm uppercase text-gray-500"
      >
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>

          {category && (
            <>
              <li>/</li>
              <li>
                <Link href={`/blog/${category}`} className="hover:underline">
                  {category}
                </Link>
              </li>
            </>
          )}

          {title && (
            <>
              <li>/</li>
              <li className="max-w-50 truncate text-gray-700">{title}</li>
            </>
          )}
        </ol>
      </nav>
    </>
  );
}
