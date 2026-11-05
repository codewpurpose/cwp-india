import { createClient, type SanityClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-01-01";

/** Null until Sanity env vars are configured — pages fall back to hardcoded content. */
export const sanityClient: SanityClient | null = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;

export function urlFor(source: { asset: { _ref: string } }) {
  if (!projectId) return null;
  return createImageUrlBuilder({ projectId, dataset }).image(source);
}
