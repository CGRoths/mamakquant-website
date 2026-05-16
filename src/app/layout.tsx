import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamakquant.com"),
  title: "MAMAKQUANT | Institutional Quant Infrastructure",
  description:
    "MAMAKQUANT builds proprietary crypto market intelligence infrastructure across node data, entity-aware on-chain intelligence, quantitative research, backtesting, strategy deployment, and execution.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    title: "MAMAKQUANT | Institutional Quant Infrastructure",
    description:
      "Institutional Quant infrastructure for market intelligence, research, backtesting, and automated execution.",
    url: "https://mamakquant.com",
    siteName: "MAMAKQUANT",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "MAMAKQUANT",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAMAKQUANT",
    description:
      "Institutional Web3 infrastructure for market intelligence, research, backtesting, and automated execution.",
    images: ["/opengraph-image.png"],
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
