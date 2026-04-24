import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import { ChevronDown, Search, Wrench, ShieldCheck, Bug, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Fix WordPress Bugs | WP Expert",
  description:
    "Fix WordPress bugs, errors, broken layouts, plugin conflicts and performance issues. Fast and reliable WordPress troubleshooting service.",
  alternates: {
    canonical: "https://lihenko.com.ua/fix-wordpress-bugs",
  },

  openGraph: {
    title: "Fix WordPress Bugs | WP Expert",
    description:
      "Professional WordPress bug fixing service. We solve errors, crashes, and broken websites quickly.",
    url: "https://lihenko.com.ua/fix-wordpress-bugs",
    images: [
      {
        url: "/og-fix-bugs.webp",
        width: 1200,
        height: 630,
        alt: "Fix WordPress Bugs Service",
      },
    ],
  },
};

const problems = [
  "Broken layout after update",
  "White screen error",
  "Plugin conflicts",
  "Slow or crashing site",
  "WooCommerce issues",
  "Theme errors",
];

const faqs = [
  {
    question: "How fast can you fix my WordPress issue?",
    answer: "Most issues are resolved within a few hours. More complex problems may take up to 24 hours depending on the cause."
  },
  {
    question: "Do you work with broken or completely down websites?",
    answer: "Yes. I handle critical errors such as white screen, fatal errors, and broken admin access."
  },
  {
    question: "Will fixing my site break anything else?",
    answer: "No. All fixes are applied carefully and tested to ensure nothing else is affected."
  },
  {
    question: "Do you need access to my website?",
    answer:
        "Yes, temporary admin access is required to diagnose and fix the issue safely. In some cases, hosting or server access may also be needed depending on the problem."
  },
  {
    question: "Can you fix plugin or theme conflicts?",
    answer: "Yes. I identify the conflicting code and resolve compatibility issues without removing essential features."
  },
  {
    question: "Do you offer ongoing WordPress support?",
    answer: "Yes, ongoing maintenance and support options are available for long-term stability."
  }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fix WordPress Bugs",
  description:
    "Professional WordPress bug fixing service for errors, broken websites, plugin conflicts, and performance issues.",
  provider: {
    "@type": "Person",
    name: "WP Expert",
  },
  areaServed: "Worldwide",
  serviceType: "WordPress Bug Fixing",
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
                badge="WordPress Support"
                title="Fix WordPress Bugs & Errors Fast"
                subtitle="Broken website, plugin conflict, or critical error? Get it fixed quickly and safely — without breaking anything else."
            />

            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <a href="/contact" className="btn btn-primary">
                    Fix My Website
                </a>

                <a href="#process" className="btn btn-secondary">
                    See Process
                </a>
            </div>
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 mb-3">
                    Looking for a different solution?
                </p>

                <div className="flex flex-col items-center gap-2 text-sm">
                    <Link
                    href="/wordpress-maintenance"
                    className="text-primary hover:underline"
                    >
                    Need ongoing support? See WordPress maintenance
                    </Link>

                    <Link
                    href="/speed-optimization"
                    className="text-primary hover:underline"
                    >
                    Or optimize your website speed instead
                    </Link>
                </div>
            </div>

            <section className="py-8 px-4 text-center text-sm text-gray-500">
                Trusted by businesses worldwide • 5★ Client Feedback • Fast turnaround
            </section>
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-8">
                    Common WordPress Issues
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

                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-center">
                    Precise WordPress Bug Fixing
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">

                            <div className="flex gap-3">
                                <Search className="w-5 h-5 text-primary mt-1" />
                                <p className="text-gray-600">
                                Root cause analysis instead of temporary fixes.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Wrench className="w-5 h-5 text-primary mt-1" />
                                <p className="text-gray-600">
                                Stable fixes across updates, plugins, and theme changes.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                                <p className="text-gray-600">
                                Every fix is tested to prevent regressions or conflicts.
                                </p>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2 px-4 lg:order-1">
                            <Image src="/PreciseWordPressBugFixing.webp" alt="WordPress bug fixing" width={1536} height={1024} className="mx-auto" />
                        </div>
                    </div>

                    

                </div>
            </section>
            <section id="process" className="py-16 lg:py-24 bg-gray-50">
                <div className="container">

                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-center">
                    How It Works
                    </h2>
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">

                            <div className="flex gap-3 mb-6">
                                <Bug className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                <h3 className="font-medium text-2xl text-gray-900 mb-2">Diagnose</h3>
                                <p className="text-lg font-medium mb-2">Identify the root cause of the issue</p>
                                <p className="text-sm text-gray-600">
                                    I don’t guess — I investigate. Every issue is carefully analyzed to find the exact cause, whether it’s a plugin conflict, broken code, server misconfiguration, or performance bottleneck. You get a clear understanding of what’s wrong and why it happened.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                <h3 className="font-medium text-2xl text-gray-900 mb-2">Fix</h3>
                                <p className="text-lg font-medium mb-2">Apply a safe and precise solution</p>
                                <p className="text-sm text-gray-600">
                                    Once the issue is identified, we implement a clean and reliable fix. No hacks, no temporary patches — only stable, production-ready solutions that won’t break your site again.
                                </p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                <div>
                                <h3 className="font-medium text-2xl text-gray-900 mb-2">Validate</h3>
                                <p className="text-lg font-medium mb-2">Ensure everything works correctly</p>
                                <p className="text-sm text-gray-600">
                                    After the fix, I thoroughly test your website to make sure everything works flawlessly. We verify functionality, performance, and compatibility across devices so you can be confident the issue is fully resolved.
                                </p>
                                </div>
                            </div>

                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <Image src="/HowItWorksWordPressBugFixing.webp" alt="WordPress bug fixing process" width={1536} height={1024} className="mx-auto" />
                        </div>
                    </div>
                    

                </div>
            </section>
            <Testimonials />
            <section className="py-16 px-4 lg:py-24 text-center bg-black text-white">
                <h2 className="text-3xl md:text-5xl font-bold">
                    Need your WordPress fixed today?
                </h2>

                <p className="text-gray-300 mt-3">
                    Get fast expert help without delays.
                </p>

                <a
                    href="/contact"
                    className="btn btn-primary mt-6"
                >
                    Get Started
                </a>
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