"use client";

import { Trees, Shovel, Ruler, Droplets, Building2, Cable, CloudRain } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import trenchHero from "@/assets/images/trenching-crew-deep-trench.webp";
import trenchPalmetto from "@/assets/images/trenching-palmetto-install.webp";
import trenchCrew from "@/assets/images/trenching-palmetto-crew.webp";
import trenchPipe from "@/assets/images/trenching-pipe-palmetto.webp";

const data: ServicePageData = {
  slug: "trenching",
  seoTitle: "Utility Trenching & Pipe Installation | Bradenton & Sarasota FL",
  seoDescription: "Code-compliant utility trenching for water, sewer, electric, and gas lines in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208.",
  icon: Cable,
  title: "Utility Trenching",
  tagline: "Code-compliant utility trenching for plumbing, electrical, septic, and drainage. Dug to spec, inspection-ready every time.",
  heroImg: trenchHero,
  description: [
    "Underground utilities are the lifeline of every building. Water, sewer, electrical, gas, and communication lines all require precisely dug trenches at code-specified depths and widths. Getting this wrong means failed inspections and costly rework.",
    "Our trenching crews dig to exact specifications required by local code and your project engineer. We coordinate with utility locators to avoid existing underground services and work with plumbers, electricians, and other trades to ensure proper installation.",
    "From single-line residential trenches to multi-utility commercial runs, our equipment and operators handle trenching projects of all scales. Every trench is dug to depth, properly bedded, and ready for the installing trade to do their work.",
  ],
  features: [
    "Water & sewer line trenches",
    "Electrical conduit trenches",
    "Septic system excavation",
    "Drainage pipe trenches",
    "Gas line trenching",
    "Communication line trenches",
    "Multi-utility trenching",
    "Backfill & compaction",
    "Utility locate coordination",
    "Inspection-ready depths",
  ],
  process: [
    { title: "Utility Locates", desc: "Coordinate with 811 and utility companies to mark all existing underground services." },
    { title: "Layout & Mark", desc: "Mark trench paths according to plans with proper depth specifications." },
    { title: "Precision Trenching", desc: "Dig trenches to exact code depths and widths for each utility type." },
    { title: "Bedding & Backfill", desc: "Prepare trench bed, allow trade installation, then backfill and compact." },
  ],
  guarantee: {
    title: "Inspection-Ready Trenching",
    desc: "All trenches dug to code and ready for inspection. We coordinate with utility locators and inspectors to ensure every trench passes on the first inspection.",
  },
  faq: [
    { q: "What depth do utility trenches need to be?", a: "Depths vary by utility type and local code. Water lines typically require 18-24 inches, sewer lines 12-36 inches, and electrical conduit 18-24 inches. We dig to the exact depth required by your local jurisdiction." },
    { q: "Do you handle the utility installation?", a: "We dig the trenches and prepare the bed. Licensed plumbers, electricians, and other trades install the actual utilities. We then backfill and compact after installation and inspection." },
    { q: "Can you trench in tight spaces?", a: "Yes. We have compact equipment including mini-excavators and trenchers that can work in tight residential spaces, between structures, and in challenging access areas." },
    { q: "How do you protect existing utilities?", a: "We always coordinate with 811 and local utility locators before any digging. All existing utilities are marked and we hand-dig within the required proximity to avoid damage." },
  ],
  galleryImages: [trenchHero, trenchPalmetto, trenchCrew, trenchPipe, IMG.backhoe, IMG.surveyor],
  videoTitle: "Watch Utility Trenching",
  relatedReviewIndices: [3, 0, 6],
  relatedServices: [
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/drainage", title: "Drainage Solutions", icon: Droplets },
    { to: "/services/stormwater-drainage", title: "Stormwater Systems", icon: CloudRain },
  ],
  seoContent: [
    {
      heading: "Code-Compliant Utility Trenching in Southwest Florida",
      paragraphs: [
        "Every utility line installed underground has specific depth, width, and bedding requirements set by Florida building codes and local ordinances. Water lines, sewer lines, electrical conduit, gas lines, and communication cables each have different specifications — and getting any of them wrong means a failed inspection and costly rework.",
        "Our trenching crews know the exact requirements for every utility type in Sarasota and Manatee counties. We dig to the precise depths required by code, prepare proper bedding material, and ensure each trench is ready for the installing trade to lay their lines. This expertise is why plumbers, electricians, and general contractors prefer working with us.",
        "Safety is paramount in trenching work. Before any digging begins, we coordinate with 811 (Sunshine State One Call) to locate all existing underground utilities. Our crews also follow OSHA trench safety guidelines including proper shoring and sloping for deeper excavations.",
      ],
      bullets: [
        "811 utility locate coordination before every job",
        "Code-specific depths for water, sewer, electric, and gas",
        "Proper bedding material installation",
        "OSHA-compliant trench safety protocols",
        "Hand digging near existing utilities",
        "Backfill compaction to prevent settling",
      ],
      linkText: "Learn about our excavation services",
      linkTo: "/services/excavation",
    },
    {
      heading: "Working With Your Trades: Plumber, Electrician & GC Coordination",
      paragraphs: [
        "Utility trenching is a coordination-intensive phase of construction. The trenches must be ready when the plumber, electrician, or other trade needs them — and they need to be backfilled after installation and before inspection. Our scheduling flexibility and communication systems ensure we fit seamlessly into your project's workflow.",
        "We work directly with the trades installing utilities to confirm exact specifications before digging. This collaborative approach prevents the miscommunication that leads to wrong depths, misaligned trenches, and wasted time on the jobsite. Many of our builder clients credit this coordination as the reason they keep using us.",
      ],
      bullets: [
        "Direct communication with installing trades",
        "Flexible scheduling to match project timelines",
        "Multi-utility trench coordination",
        "Same-day backfill after inspection",
        "Septic system excavation and drain field prep",
        "Irrigation line trenching for landscape contractors",
      ],
      linkText: "Contact us for trenching scheduling",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro: "We provide code-compliant utility trenching services across Southwest Florida. Our crews coordinate with local trades and inspectors to keep your project on schedule.",
};

export function TrenchingPage() {
  return <ServicePageTemplate data={data} />;
}