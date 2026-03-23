import type { Metadata } from "next";
import "@/styles/index.css";
import { SanityProvider } from "@/app/providers/SanityProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lethermongradeexcavations.com"),
  title: {
    default: "Lethermon Grade Excavations | Excavation Contractor in Bradenton & Sarasota FL",
    template: "%s | Lethermon Grade Excavations",
  },
  description:
    "Professional excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching in Bradenton, Sarasota, and Southwest Florida. 200+ projects completed. Call (941) 290-7208.",
  robots: "index, follow",
  openGraph: {
    siteName: "Lethermon Grade Excavations",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Bradenton, Florida",
    "geo.position": "27.4989;-82.5748",
    ICBM: "27.4989, -82.5748",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://54e85gr0.apicdn.sanity.io" crossOrigin="anonymous" />

        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <SanityProvider>{children}</SanityProvider>
      </body>
    </html>
  );
}
