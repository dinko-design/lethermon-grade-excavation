"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import {
  Shield, HardHat, Target, Users, Wrench, Truck, ChevronRight,
  User, MapPin, Award, Clock, Shirt, Cog, ShieldCheck,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { StarRating } from "./StarRating";
import { useCompanySettings } from "../providers/SanityProvider";
import kameronSite from "@/assets/kameron-site.webp";
import imgSkidSteer from "@/assets/images/excavation-skidsteer-aerial.webp";
import imgGradedLot from "@/assets/images/grading-bradenton-lot.webp";
import imgDumpTruck from "@/assets/images/equipment-commercial-grading.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgEquipment from "@/assets/images/site-development-aerial.webp";

interface PlaceholderMember {
  role: string;
  desc: string;
}

interface Department {
  name: string;
  icon: typeof HardHat;
  desc: string;
  img: string;
  members: PlaceholderMember[];
}

const departments: Department[] = [
  {
    name: "Equipment Operations",
    icon: Cog,
    desc: "Our heavy equipment operators run excavators, bulldozers, and skid steers with precision on every jobsite. Each operator is trained to grade to spec and pass inspection the first time.",
    img: imgSkidSteer,
    members: [
      { role: "Lead Excavator Operator", desc: "Foundation digging, pool excavation, and trenching operations." },
      { role: "Bulldozer / Skid Steer Operator", desc: "Land clearing, rough grading, and material handling." },
    ],
  },
  {
    name: "Grading & Finishing",
    icon: Target,
    desc: "Finish grading is where precision matters most. Our grading crew uses laser-guided systems to hit exact elevations for foundations, drainage slopes, and parking pads.",
    img: imgGradedLot,
    members: [
      { role: "Finish Grade Operator", desc: "Laser-guided precision grading for foundations and pads." },
      { role: "Compaction Specialist", desc: "Soil compaction and testing for build-ready sites." },
    ],
  },
  {
    name: "Transport & Hauling",
    icon: Truck,
    desc: "Moving earth, rock, fill dirt, and debris efficiently across Southwest Florida. Our hauling crew keeps jobsites flowing and on schedule.",
    img: imgDumpTruck,
    members: [
      { role: "Dump Truck Driver", desc: "Material delivery, dirt hauling, and debris removal." },
    ],
  },
  {
    name: "Site Labor & Drainage",
    icon: Wrench,
    desc: "From setting grade stakes to installing drainage pipe, our site crew handles the ground-level work that keeps every project on track.",
    img: imgTrenching,
    members: [
      { role: "Pipe & Drainage Installer", desc: "Underground drainage systems, culverts, and stormwater management." },
      { role: "Site Laborer", desc: "Grade stakes, site cleanup, and project support." },
    ],
  },
];

const culture = [
  {
    icon: Shirt,
    title: "Professional Appearance",
    desc: "Branded uniforms on every crew member. You'll always know who's on your jobsite.",
  },
  {
    icon: Cog,
    title: "Modern Equipment",
    desc: "Well-maintained fleet with laser-guided grading systems for precision results.",
  },
  {
    icon: Shield,
    title: "Military Discipline",
    desc: "Precision, accountability, and on-time performance on every project.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Fully insured, proper PPE, clean jobsites, and safety protocols on every site.",
  },
];

