"use client";

import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import { LandingPageTemplate } from "../LandingPageTemplate";
import type { LandingPageData } from "../LandingPageTemplate";
import { IMG } from "../data";
import clearingHero from "@/assets/images/land-clearing-stump-removal.webp";
import clearingBradenton from "@/assets/images/land-clearing-bradenton.webp";
import clearingCover from "@/assets/images/land-clearing-cover.webp";

const data: LandingPageData = {
  slug: "land-clearing",
  serviceType: "Land Clearing",
  formName: "offer-land-clearing",
  hero: {
    headline: "Raw Land Sitting Unused? We'll Make It Build-Ready.",
    subheadline:
      "Every month your lot sits uncleared, you're losing time on permits, builder schedules, and market timing. Our crew transforms raw Florida land into construction-ready sites — fast.",
    heroImg: clearingHero,
    offer: "Free Site Evaluation & Clearing Estimate",
    urgency: "Limited clearing slots available this month — book now to secure your spot.",
  },
  trustBadges: [
    { icon: Shield, label: "Licensed & Insured", detail: "Full liability coverage" },
    { icon: Award, label: "Military-Owned", detail: "Veteran-operated business" },
    { icon: Star, label: "5.0 Rating", detail: "27+ verified reviews" },
    { icon: CheckCircle, label: "1,000+ Projects", detail: "SW Florida since 2009" },
    { icon: Clock, label: "Same-Week Scheduling", detail: "Fast mobilization" },
  ],
  proofSection: {
    heading: "See Our Land Clearing Work Across Southwest Florida",
    images: [
      { src: clearingHero, alt: "Land clearing with stump removal in Bradenton FL", caption: "Residential lot clearing — Bradenton" },
      { src: clearingBradenton, alt: "Cleared lot ready for construction in Bradenton", caption: "Build-ready lot preparation" },
      { src: clearingCover, alt: "Land clearing equipment on Florida jobsite", caption: "Heavy equipment on site — same-week mobilization" },
    ],
    stat: { value: "1,000+", label: "Projects Completed in SW Florida" },
  },
  offerSection: {
    heading: "Get Your Free Land Clearing Evaluation",
    description:
      "We visit your property, assess the vegetation, identify any protected trees, and provide a transparent estimate — all at no cost to you.",
    includes: [
      "On-site property walkthrough",
      "Vegetation & tree assessment",
      "Protected species identification",
      "Detailed written estimate",
      "Permit guidance included",
      "Timeline & scheduling plan",
    ],
    noObligation: "No obligation. No pressure. Just honest answers about your project.",
  },
  process: [
    { title: "Request Evaluation", desc: "Fill out the form or call us. We'll schedule a site visit within days." },
    { title: "Free Site Visit", desc: "We walk your property, assess the work, and identify any permit needs." },
    { title: "Detailed Estimate", desc: "Receive a transparent quote with clear pricing — no hidden fees." },
    { title: "Work Begins", desc: "Our crew mobilizes fast. Most residential lots are cleared in 1-3 days." },
  ],
  reviewIndices: [1, 4, 5],
  form: {
    heading: "Request Your Free Land Clearing Estimate",
    subheading: "Tell us about your property and we'll schedule a free on-site evaluation.",
    projectTypeOptions: [
      "Residential Lot Clearing",
      "Commercial Land Clearing",
      "Brush & Vegetation Removal",
      "Stump Grinding",
      "Selective Clearing",
      "Other",
    ],
    successMessage:
      "Thank you! We'll contact you within 24 hours to schedule your free on-site land clearing evaluation.",
  },
  leadMagnet: {
    title: "Free Guide: Florida Land Clearing Costs & Permits",
    description: "What to expect for pricing, timelines, and permit requirements in Sarasota & Manatee counties.",
    downloadUrl: "/guides/land-clearing-cost-guide.pdf",
  },
  seoTitle: "Land Clearing Sarasota & Bradenton | Free Estimate",
  seoDescription:
    "Professional land clearing services in Sarasota and Bradenton FL. Lot clearing, stump removal, vegetation management. Free site evaluation — call (941) 290-7208.",
};

export function LandClearingOffer() {
  return <LandingPageTemplate data={data} />;
}
