"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Download, Image, FileText, Phone, Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/lethermon-grade-excavations-logo.png";
import logoReversed from "@/assets/lethermon-grade-excavations-logo-white.png";
import { IMG } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCompanySettings } from "../providers/SanityProvider";

export function MediaKitPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  usePageSEO({
    title: "Media Kit | Lethermon Grade Excavations",
    description: "Download logos, brand assets, and company information for Lethermon Grade Excavations. Media inquiries welcome.",
    path: "/media-kit",
    noIndex: true,
  });
  return (
    <div>
      <section className="relative py-24 bg-[#3D2B1F]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Media Kit</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Press & Media Resources</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Logos, brand assets, company information, and approved imagery for media use.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          {/* Company overview */}
          <div className="bg-card rounded-xl border border-border p-8 mb-10">
            <h2 className="text-xl text-[#3D2B1F] mb-4">Company Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div className="space-y-3">
                <p><strong className="text-[#3D2B1F]">Company Name:</strong> {companyName}</p>
                <p><strong className="text-[#3D2B1F]">Owner:</strong> Kameron Lethermon</p>
                <p><strong className="text-[#3D2B1F]">Founded:</strong> Bradenton, Florida</p>
                <p><strong className="text-[#3D2B1F]">Industry:</strong> Excavation & Site Preparation</p>
              </div>
              <div className="space-y-3">
                <p><strong className="text-[#3D2B1F]">Service Area:</strong> Sarasota, Manatee, Pinellas & Charlotte Counties</p>
                <p><strong className="text-[#3D2B1F]">Projects Completed:</strong> 200+</p>
                <p><strong className="text-[#3D2B1F]">Rating:</strong> 5.0 Stars (47+ Reviews)</p>
                <p><strong className="text-[#3D2B1F]">Accreditation:</strong> BBB A+ Rated</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-[#3D2B1F] text-sm mb-2">Approved Boilerplate</h3>
              <p className="text-muted-foreground text-sm italic">
                "Lethermon Grade Excavations is a full-service excavation and site preparation contractor serving Southwest Florida. Founded by military veteran Kameron Lethermon, the company provides land clearing, excavation, precision grading, drainage solutions, demolition, and utility trenching for residential and commercial projects across Sarasota, Manatee, and surrounding counties."
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="bg-card rounded-xl border border-border p-8 mb-10">
            <h2 className="text-xl text-[#3D2B1F] mb-4">Logo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-8 border border-border flex items-center justify-center">
                <img src={logo} alt="Lethermon Logo - Light Background" className="h-20 w-auto" />
              </div>
              <div className="bg-[#2A1D12] rounded-lg p-8 flex items-center justify-center">
                <img src={logoReversed} alt="Lethermon Logo - Reversed (Dark Background)" className="h-20 w-auto" />
              </div>
            </div>
            <p className="text-muted-foreground text-xs mt-4">
              Please do not alter, recolor, or distort the logo. Maintain clear space around the logo equal to the height of the "L" in Lethermon.
            </p>
          </div>

          {/* Brand colors */}
          <div className="bg-card rounded-xl border border-border p-8 mb-10">
            <h2 className="text-xl text-[#3D2B1F] mb-4">Brand Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: "Primary Brown", hex: "#3D2B1F" },
                { name: "Dark Brown", hex: "#2A1D12" },
                { name: "Warm Brown", hex: "#5C4A1E" },
                { name: "Tan Accent", hex: "#C4956A" },
                { name: "Steel Blue", hex: "#7E95A8" },
                { name: "Light Tan", hex: "#F5F0EB" },
              ].map((c) => (
                <div key={c.hex}>
                  <div className="h-16 rounded-lg mb-2" style={{ backgroundColor: c.hex }} />
                  <p className="text-[#3D2B1F] text-xs">{c.name}</p>
                  <p className="text-muted-foreground text-xs">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Approved photos */}
          <div className="bg-card rounded-xl border border-border p-8 mb-10">
            <h2 className="text-xl text-[#3D2B1F] mb-4">Approved Photography</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[IMG.excavatorDig, IMG.crewTeam, IMG.gradedLot, IMG.heavyEquip].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden h-36">
                  <ImageWithFallback src={img} alt={`Approved photo ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-4">
              Additional high-resolution images available upon request. Credit: Lethermon Grade Excavations.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-8">
            <h2 className="text-xl text-[#3D2B1F] mb-4">Media Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-[#3D2B1F]">Kameron Lethermon</strong>, Owner</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#C4956A]" /> {phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#C4956A]" /> {settings?.email || "info@lethermongradeexcavations.com"}</p>
                <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#C4956A]" /> {settings?.address ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}` : "1404 21st ST W., Palmetto, FL 34221"}</p>
              </div>
              <div className="space-y-2">
                <Link to="/press-releases" className="flex items-center gap-2 text-[#C4956A] text-sm hover:underline"><FileText className="w-3.5 h-3.5" /> View Press Releases</Link>
                <Link to="/about" className="flex items-center gap-2 text-[#C4956A] text-sm hover:underline"><Globe className="w-3.5 h-3.5" /> About the Company</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
