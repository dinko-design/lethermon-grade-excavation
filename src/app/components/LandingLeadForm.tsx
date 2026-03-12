import { useState } from "react";
import { CheckCircle, Phone, Send, Loader2 } from "lucide-react";
import { useCompanySettings } from "../providers/SanityProvider";

interface LandingLeadFormProps {
  formName: string;
  slug: string;
  heading: string;
  subheading: string;
  projectTypeOptions: string[];
  successMessage: string;
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export function LandingLeadForm({
  formName,
  slug,
  heading,
  subheading,
  projectTypeOptions,
  successMessage,
}: LandingLeadFormProps) {
  const settings = useCompanySettings();
  const phone = settings?.phone || "(941) 290-7208";
  const phoneTel = settings?.phoneTel || "9412907208";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    projectType: projectTypeOptions[0] || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": formName,
          source: "google-ads",
          "landing-page": slug,
          ...formData,
        }),
      });
      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "form_submission",
          form_name: formName,
          landing_page: slug,
        });
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div id="lead-form" className="bg-card rounded-xl border border-border p-10 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl text-[#3D2B1F] mb-4">Request Received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-6">{successMessage}</p>
        <a
          href={`tel:${phoneTel}`}
          className="inline-flex items-center gap-2 text-[#5C4A1E] hover:text-[#C4956A] transition-colors"
        >
          <Phone className="w-4 h-4" />
          Need faster response? Call {phone}
        </a>
      </div>
    );
  }

  return (
    <form
      id="lead-form"
      name={formName}
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="bg-card rounded-xl border border-border p-8 md:p-10 shadow-sm"
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="source" value="google-ads" />
      <input type="hidden" name="landing-page" value={slug} />

      <h3 className="text-2xl text-[#3D2B1F] mb-2">{heading}</h3>
      <p className="text-muted-foreground mb-8">{subheading}</p>

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

      <div className="mb-6">
        <label className="block text-[#3D2B1F] mb-2 text-sm">Property Address *</label>
        <input
          type="text"
          name="address"
          required
          autoComplete="street-address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
          placeholder="Property address or nearest cross streets"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-[#3D2B1F] mb-2 text-sm">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
          >
            {projectTypeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[#3D2B1F] mb-2 text-sm">Brief Description</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:border-[#C4956A] focus:ring-1 focus:ring-[#C4956A] outline-none transition-colors"
            placeholder="What do you need done?"
          />
        </div>
      </div>

      {error && (
        <p className="text-red-600 text-sm mb-4">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#C4956A] text-white px-8 py-4 rounded-lg hover:bg-[#b07f55] transition-colors disabled:opacity-70"
      >
        {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {submitting ? "Submitting..." : "Request Free Estimate"}
      </button>

      <p className="text-muted-foreground text-xs mt-4">
        * Required fields. No obligation. We typically respond within 24 hours.
      </p>
    </form>
  );
}
