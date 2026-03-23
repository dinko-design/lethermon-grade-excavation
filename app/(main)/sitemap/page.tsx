import type { Metadata } from "next";
import { SitemapPage } from "@/app/components/SitemapPage";

export const metadata: Metadata = {
  title: "Sitemap",
  description:
    "Site map for Lethermon Grade Excavations - find all pages and services.",
  alternates: { canonical: "/sitemap" },
};

export default function Page() {
  return <SitemapPage />;
}
