import type { Metadata } from "next";
import { MediaKitPage } from "@/app/components/MediaKitPage";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Download the Lethermon Grade Excavations media kit, logos, and brand assets.",
  alternates: { canonical: "/media-kit" },
};

export default function Page() {
  return <MediaKitPage />;
}
