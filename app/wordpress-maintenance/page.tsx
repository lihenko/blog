import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import { ChevronDown, Search, Wrench, ShieldCheck, Bug, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";


export const metadata: Metadata = {
  title: "WordPress Maintenance Service",
  description:
    "Reliable WordPress maintenance service. регулярні оновлення, безпека, резервні копії та підтримка для стабільної роботи вашого сайту.",

  alternates: {
    canonical: "https://lihenko.com.ua/wordpress-maintenance",
  },

  openGraph: {
    title: "WordPress Maintenance Service | Ongoing Support",
    description:
      "Keep your WordPress site secure, updated, and running smoothly with professional maintenance and support.",
    url: "https://lihenko.com.ua/wordpress-maintenance",
    images: [
      {
        url: "/og-maintenance.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Maintenance Service",
      },
    ],
  },
};

const features = [
  "Regular WordPress core, plugin & theme updates",
  "Security monitoring & protection",
  "Performance optimization & speed tuning",
  "Automated backups & fast recovery",
  "WooCommerce maintenance & support",
  "Ongoing technical support & assistance",
];

const faqs = [
  {
    question: "What does WordPress maintenance include?",
    answer:
      "It includes regular updates, security monitoring, backups, performance optimization, and ongoing technical support to keep your website stable and secure.",
  },
  {
    question: "How often do you update my website?",
    answer:
      "Core, plugins, and themes are checked and updated regularly, typically on a weekly basis or whenever updates are required.",
  },
  {
    question: "Will updates break my website?",
    answer:
      "Updates are applied carefully and tested to ensure compatibility. A full backup is created before any changes are made.",
  },
  {
    question: "Do you provide backups?",
    answer:
      "Yes. Regular automated backups are included, allowing your website to be restored quickly if anything goes wrong.",
  },
  {
    question: "Can you maintain WooCommerce websites?",
    answer:
      "Yes. I provide full WooCommerce maintenance, including updates, stability checks, and performance optimization.",
  },
  {
    question: "Is this a one-time service or ongoing?",
    answer:
      "This is an ongoing maintenance service designed to keep your website secure, updated, and performing at its best.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "WordPress Maintenance Service",
  description:
    "Ongoing WordPress maintenance including updates, security monitoring, backups, and technical support.",
  provider: {
    "@type": "Person",
    name: "WP Expert",
  },
  areaServed: "Worldwide",
  serviceType: "WordPress Maintenance",
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

export default function WordPressMaintenancePage() {
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
                badge="Maintenance & Support"
                title="We Take Care of Your WordPress Site"
                subtitle="No more updates, errors, or downtime. Just a fast, secure, and reliable website."
            />

            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <a href="/contact" className="btn btn-primary">
                    Get Maintenance Plan
                </a>

                <a href="#process" className="btn btn-secondary">
                    How It Works
                </a>
            </div>
            <section className="py-10 px-4 text-center">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <div>💰 Plans from $25/month</div>
                    <div>🔁 Cancel anytime</div>
                    <div>🛡️ Security monitoring included</div>
                    <div>⚡ Priority support</div>
                </div>

                <div className="mt-4 text-sm text-gray-500">
                    Trusted by businesses worldwide • 5★ Client Feedback • Fast turnaround
                </div>
            </section>
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container max-w-5xl mx-auto">

                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-8">
                    What’s Included in WordPress Maintenance
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                    {features.map((p) => (
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
                    Reliable WordPress Maintenance & Fixes
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">

                        <div className="flex gap-3">
                        <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <p className="text-gray-600">
                            Deep analysis to identify and prevent the root cause of issues.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <Wrench className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <p className="text-gray-600">
                            Long-term stable fixes that remain secure after updates and changes.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <p className="text-gray-600">
                            Every change is tested to ensure no conflicts or regressions appear.
                        </p>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4 lg:order-1">
                        <Image
                        src="/WordPressMaintenanceAndBugFixing.webp"
                        alt="WordPress maintenance and bug fixing"
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
                    Maintenance & Support Process
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">

                    <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">

                        <div className="flex gap-3 mb-6">
                        <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Analyze
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Identify issues and system weak points
                            </p>
                            <p className="text-sm text-gray-600">
                            Website structure, performance, and configuration are reviewed to detect issues and potential risks before they cause problems.
                            </p>
                        </div>
                        </div>

                        <div className="flex gap-3">
                        <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Maintain & Fix
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Apply stable updates and improvements
                            </p>
                            <p className="text-sm text-gray-600">
                            Updates, fixes, and optimizations are applied using safe, tested methods to keep the website stable and secure.
                            </p>
                        </div>
                        </div>

                        <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Monitor & Support
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Ensure long-term stability and performance
                            </p>
                            <p className="text-sm text-gray-600">
                            Continuous monitoring and ongoing support ensure consistent performance, security, and stability over time.
                            </p>
                        </div>
                        </div>

                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <Image
                        src="/WordPressMaintenanceWorkflow.webp"
                        alt="WordPress maintenance workflow"
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
                    Keep Your Website Secure & Updated — Without the Headaches
                </h2>

                <p className="text-gray-300 mt-3">
                    Get reliable maintenance, security updates, and expert support — so your website stays fast, secure, and problem-free.
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