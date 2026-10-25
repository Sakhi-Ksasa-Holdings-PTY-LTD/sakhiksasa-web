import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Sakhi'ksasa Holdings (Pty) Ltd", template: "%s · Sakhi'ksasa Holdings" },
  description: "Sakhi'ksasa Holdings is a holding company that builds and owns businesses for the long term. Based in Durban, South Africa. Home of Standpoint.",
  keywords: ["Sakhi'ksasa Holdings", "holding company", "Durban", "South Africa", "Standpoint", "competitive intelligence"],
  authors: [{ name: "Sakhi'ksasa Holdings (Pty) Ltd" }],
  openGraph: {
    title: "Sakhi'ksasa Holdings (Pty) Ltd",
    description: "We build enduring businesses that outlast their founders and compound value across generations.",
    siteName: "Sakhi'ksasa Holdings",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Sakhi'ksasa Holdings", description: "We build enduring businesses. Based in Durban, South Africa." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: "Sakhi'ksasa Holdings (Pty) Ltd",
          description: "A holding company that builds and owns businesses for the long term.",
          foundingLocation: "Durban, KwaZulu-Natal, South Africa",
          areaServed: "Global",
          founder: { "@type": "Person", name: "Sanele T. Zwane" },
        }) }} />
      </head>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
