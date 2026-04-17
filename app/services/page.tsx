import Link from "next/link";
import type { Metadata } from "next";
import PageTitle from "@/app/components/PageTitle";
import { Bug, Wrench, Gauge, Code2 } from "lucide-react";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Services & Migration",
  description:
    "WordPress services including bug fixing, maintenance, speed optimization, and migration to Next.js. Improve performance, stability, and scalability.",

  alternates: {
    canonical: "https://lihenko.com.ua/services",
  },

  openGraph: {
    title: "WordPress Services & Next.js Development",
    description:
      "Fix WordPress issues, maintain websites, improve speed, or migrate to Next.js for better performance and scalability.",
    url: "https://lihenko.com.ua/services",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-services.webp",
        width: 1200,
        height: 630,
        alt: "WordPress & Next.js Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Services & Optimization",
    description:
      "Bug fixing, maintenance, speed optimization, and WordPress to Next.js migration services.",
    images: ["/og-services.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};




const services = [
  {
    title: "Fix WordPress Bugs",
    description: "Fix errors, crashes, plugin conflicts and broken layouts.",
    href: "/fix-wordpress-bugs",
    icon: Bug,
  },
  {
    title: "WordPress Maintenance",
    description: "Regular updates, security, backups and site stability.",
    href: "/wordpress-maintenance",
    icon: Wrench,
  },
  {
    title: "Speed Optimization",
    description: "Improve Core Web Vitals, loading speed and SEO performance.",
    href: "/speed-optimization",
    icon: Gauge,
  },
  {
    title: "WordPress to Next.js",
    description: "Migrate to modern React architecture for better performance.",
    href: "/wordpress-to-nextjs",
    icon: Code2,
  },
];


export default function ServicesPage() {
  return (
    <>
      <PageTitle
            badge="Services"
            title="All Services"
            subtitle="WordPress optimization, performance improvements, and modern Next.js migrations tailored for speed, SEO, and scalability."
        />
      <section className="py-16 lg:py-24">
        <div className="container max-w-4xl text-center">

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            High-performance web solutions
            </h2>

            <p className="text-gray-600 text-lg">
            I help businesses improve website speed, fix WordPress issues, and migrate legacy systems to modern Next.js architecture for better performance, SEO, and scalability.
            </p>

        </div>
      </section>
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container">

            <Services />

        </div>
      </section>
      <section className="py-16 lg:py-24 text-center">
        <div className="container">

            <h2 className="text-3xl md:text-5xl font-bold">
            Need help with your website?
            </h2>

            <p className="text-gray-600 mt-3">
            Let’s improve performance or migrate your WordPress site to a modern stack.
            </p>

            <Link href="/contact" className="btn btn-primary mt-6">
            Get a Free Consultation
            </Link>

        </div>
      </section>
    </>
  );
}