import type { Metadata } from "next";
import { VideosPage } from "@/app/components/VideosPage";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch excavation, land clearing, and site grading videos from Lethermon Grade Excavations jobsites across Southwest Florida.",
  alternates: { canonical: "/videos" },
};

export default function Page() {
  return <VideosPage />;
}
