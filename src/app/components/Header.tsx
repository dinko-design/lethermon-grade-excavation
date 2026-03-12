import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, MapPin, Trees, Shovel, Ruler, Droplets, Building2, Cable } from "lucide-react";
import logo from "@/assets/206a28336ec240b04f829ff9f6ee440a4dd2c962.webp";
import { useCompanySettings } from "../providers/SanityProvider";

const utilityLinks = [
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/service-areas", label: "Areas" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  { to: "/services/land-clearing", label: "Land Clearing", icon: Trees },
  { to: "/services/excavation", label: "Excavation", icon: Shovel },
  { to: "/services/site-grading", label: "Site Grading", icon: Ruler },
  { to: "/services/drainage", label: "Drainage", icon: Droplets },
  { to: "/services/demolition", label: "Demolition", icon: Building2 },
  { to: "/services/trenching", label: "Trenching", icon: Cable },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  // Scroll hide/show
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          if (currentY < 10) {
            setVisible(true);
          } else if (currentY > lastScrollY.current && currentY > 100) {
            setVisible(false); // scrolling down
          } else if (currentY < lastScrollY.current) {
            setVisible(true); // scrolling up
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="sticky top-0 z-50 transition-transform duration-300 will-change-transform"
      style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Skinny utility bar */}
      <div className="bg-[#2A1D12] text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <Link to="/location" className="hover:text-[#C4956A] transition-colors">Bradenton, FL</Link>
            </span>
            <span className="text-white/30">|</span>
            <Link to="/service-areas" className="hover:text-[#C4956A] transition-colors">Serving Sarasota, Bradenton, Venice & Surrounding Areas</Link>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <nav className="flex items-center gap-3">
              {utilityLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hover:text-[#C4956A] transition-colors ${
                    location.pathname === link.to ? "text-[#C4956A]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <span className="text-white/30 hidden md:inline">|</span>
            <a href={`tel:${phoneTel}`} className="hidden sm:flex items-center gap-1 text-[#C4956A] hover:text-white transition-colors">
              <Phone className="w-3 h-3" />
              {phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main service nav */}
      <div className="bg-white shadow-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Lethermon Grade Excavations" className="h-14 lg:h-20 w-auto" width={200} height={114} />
            </Link>

            {/* Desktop service links - stacked icon/text */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {serviceLinks.map((link) => {
                const Icon = link.icon;
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all text-xs ${
                      active
                        ? "bg-[#5C4A1E] text-white"
                        : "text-[#3D2B1F] hover:bg-[#5C4A1E]/5 hover:text-[#5C4A1E]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="bg-[#C4956A] text-white px-6 py-3 rounded-lg hover:bg-[#b07f55] transition-colors text-sm whitespace-nowrap"
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile phone + hamburger */}
            <div className="flex items-center gap-1 lg:hidden">
              <a
                href={`tel:${phoneTel}`}
                className="text-[#C4956A] p-2"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                className="text-[#3D2B1F] p-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {/* Services first */}
              <p className="text-xs text-muted-foreground uppercase tracking-wider px-3 mb-2">Services</p>
              {serviceLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                      location.pathname === link.to
                        ? "bg-[#5C4A1E] text-white"
                        : "text-[#3D2B1F] hover:bg-secondary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {link.label}
                  </Link>
                );
              })}

              {/* Utility quick-nav links below services */}
              <div className="border-t border-border my-3" />
              <div className="flex flex-col gap-0.5 px-3 pb-2">
                {[
                  { to: "/about", label: "About" },
                  { to: "/reviews", label: "Reviews" },
                  { to: "/blog", label: "Blog" },
                  { to: "/service-areas", label: "Service Areas" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/trust", label: "Trust & Recognition" },
                  { to: "/careers", label: "Careers" },
                ].map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-sm py-2 transition-colors ${
                      location.pathname === link.to
                        ? "text-[#C4956A]"
                        : "text-[#5C4A1E]/70 hover:text-[#C4956A]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border my-3" />
              <Link
                to="/contact"
                className="block bg-[#C4956A] text-white px-5 py-3 rounded-lg text-center hover:bg-[#b07f55] transition-colors"
              >
                Get a Free Estimate
              </Link>
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center justify-center gap-2 py-3 text-[#5C4A1E]"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              {/* Location strip at very bottom */}
              <div className="flex items-center justify-center gap-2 px-3 pt-2 pb-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 text-[#C4956A]" />
                <span>Serving Sarasota, Bradenton, Venice & Surrounding Areas</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}