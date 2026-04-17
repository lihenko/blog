"use client";

import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  menu: NavItem[];
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ menu, open, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">

          {/* Top */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-lg font-bold">WP Expert</div>

            <button
              onClick={onClose}
              className="text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-5 mb-8">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-lg font-medium hover:text-primary transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="border-t my-4" />

          {/* Trust block */}
          <div className="text-sm text-gray-600 mb-6">
            ⭐ 5.0 Rated Freelancer <br />
            ⚡ Fast Delivery <br />
            💬 Quick Response
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              onClick={onClose}
              className="btn btn-primary w-full"
            >
              Get a Quote
            </Link>

            <Link
              href="#"
              onClick={onClose}
              className="block text-center text-sm mt-3 text-gray-500 hover:underline"
            >
              View Fiverr Profile
            </Link>
          </div>

        </div>
      </aside>
    </>
  );
}