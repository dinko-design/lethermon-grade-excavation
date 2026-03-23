"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Play, Camera, ChevronRight } from "lucide-react";
import { videos } from "./data";

const videosSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Project Videos | Lethermon Grade Excavations",
      description: "Watch excavation, grading, land clearing, demolition, and drainage project videos from Lethermon Grade Excavations. Real jobsites across Bradenton, Sarasota, and Southwest Florida.",
      url: "https://lethermongrade.com/videos",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://lethermongrade.com" },
        { "@type": "ListItem", position: 2, name: "Videos", item: "https://lethermongrade.com/videos" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Lethermon Grade Excavations Project Videos",
      itemListElement: videos.map((v, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: v.title,
        url: `https://lethermongrade.com/videos/${v.slug}`,
      })),
    },
  ],
};

export function VideosPage() {
  usePageSEO({
    title: "Project Videos | Excavation & Grading in SW Florida",
    description: "Watch land clearing, site grading, demolition, drainage, and excavation videos from real projects. Lethermon Grade Excavations serves Bradenton, Sarasota, and Southwest Florida.",
    path: "/videos",
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videosSchema) }}
      />
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C4956A]">Videos</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Project Videos</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Watch Our Work in Action</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Real excavation, grading, land clearing, demolition, and drainage projects across Bradenton, Sarasota, and Southwest Florida. Click any video to watch on its own page.
          </p>
        </div>
      </section>

      {/* Video grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Link
                key={video.slug}
                to={`/videos/${video.slug}`}
                className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-[#C4956A]/30 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-video bg-[#2A1D12]">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#C4956A] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-[#3D2B1F] font-semibold mb-2 group-hover:text-[#C4956A] transition-colors">
                    {video.title}
                  </h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
                  <span className="inline-flex items-center gap-1 text-[#C4956A] text-sm mt-3 font-medium">
                    Watch video <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-[#C4956A] hover:gap-3 transition-all text-sm font-medium"
            >
              <Camera className="w-4 h-4" />
              Browse our photo gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
