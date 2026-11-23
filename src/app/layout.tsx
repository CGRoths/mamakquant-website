import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_URL, socialLinks } from "@/content/site";
import { brandPreview } from "@/lib/seo";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "MAMAKQUANT develops vertically integrated quantitative infrastructure across blockchain nodes, on-chain intelligence, research, backtesting and controlled automated execution.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MAMAKQUANT | Vertically Integrated Quant Infrastructure",
    template: "%s | MAMAKQUANT",
  },
  description,
  applicationName: "MAMAKQUANT",
  authors: [{ name: "MAMAKQUANT", url: SITE_URL }],
  creator: "MAMAKQUANT",
  publisher: "MAMAKQUANT",
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MAMAKQUANT",
    title: "MAMAKQUANT | Vertically Integrated Quant Infrastructure",
    description,
    url: SITE_URL,
    images: [brandPreview],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMAKQUANT | Vertically Integrated Quant Infrastructure",
    description,
    images: [brandPreview],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MAMAKQUANT",
      url: SITE_URL,
      logo: `${SITE_URL}/mamakquant-logo.png`,
      description,
      sameAs: socialLinks.map((link) => link.href),
      parentOrganization: {
        "@type": "Organization",
        name: "EVERSTONE AEONBRIDGE GROUP HOLDINGS Ltd",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "MAMAKQUANT",
      url: SITE_URL,
      description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
