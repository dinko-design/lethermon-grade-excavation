"use client";
import { Link } from "@/compat/Link";
import {
  Shield, Clock, Truck, FileText, Trees, Shovel, Ruler, Droplets, Building2, Cable,
  ChevronRight, Phone, CheckCircle, Star, MapPin, Award, HardHat, Users, ArrowRight,
} from "lucide-react";
const heroImg = "/hero-jobsite.webp";
import kameronHardhat from "@/assets/kameron-hardhat.webp";
import kameronSite from "@/assets/kameron-site.webp";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { StarRating, RatingBadge } from "./StarRating";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { IMG } from "./data";
import { useReviews, useServiceAreas, useCompanySettings } from "../providers/SanityProvider";
import { usePageSEO } from "../hooks/usePageSEO";
import imgLandClearing from "@/assets/images/land-clearing-stump-removal.webp";
import imgExcavation from "@/assets/images/excavation-pool-overhead.webp";
import imgGrading from "@/assets/images/grading-service-hero.webp";
import imgDrainage from "@/assets/images/drainage-pvc-sunset.webp";
import imgDemolition from "@/assets/images/demolition-mobile-home-hero.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgGradingCommercial from "@/assets/images/grading-commercial-parking.webp";
import imgDemoWaterfront from "@/assets/images/demolition-waterfront-cover.webp";
import imgPoolBackfill from "@/assets/images/excavation-pool-backfill.webp";
import imgEquipment from "@/assets/images/equipment-deere-fleet.webp";
import imgOverhead from "@/assets/images/grading-overhead-commercial.webp";
import heroVideo from "@/assets/videos/hero-background.mp4";
import heroPoster from "@/assets/videos/hero-background-poster.webp";

const services = [
  { icon: Trees, to: "/services/land-clearing", title: "Land Clearing", desc: "Complete lot clearing, tree removal, and debris hauling.", img: imgLandClearing },
  { icon: Shovel, to: "/services/excavation", title: "Excavation", desc: "Foundation digging, structural excavation, site prep.", img: imgExcavation },
  { icon: Ruler, to: "/services/site-grading", title: "Site Grading", desc: "Laser-guided precision grading for foundation pads.", img: imgGrading },
  { icon: Droplets, to: "/services/drainage", title: "Drainage Solutions", desc: "French drains, water redirection, erosion control.", img: imgDrainage },
  { icon: Building2, to: "/services/demolition", title: "Demolition", desc: "Safe structure removal and complete site cleanup.", img: imgDemolition },
  { icon: Cable, to: "/services/trenching", title: "Utility Trenching", desc: "Code-compliant trenching for all underground services.", img: imgTrenching },
];

const guarantees = [
  { icon: Shield, title: "Build-Ready Guarantee", desc: "Every site graded to meet specs for the next phase of construction." },
  { icon: Clock, title: "On-Schedule Commitment", desc: "We commit to your schedule and show up when promised." },
  { icon: Truck, title: "Clean Jobsite Promise", desc: "Every project ends with a clean, safe site for the next trade." },
  { icon: FileText, title: "Transparent Estimates", desc: "No surprise costs. Clear scope, materials, and haul-off." },
];

