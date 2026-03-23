"use client";
import { Link } from "@/compat/Link";
import { useParams } from "next/navigation";
import { Calendar, ArrowLeft, ArrowRight, Phone, Newspaper } from "lucide-react";
import { usePressReleases, useCompanySettings } from "../providers/SanityProvider";
import { usePageSEO } from "../hooks/usePageSEO";

function PressReleaseSchema({ pr }: { pr: { title: string; date: string; slug: string; excerpt: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: pr.title,
        description: pr.excerpt,
        datePublished: pr.date,
        dateModified: pr.date,
        author: {
          "@type": "Organization",
          name: "Lethermon Grade Excavations",
          url: "https://www.lethermongradeexcavations.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1404 21st ST W",
            addressLocality: "Palmetto",
            addressRegion: "FL",
            postalCode: "34221",
            addressCountry: "US",
          },
        },
        publisher: {
          "@type": "Organization",
          name: "Lethermon Grade Excavations",
          url: "https://www.lethermongradeexcavations.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.lethermongradeexcavations.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.lethermongradeexcavations.com/press-releases/${pr.slug}`,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.lethermongradeexcavations.com" },
          { "@type": "ListItem", position: 2, name: "Press Releases", item: "https://www.lethermongradeexcavations.com/press-releases" },
          { "@type": "ListItem", position: 3, name: pr.title, item: `https://www.lethermongradeexcavations.com/press-releases/${pr.slug}` },
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

export function PressReleaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const allPr = usePressReleases();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  const idx = allPr.findIndex((p) => p.slug === slug);
  const pr = allPr[idx];

  usePageSEO({
    title: pr ? `${pr.title}` : "Press Release",
    description: pr?.excerpt || "Press release from Lethermon Grade Excavations.",
    path: `/press-releases/${slug}`,
  });

  if (!pr) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-[#3D2B1F] mb-4">Press Release Not Found</h1>
          <Link to="/press-releases" className="text-[#C4956A] hover:underline">
            Back to all press releases
          </Link>
        </div>
      </div>
    );
  }

  const prev = idx > 0 ? allPr[idx - 1] : null;
  const next = idx < allPr.length - 1 ? allPr[idx + 1] : null;
  const dateStr = new Date(pr.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  // content can be a string (legacy) or string[] (new format)
  const paragraphs = Array.isArray(pr.content) ? pr.content : pr.content ? [pr.content] : [pr.excerpt];

  return (
    <div>
      <PressReleaseSchema pr={pr} />

      {/* Hero */}
      <section className="relative py-20 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Link
            to="/press-releases"
            className="inline-flex items-center gap-2 text-[#C4956A] text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            All Press Releases
          </Link>
          <div className="flex items-center gap-3 mb-4 text-sm text-white/60">
            <Newspaper className="w-4 h-4 text-[#C4956A]" />
            <span>Press Release</span>
            <span className="text-white/30">|</span>
            <Calendar className="w-4 h-4" />
            <time>{dateStr}</time>
          </div>
          <h1 className="text-white text-3xl md:text-4xl leading-tight">{pr.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-6 text-base">
                {p}
              </p>
            ))}
          </article>

          {/* Media Contact */}
          <div className="border-t border-border pt-8 mt-12">
            <h3 className="text-[#3D2B1F] text-sm font-medium mb-2">Media Contact</h3>
            <p className="text-muted-foreground text-sm">
              Kameron Lethermon, Owner
            </p>
            <p className="text-muted-foreground text-sm">
              Lethermon Grade Excavations
            </p>
            <p className="text-muted-foreground text-sm">
              1404 21st ST W, Palmetto, FL 34221
            </p>
            <a href={`tel:${phoneTel}`} className="text-[#C4956A] text-sm inline-flex items-center gap-1 mt-1">
              <Phone className="w-3.5 h-3.5" /> {phone}
            </a>
          </div>

          {/* Prev / Next */}
          <div className="border-t border-border pt-8 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/press-releases/${prev.slug}`}
                className="flex items-start gap-3 group text-left"
              >
                <ArrowLeft className="w-4 h-4 text-[#C4956A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Previous</p>
                  <p className="text-sm text-[#3D2B1F] group-hover:text-[#C4956A] transition-colors">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                to={`/press-releases/${next.slug}`}
                className="flex items-start gap-3 group text-right sm:justify-end"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Next</p>
                  <p className="text-sm text-[#3D2B1F] group-hover:text-[#C4956A] transition-colors">{next.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C4956A] mt-1 flex-shrink-0" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
}
