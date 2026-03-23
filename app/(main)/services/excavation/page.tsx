import type { Metadata } from "next";
import { ExcavationPage } from "@/app/components/services/ExcavationPage";

export const metadata: Metadata = {
  title: "Excavation Services | Bradenton & Sarasota FL",
  description:
    "Professional foundation digging, structural excavation, and earthwork in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/excavation" },
};

export default function Page() {
  return <ExcavationPage />;
}
