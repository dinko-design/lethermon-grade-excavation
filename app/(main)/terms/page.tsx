import type { Metadata } from "next";
import { TermsPage } from "@/app/components/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Lethermon Grade Excavations.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <TermsPage />;
}
