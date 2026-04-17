import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import { ChevronDown, Search, Wrench, ShieldCheck, Bug, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "WordPress to Next.js Migration",
  description:
    "Migrate your WordPress website to Next.js for better performance, SEO, and scalability. Modernize your stack, improve Core Web Vitals, and boost conversions.",

  alternates: {
    canonical: "https://lihenko.com.ua/wordpress-to-nextjs",
  },

  openGraph: {
    title: "WordPress to Next.js Migration | Performance Expert",
    description:
      "Upgrade your WordPress site to Next.js for faster performance, better SEO, and a modern development stack.",
    url: "https://lihenko.com.ua/wordpress-to-nextjs",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-wordpress-to-nextjs.webp",
        width: 1200,
        height: 630,
        alt: "WordPress to Next.js Migration Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress to Next.js Migration Expert",
    description:
      "Migrate WordPress to Next.js for speed, SEO, and scalability improvements.",
    images: ["/og-wordpress-to-nextjs.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const problems = [
  "Outdated WordPress architecture holding back performance, scalability, and modern development",
  "Slow and bloated frontend caused by heavy themes, page builders, and plugin overload",
  "Poor Core Web Vitals leading to lower Google rankings and lost organic traffic",
  "Fragile WordPress setups that become hard to maintain and break with every update",
  "Security vulnerabilities caused by outdated plugins, themes, and third-party dependencies",
  "Slow WooCommerce performance under traffic spikes, resulting in abandoned carts and lost revenue",
];

const faqs = [
  {
    question: "Why migrate from WordPress to Next.js?",
    answer:
      "Next.js offers better performance, improved SEO, modern architecture, and full control over frontend and backend logic compared to traditional WordPress setups.",
  },
  {
    question: "Will I lose my content during migration?",
    answer:
      "No. All content including pages, posts, and media can be safely migrated and structured into a modern Next.js application.",
  },
  {
    question: "How long does a WordPress to Next.js migration take?",
    answer:
      "Depending on project complexity, migration usually takes from a few days to 2–3 weeks.",
  },
  {
    question: "Will my website design change?",
    answer:
      "The design can be fully preserved or improved. Migration gives an opportunity to modernize UI while keeping your brand identity.",
  },
  {
    question: "Is SEO preserved during migration?",
    answer:
      "Yes. Proper migration includes URL mapping, redirects, metadata transfer, and structured data preservation to maintain SEO rankings.",
  },
  {
    question: "Can you integrate CMS with Next.js?",
    answer:
      "Yes. We can integrate headless CMS solutions like Strapi, Sanity, or WordPress as a headless backend.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress to Next.js Migration",
  description:
    "Professional WordPress to Next.js migration service focused on improving performance, scalability, SEO, and modernizing legacy WordPress websites into a fast React-based architecture.",

  provider: {
    "@type": "Person",
    name: "Vladyslav Lykhenko",
  },

  areaServed: "Worldwide",

  serviceType: "Website Migration & Modernization",

  category: "Web Development",

  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FixWordPressBugsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <PageTitle
                badge="Migration Service"
                title="Migrate WordPress to Next.js"
                subtitle="Upgrade your website to a modern Next.js architecture for better performance, SEO, scalability, and long-term maintainability."
            />

            <div className="flex flex-wrap gap-3 justify-center mt-6">
            <Link href="/contact" className="btn btn-primary">
                Start Migration
            </Link>

            <Link href="#process" className="btn btn-secondary">
                See Migration Process
            </Link>
            </div>
            <section className="py-8 px-4 text-center text-sm text-gray-500">
                Trusted by businesses worldwide • 5★ Client Feedback • Fast turnaround
            </section>
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-8">
                        Limitations of WordPress Websites
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                    {problems.map((p) => (
                        <div
                        key={p}
                        className="p-4 bg-white border rounded-xl"
                        >
                        {p}
                        </div>
                    ))}
                    </div>

                </div>
            </section>
            <section className="py-16 lg:py-24">
                <div className="container">

                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
                    WordPress to Next.js Migration That Modernizes Your Website
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">

                        <div className="flex gap-3">
                        <Search className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Full technical audit of your WordPress setup, structure, and performance bottlenecks before migration.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <Wrench className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Clean migration to Next.js with modern architecture, improved performance, and better scalability.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Safe transition with preserved content, SEO structure, and full functionality without breaking your site.
                        </p>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4 lg:order-1">
                        <Image
                        src="/wordpress-to-nextjs.webp"
                        alt="WordPress to Next.js migration"
                        width={1536}
                        height={1024}
                        className="mx-auto"
                        />
                    </div>

                    </div>

                </div>
            </section>
            <section id="process" className="py-16 lg:py-24 bg-gray-50">
                <div className="container">

                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
                    WordPress to Next.js Migration Process
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">

                        {/* 1 */}
                        <div className="flex gap-3 mb-6">
                        <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Audit
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Analyze your WordPress website structure
                            </p>
                            <p className="text-sm text-gray-600">
                            Full audit of content, plugins, database, SEO structure, and performance to plan a safe and efficient migration strategy.
                            </p>
                        </div>
                        </div>

                        {/* 2 */}
                        <div className="flex gap-3">
                        <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Migrate & Rebuild
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Rebuild your website in Next.js
                            </p>
                            <p className="text-sm text-gray-600">
                            Migration of content and functionality into a modern Next.js architecture with improved performance and scalability.
                            </p>
                        </div>
                        </div>

                        {/* 3 */}
                        <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Launch & Optimize
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Ensure everything works perfectly after migration
                            </p>
                            <p className="text-sm text-gray-600">
                            Testing, SEO verification, redirects setup, and performance checks to ensure a smooth and stable launch.
                            </p>
                        </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <Image
                        src="/wordpress-to-nextjs-process.webp"
                        alt="WordPress to Next.js migration process"
                        width={1536}
                        height={1024}
                        className="mx-auto"
                        />
                    </div>

                    </div>

                </div>
            </section>
            <Testimonials />
            <section className="py-16 px-4 lg:py-24 text-center bg-black text-white">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Ready to migrate from WordPress to Next.js?
                </h2>

                <p className="text-gray-300 mt-3">
                    Upgrade your website to a modern, fast, and scalable architecture built for performance and growth.
                </p>

                <Link
                    href="/contact"
                    className="btn btn-primary mt-6"
                >
                    Start Migration
                </Link>
            </section>
            <section className="py-16 lg:py-24">
                <div className="container">

                    {/* Header */}
                    <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Frequently Asked Questions
                    </h2>
                    </div>

                    {/* FAQ list */}
                    <div className="max-w-3xl mx-auto space-y-4">

                        {faqs.map((faq, i) => (
                            <details
                            key={i}
                            className="group border rounded-2xl p-5 bg-gray-50 hover:bg-white transition"
                            >
                            <summary className="cursor-pointer font-semibold list-none flex justify-between items-center">
                                {faq.question}
                                <ChevronDown className="ml-4 text-gray-400 group-open:rotate-180 transition-transform duration-300" />
                            </summary>

                            <p className="text-gray-600 mt-3 leading-relaxed pr-12">
                                {faq.answer}
                            </p>
                            </details>
                        ))}

                        </div>
                    </div>
            </section>
        </>
    );
}