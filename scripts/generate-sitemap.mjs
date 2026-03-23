/**
 * Build-time sitemap generator for Lethermon Grade Excavations.
 *
 * Produces public/sitemap.xml with every indexable page. Run automatically
 * as part of `npm run build` or standalone via `npm run generate-sitemap`.
 *
 * Excluded:
 *  - /offer/* landing pages (paid traffic, noindex)
 *  - /terms, /privacy-policy, /sitemap (low SEO value)
 */

import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://www.lethermongradeexcavations.com";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// ---------------------------------------------------------------------------
// Route definitions — keep in sync with src/app/routes.ts and data.ts
// ---------------------------------------------------------------------------

/** Service page slugs */
const services = [
  "land-clearing",
  "excavation",
  "site-grading",
  "site-development",
  "foundation-prep",
  "drainage",
  "stormwater-drainage",
  "demolition",
  "concrete-removal",
  "trenching",
];

/** Service area slugs (from serviceAreasDetailed keys) */
const serviceAreas = [
  "sarasota",
  "bradenton",
  "venice",
  "lakewood-ranch",
  "parrish",
  "palmetto",
  "st-petersburg",
  "north-port",
];

/** Blog post slugs (from blogPosts array) */
const blogSlugs = [
  "how-to-prepare-your-lot-for-construction",
  "florida-drainage-problems-solutions",
  "choosing-excavation-contractor-florida",
  "land-clearing-cost-florida",
  "site-grading-importance-florida-construction",
  "pool-excavation-what-to-expect",
];

/** Video slugs (from videos array) */
const videoSlugs = [
  "land-clearing-timelapse",
  "grading-drone-footage",
  "demolition-longboat-key",
  "equipment-on-site",
  "drainage-retention-pond",
];

/** Press release slugs */
const pressReleaseSlugs = [
  "lethermon-reaches-200-projects",
  "lethermon-expands-equipment-fleet",
  "lethermon-partners-local-builders",
];

// ---------------------------------------------------------------------------
// Page list with priority / changefreq
// ---------------------------------------------------------------------------

/**
 * @typedef {{ loc: string; changefreq: string; priority: string }} SitemapEntry
 */

/** @type {SitemapEntry[]} */
const pages = [
  // --- Core pages ---
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/contact", changefreq: "monthly", priority: "0.9" },
  { loc: "/projects", changefreq: "monthly", priority: "0.7" },
  { loc: "/gallery", changefreq: "monthly", priority: "0.7" },
  { loc: "/reviews", changefreq: "monthly", priority: "0.7" },
  { loc: "/team", changefreq: "monthly", priority: "0.6" },
  { loc: "/trust", changefreq: "monthly", priority: "0.6" },
  { loc: "/location", changefreq: "monthly", priority: "0.6" },
  { loc: "/faith", changefreq: "monthly", priority: "0.7" },
  { loc: "/military", changefreq: "monthly", priority: "0.7" },
  { loc: "/careers", changefreq: "monthly", priority: "0.5" },
  { loc: "/media-kit", changefreq: "monthly", priority: "0.4" },

  // --- Services hub + individual service pages ---
  { loc: "/services", changefreq: "monthly", priority: "0.9" },
  ...services.map((s) => ({
    loc: `/services/${s}`,
    changefreq: "monthly",
    priority: "0.9",
  })),

  // --- Service areas hub + individual area pages ---
  { loc: "/service-areas", changefreq: "monthly", priority: "0.8" },
  ...serviceAreas.map((a) => ({
    loc: `/service-areas/${a}`,
    changefreq: "monthly",
    priority: "0.7",
  })),

  // --- Blog hub + individual posts ---
  { loc: "/blog", changefreq: "weekly", priority: "0.7" },
  ...blogSlugs.map((slug) => ({
    loc: `/blog/${slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),

  // --- Videos hub + individual video pages ---
  { loc: "/videos", changefreq: "weekly", priority: "0.7" },
  ...videoSlugs.map((slug) => ({
    loc: `/videos/${slug}`,
    changefreq: "monthly",
    priority: "0.5",
  })),

  // --- Press releases ---
  { loc: "/press-releases", changefreq: "monthly", priority: "0.5" },
];

// ---------------------------------------------------------------------------
// XML generation
// ---------------------------------------------------------------------------

const urlEntries = pages
  .map(
    (p) => `  <url>
    <loc>${DOMAIN}${p.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

// ---------------------------------------------------------------------------
// Write file
// ---------------------------------------------------------------------------

const outPath = resolve(__dirname, "..", "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf-8");

console.log(
  `[generate-sitemap] Wrote ${pages.length} URLs to ${outPath}`
);
