import Link from "next/link";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

const mainMenu = [
  { label: "Fix WordPress Bugs", href: "/fix-wordpress-bugs" },
  { label: "WordPress Maintenance", href: "/wordpress-maintenance" },
  { label: "Speed Optimization", href: "/speed-optimization" },
  { label: "WP to Next.js", href: "/wordpress-to-nextjs" },
  { label: "Figma to Next.js", href: "/figma-to-nextjs" },
  { label: "SEO Optimization", href: "/seo-optimization" },
];

const legalMenu = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

const socialMenu = [
  { label: "Fiverr", href: "https://www.fiverr.com/s/kLB16gW" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~0111c46c23c7c497bd" },
  { label: "WhatsApp", href: "https://wa.me/380672520550" },
  { label: "Telegram", href: "https://t.me/lihenko" },
];

const trustMenu = [
  { label: "All Services", href: "/services" },
  { label: "About Me", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 border-t bg-gray-50">
      <div className="container">

        <div className="flex flex-wrap -mx-4 mb-10">

          {/* Brand */}
          <div className="w-full px-4 mb-8 lg:w-1/3">
            <Link href="/" className="text-xl font-bold">
              WP Expert
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Professional WordPress help: bug fixes, speed optimization,
              maintenance, and conversion to blazing fast Next.js websites.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-4 btn btn-primary w-40!"
            >
              Get a Quote
            </Link>
          </div>

          <div className="w-full px-4 mb-8 lg:w-2/3">
          <div className="flex flex-wrap -mx-4">

          
          {/* Services */}
          <div className="px-4 mb-8 w-1/2 lg:w-1/4">
            <div className="text-lg font-semibold mb-3">Services</div>
            <ul className="space-y-2">
              {mainMenu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

           <div className="px-4 mb-8 w-1/2 lg:w-1/4">
            <div>
              <div className="text-lg font-semibold mb-3">About</div>
              <ul className="space-y-2">
                {trustMenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Legal + Social */}
          
          <div className="px-4 mb-8 w-1/2 lg:w-1/4">
            <div>
              <div className="text-lg font-semibold mb-3">Contact</div>
              <ul className="space-y-2">
                {socialMenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-primary" target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          <div className="px-4 mb-8 w-1/2 lg:w-1/4">
            
            <div className="mb-6">
              <div className="text-lg font-semibold mb-3">Legal</div>
              <ul className="space-y-2">
                {legalMenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 border-t pt-4">
          © {new Date().getFullYear()} WP Expert. All rights reserved.
        </div>

      </div>

      <ScrollToTopButton />
    </footer>
  );
}