export function TeamPage() {
  usePageSEO({
    title: "Our Team | Lethermon Grade Excavations",
    description: "Meet the professional excavation crew behind Lethermon Grade Excavations. Skilled operators, dedicated crew, and owner-led quality on every project in Bradenton and Sarasota FL.",
    path: "/team",
  });
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Team</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">The Team Behind Every Project</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Every project we deliver is backed by a professional crew trained in military discipline,
            operating modern equipment, and held to the highest standards by an owner who's on-site daily.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | 47+ Reviews | 200+ Projects</span>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={kameronSite}
                alt="Kameron Lethermon — Owner of Lethermon Grade Excavations on jobsite in Bradenton FL"
                className="w-full h-80 md:h-[420px] object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Leadership</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-2">Kameron Lethermon</h2>
              <p className="text-[#C4956A] mb-6">Owner & Founder</p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With a military background and over 15 years in construction, Kameron built Lethermon Grade
                  Excavations on the principles of discipline, precision, and reliability. Today he leads a
                  growing company focused on delivering premium excavation work across Southwest Florida.
                </p>
                <p>
                  Kameron is on-site daily — directing crews, coordinating with builders, reviewing grade work,
                  and making sure every project meets spec before it leaves our hands. He's not behind a desk;
                  he's on your jobsite making sure it's done right.
                </p>
                <p>
                  His focus now is on growing the business, building relationships with top builders and
                  developers, and expanding the team to take on larger commercial projects. The goal is simple:
                  become the most trusted excavation contractor in the Sarasota-Bradenton market.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: Shield, label: "Military Discipline" },
                  { icon: MapPin, label: "On-Site Daily" },
                  { icon: Users, label: "Client-Focused" },
                  { icon: Award, label: "Growth-Oriented" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-2.5 bg-secondary rounded-lg px-3.5 py-2.5">
                    <t.icon className="w-4 h-4 text-[#C4956A] flex-shrink-0" />
                    <span className="text-[#3D2B1F] text-sm">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Departments */}
      <section className="py-20 bg-secondary noise-overlay grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Operations</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Specialized Crews, One Standard</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each department handles a critical phase of the excavation process. Together, they deliver
              complete site preparation from clearing through final grade.
            </p>
          </div>

          <div className="space-y-12">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div key={dept.name} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border relative">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    {/* Department photo */}
                    <div className="lg:col-span-2 h-56 lg:h-auto lg:relative overflow-hidden">
                      <ImageWithFallback
                        src={dept.img}
                        alt={dept.name}
                        className="w-full h-full lg:absolute lg:inset-0 object-cover"
                      />
                    </div>

                    {/* Department info + members */}
                    <div className="lg:col-span-3 p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#5C4A1E]" />
                        </div>
                        <h3 className="text-xl text-[#3D2B1F]">{dept.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{dept.desc}</p>

                      {/* Team members */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {dept.members.map((member) => (
                          <div
                            key={member.role}
                            className="flex items-start gap-3 bg-secondary/50 rounded-lg p-4"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-[#5C4A1E]/50" />
                            </div>
                            <div>
                              <p className="text-[#3D2B1F] text-sm font-medium">{member.role}</p>
                              <p className="text-muted-foreground text-xs mt-0.5">{member.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fleet Snapshot */}
      <section className="relative overflow-hidden">
        <div className="relative h-56 md:h-72">
          <ImageWithFallback
            src={imgEquipment}
            alt="Lethermon Grade Excavations equipment fleet — John Deere excavators and bulldozers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3D2B1F]/95 via-[#3D2B1F]/75 to-[#3D2B1F]/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-md">
                <p className="text-[#C4956A] uppercase tracking-wider text-xs mb-1">Our Fleet</p>
                <h2 className="text-white text-2xl md:text-3xl mb-2">Modern Equipment, Skilled Hands</h2>
                <p className="text-gray-300 text-sm">
                  Excavators, bulldozers, skid steers, dump trucks, and laser-guided grading systems — maintained
                  and ready to mobilize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Built on Standards, Not Shortcuts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((c) => (
              <div key={c.title} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-16 h-16 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-8 h-8 text-[#5C4A1E]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-3">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay grit-top">
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <HardHat className="w-8 h-8 text-[#C4956A]" />
          </div>
          <h2 className="text-3xl text-white mb-4">Join Our Growing Team</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            We're always looking for skilled equipment operators and crew members who take pride in their work.
            If you want to be part of a team that's building something bigger, we'd like to hear from you.
          </p>
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-colors"
          >
            View Open Positions
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Ready to Work With Our Team?</h2>
          <p className="text-white/90 mb-8">
            Get a free, no-obligation estimate for your excavation project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
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
