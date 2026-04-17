import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif',
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    default:
      "WordPress Expert | WordPress Speed Optimization & Fixes",
    template: "%s | WordPress & Next.js Expert",
  },

  description:
    "WordPress expert specializing in speed optimization, bug fixing, Core Web Vitals, and migration to Next.js.",

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },

  keywords: [
    "WordPress expert",
    "WordPress speed optimization",
    "Core Web Vitals optimization",
    "fix WordPress issues",
    "WordPress developer",
    "Next.js migration",
    "convert WordPress to Next.js",
    "website performance optimization",
    "slow website fix",
    "SEO optimization service",
    "freelance web developer",
    "frontend performance optimization",
  ],

  authors: [{ name: "Vladyslav Lykhenko" }],
  creator: "Vladyslav Lykhenko",
  publisher: "Vladyslav Lykhenko",

  metadataBase: new URL("https://lihenko.com.ua"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "WordPress Expert | Speed Optimization & Next.js Migration Services",
    description:
      "Fix WordPress issues, improve Core Web Vitals, speed up slow websites, and migrate to Next.js. Professional freelance developer services.",
    url: "https://lihenko.com.ua",
    siteName: "WordPress & Next.js Expert Services",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-services.webp",
        width: 1200,
        height: 630,
        alt: "WordPress Speed Optimization & Next.js Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Speed Optimization & Next.js Expert",
    description:
      "Fix WordPress issues, improve performance, and migrate to Next.js.",
    images: ["/og-services.webp"],
    creator: "@vladlihenko",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lihenko.com.ua/#organization",
      name: "Vladyslav Lykhenko",
      url: "https://lihenko.com.ua",
      description:
        "WordPress & Next.js expert specializing in speed optimization, bug fixing, and migration.",
    },
    {
      "@type": "WebSite",
      "@id": "https://lihenko.com.ua/#website",
      url: "https://lihenko.com.ua",
      name: "WordPress & Next.js Expert",
      description:
        "WordPress expert offering speed optimization, bug fixing, and migration to Next.js.",
      publisher: {
        "@id": "https://lihenko.com.ua/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>
        {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
