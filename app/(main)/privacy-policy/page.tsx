import type { Metadata } from "next";
import { PrivacyPage } from "@/app/components/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lethermon Grade Excavations.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <PrivacyPage />;
}
