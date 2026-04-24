import { testimonials } from "@/app/data/testimonials";
import PageTitle from "@/app/components/PageTitle";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read real feedback from clients who improved their WordPress websites with speed optimization, bug fixes, and performance upgrades.",
  alternates: {
    canonical: "https://lihenko.com.ua/testimonials",
  },

  openGraph: {
    title: "Testimonials | WP Expert",
    description:
      "Real client reviews about WordPress optimization and development services.",
    url: "https://lihenko.com.ua/testimonials",
    images: [
      {
        url: "/og-testimonials.webp",
        width: 1200,
        height: 630,
        alt: "Client testimonials",
      },
    ],
  },
};

const averageRating =
  testimonials.reduce((acc, t) => acc + t.rating, 0) /
  testimonials.length;

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WP Expert",
  description:
    "WordPress bug fixing, speed optimization, maintenance and Next.js migration services.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: Number(averageRating.toFixed(1)),
    reviewCount: testimonials.length,
    ratingCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.text,
  })),
};




export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
        }}
        />
      <PageTitle
        badge="Testimonials"
        title="What Clients Say"
        subtitle="Real feedback from clients who improved their website performance"
        />
        <section className="py-16 lg:py-24">
            <div className="container max-w-4xl mx-auto">

                <div className="space-y-6">

                {testimonials.map((t, index) => (
                    <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border shadow-sm"
                    >
                    {/* Stars */}
                    <div className="flex gap-1 text-yellow-400 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                            {i < t.rating ? "★" : "☆"}
                        </span>
                        ))}
                    </div>

                    {/* Full text */}
                    <p className="text-gray-700 leading-7 mb-4">
                        “{t.text}”
                    </p>

                    {/* Author */}
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                ))}

                </div>
            </div>
        </section>
    </>
    
  );
}