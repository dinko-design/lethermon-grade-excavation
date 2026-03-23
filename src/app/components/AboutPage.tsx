"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Shield, Target, Heart, Users, Wrench, HardHat, ChevronRight, Award, Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import kameronSite from "@/assets/kameron-site.webp";
import kameronHardhat from "@/assets/kameron-hardhat.webp";
import kameronTruck from "@/assets/kameron-truck.webp";
import kameronCollage2 from "@/assets/kameron-collage.webp";
import { StarRating } from "./StarRating";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { IMG } from "./data";
import { useReviews, useServiceAreas, useCompanySettings } from "../providers/SanityProvider";
import imgExcavator from "@/assets/images/excavation-pool-coastal.webp";
import imgBulldozer from "@/assets/images/land-clearing-bradenton.webp";
import imgSkidSteer from "@/assets/images/excavation-skidsteer-aerial.webp";
import imgDumpTruck from "@/assets/images/equipment-commercial-grading.webp";
import imgEquipment from "@/assets/images/equipment-deere-fleet.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgRoller from "@/assets/images/equipment-roller-bulldozer.webp";

const values = [
  { icon: Shield, title: "Military Discipline", desc: "Our approach is built on precision and accountability learned through military service." },
  { icon: Heart, title: "Faith-Driven", desc: "We operate with integrity and treat every client and project with respect and honesty." },
  { icon: Target, title: "Precision Work", desc: "Laser-guided systems and experienced operators ensure every site meets exact specs." },
  { icon: Users, title: "Family Values", desc: "Family-oriented business that treats your project like our own." },
];

const equipment = [
  { name: "Excavators", desc: "Multiple sizes for foundation digging, trenching, and demolition.", img: imgExcavator },
  { name: "Bulldozers", desc: "Land clearing, rough grading, and large earthmoving operations.", img: imgBulldozer },
  { name: "Skid Steers", desc: "Versatile machines for tight spaces, grading, and material handling.", img: imgSkidSteer },
  { name: "Dump Trucks", desc: "Hauling dirt, rock, debris, and materials to and from jobsites.", img: imgDumpTruck },
];

export function AboutPage() {
  usePageSEO({
    title: "About Lethermon Grade Excavations | Bradenton FL",
    description: "Meet Kameron Lethermon and the crew behind Southwest Florida's trusted excavation company. Military-owned, fully insured, 200+ projects completed in Bradenton and Sarasota.",
    path: "/about",
  });
  const reviews = useReviews();
  const serviceAreas = useServiceAreas();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">About Us</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">The Foundation Before the Foundation</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Before a builder pours concrete or frames a house, someone has to shape the land.
            That's what we do - and we do it with military precision.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | 47+ Reviews | 200+ Projects</span>
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-6">Meet Kameron Lethermon</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  {companyName} is owned and led by Kameron Lethermon, an experienced
                  excavation contractor with both military and civilian construction backgrounds serving
                  the Sarasota-Bradenton region.
                </p>
                <p>
                  With a commitment to discipline, safety, precision, and reliability, Kameron built this
                  company on the principles learned through years of service and hands-on construction.
                  Every project is personally overseen to ensure the highest standards.
                </p>
                <p>
                  Kameron oversees every project personally — from the initial site walk and estimate through
                  final grade check. He's built a skilled team that handles the heavy equipment while he focuses
                  on quality control, client communication, and growing the business. When you hire us, you're
                  hiring the owner's standards and a crew trained to deliver them.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">Military Background</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">15+ Years Experience</p>
                </div>
                <div className="bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-lg px-4 py-3">
                  <p className="text-[#5C4A1E] text-sm">Fully Insured</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback src={kameronSite} alt="Kameron Lethermon - Owner of Lethermon Grade Excavations" className="w-full h-72 object-cover object-top" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <ImageWithFallback src={kameronCollage2} alt="Kameron Lethermon operating excavator, reviewing plans with contractor, shaking hands with client, and portrait on jobsite" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary noise-overlay grit-top grit-bottom">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">What Drives Our Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-card rounded-xl p-8 text-center shadow-sm border border-border">
                <div className="w-16 h-16 rounded-full bg-[#5C4A1E]/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-8 h-8 text-[#5C4A1E]" />
                </div>
                <h3 className="text-[#3D2B1F] mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crew */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl text-[#3D2B1F] mb-4">Built to Deliver</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Think of excavation crews like surgeons with heavy equipment. The machine is powerful,
              but the operator skill determines the outcome.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: kameronHardhat, title: "Kameron Lethermon", role: "Owner / Founder", desc: "Military background. On-site daily directing crews, coordinating with builders, and ensuring every project meets spec." },
              { img: imgEquipment, title: "Equipment Operators", role: "Skilled Machine Operators", desc: "Running excavators, bulldozers, skid steers, and graders with precision daily." },
              { img: imgRoller, title: "Hauling Crew", role: "Transport & Logistics", desc: "Moving earth, rock, and debris efficiently across Sarasota-Bradenton." },
              { img: imgTrenching, title: "Site Laborers", role: "Grade Stakes & Drainage", desc: "Setting elevations, installing pipe, and keeping every jobsite organized." },
            ].map((m) => (
              <div key={m.title} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border">
                <div className="h-52 overflow-hidden">
                  <ImageWithFallback src={m.img} alt={m.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-[#3D2B1F]">{m.title}</h3>
                  <p className="text-[#C4956A] text-sm mb-2">{m.role}</p>
                  <p className="text-muted-foreground text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 text-[#C4956A] hover:text-[#b07f55] transition-colors font-medium"
            >
              Meet the Full Team
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-[#3D2B1F] noise-overlay grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Equipment</p>
            <h2 className="text-3xl md:text-4xl text-white mb-4">Modern Fleet, Expert Operators</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              In excavation, machines are almost like additional employees. We invest in modern equipment
              with laser-guided systems for precision results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((e) => (
              <div key={e.name} className="bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10">
                <div className="h-44 overflow-hidden">
                  <ImageWithFallback src={e.img} alt={e.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-white">{e.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branded Truck */}
      <section className="relative overflow-hidden">
        <div className="relative h-64 md:h-80">
          <ImageWithFallback
            src={kameronTruck}
            alt="Lethermon Grade Excavations branded Ford Super Duty work truck on a Florida jobsite with Volvo excavator"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3D2B1F]/70 via-transparent to-[#3D2B1F]/30" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-[#C4956A] uppercase tracking-wider text-xs mb-1">Our Name. Our Reputation. On Every Jobsite.</p>
            <p className="text-white/80 text-sm">Sarasota, FL &bull; {phone}</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Client Reviews</p>
            <h2 className="text-3xl text-[#3D2B1F] mb-2">What People Say About Us</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <StarRating rating={5} size={20} />
              <span className="text-muted-foreground">5.0 Average from 47+ Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.slice(0, 4).map((r) => (
              <div key={r.name} className="bg-card rounded-xl p-6 shadow-sm border border-border">
                <StarRating rating={r.stars} size={14} />
                <p className="text-muted-foreground text-sm mt-3 mb-4 italic">"{r.text}"</p>
                <div className="border-t border-border pt-3">
                  <p className="text-[#3D2B1F] text-sm">{r.name}</p>
                  <p className="text-[#C4956A] text-xs">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Work With a Team That Shows Up</h2>
          <p className="text-white/90 mb-8">Builders trust us because we deliver on our promises.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
          >
            Request Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
}