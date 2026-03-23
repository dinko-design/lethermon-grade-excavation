import type { Metadata } from "next";
import { BlogDetailPage } from "@/app/components/BlogDetailPage";
import { blogPosts } from "@/app/components/data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post?.title || "Blog Post",
    description:
      post?.excerpt ||
      "Read this article from Lethermon Grade Excavations.",
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default function Page() {
  return <BlogDetailPage />;
}
