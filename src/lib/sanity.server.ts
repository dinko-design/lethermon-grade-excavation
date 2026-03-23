import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

export const sanityServerClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const sanityEnabled = !!projectId && projectId !== "YOUR_PROJECT_ID";
