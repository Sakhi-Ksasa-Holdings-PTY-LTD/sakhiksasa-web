import type { Metadata } from "next";
import { Nav, Footer, CookieBanner } from "@/components/Layout";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal documents for Sakhi'ksasa Holdings (Pty) Ltd.",
};

const legalDocs = [
  { slug: "terms", title: "Terms of Service", desc: "The terms governing your use of Standpoint." },
  { slug: "privacy", title: "Privacy Policy", desc: "How we handle personal information under POPIA." },
  { slug: "ai-use", title: "AI Use Notice", desc: "How AI is used to generate briefings." },
  { slug: "acceptable-use", title: "Acceptable Use Policy", desc: "Rules for using the Service lawfully." },
  { slug: "data-processing", title: "Data Processing Addendum", desc: "POPIA operator terms." },
  { slug: "founding-client-addendum", title: "Founding Client Addendum", desc: "Pilot pricing and obligations." },
  { slug: "key-limitations", title: "Key Limitations", desc: "Plain-language summary of what Standpoint is and is not." },
];

export default function LegalIndexPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold">Legal documents</h1>
          <p className="mt-3 text-ink/60">
            Effective date: 24 October 2026. Sakhi&apos;ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07.
          </p>
          <div className="mt-10 space-y-3">
            {legalDocs.map((doc) => (
              <a
                key={doc.slug}
                href={`/legal/${doc.slug}`}
                className="block rounded-xl border border-line bg-white p-5 hover:border-gold/50 hover:shadow-sm"
              >
                <h2 className="font-heading text-lg font-semibold text-ink">{doc.title}</h2>
                <p className="mt-1 text-sm text-ink/50">{doc.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
