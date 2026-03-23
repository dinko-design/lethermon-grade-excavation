import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

export const sanityEnabled = !!projectId && projectId !== "YOUR_PROJECT_ID";

// Only create a real client if we have a projectId — avoids build-time errors
export const sanityClient = sanityEnabled
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : (null as unknown as ReturnType<typeof createClient>);

const builder = sanityEnabled ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}
