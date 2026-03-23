import type { Metadata } from "next";
import { SiteGradingThankYou } from "@/app/components/landing/SiteGradingThankYou";

export const metadata: Metadata = {
  title: "Thank You — Site Grading Estimate Request Received",
  description:
    "Your site grading estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <SiteGradingThankYou />;
}
