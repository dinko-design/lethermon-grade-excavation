import type { Metadata } from "next";
import { BlogPage } from "@/app/components/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Excavation Tips & Guides",
  description:
    "Expert excavation tips, cost guides, and construction resources from Lethermon Grade Excavations in Southwest Florida.",
  alternates: { canonical: "/blog" },
};

export default function Page() {
  return <BlogPage />;
}
