import type { Metadata } from "next";
import { SiteDevelopmentPage } from "@/app/components/services/SiteDevelopmentPage";

export const metadata: Metadata = {
  title: "Commercial Site Development & Preparation | Bradenton & Sarasota FL",
  description:
    "Full-scope commercial site development including clearing, mass grading, utility coordination, and stormwater management in Southwest Florida. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/site-development" },
};

export default function Page() {
  return <SiteDevelopmentPage />;
}
