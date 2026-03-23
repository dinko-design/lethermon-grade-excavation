"use client";
import { Link } from "@/compat/Link";
import { useParams } from "next/navigation";
import { usePageSEO } from "../hooks/usePageSEO";
import { MapPin, ArrowRight, Phone, CheckCircle, ArrowLeft, Trees, Shovel, Ruler, Droplets, Building2, Cable, Play } from "lucide-react";
import { StarRating } from "./StarRating";
import { IMG, videos } from "./data";
import { useServiceAreas, useReviews, useCompanySettings } from "../providers/SanityProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  { to: "/services/land-clearing", label: "Land Clearing", icon: Trees, desc: "Tree removal, brush clearing, and lot preparation" },
  { to: "/services/excavation", label: "Excavation", icon: Shovel, desc: "Foundation digging, pool excavation, earthwork" },
  { to: "/services/site-grading", label: "Site Grading", icon: Ruler, desc: "Laser-guided precision grading to spec" },
  { to: "/services/drainage", label: "Drainage Solutions", icon: Droplets, desc: "French drains, water management, erosion control" },
  { to: "/services/demolition", label: "Demolition", icon: Building2, desc: "Structure removal and complete site cleanup" },
  { to: "/services/trenching", label: "Utility Trenching", icon: Cable, desc: "Code-compliant trenching for underground utilities" },
];

