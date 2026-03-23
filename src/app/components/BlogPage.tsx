"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useBlogPosts } from "../providers/SanityProvider";

export function BlogPage() {
  const blogPosts = useBlogPosts();
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category).filter(Boolean)))];

  usePageSEO({
    title: "Excavation & Site Prep Blog | Lethermon Grade Excavations",
    description: "Expert articles on excavation, land clearing, site grading, drainage, and construction site preparation for builders and property owners in Southwest Florida.",
    path: "/blog",
  });
  return (
    <div>
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Blog & Resources</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Excavation Insights</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Expert guides, cost breakdowns, and tips for property owners, builders, and developers in Southwest Florida.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured post */}
          {blogPosts.length > 0 && <Link to={`/blog/${blogPosts[0].slug}`} className="group block mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-[#C4956A]/30 transition-all">
              <div className="h-64 lg:h-auto overflow-hidden">
                <ImageWithFallback src={blogPosts[0].img} alt={blogPosts[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-[#C4956A] text-xs uppercase tracking-wider">{blogPosts[0].category} &middot; Featured</span>
                <h2 className="text-2xl text-[#3D2B1F] mt-2 mb-3">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{new Date(blogPosts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{blogPosts[0].readTime}</span>
                </div>
                <span className="text-[#C4956A] flex items-center gap-1 mt-4 group-hover:gap-2 transition-all text-sm">Read Article <ArrowRight className="w-4 h-4" /></span>
              </div>
            </div>
          </Link>}

          {/* All posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-lg hover:border-[#C4956A]/30 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[#C4956A] text-xs uppercase tracking-wider">{post.category}</span>
                  <h3 className="text-[#3D2B1F] mt-2 mb-2 text-sm">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Have a Project Question?</h2>
          <p className="text-white/90 mb-8">Our team is happy to answer any excavation or site prep questions. Get a free estimate today.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}