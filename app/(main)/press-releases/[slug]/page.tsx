import { PressReleaseDetailPage } from "@/app/components/PressReleaseDetailPage";
import { pressReleases } from "@/app/components/data";

export function generateStaticParams() {
  return pressReleases.map((pr) => ({ slug: pr.slug }));
}

export default function Page() {
  return <PressReleaseDetailPage />;
}
