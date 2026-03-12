import { Link } from "react-router";
import { usePageSEO } from "../hooks/usePageSEO";
import { HardHat, MapPin, Clock, CheckCircle, ArrowRight, Phone, Users, Truck, Shield, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { IMG } from "./data";
import { useJobListings, useCompanySettings } from "../providers/SanityProvider";

const benefits = [
  "Competitive pay based on experience",
  "Consistent year-round work",
  "Modern, well-maintained equipment",
  "Local jobs — home every night",
  "Supportive team environment",
  "Growth opportunities as we expand",
  "Safety-first workplace culture",
  "Paid holidays and time off",
];

const teamStats = [
  { value: "Growing", label: "Team Size", icon: Users },
  { value: "200+", label: "Projects Together", icon: Truck },
  { value: "Local", label: "Every Job", icon: MapPin },
  { value: "Safe", label: "Zero Incidents", icon: Shield },
];

export function CareersPage() {
  usePageSEO({
    title: "Careers & Jobs | Lethermon Grade Excavations",
    description: "Join the Lethermon Grade Excavations team. We're hiring equipment operators, laborers, and CDL drivers in Bradenton and Sarasota, FL. Apply today.",
    path: "/careers",
  });
  const openPositions = useJobListings();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  return (
    <div>
      <section className="relative min-h-[400px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={IMG.crewTeam} alt="Lethermon team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <HardHat className="w-6 h-6 text-[#C4956A]" />
              <p className="text-[#C4956A] uppercase tracking-wider text-sm">Careers</p>
            </div>
            <h1 className="text-white text-4xl md:text-5xl mb-4" style={{ lineHeight: 1.1 }}>
              Join a <span className="text-[#C4956A]">Growing Team</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              Lethermon Grade Excavations is expanding. We're looking for skilled operators, drivers, and laborers who take pride in their work.
            </p>
            <a href="#positions" className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-7 py-3.5 rounded-lg hover:bg-[#b07f55] transition-colors">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Team stats */}
      <section className="bg-[#5C4A1E] py-6 noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {teamStats.map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <s.icon className="w-6 h-6 text-[#C4956A] mb-1" />
                <p className="text-xl text-white">{s.value}</p>
                <p className="text-white/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growing team section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Growing Team</p>
              <h2 className="text-3xl text-[#3D2B1F] mb-6">Build Your Career in Excavation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As Southwest Florida continues to grow, so does the demand for quality excavation work. Lethermon Grade Excavations is expanding our team to meet this demand, and we're looking for people who share our commitment to precision, safety, and reliability.
                </p>
                <p>
                  Working with us means operating modern equipment on varied projects — from custom home foundations to commercial site development. No two days are exactly the same, but the standard of work is always the same: precise, clean, and on schedule.
                </p>
                <p>
                  Owner Kameron Lethermon leads from the field, not from behind a desk. You'll work alongside the owner and learn directly from someone with military and civilian construction experience.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-48">
                <ImageWithFallback src={IMG.skidSteer} alt="Equipment operator" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <ImageWithFallback src={IMG.excavatorDig} alt="Excavation work" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <ImageWithFallback src={IMG.dumpTruck} alt="Hauling" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-48">
                <ImageWithFallback src={IMG.safetyVest} alt="Safety equipment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Why Work With Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2 bg-card rounded-lg p-4 border border-border">
                <CheckCircle className="w-5 h-5 text-[#C4956A] flex-shrink-0 mt-0.5" />
                <span className="text-[#3D2B1F] text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="positions" className="py-16 bg-background scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((pos) => (
              <div key={pos.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-[#3D2B1F]">{pos.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{pos.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-3">{pos.description}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#5C4A1E] text-white px-6 py-2.5 rounded-lg hover:bg-[#3D2B1F] transition-colors text-sm whitespace-nowrap"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-8">
            <h3 className="text-[#3D2B1F] mb-2">Don't See Your Role?</h3>
            <p className="text-muted-foreground text-sm mb-4">
              We're always interested in hearing from experienced excavation professionals. Send us your info and we'll be in touch as positions open.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-6 py-3 rounded-lg hover:bg-[#b07f55] transition-colors text-sm">
                Contact Us
              </Link>
              <a href={`tel:${phoneTel}`} className="inline-flex items-center gap-2 text-[#5C4A1E] text-sm">
                <Phone className="w-4 h-4" /> {phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}