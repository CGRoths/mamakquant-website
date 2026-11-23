import type { Metadata } from "next";

import { SITE_URL } from "@/content/site";

export const brandPreview = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "MAMAKQUANT forest-green and gold emblem and wordmark on ivory",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | MAMAKQUANT`,
      description,
      url: `${SITE_URL}${path}`,
      images: [brandPreview],
    },
    twitter: {
      card: "summary_large_image",
      images: [brandPreview],
      title: `${title} | MAMAKQUANT`,
      description,
    },
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
