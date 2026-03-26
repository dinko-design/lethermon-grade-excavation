import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Inter } from "next/font/google";
import "@/styles/index.css";
import { SanityProvider } from "@/app/providers/SanityProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lethermongradeexcavations.com"),
  title: {
    default: "Lethermon Grade Excavations | Excavation Contractor in Bradenton & Sarasota FL",
    template: "%s | Lethermon Grade Excavations",
  },
  description:
    "Professional excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching in Bradenton, Sarasota, and Southwest Florida. 1,000+ projects completed. Call (941) 290-7208.",
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
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to Sanity CDN */}
        <link rel="preconnect" href="https://54e85gr0.apicdn.sanity.io" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GH3QSM8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SanityProvider>{children}</SanityProvider>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5GH3QSM8');`}
        </Script>
        {/* End Google Tag Manager */}
      </body>
    </html>
  );
}
