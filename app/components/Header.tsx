"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const menu = [
  { label: "Fix Bugs", href: "/fix-wordpress-bugs" },
  { label: "Maintenance", href: "/wordpress-maintenance" },
  { label: "Speed Up", href: "/speed-optimization" },
  { label: "Convert to Next.js", href: "/wordpress-to-nextjs" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 border-b relative bg-white">
      <div className="container">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            WP Expert
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="btn btn-primary w-40! ml-4"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M4 7.5h16v1.5H4z" />
              <path d="M4 15h16v1.5H4z" />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        menu={menu}
        open={open}
        onClose={() => setOpen(false)}
      />
    </header>
  );
}