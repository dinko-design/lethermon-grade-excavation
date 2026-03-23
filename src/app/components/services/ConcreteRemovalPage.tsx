"use client";

import { Hammer, Building2, Shovel, Ruler } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import type { ServicePageData } from "../ServicePageTemplate";
import heroImg from "@/assets/images/demolition-excavator-rubble.webp";
import galleryAerial from "@/assets/images/demolition-aerial-cover.webp";
import galleryWaterfront from "@/assets/images/demolition-waterfront-cover.webp";
import galleryDeere from "@/assets/images/demolition-deere-roof.webp";
import galleryCleanup from "@/assets/images/demolition-waterfront-cleanup.webp";
import galleryCompactor from "@/assets/images/grading-plate-compactor.webp";
import concreteVideo from "@/assets/videos/demolition-mobile-home.mp4";
import concretePoster from "@/assets/videos/demolition-mobile-home-poster.webp";

const data: ServicePageData = {
  slug: "concrete-removal",
  seoTitle: "Concrete & Driveway Removal Services | Bradenton & Sarasota FL",
  seoDescription:
    "Professional concrete breaking, driveway removal, slab demolition, and hauling in Bradenton, Sarasota, and Southwest Florida. Same-week scheduling. Free estimates — (941) 290-7208.",
  icon: Hammer,
  title: "Concrete Removal",
  tagline:
    "Driveway removal, slab demolition, and concrete breaking with complete hauling and site cleanup. Fast scheduling, clean results.",
  heroImg,
  description: [
    "We remove all types of residential and commercial concrete — driveways, slabs, sidewalks, patios, pool decks, and foundations. Whether you're replacing a cracked driveway, demolishing an old pool deck, or clearing a foundation for new construction, our crews handle the full scope from breaking to hauling to final cleanup.",
    "Our equipment lineup includes hydraulic breakers, excavators with thumb attachments, and skid steers sized for both tight residential lots and large commercial pads. We match the right machine to each job so the work moves fast without tearing up your yard or damaging adjacent structures.",
    "Renting a jackhammer and a dumpster might seem cheaper up front, but most homeowners underestimate how much labor, time, and disposal cost is involved. Our crews break, load, haul, and grade in a single mobilization — typically finishing residential driveways and patios in one day. You skip the rental headaches, the back-breaking work, and the surprise disposal fees.",
  ],
  features: [
    "Driveway removal & replacement prep",
    "Concrete slab demolition",
    "Sidewalk & patio removal",
    "Pool deck demolition",
    "Foundation removal",
    "Curb & gutter removal",
    "Concrete breaking & hauling",
    "Rebar & mesh removal",
    "Sub-base preparation",
    "Same-week scheduling available",
  ],
  process: [
    {
      title: "Assess & Quote",
      desc: "We measure the concrete, check equipment access, identify underground utilities, and provide a firm quote with no hidden fees.",
    },
    {
      title: "Break & Remove",
      desc: "Hydraulic breakers and excavators break the concrete into manageable pieces for fast, efficient loading.",
    },
    {
      title: "Haul & Recycle",
      desc: "We load all debris, transport it to a recycling facility, and ensure the concrete is recycled into aggregate whenever possible.",
    },
    {
      title: "Grade & Clean",
      desc: "We grade the exposed sub-base, compact the soil, and leave your site clean and ready for new work.",
    },
  ],
  guarantee: {
    title: "Clean Site Guarantee",
    desc: "We remove every piece of concrete — including rebar, wire mesh, and loose aggregate — and leave the sub-base graded, compacted, and ready for new concrete, pavers, or landscaping. No debris left behind, guaranteed.",
  },
  faq: [
    {
      q: "What factors affect the cost of concrete removal?",
      a: "The main cost factors are the total square footage, thickness of the concrete, whether rebar or wire mesh is present, accessibility for equipment, and disposal fees. Reinforced concrete and thick foundations cost more because they take longer to break and are heavier to haul. We provide a firm quote after measuring the job so there are no surprises.",
    },
    {
      q: "How long does concrete removal take?",
      a: "Most residential driveways and patios are completed in a single day. Larger projects like full foundation removal or commercial slabs may take 2-3 days. We provide a clear timeline in your estimate and schedule the work to minimize disruption to your property.",
    },
    {
      q: "What happens with the rebar and wire mesh in reinforced concrete?",
      a: "Our crews separate rebar and wire mesh from the broken concrete during demolition. The steel is recycled separately at a scrap facility, and the clean concrete goes to a recycling plant where it's crushed into road-base aggregate. Nothing goes to waste.",
    },
    {
      q: "Can you prepare the site for new concrete after removal?",
      a: "Absolutely. Every concrete removal job includes sub-base grading and compaction at no extra charge. If you need additional base material, form work, or specific elevation grades for your new pour, we can handle that preparation as part of the same project.",
    },
  ],
  galleryImages: [heroImg, galleryDeere, galleryWaterfront, galleryAerial, galleryCleanup, galleryCompactor],
  videoTitle: "Watch a Demolition Project",
  videoSrc: concreteVideo,
  videoPoster: concretePoster,
  relatedReviewIndices: [1, 3, 7],
  relatedServices: [
    { to: "/services/demolition", title: "Demolition", icon: Building2 },
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
  ],
  seoContent: [
    {
      heading: "When You Need Professional Concrete Removal",
      paragraphs: [
        "Concrete removal becomes necessary in a wide range of situations — from replacing an old cracked driveway to clearing a pool deck for renovation or demolishing an outdated foundation before new construction. Code violations, storm damage, and property upgrades all create the need for fast, professional concrete breaking and hauling services in the Bradenton and Sarasota area.",
        "DIY concrete removal is one of the most underestimated home projects. A standard two-car driveway contains 10-15 tons of concrete that must be broken, loaded, hauled, and properly disposed of. Renting a jackhammer and dumpster doesn't account for the physical labor, the time commitment, or the fact that most residential dumpsters can't handle reinforced concrete. Professional removal eliminates these headaches and gets the job done in a fraction of the time.",
        "Whether you're a homeowner upgrading your property, a contractor preparing for a new pour, or a builder clearing a lot for new construction, our concrete removal services handle the full scope. We break, load, haul, recycle, and grade — so you're left with a clean, level surface ready for whatever comes next.",
      ],
      bullets: [
        "Cracked or heaving driveway replacement",
        "Pool deck removal for renovation",
        "Old foundation demolition for new construction",
        "Sidewalk and patio upgrades",
        "Code violation remediation",
        "Storm damage cleanup and rebuilding",
      ],
      linkText: "Learn about our full demolition services",
      linkTo: "/services/demolition",
    },
    {
      heading: "Concrete Removal Process and What to Expect",
      paragraphs: [
        "Our concrete removal process relies on hydraulic breakers mounted on excavators and skid steers, along with excavators equipped with thumb attachments for picking up and loading broken sections. This combination allows us to break thick slabs quickly and load debris without multiple handling steps, keeping the job efficient and your property disruption to a minimum.",
        "Most residential concrete removal jobs — driveways, patios, and sidewalks — are completed in one day. Foundation removal and larger commercial slabs typically take two to three days depending on thickness, reinforcement, and access. We schedule most jobs within the same week of your approved estimate, so you're not waiting weeks to get started.",
        "All concrete we remove is transported to a licensed recycling facility where it's crushed into aggregate for road base and fill material. Rebar and wire mesh are separated and sent to scrap recycling. After removal, we grade and compact the exposed sub-base so it's ready for your concrete contractor, landscaper, or the next phase of construction.",
      ],
      bullets: [
        "Hydraulic breaking for thick slabs and foundations",
        "Excavator loading for fast debris removal",
        "Concrete recycled into road-base aggregate",
        "Rebar and wire mesh separated and recycled",
        "Sub-base grading included with every job",
        "Minimal lawn and landscape disruption",
      ],
      linkText: "Request a free concrete removal estimate",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro:
    "Our concrete removal services are available throughout Sarasota, Manatee, and surrounding counties. Most residential jobs completed within 1-2 days.",
};

export function ConcreteRemovalPage() {
  return <ServicePageTemplate data={data} />;
}
