import type { Metadata } from "next";
import { ConcreteRemovalPage } from "@/app/components/services/ConcreteRemovalPage";

export const metadata: Metadata = {
  title: "Concrete & Driveway Removal Services | Bradenton & Sarasota FL",
  description:
    "Professional concrete breaking, driveway removal, slab demolition, and hauling in Bradenton, Sarasota, and Southwest Florida. Same-week scheduling. Free estimates — (941) 290-7208.",
  alternates: { canonical: "/services/concrete-removal" },
};

export default function Page() {
  return <ConcreteRemovalPage />;
}
