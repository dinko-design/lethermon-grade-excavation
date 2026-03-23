import type { Metadata } from "next";
import { LandClearingPage } from "@/app/components/services/LandClearingPage";

export const metadata: Metadata = {
  title: "Land Clearing & Lot Clearing Services | Bradenton & Sarasota FL",
  description:
    "Professional land clearing, tree removal, stump grinding, and lot preparation in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/land-clearing" },
};

export default function Page() {
  return <LandClearingPage />;
}
