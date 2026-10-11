import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

// Weights trimmed to only what the UI actually uses — smaller font payload.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const description =
  "Linestory Studio is an architecture and interior design practice working across homes, hospitality and civic projects. Every line tells a story.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Linestory Studio — Architecture & Interiors",
  description,
  keywords: [
    "architecture studio",
    "interior design",
    "architects India",
    "residential architecture",
    "hospitality design",
    "master planning",
    "Linestory Studio",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: "Linestory Studio — Architecture & Interiors",
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linestory Studio — Architecture & Interiors",
    description,
  },
  robots: { index: true, follow: true },
};

// Organization structured data for rich results.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    postalCode: "440027",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  areaServed: "IN",
  knowsAbout: ["Architecture", "Interior Design", "Master Planning"],
  sameAs: site.socials.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} antialiased`}
    >
      <body className="paper flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Cursor />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
        <Script
          defer
          data-domain="linestorystudio.in"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
