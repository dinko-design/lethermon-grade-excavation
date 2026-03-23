import type { Metadata } from "next";
import { DemolitionOffer } from "@/app/components/landing/DemolitionOffer";

export const metadata: Metadata = {
  title: "Demolition Special Offer",
  description:
    "Get a free demolition estimate. Professional demolition services in Bradenton & Sarasota FL.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <DemolitionOffer />;
}
