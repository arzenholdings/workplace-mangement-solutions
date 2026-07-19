import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/workflow-snapshot`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/policy`,
      lastModified: new Date("2026-07-19"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
