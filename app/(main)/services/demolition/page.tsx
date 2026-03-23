import type { Metadata } from "next";
import { DemolitionPage } from "@/app/components/services/DemolitionPage";

export const metadata: Metadata = {
  title: "Demolition Services | Bradenton & Sarasota FL",
  description:
    "Safe structure removal and demolition services in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/demolition" },
};

export default function Page() {
  return <DemolitionPage />;
}
