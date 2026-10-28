import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

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
const OG_IMAGE = "/standpoint-assets/images/standpoint_og_1200x630.png";

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
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/favicon.png", sizes: "512x512" }],
    shortcut: ["/favicon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sakhi'ksasa Holdings (Pty) Ltd",
    description:
      "We don't wait for validation. We make the first move. A self-funded holding company building enduring systems. Home of Vantage and Standpoint.",
    siteName: "Sakhi'ksasa Holdings",
    type: "website",
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Standpoint — Know where you stand. Fix where you lag." }],
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
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
