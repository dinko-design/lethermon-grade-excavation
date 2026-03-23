"use client";

import { CloudRain, Droplets, Ruler, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import type { ServicePageData } from "../ServicePageTemplate";
import drainageCulvert from "@/assets/images/drainage-culvert-pipe.webp";
import drainagePipe from "@/assets/images/drainage-pipe-cover.webp";
import drainageSunset from "@/assets/images/drainage-pvc-sunset.webp";
import drainagePond from "@/assets/images/drainage-retention-pond.webp";
import drainagePond2 from "@/assets/images/drainage-retention-pond-2.webp";
import trenchPipe from "@/assets/images/trenching-pipe-palmetto.webp";
import drainageVideo from "@/assets/videos/drainage-retention-pond.mp4";
import drainagePoster from "@/assets/videos/drainage-retention-pond-poster.webp";

const data: ServicePageData = {
  slug: "stormwater-drainage",
  seoTitle: "Stormwater Drainage Systems & Catch Basin Installation | Bradenton & Sarasota FL",
  seoDescription: "Commercial and residential stormwater drainage systems, catch basin installation, culvert pipes, and trench drains in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208.",
  icon: CloudRain,
  title: "Stormwater Drainage Systems",
  tagline: "Engineered stormwater solutions from catch basins to culvert systems. We build the infrastructure that keeps water where it belongs.",
  heroImg: drainageCulvert,
  description: [
    "Stormwater infrastructure is fundamentally different from residential drainage. Catch basins, culvert pipes, trench drains, and retention systems are engineered to handle serious water volume for commercial properties, subdivisions, and municipal projects. These systems require precise grading, heavy-duty materials, and installation methods that meet strict engineering specifications.",
    "In Southwest Florida, stormwater systems must comply with SWFWMD (Southwest Florida Water Management District) regulations and local permitting requirements. We handle engineering coordination and navigate the permit process so your project stays on schedule. From environmental resource permits to construction stormwater pollution prevention plans, we manage the regulatory side alongside the physical installation.",
    "Proper installation is everything with stormwater infrastructure. Poorly installed systems fail during the heaviest rains — exactly when they're needed most. Our crew ensures correct grade on every pipe run, proper bedding material under every structure, and watertight connections at every joint. The result is a system that performs as engineered for decades, not one that settles, separates, or backs up after the first major storm.",
  ],
  features: [
    "Catch basin installation",
    "Culvert pipe systems",
    "Trench drain installation",
    "Stormwater retention ponds",
    "Inlet & outlet structures",
    "Underground pipe networks",
    "Erosion control systems",
    "SWPPP compliance",
    "Stormwater permit coordination",
    "System testing & certification",
  ],
  process: [
    { title: "Engineering Review", desc: "Review stormwater plans, verify elevations, and coordinate with the civil engineer on specifications." },
    { title: "Excavation", desc: "Dig retention areas, trench pipe routes, and install bedding material to engineered specifications." },
    { title: "Installation", desc: "Set catch basins, connect pipe runs, build inlet/outlet structures, then backfill and compact." },
    { title: "Testing", desc: "Flow test the system, verify grades, and document as-built conditions for permit closeout." },
  ],
  guarantee: {
    title: "Drainage Performance Guarantee",
    desc: "We install stormwater systems that perform as engineered — proper grades, tight connections, and passing final inspection. Our work is built to handle Florida's heaviest rain events and meet every regulatory requirement.",
  },
  faq: [
    { q: "What's the difference between stormwater drainage and residential drainage?", a: "Stormwater systems handle larger volumes and are engineered infrastructure — catch basins, culverts, retention ponds — versus residential French drains and yard grading. They require permits and engineering plans." },
    { q: "Do I need a permit for stormwater work?", a: "Most stormwater infrastructure requires permits from SWFWMD and/or local county. We coordinate the permit process and provide documentation for closeout." },
    { q: "Can you install catch basins on residential properties?", a: "Yes, catch basins and trench drains are common on residential properties with significant water management needs, large driveways, or properties that collect runoff from adjacent land." },
    { q: "How long does a stormwater system installation take?", a: "Depends on scope. A residential catch basin system may take 2-3 days. A commercial retention system with pipe network can take 2-4 weeks. We provide detailed timelines in every estimate." },
  ],
  galleryImages: [drainageCulvert, drainagePipe, drainageSunset, drainagePond, drainagePond2, trenchPipe],
  videoTitle: "Watch a Drainage Project",
  videoSrc: drainageVideo,
  videoPoster: drainagePoster,
  relatedReviewIndices: [4, 2, 6],
  relatedServices: [
    { to: "/services/drainage", title: "Drainage Solutions", icon: Droplets },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
    { to: "/services/trenching", title: "Utility Trenching", icon: Cable },
  ],
  seoContent: [
    {
      heading: "Stormwater Infrastructure for Florida's Climate",
      paragraphs: [
        "Florida receives over 50 inches of rainfall annually, and our flat coastal terrain doesn't drain naturally. As development continues to replace permeable land with impervious surfaces — rooftops, parking lots, roads — the need for engineered stormwater management grows with every new project. Without proper infrastructure, runoff overwhelms natural systems, causes flooding, and carries pollutants into waterways.",
        "Off-the-shelf drainage products aren't designed for the volume and velocity of water that commercial sites, subdivisions, and large residential properties generate during Florida's intense summer storms. These projects require engineered catch basins sized for peak flow rates, culvert pipes with proper hydraulic capacity, and retention systems that meet SWFWMD's strict environmental standards. Getting the engineering right is just as important as getting the installation right.",
        "Our team works directly with civil engineers and stormwater designers to translate plans into properly built infrastructure. We understand pipe sizing calculations, invert elevations, and the critical relationship between grade and flow rate — the technical details that separate a stormwater system that works from one that floods.",
      ],
      bullets: [
        "Catch basins sized for peak flow rates",
        "Culvert pipes for road and driveway crossings",
        "Trench drains for parking lots and loading areas",
        "Retention and detention ponds per SWFWMD requirements",
        "Erosion control during and after construction",
        "Overflow protection for extreme weather events",
      ],
      linkText: "Learn about our drainage solutions",
      linkTo: "/services/drainage",
    },
    {
      heading: "Commercial & Municipal Stormwater Solutions",
      paragraphs: [
        "Developers, HOAs, and municipalities need stormwater systems that meet regulatory requirements and perform reliably for decades. A failed stormwater system doesn't just cause flooding — it triggers permit violations, environmental fines, and expensive emergency repairs. We build these systems to last, using heavy-duty materials and installation practices that exceed minimum standards.",
        "We coordinate directly with SWFWMD on environmental resource permits, manage construction-phase stormwater pollution prevention plans (SWPPP), and provide the as-built documentation required for permit closeout. For multi-phase developments, we plan stormwater infrastructure that accommodates future phases while keeping current phases compliant and functional.",
      ],
      bullets: [
        "SWFWMD environmental resource permit coordination",
        "Multi-phase development stormwater planning",
        "HOA and subdivision drainage systems",
        "Parking lot and commercial property drainage",
        "Pipe network sizing and grade calculations",
        "As-built documentation for permit closeout",
      ],
      linkText: "Get a free stormwater estimate",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro: "Our stormwater drainage services are available throughout Sarasota, Manatee, and surrounding counties. From residential catch basins to commercial retention systems.",
};

export function StormwaterDrainagePage() {
  return <ServicePageTemplate data={data} />;
}
