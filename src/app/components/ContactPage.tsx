"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePageSEO } from "../hooks/usePageSEO";
import { Phone, MapPin, Mail, Clock, Send, Loader2 } from "lucide-react";
import { StarRating } from "./StarRating";
import { useCompanySettings } from "../providers/SanityProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCaptureAdParams, getGclid } from "../hooks/useGclid";
import kameronSite from "@/assets/kameron-site.webp";
import kameronTruck from "@/assets/kameron-truck.webp";

export function ContactPage() {
  usePageSEO({
    title: "Contact Us & Request a Free Estimate | Bradenton FL",
    description: "Get a free excavation estimate from Lethermon Grade Excavations. Call (941) 290-7208 or fill out our form. Serving Bradenton, Sarasota, Venice, and all of Southwest Florida.",
    path: "/contact",
  });
  const router = useRouter();
  useCaptureAdParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const body = new URLSearchParams({
        "form-name": "contact",
        gclid: getGclid(),
        ...formData,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      router.push("/contact/thank-you");
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-[#3D2B1F] noise-overlay">
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <p className="text-[#C4956A] uppercase tracking-wider text-sm mb-2">Contact Us</p>
          <h1 className="text-white text-4xl md:text-5xl mb-4">Get a Free Estimate</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Ready to start your project? Contact us today for a free, no-obligation estimate. 
            We typically respond within 24 hours.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <StarRating rating={5} size={16} />
            <span className="text-white/70 text-sm">5.0 Rating | 47+ Reviews | Free Estimates</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-[#3D2B1F] mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're a builder needing reliable excavation or a property owner preparing land, 
                  we're here to help. Call us directly or fill out the form.
                </p>
              </div>

              {/* Kameron photo */}
              <div className="rounded-xl overflow-hidden shadow-md border border-border">
                <ImageWithFallback src={kameronSite} alt="Kameron Lethermon - Owner, Lethermon Grade Excavations" className="w-full h-52 object-cover object-top" />
                <div className="bg-card p-4">
                  <p className="text-[#3D2B1F] text-sm">Kameron Lethermon</p>
                  <p className="text-[#C4956A] text-xs">Owner</p>
                  <p className="text-muted-foreground text-xs mt-1">Your primary contact from estimate to final grade.</p>
                </div>
              </div>

              {/* Branded truck */}
              <div className="rounded-xl overflow-hidden shadow-md border border-border">
                <ImageWithFallback src={kameronTruck} alt="Lethermon Grade Excavations branded truck with excavator on jobsite" className="w-full h-40 object-cover" />
              </div>

              <div className="space-y-6">
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
                    <MapPin className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Office</p>
                    <p className="text-muted-foreground">
                      {settings?.address
                        ? `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}`
                        : "1404 21st ST W., Palmetto, FL 34221"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Email</p>
                    <p className="text-muted-foreground">{settings?.email || "info@lethermongradeexcavations.com"}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5C4A1E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#5C4A1E]" />
                  </div>
                  <div>
                    <p className="text-[#3D2B1F]">Hours</p>
                    <p className="text-muted-foreground">Mon - Fri: 7:00 AM - 5:00 PM<br />Sat: By Appointment</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-md border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905498.4518978231!2d-82.5374445!3d27.5593035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3544cbdb47b1563%3A0x39e434b41886bf23!2sLethermon%20Grade%20Excavations!5e0!3m2!1sen!2sus!4v1774217173955!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lethermon Grade Excavations Location"
                />
              </div>

              {/* Service area tags */}
              <div>
                <p className="text-[#3D2B1F] mb-3">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Sarasota", "Bradenton", "Venice", "Lakewood Ranch", "Parrish", "Palmetto"].map((city) => (
                    <span key={city} className="px-3 py-1 bg-secondary rounded-full text-[#5C4A1E] text-sm">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="gclid" value="" />
                  <h2 className="text-2xl text-[#3D2B1F] mb-2">Request a Free Estimate</h2>
                  <p className="text-muted-foreground mb-8">
                    Tell us about your project and we'll get back to you with a transparent estimate.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[#3D2B1F] mb-2 text-sm">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3D2B1F] mb-2 text-sm">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
                        placeholder="(941) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-[#3D2B1F] mb-2 text-sm">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#3D2B1F] mb-2 text-sm">Project Type *</label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
                      >
                        <option value="">Select project type</option>
                        <option value="land-clearing">Land Clearing</option>
                        <option value="excavation">Excavation</option>
                        <option value="grading">Site Grading</option>
                        <option value="drainage">Drainage Solutions</option>
                        <option value="demolition">Demolition</option>
                        <option value="trenching">Utility Trenching</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-[#3D2B1F] mb-2 text-sm">Project Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors resize-none"
                      placeholder="Tell us about your project: location, type of work needed, timeline, etc."
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm mb-4">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#5C4A1E] text-white px-8 py-4 rounded-lg hover:bg-[#3D2B1F] transition-colors disabled:opacity-70"
                  >
                    {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                    {submitting ? "Submitting..." : "Submit Estimate Request"}
                  </button>

                  <p className="text-muted-foreground text-xs mt-4">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}