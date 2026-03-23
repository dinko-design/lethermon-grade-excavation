import type { Metadata } from "next";
import { MilitaryPage } from "@/app/components/MilitaryPage";

export const metadata: Metadata = {
  title: "Military-Owned Excavation | Veteran Discount | Lethermon Grade Excavations",
  description:
    "Lethermon Grade Excavations is a military-owned excavation contractor in Bradenton and Sarasota FL. 10% veteran discount on all services. Military discipline, community commitment.",
};

export default function Page() {
  return <MilitaryPage />;
}
