import type { Metadata } from "next";
import { LocationPage } from "@/app/components/LocationPage";

export const metadata: Metadata = {
  title: "Our Location | Bradenton FL",
  description:
    "Lethermon Grade Excavations is located in Bradenton, FL serving Sarasota, Venice, Lakewood Ranch, and surrounding Southwest Florida communities.",
  alternates: { canonical: "/location" },
};

export default function Page() {
  return <LocationPage />;
}
