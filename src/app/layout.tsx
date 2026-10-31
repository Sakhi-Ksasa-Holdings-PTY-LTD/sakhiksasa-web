import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { MobileSplash } from "@/components/MobileSplash";

// Sora — the official brand font (per Oct 2026 brand sheet).
// Used for wordmark, holdings line, documents, and interface — replaces
// the former Fraunces + Inter + Space Grotesk trio.
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://sakhiksasa-web.onrender.com";
const OG_IMAGE = `${SITE_URL}/portraits/og-image-1200x630.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sakhi'ksasa Holdings (Pty) Ltd — We don't wait for validation. We make the first move.",
    template: "%s · Sakhi'ksasa Holdings",
  },
  description:
    "Sakhi'ksasa Holdings is a self-funded, privately-owned holding company that builds, owns, and operates systems for the long term. Home of Vantage and Standpoint.",
  keywords: [
    "Sakhi'ksasa Holdings",
    "holding company",
    "South Africa",
    "Vantage",
    "Standpoint",
    "competitive intelligence",
  ],
  authors: [{ name: "Sakhi'ksasa Holdings (Pty) Ltd" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico?v=2", sizes: "48x48" },
      { url: "/favicon/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png?v=2", sizes: "180x180" },
    ],
  },
  manifest: "/favicon/site.webmanifest?v=2",
  openGraph: {
    title: "Sakhi'ksasa Holdings (Pty) Ltd",
    description:
      "We don't wait for validation. We make the first move. A self-funded holding company building enduring systems. Home of Vantage and Standpoint.",
    siteName: "Sakhi'ksasa Holdings",
    type: "website",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Sakhi'ksasa Holdings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi'ksasa Holdings",
    description: "We build enduring systems that outlast their founders. Home of Vantage and Standpoint.",
    images: [OG_IMAGE],
    site: "@SakhiHoldings",
    creator: "@SakhiHoldings",
  },
  robots: { index: true, follow: true },
};

// theme-color moved to viewport export per Next.js 16 metadata API
export const viewport: Viewport = {
  themeColor: "#0E1033",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sakhi'ksasa Holdings (Pty) Ltd",
              description:
                "A self-funded, privately-owned holding company that builds, owns, and operates systems for the long term.",
              foundingLocation: "South Africa",
              areaServed: "Global",
              founder: { "@type": "Person", name: "Sanele T. Zwane" },
              sameAs: ["https://x.com/SakhiHoldings", "https://instagram.com/sakhi.holdings"],
              logo: `${SITE_URL}/portraits/logo-horizontal-header-800x200.png`,
            }),
          }}
        />
      </head>
      <body>
        <MobileSplash />
        {children}
      </body>
    </html>
  );
}
