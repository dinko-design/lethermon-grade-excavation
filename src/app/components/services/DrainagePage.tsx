import { Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import drainagePipe from "@/assets/images/drainage-pipe-cover.webp";
import drainageSunset from "@/assets/images/drainage-pvc-sunset.webp";
import drainageCulvert from "@/assets/images/drainage-culvert-pipe.webp";
import drainagePond from "@/assets/images/drainage-retention-pond.webp";
import drainagePond2 from "@/assets/images/drainage-retention-pond-2.webp";
import drainageVideo from "@/assets/videos/drainage-retention-pond.mp4";
import drainagePoster from "@/assets/videos/drainage-retention-pond-poster.webp";

const data: ServicePageData = {
  slug: "drainage",
  seoTitle: "Drainage Solutions & Water Management | Bradenton & Sarasota FL",
  seoDescription: "French drains, stormwater management, retention ponds, and erosion control in Bradenton, Sarasota, and Southwest Florida. Permanent fix guarantee. Call (941) 290-7208.",
  icon: Droplets,
  title: "Drainage Solutions",
  tagline: "Complete drainage system design and installation. French drains, water redirection, and stormwater management for Florida properties.",
  heroImg: drainageSunset,
  description: [
    "Florida receives over 50 inches of rain annually, and our flat terrain means water doesn't naturally drain away from structures. Poor drainage is one of the most common and expensive problems property owners face in Southwest Florida.",
    "We design and install complete drainage solutions including French drains, catch basins, swales, and underground pipe systems that redirect water away from foundations, driveways, and landscaping. Every system is engineered for Florida's specific soil and rainfall conditions.",
    "Whether you're dealing with an existing drainage problem or need preventive drainage installed with new construction, our team evaluates your property's specific conditions and designs a system that solves the problem permanently.",
  ],
  features: [
    "French drain installation",
    "Catch basin & inlet systems",
    "Underground pipe networks",
    "Swale creation & grading",
    "Water redirection systems",
    "Erosion control solutions",
    "Foundation waterproofing drainage",
    "Yard & landscape drainage",
    "Stormwater management",
    "Free drainage evaluation",
  ],
  process: [
    { title: "Drainage Assessment", desc: "Evaluate water flow patterns, soil conditions, and problem areas on your property." },
    { title: "System Design", desc: "Design a drainage solution tailored to your property's specific conditions." },
    { title: "Installation", desc: "Install pipes, drains, and grading to redirect water away from structures." },
    { title: "Testing & Verification", desc: "Test the system with water to verify proper flow and drainage." },
  ],
  guarantee: {
    title: "Water Problem Assessment",
    desc: "Every site inspection includes a complimentary drainage evaluation to identify potential water issues early. We'll show you exactly where water goes and how to fix it.",
  },
  faq: [
    { q: "What are signs I need drainage work?", a: "Standing water after rain, soggy yards, water stains on foundations, erosion along the house, mushy soil, and mold/mildew smells are all signs of drainage problems that need professional attention." },
    { q: "What is a French drain?", a: "A French drain is a gravel-filled trench with a perforated pipe that collects and redirects groundwater. It's one of the most effective solutions for yard drainage and foundation protection in Florida." },
    { q: "How much do drainage solutions cost?", a: "Drainage costs depend on the system type and property size. Simple French drains start around $1,500-$3,000. Complete property drainage systems can range from $3,000-$10,000+. We provide detailed estimates." },
    { q: "Do drainage problems get worse over time?", a: "Yes. Water problems almost always get worse. Soil erosion accelerates, foundation damage compounds, and repair costs increase. Early drainage intervention saves significant money long-term." },
  ],
  galleryImages: [drainagePipe, drainageCulvert, drainagePond, drainagePond2, drainageSunset, IMG.surveyor],
  videoTitle: "Watch Drainage Installation",
  videoSrc: drainageVideo,
  videoPoster: drainagePoster,
  relatedReviewIndices: [4, 1, 7],
  relatedServices: [
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/trenching", title: "Utility Trenching", icon: Cable },
  ],
  seoContent: [
    {
      heading: "Why Drainage Problems Are So Common in Southwest Florida",
      paragraphs: [
        "Southwest Florida's combination of flat terrain, sandy soil, high water tables, and intense seasonal rainfall creates the perfect conditions for drainage problems. Properties in Sarasota, Bradenton, Venice, and Lakewood Ranch are particularly susceptible because much of this area was developed on land with naturally poor drainage characteristics.",
        "Many homeowners don't notice drainage issues until they become serious — water staining on foundation walls, mushy spots in the yard, or standing water after every rain. By the time these symptoms appear, the underlying problem has often been developing for months or years. Early drainage intervention prevents the expensive foundation repairs, landscape replacement, and mold remediation that chronic water problems cause.",
        "Our drainage assessment evaluates your property's specific conditions including soil permeability, existing grade slopes, water table depth, and proximity to retention areas or bodies of water. This comprehensive evaluation ensures the drainage solution we design actually solves your specific problem — not a generic fix that may not work.",
      ],
      bullets: [
        "Free on-site drainage evaluation for every property",
        "Soil permeability testing and water table assessment",
        "Video documentation of water flow patterns",
        "Custom drainage design for your specific conditions",
        "Solutions that comply with local stormwater codes",
        "Preventive drainage for new construction sites",
      ],
      linkText: "Read: 5 Common Florida Drainage Problems & Solutions",
      linkTo: "/blog/florida-drainage-problems-solutions",
    },
    {
      heading: "Choosing the Right Drainage System for Your Property",
      paragraphs: [
        "Not all drainage problems require the same solution. A French drain that works perfectly for a Gulf Gate property may not be the right choice for a Lakewood Ranch home with different soil conditions. Our approach is always to match the drainage system to your property's specific needs and conditions.",
        "We install French drains, catch basins, channel drains, underground pipe systems, and regrading solutions — often combining multiple approaches for comprehensive water management. Every system we install uses quality materials rated for Florida's conditions and is designed to handle our heaviest rain events.",
      ],
      bullets: [
        "French drains for subsurface water collection",
        "Catch basins for surface water management",
        "Channel drains for driveways and patios",
        "Grading and swale creation for natural drainage",
        "Sump pump systems for chronic water issues",
        "Complete property water management plans",
      ],
      linkText: "Get a free drainage evaluation",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro: "Drainage problems are common across Southwest Florida due to our flat terrain and heavy rainfall. We provide professional drainage solutions in every community we serve.",
};

export function DrainagePage() {
  return <ServicePageTemplate data={data} />;
}