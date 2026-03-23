import type { Metadata } from "next";
import { DemolitionThankYou } from "@/app/components/landing/DemolitionThankYou";

export const metadata: Metadata = {
  title: "Thank You — Demolition Estimate Request Received",
  description:
    "Your demolition estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <DemolitionThankYou />;
}
