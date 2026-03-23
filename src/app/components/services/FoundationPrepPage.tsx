"use client";

import { Layers, Shovel, Ruler, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import type { ServicePageData } from "../ServicePageTemplate";
import gradingHousePad from "@/assets/images/grading-house-pad.webp";
import gradingBradentonResidential from "@/assets/images/grading-bradenton-residential.webp";
import gradingSarasotaCustomHome from "@/assets/images/grading-sarasota-custom-home.webp";
import gradingBackyardResidential from "@/assets/images/grading-backyard-residential.webp";
import excavationYanmar from "@/assets/images/excavation-yanmar-residential.webp";
import gradingPlateCompactor from "@/assets/images/grading-plate-compactor.webp";
import gradingVideo from "@/assets/videos/grading-drone.mp4";
import gradingPoster from "@/assets/videos/grading-drone-poster.webp";

const data: ServicePageData = {
  slug: "foundation-prep",
  seoTitle: "Foundation Excavation & Footing Preparation | Bradenton & Sarasota FL",
  seoDescription:
    "Precision foundation excavation, footing trenches, building pad preparation, and finish grading for residential and commercial construction in Southwest Florida. Free estimates — (941) 290-7208.",
  icon: Layers,
  title: "Foundation Preparation",
  tagline:
    "Precision foundation excavation and footing preparation from initial dig to final grade. Your structure starts with the ground we prepare.",
  heroImg: gradingHousePad,
  description: [
    "Foundation preparation is a complete process that transforms raw land into a build-ready surface engineered for your specific structure. We excavate to exact engineered depth, cut footing trenches to specification, and level and compact the building pad so it meets every requirement on the foundation plan. Every step is measured, verified, and documented before the next phase begins.",
    "Precision is non-negotiable in foundation work. Our crews use laser-guided grading to achieve sub-inch elevation accuracy across the entire building pad. We perform compaction testing and elevation verification at every stage so the finished surface sits exactly where the engineer designed it — no guesswork, no callbacks, no failed inspections.",
    "We coordinate directly with builders, foundation contractors, and framers to keep your project moving. Our team understands the inspection process inside and out, and we prepare every site to pass on the first visit. That means clean footing trenches, verified elevations, proper compaction documentation, and a pad that's ready for the next trade the moment we finish.",
  ],
  features: [
    "Foundation excavation to engineered depth",
    "Footing & footer trench cutting",
    "Building pad leveling & compaction",
    "Fine grading to blueprint specifications",
    "Final grading for drainage slope",
    "Elevation verification & staking",
    "Over-dig correction & backfill",
    "Soil compaction testing coordination",
    "Slab-on-grade preparation",
    "Builder & inspector coordination",
  ],
  process: [
    {
      title: "Plan Review",
      desc: "Review foundation plans, verify elevations, identify soil conditions and water table depth.",
    },
    {
      title: "Excavation",
      desc: "Dig to engineered depth, cut footing trenches to specification, remove unsuitable material.",
    },
    {
      title: "Grade & Compact",
      desc: "Laser-grade building pad, compact in lifts, verify elevation at all corners.",
    },
    {
      title: "Inspection Ready",
      desc: "Final grade check, clean footings, coordinate with builder and inspector for approval.",
    },
  ],
  guarantee: {
    title: "Foundation-Ready Guarantee",
    desc: "We deliver foundation prep that passes inspection the first time — correct depth, level pad, clean footings. If our work doesn't meet spec, we'll make it right before the inspector arrives.",
  },
  faq: [
    {
      q: "What's included in foundation preparation?",
      a: "Full service from initial dig through final grade including excavation to engineered depth, footing trenches, pad leveling, compaction in controlled lifts, elevation verification, and site cleanup. We handle everything between clearing and the foundation pour.",
    },
    {
      q: "How deep do you dig for foundations in Florida?",
      a: "Depth depends on soil conditions and structure type. Typically 18–24 inches for footings with the building pad at engineered elevation. Areas with poor soil, high water table, or heavier structures may require deeper excavation and additional compaction.",
    },
    {
      q: "Do you handle both slab-on-grade and stem wall foundations?",
      a: "Yes, we prepare sites for both slab-on-grade and stem wall foundations, plus monolithic slab, block wall, and poured wall foundations. Each type has specific depth, compaction, and grading requirements that we follow to the engineer's specification.",
    },
    {
      q: "How do you handle Florida's sandy soil for foundations?",
      a: "We compact in controlled lifts with moisture conditioning to achieve the density required by the geotechnical report. Compaction testing verifies we meet engineer specs at every lift. When we encounter unsuitable material, we over-excavate and replace with structural fill.",
    },
  ],
  galleryImages: [
    gradingHousePad,
    gradingBradentonResidential,
    gradingSarasotaCustomHome,
    gradingBackyardResidential,
    excavationYanmar,
    gradingPlateCompactor,
  ],
  videoTitle: "Watch a Grading Project",
  videoSrc: gradingVideo,
  videoPoster: gradingPoster,
  relatedReviewIndices: [0, 5, 6],
  relatedServices: [
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/trenching", title: "Trenching", icon: Cable },
  ],
  seoContent: [
    {
      heading: "Why Foundation Preparation Is the Most Critical Phase",
      paragraphs: [
        "Every structure is only as good as what's underneath it. Foundation preparation establishes the base that supports the entire weight of the building, and errors at this stage compound into serious structural problems — settling, cracking, and even failure. In Southwest Florida's sandy soil, where compaction behavior differs significantly from clay-heavy regions, proper foundation excavation and pad preparation are non-negotiable.",
        "Improper foundation prep is one of the most common reasons for failed inspections and construction delays in Manatee and Sarasota counties. When footing trenches are cut too shallow, pads aren't compacted to specification, or drainage slopes are missed, the project stalls until corrections are made. Our process eliminates these risks by verifying every measurement against the foundation plan before calling for inspection.",
        "Laser-guided grading technology allows us to achieve sub-inch elevation accuracy across the entire building pad, ensuring the finished foundation sits exactly where the engineer designed it. Combined with compaction testing at every lift and thorough documentation, our foundation prep gives builders and inspectors confidence that the site is ready for the next phase of construction.",
      ],
      bullets: [
        "Engineered depth excavation prevents settling",
        "Footing trenches cut to exact dimensions for code compliance",
        "Compaction in lifts ensures load-bearing capacity",
        "Laser grading delivers sub-inch elevation accuracy",
        "Proper drainage slopes prevent water intrusion",
        "First-time inspection pass saves schedule and money",
      ],
      linkText: "Learn about our excavation services",
      linkTo: "/services/excavation",
    },
    {
      heading: "Foundation Prep for Florida's Unique Conditions",
      paragraphs: [
        "Southwest Florida presents foundation challenges that don't exist in most other regions. High water tables can require dewatering before excavation can begin, and the predominantly sandy soil demands careful moisture conditioning and controlled compaction to achieve the density specified by geotechnical engineers. Our crews work in these conditions every day and understand exactly how to manage them.",
        "Hurricane-code foundation requirements in Florida's wind zones add another layer of complexity to foundation preparation. Deeper footings, specific reinforcement embedment depths, and tie-down anchor placement all depend on precise excavation and grading. Local experience matters because every municipality in Manatee and Sarasota counties has specific inspectors with specific expectations for how a foundation-ready site should look.",
        "We coordinate with geotechnical engineers throughout the process, from initial soil reports through final compaction testing. When conditions in the field differ from the geotech report — and in Florida they often do — we communicate immediately with the engineer and builder to determine the right corrective action. This proactive approach keeps projects on schedule and avoids costly surprises during inspection.",
      ],
      bullets: [
        "High water table management and dewatering when needed",
        "Sandy soil compaction with moisture conditioning",
        "Hurricane-rated foundation depth requirements",
        "Coordination with geotechnical engineers",
        "Slab-on-grade and stem wall preparation",
        "As-built elevation documentation for inspectors",
      ],
      linkText: "Get a free foundation prep estimate",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro:
    "Our foundation preparation services are available throughout Sarasota, Manatee, and surrounding counties. From single-family homes to multi-story commercial buildings.",
};

export function FoundationPrepPage() {
  return <ServicePageTemplate data={data} />;
}
