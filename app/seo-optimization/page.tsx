import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import {
  ChevronDown,
  Search,
  Wrench,
  ShieldCheck,
  Cog,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Optimization",
  description:
    "Improve rankings, fix technical SEO issues, and optimize your website for search visibility, better traffic, and stronger conversion performance.",

  alternates: {
    canonical: "https://lihenko.com.ua/seo-optimization",
  },

  openGraph: {
    title: "SEO Optimization | Technical & On-Page SEO Expert",
    description:
      "Get technical SEO fixes, on-page optimization, and a clear strategy to improve visibility, rankings, and organic traffic.",
    url: "https://lihenko.com.ua/seo-optimization",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-seo-optimization.webp",
        width: 1200,
        height: 630,
        alt: "SEO Optimization Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Optimization Expert",
    description:
      "Fix technical SEO issues, improve on-page signals, and grow organic visibility.",
    images: ["/og-seo-optimization.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const problems = [
  "Important pages are not ranking for target keywords",
  "Technical SEO issues are blocking crawling and indexing",
  "Metadata, headings, and internal linking are poorly optimized",
  "Thin or unfocused content fails to match search intent",
  "Slow, messy site structure weakens SEO performance",
  "Traffic is coming in, but pages are not converting well",
];

const faqs = [
  {
    question: "What is included in SEO optimization?",
    answer:
      "SEO optimization usually includes a technical audit, on-page improvements, metadata updates, internal linking recommendations, content alignment, and fixes that help search engines better crawl and understand your website.",
  },
  {
    question: "How long does SEO optimization take?",
    answer:
      "The first round of optimization is often completed within a few days, depending on website size and complexity. SEO results usually build over time as search engines recrawl and re-evaluate updated pages.",
  },
  {
    question: "Can you fix technical SEO issues on WordPress?",
    answer:
      "Yes. I work with WordPress websites to fix indexing, crawling, metadata, canonical, sitemap, redirect, and structural SEO issues.",
  },
  {
    question: "Will SEO optimization improve rankings immediately?",
    answer:
      "Some improvements can lead to faster indexing and better visibility, but ranking growth depends on competition, content quality, authority, and how search engines process the changes over time.",
  },
  {
    question: "Do you optimize existing pages or create a strategy too?",
    answer:
      "Both are possible. I can optimize existing pages, improve technical foundations, and help shape a practical SEO direction based on your goals and current site condition.",
  },
  {
    question: "What do you need to start?",
    answer:
      "Usually I need website access, your main target pages or services, and if available, access to Google Search Console and analytics tools for better diagnosis.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Optimization",
  description:
    "Professional SEO optimization service focused on technical SEO, on-page improvements, site structure, and organic visibility growth.",

  provider: {
    "@type": "Person",
    name: "Vladyslav Lykhenko",
  },

  areaServed: "Worldwide",

  serviceType: "SEO Optimization Service",

  category: "SEO Services",

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

export default function SeoOptimizationPage() {
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
        badge="SEO Service"
        title="SEO Optimization for Better Rankings and Traffic"
        subtitle="Fix technical SEO issues, improve on-page relevance, and strengthen your website's visibility in search results."
      />

      <div className="flex flex-wrap gap-3 justify-center mt-6">
        <Link href="/contact" className="btn btn-primary">
          Optimize My Website
        </Link>

        <Link href="#process" className="btn btn-secondary">
          See SEO Process
        </Link>
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-sm text-gray-500 mb-3">
          Looking for a related solution?
        </p>

        <div className="flex flex-col items-center gap-2 text-sm">
          <Link href="/speed-optimization" className="text-primary hover:underline">
            Improve performance to support better SEO results
          </Link>

          <Link href="/fix-wordpress-bugs" className="text-primary hover:underline">
            Resolve technical website issues before deeper SEO work
          </Link>
        </div>
      </div>

      <section className="py-8 px-4 text-center text-sm text-gray-500">
        Trusted by businesses worldwide • 5★ Client Feedback • Clear process
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center font-bold mb-16">
            What Holds Your SEO Back
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((p) => (
              <div key={p} className="p-4 bg-white border rounded-xl">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
            SEO Optimization That Improves Search Visibility
          </h2>

          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">
              <div className="flex gap-3">
                <Search className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-600">
                  SEO audit to uncover crawling, indexing, structure, and on-page issues.
                </p>
              </div>

              <div className="flex gap-3">
                <Wrench className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-600">
                  Practical fixes for metadata, headings, internal links, and page relevance.
                </p>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                <p className="text-gray-600">
                  Safe implementation that improves SEO without disrupting design or core functionality.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:order-1">
              <Image
                src="/SEOOptimization.webp"
                alt="SEO optimization"
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
            SEO Optimization Process
          </h2>

          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">
              <div className="flex gap-3 mb-6">
                <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-2xl text-gray-900 mb-2">
                    Audit
                  </h3>
                  <p className="text-lg font-medium mb-2">
                    Find the biggest SEO blockers
                  </p>
                  <p className="text-sm text-gray-600">
                    Review indexing, crawlability, metadata, headings, internal linking, page intent, and technical setup to uncover issues that limit organic growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-2xl text-gray-900 mb-2">
                    Optimize
                  </h3>
                  <p className="text-lg font-medium mb-2">
                    Apply meaningful on-page and technical improvements
                  </p>
                  <p className="text-sm text-gray-600">
                    Refine metadata, page structure, internal linking, technical signals, and content alignment to make pages more understandable and competitive in search.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-medium text-2xl text-gray-900 mb-2">
                    Validate
                  </h3>
                  <p className="text-lg font-medium mb-2">
                    Confirm clean implementation and next steps
                  </p>
                  <p className="text-sm text-gray-600">
                    Check that changes are correctly applied, pages remain healthy, and the site is better prepared for improved rankings, visibility, and ongoing SEO growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <Image
                src="/SEOOptimizationProcess.webp"
                alt="SEO optimization process"
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
          Ready to improve your SEO?
        </h2>

        <p className="text-gray-300 mt-3">
          Get a practical SEO upgrade focused on visibility, traffic, and real business results.
        </p>

        <Link href="/contact" className="btn btn-primary mt-6">
          Get Started
        </Link>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

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
