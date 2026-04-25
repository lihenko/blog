import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import { ChevronDown, Search, Wrench, ShieldCheck, Bug, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "WordPress Speed Optimization",
  description:
    "Improve WordPress speed, Core Web Vitals, and overall performance. Reduce load time, fix slow websites, and boost conversions with expert optimization.",

  alternates: {
    canonical: "https://lihenko.com.ua/speed-optimization",
  },

  openGraph: {
    title: "WordPress Speed Optimization | Performance Expert",
    description:
      "Make your WordPress website faster, improve Core Web Vitals, and boost SEO rankings with professional speed optimization.",
    url: "https://lihenko.com.ua/speed-optimization",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-speed-optimization.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Speed Optimization Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Speed Optimization Expert",
    description:
      "Speed up your WordPress website, improve performance and Core Web Vitals.",
    images: ["/og-speed-optimization.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const problems = [
  "Excessive page load times affecting user experience",
  "Poor Core Web Vitals scores impacting SEO performance",
  "High bounce rates caused by slow website speed",
  "Unoptimized images and media-heavy pages",
  "Overloaded WordPress themes and plugin conflicts",
  "Slow WooCommerce checkout reducing conversions",
];

const faqs = [
  {
    question: "How long does WordPress speed optimization take?",
    answer:
      "Most websites are optimized within 24–48 hours depending on size, plugins, and server configuration."
  },
  {
    question: "What results can I expect after optimization?",
    answer:
      "You can expect faster loading times, improved Core Web Vitals scores, better SEO performance, and lower bounce rates."
  },
  {
    question: "Will you change my design or break my website?",
    answer:
      "No. Optimization is done safely without affecting your design or functionality."
  },
  {
    question: "Do you optimize WooCommerce stores?",
    answer:
      "Yes. I optimize WooCommerce performance including product pages, cart, and checkout speed."
  },
  {
    question: "What do you need to start optimization?",
    answer:
      "Temporary admin access and, in some cases, hosting access for deeper performance tuning."
  },
  {
    question: "Do you offer ongoing performance maintenance?",
    answer:
      "Yes. Continuous monitoring and optimization are available for long-term performance stability."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Speed Optimization",
  description:
    "Professional WordPress speed optimization service focused on Core Web Vitals improvements, performance tuning, and load time reduction.",

  provider: {
    "@type": "Person",
    name: "Vladyslav Lykhenko",
  },

  areaServed: "Worldwide",

  serviceType: "Website Performance Optimization",

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
                badge="Performance Optimization"
                title="Speed Up Your WordPress Website"
                subtitle="Improve Core Web Vitals, reduce loading time, and boost SEO performance with expert WordPress optimization."
            />

            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Link href="/contact" className="btn btn-primary">
                    Speed Up My Website
                </Link>

                <Link href="#process" className="btn btn-secondary">
                    See Optimization Process
                </Link>
            </div>
            <div className="mt-8 text-center px-4">
                <p className="text-sm text-gray-500 mb-3">
                    Looking for a different solution?
                </p>

                <div className="flex flex-col items-center gap-2 text-sm">
                    <Link
                    href="/wordpress-to-nextjs"
                    className="text-primary hover:underline"
                    >
                    For even better performance, consider moving to Next.js
                    </Link>

                    <Link
                    href="/fix-wordpress-bugs"
                    className="text-primary hover:underline"
                    >
                    Fix technical issues before optimizing your site
                    </Link>
                </div>
            </div>

            <section className="py-8 px-4 text-center text-sm text-gray-500">
                Trusted by businesses worldwide • 5★ Client Feedback • Fast turnaround
            </section>
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-16">
                        What Is Slowing Down Your Website
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
                    WordPress Speed Optimization That Delivers Results
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">

                        <div className="flex gap-3">
                        <Search className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Deep performance audit to identify what slows down your website.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <Wrench className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Core Web Vitals optimization for better SEO and user experience.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Safe optimizations that keep your design, features, and plugins intact.
                        </p>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4 lg:order-1">
                        <Image
                        src="/SpeedOptimization.webp"
                        alt="WordPress speed optimization"
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
                    Speed Optimization Process
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">

                        {/* 1 */}
                        <div className="flex gap-3 mb-6">
                        <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Diagnose
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Identify performance bottlenecks
                            </p>
                            <p className="text-sm text-gray-600">
                            Deep analysis of Core Web Vitals, server response time, plugins, and frontend performance to identify what slows down the website.
                            </p>
                        </div>
                        </div>

                        {/* 2 */}
                        <div className="flex gap-3">
                        <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Optimize
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Apply performance improvements
                            </p>
                            <p className="text-sm text-gray-600">
                            Code optimization, image compression, caching improvements, database cleanup, and removal of performance bottlenecks.
                            </p>
                        </div>
                        </div>

                        {/* 3 */}
                        <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Validate
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Ensure stable and fast performance
                            </p>
                            <p className="text-sm text-gray-600">
                            Full testing across devices and performance metrics to ensure improved speed, stability, and better Core Web Vitals scores.
                            </p>
                        </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <Image
                        src="/SpeedOptimizationProcess.webp"
                        alt="WordPress speed optimization process"
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
                    Ready to improve your website speed?
                </h2>

                <p className="text-gray-300 mt-3">
                    Get expert WordPress performance optimization without delays.
                </p>

                <Link
                    href="/contact"
                    className="btn btn-primary mt-6"
                >
                    Get Started
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