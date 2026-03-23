"use client";

import { useEffect } from "react";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { usePageSEO } from "../hooks/usePageSEO";
import { useCompanySettings } from "../providers/SanityProvider";

export function ContactThankYou() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  usePageSEO({
    title: "Thank You — Estimate Request Received",
    description: "Your estimate request has been received. We'll contact you within 24 hours.",
    path: "/contact/thank-you",
    noIndex: true,
  });

  // Fire dataLayer conversion event for GTM
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "conversion",
        conversion_type: "lead_form_submission",
        form_name: "contact",
        service_type: "general",
      });
    }
  }, []);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-background">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>

        <h1
          className="text-[#3D2B1F] text-3xl md:text-4xl mb-4"
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
        >
          Estimate Request Received!
        </h1>

        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Thank you for contacting Lethermon Grade Excavations. We typically respond within 24 hours to discuss your project and schedule a site evaluation.
        </p>

        {/* What happens next */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8 text-left">
          <h2 className="text-[#3D2B1F] font-medium mb-4">What happens next:</h2>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#5C4A1E]/20 flex items-center justify-center flex-shrink-0 text-[#5C4A1E] text-xs font-bold mt-0.5">1</span>
              We review your project details (within a few hours)
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#5C4A1E]/20 flex items-center justify-center flex-shrink-0 text-[#5C4A1E] text-xs font-bold mt-0.5">2</span>
              We call you to schedule a free on-site evaluation
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-[#5C4A1E]/20 flex items-center justify-center flex-shrink-0 text-[#5C4A1E] text-xs font-bold mt-0.5">3</span>
              You receive a detailed, no-obligation estimate
            </li>
          </ol>
        </div>

        {/* Phone CTA */}
        <a
          href={`tel:${phoneTel}`}
          className="inline-flex items-center justify-center gap-2 bg-[#5C4A1E] text-white px-8 py-4 rounded-lg hover:bg-[#3D2B1F] transition-colors font-medium mb-4 w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          Need faster response? Call {phone}
        </a>

        <div className="mt-4">
          <a
            href="/services"
            className="inline-flex items-center gap-1 text-[#5C4A1E] hover:text-[#C4956A] transition-colors text-sm"
          >
            Explore our services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