// Flexible SEO content per city
const citySeoContent: Record<string, { sections: { heading: string; paragraphs: string[]; bullets?: string[]; linkTo?: string; linkText?: string }[] }> = {
  sarasota: {
    sections: [
      {
        heading: "Why Sarasota Property Owners Choose Lethermon Grade",
        paragraphs: [
          "Sarasota's unique geography — from barrier islands to inland developments — creates diverse excavation challenges. Coastal properties near Siesta Key and Lido Key face high water tables and sandy soils that require specialized drainage grading. Inland areas like Palmer Ranch and Bee Ridge present their own challenges with dense vegetation and existing infrastructure.",
          "Our deep experience in Sarasota County means we understand local permitting timelines, tree protection ordinances, and the specific soil conditions in each neighborhood. This knowledge translates to faster project completion, fewer surprises, and inspections that pass the first time.",
        ],
        bullets: [
          "47+ completed Sarasota projects",
          "Sarasota County permit expertise",
          "Coastal and inland soil knowledge",
          "Tree protection ordinance compliance",
          "HOA coordination for gated communities",
          "Rapid response times from Bradenton HQ",
        ],
        linkTo: "/reviews",
        linkText: "Read reviews from Sarasota clients",
      },
      {
        heading: "Sarasota Construction Trends & Site Preparation Needs",
        paragraphs: [
          "Sarasota's real estate market continues to attract builders developing custom homes, luxury renovations, and commercial projects. Each of these project types requires professional site preparation — from initial land clearing through final grading — and getting this foundation work right determines the success of everything that follows.",
          "Whether you're a builder starting a custom home in Indian Beach, a developer preparing a commercial pad on Fruitville Road, or a homeowner dealing with drainage issues in Gulf Gate, our crew has the equipment, experience, and local knowledge to handle your project efficiently.",
        ],
        bullets: [
          "Custom home site prep in premium neighborhoods",
          "Commercial pad development along US-41 & Fruitville",
          "Drainage correction for established neighborhoods",
          "Pool excavation for Sarasota's top pool builders",
          "Lot clearing for infill development projects",
          "Stormwater management for coastal properties",
        ],
        linkTo: "/contact",
        linkText: "Get a free estimate for your Sarasota project",
      },
    ],
  },
  bradenton: {
    sections: [
      {
        heading: "Bradenton: Our Home Base for Excavation Excellence",
        paragraphs: [
          "Bradenton is where Lethermon Grade Excavations was built. Our headquarters here means faster mobilization, lower transportation costs, and deeper knowledge of Manatee County's permitting process than any competitor. When you hire us for a Bradenton project, you're getting the home team advantage.",
          "From residential developments in Braden River to commercial projects along Cortez Road and SR-64, we've shaped the landscape of Bradenton through 62+ completed projects. Our relationships with local inspectors, engineers, and builders make every project smoother.",
        ],
        bullets: [
          "62+ completed Bradenton projects",
          "Headquartered in Palmetto, FL 34221",
          "Same-day site visit availability",
          "Established inspector relationships",
          "Manatee County permit process mastery",
          "Lowest mobilization costs in the area",
        ],
        linkTo: "/about",
        linkText: "Learn more about our Bradenton-based company",
      },
      {
        heading: "Bradenton's Growth Demands Professional Site Preparation",
        paragraphs: [
          "Bradenton is experiencing significant residential and commercial growth, particularly in areas like West Bradenton, East Bradenton near I-75, and the Braden River corridor. This growth drives demand for professional excavation, grading, and site preparation that meets the area's building requirements.",
          "We serve every type of construction project in Bradenton — from single-family home foundations to multi-acre commercial developments. Our fleet of modern equipment and experienced operators handle the full spectrum of site work needed to support Bradenton's continued growth.",
        ],
        linkTo: "/projects",
        linkText: "View our Bradenton project portfolio",
      },
    ],
  },
  venice: {
    sections: [
      {
        heading: "Excavation Expertise for Venice's Coastal Environment",
        paragraphs: [
          "Venice's proximity to the Gulf of Mexico and the Intracoastal Waterway creates unique excavation challenges. High water tables, tidal influences, and coastal soil conditions require contractors who understand how to work effectively in these environments while protecting both the property and surrounding ecosystems.",
          "Our Venice crews specialize in drainage-focused site preparation that accounts for the area's specific water management needs. Whether you're building on Venice Island, in South Venice, or in the master-planned communities near Nokomis, we deliver site work that holds up to Florida's heaviest rain events.",
        ],
        bullets: [
          "28+ completed Venice area projects",
          "Coastal water table management",
          "Drainage grading for flood-prone areas",
          "Environmental buffer compliance",
          "Venice Island and barrier island experience",
          "Coordination with Sarasota County coastal regulations",
        ],
        linkTo: "/services/drainage",
        linkText: "Learn about our drainage solutions for coastal properties",
      },
    ],
  },
  "lakewood-ranch": {
    sections: [
      {
        heading: "Supporting Lakewood Ranch's Rapid Growth",
        paragraphs: [
          "As one of America's fastest-growing master-planned communities, Lakewood Ranch has specific development standards and site preparation requirements that contractors must meet. Our experience with 35+ Lakewood Ranch projects means we understand the community's expectations for quality, timeline adherence, and site cleanliness.",
          "We work with the builders and developers who are shaping Lakewood Ranch's newest neighborhoods including Waterside, Del Webb, Cresswind, and Lorraine Lakes. Our precision grading and efficient land clearing help these projects stay on schedule and meet the community's high standards.",
        ],
        bullets: [
          "35+ completed Lakewood Ranch projects",
          "Builder partnerships with major developers",
          "Master-planned community standards compliance",
          "Subdivision infrastructure grading",
          "Common area and amenity site preparation",
          "Multi-phase development coordination",
        ],
        linkTo: "/services/site-grading",
        linkText: "Learn about our precision grading services",
      },
    ],
  },
  parrish: {
    sections: [
      {
        heading: "Parrish: Florida's Newest Development Frontier",
        paragraphs: [
          "Parrish has transformed from a quiet agricultural community into one of Manatee County's most active development areas. Neighborhoods like North River Ranch, Harrison Ranch, and Gamble Creek are bringing thousands of new homes to the area — and every one of them needs professional site preparation.",
          "The Parrish area's mix of former agricultural land, wetland borders, and new subdivision infrastructure creates unique excavation requirements. Our crews have the experience to handle these conditions while maintaining the timeline demands of production builders.",
        ],
        bullets: [
          "19+ completed Parrish projects",
          "Agricultural land conversion expertise",
          "New community infrastructure grading",
          "Wetland buffer compliance",
          "Production builder scheduling support",
          "Large-lot clearing for custom homes",
        ],
        linkTo: "/services/land-clearing",
        linkText: "Learn about our land clearing for new developments",
      },
    ],
  },
  palmetto: {
    sections: [
      {
        heading: "Palmetto & Ellenton: Diverse Project Needs",
        paragraphs: [
          "Palmetto and surrounding communities like Ellenton and Terra Ceia offer a diverse mix of excavation projects. From older neighborhood drainage corrections to new commercial development along the US-41 and US-301 corridors, our crew handles the full range of site work this area demands.",
          "Our proximity to Palmetto from our Bradenton headquarters means fast response times and efficient mobilization. Whether it's a residential lot preparation or a commercial pad, we bring the same precision and professionalism to every Palmetto project.",
        ],
        linkTo: "/contact",
        linkText: "Get a free estimate for your Palmetto project",
      },
    ],
  },
  "st-petersburg": {
    sections: [
      {
        heading: "Serving Select Projects in St. Petersburg",
        paragraphs: [
          "While our primary service area is Sarasota-Bradenton, we selectively serve projects in St. Petersburg and southern Pinellas County. Our 8 completed projects in the area demonstrate our commitment to extending quality excavation services across Tampa Bay when the project scope and timing align.",
          "St. Petersburg's urban environment presents unique challenges including tight access, existing utility density, and coordination with city-specific permitting requirements. Our compact equipment fleet and experienced operators handle these urban site conditions efficiently.",
        ],
        linkTo: "/service-areas",
        linkText: "View all service areas",
      },
    ],
  },
  "north-port": {
    sections: [
      {
        heading: "North Port Excavation Services",
        paragraphs: [
          "North Port's rapid residential growth in areas like North Port Estates and near Warm Mineral Springs drives steady demand for professional excavation and site preparation. Our 11+ completed projects in North Port demonstrate our ability to serve this growing southern Sarasota County community effectively.",
          "North Port's unique geography, including its proximity to the Myakkahatchee Creek and extensive canal system, requires excavation contractors who understand water management and environmental compliance. Our crews bring this expertise to every North Port project.",
        ],
        linkTo: "/services/drainage",
        linkText: "Learn about drainage solutions for North Port properties",
      },
    ],
  },
};

