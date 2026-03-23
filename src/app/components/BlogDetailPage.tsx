"use client";
import { Link } from "@/compat/Link";
import { useParams } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight, Phone, Share2, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useBlogPosts } from "../providers/SanityProvider";
import { videos } from "./data";
import { usePageSEO } from "../hooks/usePageSEO";
import { useMemo } from "react";

function ArticleSchema({ post }: { post: { title: string; excerpt: string; img?: string; date: string; slug: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: `https://lethermongrade.com${post.img}`,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          name: "Kameron Lethermon",
          jobTitle: "Owner",
          worksFor: {
            "@type": "LocalBusiness",
            "@id": "https://lethermongrade.com/#business",
            name: "Lethermon Grade Excavations",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Lethermon Grade Excavations",
          url: "https://lethermongrade.com",
          logo: {
            "@type": "ImageObject",
            url: "https://lethermongrade.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://lethermongrade.com/blog/${post.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://lethermongrade.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://lethermongrade.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://lethermongrade.com/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogDetailPage() {
  const blogPosts = useBlogPosts();
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  usePageSEO({
    title: post ? `${post.title} | Lethermon Grade Excavations Blog` : "Article Not Found",
    description: post?.excerpt || "Article not found on Lethermon Grade Excavations blog.",
    path: `/blog/${slug}`,
    ogType: "article",
  });

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl text-[#3D2B1F] mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-[#C4956A] flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ArticleSchema post={post} />
      {/* Hero */}
      <section className="relative noise-overlay vignette">
        <div className="h-72 md:h-96 overflow-hidden">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008] to-[#1a1008]/30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-3xl mx-auto px-4 pb-10">
            <Link to="/blog" className="text-[#C4956A] flex items-center gap-1 mb-4 text-sm hover:gap-2 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="text-[#C4956A] text-xs uppercase tracking-wider">{post.category}</span>
            <h1 className="text-white text-3xl md:text-4xl mt-2 mb-3" style={{ lineHeight: 1.15 }}>{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
              <span>By Kameron Lethermon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return <h2 key={i} className="text-[#3D2B1F] text-xl mt-10 mb-4">{block.replace("## ", "")}</h2>;
              }
              if (block.startsWith("- ")) {
                const items = block.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-[#C4956A] mt-1">•</span>
                        <span>{item.replace("- ", "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-muted-foreground mb-4 leading-relaxed">{block}</p>;
            })}
          </div>

          {/* Author / CTA */}
          <div className="mt-12 bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <p className="text-[#C4956A] text-sm mb-1">Written by</p>
                <h3 className="text-[#3D2B1F] text-lg">Kameron Lethermon</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  Owner of Lethermon Grade Excavations. Military background with 15+ years of
                  excavation and construction experience in Southwest Florida.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-6 py-3 rounded-lg hover:bg-[#b07f55] transition-colors text-sm whitespace-nowrap"
              >
                <Phone className="w-4 h-4" /> Free Estimate
              </Link>
            </div>
          </div>

          {/* Cross-links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/services/land-clearing" className="bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 transition-colors text-sm text-[#3D2B1F]">
              Related: Land Clearing Services →
            </Link>
            <Link to="/services/site-grading" className="bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 transition-colors text-sm text-[#3D2B1F]">
              Related: Site Grading Services →
            </Link>
            <Link to="/service-areas" className="bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 transition-colors text-sm text-[#3D2B1F]">
              See Our Service Areas →
            </Link>
            <Link to="/reviews" className="bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 transition-colors text-sm text-[#3D2B1F]">
              Read Client Reviews →
            </Link>
          </div>

          {/* Related videos */}
          {(videos.filter((v) => v.blogSlugs?.includes(post.slug)).length > 0 || videos.length > 0) && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-[#3D2B1F] mb-4">Related Videos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(videos.filter((v) => v.blogSlugs?.includes(post.slug)).length > 0
                  ? videos.filter((v) => v.blogSlugs?.includes(post.slug))
                  : videos.slice(0, 2)
                ).map((video) => (
                  <Link
                    key={video.slug}
                    to={`/videos/${video.slug}`}
                    className="group flex gap-4 bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 transition-all"
                  >
                    <div className="relative w-32 h-20 flex-shrink-0 rounded overflow-hidden bg-[#2A1D12]">
                      <img src={video.poster} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <Play className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <span className="text-[#3D2B1F] font-medium text-sm group-hover:text-[#C4956A] transition-colors line-clamp-2">
                        {video.title}
                      </span>
                      <span className="text-[#C4956A] text-xs mt-1 inline-block">Watch video →</span>
                    </div>
                  </Link>
                ))}
              </div>
              <Link to="/videos" className="text-[#C4956A] text-sm font-medium hover:underline inline-flex items-center gap-1 mt-3">
                View all videos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all">
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-[#C4956A] text-xs uppercase">{p.category}</span>
                  <h3 className="text-[#3D2B1F] mt-1 mb-2 text-sm">{p.title}</h3>
                  <span className="text-xs text-muted-foreground">{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}