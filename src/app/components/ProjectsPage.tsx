"use client";
import { useState } from "react";
import { usePageSEO } from "../hooks/usePageSEO";
import { Link } from "@/compat/Link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { StarRating } from "./StarRating";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { IMG } from "./data";
import { useReviews, useServiceAreas, useCompanySettings } from "../providers/SanityProvider";
import imgOverhead from "@/assets/images/grading-overhead-commercial.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgDemolition from "@/assets/images/demolition-mobile-home-hero.webp";
import imgGrading from "@/assets/images/grading-commercial-parking.webp";
import imgDrainage from "@/assets/images/drainage-pvc-sunset.webp";
import imgClearing from "@/assets/images/land-clearing-stump-removal.webp";
import imgPool from "@/assets/images/excavation-pool-coastal.webp";
import imgEquipment from "@/assets/images/equipment-roller-bulldozer.webp";
import imgRetention from "@/assets/images/drainage-retention-pond.webp";
import imgClearingBradenton from "@/assets/images/land-clearing-bradenton.webp";
import heroVideo from "@/assets/videos/hero-background.mp4";
import heroPoster from "@/assets/videos/hero-background-poster.webp";
import clearingVideo from "@/assets/videos/land-clearing.mp4";
import clearingPoster from "@/assets/videos/land-clearing-poster.webp";

const categories = ["All", "Residential", "Commercial", "Land Clearing", "Grading", "Drainage", "Demolition"];

const projects = [
  { id: 1, title: "Commercial Site Preparation - 15,000 sqft", location: "Bradenton, FL", category: "Commercial", img: imgOverhead, desc: "Complete site preparation including clearing, grading, and drainage for a commercial retail building." },
  { id: 2, title: "Utility Trenching for 12-Lot Subdivision", location: "Sarasota, FL", category: "Residential", img: imgTrenching, desc: "Underground utility trenching for water, sewer, and electrical across a new residential subdivision." },
  { id: 3, title: "Mobile Home Demolition & Site Clearing", location: "Venice, FL", category: "Demolition", img: imgDemolition, desc: "Complete demolition, debris removal, and site cleanup for a residential redevelopment project." },
  { id: 4, title: "Custom Home Foundation Pad", location: "Lakewood Ranch, FL", category: "Grading", img: imgGrading, desc: "Precision laser-guided grading for a 4,000 sqft custom home foundation with drainage slope." },
  { id: 5, title: "French Drain System Installation", location: "Parrish, FL", category: "Drainage", img: imgDrainage, desc: "French drain system installation solving chronic yard flooding for a lakefront property." },
  { id: 6, title: "5-Acre Residential Land Clearing", location: "Bradenton, FL", category: "Land Clearing", img: imgClearing, desc: "Complete clearing of a 5-acre wooded lot including tree removal, grubbing, and haul-off." },
  { id: 7, title: "Pool Excavation & Site Prep", location: "Sarasota, FL", category: "Commercial", img: imgPool, desc: "Pool excavation and site preparation with Yanmar excavator for a coastal residential property." },
  { id: 8, title: "Pool Area Demolition & Grading", location: "Venice, FL", category: "Demolition", img: IMG.demolition, desc: "Demolition of existing pool deck and hardscape with re-grading for complete renovation." },
  { id: 9, title: "Spec Home Pad - Builder Partnership", location: "Lakewood Ranch, FL", category: "Residential", img: IMG.bulldozerClear, desc: "Foundation pad preparation as part of an ongoing builder partnership for spec home construction." },
  { id: 10, title: "Church Site Development", location: "Bradenton, FL", category: "Commercial", img: imgEquipment, desc: "Complete site development for a new church facility including clearing, grading, and drainage." },
  { id: 11, title: "Stormwater Retention Pond", location: "Sarasota, FL", category: "Drainage", img: imgRetention, desc: "Excavation and grading of a retention pond for a residential development stormwater system." },
  { id: 12, title: "Multi-Lot Development Clearing", location: "Parrish, FL", category: "Land Clearing", img: imgClearingBradenton, desc: "Land clearing for a 20-lot residential development including access road grading." },
];

export function ProjectsPage() {
  usePageSEO({
    title: "Excavation Projects & Portfolio | Bradenton & Sarasota FL",
    description: "View completed excavation, grading, land clearing, and demolition projects across Southwest Florida. See our work in Bradenton, Sarasota, Venice, and Lakewood Ranch.",
    path: "/projects",
  });
  const reviews = useReviews();
  const serviceAreas = useServiceAreas();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const projectTypes = settings?.projectTypes || ["Custom Homes", "Spec Homes", "Commercial Pads", "Pool Excavation", "Subdivision Development", "Drainage Systems", "Demolition", "Church Sites", "Storage Facilities", "Retail Development"];
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Work</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">1,000+ Projects Completed</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Real results from real jobsites across Sarasota, Bradenton, Venice, and surrounding areas.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | Every project backed by our Build-Ready Guarantee</span>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full transition-colors text-sm ${
                  activeCategory === cat
                    ? "bg-[#5C4A1E] text-white"
                    : "bg-secondary text-[#5C4A1E] hover:bg-[#5C4A1E]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="overflow-hidden h-56">
                  <ImageWithFallback src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#C4956A] uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-[#3D2B1F] mt-1 mb-2 text-sm">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{project.desc}</p>
                  <div className="flex items-center gap-1 text-[#5C4A1E] text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Projects */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Project Videos</p>
            <h2 className="text-3xl text-white">Watch Our Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <VideoPlaceholder title="Commercial Site Prep" thumbnail={heroPoster} videoSrc={heroVideo} className="h-56" />
            <VideoPlaceholder title="Residential Foundation" thumbnail={imgPool} className="h-56" />
            <VideoPlaceholder title="Land Clearing Timelapse" thumbnail={clearingPoster} videoSrc={clearingVideo} className="h-56" />
          </div>
        </div>
      </section>

      {/* Local Authority / Map */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Service Coverage</p>
            <h2 className="text-3xl text-[#3D2B1F] mb-4">Local Authority Across the Region</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md border border-border bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              />
            </div>
            <div className="space-y-3 max-h-[380px] overflow-y-auto">
              {serviceAreas.map((area) => (
                <div key={area.city} className="bg-card rounded-lg p-4 border border-border flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C4956A] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[#3D2B1F] text-sm">{area.city}</h3>
                      <span className="text-xs bg-[#C4956A]/10 text-[#C4956A] px-2 py-0.5 rounded-full">{area.projects} projects</span>
                    </div>
                    <p className="text-muted-foreground text-xs mt-1">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <p className="text-center text-muted-foreground text-sm mb-4">Types of Projects We Handle</p>
            <div className="flex flex-wrap justify-center gap-2">
              {projectTypes.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-card rounded-full text-[#5C4A1E] text-sm border border-border">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews inline */}
      <section className="py-16 bg-[#1a1008]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <StarRating rating={5} size={20} />
              <span className="text-white/70">5.0 from 47+ Reviews</span>
            </div>
            <h2 className="text-2xl text-white">What Builders & Owners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r) => (
              <div key={r.name} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <StarRating rating={r.stars} size={14} />
                <p className="text-gray-300 text-sm mt-3 mb-4 italic">"{r.text}"</p>
                <p className="text-white text-sm">{r.name}</p>
                <p className="text-[#C4956A] text-xs">{r.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-white/90 mb-8">Contact us for a free, no-obligation estimate today.</p>
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