"use client";

import { Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import excavationCoastal from "@/assets/images/excavation-pool-coastal.webp";
import excavationPool from "@/assets/images/excavation-pool-overhead.webp";
import excavationSkidsteer from "@/assets/images/excavation-skidsteer-aerial.webp";
import excavationYanmar from "@/assets/images/excavation-yanmar-residential.webp";
import excavationBackfill from "@/assets/images/excavation-pool-backfill.webp";
import excavationCoastal2 from "@/assets/images/excavation-pool-coastal-2.webp";

const data: ServicePageData = {
  slug: "excavation",
  seoTitle: "Excavation Services & Foundation Digging | Bradenton & Sarasota FL",
  seoDescription: "Expert excavation for foundations, pools, and site preparation in Bradenton, Sarasota, and Southwest Florida. 200+ projects completed. Free estimates — (941) 290-7208.",
  icon: Shovel,
  title: "Excavation",
  tagline: "Professional foundation digging, structural excavation, and site preparation for residential and commercial projects in Sarasota-Bradenton.",
  heroImg: excavationCoastal,
  description: [
    "Excavation is the backbone of every construction project. Before foundations are poured, footings set, or utilities installed, the earth must be precisely moved and shaped. That's our specialty.",
    "Our experienced operators run modern excavators and equipment to dig foundations, create building pads, install underground infrastructure, and perform cut-and-fill earthwork to exact specifications.",
    "We work directly with builders and general contractors to coordinate excavation timing with project schedules. Our team understands the critical path of construction and works to keep your project on timeline and inspection-ready.",
  ],
  features: [
    "Foundation excavation",
    "Footing & footer trenches",
    "Cut-and-fill earthwork",
    "Building pad creation",
    "Pool excavation",
    "Soil removal & hauling",
    "Rock excavation",
    "Basement & crawlspace digging",
    "Retention pond excavation",
    "Builder schedule coordination",
  ],
  process: [
    { title: "Plan Review", desc: "Review site plans, surveys, and engineering specs with your builder or GC." },
    { title: "Site Prep", desc: "Mark dig areas, locate utilities, and mobilize equipment to the jobsite." },
    { title: "Precision Digging", desc: "Excavate to exact depths and dimensions specified in your plans." },
    { title: "Inspection Ready", desc: "Final grade and cleanup so foundation crews can proceed immediately." },
  ],
  guarantee: {
    title: "Foundation-Ready Guarantee",
    desc: "If your foundation inspection fails due to grading or excavation issues we caused, we correct it immediately at no additional cost. Period.",
  },
  faq: [
    { q: "What types of excavation do you handle?", a: "We handle residential foundations, commercial pads, pool excavation, retention ponds, utility trenches, and custom earthwork projects of all sizes." },
    { q: "Do you coordinate with builders?", a: "Yes. We work directly with builders, GCs, and inspectors to keep excavation on schedule with the overall project timeline. Communication is a core part of our service." },
    { q: "How deep can you excavate?", a: "Our equipment can handle excavation depths required for residential and commercial foundations, including deep footings, basements, and retention ponds. We'll assess depth requirements during the estimate." },
    { q: "What happens if you hit rock?", a: "Rock is common in parts of Florida. We have equipment capable of handling rock removal and we'll discuss potential rock conditions during the initial site evaluation." },
  ],
  galleryImages: [excavationPool, excavationSkidsteer, excavationYanmar, excavationBackfill, excavationCoastal2, IMG.excavatorDig],
  videoTitle: "Watch an Excavation Project",
  relatedReviewIndices: [0, 5, 6],
  relatedServices: [
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/trenching", title: "Utility Trenching", icon: Cable },
    { to: "/services/land-clearing", title: "Land Clearing", icon: Trees },
  ],
  seoContent: [
    {
      heading: "Understanding Excavation for Florida Construction",
      paragraphs: [
        "Excavation in Southwest Florida requires specialized knowledge of our unique soil conditions. Florida's sandy soil, high water tables, and limestone layers create challenges that inexperienced contractors often underestimate — leading to foundation problems, cost overruns, and inspection failures.",
        "Our operators understand the geological conditions across Sarasota and Manatee counties. From the sandy soils near the coast to the clay layers inland, we adjust our approach to deliver stable, inspection-ready excavation every time. This local knowledge is what separates professional excavation from simply digging a hole.",
        "We work with residential builders, commercial general contractors, pool companies, and property developers who need excavation done right the first time. Our reputation for precision and reliability is why builders keep calling us back project after project.",
      ],
      bullets: [
        "High water table management techniques",
        "Sandy soil stabilization methods",
        "Limestone and rock removal capability",
        "Dewatering solutions for wet excavations",
        "Soil testing coordination with engineers",
        "Florida building code compliance at every depth",
      ],
      linkText: "Learn about our site grading services",
      linkTo: "/services/site-grading",
    },
    {
      heading: "Residential vs. Commercial Excavation in Sarasota-Bradenton",
      paragraphs: [
        "Residential and commercial excavation projects have different requirements, timelines, and coordination needs. Residential foundation excavation typically involves single-family home pads, pool excavation, and utility trenches — all done within tight neighborhood spaces with minimal disruption to surrounding properties.",
        "Commercial excavation involves larger equipment, deeper cuts, more complex grading plans, and coordination with multiple trades and inspectors. Whether it's a retail pad along US-41, a storage facility in Lakewood Ranch, or a church site in Parrish, our commercial excavation team handles the scale and complexity these projects demand.",
      ],
      bullets: [
        "Residential foundation pads to exact specs",
        "Pool excavation for all major pool builders",
        "Commercial pad prep for retail and office",
        "Retention pond excavation to engineering plans",
        "Multi-phase development site work",
        "Builder-friendly scheduling and communication",
      ],
      linkText: "View our completed projects",
      linkTo: "/projects",
    },
  ],
  serviceAreaIntro: "Our excavation services are available across Southwest Florida. From residential foundations to commercial pads, we bring the right equipment and expertise to every project in your area.",
};

export function ExcavationPage() {
  return <ServicePageTemplate data={data} />;
}