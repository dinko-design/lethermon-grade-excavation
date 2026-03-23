import type { Metadata } from "next";
import { LandClearingThankYou } from "@/app/components/landing/LandClearingThankYou";

export const metadata: Metadata = {
  title: "Thank You — Land Clearing Estimate Request Received",
  description:
    "Your land clearing estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <LandClearingThankYou />;
}
