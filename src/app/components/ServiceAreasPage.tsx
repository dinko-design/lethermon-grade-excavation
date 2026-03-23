"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { MapPin, ArrowRight, Phone, CheckCircle } from "lucide-react";
import { StarRating } from "./StarRating";
import { IMG } from "./data";
import { useServiceAreas, useCompanySettings } from "../providers/SanityProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServiceAreasPage() {
  const areas = useServiceAreas();
  const settings = useCompanySettings();
  const projectTypes = settings?.projectTypes || ["Custom Homes", "Spec Homes", "Commercial Pads", "Pool Excavation", "Subdivision Development", "Drainage Systems", "Demolition", "Church Sites", "Storage Facilities", "Retail Development"];
  const totalProjects = areas.reduce((sum, a) => sum + a.projects, 0);

  const serviceAreasSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Service Areas - Lethermon Grade Excavations",
        description: `Professional excavation services across ${areas.length} Southwest Florida communities. ${totalProjects}+ completed projects in Sarasota, Manatee, Pinellas, and Charlotte counties.`,
        url: "https://www.lethermongradeexcavations.com/service-areas",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lethermongradeexcavations.com" },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.lethermongradeexcavations.com/service-areas" },
        ],
      },
      {
        "@type": "ItemList",
        name: "Lethermon Grade Excavations Service Areas",
        itemListElement: areas.map((a, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${a.city}, Florida`,
          url: `https://www.lethermongradeexcavations.com/service-areas/${a.slug}`,
        })),
      },
    ],
  };

  usePageSEO({
    title: "Service Areas | Excavation in Sarasota, Bradenton & SW Florida",
    description: "Lethermon Grade Excavations serves Bradenton, Sarasota, Venice, Lakewood Ranch, Palmetto, North Port, Parrish, and Ellenton. Find excavation services near you.",
    path: "/service-areas",
  });
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreasSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[400px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={IMG.florida} alt="Southwest Florida" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Service Areas</p>
            <h1 className="text-white text-4xl md:text-5xl mb-4" style={{ lineHeight: 1.1 }}>
              Local Excavation Experts Across <span className="text-[#C4956A]">Southwest Florida</span>
            </h1>
            <p className="text-gray-300 text-lg mb-6">
              {totalProjects}+ projects completed across {areas.length} communities in Sarasota, Manatee, Pinellas, and Charlotte counties.
            </p>
            <div className="flex items-center gap-2">
              <StarRating rating={5} size={16} />
              <span className="text-white/70 text-sm">5.0 Rating | Fully Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Areas Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-md border border-border bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 440 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              />
            </div>
            <div>
              <h2 className="text-xl text-[#3D2B1F] mb-4">Counties Served</h2>
              <div className="space-y-3 mb-6">
                {["Sarasota County", "Manatee County", "Pinellas County (South)", "Charlotte County (North)"].map((c) => (
                  <div key={c} className="flex items-center gap-2 text-[#3D2B1F]">
                    <CheckCircle className="w-4 h-4 text-[#C4956A]" />
                    <span className="text-sm">{c}</span>
                  </div>
                ))}
              </div>
              <h2 className="text-xl text-[#3D2B1F] mb-4 mt-8">Project Types</h2>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <span key={t} className="px-3 py-1 bg-secondary rounded-full text-[#5C4A1E] text-xs border border-border">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* City cards */}
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Explore Our Service Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group bg-card rounded-xl p-6 border border-border hover:border-[#C4956A]/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C4956A]/10 flex items-center justify-center group-hover:bg-[#C4956A] transition-colors">
                    <MapPin className="w-5 h-5 text-[#C4956A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[#3D2B1F]">{area.city}</h3>
                    <p className="text-xs text-muted-foreground">{area.county}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-3">{area.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-[#C4956A]/10 text-[#C4956A] px-2.5 py-1 rounded-full">{area.projects} projects</span>
                  <ArrowRight className="w-4 h-4 text-[#C4956A] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-12 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: "/services/land-clearing", label: "Land Clearing" },
              { to: "/services/excavation", label: "Excavation" },
              { to: "/services/site-grading", label: "Site Grading" },
              { to: "/services/drainage", label: "Drainage" },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="bg-card rounded-lg p-4 border border-border text-center text-sm text-[#3D2B1F] hover:border-[#C4956A]/30 transition-colors">
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Don't See Your Area?</h2>
          <p className="text-white/90 mb-8">We may still be able to serve your project. Contact us to discuss your location.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors">
              Request Free Estimate
            </Link>
            <a href={`tel:${settings?.phoneTel || "9412907208"}`} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> {settings?.phone || "(941) 290-7208"}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}