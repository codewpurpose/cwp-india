import type { MetadataRoute } from "next";
import { INDIA_SITE_URL, LINKS } from "@/lib/links";

export default function sitemap(): MetadataRoute.Sitemap {
  return [LINKS.index, LINKS.about, LINKS.workshops, LINKS.faq, LINKS.contact].map(
    (path) => ({ url: new URL(path, INDIA_SITE_URL).href }),
  );
}
