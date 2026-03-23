"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Newspaper, Calendar, ArrowRight, Phone, Download } from "lucide-react";
import { IMG } from "./data";
import { usePressReleases, useCompanySettings } from "../providers/SanityProvider";

export function PressReleasesPage() {
  usePageSEO({
    title: "Press Releases & News | Lethermon Grade Excavations",
    description: "Latest news and press releases from Lethermon Grade Excavations, a leading excavation contractor in Bradenton and Sarasota, Florida.",
    path: "/press-releases",
  });
  const pressReleases = usePressReleases();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  return (
    <div>
      <section className="relative py-24 bg-[#3D2B1F]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Press Releases</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Company News</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Official press releases and company announcements from Lethermon Grade Excavations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {pressReleases.map((pr) => (
              <article key={pr.slug} className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 text-[#C4956A]" />
                  <time>{new Date(pr.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
                  <span className="text-xs bg-[#C4956A]/10 text-[#C4956A] px-2 py-0.5 rounded-full">Press Release</span>
                </div>
                <Link to={`/press-releases/${pr.slug}`}>
                  <h2 className="text-xl text-[#3D2B1F] mb-3 hover:text-[#C4956A] transition-colors">{pr.title}</h2>
                </Link>
                <p className="text-muted-foreground mb-4">{pr.excerpt}</p>
                <Link
                  to={`/press-releases/${pr.slug}`}
                  className="inline-flex items-center gap-1 text-[#C4956A] text-sm hover:gap-2 transition-all"
                >
                  Read Full Release <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/media-kit" className="text-[#C4956A] flex items-center justify-center gap-2 hover:gap-3 transition-all">
              <Download className="w-4 h-4" /> Download Media Kit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl text-[#3D2B1F] mb-3">Media Inquiries</h2>
          <p className="text-muted-foreground text-sm mb-4">
            For press inquiries, interviews, or media requests, contact us directly.
          </p>
          <a href={`tel:${phoneTel}`} className="inline-flex items-center gap-2 text-[#C4956A]">
            <Phone className="w-4 h-4" /> {phone}
          </a>
        </div>
      </section>
    </div>
  );
}
