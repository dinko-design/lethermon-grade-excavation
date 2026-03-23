import type { Metadata } from "next";
import { LandClearingOffer } from "@/app/components/landing/LandClearingOffer";

export const metadata: Metadata = {
  title: "Land Clearing Special Offer",
  description:
    "Get a free land clearing estimate. Professional lot clearing in Bradenton & Sarasota FL.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <LandClearingOffer />;
}
