import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const review = defineType({
  name: "review",
  title: "Review",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "e.g. General Contractor, Homeowner, Pool Builder",
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "stars",
      title: "Star Rating",
      type: "number",
      validation: (r) => r.required().min(1).max(5),
      options: {
        list: [
          { title: "5 Stars", value: 5 },
          { title: "4 Stars", value: 4 },
          { title: "3 Stars", value: 3 },
          { title: "2 Stars", value: 2 },
          { title: "1 Star", value: 1 },
        ],
      },
    }),
    defineField({
      name: "project",
      title: "Project Type",
      type: "string",
      description: "e.g. Foundation Prep, Land Clearing, Pool Excavation",
    }),
    defineField({
      name: "services",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
      description: "Which services does this review relate to?",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Show on homepage and key pages",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", stars: "stars" },
    prepare: ({ title, subtitle, stars }) => ({
      title: `${title} — ${"★".repeat(stars || 0)}`,
      subtitle: subtitle || "",
    }),
  },
});
