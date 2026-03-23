import type { Metadata } from "next";
import { DrainagePage } from "@/app/components/services/DrainagePage";

export const metadata: Metadata = {
  title: "Drainage Solutions | Bradenton & Sarasota FL",
  description:
    "French drains, water management, and stormwater solutions in Bradenton, Sarasota, and Southwest Florida. Fully insured. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/drainage" },
};

export default function Page() {
  return <DrainagePage />;
}
