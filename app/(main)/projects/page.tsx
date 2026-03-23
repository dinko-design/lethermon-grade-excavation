import type { Metadata } from "next";
import { ProjectsPage } from "@/app/components/ProjectsPage";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "See completed excavation, land clearing, grading, and demolition projects by Lethermon Grade Excavations across Southwest Florida.",
  alternates: { canonical: "/projects" },
};

export default function Page() {
  return <ProjectsPage />;
}
