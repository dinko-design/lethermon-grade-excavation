import type { Metadata } from "next";
import { ReviewsPage } from "@/app/components/ReviewsPage";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "Read 5-star reviews from builders, developers, and property owners who trust Lethermon Grade Excavations for excavation services in Southwest Florida.",
  alternates: { canonical: "/reviews" },
};

export default function Page() {
  return <ReviewsPage />;
}
