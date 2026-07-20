import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.aurabox.fi";
const title = "Aurabox — Feel The Luxury";
const description =
  "Aurabox is a luxury experience brand. Confidence, exactly when it matters — before the meeting, the date, the flight, the moment that matters most.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Aurabox",
  },
  description,
  keywords: [
    "Aurabox",
    "luxury fragrance",
    "designer perfume",
    "Finland",
    "premium experience",
    "confidence",
  ],
  authors: [{ name: "Aurabox" }],
  creator: "Aurabox",
  applicationName: "Aurabox",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Aurabox",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${cormorant.variable} ${inter.variable} ${spaceGrotesk.variable} bg-black font-sans text-ivory antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
