"use client";
import { useState, useCallback } from "react";
import { Link } from "@/compat/Link";
import { CheckCircle, Phone, ArrowRight, Star, Shield, Clock, ChevronRight, ChevronLeft, MapPin, Play, X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { StarRating } from "./StarRating";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { useReviews, useServiceAreas, useCompanySettings } from "../providers/SanityProvider";
import { videos } from "./data";
import { usePageSEO } from "../hooks/usePageSEO";
import type { LucideIcon } from "lucide-react";

export interface SeoContentBlock {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  linkText?: string;
  linkTo?: string;
}

export interface ServicePageData {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroImg: string;
  description: string[];
  features: string[];
  process: { title: string; desc: string }[];
  guarantee: { title: string; desc: string };
  faq: { q: string; a: string }[];
  galleryImages: string[];
  videoTitle: string;
  videoSrc?: string;
  videoPoster?: string;
  relatedReviewIndices: number[];
  relatedServices: { to: string; title: string; icon: LucideIcon }[];
  seoContent?: SeoContentBlock[];
  serviceAreaIntro?: string;
  seoTitle?: string;
  seoDescription?: string;
}

function ServiceGallery({ title, images }: { title: string; images: string[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const previewImages = images.slice(0, 3);
  const remaining = images.length - 3;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  }, [images.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  }, [images.length]);

  return (
    <>
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">{title} Gallery</p>
            <h2 className="text-3xl text-[#3D2B1F]">See Our {title} Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previewImages.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden h-56 lg:h-72 cursor-pointer group relative"
                onClick={() => openLightbox(i)}
              >
                <ImageWithFallback
                  src={img}
                  alt={`${title} project by Lethermon Grade Excavations — photo ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                {/* Show "+N more" badge on last preview image */}
                {i === 2 && remaining > 0 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-lg font-medium">+{remaining} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => openLightbox(0)}
              className="text-[#C4956A] inline-flex items-center gap-1 hover:gap-2 transition-all text-sm cursor-pointer"
            >
              View All {images.length} Photos <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] px-16 md:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={`${title} project — photo ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto px-4 py-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                    i === lightboxIndex ? "border-[#C4956A] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt={`${title} project — photo ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

function ServiceSchema({ data, areasList }: { data: ServicePageData; areasList: { city: string; slug: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.lethermongradeexcavations.com/services/${data.slug}#service`,
        name: `${data.title} - Lethermon Grade Excavations`,
        description: data.tagline,
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://www.lethermongradeexcavations.com/#business",
          name: "Lethermon Grade Excavations",
          telephone: "+1-941-290-7208",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1404 21st ST W.",
            addressLocality: "Palmetto",
            addressRegion: "FL",
            postalCode: "34201",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 27.4989,
            longitude: -82.5748,
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "27",
            bestRating: "5",
          },
          priceRange: "$$",
          image: "https://www.lethermongradeexcavations.com/logo.png",
          url: "https://www.lethermongradeexcavations.com",
          areaServed: areasList.map((a) => ({
            "@type": "City",
            name: a.city,
            "@id": `https://www.lethermongradeexcavations.com/service-areas/${a.slug}`,
          })),
        },
        serviceType: data.title,
        areaServed: {
          "@type": "State",
          name: "Florida",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${data.title} Services`,
          itemListElement: data.features.map((f, i) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: f,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.lethermongradeexcavations.com/services/${data.slug}#faq`,
        mainEntity: data.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.lethermongradeexcavations.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.lethermongradeexcavations.com/#services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: data.title,
            item: `https://www.lethermongradeexcavations.com/services/${data.slug}`,
          },
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

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const Icon = data.icon;
  const allReviews = useReviews();
  const allServiceAreas = useServiceAreas();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const relatedReviews = data.relatedReviewIndices.map((i) => allReviews[i]).filter(Boolean);

  usePageSEO({
    title: data.seoTitle || `${data.title} Services in Bradenton & Sarasota FL`,
    description:
      data.seoDescription ||
      `${data.tagline} Professional ${data.title.toLowerCase()} by Lethermon Grade Excavations serving Southwest Florida. Free estimates. Call (941) 290-7208.`,
    path: `/services/${data.slug}`,
  });

  return (
    <div>
      <ServiceSchema data={data} areasList={allServiceAreas} />

      {/* Hero */}
      <section className="relative min-h-[400px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={data.heroImg} alt={`${data.title} services by Lethermon Grade Excavations — professional excavation contractor in Bradenton and Sarasota FL`} className="w-full h-full object-cover" width={1920} height={1080} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/30 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
              <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/services" className="hover:text-white/80 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#C4956A]">{data.title}</span>
            </nav>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#C4956A] flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#C4956A] uppercase tracking-wider text-sm">Service</span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl mb-4" style={{ lineHeight: 1.1 }}>
              {data.title}
            </h1>
            <p className="text-gray-300 text-lg mb-6">{data.tagline}</p>
            <div className="flex items-center gap-3 mb-8">
              <StarRating rating={5} size={16} />
              <span className="text-white/70 text-sm">5.0 Rating | Fully Insured</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4956A] text-white px-7 py-3.5 rounded-lg hover:bg-[#b07f55] transition-all hover:shadow-lg hover:shadow-[#C4956A]/20 active:scale-[0.98]"
              >
                Get Free {data.title} Estimate <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-7 py-3.5 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" /> {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <h2 className="text-3xl text-[#3D2B1F] mb-6">About Our {data.title} Service</h2>
              <div className="space-y-4 text-muted-foreground">
                {data.description.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {/* Guarantee badge */}
              <div className="mt-8 bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-[#C4956A]" />
                  <h3 className="text-[#3D2B1F]">{data.guarantee.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{data.guarantee.desc}</p>
              </div>
            </div>
            <div>
              <h3 className="text-[#3D2B1F] mb-6">What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 bg-card rounded-lg p-3 border border-border">
                    <CheckCircle className="w-5 h-5 text-[#C4956A] flex-shrink-0 mt-0.5" />
                    <span className="text-[#3D2B1F] text-sm">{f}</span>
                  </div>
                ))}
              </div>
              {/* Video placeholder */}
              <VideoPlaceholder
                title={data.videoTitle}
                thumbnail={data.videoPoster || data.galleryImages[0] || data.heroImg}
                videoSrc={data.videoSrc}
                className="h-52 mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block 1 */}
      {data.seoContent && data.seoContent[0] && (
        <section className="py-16 bg-secondary noise-overlay grit-top">
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl text-[#3D2B1F] mb-6">{data.seoContent[0].heading}</h2>
              <div className="space-y-4 text-muted-foreground">
                {data.seoContent[0].paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {data.seoContent[0].bullets && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.seoContent[0].bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-1" />
                      <span className="text-[#3D2B1F] text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              )}
              {data.seoContent[0].linkTo && (
                <Link to={data.seoContent[0].linkTo} className="inline-flex items-center gap-1 text-[#C4956A] mt-6 hover:gap-2 transition-all text-sm">
                  {data.seoContent[0].linkText || "Learn More"} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section className="py-20 bg-[#3D2B1F] noise-overlay grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">{data.title} Process</p>
            <h2 className="text-3xl md:text-4xl text-white">How {data.title} Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 h-full">
                  <div className="w-10 h-10 rounded-full bg-[#C4956A] text-white flex items-center justify-center mb-4 text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
                {i < data.process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-[44px] -right-3 w-6 h-6 text-[#C4956A]/50 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Cross-Links */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Where We Work</p>
            <h2 className="text-3xl text-[#3D2B1F]">{data.title} Across Southwest Florida</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              {data.serviceAreaIntro || `We provide professional ${data.title.toLowerCase()} services throughout Sarasota, Manatee, and surrounding Florida counties. Click a city below to learn more about our work in your area.`}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allServiceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group bg-card rounded-xl p-5 border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[#C4956A]" />
                  <h3 className="text-[#3D2B1F] text-sm">{area.city}, FL</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{area.projects}+ {data.title.toLowerCase()} projects</p>
                <span className="text-[#C4956A] text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  View {area.city} Services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ServiceGallery title={data.title} images={data.galleryImages} />

      {/* SEO Content Block 2 */}
      {data.seoContent && data.seoContent[1] && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl text-[#3D2B1F] mb-6">{data.seoContent[1].heading}</h2>
                <div className="space-y-4 text-muted-foreground">
                  {data.seoContent[1].paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {data.seoContent[1].linkTo && (
                  <Link to={data.seoContent[1].linkTo} className="inline-flex items-center gap-1 text-[#C4956A] mt-6 hover:gap-2 transition-all text-sm">
                    {data.seoContent[1].linkText || "Learn More"} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              <div className="lg:col-span-2">
                {data.seoContent[1].bullets && (
                  <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-6">
                    <h3 className="text-[#3D2B1F] mb-4">Key Takeaways</h3>
                    <div className="space-y-3">
                      {data.seoContent[1].bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-1" />
                          <span className="text-[#3D2B1F] text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews for this service */}
      <section className="py-20 bg-[#1a1008] noise-overlay-heavy grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Client Reviews</p>
            <h2 className="text-3xl text-white mb-2">{data.title} Reviews</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <StarRating rating={5} size={18} />
              <span className="text-white/70 text-sm">5.0 Average Rating</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReviews.map((r) => (
              <div key={r.name} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <StarRating rating={r.stars} size={14} />
                <p className="text-gray-300 text-sm mt-3 mb-4 italic">"{r.text}"</p>
                <div className="border-t border-white/10 pt-3">
                  <p className="text-white text-sm">{r.name}</p>
                  <p className="text-[#C4956A] text-xs">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">FAQ</p>
            <h2 className="text-3xl text-[#3D2B1F]">{data.title} Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faq.map((item, i) => (
              <details key={i} className="bg-card rounded-xl border border-border group" open={i === 0}>
                <summary className="px-6 py-4 cursor-pointer text-[#3D2B1F] list-none flex items-center justify-between">
                  {item.q}
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-5 text-muted-foreground text-sm">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-8">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.relatedServices.map((rs) => {
              const RSIcon = rs.icon;
              return (
                <Link
                  key={rs.to}
                  to={rs.to}
                  className="flex flex-col items-center gap-3 bg-card rounded-xl p-5 border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center group-hover:bg-[#5C4A1E] transition-colors">
                    <RSIcon className="w-6 h-6 text-[#5C4A1E] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[#3D2B1F] text-sm">{rs.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Videos */}
      {videos.filter((v) => v.serviceSlugs.includes(data.slug)).length > 0 && (() => {
        const serviceVideos = videos.filter((v) => v.serviceSlugs.includes(data.slug));
        const count = serviceVideos.length;
        return (
        <section className="py-16 bg-secondary">
          <div className={count === 1 ? "max-w-2xl mx-auto px-4" : "max-w-7xl mx-auto px-4"}>
            <h2 className="text-2xl text-[#3D2B1F] text-center mb-8">Watch {data.title} in Action</h2>
            <div className={count === 1 ? "flex justify-center" : count === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"}>
              {serviceVideos
                .map((video) => (
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
                        <div className="w-12 h-12 rounded-full bg-[#C4956A] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-[#3D2B1F] font-medium text-sm group-hover:text-[#C4956A] transition-colors">
                        {video.title}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/videos" className="text-[#C4956A] text-sm font-medium hover:underline inline-flex items-center gap-1">
                View all videos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        );
      })()}

      {/* Popular areas */}
      {allServiceAreas.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl text-[#3D2B1F] text-center mb-8">We Serve These Areas</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {allServiceAreas.slice(0, 6).map((area) => (
                <Link
                  key={area.slug}
                  to={`/service-areas/${area.slug}`}
                  className="px-4 py-2.5 bg-card rounded-lg border border-border hover:border-[#C4956A]/30 text-[#3D2B1F] text-sm font-medium transition-all flex items-center gap-2"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C4956A]" />
                  {area.city}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/service-areas" className="text-[#C4956A] text-sm font-medium hover:underline inline-flex items-center gap-1">
                View all service areas <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Need {data.title}?</h2>
          <p className="text-white/90 mb-8">
            Get a free, transparent estimate for your {data.title.toLowerCase()} project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
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