import type { Metadata } from "next";
import { FoundationPrepPage } from "@/app/components/services/FoundationPrepPage";

export const metadata: Metadata = {
  title: "Foundation Excavation & Footing Preparation | Bradenton & Sarasota FL",
  description:
    "Precision foundation excavation, footing trenches, building pad preparation, and finish grading for residential and commercial construction in Southwest Florida. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/foundation-prep" },
};

export default function Page() {
  return <FoundationPrepPage />;
}
