import { Wrench, RefreshCw, Zap, Code2 } from "lucide-react";

const services = [
  {
    title: "Fix WordPress Bugs",
    description: "Fix errors, broken layouts, plugin conflicts and crashes.",
    href: "/fix-wordpress-bugs",
    icon: Wrench,
  },
  {
    title: "WordPress Maintenance",
    description: "Updates, security, backups and continuous monitoring.",
    href: "/wordpress-maintenance",
    icon: RefreshCw,
  },
  {
    title: "Speed Optimization",
    description: "Improve Core Web Vitals, performance and loading speed.",
    href: "/speed-optimization",
    icon: Zap,
  },
  {
    title: "WordPress → Next.js",
    description: "Modern migration from WordPress to fast Next.js apps.",
    href: "/wordpress-to-nextjs",
    icon: Code2,
  },
  {
    title: "Figma → Next.js",
    description: "Convert Figma designs into fast, responsive Next.js websites.",
    href: "/figma-to-nextjs",
    icon: Code2,
  },

];

import Link from "next/link";

export default function Services() {
  return (

  
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
              >
                <Icon className="w-8 h-8 text-blue-600 mb-4" />

                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-4 text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition">
                  Learn more →
                </div>
              </Link>
            );
          })}
        </div>

  );
}