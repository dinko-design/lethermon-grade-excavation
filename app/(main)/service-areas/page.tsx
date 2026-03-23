import type { Metadata } from "next";
import { ServiceAreasPage } from "@/app/components/ServiceAreasPage";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Lethermon Grade Excavations serves Bradenton, Sarasota, Venice, Lakewood Ranch, Palmetto, North Port, and surrounding Southwest Florida communities.",
  alternates: { canonical: "/service-areas" },
};

export default function Page() {
  return <ServiceAreasPage />;
}
