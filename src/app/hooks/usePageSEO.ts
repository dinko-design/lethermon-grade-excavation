import { useEffect } from "react";

const SITE_NAME = "Lethermon Grade Excavations";
const BASE_URL = "https://www.lethermongradeexcavations.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface PageSEOConfig {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaTag(name: string, content: string, attribute = "name") {
  let el = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function removeJsonLdById(id: string) {
  const existing = document.querySelector(`script[data-seo-id="${id}"]`);
  if (existing) existing.remove();
}

export function usePageSEO({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  jsonLd,
}: PageSEOConfig) {
  useEffect(() => {
    const fullTitle = path === "/" ? `${title} | ${SITE_NAME}` : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${BASE_URL}${path}`;

    document.title = fullTitle;

    setMetaTag("description", description);
    setMetaTag("robots", noIndex ? "noindex, nofollow" : "index, follow");
    setLinkTag("canonical", canonicalUrl);

    setMetaTag("og:title", fullTitle, "property");
    setMetaTag("og:description", description, "property");
    setMetaTag("og:url", canonicalUrl, "property");
    setMetaTag("og:image", ogImage, "property");
    setMetaTag("og:type", ogType, "property");
    setMetaTag("og:site_name", SITE_NAME, "property");
    setMetaTag("og:locale", "en_US", "property");

    setMetaTag("twitter:card", "summary_large_image", "name");
    setMetaTag("twitter:title", fullTitle, "name");
    setMetaTag("twitter:description", description, "name");
    setMetaTag("twitter:image", ogImage, "name");

    if (jsonLd) {
      removeJsonLdById("page-seo");
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-id", "page-seo");
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": schemas,
      });
      document.head.appendChild(script);
    }

    return () => {
      removeJsonLdById("page-seo");
    };
  }, [title, description, path, ogImage, ogType, noIndex, jsonLd]);
}

export { BASE_URL, SITE_NAME, DEFAULT_OG_IMAGE };
