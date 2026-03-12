import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import { LandingPageTemplate } from "../LandingPageTemplate";
import type { LandingPageData } from "../LandingPageTemplate";
import demolitionHero from "@/assets/images/demolition-mobile-home-hero.webp";
import demolitionWaterfront from "@/assets/images/demolition-waterfront-cover.webp";
import { IMG } from "../data";

const data: LandingPageData = {
  slug: "demolition",
  serviceType: "Demolition",
  formName: "offer-demolition",
  hero: {
    headline: "Old Structure Standing in the Way of Your Plans?",
    subheadline:
      "Demolition delays cascade through every phase of your project timeline. We tear it down safely and clear the site — so you can build what's next.",
    heroImg: demolitionHero,
    offer: "Free Demolition Quote",
    urgency: "Priority scheduling available — remove the obstacle and start building sooner.",
  },
  trustBadges: [
    { icon: Shield, label: "Licensed & Insured", detail: "Full liability coverage" },
    { icon: Award, label: "Military-Owned", detail: "Veteran-operated business" },
    { icon: Star, label: "5.0 Rating", detail: "47+ verified reviews" },
    { icon: CheckCircle, label: "200+ Projects", detail: "SW Florida since 2009" },
    { icon: Clock, label: "Fast Turnaround", detail: "Most demos in 1-3 days" },
  ],
  proofSection: {
    heading: "Demolition Projects Across Southwest Florida",
    images: [
      { src: demolitionHero, alt: "Mobile home demolition in Bradenton FL", caption: "Residential demolition — Bradenton" },
      { src: demolitionWaterfront, alt: "Waterfront structure demolition", caption: "Waterfront structure removal" },
      { src: IMG.heavyEquip, alt: "Heavy equipment fleet for demolition projects", caption: "Modern equipment for safe demolition" },
    ],
    stat: { value: "200+", label: "Projects Completed in SW Florida" },
  },
  offerSection: {
    heading: "Get Your Free Demolition Quote",
    description:
      "We assess the structure, check for hazards, coordinate permits, and provide a complete demolition estimate — at no cost to you.",
    includes: [
      "Structure assessment & hazard check",
      "Permit coordination",
      "Debris removal & disposal plan",
      "Site clearing after demolition",
      "Timeline & scheduling",
      "Complete written estimate",
    ],
    noObligation: "No obligation. We'll tell you exactly what it takes to clear the site and start fresh.",
  },
  process: [
    { title: "Request Quote", desc: "Fill out the form or call. We'll schedule a site assessment." },
    { title: "Structure Assessment", desc: "We evaluate the structure, check for hazards, and plan the approach." },
    { title: "Quote & Permits", desc: "Detailed estimate with permit coordination and debris disposal plan." },
    { title: "Safe Demolition", desc: "Our crew handles teardown, hauling, and site clearing — ready for what's next." },
  ],
  reviewIndices: [2, 6, 0],
  form: {
    heading: "Request Your Free Demolition Quote",
    subheading: "Tell us about the structure you need removed and we'll provide a detailed estimate.",
    projectTypeOptions: [
      "Residential Demolition",
      "Mobile Home Removal",
      "Commercial Demolition",
      "Structure Removal",
      "Concrete Removal",
      "Other",
    ],
    successMessage:
      "Thank you! We'll contact you within 24 hours to discuss your demolition project and schedule a site assessment.",
  },
  seoTitle: "Demolition Contractor Sarasota & Bradenton | Free Quote",
  seoDescription:
    "Professional demolition services in Sarasota and Bradenton FL. Residential demolition, structure removal, site clearing. Free quote — call (941) 290-7208.",
};

export function DemolitionOffer() {
  return <LandingPageTemplate data={data} />;
}
