import type { Metadata } from "next";
import { ExcavationOffer } from "@/app/components/landing/ExcavationOffer";

export const metadata: Metadata = {
  title: "Excavation Special Offer",
  description:
    "Get a free excavation estimate. Professional excavation services in Bradenton & Sarasota FL.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <ExcavationOffer />;
}
