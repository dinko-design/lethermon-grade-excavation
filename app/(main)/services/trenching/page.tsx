import type { Metadata } from "next";
import { TrenchingPage } from "@/app/components/services/TrenchingPage";

export const metadata: Metadata = {
  title: "Utility Trenching Services | Bradenton & Sarasota FL",
  description:
    "Code-compliant utility trenching for water, sewer, electric, and gas lines in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/trenching" },
};

export default function Page() {
  return <TrenchingPage />;
}
