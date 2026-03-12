import { Link } from "react-router";
import { usePageSEO } from "../hooks/usePageSEO";
import { useCompanySettings } from "../providers/SanityProvider";

export function TermsPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  usePageSEO({
    title: "Terms of Service | Lethermon Grade Excavations",
    description: "Terms of service for Lethermon Grade Excavations website and services.",
    path: "/terms",
    noIndex: true,
  });
  return (
    <div>
      <section className="py-16 bg-[#3D2B1F]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-white text-4xl mb-2">Terms & Conditions</h1>
          <p className="text-gray-400 text-sm">Last updated: March 4, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {[
            { title: "1. Agreement to Terms", body: `By accessing and using the ${companyName} website ("Site"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use this Site.` },
            { title: "2. Services", body: `${companyName} provides excavation, land clearing, site grading, drainage solutions, demolition, and utility trenching services in Southwest Florida. All services are subject to availability and scheduling. Specific project terms are covered in individual project agreements and estimates.` },
            { title: "3. Estimates & Pricing", body: "All estimates provided through this website or in person are non-binding proposals unless a formal agreement is signed. Estimates are valid for 30 days from the date issued. Actual project costs may vary based on site conditions, scope changes, or unforeseen circumstances discovered during work." },
            { title: "4. Project Agreements", body: "All excavation work is performed under a written project agreement or work order that specifies scope, pricing, timeline, and terms. This website does not constitute a binding agreement for services." },
            { title: "5. Payment Terms", body: "Payment terms are specified in individual project agreements. Standard terms include a deposit before work begins and final payment upon completion. Late payments may be subject to interest charges as specified in the project agreement." },
            { title: "6. Insurance & Liability", body: `${companyName} maintains general liability insurance and workers' compensation coverage. Certificates of insurance are available upon request. Our liability is limited to the terms specified in individual project agreements.` },
            { title: "7. Website Content", body: "The content on this Site is provided for general information purposes only. While we strive to keep information current and accurate, we make no representations or warranties about the completeness, accuracy, or reliability of any information on this Site." },
            { title: "8. Intellectual Property", body: `All content on this Site, including text, images, logos, and design elements, is the property of ${companyName} and is protected by intellectual property laws. You may not reproduce, distribute, or use any content without written permission.` },
            { title: "9. Third-Party Links", body: "This Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of third-party websites." },
            { title: "10. Limitation of Liability", body: `To the maximum extent permitted by law, ${companyName} shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this Site or our services.` },
            { title: "11. Governing Law", body: "These Terms and Conditions are governed by the laws of the State of Florida. Any disputes arising from these terms shall be resolved in the courts of Manatee County, Florida." },
            { title: "12. Changes to Terms", body: "We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Continued use of the Site after changes constitutes acceptance of the modified terms." },
            { title: "13. Contact Information", body: `If you have questions about these Terms and Conditions, contact us at:\n\n${companyName}\n${settings?.address ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}` : "5429 University Pkwy #1067\nBradenton, FL 34201"}\n${phone}\n${settings?.email || "info@lethermongradeexcavations.com"}` },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-[#3D2B1F] mb-3">{s.title}</h2>
              <p className="text-muted-foreground text-sm whitespace-pre-line">{s.body}</p>
            </div>
          ))}
          <div className="border-t border-border pt-6">
            <Link to="/privacy-policy" className="text-[#C4956A] text-sm hover:underline">View Privacy Policy →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
