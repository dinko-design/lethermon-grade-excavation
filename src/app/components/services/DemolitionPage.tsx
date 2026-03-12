import { Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { ServicePageTemplate } from "../ServicePageTemplate";
import { IMG } from "../data";
import type { ServicePageData } from "../ServicePageTemplate";
import demoHero from "@/assets/images/demolition-mobile-home-hero.webp";
import demoAerial from "@/assets/images/demolition-aerial-cover.webp";
import demoWaterfront from "@/assets/images/demolition-waterfront-cover.webp";
import demoDeere from "@/assets/images/demolition-deere-roof.webp";
import demoRubble from "@/assets/images/demolition-excavator-rubble.webp";
import demoCleanup from "@/assets/images/demolition-waterfront-cleanup.webp";
import demoVideo from "@/assets/videos/demolition-longboat-key.mp4";
import demoPoster from "@/assets/videos/demolition-longboat-key-poster.webp";

const data: ServicePageData = {
  slug: "demolition",
  seoTitle: "Demolition Services & Structure Removal | Bradenton & Sarasota FL",
  seoDescription: "Safe residential and commercial demolition, debris removal, and complete site cleanup in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208.",
  icon: Building2,
  title: "Demolition",
  tagline: "Safe, efficient structure demolition with complete debris removal and site cleanup. We prepare your site for what comes next.",
  heroImg: demoHero,
  description: [
    "Whether you're removing an old structure to make way for new construction, clearing a damaged building, or demolishing concrete and hardscape, our demolition services handle the complete process from start to finish.",
    "Safety is our top priority during demolition. Our crews follow strict safety protocols, manage dust and debris control, and coordinate with utility companies to ensure all services are properly disconnected before work begins.",
    "Every demolition project ends with complete debris removal and site cleanup. We don't leave rubble behind. Your site will be clean, level, and ready for the next phase of construction or development.",
  ],
  features: [
    "Residential structure demolition",
    "Commercial building demolition",
    "Concrete & slab removal",
    "Pool demolition & fill",
    "Interior selective demolition",
    "Foundation removal",
    "Debris hauling & disposal",
    "Utility disconnection coordination",
    "Dust & debris control",
    "Complete site cleanup",
  ],
  process: [
    { title: "Site Survey", desc: "Assess the structure, identify hazards, and coordinate utility disconnection." },
    { title: "Permits & Safety", desc: "Obtain necessary permits and establish safety zones around the work area." },
    { title: "Demolition", desc: "Systematically demolish the structure using appropriate equipment." },
    { title: "Cleanup & Haul", desc: "Remove all debris, level the site, and leave it construction-ready." },
  ],
  guarantee: {
    title: "Safe Demo Guarantee",
    desc: "We handle demolition safely and remove 100% of debris so your site is completely clean and ready for the next phase. No rubble left behind, guaranteed.",
  },
  faq: [
    { q: "Do I need a permit for demolition?", a: "Yes, most demolition work in Sarasota and Manatee counties requires permits. We handle the permit process and coordinate with local authorities to ensure compliance." },
    { q: "How long does demolition take?", a: "A residential structure can typically be demolished and cleared in 2-5 days depending on size and complexity. Commercial demolition may take longer. We provide accurate timelines in our estimate." },
    { q: "Do you handle asbestos or hazardous materials?", a: "We coordinate with certified hazardous material abatement contractors when needed. A pre-demolition inspection identifies any hazardous materials that must be removed before demolition." },
    { q: "What happens to the demolition debris?", a: "We haul all debris to licensed disposal facilities. Materials like concrete and metal are recycled when possible. The entire site is cleaned and leveled after demolition." },
  ],
  galleryImages: [demoHero, demoAerial, demoWaterfront, demoDeere, demoRubble, demoCleanup],
  videoTitle: "Watch a Demolition Project",
  videoSrc: demoVideo,
  videoPoster: demoPoster,
  relatedReviewIndices: [2, 3, 6],
  relatedServices: [
    { to: "/services/land-clearing", title: "Land Clearing", icon: Trees },
    { to: "/services/excavation", title: "Excavation", icon: Shovel },
    { to: "/services/site-grading", title: "Site Grading", icon: Ruler },
  ],
  seoContent: [
    {
      heading: "Understanding the Demolition Process in Florida",
      paragraphs: [
        "Demolition in Florida involves more than swinging a wrecking ball. Local regulations in Sarasota and Manatee counties require permits, asbestos inspections for structures built before 1980, utility disconnection verification, and proper debris disposal documentation. Navigating these requirements correctly is essential to avoid fines, delays, and liability issues.",
        "Our demolition process starts with a thorough pre-demolition assessment. We inspect the structure, identify any hazardous materials, coordinate utility disconnection with local providers, and obtain all required permits before any work begins. This preparation ensures the actual demolition proceeds safely and efficiently.",
        "After demolition, our crews don't just leave a pile of rubble. We remove 100% of debris, sort recyclable materials like concrete and metal, and leave your site graded and ready for the next phase of construction. This complete approach means you're not left coordinating multiple contractors to clean up after the demo crew.",
      ],
      bullets: [
        "Pre-demolition hazardous material assessment",
        "Sarasota & Manatee County permit coordination",
        "Utility disconnection verification",
        "Dust and debris containment measures",
        "Recyclable material separation",
        "Complete site cleanup and rough grading",
      ],
      linkText: "Learn about our land clearing services",
      linkTo: "/services/land-clearing",
    },
    {
      heading: "Types of Demolition Projects We Handle",
      paragraphs: [
        "From single-family home teardowns to commercial structure removal, our demolition capabilities cover the full range of projects in Southwest Florida. We also handle specialized demolition including pool removal and fill, concrete slab removal, interior selective demolition, and foundation extraction.",
        "Pool demolition is one of our most common residential requests. Whether you're removing a pool to reclaim yard space or demolishing an old pool as part of a home renovation, we handle the complete process including draining, demolition, debris removal, fill material, and compaction — leaving you with a level, usable yard.",
      ],
      bullets: [
        "Full residential structure demolition",
        "Commercial building demolition",
        "Pool demolition and fill-in",
        "Concrete slab and foundation removal",
        "Interior selective demo for renovations",
        "Garage, shed, and outbuilding removal",
      ],
      linkText: "Request a free demolition estimate",
      linkTo: "/contact",
    },
  ],
  serviceAreaIntro: "Our demolition services are available throughout Sarasota, Manatee, and surrounding counties. Every project includes complete debris removal and site cleanup.",
};

export function DemolitionPage() {
  return <ServicePageTemplate data={data} />;
}