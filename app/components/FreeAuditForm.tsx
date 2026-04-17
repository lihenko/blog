"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function FreeAuditForm() {
  const recaptchaRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;

    setLoading(true);
    setSuccess(false);
    setError("");

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setError("Please confirm you're not a robot.");
      setLoading(false);
      return;
    }

    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      website: String(formData.get("website") || ""),
      details: String(formData.get("details") || ""),
      token,
    };

    try {
      const res = await fetch("/api/free-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      form.reset();
      recaptchaRef.current?.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your name"
        className={inputClass}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className={inputClass}
        required
      />

      <input
        name="website"
        type="url"
        placeholder="Website URL"
        className={inputClass}
        required
      />

      <textarea
        name="details"
        placeholder="What issues are you experiencing?"
        className={`${inputClass} h-32 resize-none`}
      />

      {/* reCAPTCHA */}
      <div className="pt-2">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          ref={recaptchaRef}
        />
      </div>

      <button
        type="submit"
        className="w-full! btn btn-primary cursor-pointer"
        disabled={loading}
      >
        {loading ? "Sending..." : "Get Free Audit"}
      </button>

      {success && (
        <p className="text-green-600 text-sm text-center">
          Request sent! I’ll review your website and get back to you.
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm text-center">
          {error}
        </p>
      )}

    </form>
  );
}