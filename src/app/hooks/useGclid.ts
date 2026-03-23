import { useEffect } from "react";

const GCLID_KEY = "gclid";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

/**
 * Captures gclid and UTM params from the URL on landing, stores in sessionStorage.
 * Call once on any page that receives ad traffic.
 */
export function useCaptureAdParams() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const gclid = params.get("gclid");
    if (gclid) {
      sessionStorage.setItem(GCLID_KEY, gclid);
    }

    for (const key of UTM_KEYS) {
      const val = params.get(key);
      if (val) {
        sessionStorage.setItem(key, val);
      }
    }
  }, []);
}

/** Returns the stored gclid (or empty string). */
export function getGclid(): string {
  if (typeof window === "undefined") return "";
  return sessionStorage.getItem(GCLID_KEY) || "";
}

/** Returns all stored UTM params as a record. */
export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const result: Record<string, string> = {};
  for (const key of UTM_KEYS) {
    const val = sessionStorage.getItem(key);
    if (val) result[key] = val;
  }
  return result;
}
