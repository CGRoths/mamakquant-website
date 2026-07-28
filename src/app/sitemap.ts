import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/technology",
    "/technology/mqnode",
    "/technology/mqchain",
    "/technology/mqengine",
    "/technology/mqbot",
    "/technology/mqai",
    "/platform/mqdash",
    "/company",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `https://mamakquant.com${route}`,
    lastModified: new Date("2026-07-29"),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/technology" ? 0.9 : 0.8,
  }));
}
