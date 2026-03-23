"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Shield, Award, Heart, Users, ChevronRight, Star, BadgeCheck, Handshake, DollarSign } from "lucide-react";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCompanySettings } from "../providers/SanityProvider";
import kameronSite from "@/assets/kameron-site.webp";
import kameronTruck from "@/assets/kameron-truck.webp";

const militaryValues = [
  {
    icon: Shield,
    title: "Discipline & Accountability",
    desc: "Military service taught Kameron that there are no excuses — only results. That mindset drives how we schedule, communicate, and deliver on every project.",
  },
  {
    icon: BadgeCheck,
    title: "Attention to Detail",
    desc: "In the military, details matter. On a jobsite, they matter just as much. Proper grade, correct drainage slopes, clean cuts — we don't leave until it's right.",
  },
  {
    icon: Users,
    title: "Team-First Mentality",
    desc: "A mission succeeds because of the team, not one person. Our crew operates the same way — everyone has a role, everyone is accountable, and we look out for each other.",
  },
  {
    icon: Handshake,
    title: "Honor & Integrity",
    desc: "Your word is your bond. When we give you a price, that's the price. When we commit to a date, we show up. No games, no bait-and-switch.",
  },
];

const givingBack = [
  {
    title: "10% Veteran Discount",
    desc: "Active military, veterans, and military families receive 10% off all excavation services. No minimum project size, no hoops to jump through — just show your ID or DD-214.",
    highlight: true,
  },
  {
    title: "Veteran Employment Priority",
    desc: "We actively recruit and hire veterans. The discipline, work ethic, and team mentality that comes from military service translates directly to excavation work.",
    highlight: false,
  },
  {
    title: "Community Service Projects",
    desc: "From donated site work for veteran-owned nonprofits to volunteer disaster cleanup, we use our equipment and skills to help when the community needs it most.",
    highlight: false,
  },
  {
    title: "Supporting Military Families",
    desc: "We understand the unique challenges military families face — relocation, deployment, building a new home in a new place. We make the excavation part easy.",
    highlight: false,
  },
];

export function MilitaryPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  usePageSEO({
    title: "Military-Owned Excavation | Veteran Discount",
    description:
      "Lethermon Grade Excavations is a military-owned excavation contractor in Bradenton and Sarasota FL. 10% veteran discount on all services. Military discipline, community commitment.",
    path: "/military",
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Military-Owned</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Service Doesn't End at Discharge</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Kameron Lethermon served his country before he served Southwest Florida's builders.
            The discipline, precision, and accountability that come from military service are
            the same values that drive every project we take on.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">Military-Owned | Faith-Based | 1,000+ Projects</span>
          </div>
        </div>
      </section>

      {/* Military Background */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Background</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-6">From Military Service to Excavation</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Before starting Lethermon Grade Excavations, Kameron served in the United States military.
                  That experience shaped everything about how he runs this company — from the way he
                  structures his crew to the standards he holds on every jobsite.
                </p>
                <p>
                  In the military, you learn that preparation is everything. You plan before you act.
                  You inspect your equipment. You communicate clearly. You don't leave a job half-done.
                  Those principles aren't just nice ideas — they're how we operate every single day.
                </p>
                <p>
                  Over 15 years and 1,000+ projects later, the military foundation hasn't changed.
                  Builders trust us because we show up on time, deliver what we promised, and handle
                  problems with accountability instead of excuses.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">U.S. Military Veteran</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">15+ Years Experience</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">1,000+ Projects</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={kameronSite}
                  alt="Kameron Lethermon — Owner, Lethermon Grade Excavations"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Values in Action */}
      <section className="py-20 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Military Values on the Jobsite</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The skills that serve a country translate directly to the skills that serve a client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {militaryValues.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-[#5C4A1E]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-3 text-lg">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran Discount Banner */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C4956A]/20 border-2 border-[#C4956A]/40 mb-6">
            <DollarSign className="w-10 h-10 text-[#C4956A]" />
          </div>
          <h2 className="text-white text-3xl md:text-4xl mb-4" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            10% Veteran Discount
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-6">
            Active duty, veterans, and military families receive 10% off all excavation services.
            No minimum project size. Just mention your service when you call or fill out the form.
          </p>
          <p className="text-white/50 text-sm mb-8">
            Valid military ID, DD-214, or VA card accepted for verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-colors font-medium"
            >
              Claim Your Veteran Discount
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>

      {/* How We Give Back */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Giving Back</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">How We Serve Our Community</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't just talk about supporting veterans and the community — we put our
              equipment, our time, and our money where it matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {givingBack.map((item) => (
              <div
                key={item.title}
                className={`rounded-xl p-8 shadow-sm border ${
                  item.highlight
                    ? "bg-[#5C4A1E]/5 border-[#C4956A]/30"
                    : "bg-card border-border"
                }`}
              >
                <h3 className="text-[#3D2B1F] mb-3 text-lg flex items-center gap-2">
                  {item.highlight && <Star className="w-5 h-5 text-[#C4956A]" />}
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branded Truck / Visual Break */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <ImageWithFallback
            src={kameronTruck}
            alt="Lethermon Grade Excavations branded truck on a Florida jobsite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-[#3D2B1F]/30" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-[#C4956A] uppercase tracking-wider text-xs mb-1">Military-Owned. Faith-Based. Community-First.</p>
            <p className="text-white/80 text-sm">Proudly serving Bradenton, Sarasota & Southwest Florida</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Hire a Team That Serves With Purpose</h2>
          <p className="text-white/90 mb-8">
            Military discipline. Community commitment. The same standards that serve
            a country now serve Southwest Florida's builders and property owners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              to="/faith"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Our Faith Foundation
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
