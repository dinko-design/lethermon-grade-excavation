"use client";
import logo from "@/assets/lethermon-grade-excavations-logo-white.png";
import dinkoLogo from "@/assets/2645bec3cc98ea2f8dc68f9a6126a41bc9481e51.png";
import { Link } from "@/compat/Link";
import { Phone, MapPin, Mail, Clock, Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import { StarRating } from "./StarRating";
import { useCompanySettings } from "../providers/SanityProvider";

export function Footer() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  const city = settings?.address?.city || "Bradenton";
  const zip = settings?.address?.zip || "34221";

  return (
    <footer className="bg-[#2A1D12] text-white noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <img src={logo} alt="Lethermon Grade Excavations" className="h-20 w-auto mb-4" width={200} height={114} loading="lazy" />
            <p className="text-gray-400 text-sm mb-4">
              Professional excavation & site preparation serving Southwest Florida.
              Discipline. Precision. Reliability.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <StarRating rating={5} size={14} />
              <span className="text-gray-400 text-xs">5.0 | 47+ Reviews</span>
            </div>
            <p className="text-[#C4956A] text-xs">Fully Insured | BBB A+ Rated</p>
            <div className="mt-4 space-y-2">
              <a href={`tel:${phoneTel}`} className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#C4956A] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#C4956A]" /> {phone}
              </a>
              <a href="https://maps.google.com/?q=1404+21st+ST+W+Palmetto+FL+34221" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-gray-400 text-sm hover:text-[#C4956A] transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#C4956A] mt-0.5 flex-shrink-0" />
                <span>{settings?.address ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}` : "1404 21st ST W, Palmetto, FL 34221"}</span>
              </a>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                className="w-full h-36"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lethermon Grade Excavations location"
              />
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.facebook.com/profile.php?id=100085637750673" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4956A] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://www.instagram.com/lethermongradeexcavations/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C4956A] transition-colors" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#C4956A] transition-colors text-sm font-medium">All Services</Link>
              </li>
              {[
                { to: "/services/land-clearing", label: "Land Clearing", icon: Trees },
                { to: "/services/excavation", label: "Excavation", icon: Shovel },
                { to: "/services/site-grading", label: "Site Grading", icon: Ruler },
                { to: "/services/drainage", label: "Drainage", icon: Droplets },
                { to: "/services/demolition", label: "Demolition", icon: Building2 },
                { to: "/services/trenching", label: "Trenching", icon: Cable },
              ].map((link) => {
                const Icon = link.icon;
                return (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-gray-400 hover:text-[#C4956A] transition-colors text-sm"><Icon className="w-3.5 h-3.5" />{link.label}</Link>
                </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/team", label: "Our Team" },
                { to: "/faith", label: "Faith" },
                { to: "/military", label: "Military" },
                { to: "/reviews", label: "Reviews" },
                { to: "/projects", label: "Projects" },
                { to: "/gallery", label: "Gallery" },
                { to: "/trust", label: "Trust" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-[#C4956A] transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2">
              {[
                { to: "/service-areas/sarasota", label: "Sarasota" },
                { to: "/service-areas/bradenton", label: "Bradenton" },
                { to: "/service-areas/venice", label: "Venice" },
                { to: "/service-areas/lakewood-ranch", label: "Lakewood Ranch" },
                { to: "/service-areas/parrish", label: "Parrish" },
                { to: "/service-areas/palmetto", label: "Palmetto" },
                { to: "/service-areas/st-petersburg", label: "St. Petersburg" },
                { to: "/service-areas/north-port", label: "North Port" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-[#C4956A] transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              {[
                { to: "/blog", label: "Blog" },
                { to: "/videos", label: "Videos" },
                { to: "/press-releases", label: "Press Releases" },
                { to: "/media-kit", label: "Media Kit" },
                { to: "/location", label: "Location" },
                { to: "/service-areas", label: "All Areas" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-[#C4956A] transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-[#C4956A] transition-colors">Terms</Link>
            <Link to="/privacy-policy" className="hover:text-[#C4956A] transition-colors">Privacy</Link>
            <Link to="/sitemap" className="hover:text-[#C4956A] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* DinkoDesign byline */}
      <div className="bg-[#1a1610] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-2.5">
          <span className="text-gray-500 text-xs">Website by</span>
          <a
            href="https://dinkodesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 shadow-sm shadow-[#7C4DFF]/30">
              <img src={dinkoLogo} alt="DinkoDesign" className="w-full h-full object-cover" />
            </div>
            <span className="text-gray-400 text-xs tracking-wide uppercase group-hover:text-white transition-colors">DinkoDesign.com</span>
          </a>
          <span className="text-gray-600 text-xs hidden sm:inline">· Sarasota, FL Digital Marketing Agency</span>
        </div>
      </div>
    </footer>
  );
}