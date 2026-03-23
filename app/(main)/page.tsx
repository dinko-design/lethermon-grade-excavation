import type { Metadata } from "next";
import { HomePage } from "@/app/components/HomePage";

export const metadata: Metadata = {
  title: "Excavation Contractor in Bradenton & Sarasota FL",
  description:
    "Professional excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching serving Bradenton, Sarasota, Venice, and Lakewood Ranch. 200+ projects. 5-star rated. Call (941) 290-7208 for a free estimate.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
