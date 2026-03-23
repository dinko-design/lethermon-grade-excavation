import { useState, useEffect } from "react";
import { Phone, Check, ChevronRight, Shield, Award, Clock, Star as StarIcon, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { usePageSEO } from "../hooks/usePageSEO";
import { useCaptureAdParams } from "../hooks/useGclid";
import { useCompanySettings, useReviews } from "../providers/SanityProvider";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LandingLeadForm } from "./LandingLeadForm";

export interface LandingPageData {
  slug: string;
  serviceType: string;
  formName: string;
  hero: {
    headline: string;
    subheadline: string;
    heroImg: string;
    offer: string;
    urgency?: string;
  };
  trustBadges: { icon: LucideIcon; label: string; detail?: string }[];
  proofSection: {
    heading: string;
    images: { src: string; alt: string; caption?: string }[];
    stat?: { value: string; label: string };
  };
  offerSection: {
    heading: string;
    description: string;
    includes: string[];
    noObligation: string;
  };
  process: { title: string; desc: string }[];
  reviewIndices: number[];
  form: {
    heading: string;
    subheading: string;
    projectTypeOptions: string[];
    successMessage: string;
  };
  leadMagnet?: {
    title: string;
    description: string;
    downloadUrl: string;
  };
  seoTitle: string;
  seoDescription: string;
}

function scrollToForm() {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function LandingPageTemplate({ data }: { data: LandingPageData }) {
  useCaptureAdParams();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const allReviews = useReviews();
  const reviews = data.reviewIndices.map((i) => allReviews[i]).filter(Boolean);

  const [showSticky, setShowSticky] = useState(false);

  usePageSEO({
    title: data.seoTitle,
    description: data.seoDescription,
    path: `/offer/${data.slug}`,
    noIndex: true,
  });

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={data.hero.heroImg}
            alt={data.serviceType}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            {/* Offer badge */}
            <div className="inline-flex items-center gap-2 bg-[#C4956A]/20 border border-[#C4956A]/40 rounded-full px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-[#C4956A]" />
              <span className="text-[#C4956A] text-sm font-medium">{data.hero.offer}</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
              {data.hero.headline}
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
              {data.hero.subheadline}
            </p>

            {data.hero.urgency && (
              <p className="text-[#C4956A] text-sm mb-6 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {data.hero.urgency}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-colors text-lg font-medium"
              >
                Get Your Free Estimate
                <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Call {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Trust Bar ── */}
      <section className="bg-[#5C4A1E] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {data.trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#C4956A]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-tight">{badge.label}</p>
                    {badge.detail && <p className="text-xs text-white/60">{badge.detail}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Visual Proof ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-[#3D2B1F] text-2xl md:text-3xl mb-10 text-center" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            {data.proofSection.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.proofSection.images.map((img) => (
              <div key={img.alt} className="relative rounded-xl overflow-hidden shadow-md group">
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {data.proofSection.stat && (
            <div className="mt-8 text-center">
              <span className="text-[#C4956A] text-4xl font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                {data.proofSection.stat.value}
              </span>
              <span className="text-muted-foreground text-lg ml-2">{data.proofSection.stat.label}</span>
            </div>
          )}
        </div>
      </section>

      {/* ── Section 4: Clear Offer ── */}
      <section className="py-16 md:py-20 bg-secondary noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[#3D2B1F] text-2xl md:text-3xl mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            {data.offerSection.heading}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {data.offerSection.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
            {data.offerSection.includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#C4956A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#C4956A]" />
                </div>
                <span className="text-[#3D2B1F] text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mb-6">{data.offerSection.noObligation}</p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-colors font-medium"
          >
            Claim Your Free Estimate
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ── Section 5: Process ── */}
      <section className="py-16 md:py-20 bg-[#3D2B1F] noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-white text-2xl md:text-3xl mb-12 text-center" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="w-10 h-10 rounded-full bg-[#C4956A] flex items-center justify-center mb-4">
                    <span className="text-white text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-white font-medium mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
                {i < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: Reviews ── */}
      {reviews.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-[#3D2B1F] text-2xl md:text-3xl mb-3" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center gap-2">
                <StarRating rating={5} size={18} />
                <span className="text-muted-foreground text-sm">5.0 Rating from 47+ Reviews</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="bg-card rounded-xl border border-border p-6 shadow-sm"
                >
                  <StarRating rating={review.stars} size={14} />
                  <p className="text-[#3D2B1F] mt-4 mb-4 text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-[#3D2B1F] text-sm font-medium">{review.name}</p>
                    <p className="text-muted-foreground text-xs">{review.role} — {review.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Section 7: Lead Capture Form ── */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-2xl mx-auto px-4">
          <LandingLeadForm
            formName={data.formName}
            slug={data.slug}
            heading={data.form.heading}
            subheading={data.form.subheading}
            projectTypeOptions={data.form.projectTypeOptions}
          />

          {/* Optional Lead Magnet */}
          {data.leadMagnet && (
            <div className="mt-8 bg-card rounded-xl border border-border p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                <Download className="w-5 h-5 text-[#5C4A1E]" />
              </div>
              <div className="flex-1">
                <p className="text-[#3D2B1F] font-medium mb-1">{data.leadMagnet.title}</p>
                <p className="text-muted-foreground text-sm mb-3">{data.leadMagnet.description}</p>
                <a
                  href={data.leadMagnet.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4956A] text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Download Free Guide
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-12 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl md:text-3xl mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-6">
            Get a free, no-obligation estimate for your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2A1D12] transition-colors font-medium"
            >
              Request Free Estimate
            </button>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Sticky Mobile CTA ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#3D2B1F] border-t border-white/10 p-3 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${phoneTel}`}
            className="flex-1 inline-flex items-center justify-center gap-2 border border-white/25 text-white py-3 rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={scrollToForm}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C4956A] text-white py-3 rounded-lg hover:bg-[#b07f55] transition-colors text-sm font-medium"
          >
            Free Estimate
          </button>
        </div>
      </div>
    </div>
  );
}
