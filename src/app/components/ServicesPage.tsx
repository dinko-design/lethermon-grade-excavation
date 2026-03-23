"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Trees, Shovel, Ruler, Droplets, Building2, Cable, ChevronRight, Landmark, Hammer, Layers, CloudRain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgLandClearing from "@/assets/images/land-clearing-stump-removal.webp";
import imgExcavation from "@/assets/images/excavation-pool-overhead.webp";
import imgGrading from "@/assets/images/grading-service-hero.webp";
import imgDrainage from "@/assets/images/drainage-pvc-sunset.webp";
import imgDemolition from "@/assets/images/demolition-mobile-home-hero.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgSiteDev from "@/assets/images/site-development-aerial.webp";
import imgConcreteRemoval from "@/assets/images/demolition-excavator-rubble.webp";
import imgFoundationPrep from "@/assets/images/grading-house-pad.webp";
import imgStormwater from "@/assets/images/drainage-culvert-pipe.webp";

const services = [
  { icon: Trees, to: "/services/land-clearing", title: "Land Clearing", desc: "Complete lot clearing, tree removal, and debris hauling. First step to a build-ready site.", img: imgLandClearing },
  { icon: Shovel, to: "/services/excavation", title: "Excavation", desc: "Foundation digging, structural excavation, pool excavation, and site prep.", img: imgExcavation },
  { icon: Ruler, to: "/services/site-grading", title: "Site Grading", desc: "Laser-guided precision grading for foundation pads, driveways, and commercial sites.", img: imgGrading },
  { icon: Landmark, to: "/services/site-development", title: "Site Development", desc: "Full-scope commercial and residential site preparation from raw land to construction-ready.", img: imgSiteDev },
  { icon: Layers, to: "/services/foundation-prep", title: "Foundation Preparation", desc: "Precision foundation excavation, footing trenches, and building pad grading.", img: imgFoundationPrep },
  { icon: Droplets, to: "/services/drainage", title: "Drainage Solutions", desc: "French drains, water redirection, retention ponds, and erosion control.", img: imgDrainage },
  { icon: CloudRain, to: "/services/stormwater-drainage", title: "Stormwater Systems", desc: "Catch basins, culvert pipes, trench drains, and stormwater infrastructure.", img: imgStormwater },
  { icon: Building2, to: "/services/demolition", title: "Demolition", desc: "Safe structure removal, mobile home demolition, and complete site cleanup.", img: imgDemolition },
  { icon: Hammer, to: "/services/concrete-removal", title: "Concrete Removal", desc: "Driveway removal, slab demolition, concrete breaking, and hauling.", img: imgConcreteRemoval },
  { icon: Cable, to: "/services/trenching", title: "Utility Trenching", desc: "Code-compliant trenching for water, sewer, electric, and underground utilities.", img: imgTrenching },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Excavation Services | Lethermon Grade Excavations",
      description: "Land clearing, excavation, site grading, drainage, demolition, and utility trenching in Bradenton, Sarasota, and Southwest Florida. Build-ready guarantee.",
      url: "https://www.lethermongradeexcavations.com/services",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lethermongradeexcavations.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.lethermongradeexcavations.com/services" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Lethermon Grade Excavations Services",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://www.lethermongradeexcavations.com${s.to}`,
      })),
    },
  ],
};

export function ServicesPage() {
  usePageSEO({
    title: "Excavation Services | Land Clearing, Grading, Drainage | Bradenton & Sarasota",
    description: "Professional land clearing, excavation, site grading, drainage solutions, demolition, and utility trenching. Serving Bradenton, Sarasota, Venice, and Southwest Florida. Free estimates.",
    path: "/services",
  });

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Hero */}
      <section className="relative min-h-[400px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={imgGrading} alt="Excavation services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 md:py-32">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C4956A]">Services</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Our Excavation Services</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            From land clearing and grading to drainage and demolition — everything you need to take a site from raw land to build-ready.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
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
                    <h2 className="text-[#3D2B1F] text-xl">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{s.desc}</p>
                  <span className="text-[#C4956A] text-sm flex items-center gap-1 group-hover:gap-2 transition-all font-medium">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
