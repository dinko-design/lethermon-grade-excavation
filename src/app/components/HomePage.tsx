import { Link } from "react-router";
import {
  Shield, Clock, Truck, FileText, Trees, Shovel, Ruler, Droplets, Building2, Cable,
  ChevronRight, Phone, CheckCircle, Star, MapPin, Award, HardHat, Users, ArrowRight,
} from "lucide-react";
const heroImg = "/hero-jobsite.webp";
import kameronHardhat from "@/assets/kameron-hardhat.webp";
import kameronSite from "@/assets/kameron-site.webp";
import kameronTruck from "@/assets/kameron-truck.webp";
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
  { value: "200+", label: "Projects Completed" },
  { value: "47+", label: "5-Star Reviews" },
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
      "Professional excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching serving Bradenton, Sarasota, Venice, and Lakewood Ranch. 200+ projects. 5-star rated. Call (941) 290-7208 for a free estimate.",
    path: "/",
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
      <section className="bg-[#5C4A1E] text-white py-6 noise-overlay grit-bottom">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-[#C4956A]/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 overflow-hidden relative">
                  <ImageWithFallback src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" width={400} height={192} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#5C4A1E]/8 flex items-center justify-center group-hover:bg-[#5C4A1E] transition-colors duration-300">
                      <s.icon className="w-5 h-5 text-[#5C4A1E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-[#3D2B1F]">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                  <span className="text-[#C4956A] text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Process Section ═══ */}
      <section className="py-20 bg-[#3D2B1F] noise-overlay grit-top grit-bottom">
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
                      <div className="w-12 h-12 rounded-full bg-[#C4956A] text-white flex items-center justify-center flex-shrink-0 text-sm group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      {idx < 3 && <div className="absolute top-12 left-1/2 w-px h-6 bg-[#C4956A]/30 -translate-x-1/2" />}
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
              <p className="text-[#C4956A] mb-6">Founder & Lead Operator</p>

              <blockquote className="border-l-4 border-[#C4956A] pl-5 mb-6 italic text-muted-foreground">
                "I don't send a crew — I lead it. Every project gets my personal attention from the first site walk to final grade check."
              </blockquote>

              <p className="text-muted-foreground mb-4">
                After years in military service and civilian heavy-equipment operation, Kameron founded Lethermon Grade Excavations with a simple mission: deliver the same discipline, precision, and reliability that the military demands — to every jobsite in Southwest Florida.
              </p>
              <p className="text-muted-foreground mb-6">
                As an owner-operator, Kameron is on-site for every project. No middlemen, no miscommunication — just direct accountability from the person whose name is on the truck.
              </p>

              {/* Key traits */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { icon: HardHat, label: "Owner-Operated" },
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

      {/* ═══ Branded Truck Banner ═══ */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-64 md:h-80 lg:h-96">
          <img
            src={kameronTruck}
            alt="Lethermon Grade Excavations branded work truck and trailer with excavator on active Florida jobsite"
            className="w-full h-full object-cover"
            width={1200} height={384} loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2B1F]/80 via-[#3D2B1F]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-md">
                <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">On Every Jobsite</p>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-3">Our Name Is on the Truck</h2>
                <p className="text-gray-300 text-sm md:text-base">
                  When you hire Lethermon, you get the owner on-site with real equipment — not a subcontractor with a rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Guarantees ═══ */}
      <section className="py-20 bg-secondary noise-overlay grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Pledges</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Guarantees You Can Count On</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="text-center p-5 md:p-8 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#C4956A]/10 flex items-center justify-center mx-auto mb-4 md:mb-5">
                  <g.icon className="w-6 h-6 md:w-8 md:h-8 text-[#C4956A]" />
                </div>
                <h3 className="text-[#3D2B1F] text-sm md:text-base mb-2 md:mb-3">{g.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Reviews ═══ */}
      <section className="py-20 bg-[#1a1008] noise-overlay-heavy grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Client Reviews</p>
            <h2 className="text-3xl md:text-4xl text-white mb-2">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <StarRating rating={5} size={20} />
              <span className="text-white/70">5.0 Average from 47+ Reviews</span>
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
            </div>
            <Link to="/projects" className="text-[#C4956A] flex items-center gap-1 mt-3 md:mt-0 hover:gap-2 transition-all text-sm">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { img: imgOverhead, label: "Commercial Site Prep", alt: "Aerial drone view of commercial site grading project with heavy equipment in Bradenton FL" },
              { img: imgTrenching, label: "Utility Trenching", alt: "Crew installing concrete culvert pipe in deep utility trench in Palmetto FL" },
              { img: imgGradingCommercial, label: "Foundation Grading", alt: "Volvo roller compacting commercial parking lot foundation in Bradenton FL" },
              { img: imgDemolition, label: "Structure Demolition", alt: "Red Yanmar excavator demolishing mobile home with Lethermon branded truck on site" },
              { img: imgEquipment, label: "Equipment Fleet", alt: "John Deere compact track loader and wheel loader on open grading site" },
              { img: imgPoolBackfill, label: "Pool Excavation", alt: "Completed pool shell with graded backfill ready for deck work in Sarasota FL" },
            ].map((p) => (
              <Link key={p.label} to="/projects" className="group rounded-xl overflow-hidden relative h-44 md:h-56">
                <ImageWithFallback src={p.img} alt={p.alt || p.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={300} height={224} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white text-xs md:text-sm">{p.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Service Areas Map ═══ */}
      <section className="py-20 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Service Coverage</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Local Authority Across Southwest Florida</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              200+ completed projects across Sarasota, Manatee & Charlotte counties.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md border border-border bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226604.18122392394!2d-82.63!3d27.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c340937da31753%3A0x9a42708b6c7fcafe!2sBradenton%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lethermon Service Area"
              />
            </div>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {allServiceAreas.map((area) => (
                <Link
                  key={area.city}
                  to={`/service-areas/${area.slug || area.city.toLowerCase().replace(/\s+/g, "-").replace(".", "")}`}
                  className="group bg-card rounded-lg p-4 border border-border flex items-start gap-3 hover:border-[#C4956A]/30 hover:shadow-sm transition-all block"
                >
                  <MapPin className="w-5 h-5 text-[#C4956A] flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[#3D2B1F] text-sm">{area.city}</h3>
                      <span className="text-xs bg-[#C4956A]/10 text-[#C4956A] px-2 py-0.5 rounded-full">{area.projects} projects</span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">{area.description}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C4956A] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                </Link>
              ))}
            </div>
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
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Resources</p>
              <h2 className="text-2xl text-[#3D2B1F]">From Our Blog</h2>
            </div>
            <Link to="/blog" className="text-[#C4956A] text-sm flex items-center gap-1 hover:gap-2 transition-all">
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
                  <span className="text-[#C4956A] text-xs mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">Read Article <ArrowRight className="w-3 h-3" /></span>
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