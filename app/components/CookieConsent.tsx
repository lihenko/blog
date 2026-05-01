"use client";

import { useEffect, useState } from "react";
import { loadAnalytics } from "@/app/lib/analytics";
import { saveConsent, getConsent } from "@/app/lib/consent";

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = getConsent();

    if (!consent) {
      setOpen(true);
      return;
    }

    if (consent.analytics) {
      loadAnalytics();
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    loadAnalytics();
    setOpen(false);
  };

  const rejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setOpen(false);
  };

  const acceptAnalytics = () => {
    saveConsent({ analytics: true, marketing: false });
    loadAnalytics();
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 px-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-2xl backdrop-blur p-5 md:p-6">

        {/* Title */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              We use cookies
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              We use cookies to improve performance, analytics and user experience.
            </p>
          </div>

          <button
            onClick={rejectAll}
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            ✕
          </button>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:justify-end">
          
          <button
            onClick={rejectAll}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition cursor-pointer"
          >
            Reject all
          </button>

          <button
            onClick={acceptAnalytics}
            className="px-4 py-2 text-sm rounded-lg border border-blue-600 text-[#0057B8] hover:bg-blue-50 transition cursor-pointer"
          >
            Analytics only
          </button>

          <button
            onClick={acceptAll}
            className="px-4 py-2 text-sm rounded-lg bg-gray-900 text-white hover:bg-black transition cursor-pointer"
          >
            Accept all
          </button>
          
        </div>

        {/* Small note */}
        <p className="mt-3 text-xs text-gray-600">
            Read our{" "}
            <a
                href="/privacy-policy"
                className="underline hover:text-gray-800"
            >
                Privacy Policy
            </a>
            {" "}for more details.
        </p>
      </div>
    </div>
  );
}