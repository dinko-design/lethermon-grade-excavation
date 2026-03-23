"use client";
import { Link } from "@/compat/Link";
import { usePageSEO } from "../hooks/usePageSEO";
import { useCompanySettings } from "../providers/SanityProvider";

export function PrivacyPage() {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const companyName = settings?.name || "Lethermon Grade Excavations";
  usePageSEO({
    title: "Privacy Policy | Lethermon Grade Excavations",
    description: "Privacy policy for Lethermon Grade Excavations website. Learn how we handle your personal information.",
    path: "/privacy-policy",
    noIndex: true,
  });
  return (
    <div>
      <section className="py-16 bg-[#3D2B1F]">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-white text-4xl mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: March 4, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          {[
            { title: "1. Introduction", body: `${companyName} ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and protect information when you visit our website or use our services.` },
            { title: "2. Information We Collect", body: "We may collect the following types of information:\n\n• Contact Information: Name, phone number, email address, and mailing address provided through our estimate request form or direct contact.\n• Project Information: Details about your property and project needs shared during consultations.\n• Website Usage Data: IP addresses, browser type, pages visited, and time spent on our site, collected through standard web analytics.\n• Cookies: Standard cookies used for website functionality and analytics." },
            { title: "3. How We Use Your Information", body: "We use collected information to:\n\n• Respond to estimate requests and inquiries\n• Provide excavation and site preparation services\n• Communicate about project scheduling and status\n• Improve our website and services\n• Send relevant project updates (with your consent)\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes." },
            { title: "4. Information Sharing", body: "We may share your information only in the following circumstances:\n\n• With service providers who assist our operations (e.g., accounting, scheduling)\n• When required by law or legal process\n• To protect our rights, safety, or property\n• With your explicit consent" },
            { title: "5. Data Security", body: "We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet is 100% secure." },
            { title: "6. Your Rights", body: "You have the right to:\n\n• Request access to your personal information\n• Request correction of inaccurate information\n• Request deletion of your information\n• Opt out of marketing communications\n\nTo exercise these rights, contact us using the information below." },
            { title: "7. Third-Party Services", body: "Our website may use third-party services including Google Maps, Google Analytics, and social media platforms. These services have their own privacy policies governing how they collect and use information." },
            { title: "8. Children's Privacy", body: "Our website and services are not directed at children under 13. We do not knowingly collect personal information from children." },
            { title: "9. Changes to This Policy", body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date." },
            { title: "10. Contact Us", body: `If you have questions about this Privacy Policy or our data practices, contact us at:\n\n${companyName}\n${settings?.address ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}` : "1404 21st ST W.\nPalmetto, FL 34221"}\n${phone}\n${settings?.email || "info@lethermongradeexcavations.com"}` },
          ].map((s) => (
            <div key={s.title}>
              <h2 className="text-[#3D2B1F] mb-3">{s.title}</h2>
              <p className="text-muted-foreground text-sm whitespace-pre-line">{s.body}</p>
            </div>
          ))}
          <div className="border-t border-border pt-6">
            <Link to="/terms" className="text-[#C4956A] text-sm hover:underline">View Terms & Conditions →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
