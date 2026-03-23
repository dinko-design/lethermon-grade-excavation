"use client";

import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import { LandingPageTemplate } from "../LandingPageTemplate";
import type { LandingPageData } from "../LandingPageTemplate";
import { IMG } from "../data";
import excavationHero from "@/assets/images/excavation-pool-overhead.webp";
import excavationArm from "@/assets/images/excavation-yanmar-residential.webp";
import excavationBucket from "@/assets/images/excavation-pool-backfill.webp";

const data: LandingPageData = {
  slug: "excavation",
  serviceType: "Excavation",
  formName: "offer-excavation",
  hero: {
    headline: "Need Excavation Done Right the First Time?",
    subheadline:
      "Bad excavation means failed inspections, schedule delays, and cost overruns. We deliver build-ready sites on time, every time — so your project stays on track.",
    heroImg: excavationHero,
    offer: "Free On-Site Project Estimate",
    urgency: "Scheduling slots filling fast — reserve your project timeline now.",
  },
  trustBadges: [
    { icon: Shield, label: "Licensed & Insured", detail: "Full liability coverage" },
    { icon: Award, label: "Military-Owned", detail: "Veteran-operated business" },
    { icon: Star, label: "5.0 Rating", detail: "47+ verified reviews" },
    { icon: CheckCircle, label: "200+ Projects", detail: "SW Florida since 2009" },
    { icon: Clock, label: "48-Hour Mobilization", detail: "Fast crew deployment" },
  ],
  proofSection: {
    heading: "Professional Excavation Across Southwest Florida",
    images: [
      { src: excavationHero, alt: "Pool excavation aerial view in Sarasota FL", caption: "Pool excavation — Sarasota" },
      { src: excavationArm, alt: "Residential excavation with Yanmar equipment", caption: "Foundation excavation — residential" },
      { src: excavationBucket, alt: "Excavation backfill work in progress", caption: "Precise grading and backfill" },
    ],
    stat: { value: "200+", label: "Projects Completed in SW Florida" },
  },
  offerSection: {
    heading: "Get Your Free Excavation Estimate",
    description:
      "We evaluate your site, review plans, and provide a detailed estimate with project timeline — before you commit to anything.",
    includes: [
      "On-site evaluation with plans review",
      "Detailed cost breakdown",
      "Project timeline & scheduling",
      "Equipment & crew assessment",
      "Coordination with your GC or builder",
      "No-surprise pricing guarantee",
    ],
    noObligation: "No obligation. Builders and contractors trust us because we deliver — not because we oversell.",
  },
  process: [
    { title: "Request Estimate", desc: "Call us or fill out the form. We respond within 24 hours." },
    { title: "Site Evaluation", desc: "We visit your site, review plans, and assess equipment needs." },
    { title: "Transparent Quote", desc: "Detailed estimate with timeline — no hidden fees, no surprises." },
    { title: "We Break Ground", desc: "Our crew mobilizes fast. Build-ready sites delivered on schedule." },
  ],
  reviewIndices: [0, 3, 6],
  form: {
    heading: "Request Your Free Excavation Estimate",
    subheading: "Tell us about your project and we'll schedule a site evaluation.",
    projectTypeOptions: [
      "Foundation Excavation",
      "Pool Excavation",
      "Site Preparation",
      "Trenching & Utilities",
      "Commercial Excavation",
      "Other",
    ],
    successMessage:
      "Thank you! We'll contact you within 24 hours to discuss your project and schedule a site evaluation.",
  },
  seoTitle: "Excavation Contractor Sarasota & Bradenton | Free Estimate",
  seoDescription:
    "Professional excavation services in Sarasota and Bradenton FL. Foundation digging, pool excavation, site prep. Free project estimate — call (941) 290-7208.",
};

export function ExcavationOffer() {
  return <LandingPageTemplate data={data} />;
}
