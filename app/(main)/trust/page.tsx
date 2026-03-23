import type { Metadata } from "next";
import { TrustPage } from "@/app/components/TrustPage";

export const metadata: Metadata = {
  title: "Trust & Recognition",
  description:
    "BBB A+ rated, fully insured, military-owned excavation contractor. Learn why builders trust Lethermon Grade Excavations.",
  alternates: { canonical: "/trust" },
};

export default function Page() {
  return <TrustPage />;
}
