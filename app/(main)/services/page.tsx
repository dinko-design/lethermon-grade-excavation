import type { Metadata } from "next";
import { ServicesPage } from "@/app/components/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional excavation services including land clearing, site grading, drainage solutions, demolition, and utility trenching in Southwest Florida.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesPage />;
}
