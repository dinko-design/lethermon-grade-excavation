import type { Metadata } from "next";
import { AboutPage } from "@/app/components/AboutPage";

export const metadata: Metadata = {
  title: "About Lethermon Grade Excavations",
  description:
    "Learn about Lethermon Grade Excavations — a military-owned excavation contractor serving Bradenton, Sarasota, and Southwest Florida. 200+ projects, 5-star rated, fully insured.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
