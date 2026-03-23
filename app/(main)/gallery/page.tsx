import type { Metadata } from "next";
import { GalleryPage } from "@/app/components/GalleryPage";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse photos of excavation, land clearing, site grading, and demolition projects completed by Lethermon Grade Excavations.",
  alternates: { canonical: "/gallery" },
};

export default function Page() {
  return <GalleryPage />;
}
