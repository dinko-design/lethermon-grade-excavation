import type { Metadata } from "next";
import { ServiceAreaDetailPage } from "@/app/components/ServiceAreaDetailPage";
import { serviceAreasDetailed } from "@/app/components/data";

export function generateStaticParams() {
  return Object.keys(serviceAreasDetailed).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreasDetailed[slug];
  return {
    title: area
      ? `Excavation Services in ${area.city}, FL`
      : "Service Area",
    description:
      area?.desc ||
      "Professional excavation services in Southwest Florida.",
    alternates: { canonical: `/service-areas/${slug}` },
  };
}

export default function Page() {
  return <ServiceAreaDetailPage />;
}
