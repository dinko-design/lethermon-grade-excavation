import { Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import gradingHero from "@/assets/images/grading-service-hero.webp";
import gradingCommercial from "@/assets/images/grading-commercial-parking.webp";
import gradingParking from "@/assets/images/grading-parking-lot-roller.webp";
import gradingSarasota from "@/assets/images/grading-sarasota-custom-home.webp";
import gradingBradenton from "@/assets/images/grading-bradenton-lot.webp";
import gradingResidential from "@/assets/images/grading-bradenton-residential.webp";
import gradingBackyard from "@/assets/images/grading-backyard-residential.webp";
import gradingCompactor from "@/assets/images/grading-plate-compactor.webp";
import gradingVideo from "@/assets/videos/grading-drone.mp4";
import gradingPoster from "@/assets/videos/grading-drone-poster.webp";

const data: ServicePageData = {
  slug: "site-grading",
  seoTitle: "Site Grading & Laser Grading Services | Bradenton & Sarasota FL",
  seoDescription: "Laser-guided precision site grading for foundations, driveways, and commercial pads in Bradenton, Sarasota, and Southwest Florida. Build-Ready Guarantee. Free estimates — (941) 290-7208.",
  icon: Ruler,
  title: "Site Grading",
  tagline: "Precision laser-guided grading for foundation pads, drainage slopes, and level building surfaces. Florida soil demands expert grading.",
  heroImg: gradingHero,
  description: [
    "Site grading is one of the most critical steps in construction. Improper grading leads to foundation problems, drainage failures, and failed inspections. We take grading seriously because your entire project depends on it.",
    "Our crews use laser-guided grading systems that achieve precise elevations and drainage slopes down to fractions of an inch. This technology combined with experienced operators ensures every pad, slope, and grade meets exact engineering specifications.",
    "Florida's flat terrain and sandy soil create unique drainage challenges. Without proper grading, rainwater pools around foundations causing structural damage. Our grading approach accounts for Florida's specific drainage requirements and code standards.",
  ],
  features: [
    "Laser-guided precision grading",
    "Foundation pad preparation",
    "Drainage slope creation",
    "Finish grading for landscaping",
    "Driveway & parking grading",
    "Slope correction & leveling",
    "Compaction & soil testing",
    "Elevation adjustments",
    "Swale creation & maintenance",
    "Inspection-ready surfaces",
  ],
  process: [
    { title: "Elevation Survey", desc: "Review survey data and grading plans to establish target elevations." },
    { title: "Rough Grade", desc: "Move earth to approximate final grades using dozers and excavators." },
    { title: "Laser Fine Grade", desc: "Use laser-guided systems for precision grading to exact specs." },
    { title: "Compact & Verify", desc: "Compact soil, verify elevations, and prepare for inspection." },
  ],
  guarantee: {
    title: "Drainage Protection Promise",
    desc: "We grade every site with proper drainage slope to protect your foundation. If grading causes drainage issues, we'll fix it at our expense.",
  },
  faq: [
    { q: "What is laser grading?", a: "Laser grading uses a laser-guided system mounted on equipment to achieve precise elevations. The laser controls the blade automatically, ensuring accuracy within fractions of an inch across the entire site." },
    { q: "Why is grading so important in Florida?", a: "Florida's flat terrain and heavy rainfall mean proper drainage grading is critical. Without correct slopes, water pools around foundations causing structural damage, mold, and inspection failures." },
    { q: "How long does grading take?", a: "A residential lot can typically be graded in 1-2 days. Larger commercial sites may take several days. Accurate grading the first time saves weeks of rework down the line." },
    { q: "Do you handle both rough and finish grading?", a: "Yes. We perform rough grading for initial site preparation and finish grading for final surfaces before construction, landscaping, or paving begins." },
  ],
  galleryImages: [gradingCommercial, gradingParking, gradingSarasota, gradingBradenton, gradingResidential, gradingBackyard, gradingCompactor],
  videoTitle: "Watch Laser Grading in Action",
  videoSrc: gradingVideo,
  videoPoster: gradingPoster,
  relatedReviewIndices: [0, 2, 5],
  relatedServices: [
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/drainage", title: "Drainage Solutions", icon: Droplets },
    { to: "/services/land-clearing", title: "Land Clearing", icon: Trees },
  ],
  seoContent: [
    {
      heading: "The Science Behind Proper Site Grading in Florida",
      paragraphs: [
        "Florida's flat terrain makes proper grading both critical and challenging. Unlike hilly regions where gravity naturally moves water away from structures, Florida properties must be carefully engineered to create the drainage slopes that prevent water damage. Even a fraction of an inch in the wrong direction can cause water to pool against foundations.",
        "Our laser-guided grading technology eliminates guesswork from this process. The laser system automatically controls the blade on our equipment, ensuring consistent slopes across the entire site. This technology paired with experienced operators delivers grading accuracy that meets even the strictest engineering specifications.",
        "Beyond foundations, proper grading affects driveways, parking areas, sidewalks, and landscaping. Every surface on your property needs to direct water toward designated drainage points. Our comprehensive grading approach addresses the entire property — not just the building pad.",
      ],
      bullets: [
        "Laser accuracy to 1/10th of an inch",
        "Positive drainage slope away from all structures",
        "Compaction to engineer-specified density",
        "Swale grading for stormwater management",
        "Driveway and parking area slope creation",
        "Compliance with Florida building code drainage requirements",
      ],
      linkText: "Read about common Florida drainage problems",
      linkTo: "/blog/florida-drainage-problems-solutions",
    },
    {
      heading: "When Do You Need Professional Site Grading?",
      paragraphs: [
        "Professional site grading is essential for new construction, but it's also the solution for many existing property problems. If you're experiencing water pooling near your foundation, soggy yard areas, driveway flooding, or erosion issues, regrading may be the permanent fix you need.",
        "New construction projects require grading at multiple stages: rough grading after clearing, fine grading before foundation work, and finish grading for landscaping and hardscaping. Each stage has specific requirements that affect the next phase of construction. Getting any stage wrong creates compounding problems down the line.",
      ],
      bullets: [
        "New construction pad preparation",
        "Regrading for existing drainage problems",
        "Driveway and parking lot grading",
        "Pool deck and patio area leveling",
        "Landscape grading before sod and planting",
        "Retention area and swale regrading",
      ],
      linkText: "Learn about our drainage solutions",
      linkTo: "/services/drainage",
    },
  ],
  serviceAreaIntro: "Our laser-guided site grading services are available across Southwest Florida. Precision grading is critical in Florida's flat terrain — click a city below to learn more about grading projects in your area.",
};

export function SiteGradingPage() {
  return <ServicePageTemplate data={data} />;
}