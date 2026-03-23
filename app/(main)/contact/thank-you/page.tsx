import type { Metadata } from "next";
import { ContactThankYou } from "@/app/components/ContactThankYou";

export const metadata: Metadata = {
  title: "Thank You — Estimate Request Received",
  description:
    "Your estimate request has been received. We'll contact you within 24 hours.",
  robots: "noindex, nofollow",
};

export default function Page() {
  return <ContactThankYou />;
}
