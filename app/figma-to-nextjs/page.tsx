import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import Testimonials from "@/app/components/Testimonials";
import { ChevronDown, Search, Wrench, ShieldCheck, Bug, Cog, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Figma to Next.js Development",
  description:
    "Convert your Figma design into a fast, responsive Next.js website with clean code, strong SEO foundations, and high performance.",

  alternates: {
    canonical: "https://lihenko.com.ua/figma-to-nextjs",
  },

  openGraph: {
    title: "Figma to Next.js Development | Performance Expert",
    description:
      "Turn your Figma design into a production-ready Next.js website with responsive layouts, fast performance, and modern frontend best practices.",
    url: "https://lihenko.com.ua/figma-to-nextjs",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-figma-to-nextjs.webp",
        width: 1200,
        height: 630,
        alt: "Figma to Next.js Development Service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Figma to Next.js Expert",
    description:
      "Convert Figma to Next.js with responsive, fast, and SEO-friendly implementation.",
    images: ["/og-figma-to-nextjs.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const problems = [
  "Static Figma designs do not show how layouts should behave across real screen sizes and devices",
  "Design files often miss responsive rules, spacing logic, and edge cases needed for production",
  "Without a proper frontend build, beautiful UI concepts can turn into slow and inconsistent websites",
  "Inconsistent component structure makes future scaling and content updates harder to manage",
  "Animations and interactions from the design need careful implementation to feel smooth and polished",
  "Poor handoff from design to code can lead to visual mismatches, bugs, and unnecessary rework",
];


const faqs = [
  {
    question: "What does Figma to Next.js development include?",
    answer:
      "It includes converting your Figma design into a fully functional Next.js website with responsive layouts, reusable components, clean code, and production-ready frontend implementation.",
  },
  {
    question: "Will the final website match my Figma design exactly?",
    answer:
      "Yes. The goal is to translate the design as accurately as possible while also ensuring it works well across devices, browsers, and real-world content scenarios.",
  },
  {
    question: "Is the website responsive on mobile and tablet?",
    answer:
      "Yes. Responsive development is part of the process, so the layout is adapted for desktop, tablet, and mobile screens.",
  },
  {
    question: "Will the website be optimized for performance?",
    answer:
      "Yes. Next.js allows us to build fast-loading pages with optimized images, efficient rendering, and strong Core Web Vitals performance.",
  },
  {
    question: "Can you add animations and interactions from the design?",
    answer:
      "Yes. Hover states, transitions, scroll animations, and interactive UI elements can be implemented to match the intended user experience from Figma.",
  },
  {
    question: "Do you also handle SEO setup in Next.js?",
    answer:
      "Yes. We can implement metadata, semantic HTML, structured content, and technical SEO foundations to help the website perform well in search engines.",
  },
];


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Figma to Next.js Development",
  description:
    "Professional Figma to Next.js development service focused on converting UI designs into fast, responsive, SEO-friendly websites with clean code and modern frontend architecture.",

  provider: {
    "@type": "Person",
    name: "Vladyslav Lykhenko",
  },

  areaServed: "Worldwide",

  serviceType: "Figma to Next.js Development",

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
                badge="Development Service"
                title="Convert Figma to Next.js"
                subtitle="Turn your Figma design into a fast, responsive, and production-ready Next.js website with clean code, strong performance, and modern frontend best practices."
            />


            <div className="flex flex-wrap gap-3 justify-center mt-6">
                <Link href="/contact" className="btn btn-primary">
                    Start Your Project
                </Link>

                <Link href="#process" className="btn btn-secondary">
                    See Development Process
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
                    Already have a WordPress site? Migrate to Next.js instead
                    </Link>

                    <Link
                    href="/speed-optimization"
                    className="text-primary hover:underline"
                    >
                    Or optimize your current website instead
                    </Link>
                </div>
            </div>

            <section className="py-8 px-4 text-center text-sm text-gray-500">
                Trusted by businesses worldwide • 5★ Client Feedback • Fast turnaround
            </section>
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl text-center font-bold mb-8">
                    Common Challenges When Turning Figma Into a Real Website
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
                    Figma to Next.js Development That Brings Your Design to Life
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 lg:order-2 space-y-6 mb-8 lg:mb-0">
                        <div className="flex gap-3">
                        <Search className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Careful review of your Figma file, layout structure, components, and responsive behavior before development starts.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <Wrench className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Clean Next.js implementation with reusable components, responsive layout logic, and production-ready frontend architecture.
                        </p>
                        </div>

                        <div className="flex gap-3">
                        <ShieldCheck className="w-5 h-5 text-primary mt-1" />
                        <p className="text-gray-600">
                            Accurate design-to-code delivery with strong performance, consistent UI quality, and attention to SEO fundamentals.
                        </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4 lg:order-1">
                        <Image
                        src="/figma-to-nextjs.webp"
                        alt="Figma to Next.js development"
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
                    Figma to Next.js Development Process
                    </h2>

                    <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full lg:w-1/2 px-4 space-y-8 mb-8 lg:mb-0">
                        <div className="flex gap-3 mb-6">
                        <Search className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Review
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Analyze your Figma design structure
                            </p>
                            <p className="text-sm text-gray-600">
                            Careful review of layouts, components, spacing, responsive states, and design details before development begins.
                            </p>
                        </div>
                        </div>

                        <div className="flex gap-3">
                        <Cog className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Build
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Turn the design into a Next.js website
                            </p>
                            <p className="text-sm text-gray-600">
                            Development of reusable components and responsive pages in Next.js with clean structure, strong performance, and accurate design implementation.
                            </p>
                        </div>
                        </div>

                        <div className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                            <h3 className="font-medium text-2xl text-gray-900 mb-2">
                            Polish & Launch
                            </h3>
                            <p className="text-lg font-medium mb-2">
                            Refine the final result for production
                            </p>
                            <p className="text-sm text-gray-600">
                            Final QA, responsive checks, performance improvements, and visual refinements to ensure the website is ready to launch.
                            </p>
                        </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 px-4">
                        <Image
                        src="/figma-to-nextjs-process.webp"
                        alt="Figma to Next.js development process"
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
                    Ready to turn your Figma design into Next.js?
                </h2>

                <p className="text-gray-300 mt-3">
                    Build a fast, responsive, and production-ready website based on your design with clean implementation and modern frontend standards.
                </p>

                <Link
                    href="/contact"
                    className="btn btn-primary mt-6"
                >
                    Start Your Project
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