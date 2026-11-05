import { defineQuery } from "next-sanity";
import { sanityClient } from "./client";
import type { FaqItem, SiteContent, Workshop } from "./types";
import { FAQS } from "@/lib/data";

const WORKSHOPS_QUERY = defineQuery(`
  *[_type == "workshop"] | order(date desc) {
    _id, title, slug, city, date, mode, venue, description, topics, poster, status, registrationUrl
  }
`);

const FAQS_QUERY = defineQuery(`
  *[_type == "faq"] | order(order asc) { "q": question, "a": answer }
`);

const SITE_CONTENT_QUERY = defineQuery(`
  *[_type == "siteContent"][0]
`);

const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getWorkshops(): Promise<Workshop[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<Workshop[]>(WORKSHOPS_QUERY, {}, FETCH_OPTIONS);
  } catch {
    return [];
  }
}

/** CMS FAQs when present, otherwise the hardcoded defaults. */
export async function getFaqs(): Promise<FaqItem[]> {
  if (!sanityClient) return FAQS;
  try {
    const items = await sanityClient.fetch<FaqItem[]>(FAQS_QUERY, {}, FETCH_OPTIONS);
    return items.length ? items : FAQS;
  } catch {
    return FAQS;
  }
}

/** Null when unconfigured or not yet created — callers use their defaults. */
export async function getSiteContent(): Promise<SiteContent | null> {
  if (!sanityClient) return null;
  try {
    return await sanityClient.fetch<SiteContent | null>(SITE_CONTENT_QUERY, {}, FETCH_OPTIONS);
  } catch {
    return null;
  }
}
