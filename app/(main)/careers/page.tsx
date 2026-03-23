import type { Metadata } from "next";
import { CareersPage } from "@/app/components/CareersPage";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Lethermon Grade Excavations team. Open positions for equipment operators, laborers, and more in Bradenton, FL.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return <CareersPage />;
}
