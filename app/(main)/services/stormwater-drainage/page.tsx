import type { Metadata } from "next";
import { StormwaterDrainagePage } from "@/app/components/services/StormwaterDrainagePage";

export const metadata: Metadata = {
  title: "Stormwater Drainage Systems & Catch Basin Installation | Bradenton & Sarasota FL",
  description:
    "Commercial and residential stormwater drainage systems, catch basin installation, culvert pipes, and trench drains in Bradenton, Sarasota, and Southwest Florida. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/stormwater-drainage" },
};

export default function Page() {
  return <StormwaterDrainagePage />;
}
