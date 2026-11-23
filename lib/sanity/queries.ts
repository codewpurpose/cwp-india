import { defineQuery } from "next-sanity";
import { sanityClient } from "./client";
import type { Chapter, FaqItem, SiteContent, Workshop } from "./types";
import { FAQS } from "@/lib/data";

const WORKSHOPS_QUERY = defineQuery(`
  *[_type == "workshop"] {
    _id, title, slug, city, date, mode, venue, description, topics, poster, status, registrationUrl
  }
`);

const CHAPTERS_QUERY = defineQuery(`
  *[_type == "chapter" && acceptingMembers == true && defined(name) && defined(location)]
    | order(location asc, name asc) { _id, name, location }
`);

const FAQS_QUERY = defineQuery(`
  *[_type == "faq"] | order(order asc) { "q": question, "a": answer }
`);

const SITE_CONTENT_QUERY = defineQuery(`
  *[_type == "siteContent"][0]
`);

const FETCH_OPTIONS = { next: { revalidate: 60 } } as const;

export async function getChapters(): Promise<Chapter[]> {
  if (!sanityClient) return [];
  try {
    return await sanityClient.fetch<Chapter[]>(CHAPTERS_QUERY, {}, FETCH_OPTIONS);
  } catch {
    return [];
  }
}

export async function getWorkshopSchedule(): Promise<{
  upcoming: Workshop[];
  past: Workshop[];
} | null> {
  if (!sanityClient) return null;

  let workshops: Workshop[];
  try {
    workshops = await sanityClient.fetch<Workshop[]>(WORKSHOPS_QUERY, {}, FETCH_OPTIONS);
  } catch {
    return null;
  }

  const now = Date.now();
  const events = workshops
    .map((workshop) => ({ workshop, startsAt: Date.parse(workshop.date) }))
    .filter(({ startsAt }) => Number.isFinite(startsAt))
    .sort((a, b) => a.startsAt - b.startsAt);

  return {
    upcoming: events
      .filter(({ workshop, startsAt }) => workshop.status === "upcoming" && startsAt >= now)
      .map(({ workshop }) => workshop),
    past: events
      .filter(({ startsAt }) => startsAt < now)
      .reverse()
      .map(({ workshop }) => workshop),
  };
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
