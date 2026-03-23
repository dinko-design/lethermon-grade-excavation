"use client";

import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import { LandingPageTemplate } from "../LandingPageTemplate";
import type { LandingPageData } from "../LandingPageTemplate";
import gradingHero from "@/assets/images/grading-service-hero.webp";
import gradingLot from "@/assets/images/grading-bradenton-lot.webp";
import gradingResidential from "@/assets/images/grading-bradenton-residential.webp";

const data: LandingPageData = {
  slug: "site-grading",
  serviceType: "Site Grading",
  formName: "offer-site-grading",
  hero: {
    headline: "Precision Grading That Passes Inspection the First Time",
    subheadline:
      "Re-grading after other trades have started is the most expensive mistake in construction. Get it right from the start with crews who grade to spec, every time.",
    heroImg: gradingHero,
    offer: "Free Grading Consultation",
    urgency: "Builder priority scheduling available — secure your project slot.",
  },
  trustBadges: [
    { icon: Shield, label: "Licensed & Insured", detail: "Full liability coverage" },
    { icon: Award, label: "Military-Owned", detail: "Veteran-operated business" },
    { icon: Star, label: "5.0 Rating", detail: "27+ verified reviews" },
    { icon: CheckCircle, label: "1,000+ Projects", detail: "SW Florida since 2009" },
    { icon: Clock, label: "Priority Scheduling", detail: "Builder partnerships" },
  ],
  proofSection: {
    heading: "Site Grading Projects Across Southwest Florida",
    images: [
      { src: gradingHero, alt: "Site grading with heavy equipment in Sarasota FL", caption: "Commercial site grading — Sarasota" },
      { src: gradingLot, alt: "Graded residential lot in Bradenton FL", caption: "Residential lot grading — Bradenton" },
      { src: gradingResidential, alt: "Precision residential grading in Bradenton", caption: "Finish grading for new construction" },
    ],
    stat: { value: "1,000+", label: "Projects Completed in SW Florida" },
  },
  offerSection: {
    heading: "Get Your Free Grading Consultation",
    description:
      "We evaluate your site conditions, review drainage requirements, and provide a detailed grading plan and estimate — at no cost.",
    includes: [
      "Site condition assessment",
      "Drainage flow evaluation",
      "Grade elevation planning",
      "Detailed written estimate",
      "Builder schedule coordination",
      "Compaction testing guidance",
    ],
    noObligation: "No obligation. We earn builder partnerships through performance, not sales pressure.",
  },
  process: [
    { title: "Request Consultation", desc: "Fill out the form or call. We schedule quickly for builders." },
    { title: "Site Assessment", desc: "We evaluate grade, drainage, and soil conditions on your lot." },
    { title: "Grading Plan & Quote", desc: "Detailed estimate with elevations, timeline, and clear pricing." },
    { title: "Grade to Spec", desc: "Our crew delivers precise grading that passes inspection first time." },
  ],
  reviewIndices: [0, 2, 5],
  form: {
    heading: "Request Your Free Grading Consultation",
    subheading: "Tell us about your project and we'll schedule a site assessment.",
    projectTypeOptions: [
      "New Construction Grading",
      "Lot Preparation",
      "Re-grading / Correction",
      "Commercial Site Grading",
      "Drainage Grading",
      "Other",
    ],
    successMessage:
      "Thank you! We'll contact you within 24 hours to schedule your free grading consultation.",
  },
  seoTitle: "Grading Contractor Sarasota & Bradenton | Free Consultation",
  seoDescription:
    "Professional site grading in Sarasota and Bradenton FL. Foundation grading, lot preparation, drainage grading. Free consultation — call (941) 290-7208.",
};

export function SiteGradingOffer() {
  return <LandingPageTemplate data={data} />;
}
