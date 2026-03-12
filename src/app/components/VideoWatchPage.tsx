import { Link, useParams } from "react-router";
import { usePageSEO } from "../hooks/usePageSEO";
import { ChevronRight, Phone, FileText, MapPin, Shovel } from "lucide-react";
import { videos } from "./data";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { useServiceAreas, useCompanySettings, useBlogPosts } from "../providers/SanityProvider";
import { BASE_URL } from "../hooks/usePageSEO";

const SERVICE_SLUG_TO_LABEL: Record<string, string> = {
  "land-clearing": "Land Clearing",
  excavation: "Excavation",
  "site-grading": "Site Grading",
  drainage: "Drainage",
  demolition: "Demolition",
  trenching: "Trenching",
};

function VideoSchema({ video }: { video: (typeof videos)[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
        thumbnailUrl: typeof video.poster === "string" ? video.poster : undefined,
        uploadDate: video.date || "2025-01-01",
        contentUrl: typeof video.videoSrc === "string" ? video.videoSrc : undefined,
        publisher: {
          "@type": "Organization",
          name: "Lethermon Grade Excavations",
          url: BASE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Videos", item: `${BASE_URL}/videos` },
          { "@type": "ListItem", position: 3, name: video.title, item: `${BASE_URL}/videos/${video.slug}` },
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

export function VideoWatchPage() {
  const { slug } = useParams();
  const allAreas = useServiceAreas();
  const blogPosts = useBlogPosts();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  const video = videos.find((v) => v.slug === slug);

  usePageSEO({
    title: video ? `${video.title} | Lethermon Grade Excavations` : "Video Not Found",
    description: video ? video.description : "Video not found.",
    path: `/videos/${slug}`,
  });

  if (!video) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl text-[#3D2B1F] mb-4">Video Not Found</h1>
        <Link to="/videos" className="text-[#C4956A] flex items-center justify-center gap-2">
          View all videos
        </Link>
      </div>
    );
  }

  const relatedAreas = allAreas.filter((a) => video.areaSlugs.includes(a.slug));
  const relatedPosts = video.blogSlugs
    ? blogPosts.filter((p) => video.blogSlugs!.includes(p.slug))
    : [];

  return (
    <div>
      <VideoSchema video={video} />
      {/* Breadcrumb + Hero */}
      <section className="relative py-16 md:py-20 bg-[#1a1008] noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/videos" className="hover:text-white/80 transition-colors">Videos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C4956A]">{video.title}</span>
          </nav>
          <h1 className="text-white text-3xl md:text-4xl mb-4">{video.title}</h1>
          <p className="text-gray-300">{video.description}</p>
        </div>
      </section>

      {/* Video embed */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <VideoPlaceholder
              title={video.title}
              thumbnail={video.poster}
              videoSrc={video.videoSrc}
              className="aspect-video min-h-[320px]"
            />
          </div>
        </div>
      </section>

      {/* Related: Services, Areas, Blog */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {video.serviceSlugs.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[#3D2B1F] mb-3 flex items-center gap-2">
                  <Shovel className="w-5 h-5 text-[#C4956A]" />
                  See this service
                </h2>
                <ul className="space-y-2">
                  {video.serviceSlugs.map((serviceSlug) => (
                    <li key={serviceSlug}>
                      <Link
                        to={`/services/${serviceSlug}`}
                        className="text-[#C4956A] hover:underline text-sm"
                      >
                        {SERVICE_SLUG_TO_LABEL[serviceSlug] ?? serviceSlug}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedAreas.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[#3D2B1F] mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#C4956A]" />
                  In this area
                </h2>
                <ul className="space-y-2">
                  {relatedAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        to={`/service-areas/${area.slug}`}
                        className="text-[#C4956A] hover:underline text-sm"
                      >
                        {area.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[#3D2B1F] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#C4956A]" />
                  Related reading
                </h2>
                <ul className="space-y-2">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-[#C4956A] hover:underline text-sm"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl text-white mb-4">Need excavation or grading?</h2>
          <p className="text-white/90 mb-8">Get a free estimate for your project in Southwest Florida.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
            </Link>
            <Link
              to="/videos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              More videos
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> {phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
