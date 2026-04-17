import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | WP Expert",
  description:
    "The page you're looking for doesn't exist. Explore WordPress speed optimization, bug fixes, and Next.js migration services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">

        {/* 404 number */}
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 leading-7 max-w-2xl mx-auto">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back to something useful.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">

          <Link
            href="/"
            className="btn btn-primary w-40!"
          >
            Go to Home
          </Link>

          <Link
            href="/services"
            className="btn btn-outline w-40!"
          >
            View Services
          </Link>

          <Link
            href="/contact"
            className="btn btn-ghost w-40!"
          >
            Contact
          </Link>
        </div>

        {/* optional hint */}
        <p className="mt-8 text-sm text-gray-400">
          If you think this is an error, contact support.
        </p>

      </div>
    </section>
  );
}