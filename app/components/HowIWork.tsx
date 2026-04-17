import { Search, Wrench, CheckCircle, Rocket } from "lucide-react";

const steps = [
  {
    title: "1. Website Audit",
    description:
      "I analyze your WordPress or Next.js site to find performance issues, bugs, and SEO problems.",
    icon: Search,
  },
  {
    title: "2. Fix & Optimization",
    description:
      "I fix errors, improve speed, optimize Core Web Vitals and clean up the codebase.",
    icon: Wrench,
  },
  {
    title: "3. Testing & Quality Check",
    description:
      "I test your website across devices and browsers to ensure everything works perfectly.",
    icon: CheckCircle,
  },
  {
    title: "4. Deployment & Delivery",
    description:
      "I deliver a fully optimized, fast and stable website ready for real users and Google.",
    icon: Rocket,
  },
];

export default function HowIWork() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 xl:px-24">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            How I Work
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A simple, transparent process focused on speed, quality and results — no complexity, no confusion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div
                key={i}
                className="relative bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Step number glow (premium touch) */}
                <div className="absolute top-4 right-4 text-xs text-gray-300 font-semibold">
                  0{i + 1}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}