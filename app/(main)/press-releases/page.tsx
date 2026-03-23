import type { Metadata } from "next";
import { PressReleasesPage } from "@/app/components/PressReleasesPage";

export const metadata: Metadata = {
  title: "Press Releases",
  description:
    "Latest news and press releases from Lethermon Grade Excavations.",
  alternates: { canonical: "/press-releases" },
};

export default function Page() {
  return <PressReleasesPage />;
}
