import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Phone } from "lucide-react";
import { useCompanySettings } from "../providers/SanityProvider";
import logo from "@/assets/206a28336ec240b04f829ff9f6ee440a4dd2c962.webp";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function LandingLayout() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  return (
    <div className="min-h-screen flex flex-col antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
      <ScrollToTop />

      {/* Minimal Header — logo + phone only */}
      <header className="sticky top-0 z-50 bg-[#3D2B1F] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <img src={logo} alt="Lethermon Grade Excavations" className="h-12 w-auto brightness-0 invert" />
          <a
            href={`tel:${phoneTel}`}
            className="inline-flex items-center gap-2 bg-[#C4956A] text-white px-5 py-2.5 rounded-lg hover:bg-[#b07f55] transition-colors text-sm font-medium"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Call {phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-[#2A1D12] text-white/60 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Lethermon Grade Excavations. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={`tel:${phoneTel}`} className="hover:text-white transition-colors">
              {phone}
            </a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
