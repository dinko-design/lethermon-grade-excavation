import { defineType, defineField } from "sanity";
import { ComponentIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Service Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description: "Lucide icon name: Trees, Shovel, Ruler, Droplets, Building2, Cable",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "text",
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text description of the service",
    }),
    defineField({
      name: "features",
      title: "Features / What's Included",
      type: "array",
      of: [{ type: "string" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "process",
      title: "Process Steps",
      type: "array",
      of: [{ type: "processStep" }],
    }),
    defineField({
      name: "guarantee",
      title: "Guarantee / Pledge",
      type: "object",
      fields: [
        defineField({ name: "title", title: "Title", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
      ],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "galleryImages",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "videoTitle",
      title: "Video Title",
      type: "string",
    }),
    defineField({
      name: "videoUrl",
      title: "Video File URL",
      type: "url",
      description: "Direct URL to video file or Sanity file asset",
    }),
    defineField({
      name: "videoPoster",
      title: "Video Poster Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "relatedServices",
      title: "Related Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "seoContent",
      title: "SEO Content Blocks",
      type: "array",
      of: [{ type: "seoContentBlock" }],
      description: "Additional content blocks for SEO depth",
    }),
    defineField({
      name: "serviceAreaIntro",
      title: "Service Area Intro",
      type: "text",
      rows: 2,
      description: "Intro text for the service areas cross-links section",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Controls display order (lower = first)",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "Title", name: "titleAsc", by: [{ field: "title", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", media: "heroImage" },
  },
});
