import { Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import { LandingPageTemplate } from "../LandingPageTemplate";
import type { LandingPageData } from "../LandingPageTemplate";
import drainageHero from "@/assets/images/drainage-pipe-cover.webp";
import { IMG } from "../data";

const data: LandingPageData = {
  slug: "drainage",
  serviceType: "Drainage Solutions",
  formName: "offer-drainage",
  hero: {
    headline: "Water Pooling Around Your Home? It's Getting Worse.",
    subheadline:
      "Standing water erodes foundations, breeds mold, and drops property value. The longer you wait, the more expensive the fix. Let us diagnose the problem — for free.",
    heroImg: drainageHero,
    offer: "Free Drainage Inspection",
    urgency: "Florida rainy season approaches — schedule your inspection before problems escalate.",
  },
  trustBadges: [
    { icon: Shield, label: "Licensed & Insured", detail: "Full liability coverage" },
    { icon: Award, label: "Military-Owned", detail: "Veteran-operated business" },
    { icon: Star, label: "5.0 Rating", detail: "47+ verified reviews" },
    { icon: CheckCircle, label: "200+ Projects", detail: "SW Florida since 2009" },
    { icon: Clock, label: "Same-Day Evaluation", detail: "For urgent drainage issues" },
  ],
  proofSection: {
    heading: "Drainage Solutions for Florida Properties",
    images: [
      { src: drainageHero, alt: "Drainage pipe installation in Sarasota FL", caption: "French drain installation" },
      { src: IMG.gradedLot, alt: "Graded lot with proper drainage in Bradenton", caption: "Proper grading for drainage" },
      { src: IMG.florida, alt: "Residential drainage work in Florida", caption: "Residential drainage correction" },
    ],
    stat: { value: "200+", label: "Drainage & Grading Projects Completed" },
  },
  offerSection: {
    heading: "Get Your Free Drainage Inspection",
    description:
      "We inspect your property, identify where water is pooling and why, and recommend the most cost-effective solution — all before you spend a dime.",
    includes: [
      "Full property drainage assessment",
      "Water flow pattern analysis",
      "Foundation risk evaluation",
      "Solution recommendation",
      "Written estimate with options",
      "Permit guidance if needed",
    ],
    noObligation: "No obligation. We want you to understand the problem before deciding on a fix.",
  },
  process: [
    { title: "Schedule Inspection", desc: "Call or fill out the form. We offer same-day visits for urgent issues." },
    { title: "Drainage Assessment", desc: "We identify where water flows, pools, and where the risk is greatest." },
    { title: "Solution & Estimate", desc: "Clear options with pricing — from simple re-grading to full drainage systems." },
    { title: "Problem Solved", desc: "Our crew installs the fix. Your property stays dry through every storm." },
  ],
  reviewIndices: [4, 1, 7],
  form: {
    heading: "Schedule Your Free Drainage Inspection",
    subheading: "Tell us about the water issues on your property and we'll schedule a free assessment.",
    projectTypeOptions: [
      "Yard Flooding / Standing Water",
      "Foundation Water Issues",
      "French Drain Installation",
      "Grading for Drainage",
      "Stormwater Management",
      "Other",
    ],
    successMessage:
      "Thank you! We'll contact you within 24 hours to schedule your free drainage inspection. For urgent flooding issues, call us directly.",
  },
  leadMagnet: {
    title: "Free Guide: 5 Signs Your Florida Yard Has Hidden Drainage Problems",
    description: "Learn the warning signs that indicate drainage issues before they become expensive repairs.",
    downloadUrl: "/guides/drainage-solutions-checklist.pdf",
  },
  seoTitle: "Drainage Solutions Sarasota & Bradenton | Free Inspection",
  seoDescription:
    "Solve yard drainage problems in Sarasota and Bradenton FL. French drains, grading, stormwater management. Free drainage inspection — call (941) 290-7208.",
};

export function DrainageOffer() {
  return <LandingPageTemplate data={data} />;
}
