import { defineType, defineField } from "sanity";
import { UsersIcon } from "@sanity/icons";

export const jobListing = defineType({
  name: "jobListing",
  title: "Job Listing",
  type: "document",
  icon: UsersIcon,
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: ["Full-Time", "Part-Time", "Contract", "Seasonal"],
      },
      initialValue: "Full-Time",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Uncheck to hide this listing from the website",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "title", type: "type", isActive: "isActive" },
    prepare: ({ title, type, isActive }) => ({
      title: `${isActive === false ? "🚫 " : ""}${title || "Untitled"}`,
      subtitle: type || "",
    }),
  },
});
