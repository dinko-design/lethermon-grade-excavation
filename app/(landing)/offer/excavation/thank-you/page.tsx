import type { Metadata } from "next";
import { ExcavationThankYou } from "@/app/components/landing/ExcavationThankYou";

export const metadata: Metadata = {
  title: "Thank You — Excavation Estimate Request Received",
  description:
    "Your excavation estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <ExcavationThankYou />;
}
