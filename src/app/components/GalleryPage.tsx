import { useState } from "react";
import { usePageSEO } from "../hooks/usePageSEO";
import { Link } from "react-router";
import { Phone, Camera } from "lucide-react";
import kameronTruck from "@/assets/kameron-truck.webp";
import kameronCollage2 from "@/assets/kameron-collage.webp";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { IMG, videos } from "./data";
import { useCompanySettings } from "../providers/SanityProvider";
import imgOverhead from "@/assets/images/grading-overhead-commercial.webp";
import imgClearing from "@/assets/images/land-clearing-stump-removal.webp";
import imgPool from "@/assets/images/excavation-pool-coastal.webp";
import imgClearingBradenton from "@/assets/images/land-clearing-bradenton.webp";
import imgGradingCommercial from "@/assets/images/grading-commercial-parking.webp";
import imgDemolition from "@/assets/images/demolition-mobile-home-hero.webp";
import imgDrainagePipe from "@/assets/images/drainage-pipe-cover.webp";
import imgTrenching from "@/assets/images/trenching-crew-deep-trench.webp";
import imgEquipment from "@/assets/images/equipment-deere-fleet.webp";
import imgRoller from "@/assets/images/equipment-roller-bulldozer.webp";
import imgDemoRubble from "@/assets/images/demolition-excavator-rubble.webp";
import imgPalmetto from "@/assets/images/trenching-palmetto-install.webp";
import imgGrading from "@/assets/images/grading-service-hero.webp";
import imgPoolBackfill from "@/assets/images/excavation-pool-backfill.webp";
import imgDrainageSunset from "@/assets/images/drainage-pvc-sunset.webp";
import imgSarasota from "@/assets/images/grading-sarasota-custom-home.webp";
import imgYanmar from "@/assets/images/excavation-yanmar-residential.webp";

const categories = ["All", "Land Clearing", "Excavation", "Grading", "Drainage", "Demolition", "Equipment"];

const galleryItems = [
  { img: imgOverhead, title: "Commercial Site Preparation", cat: "Excavation", location: "Bradenton, FL", alt: "Aerial view of commercial site grading with multiple pieces of heavy equipment in Bradenton FL" },
  { img: imgClearing, title: "Yanmar Excavator Stump Removal", cat: "Land Clearing", location: "Bradenton, FL", alt: "Red Yanmar excavator removing tree stump and roots during residential land clearing in Bradenton FL" },
  { img: imgPool, title: "Coastal Pool Excavation", cat: "Excavation", location: "Sarasota, FL", alt: "Yanmar excavator and crew performing pool excavation beside coastal building in Sarasota FL" },
  { img: imgClearingBradenton, title: "Residential Land Clearing", cat: "Land Clearing", location: "Bradenton, FL", alt: "Lethermon branded dump trailer and excavator clearing vegetation on residential lot in Bradenton FL" },
  { img: imgGradingCommercial, title: "Commercial Parking Lot Grading", cat: "Grading", location: "Bradenton, FL", alt: "Volvo vibratory drum roller compacting commercial parking lot with grade stakes in Bradenton FL" },
  { img: imgDemolition, title: "Mobile Home Demolition", cat: "Demolition", location: "Venice, FL", alt: "Red Yanmar excavator demolishing mobile home with branded Lethermon truck and trailer on site" },
  { img: imgDrainagePipe, title: "Drainage Pipe Installation", cat: "Drainage", location: "Palmetto, FL", alt: "Crew installing large concrete drainage pipe with Yanmar excavator in Palmetto FL" },
  { img: imgTrenching, title: "Deep Utility Trench Work", cat: "Drainage", location: "Palmetto, FL", alt: "Crew working in deep trench installing large concrete culvert pipe with Yanmar excavator in Palmetto FL" },
  { img: imgRoller, title: "Volvo Roller & Bulldozer on Site", cat: "Equipment", location: "Bradenton, FL", alt: "Volvo vibratory roller and Deere bulldozer grading commercial building site in Bradenton FL" },
  { img: imgEquipment, title: "Deere Fleet on Open Site", cat: "Equipment", location: "Bradenton, FL", alt: "John Deere compact track loader and wheel loader on open grading site in Bradenton FL" },
  { img: imgDemoRubble, title: "Waterfront Demolition", cat: "Demolition", location: "Longboat Key, FL", alt: "Red excavator on concrete rubble pile at waterfront demolition site on Longboat Key FL" },
  { img: imgPalmetto, title: "Commercial Pipe Install", cat: "Drainage", location: "Palmetto, FL", alt: "Yanmar excavator lifting large concrete pipe with crew during commercial drainage install in Palmetto FL" },
  { img: imgGrading, title: "Volvo Roller Finish Grading", cat: "Grading", location: "Bradenton, FL", alt: "Volvo drum roller with skid steer and crew performing commercial site grading in Bradenton FL" },
  { img: imgSarasota, title: "Custom Home Lot Grading", cat: "Grading", location: "Sarasota, FL", alt: "Two John Deere compact track loaders grading luxury custom home lot in Sarasota FL" },
  { img: imgDrainageSunset, title: "PVC Pipe Installation at Sunset", cat: "Drainage", location: "Palmetto, FL", alt: "PVC drainage pipes laid in trench near retention pond at sunset in Palmetto FL" },
  { img: imgYanmar, title: "Yanmar Mini Excavator Residential", cat: "Excavation", location: "Bradenton, FL", alt: "Red Yanmar mini excavator at residential foundation excavation site with worker in Bradenton FL" },
  { img: imgPoolBackfill, title: "Pool Rough Grade Backfill", cat: "Excavation", location: "Sarasota, FL", alt: "Completed pool shell with graded backfill ready for deck work in Sarasota FL" },
  { img: kameronTruck, title: "Branded Truck on Jobsite", cat: "Equipment", location: "Sarasota, FL", alt: "Lethermon Grade Excavations branded work truck with excavator on active jobsite" },
  { img: kameronCollage2, title: "Kameron Lethermon at Work", cat: "Equipment", location: "Bradenton, FL", alt: "Kameron Lethermon owner of Lethermon Grade Excavations on jobsite in Bradenton FL" },
];

