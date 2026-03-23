"use client";

import { Landmark, Shovel, Ruler, Trees } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import type { ServicePageData } from "../ServicePageTemplate";
import siteDevAerial from "@/assets/images/site-development-aerial.webp";
import siteDevUtility from "@/assets/images/site-development-utility-box.webp";
import gradingOverhead from "@/assets/images/grading-overhead-commercial.webp";
import gradingParking from "@/assets/images/grading-commercial-parking.webp";
import equipmentGrading from "@/assets/images/equipment-commercial-grading.webp";
import gradingParkingAerial from "@/assets/images/grading-parking-aerial.webp";
import siteDevVideo from "@/assets/videos/commercial-project.mp4";
import siteDevPoster from "@/assets/videos/commercial-project-poster.webp";

const data: ServicePageData = {
  slug: "site-development",
  seoTitle: "Commercial Site Development & Preparation | Bradenton & Sarasota FL",
  seoDescription: "Full-scope commercial site development including clearing, mass grading, utility coordination, and stormwater management in Southwest Florida. Free estimates — (941) 290-7208.",
  icon: Landmark,
  title: "Site Development",
  tagline: "Complete commercial and residential site development from raw land to construction-ready. One crew, one point of contact, every phase handled.",
  heroImg: siteDevAerial,
  description: [
    "Site development transforms raw or undeveloped land into a construction-ready pad through a coordinated sequence of clearing, grading, utility installation, and stormwater management. Our full-scope approach means a single crew handles every phase — from initial tree removal and topsoil stripping through final compaction and grade verification — so there are no scheduling gaps between trades and no finger-pointing when issues arise.",
    "Mass grading is the backbone of any site development project. We balance cut-and-fill volumes to minimize expensive material hauling, establish proper drainage slopes across the entire parcel, and compact sub-grade soils to meet engineered density specifications. Utility corridor excavation runs in parallel, with trenches for water, sewer, electric, and communications roughed in at the correct depth and alignment before backfill.",
    "Stormwater infrastructure is especially critical in Southwest Florida's flat, high-water-table environment. We install retention and detention ponds, storm drain piping, inlet structures, and erosion controls that satisfy SWFWMD and county permitting requirements. By handling the full scope under one contract, you eliminate the coordination overhead of managing separate clearing, grading, and utility subcontractors — which typically saves two to four weeks on the overall project schedule.",
  ],
  features: [
    "Full-scope site clearing & prep",
    "Mass grading & earthwork",
    "Utility corridor excavation",
    "Stormwater infrastructure",
    "Erosion & sediment control",
    "Road & parking sub-base prep",
    "Building pad creation",
    "Retention & detention ponds",
    "Fill import & export management",
    "Permit coordination & compliance",
  ],
  process: [
    { title: "Due Diligence", desc: "Review civil plans, survey the parcel, analyze soil test reports, and identify existing utilities." },
    { title: "Mobilization", desc: "Clear vegetation, establish erosion and sediment controls, and set grade stakes across the site." },
    { title: "Earthwork", desc: "Execute mass grading, utility trenching, stormwater installation, and compaction to engineered specs." },
    { title: "Turnover", desc: "Verify final grades, complete as-built survey, and hand off a construction-ready site." },
  ],
  guarantee: {
    title: "Site-Ready Guarantee",
    desc: "We deliver a construction-ready site that passes inspection the first time. Every grade, every utility trench, every compaction test — verified and documented before we hand off the site to your building crew.",
  },
  faq: [
    { q: "What's included in full-scope site development?", a: "A full-scope site development package covers clearing and grubbing, mass earthwork and grading, utility corridor excavation, stormwater infrastructure installation, erosion controls, and final grade verification. We coordinate every phase so you have a single point of contact from raw land to construction-ready pad." },
    { q: "How long does commercial site development take?", a: "Timeline depends on acreage, soil conditions, and utility scope. A typical 2–5 acre commercial site takes 4–8 weeks from mobilization to turnover. We provide a detailed schedule during the estimating phase based on your civil plans and permitting timeline." },
    { q: "Do you handle permitting for site development?", a: "We coordinate with Sarasota County, Manatee County, and SWFWMD on stormwater and earthwork permits. While your civil engineer typically submits the permit applications, we provide the contractor documentation, erosion control plans, and inspection coordination required throughout the process." },
    { q: "Do you handle residential site development or only commercial?", a: "We handle both. Residential site development for custom home builders includes lot clearing, building pad grading, driveway sub-base prep, and utility trenching. Commercial projects add scope like mass grading, retention ponds, and parking lot sub-base work. The same crew and equipment handle both scales." },
  ],
  galleryImages: [siteDevAerial, siteDevUtility, gradingOverhead, gradingParking, equipmentGrading, gradingParkingAerial],
  videoTitle: "Watch a Commercial Site Project",
  videoSrc: siteDevVideo,
  videoPoster: siteDevPoster,
  relatedReviewIndices: [2, 6, 5],
  relatedServices: [
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/land-clearing", title: "Land Clearing", icon: Trees },
  ],
  seoContent: [
    {
      heading: "What Full-Scope Site Development Includes",
      paragraphs: [
        "Full-scope site development begins with clearing and grubbing — removing all vegetation, stumps, and organic material down to native soil. From there, mass grading reshapes the terrain to match engineered plans, balancing cut-and-fill volumes so material stays on-site whenever possible and haul costs stay low.",
        "Utility installation runs concurrently with earthwork. We excavate corridors for water, sanitary sewer, storm drain, electric, and communications at the depths and alignments specified on the civil drawings. Stormwater management — including retention ponds, detention areas, and underground piping — is installed and connected before final grading begins.",
        "Bundling every phase with one contractor eliminates the scheduling gaps that plague projects managed across multiple subs. When the grading crew and the utility crew share the same foreman, work sequences overlap efficiently, change orders are resolved on-site instead of through email chains, and the project moves from clearing to construction-ready weeks faster than the traditional multi-contractor approach.",
      ],
      bullets: [
        "Vegetation clearing and grubbing",
        "Cut and fill balancing to minimize haul costs",
        "Storm drain and retention system installation",
        "Utility trench excavation for water, sewer, and electric",
        "Erosion and sediment control per FDEP requirements",
        "Final grade to engineered specifications",
      ],
      linkText: "Learn about our excavation services",
      linkTo: "/services/excavation",
    },
    {
      heading: "Commercial Site Preparation in Southwest Florida",
      paragraphs: [
        "Southwest Florida's geology presents unique challenges for site development. High water tables — often just two to four feet below grade — require dewatering strategies during utility trenching and careful timing of earthwork to avoid saturated conditions that compromise compaction. Sandy soils compact differently than clay-based material and demand specific moisture and density testing protocols.",
        "The region's flat terrain means stormwater drainage must be engineered precisely. Without natural elevation change to drive gravity flow, retention ponds, swales, and storm drain inverts need to be set to tight tolerances. SWFWMD permitting adds another layer, requiring pre- and post-development runoff calculations, water quality treatment, and attenuation volumes that meet district standards.",
        "Hurricane season adds scheduling pressure from June through November. We plan earthwork phases to minimize exposed soil during peak storm months, maintain robust erosion controls throughout, and stage fill material to prevent washout. For multi-phase developments, we coordinate each phase's site work to align with the builder's vertical construction schedule, keeping the overall project on track.",
      ],
      bullets: [
        "SWFWMD and county stormwater compliance",
        "High water table management during construction",
        "Sandy soil compaction and stabilization",
        "Hurricane-season scheduling considerations",
        "Multi-phase development coordination",
        "As-built survey documentation",
      ],
      linkText: "Request a free site development estimate",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro: "Our site development services are available throughout Sarasota, Manatee, and surrounding counties. From single-lot residential builds to multi-acre commercial projects.",
};

export function SiteDevelopmentPage() {
  return <ServicePageTemplate data={data} />;
}
