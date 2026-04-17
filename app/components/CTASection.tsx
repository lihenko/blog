import Link from "next/link";
import { Zap, BarChart3, Search } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-linear-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 xl:px-24">

        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1 text-sm bg-white/10 rounded-full">
            Free Website Audit • No Obligation
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Let’s Fix Your Website <br />
            and Make It <span className="text-green-400">Fast & Profitable</span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 mt-6 text-lg">
            I will analyze your WordPress or Next.js website and show you exactly what’s slowing it down,
            breaking it, or hurting your SEO — completely free.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-white" />
                <span>Response in 24h</span>
            </div>

            <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-white" />
                <span>Performance insights</span>
            </div>

            <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-white" />
                <span>SEO & speed analysis</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/free-audit"
              className="btn btn-primary"
            >
              Get Free Audit
            </Link>

            <Link
              href="/services"
              className="btn btn-secondary"
            >
              See Services
            </Link>

          </div>

          {/* Trust line */}
          <p className="text-gray-400 text-sm mt-8">
            No spam • No obligation • Just real technical feedback
          </p>

        </div>

      </div>
    </section>
  );
}