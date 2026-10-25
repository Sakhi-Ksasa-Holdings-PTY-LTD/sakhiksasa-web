import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Sakhi'ksasa Holdings (Pty) Ltd — Systems Built to Give Businesses the Upper Hand",
    template: "%s · Sakhi'ksasa Holdings",
  },
  description:
    "Sakhi'ksasa Holdings is a South African holding company building competitive-intelligence and business systems. Home of Standpoint.",
  keywords: ["Sakhi'ksasa Holdings", "Standpoint", "competitive intelligence", "South Africa", "Vryheid", "KZN"],
  authors: [{ name: "Sakhi'ksasa Holdings (Pty) Ltd" }],
  openGraph: {
    title: "Sakhi'ksasa Holdings — Systems Built to Give Businesses the Upper Hand",
    description: "Home of Standpoint — competitive intelligence for South African SMEs.",
    siteName: "Sakhi'ksasa Holdings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakhi'ksasa Holdings",
    description: "Home of Standpoint — competitive intelligence for South African SMEs.",
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
              description: "South African holding company building competitive-intelligence and business systems.",
              foundingLocation: "Vryheid, KwaZulu-Natal, South Africa",
              areaServed: "South Africa",
              founder: { "@type": "Person", name: "Sanele Zwane" },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
