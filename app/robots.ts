import type { MetadataRoute } from "next";
import { INDIA_SITE_URL } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" },
    sitemap: `${INDIA_SITE_URL}/sitemap.xml`,
  };
}
