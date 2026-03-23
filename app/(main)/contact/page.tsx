import type { Metadata } from "next";
import { ContactPage } from "@/app/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | Free Estimate",
  description:
    "Get a free excavation estimate from Lethermon Grade Excavations. Call (941) 290-7208 or request a quote online. Serving Bradenton, Sarasota & SW Florida.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
