import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamakquant.com"),
  title: "MamakQuant | Vertically Integrated Quant Infrastructure",
  description:
    "MamakQuant builds proprietary crypto market intelligence infrastructure across node data, entity-aware on-chain intelligence, quantitative research, backtesting, strategy deployment, and execution.",
  openGraph: {
    title: "MamakQuant | Vertically Integrated Quant Infrastructure",
    description:
      "Institutional Web3 infrastructure for market intelligence, research, backtesting, and automated execution.",
    url: "https://mamakquant.com",
    siteName: "MamakQuant",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MamakQuant | Vertically Integrated Quant Infrastructure",
    description:
      "Institutional Web3 infrastructure for market intelligence, research, backtesting, and automated execution.",
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
