import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mamakquant.com";
const seoTitle = "MAMAKQUANT | Vertically Integrated Quant Infrastructure";
const seoDescription =
  "MAMAKQUANT builds vertically integrated quant infrastructure across blockchain nodes, on-chain intelligence, research engines, backtesting systems, and automated execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "MAMAKQUANT",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: seoTitle,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
