import type { Metadata } from "next";
import { TeamPage } from "@/app/components/TeamPage";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Lethermon Grade Excavations team. Professional excavation crews serving Southwest Florida.",
  alternates: { canonical: "/team" },
};

export default function Page() {
  return <TeamPage />;
}
