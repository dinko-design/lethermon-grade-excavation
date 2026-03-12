import { defineType, defineField } from "sanity";

export const seoContentBlock = defineType({
  name: "seoContentBlock",
  title: "SEO Content Block",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "paragraphs",
      title: "Paragraphs",
      type: "array",
      of: [{ type: "text" }],
      validation: (r) => r.required().min(1),
    }),
    defineField({
      name: "bullets",
      title: "Bullet Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
    }),
    defineField({
      name: "linkTo",
      title: "Link URL",
      type: "string",
      description: "Internal path like /services/site-grading",
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
