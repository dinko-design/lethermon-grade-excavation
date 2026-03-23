import type { Metadata } from "next";
import { FaithPage } from "@/app/components/FaithPage";

export const metadata: Metadata = {
  title: "Faith-Based Business | Our Foundation | Lethermon Grade Excavations",
  description:
    "Lethermon Grade Excavations is a faith-based excavation contractor in Bradenton and Sarasota FL. Built on biblical principles of integrity, service, and community. $40K+ in community giving.",
};

export default function Page() {
  return <FaithPage />;
}
