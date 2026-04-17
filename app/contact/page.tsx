import PageTitle from "@/app/components/PageTitle";
import { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Get in touch for WordPress bug fixing, performance optimization, or Next.js migration. Fast response and free consultation available.",

  alternates: {
    canonical: "https://lihenko.com.ua/contact",
  },

  openGraph: {
    title: "Contact | WordPress & Next.js Expert",
    description:
      "Contact for WordPress fixes, speed optimization, or migration to Next.js. Fast response and professional support.",
    url: "https://lihenko.com.ua/contact",
    siteName: "Vladyslav Lykhenko",
    type: "website",
    images: [
      {
        url: "/og-contact.webp",
        width: 1200,
        height: 630,
        alt: "Contact WordPress & Next.js Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact | WordPress & Next.js Expert",
    description:
      "Get help with WordPress or Next.js projects. Fast response guaranteed.",
    images: ["/og-contact.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
        <PageTitle
            badge="Contact"
            title="Let’s Work Together"
            subtitle="Tell me about your project — I usually respond within 24 hours."
        />
        <section className="py-16 lg:py-24">
            <div className="container max-w-5xl grid lg:grid-cols-2 gap-12">

                {/* Form */}
                <div className="px-2 py-3 md:p-6 border rounded-2xl bg-white">
                    <h2 className="text-2xl font-semibold mb-6">
                        Send a message
                    </h2>

                    <ContactForm />
                </div>

                {/* Info */}
                <div className="space-y-6 lg:space-y-12">

                    <div className="px-6 py-12 border rounded-2xl bg-gray-50">
                        <h3 className="font-semibold mb-2">What I can help with</h3>
                        <p className="text-sm text-gray-600">
                        WordPress bugs, performance optimization, WooCommerce issues, and migration to Next.js.
                        </p>
                    </div>

                    <div className="px-6 py-12 border rounded-2xl bg-gray-50">
                        <h3 className="font-semibold mb-2">Response time</h3>
                        <p className="text-sm text-gray-600">
                        Usually within 24 hours, often much faster.
                        </p>
                    </div>

                    <div className="px-6 py-12 border rounded-2xl bg-gray-50">
                        <h3 className="font-semibold mb-2">Free consultation</h3>
                        <p className="text-sm text-gray-600">
                        I’ll review your website and suggest the best solution before any work starts.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    </>
  );
}