import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: "variable",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sakhiksasa-web.onrender.com"),
  title: {
    default: "Sakhi'ksasa Holdings (Pty) Ltd — We don't wait for validation.",
    template: "%s · Sakhi'ksasa Holdings",
  },
  description:
    "Sakhi'ksasa Holdings is a self-funded, privately-owned holding company that builds, owns, and operates businesses for the long term. Based in South Africa. Home of Standpoint.",
  keywords: [
    "Sakhi'ksasa Holdings",
    "holding company",
    "South Africa",
    "Standpoint",
    "competitive intelligence",
    "self-funded",
  ],
  authors: [{ name: "Sakhi'ksasa Holdings (Pty) Ltd" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "512x512" },
    ],
    shortcut: ["/favicon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Sakhi'ksasa Holdings (Pty) Ltd",
    description:
      "We don't wait for validation. We make the first move. A self-funded holding company building enduring businesses in South Africa.",
    siteName: "Sakhi'ksasa Holdings",
    type: "website",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "Sakhi'ksasa Holdings" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi'ksasa Holdings",
    description:
      "We build enduring businesses that outlast their founders. Based in South Africa.",
    images: ["/icon.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sakhi'ksasa Holdings (Pty) Ltd",
              description:
                "A self-funded holding company that builds, owns, and operates businesses for the long term.",
              foundingLocation: "South Africa",
              areaServed: "Global",
              founder: { "@type": "Person", name: "Sanele T. Zwane" },
            }),
          }}
        />
      </head>
      <body>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