const stats = [
  { value: "1,000+", label: "Projects Completed" },
  { value: "27+", label: "5-Star Reviews" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Insured & Guaranteed" },
];

export function HomePage() {
  const settings = useCompanySettings();
  const allReviews = useReviews();
  const allServiceAreas = useServiceAreas();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const currentProjectTypes = settings?.projectTypes || ["Custom Homes", "Spec Homes", "Commercial Pads", "Pool Excavation", "Subdivision Development", "Drainage Systems", "Demolition", "Church Sites", "Storage Facilities", "Retail Development"];

  usePageSEO({
    title: "Excavation Contractor in Bradenton & Sarasota FL",
    description:
      "Professional excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching serving Bradenton, Sarasota, Venice, and Lakewood Ranch. 1,000+ projects. 5-star rated. Call (941) 290-7208 for a free estimate.",
    path: "/",
    jsonLd: {
      "@type": "HowTo",
      name: "How to Get Your Site Prepared with Lethermon Grade Excavations",
      description: "Our simple 4-step process to go from raw land to a build-ready site.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Call or Request Estimate",
          text: "Tell us about your project. We respond within 24 hours.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Free Site Evaluation",
          text: "We visit your property to assess soil, drainage, and access.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Transparent Proposal",
          text: "Receive a detailed quote with clear scope and pricing.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Expert Execution",
          text: "Our crew prepares your site to spec, ready for the next trade.",
        },
      ],
    },
  });

  return (
    <div>
      {/* ═══ Hero ═══ */}
      <section className="relative min-h-[600px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Lethermon Grade Excavations active jobsite with excavation equipment in Bradenton FL" className="w-full h-full object-cover" width={1920} height={1662} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/40 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-28 md:py-36 lg:py-44">
          <div className="max-w-2xl">
            {/* Location strip + Rating - immediately communicate WHERE */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-1.5 bg-[#C4956A]/20 backdrop-blur-sm border border-[#C4956A]/30 rounded-full px-3.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C4956A]" />
                <span className="text-white/90 text-xs">Sarasota &bull; Bradenton &bull; Venice &bull; Lakewood Ranch</span>
              </div>
              <RatingBadge />
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6" style={{ lineHeight: 1.08 }}>
              From Raw Land to{" "}
              <span className="text-[#C4956A] relative">
                Build-Ready
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#C4956A]/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>{" "}
              Sites
            </h1>

            <p className="text-gray-300 text-lg mb-5 max-w-xl">
              Professional excavation, grading, land clearing & drainage for builders,
              developers, and property owners across Southwest Florida.
            </p>

            {/* Micro trust line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/50 text-xs mb-8">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C4956A]" /> Fully Insured</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C4956A]" /> BBB A+ Rated</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C4956A]" /> Military-Owned</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C4956A]" /> Faith-Based</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#C4956A]" /> Free Estimates</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-all hover:shadow-lg hover:shadow-[#C4956A]/20 active:scale-[0.98]"
              >
                Request Free Estimate <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${phoneTel}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white px-8 py-4 rounded-lg hover:bg-white/10 hover:border-white/40 transition-all active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" /> {phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats bar ═══ */}
      <section className="bg-[#2A2F35] text-white py-6 noise-overlay dot-grid grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl md:text-3xl text-[#B8C8D4]">{s.value}</p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Services Grid ═══ */}
      <section className="py-20 bg-background grit-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Complete Site Preparation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every service backed by our Build-Ready Guarantee. Click any service to learn more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group relative rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-500"
              >
                {/* Full-bleed image */}
                <div className="h-72 md:h-80 overflow-hidden">
                  <ImageWithFallback src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={400} height={320} />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008] via-[#2A1D12]/50 to-transparent" />
                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-[#C4956A] flex items-center justify-center shadow-lg">
                      <s.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <h3 className="text-white text-lg font-medium">{s.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm mb-3">{s.desc}</p>
                  <span className="text-[#C4956A] text-sm font-medium flex items-center gap-1 group-hover:gap-2.5 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Process Section ═══ */}
      <section className="py-20 bg-[#3D2B1F] noise-overlay diagonal-lines grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">How It Works</p>
              <h2 className="text-3xl md:text-4xl text-white mb-8">Simple 4-Step Process</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Call or Request Estimate", desc: "Tell us about your project. We respond within 24 hours." },
                  { step: "02", title: "Free Site Evaluation", desc: "We visit your property to assess soil, drainage, and access." },
                  { step: "03", title: "Transparent Proposal", desc: "Receive a detailed quote with clear scope and pricing." },
                  { step: "04", title: "Expert Execution", desc: "Our crew prepares your site to spec, ready for the next trade." },
                ].map((item, idx) => (
                  <div key={item.step} className="flex gap-4 group">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-[#7E95A8] text-white flex items-center justify-center flex-shrink-0 text-sm group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      {idx < 3 && <div className="absolute top-12 left-1/2 w-px h-6 bg-[#7E95A8]/30 -translate-x-1/2" />}
                    </div>
                    <div>
                      <h3 className="text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <VideoPlaceholder
              title="Watch How We Work"
              thumbnail={heroPoster}
              videoSrc={heroVideo}
              className="h-80 lg:h-[420px] rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* ═══ Meet the Owner ═══ */}
      <section className="py-20 bg-background grit-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Photo side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={kameronSite}
                  alt="Kameron Lethermon owner of Lethermon Grade Excavations on active jobsite in Bradenton FL"
                  className="w-full h-[420px] md:h-[500px] object-cover"
                  width={800} height={500} loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1008]/60 via-transparent to-transparent" />
              </div>
              {/* Floating hardhat photo */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-lg border-4 border-background">
                <img
                  src={kameronHardhat}
                  alt="Kameron Lethermon in hardhat and safety vest ready for excavation work"
                  className="w-full h-full object-cover"
                  width={176} height={176} loading="lazy"
                />
              </div>
              {/* Experience badge */}
              <div className="absolute top-4 left-4 bg-[#C4956A] text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-2xl">15+</p>
                <p className="text-xs text-white/80">Years Experience</p>
              </div>
            </div>

            {/* Content side */}
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Meet the Owner</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-2">Kameron Lethermon</h2>
              <p className="text-[#C4956A] mb-6">Founder & Owner</p>

              <blockquote className="border-l-4 border-[#C4956A] pl-5 mb-6 italic text-muted-foreground">
                "I built this crew so I could focus on what matters — being on every jobsite, making sure the work is done right, and growing relationships with the builders who trust us."
              </blockquote>

              <p className="text-muted-foreground mb-4">
                After years in military service and civilian construction experience, Kameron founded Lethermon Grade Excavations with a simple mission: deliver the same discipline, precision, and reliability that the military demands — to every jobsite in Southwest Florida.
              </p>
              <p className="text-muted-foreground mb-6">
                Kameron is on-site for every project — directing the crew, coordinating with builders, and ensuring every grade meets spec. No middlemen, no miscommunication — just direct accountability from the person whose name is on the truck.
              </p>

              {/* Key traits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: HardHat, label: "Owner On-Site Daily" },
                  { icon: Shield, label: "Military Discipline" },
                  { icon: Award, label: "BBB A+ Rated" },
                  { icon: Users, label: "Hands-On Leadership" },
                ].map((trait) => (
                  <div key={trait.label} className="flex items-center gap-2.5 bg-secondary rounded-lg px-3.5 py-2.5">
                    <trait.icon className="w-4.5 h-4.5 text-[#C4956A] flex-shrink-0" />
                    <span className="text-[#3D2B1F] text-sm">{trait.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 bg-[#5C4A1E] text-white px-6 py-3 rounded-lg hover:bg-[#3D2B1F] transition-all active:scale-[0.98]"
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-[#C4956A] text-[#C4956A] px-6 py-3 rounded-lg hover:bg-[#C4956A]/5 transition-all active:scale-[0.98]"
                >
                  Talk to Kameron Directly
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Guarantees ═══ */}
      <section className="py-20 bg-secondary noise-overlay dot-grid grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#7E95A8] uppercase tracking-wider text-sm mb-2">Our Pledges</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Guarantees You Can Count On</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="text-center p-5 md:p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#7E95A8]/10 flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <g.icon className="w-6 h-6 md:w-8 md:h-8 text-[#7E95A8]" />
                </div>
                <h3 className="text-[#3D2B1F] text-sm md:text-base mb-2 md:mb-3">{g.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Branded Truck Banner ═══ */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src={kameronSite}
            alt="Kameron Lethermon — owner of Lethermon Grade Excavations — overseeing a jobsite with branded truck and excavator in Southwest Florida"
            className="w-full h-full object-cover"
            width={1200} height={600} loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2A1D12]/95 via-[#2A1D12]/70 to-[#2A1D12]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-2xl">
                <p className="text-[#C4956A] uppercase tracking-widest text-sm md:text-base mb-4 font-medium">On Every Jobsite</p>
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>Our Name Is on the Truck</h2>
                <p className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                  When you hire Lethermon, you get the owner on-site directing a professional crew — not a subcontractor you've never met.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Reviews ═══ */}
      <section className="py-20 bg-[#1a1008] noise-overlay-heavy dot-grid grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl text-white mb-2">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <StarRating rating={5} size={20} />
              <span className="text-white/70">5.0 Average from 27+ Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {allReviews.slice(0, 8).map((r) => (
              <div key={r.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/8 hover:border-white/15 transition-colors">
                <StarRating rating={r.stars} size={14} />
                <p className="text-gray-300 text-sm mt-3 mb-4 italic leading-relaxed">"{r.text}"</p>
                <div className="border-t border-white/8 pt-3">
                  <p className="text-white text-sm">{r.name}</p>
                  <p className="text-[#C4956A] text-xs">{r.role} &mdash; {r.project}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-[#C4956A] hover:gap-3 transition-all text-sm">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Projects Snapshot ═══ */}
      <section className="py-20 bg-background grit-top">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Work</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F]">Recent Projects</h2>
              <p className="text-muted-foreground mt-2 max-w-xl">Real projects completed across Southwest Florida — from residential lots to commercial developments.</p>
            </div>
            <Link to="/projects" className="text-[#C4956A] flex items-center gap-1 mt-3 md:mt-0 hover:gap-2 transition-all text-sm">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: imgOverhead, title: "Commercial Warehouse Site Prep", location: "Bradenton, FL", service: "Site Grading", scope: "5-acre commercial pad, stormwater grading, and parking lot prep for a new warehouse facility.", alt: "Aerial drone view of commercial site grading project with heavy equipment in Bradenton FL" },
              { img: imgTrenching, title: "Underground Utility Install", location: "Palmetto, FL", service: "Trenching", scope: "700 LF of water, sewer, and storm drain trenching for a new residential subdivision.", alt: "Crew installing concrete culvert pipe in deep utility trench in Palmetto FL" },
              { img: imgGradingCommercial, title: "Commercial Parking Pad", location: "Bradenton, FL", service: "Foundation Grading", scope: "Precision grading and compaction for a 20,000 SF commercial building pad and parking area.", alt: "Volvo roller compacting commercial parking lot foundation in Bradenton FL" },
              { img: imgDemolition, title: "Mobile Home Demolition & Lot Clear", location: "Longboat Key, FL", service: "Demolition", scope: "Full structure demolition, debris removal, and lot clearing for new coastal construction.", alt: "Red Yanmar excavator demolishing mobile home with Lethermon branded truck on site" },
              { img: imgPoolBackfill, title: "Pool Excavation & Backfill", location: "Sarasota, FL", service: "Excavation", scope: "Custom pool dig, dewatering, and structural backfill for a waterfront home on Siesta Key.", alt: "Completed pool shell with graded backfill ready for deck work in Sarasota FL" },
              { img: imgDemoWaterfront, title: "Waterfront Structure Removal", location: "Venice, FL", service: "Demolition", scope: "Selective demolition of waterfront structure with environmental protection and site restoration.", alt: "Waterfront demolition project in Venice FL" },
            ].map((p) => (
              <Link key={p.title} to="/projects" className="group bg-card rounded-xl overflow-hidden border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback src={p.img} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#5C4A1E] text-white text-xs px-2.5 py-1 rounded-full">{p.service}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#3D2B1F] font-medium mb-1.5 group-hover:text-[#5C4A1E] transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-[#C4956A] text-xs mb-3">
                    <MapPin className="w-3 h-3" />
                    {p.location}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.scope}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Service Areas Map ═══ */}
      <section className="py-20 bg-secondary noise-overlay diagonal-lines grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Service Coverage</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Local Authority Across Southwest Florida</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              1,000+ completed projects across Sarasota, Manatee & Charlotte counties.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md border border-border bg-white mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lethermon Service Area"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {allServiceAreas.map((area) => (
              <Link
                key={area.city}
                to={`/service-areas/${area.slug || area.city.toLowerCase().replace(/\s+/g, "-").replace(".", "")}`}
                className="group bg-card rounded-lg p-4 border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all block text-center"
              >
                <MapPin className="w-5 h-5 text-[#C4956A] mx-auto mb-2" />
                <h3 className="text-[#3D2B1F] text-sm font-medium">{area.city}</h3>
                <span className="text-xs text-[#C4956A] font-medium">{area.projects}+ projects</span>
                <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">{area.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <p className="text-center text-muted-foreground text-sm mb-4">Types of Projects We Handle</p>
            <div className="flex flex-wrap justify-center gap-2">
              {currentProjectTypes.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-card rounded-full text-[#5C4A1E] text-sm border border-border hover:border-[#C4956A]/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Blog Tease ═══ */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#9B7347] uppercase tracking-wider text-sm mb-2">Resources</p>
              <h2 className="text-2xl text-[#3D2B1F]">From Our Blog</h2>
            </div>
            <Link to="/blog" className="text-[#9B7347] text-sm flex items-center gap-1 hover:gap-2 transition-all">
              All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "How to Prepare Your Lot for Construction", slug: "how-to-prepare-your-lot-for-construction", img: imgLandClearing },
              { title: "5 Common Florida Drainage Problems", slug: "florida-drainage-problems-solutions", img: imgDrainage },
              { title: "How Much Does Land Clearing Cost?", slug: "land-clearing-cost-florida", img: imgGrading },
            ].map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="h-40 overflow-hidden">
                  <ImageWithFallback src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={400} height={160} />
                </div>
                <div className="p-5">
                  <h3 className="text-[#3D2B1F] text-sm">{post.title}</h3>
                  <span className="text-[#9B7347] text-xs mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-20 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a builder, developer, or property owner, get a free, no-obligation estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-all hover:shadow-lg active:scale-[0.98] text-lg"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all active:scale-[0.98] text-lg"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}