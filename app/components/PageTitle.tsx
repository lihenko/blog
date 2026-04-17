import { ReactNode } from "react";

type PageTitleProps = {
  title: string;
  subtitle?: ReactNode;
  badge?: string;
  align?: "center" | "left";
};

export default function PageTitle({
  title,
  subtitle,
  badge,
  align = "center",
}: PageTitleProps) {
  return (
    <div className="container">
      <div
        className={`pt-16 lg:pt-24 ${
          align === "center" ? "text-center" : "text-left"
        }`}
      >
        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center mb-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}