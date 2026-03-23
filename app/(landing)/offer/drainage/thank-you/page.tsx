import type { Metadata } from "next";
import { DrainageThankYou } from "@/app/components/landing/DrainageThankYou";

export const metadata: Metadata = {
  title: "Thank You — Drainage Estimate Request Received",
  description:
    "Your drainage estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <DrainageThankYou />;
}
