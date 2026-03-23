"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Shield, Award, CheckCircle, Star, FileText, HardHat, Phone, Users, Truck, Clock, ThumbsUp, BadgeCheck } from "lucide-react";
import { StarRating } from "./StarRating";
import { IMG } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useReviews, useCompanySettings } from "../providers/SanityProvider";

const credentials = [
  { icon: Shield, title: "General Liability Insurance", desc: "Full general liability coverage protecting clients and property on every job." },
  { icon: HardHat, title: "Workers' Compensation", desc: "Complete workers' comp coverage for all crew members and operators." },
  { icon: FileText, title: "Licensed Contractor", desc: "Properly licensed to perform excavation and site work in Florida." },
  { icon: BadgeCheck, title: "BBB Accredited", desc: "A+ rating with the Better Business Bureau. Zero complaints on file." },
];

const recognition = [
  { title: "1,000+ Projects Completed", desc: "Across Sarasota, Manatee, and Charlotte counties since founding.", icon: Award },
  { title: "5.0 Star Rating", desc: "Perfect 5-star average across 27+ verified client reviews.", icon: Star },
  { title: "Builder Partnership Program", desc: "Trusted by multiple repeat builders for ongoing excavation needs.", icon: Users },
  { title: "Military Background", desc: "Owner Kameron Lethermon brings military discipline to every project.", icon: Shield },
  { title: "Modern Equipment Fleet", desc: "Laser-guided grading systems and late-model heavy equipment.", icon: Truck },
  { title: "24-Hour Response", desc: "We respond to all estimate requests within one business day.", icon: Clock },
];

const guarantees = [
  { title: "Build-Ready Guarantee", desc: "Every graded site is ready for the next phase of construction. If our grading causes an inspection failure, we correct it at no charge." },
  { title: "Clean Jobsite Promise", desc: "Every project ends with a clean, organized site. No debris, no ruts, no mess left behind for the next trade." },
  { title: "On-Schedule Commitment", desc: "We commit to your timeline and communicate proactively if anything changes. Your schedule matters because we know it affects your entire project." },
  { title: "Transparent Pricing", desc: "Detailed, itemized estimates with no hidden fees. If the scope changes, we discuss it before any additional work is performed." },
];

export function TrustPage() {
  const reviews = useReviews();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  usePageSEO({
    title: "Our Guarantees & Trust Pledges | Lethermon Grade Excavations",
    description: "Lethermon Grade Excavations stands behind every project with our Build-Ready Guarantee, On-Schedule Commitment, Clean Jobsite Promise, and Transparent Estimates.",
    path: "/trust",
  });
  return (
    <div>
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Trust & Recognition</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Why Builders Trust Lethermon</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Insurance, credentials, guarantees, and a track record that speaks for itself. We earn trust one project at a time.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | 27+ Reviews | BBB A+ Rated</span>
          </div>
        </div>
      </section>

      {/* Trust icons / credentials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Insurance & Credentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c) => (
              <div key={c.title} className="bg-card rounded-xl p-8 border border-border shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-[#C4956A]/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-8 h-8 text-[#C4956A]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-8">
            Certificates of insurance available upon request for any project.
          </p>
        </div>
      </section>

      {/* Trust badges visual */}
      <section className="py-12 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: "FULLY INSURED", sub: "GL & Workers' Comp" },
              { label: "BBB A+ RATED", sub: "Zero Complaints" },
              { label: "5.0 STARS", sub: "27+ Reviews" },
              { label: "1,000+ PROJECTS", sub: "Completed" },
              { label: "MILITARY OWNED", sub: "Veteran Operated" },
              { label: "LICENSED", sub: "State of Florida" },
            ].map((b) => (
              <div key={b.label} className="w-32 h-32 rounded-full border-2 border-[#5C4A1E]/20 flex flex-col items-center justify-center text-center bg-card">
                <p className="text-[#5C4A1E] text-xs tracking-wider">{b.label}</p>
                <p className="text-[#C4956A] text-xs mt-1">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Recognition & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognition.map((r) => (
              <div key={r.title} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                  <r.icon className="w-5 h-5 text-[#5C4A1E]" />
                </div>
                <div>
                  <h3 className="text-[#3D2B1F] text-sm">{r.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay-heavy grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-white text-center mb-10">Our Written Guarantees</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-[#C4956A]" />
                  <h3 className="text-white">{g.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews preview */}
      <section className="py-16 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <StarRating rating={5} size={20} />
            <h2 className="text-2xl text-[#3D2B1F] mt-3">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-6 border border-border">
                <StarRating rating={r.stars} size={14} />
                <p className="text-muted-foreground text-sm mt-3 mb-4 italic">"{r.text}"</p>
                <p className="text-[#3D2B1F] text-sm">{r.name}</p>
                <p className="text-[#C4956A] text-xs">{r.role}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews" className="text-[#C4956A] text-sm hover:underline">Read all 27+ reviews →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Work With a Company You Can Trust</h2>
          <p className="text-white/90 mb-8">Fully insured, BBB rated, and backed by 1,000+ completed projects.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors">
            Request Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}