import type { MetadataRoute } from "next";
import { siteConfig } from "~/config/site";

const locales = ["en", "ar"] as const;

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${siteConfig.url}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: locale === "en" ? route.priority : route.priority * 0.9,
      });
    }
  }

  return entries;
}
