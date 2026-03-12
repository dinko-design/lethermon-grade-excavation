import { defineType, defineField } from "sanity";
import { PinIcon } from "@sanity/icons";

export const serviceArea = defineType({
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  icon: PinIcon,
  fields: [
    defineField({
      name: "city",
      title: "City Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "city", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "county",
      title: "County",
      type: "string",
    }),
    defineField({
      name: "zips",
      title: "ZIP Codes",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "projects",
      title: "Completed Projects",
      type: "number",
      validation: (r) => r.min(0),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "string",
      description: "Neighborhood list for cards, e.g. 'Downtown Sarasota, Gulf Gate, Bee Ridge'",
    }),
    defineField({
      name: "neighborhoods",
      title: "Neighborhoods",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mapQuery",
      title: "Map Query",
      type: "string",
      description: "Google Maps query string, e.g. Sarasota,FL",
    }),
    defineField({
      name: "intro",
      title: "Intro Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      description: "Intro paragraphs for the detail page",
    }),
    defineField({
      name: "servicesHighlight",
      title: "Services Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points of highlighted services for this area",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  orderings: [
    { title: "Projects (High to Low)", name: "projectsDesc", by: [{ field: "projects", direction: "desc" }] },
    { title: "City A-Z", name: "cityAsc", by: [{ field: "city", direction: "asc" }] },
  ],
  preview: {
    select: { title: "city", subtitle: "county", projects: "projects" },
    prepare: ({ title, subtitle, projects }) => ({
      title: title || "Untitled",
      subtitle: `${subtitle || ""} — ${projects || 0} projects`,
    }),
  },
});
