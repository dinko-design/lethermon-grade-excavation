"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { useServiceAreas, useBlogPosts } from "../providers/SanityProvider";

export function SitemapPage() {
  const serviceAreas = useServiceAreas();
  const blogPosts = useBlogPosts();

  const sections = [
    {
      title: "Main Pages",
      links: [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/team", label: "Our Team" },
        { to: "/contact", label: "Contact / Free Estimate" },
        { to: "/reviews", label: "Client Reviews" },
        { to: "/projects", label: "Projects Portfolio" },
        { to: "/gallery", label: "Photo & Video Gallery" },
        { to: "/trust", label: "Trust & Recognition" },
        { to: "/location", label: "Office Location" },
      ],
    },
    {
      title: "Services",
      links: [
        { to: "/services/land-clearing", label: "Land Clearing" },
        { to: "/services/excavation", label: "Excavation" },
        { to: "/services/site-grading", label: "Site Grading" },
        { to: "/services/site-development", label: "Site Development" },
        { to: "/services/foundation-prep", label: "Foundation Preparation" },
        { to: "/services/drainage", label: "Drainage Solutions" },
        { to: "/services/stormwater-drainage", label: "Stormwater Drainage Systems" },
        { to: "/services/demolition", label: "Demolition" },
        { to: "/services/concrete-removal", label: "Concrete Removal" },
        { to: "/services/trenching", label: "Utility Trenching" },
      ],
    },
    {
      title: "Service Areas",
      links: [
        { to: "/service-areas", label: "All Service Areas" },
        ...serviceAreas.map((a) => ({ to: `/service-areas/${a.slug}`, label: `${a.city}, FL` })),
      ],
    },
    {
      title: "Blog & Resources",
      links: [
        { to: "/blog", label: "Blog Home" },
        ...blogPosts.map((p) => ({ to: `/blog/${p.slug}`, label: p.title })),
      ],
    },
    {
      title: "Company",
      links: [
        { to: "/faith", label: "Faith-Based Business" },
        { to: "/military", label: "Military-Owned & Veteran Discount" },
        { to: "/careers", label: "Careers" },
        { to: "/press-releases", label: "Press Releases" },
        { to: "/media-kit", label: "Media Kit" },
      ],
    },
    {
      title: "Offers & Landing Pages",
      links: [
        { to: "/offer/land-clearing", label: "Land Clearing Offer" },
        { to: "/offer/excavation", label: "Excavation Offer" },
        { to: "/offer/site-grading", label: "Site Grading Offer" },
        { to: "/offer/drainage", label: "Drainage Offer" },
        { to: "/offer/demolition", label: "Demolition Offer" },
      ],
    },
    {
      title: "Legal",
      links: [
        { to: "/terms", label: "Terms & Conditions" },
        { to: "/privacy-policy", label: "Privacy Policy" },
      ],
    },
  ];

  usePageSEO({
    title: "Sitemap | Lethermon Grade Excavations",
    description: "Complete sitemap of Lethermon Grade Excavations website pages.",
    path: "/sitemap",
    noIndex: true,
  });
  return (
    <div>
      <section className="py-16 bg-[#3D2B1F]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-4xl mb-2">Sitemap</h1>
          <p className="text-gray-400">Complete directory of all pages on our website.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-[#3D2B1F] mb-4 pb-2 border-b border-border">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-muted-foreground text-sm hover:text-[#C4956A] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
