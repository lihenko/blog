import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";
import FreeAuditForm from "../components/FreeAuditForm";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Request a free website audit. Get insights on performance, SEO, and issues affecting your WordPress or Next.js site.",

  alternates: {
    canonical: "https://lihenko.com.ua/free-audit",
  },

  openGraph: {
    title: "Free Website Audit",
    description:
      "Get a free audit of your website. Discover performance issues, SEO problems, and improvement opportunities.",
    url: "https://lihenko.com.ua/free-audit",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-free-audit.webp",
        width: 1200,
        height: 630,
        alt: "Free Website Audit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Free Website Audit",
    description:
      "Get a free audit of your WordPress or Next.js website.",
    images: ["/og-free-audit.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeAuditPage() {
  return (
    <>      
        <PageTitle
            badge="Free Audit"
            title="Get a Free Website Audit"
            subtitle="I’ll analyze your website and show what’s slowing it down, hurting SEO, or blocking growth."
        />
        <section className="py-16 lg:py-24">
            <div className="container max-w-3xl">
                <FreeAuditForm />
            </div>
        </section>
    </>
    );
}