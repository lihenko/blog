export type Consent = {
  analytics: boolean;
  marketing: boolean;
};

const KEY = "cookie_consent_v1";

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;

  const saved = localStorage.getItem(KEY);
  return saved ? JSON.parse(saved) : null;
}

export function saveConsent(consent: Consent) {
  localStorage.setItem(KEY, JSON.stringify(consent));
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics ?? false;
}