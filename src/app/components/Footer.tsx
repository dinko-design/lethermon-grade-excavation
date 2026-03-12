import logo from "@/assets/206a28336ec240b04f829ff9f6ee440a4dd2c962.png";
import dinkoLogo from "@/assets/2645bec3cc98ea2f8dc68f9a6126a41bc9481e51.png";
import { Link } from "react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { StarRating } from "./StarRating";
import { useCompanySettings } from "../providers/SanityProvider";

export function Footer() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  const city = settings?.address?.city || "Bradenton";
  const zip = settings?.address?.zip || "34201";

  return (
    <footer className="bg-[#2A1D12] text-white noise-overlay">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <img src={logo} alt="Lethermon Grade Excavations" className="h-20 w-auto mb-4 brightness-0 invert" />
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
              <Link to="/location" className="flex items-center gap-2 text-gray-400 text-sm hover:text-[#C4956A] transition-colors">
                <MapPin className="w-3.5 h-3.5 text-[#C4956A]" /> {city}, FL {zip}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {[
                { to: "/services/land-clearing", label: "Land Clearing" },
                { to: "/services/excavation", label: "Excavation" },
                { to: "/services/site-grading", label: "Site Grading" },
                { to: "/services/drainage", label: "Drainage" },
                { to: "/services/demolition", label: "Demolition" },
                { to: "/services/trenching", label: "Trenching" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-400 hover:text-[#C4956A] transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#C4956A] mb-4 text-xs uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
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
            <div className="w-7 h-7 rounded-full bg-[#7C4DFF] flex items-center justify-center flex-shrink-0 shadow-sm shadow-[#7C4DFF]/30">
              <img src={dinkoLogo} alt="DinkoDesign" className="w-5 h-5 object-contain" />
            </div>
            <span className="text-gray-400 text-xs tracking-wide uppercase group-hover:text-white transition-colors">DinkoDesign.com</span>
          </a>
          <span className="text-gray-600 text-xs hidden sm:inline">· Sarasota, FL Digital Marketing Agency</span>
        </div>
      </div>
    </footer>
  );
}