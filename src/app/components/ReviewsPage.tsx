"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Star, Phone, Quote, ThumbsUp, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { StarRating } from "./StarRating";
import { useReviews, useCompanySettings } from "../providers/SanityProvider";

const platforms = [
  { name: "Google Business", rating: "5.0", count: "32 reviews", icon: "G" },
  { name: "Facebook", rating: "5.0", count: "8 reviews", icon: "f" },
  { name: "HomeAdvisor", rating: "4.9", count: "5 reviews", icon: "H" },
  { name: "BBB", rating: "A+", count: "Accredited", icon: "B" },
];

const stats = [
  { value: "5.0", label: "Average Rating" },
  { value: "47+", label: "Total Reviews" },
  { value: "100%", label: "Would Recommend" },
  { value: "0", label: "Complaints" },
];

function ReviewsSchema({ reviews, companyName }: { reviews: Array<{name: string; role?: string; text: string; stars: number; project?: string}>; companyName: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.lethermongradeexcavations.com/#business",
    name: companyName,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 10).map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.stars),
        bestRating: "5",
      },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewsPage() {
  const reviews = useReviews();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  usePageSEO({
    title: "Customer Reviews & Testimonials | Lethermon Grade Excavations",
    description: "Read 47+ five-star reviews from builders, contractors, and homeowners who trust Lethermon Grade Excavations for excavation and grading in Bradenton and Sarasota FL.",
    path: "/reviews",
  });
  return (
    <div>
      <ReviewsSchema reviews={reviews} companyName={settings?.name || "Lethermon Grade Excavations"} />
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Client Reviews</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">What Our Clients Say</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Real reviews from real builders, developers, and property owners across Southwest Florida.
            Our reputation is built one project at a time.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <StarRating rating={5} size={22} />
            <span className="text-white text-lg">5.0</span>
            <span className="text-white/60">from 47+ verified reviews</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#5C4A1E] py-6 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl text-[#C4956A]">{s.value}</p>
                <p className="text-white/70 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform ratings */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-muted-foreground text-sm mb-6">Reviews Across Platforms</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((p) => (
              <div key={p.name} className="bg-card rounded-xl p-6 border border-border text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center mx-auto mb-3 text-[#5C4A1E] text-lg">
                  {p.icon}
                </div>
                <h3 className="text-[#3D2B1F] text-sm">{p.name}</h3>
                <p className="text-[#C4956A] text-lg mt-1">{p.rating}</p>
                <p className="text-muted-foreground text-xs">{p.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">All Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <div key={r.name} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <StarRating rating={r.stars} size={16} />
                    <p className="text-xs text-muted-foreground mt-1">Verified Review</p>
                  </div>
                  <Quote className="w-8 h-8 text-[#C4956A]/20" />
                </div>
                <p className="text-[#3D2B1F] leading-relaxed mb-6">"{r.text}"</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <p className="text-[#3D2B1F]">{r.name}</p>
                    <p className="text-[#C4956A] text-sm">{r.role}</p>
                  </div>
                  <span className="text-xs bg-[#5C4A1E]/5 text-[#5C4A1E] px-3 py-1 rounded-full">{r.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Why Clients Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Fully Insured", desc: "General liability and workers' compensation insurance on every project." },
              { icon: Clock, title: "15+ Years Experience", desc: "Combined military and civilian construction background." },
              { icon: Award, title: "Build-Ready Guarantee", desc: "If grading causes an inspection failure, we fix it free." },
            ].map((t) => (
              <div key={t.title} className="text-center p-8 bg-card rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-[#C4956A]/10 flex items-center justify-center mx-auto mb-4">
                  <t.icon className="w-7 h-7 text-[#C4956A]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/trust" className="text-[#C4956A] text-sm hover:underline">
              See all trust credentials & recognition →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-white/90 mb-8">Join the builders and property owners who trust Lethermon Grade Excavations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors">
              Request Free Estimate
            </Link>
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> {phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}