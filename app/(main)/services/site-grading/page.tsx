import type { Metadata } from "next";
import { SiteGradingPage } from "@/app/components/services/SiteGradingPage";

export const metadata: Metadata = {
  title: "Site Grading Services | Bradenton & Sarasota FL",
  description:
    "Laser-guided precision site grading for residential and commercial projects in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/site-grading" },
};

export default function Page() {
  return <SiteGradingPage />;
}
