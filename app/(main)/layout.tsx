"use client";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { useCompanySettings, useServiceAreas } from "@/app/providers/SanityProvider";
import { useMemo } from "react";

function useOrganizationSchema() {
  const settings = useCompanySettings();
  const areas = useServiceAreas();

  return useMemo(() => {
    const s = settings;
    const baseUrl = s?.website || "https://lethermongrade.com";

    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}/#business`,
      name: s?.name || "Lethermon Grade Excavations",
      alternateName: "Lethermon Grade",
      description: s?.description ||
        "Professional excavation, land clearing, site grading, drainage, demolition, and utility trenching services serving Southwest Florida including Sarasota, Bradenton, Venice, and Lakewood Ranch. Military-owned, fully insured, 200+ projects completed.",
      telephone: `+1-${s?.phone?.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") || "941-290-7208"}`,
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      image: `${baseUrl}/og-image.jpg`,
      founder: {
        "@type": "Person",
        name: s?.ownerName || "Kameron Lethermon",
        jobTitle: "Owner",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: s?.address?.city || "Palmetto",
        addressRegion: s?.address?.state || "FL",
        postalCode: s?.address?.zip || "34221",
        addressCountry: s?.address?.country || "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: s?.geo?.lat || 27.4989,
        longitude: s?.geo?.lng || -82.5748,
      },
      areaServed: [
        ...(areas.length > 0
          ? areas.map((a) => ({ "@type": "City", name: a.city, containedInPlace: { "@type": "State", name: "Florida" } }))
          : [
              { "@type": "City", name: "Bradenton", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "Sarasota", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "Venice", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "Lakewood Ranch", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "Palmetto", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "North Port", containedInPlace: { "@type": "State", name: "Florida" } },
              { "@type": "City", name: "Parrish", containedInPlace: { "@type": "State", name: "Florida" } },
            ]),
        {
          "@type": "GeoCircle",
          geoMidpoint: { "@type": "GeoCoordinates", latitude: s?.geo?.lat || 27.4989, longitude: s?.geo?.lng || -82.5748 },
          geoRadius: "50000",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: s?.aggregateRating?.ratingValue || "5.0",
        reviewCount: s?.aggregateRating?.reviewCount || "47",
        bestRating: s?.aggregateRating?.bestRating || "5",
        worstRating: "1",
      },
      priceRange: s?.priceRange || "$$",
      paymentAccepted: "Cash, Check, Credit Card",
      currenciesAccepted: "USD",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        s?.socialLinks?.google || "https://www.google.com/maps/place/Lethermon+Grade+Excavations",
        s?.socialLinks?.facebook || "https://www.facebook.com/lethermongrade",
        ...(s?.socialLinks?.instagram ? [s.socialLinks.instagram] : []),
        ...(s?.socialLinks?.youtube ? [s.socialLinks.youtube] : []),
      ].filter(Boolean),
      knowsAbout: [
        "Excavation", "Land Clearing", "Site Grading", "Drainage Solutions",
        "Demolition", "Utility Trenching", "Foundation Digging", "Pool Excavation",
        "Stormwater Management", "Lot Preparation",
      ],
    };
  }, [settings, areas]);
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = useOrganizationSchema();

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
