"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { Phone, MapPin, Mail, Clock, Navigation, Car, ArrowRight } from "lucide-react";
import { StarRating } from "./StarRating";
import { IMG } from "./data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useServiceAreas, useCompanySettings } from "../providers/SanityProvider";

export function LocationPage() {
  const serviceAreas = useServiceAreas();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  usePageSEO({
    title: "Our Location | Bradenton FL | Lethermon Grade Excavations",
    description: "Lethermon Grade Excavations is headquartered in Palmetto, FL 34221. Serving Sarasota County, Manatee County, and all of Southwest Florida.",
    path: "/location",
  });
  return (
    <div>
      <section className="relative py-24 bg-[#3D2B1F]">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Our Location</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Bradenton, Florida Office</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Centrally located in Bradenton to serve the entire Sarasota-Bradenton-Venice metropolitan area quickly and efficiently.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | Serving 8 Communities</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 450 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
            {/* Info */}
            <div>
              <h2 className="text-2xl text-[#3D2B1F] mb-6">Office Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Address</p>
                    <p className="text-muted-foreground">1404 21st ST W.<br />Palmetto, FL 34221</p>
                  </div>
                </div>
                <a href={`tel:${phoneTel}`} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#5C4A1E] transition-colors">
                    <Phone className="w-5 h-5 text-[#5C4A1E] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Phone</p>
                    <p className="text-muted-foreground">{phone}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Email</p>
                    <p className="text-muted-foreground">info@lethermongradeexcavations.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Business Hours</p>
                    <div className="text-muted-foreground text-sm space-y-1 mt-1">
                      <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                      <p className="text-[#C4956A] text-xs mt-2">* Emergency availability for existing clients</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#5C4A1E]/5 border border-[#5C4A1E]/15 rounded-xl p-6">
                <h3 className="text-[#3D2B1F] mb-2">Directions</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Located in Palmetto, easily accessible from Sarasota, Bradenton, and Lakewood Ranch.
                </p>
                <a href="https://maps.google.com/?q=1404+21st+ST+W+Palmetto+FL+34221" target="_blank" rel="noopener noreferrer" className="text-[#C4956A] text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  <Navigation className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service reach */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-xl text-[#3D2B1F] text-center mb-6">Drive Times From Our Office</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: "Sarasota", time: "25 min" },
              { city: "Lakewood Ranch", time: "15 min" },
              { city: "Venice", time: "40 min" },
              { city: "Parrish", time: "20 min" },
              { city: "Palmetto", time: "15 min" },
              { city: "North Port", time: "55 min" },
              { city: "St. Petersburg", time: "50 min" },
              { city: "Ellenton", time: "10 min" },
            ].map((d) => (
              <div key={d.city} className="bg-card rounded-lg p-4 border border-border text-center">
                <Car className="w-4 h-4 text-[#C4956A] mx-auto mb-1" />
                <p className="text-[#3D2B1F] text-sm">{d.city}</p>
                <p className="text-[#C4956A] text-xs">{d.time}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/service-areas" className="text-[#C4956A] text-sm hover:underline">View all service areas →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#C4956A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white mb-4">Visit Us or Call Today</h2>
          <p className="text-white/90 mb-8">Schedule a free on-site estimate for your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-[#3D2B1F] text-white px-8 py-4 rounded-lg hover:bg-[#2a1e15] transition-colors">
              Request Free Estimate
            </Link>
            <a href={`tel:${phoneTel}`} className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5" /> {phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
