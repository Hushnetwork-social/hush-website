import type { MetadataRoute } from "next";
import { absoluteUrl, siteRoutes } from "@/app/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return siteRoutes.map(route => ({
    url: absoluteUrl(route.path),
    lastModified: new Date("2026-05-03"),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
