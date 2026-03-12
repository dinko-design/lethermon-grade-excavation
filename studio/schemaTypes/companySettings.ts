import { defineType, defineField } from "sanity";
import { CogIcon } from "@sanity/icons";

export const companySettings = defineType({
  name: "companySettings",
  title: "Company Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Company Description",
      type: "text",
      rows: 3,
      description: "Used in meta tags and schema markup",
    }),
    defineField({
      name: "ownerName",
      title: "Owner Name",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      description: "Format: (941) 290-7208",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "phoneTel",
      title: "Phone (tel: format)",
      type: "string",
      description: "For tel: links, e.g. 9412907208",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string", initialValue: "US" }),
      ],
    }),
    defineField({
      name: "geo",
      title: "Location",
      type: "geopoint",
      description: "Used for map and LocalBusiness schema",
    }),
    defineField({
      name: "hours",
      title: "Business Hours",
      type: "text",
      rows: 2,
      description: "e.g. Mon-Fri 7AM-5PM, Sat by appointment",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook", type: "url" }),
        defineField({ name: "instagram", title: "Instagram", type: "url" }),
        defineField({ name: "google", title: "Google Business", type: "url" }),
        defineField({ name: "youtube", title: "YouTube", type: "url" }),
      ],
    }),
    defineField({
      name: "aggregateRating",
      title: "Aggregate Rating",
      type: "object",
      fields: [
        defineField({ name: "ratingValue", title: "Rating", type: "string", initialValue: "5.0" }),
        defineField({ name: "reviewCount", title: "Review Count", type: "string" }),
        defineField({ name: "bestRating", title: "Best Rating", type: "string", initialValue: "5" }),
      ],
    }),
    defineField({
      name: "priceRange",
      title: "Price Range",
      type: "string",
      description: "For schema markup, e.g. $$",
      initialValue: "$$",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "projectTypes",
      title: "Project Types",
      type: "array",
      of: [{ type: "string" }],
      description: "List of project types for display (Custom Homes, Pool Excavation, etc.)",
    }),
  ],
  preview: {
    select: { title: "name" },
    prepare: ({ title }) => ({ title: title || "Company Settings" }),
  },
});
