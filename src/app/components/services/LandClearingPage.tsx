"use client";

import { Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import clearingHero from "@/assets/images/land-clearing-stump-removal.webp";
import clearingBradenton from "@/assets/images/land-clearing-bradenton.webp";
import clearingCover from "@/assets/images/land-clearing-cover.webp";
import clearingVideo from "@/assets/videos/land-clearing.mp4";
import clearingPoster from "@/assets/videos/land-clearing-poster.webp";

const data: ServicePageData = {
  slug: "land-clearing",
  seoTitle: "Land Clearing & Lot Clearing Services | Bradenton & Sarasota FL",
  seoDescription: "Professional land clearing, tree removal, stump grinding, and lot preparation in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  icon: Trees,
  title: "Land Clearing",
  tagline: "Complete lot clearing, tree removal, and vegetation management to transform raw land into build-ready sites across Sarasota-Bradenton.",
  heroImg: clearingHero,
  description: [
    "Before any construction project can begin, the land must be cleared of trees, brush, stumps, and debris. Our land clearing service handles everything from small residential lot clearing to multi-acre commercial sites.",
    "We use modern equipment including bulldozers, excavators, and skid steers to efficiently remove vegetation, grub root systems, and haul away all debris. Our crews work carefully around property boundaries and any features you want preserved.",
    "Florida land presents unique challenges including dense palmettos, sand pine, and root systems that extend deep into the sandy soil. Our experience in Southwest Florida means we know exactly how to handle these conditions efficiently.",
  ],
  features: [
    "Tree removal & brush clearing",
    "Stump grinding & root grubbing",
    "Palmetto & vegetation removal",
    "Debris hauling & disposal",
    "Selective clearing (preserve trees)",
    "Lot clearing for new construction",
    "Mulching & chipping on-site",
    "Erosion control after clearing",
    "Permit coordination",
    "Same-week scheduling available",
  ],
  process: [
    { title: "Site Assessment", desc: "Walk the property to identify trees, obstacles, and any features to preserve." },
    { title: "Clear Plan & Quote", desc: "Detailed estimate for clearing, hauling, and any grading needed." },
    { title: "Equipment & Crew", desc: "Mobilize bulldozers, excavators, and hauling trucks to your site." },
    { title: "Clear & Clean", desc: "Remove all vegetation, haul debris, and leave site ready for grading." },
  ],
  guarantee: {
    title: "Fast-Track Lot Clearing",
    desc: "Book your land clearing consultation this month and receive priority scheduling before the next construction cycle. We guarantee complete clearing with no debris left behind.",
  },
  faq: [
    { q: "How much does land clearing cost in Florida?", a: "Land clearing costs vary based on lot size, vegetation density, and access. Residential lots typically range from $1,500-$5,000. We provide free on-site estimates with transparent pricing." },
    { q: "Do I need permits for land clearing?", a: "In most cases, yes. Sarasota and Manatee counties require tree removal permits for certain species and sizes. We coordinate with local authorities to ensure all permits are in place." },
    { q: "How long does land clearing take?", a: "A typical residential lot can be cleared in 1-3 days. Larger or heavily wooded properties may take up to a week. We'll give you an accurate timeline during the estimate." },
    { q: "Can you clear around trees I want to keep?", a: "Absolutely. We offer selective clearing where we protect designated trees and clear everything else. We'll flag the trees you want preserved before work begins." },
  ],
  galleryImages: [clearingHero, clearingBradenton, clearingCover, IMG.landClear, IMG.bulldozerClear, IMG.heavyEquip],
  videoTitle: "Watch a Land Clearing Project",
  videoSrc: clearingVideo,
  videoPoster: clearingPoster,
  relatedReviewIndices: [1, 5, 7],
  relatedServices: [
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/demolition", title: "Demolition", icon: Building2 },
  ],
  seoContent: [
    {
      heading: "Why Florida Land Clearing Requires Local Expertise",
      paragraphs: [
        "Florida's subtropical climate produces dense vegetation growth that standard clearing methods can't handle efficiently. Species like Brazilian pepper, melaleuca, and dense palmetto stands require specific equipment and techniques to clear properly without damaging surrounding soil structure.",
        "Southwest Florida properties also face unique regulatory requirements. Sarasota County and Manatee County each have specific tree protection ordinances, environmental buffers, and stormwater regulations that affect how land clearing must be performed. Working with a local contractor who understands these rules saves time and prevents costly violations.",
        "At Lethermon Grade Excavations, our crews have cleared hundreds of lots across the Sarasota-Bradenton corridor. We know which permits you need, which trees are protected, and how to clear efficiently while staying compliant with local codes.",
      ],
      bullets: [
        "Sarasota County tree protection ordinance compliance",
        "Manatee County environmental buffer requirements",
        "Protected species identification & preservation",
        "Stormwater management during clearing",
        "Wetland buffer zone awareness",
        "HOA and deed restriction compliance",
      ],
      linkText: "Read our guide to Florida land clearing costs",
      linkTo: "/blog/land-clearing-cost-florida",
    },
    {
      heading: "Preparing Your Lot for Construction After Clearing",
      paragraphs: [
        "Land clearing is just the first step in site preparation. Once vegetation is removed, your property needs proper grading, drainage evaluation, and compaction before construction can begin. Many property owners don't realize that poor post-clearing preparation leads to foundation problems, drainage failures, and expensive rework months later.",
        "As a full-service excavation company, we handle the complete progression from clearing through grading and drainage — ensuring each phase is done correctly and the next trade can proceed without delays. This integrated approach saves our clients time, money, and coordination headaches.",
      ],
      bullets: [
        "Seamless transition from clearing to grading",
        "Soil compaction testing after debris removal",
        "Drainage evaluation included with every clearing job",
        "Builder coordination for construction scheduling",
        "Complete site preparation in a single mobilization",
        "Erosion control measures installed before rainy season",
      ],
      linkText: "Learn about our site grading services",
      linkTo: "/services/site-grading",
    },
  ],
  serviceAreaIntro: "We provide professional land clearing services throughout Sarasota, Manatee, and surrounding Florida counties. Whether you're clearing a quarter-acre residential lot or a multi-acre commercial site, our crews deliver fast, clean results.",
};

export function LandClearingPage() {
  return <ServicePageTemplate data={data} />;
}