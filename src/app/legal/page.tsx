import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Legal Documents",
  description: "Legal documents for Sakhi'ksasa Holdings (Pty) Ltd and Standpoint.",
};

const docs = [
  { slug: "terms", title: "Terms of Service", desc: "The terms governing your use of Standpoint." },
  { slug: "privacy", title: "Privacy Policy", desc: "How we handle personal information under POPIA." },
  { slug: "ai-use", title: "AI Use Notice", desc: "How AI is used to generate briefings." },
  { slug: "acceptable-use", title: "Acceptable Use Policy", desc: "Rules for using the Service lawfully." },
  { slug: "data-processing", title: "Data Processing Addendum", desc: "POPIA operator terms." },
  { slug: "founding-client-addendum", title: "Founding Client Addendum", desc: "Pilot pricing and obligations." },
  { slug: "key-limitations", title: "Key Limitations", desc: "Plain-language summary of what Standpoint is and is not." },
];

export default function LegalPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section className="section container" style={{ maxWidth: '48rem' }}>
          <div className="section-label">Legal</div>
          <h1>Legal documents</h1>
          <p style={{ color: 'var(--muted)', marginTop: '8px', marginBottom: '32px' }}>
            Effective date: 24 October 2026. Sakhi&rsquo;ksasa Holdings (Pty) Ltd &middot; CIPC 2026/405064/07.
          </p>
          {docs.map((d) => (
            <a key={d.slug} href={`/legal/${d.slug}`} className="card" style={{ display: 'block', marginBottom: '12px' }}>
              <div className="card-title">{d.title}</div>
              <p className="card-desc">{d.desc}</p>
            </a>
          ))}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