export function GalleryPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  usePageSEO({
    title: "Project Gallery | Lethermon Grade Excavations",
    description: "Photos and videos of excavation, site grading, land clearing, demolition, and drainage projects completed across Bradenton, Sarasota, and Southwest Florida.",
    path: "/gallery",
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.cat === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-6 h-6 text-[#C4956A]" />
            <p className="text-[#C4956A] uppercase tracking-wider text-sm">Photo & Video Gallery</p>
          </div>
          <h1 className="text-white text-4xl md:text-5xl mb-4">See Our Work in Action</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Browse photos and videos from real jobsites across the Sarasota-Bradenton region. 
            Every image shows actual Lethermon Grade Excavations projects.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full transition-colors text-sm ${
                  activeCategory === cat
                    ? "bg-[#5C4A1E] text-white"
                    : "bg-secondary text-[#5C4A1E] hover:bg-[#5C4A1E]/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="break-inside-avoid rounded-xl overflow-hidden shadow-sm border border-border bg-card group cursor-pointer"
                onClick={() => setLightboxImg(item.img)}
              >
                <div className={`overflow-hidden ${i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"}`}>
                  <ImageWithFallback
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#C4956A] uppercase tracking-wider">{item.cat}</span>
                  <h3 className="text-[#3D2B1F] text-sm mt-1">{item.title}</h3>
                  <p className="text-muted-foreground text-xs">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-[#3D2B1F] noise-overlay grit-top">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Video Gallery</p>
            <h2 className="text-3xl text-white">Watch Our Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.slug} className="flex flex-col">
                <VideoPlaceholder
                  title={video.title}
                  thumbnail={video.poster}
                  videoSrc={video.videoSrc}
                  className="h-52"
                />
                <Link
                  to={`/videos/${video.slug}`}
                  className="mt-3 text-center text-[#C4956A] text-sm font-medium hover:underline"
                >
                  Watch on video page →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <Link to="/videos" className="text-[#C4956A] font-medium hover:underline inline-flex items-center gap-1">
              Browse all videos
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Your Project Could Be Here</h2>
          <p className="text-white/90 mb-8">Let us show you what we can do for your property.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors"
            >
              Request Free Estimate
            </Link>
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" /> {phone}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img src={lightboxImg} alt="Gallery" className="max-w-full max-h-[90vh] rounded-xl object-contain" />
          <button className="absolute top-6 right-6 text-white text-2xl hover:text-[#C4956A]">&times;</button>
        </div>
      )}
    </div>
  );
}