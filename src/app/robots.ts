import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://mamakquant.com",
    sitemap: "https://mamakquant.com/sitemap.xml",
  };
}
