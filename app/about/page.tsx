import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";
import { Zap, Brain, Rocket } from "lucide-react";
import Testimonials from "@/app/components/Testimonials";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About me",
  description:
    "Experienced web developer specializing in WordPress optimization, bug fixing, and Next.js migration. Focused on performance, SEO, and scalable web solutions.",

  alternates: {
    canonical: "https://lihenko.com.ua/about",
  },

  openGraph: {
    title: "About | WordPress & Next.js Expert",
    description:
      "Web developer focused on WordPress performance, bug fixing, and modern Next.js migration for fast and scalable websites.",
    url: "https://lihenko.com.ua/about",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-about.webp",
        width: 1200,
        height: 630,
        alt: "About WordPress & Next.js Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About | WordPress & Next.js Expert",
    description:
      "WordPress optimization, bug fixing, and Next.js migration expert.",
    images: ["/og-about.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
    return (
        <>
            <PageTitle
                badge="About"
                title="WordPress & Next.js Developer"
                subtitle={
                <>
                    I build fast, scalable websites by optimizing WordPress<br />
                    and migrating to Next.js.
                </>
                }
            />
            <section className="py-16 lg:pt-24 lg:pb-0">
                <div className="container">
                    <div className="flex flex-wrap -mx-4 items-center">
                        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 lg:order-2">
                            <img
                            src="/VladyslavLykhenkoWithNotebook.webp"
                            alt="Vladyslav Lykhenko - WordPress & Next.js Developer"
                            className="mx-auto"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 px-4 lg:order-1 xl:px-36">
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left">
                                What I Do
                            </h2>

                            <p className="text-gray-600 text-lg text-center leading-relaxed lg:text-left">
                            I specialize in WordPress performance optimization, debugging complex issues,
                            and migrating legacy websites to modern Next.js architecture. My focus is
                            on improving speed, SEO, and long-term scalability.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            

            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="container text-center">

                    <h2 className="text-3xl md:text-5xl font-semibold mb-12">
                    Why Work With Me
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                    {/* Performance */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-lg transition text-left">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Zap className="w-5 h-5" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                        Performance First
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        Every decision is focused on Core Web Vitals, speed, and real user experience.
                        </p>
                    </div>

                    {/* Clean Architecture */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-lg transition text-left">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Brain className="w-5 h-5" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                        Clean Architecture
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        No unnecessary plugins or bloated code — only maintainable, scalable solutions.
                        </p>
                    </div>

                    {/* Modern Stack */}
                    <div className="p-6 bg-white border rounded-2xl hover:shadow-lg transition text-left">
                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Rocket className="w-5 h-5" />
                        </div>

                        <h3 className="text-lg font-semibold mb-2">
                        Modern Stack
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        WordPress where it makes sense, Next.js where performance and scalability matter.
                        </p>
                    </div>

                    </div>

                </div>
            </section>
            <Testimonials />
            <section className="py-16 lg:py-24 bg-white">
                <div className="container max-w-4xl text-center">

                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                    Ready to improve your website?
                    </h2>

                    <p className="text-gray-600 mt-4 text-lg">
                    Let’s fix performance issues, optimize WordPress, or migrate your site to Next.js.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">

                    <Link href="/contact" className="btn btn-primary">
                        Get a Free Consultation
                    </Link>

                    <Link href="/services" className="btn btn-outline">
                        View Services
                    </Link>

                    </div>

                </div>
            </section>
        </>
    );
}