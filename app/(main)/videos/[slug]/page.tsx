import type { Metadata } from "next";
import { VideoWatchPage } from "@/app/components/VideoWatchPage";
import { videos } from "@/app/components/data";

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const video = videos.find((v) => v.slug === slug);
  return {
    title: video?.title || "Watch Video",
    description:
      video?.description ||
      "Watch excavation videos from Lethermon Grade Excavations.",
    alternates: { canonical: `/videos/${slug}` },
  };
}

export default function Page() {
  return <VideoWatchPage />;
}
