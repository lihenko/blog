import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronDown } from "lucide-react";
import Services from "@/app/components/Services";
import Testimonials from "@/app/components/Testimonials";
import CTASection from "@/app/components/CTASection";
import HowIWork from "@/app/components/HowIWork";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://lihenko.com.ua",
  },
};

const faqs = [
  {
    question: "Why is my WordPress website slow?",
    answer:
      "WordPress websites become slow due to heavy themes, too many plugins, unoptimized images, poor hosting, or lack of caching and performance optimization.",
  },
  {
    question: "Can you fix WordPress errors and broken sites?",
    answer:
      "Yes, I fix all types of WordPress issues including plugin conflicts, white screen errors, broken layouts, and database problems.",
  },
  {
    question: "Do you improve Google Core Web Vitals?",
    answer:
      "Yes, I optimize websites to improve Core Web Vitals including LCP, CLS, and INP for better Google rankings and user experience.",
  },
  {
    question: "Can you migrate WordPress to Next.js?",
    answer:
      "Yes, I convert WordPress websites into fast, modern Next.js applications with better performance, SEO, and scalability.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Most fixes and optimizations are completed within 24–72 hours depending on complexity.",
  },
];

const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

import { testimonials } from "@/app/data/testimonials";

const averageRating =
  testimonials.reduce((acc, t) => acc + t.rating, 0) /
  testimonials.length;

export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WP Expert",
  url: "https://lihenko.com.ua",
  logo: "https://lihenko.com.ua/logo.png",
  description:
    "WordPress developer specializing in bug fixes, speed optimization, maintenance and Next.js migration.",

  sameAs: [
    "https://www.fiverr.com/s/kLB16gW",
    "https://www.upwork.com/freelancers/~0111c46c23c7c497bd",
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: Number(averageRating.toFixed(1)),
    reviewCount: testimonials.length,
  },
};  

export default function Home() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homeSchema),
      }}
    />
    <section className="py-8 lg:pt-10 lg:pb-0">
      <div className="container">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full px-4 mb-6 lg:mb-0 lg:w-1/2 lg:order-2">
            <Image
              src="/VladyslavLykhenko.webp"
              alt="Vladyslav Lykhenko"
              width={450}
              height={698}
              className="mx-auto"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="w-full px-4 text-center lg:text-left lg:w-1/2 lg:order-1">

            {/* Badge */}
            <div className="inline-block mb-4 px-3 py-1 text-sm bg-gray-100 rounded-full">
              WordPress Expert • Fast & Reliable
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Fix WordPress Issues,<br />Speed Up Your Site<br/> or Convert it to{" "}
              <span className="text-primary">Next.js</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-600 text-lg mb-8">
              I help businesses fix bugs, improve performance and turn slow WordPress
              websites into fast, modern applications with Next.js.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              <Link href="/free-audit" className="btn btn-primary">
                Get Free Audit
              </Link>

              <Link href="/services" className="btn btn-secondary">
                View All Services
              </Link>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Free audit • No obligation • Fast response
            </p>

            {/* Trust */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 justify-center lg:justify-start">
              <div>⭐ 5.0 Rated</div>
              <div>⚡ Fast Delivery</div>
              <div>🛠 WordPress & Next.js Expert</div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <section className="relative bg-gray-100 py-16 lg:py-24">
      <div className="container">

        {/* Floating overlap header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-sm bg-white shadow-sm rounded-full">
            What I Do
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Services That Make Your Website <br />
            <span className="text-primary">Fast & Reliable</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From fixing WordPress issues to full performance optimization and migration to Next.js.
          </p>
        </div>

        {/* Cards */}
        <Services />

      </div>
    </section>
    

    <section className="py-16 lg:py-24">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose Me
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            I focus on performance, clean code and real business results — not just “pretty websites”.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Item */}
          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Performance First Approach
            </h3>
            <p className="text-gray-600">
              Every website is optimized for Core Web Vitals, speed and Google ranking from the start.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Clean & Scalable Code
            </h3>
            <p className="text-gray-600">
              No messy plugins or bloated themes — just maintainable, modern and scalable solutions.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick turnaround without sacrificing quality. Bugs and issues are fixed efficiently.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              WordPress + Next.js Expert
            </h3>
            <p className="text-gray-600">
              Deep experience in both ecosystems allows smart migrations and hybrid solutions.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              SEO & Conversion Focused
            </h3>
            <p className="text-gray-600">
              Websites are built not just to load fast, but to bring traffic and clients.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-md transition">
            <CheckCircle className="text-green-500 w-6 h-6 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Reliable Communication
            </h3>
            <p className="text-gray-600">
              Clear updates, fast responses and transparent workflow from start to finish.
            </p>
          </div>

        </div>
      </div>
    </section>
    <Testimonials />
    <CTASection />
    <HowIWork />
    <section className="py-16 lg:py-24">
      <div className="container">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Everything you need to know about WordPress fixes, speed optimization and Next.js migration.
          </p>
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