function ServiceAreaSchema({ area, companyName, phoneTel }: { area: { city: string; slug: string; county: string; projects: number; description: string }; companyName: string; phoneTel: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://lethermongrade.com/#business",
        name: companyName,
        description: `Professional excavation and site preparation services in ${area.city}, Florida. Land clearing, grading, drainage, demolition, and utility trenching.`,
        telephone: `+1-${phoneTel.slice(0,3)}-${phoneTel.slice(3,6)}-${phoneTel.slice(6)}`,
        url: "https://lethermongrade.com",
        image: "https://lethermongrade.com/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1404 21st ST W.",
          addressLocality: "Palmetto",
          addressRegion: "FL",
          postalCode: "34201",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 27.4989,
          longitude: -82.5748,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "47",
          bestRating: "5",
        },
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: area.city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: area.county,
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${area.city} Excavation Services`,
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.label,
              description: s.desc,
              areaServed: {
                "@type": "City",
                name: area.city,
              },
            },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `https://lethermongrade.com/service-areas/${area.slug}`,
        name: `Excavation & Site Prep in ${area.city}, FL - Lethermon Grade Excavations`,
        description: `${area.projects}+ completed excavation projects in ${area.city}. Land clearing, grading, drainage, demolition, and trenching services serving ${area.description}.`,
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://lethermongrade.com/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://lethermongrade.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://lethermongrade.com/service-areas",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: area.city,
            item: `https://lethermongrade.com/service-areas/${area.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceAreaDetailPage() {
  const allServiceAreas = useServiceAreas();
  const reviews = useReviews();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const companyName = settings?.name || "Lethermon Grade Excavations";

  const { slug } = useParams();
  const area = allServiceAreas.find(a => a.slug === slug);
  const nearby = allServiceAreas.filter((a) => a.slug !== slug).slice(0, 4);
  const seoData = slug ? citySeoContent[slug] : undefined;

  usePageSEO({
    title: area ? `Excavation Services in ${area.city}, FL | Lethermon Grade` : "Service Area",
    description: area ? `Professional excavation, grading, land clearing, and drainage in ${area.city}, FL. ${area.projects}+ projects completed. Serving ${area.city} and surrounding areas. Call ${phone}.` : "",
    path: `/service-areas/${slug}`,
  });

  if (!area) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-3xl text-[#3D2B1F] mb-4">Service Area Not Found</h1>
        <Link to="/service-areas" className="text-[#C4956A] flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> View All Service Areas
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ServiceAreaSchema area={area} companyName={companyName} phoneTel={phoneTel} />

      {/* Hero */}
      <section className="relative min-h-[380px] noise-overlay vignette">
        <div className="absolute inset-0">
          <img src={IMG.florida} alt={area.city} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1008]/95 via-[#1a1008]/80 to-[#1a1008]/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link to="/service-areas" className="hover:text-white/80 transition-colors">Service Areas</Link>
            <span className="text-white/30">/</span>
            <span className="text-[#C4956A]">{area.city}</span>
          </nav>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-[#C4956A]" />
            <span className="text-[#C4956A] uppercase tracking-wider text-sm">{area.county}</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4" style={{ lineHeight: 1.1 }}>
            Excavation & Site Prep in <span className="text-[#C4956A]">{area.city}, FL</span>
          </h1>
          <p className="text-gray-300 text-lg mb-4 max-w-2xl">
            {area.projects}+ completed projects serving {area.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <StarRating rating={5} size={16} />
              <span className="text-white/70 text-sm">5.0 Rating</span>
            </div>
            <span className="text-white/30">|</span>
            <span className="text-white/70 text-sm">Zip Codes: {area.zips.join(", ")}</span>
          </div>
        </div>
      </section>

      {/* Intro + Map */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-[#3D2B1F] mb-6">{area.city} Excavation Services</h2>
              <div className="space-y-4 text-muted-foreground">
                {area.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <div className="mt-8">
                <h3 className="text-[#3D2B1F] mb-4">Recent {area.city} Projects Include:</h3>
                <div className="space-y-2">
                  {area.servicesHighlight.map((s) => (
                    <div key={s} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground text-sm">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${area.city} Service Area`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl text-[#3D2B1F] text-center mb-6">{area.city} Neighborhoods We Serve</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {area.neighborhoods.map((n) => (
              <span key={n} className="px-4 py-2 bg-card rounded-full text-[#5C4A1E] text-sm border border-border">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section 1 */}
      {seoData?.sections[0] && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className="text-3xl text-[#3D2B1F] mb-6">{seoData.sections[0].heading}</h2>
              <div className="space-y-4 text-muted-foreground">
                {seoData.sections[0].paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {seoData.sections[0].bullets && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {seoData.sections[0].bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-1" />
                      <span className="text-[#3D2B1F] text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              )}
              {seoData.sections[0].linkTo && (
                <Link to={seoData.sections[0].linkTo} className="inline-flex items-center gap-1 text-[#C4956A] mt-6 hover:gap-2 transition-all text-sm">
                  {seoData.sections[0].linkText || "Learn More"} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Services available */}
      <section className="py-16 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Services Available in {area.city}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex items-start gap-4 bg-card rounded-xl p-6 border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5C4A1E] transition-colors">
                    <Icon className="w-5 h-5 text-[#5C4A1E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-[#3D2B1F] text-sm">{s.label}</h3>
                    <p className="text-muted-foreground text-xs mt-1">{s.desc}</p>
                    <span className="text-[#C4956A] text-xs mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
                      {s.label} in {area.city} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section 2 */}
      {seoData?.sections[1] && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="text-3xl text-[#3D2B1F] mb-6">{seoData.sections[1].heading}</h2>
                <div className="space-y-4 text-muted-foreground">
                  {seoData.sections[1].paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                {seoData.sections[1].linkTo && (
                  <Link to={seoData.sections[1].linkTo} className="inline-flex items-center gap-1 text-[#C4956A] mt-6 hover:gap-2 transition-all text-sm">
                    {seoData.sections[1].linkText || "Learn More"} <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
              {seoData.sections[1].bullets && (
                <div className="lg:col-span-2">
                  <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-6">
                    <h3 className="text-[#3D2B1F] mb-4">At a Glance</h3>
                    <div className="space-y-3">
                      {seoData.sections[1].bullets.map((b) => (
                        <div key={b} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#C4956A] flex-shrink-0 mt-1" />
                          <span className="text-[#3D2B1F] text-sm">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Reviews */}
      <section className="py-16 bg-[#1a1008] noise-overlay-heavy grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <StarRating rating={5} size={20} />
            <h2 className="text-2xl text-white mt-3">Reviews from {area.city} Clients</h2>
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
          <div className="text-center mt-8">
            <Link to="/reviews" className="text-[#C4956A] text-sm hover:underline">Read all reviews →</Link>
          </div>
        </div>
      </section>

      {/* Videos from this area */}
      {videos.filter((v) => v.areaSlugs.includes(area.slug)).length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl text-[#3D2B1F] text-center mb-8">Videos from {area.city}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos
                .filter((v) => v.areaSlugs.includes(area.slug))
                .map((video) => (
                  <Link
                    key={video.slug}
                    to={`/videos/${video.slug}`}
                    className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-[#C4956A]/30 hover:shadow-lg transition-all"
                  >
                    <div className="relative aspect-video bg-[#2A1D12]">
                      <img
                        src={video.poster}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-[#C4956A] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-white ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="text-[#3D2B1F] font-medium text-sm group-hover:text-[#C4956A] transition-colors">
                        {video.title}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="text-center mt-6">
              <Link to="/videos" className="text-[#C4956A] text-sm font-medium hover:underline inline-flex items-center gap-1">
                View all videos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Nearby areas */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl text-[#3D2B1F] text-center mb-10">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {nearby.map((a) => (
              <Link key={a.slug} to={`/service-areas/${a.slug}`} className="group bg-card rounded-xl p-5 border border-border hover:border-[#C4956A]/30 hover:shadow-md transition-all text-center">
                <MapPin className="w-5 h-5 text-[#C4956A] mx-auto mb-2" />
                <h3 className="text-[#3D2B1F] text-sm">{a.city}</h3>
                <p className="text-xs text-muted-foreground">{a.projects} projects</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog cross-links */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl text-[#3D2B1F] text-center mb-6">Helpful Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/blog/how-to-prepare-your-lot-for-construction" className="bg-card rounded-lg p-4 border border-border text-sm text-[#3D2B1F] hover:border-[#C4956A]/30 transition-colors">
              How to Prepare Your Lot for Construction →
            </Link>
            <Link to="/blog/florida-drainage-problems-solutions" className="bg-card rounded-lg p-4 border border-border text-sm text-[#3D2B1F] hover:border-[#C4956A]/30 transition-colors">
              5 Common Florida Drainage Problems →
            </Link>
            <Link to="/blog/land-clearing-cost-florida" className="bg-card rounded-lg p-4 border border-border text-sm text-[#3D2B1F] hover:border-[#C4956A]/30 transition-colors">
              Land Clearing Costs in Florida →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Need Excavation in {area.city}?</h2>
          <p className="text-white/90 mb-8">Get a free estimate for your {area.city} project today.</p>
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
