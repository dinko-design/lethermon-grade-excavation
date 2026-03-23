"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Heart, BookOpen, Users, HandHeart, ChevronRight, Church, Star } from "lucide-react";
import { StarRating } from "./StarRating";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCompanySettings } from "../providers/SanityProvider";
import kameronSite from "@/assets/kameron-site.webp";
import kameronTruck from "@/assets/kameron-truck.webp";

const communityImpact = [
  {
    title: "Church & Ministry Projects",
    desc: "We've donated excavation and grading services to local churches and ministries — preparing sites for new builds, parking lots, and facility expansions at reduced or no cost.",
    icon: Church,
  },
  {
    title: "$40K+ Community Giving",
    desc: "In the last year alone, we contributed over $40,000 in services and direct giving to faith-based organizations and community causes across Southwest Florida.",
    icon: HandHeart,
  },
  {
    title: "Serving Those Who Serve",
    desc: "From disaster cleanup to volunteer site work, we show up for our neighbors when they need it most — because that's what you do when faith leads the way.",
    icon: Users,
  },
];

const principles = [
  {
    title: "Integrity in Every Estimate",
    desc: "We give you an honest price for honest work. No inflated quotes, no hidden fees, no surprises. If something changes, we tell you before we bill you.",
  },
  {
    title: "Treat People Right",
    desc: "Every client, subcontractor, and crew member is treated with respect. We answer our phone, we show up when we say we will, and we keep our word.",
  },
  {
    title: "Work as Unto the Lord",
    desc: "The quality of our work reflects who we are. Whether it's a $5,000 residential lot or a $200,000 commercial site, every project gets our full effort and attention.",
  },
  {
    title: "Stewardship of Resources",
    desc: "We take care of our equipment, our people, and our clients' property. We don't cut corners because shortcuts cost everyone more in the long run.",
  },
];

export function FaithPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  usePageSEO({
    title: "Faith-Based Business | Our Foundation",
    description:
      "Lethermon Grade Excavations is a faith-based excavation contractor in Bradenton and Sarasota FL. Built on biblical principles of integrity, service, and community. $40K+ in community giving.",
    path: "/faith",
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Foundation</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Built on Faith</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Before Lethermon Grade Excavations was a business, it was a calling.
            Everything we do — how we treat people, how we price our work, how we
            show up every day — is rooted in faith.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">Faith-Based | Military-Owned | 1,000+ Projects</span>
          </div>
        </div>
      </section>

      {/* Kameron's Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">From the Owner</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-6">Kameron's Testimony</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I didn't start this company because I wanted to get rich. I started it because
                  I believe God gave me a set of skills — discipline from the military, experience
                  in construction, and a desire to serve people — and asked me to use them.
                </p>
                <p>
                  When I look at a raw piece of land, I don't just see dirt and trees. I see
                  someone's future home, a church that needs a parking lot, a family building
                  something for the next generation. That perspective changes how you approach
                  the work.
                </p>
                <p>
                  Faith isn't something I leave at home when I go to the jobsite. It's in how
                  I price my estimates — fairly and honestly. It's in how I treat my crew — like
                  family. It's in how I handle problems — with accountability, not excuses.
                  And it's in how we give back — because everything we have comes from above.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">Faith-Based Business</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">$40K+ Community Giving</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">Integrity-First Pricing</p>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={kameronSite}
                  alt="Kameron Lethermon — Owner, Lethermon Grade Excavations"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scripture / Foundation */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <BookOpen className="w-10 h-10 text-[#C4956A] mx-auto mb-6" />
          <blockquote className="text-white text-2xl md:text-3xl italic leading-relaxed mb-6" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
            "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters."
          </blockquote>
          <p className="text-[#C4956A] text-lg">Colossians 3:23</p>
          <p className="text-white/60 text-sm mt-4 max-w-xl mx-auto">
            This verse is the foundation of how we run our business. Every grade check,
            every estimate, every handshake — we work as if the Lord is watching, because He is.
          </p>
        </div>
      </section>

      {/* Business Principles */}
      <section className="py-20 bg-secondary noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">How Faith Shapes Our Work</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Principles We Live By</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't just words on a wall. They're how we operate every single day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((p) => (
              <div key={p.title} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <Heart className="w-6 h-6 text-[#C4956A] mb-4" />
                <h3 className="text-[#3D2B1F] mb-3 text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Giving Back</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Faith in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe a business should serve its community, not just profit from it.
              Here's how we put that belief to work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityImpact.map((item) => (
              <div key={item.title} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-16 h-16 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-[#5C4A1E]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-4xl text-[#C4956A] font-bold" style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}>
              $40,000+
            </p>
            <p className="text-muted-foreground mt-2">
              in community giving and donated services in the past year
            </p>
          </div>
        </div>
      </section>

      {/* Branded Truck / Visual Break */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <ImageWithFallback
            src={kameronTruck}
            alt="Lethermon Grade Excavations branded truck on a Florida jobsite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-[#3D2B1F]/30" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-[#C4956A] uppercase tracking-wider text-xs mb-1">Faith-Based. Military-Owned. Community-Focused.</p>
            <p className="text-white/80 text-sm">Bradenton &bull; Sarasota &bull; Southwest Florida</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Work With a Company That Stands for Something</h2>
          <p className="text-white/90 mb-8">
            When you hire us, you're not just hiring an excavation crew.
            You're hiring a team that operates with integrity, serves with purpose,
            and treats your project like it matters — because it does.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
              <ChevronRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
