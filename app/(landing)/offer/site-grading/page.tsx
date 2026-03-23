import type { Metadata } from "next";
import { SiteGradingOffer } from "@/app/components/landing/SiteGradingOffer";

export const metadata: Metadata = {
  title: "Site Grading Special Offer",
  description:
    "Get a free site grading estimate. Professional grading services in Bradenton & Sarasota FL.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <SiteGradingOffer />;
}
