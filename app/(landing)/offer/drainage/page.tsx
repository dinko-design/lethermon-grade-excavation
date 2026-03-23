import type { Metadata } from "next";
import { DrainageOffer } from "@/app/components/landing/DrainageOffer";

export const metadata: Metadata = {
  title: "Drainage Solutions Special Offer",
  description:
    "Get a free drainage estimate. Professional drainage solutions in Bradenton & Sarasota FL.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <DrainageOffer />;
}
