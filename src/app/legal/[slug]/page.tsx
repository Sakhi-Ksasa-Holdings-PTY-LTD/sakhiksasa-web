import { notFound } from "next/navigation";
import { Nav, Footer, CookieBanner } from "@/components/Layout";

const legalDocs: Record<string, string> = {
  terms: "# Terms of Service\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here — the attorney-reviewed version is in the Standpoint repo at /legal/terms.md]*",
  privacy: "# Privacy Policy\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here — the attorney-reviewed version is in the Standpoint repo at /legal/privacy.md]*",
  "ai-use": "# AI Use Notice\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here]*",
  "acceptable-use": "# Acceptable Use Policy\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here]*",
  "data-processing": "# Data Processing Addendum\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here]*",
  "founding-client-addendum": "# Founding Client Addendum\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here]*",
  "key-limitations": "# Key Limitations\n\n**Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07**\n\nEffective date: 24/10/2026\n\n*[Final text to be pasted here]*",
};

export function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({ slug }));
}

export default function LegalDocPage({ params }: { params: { slug: string } }) {
  const content = legalDocs[params.slug];
  if (!content) notFound();

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-6 py-20">
          <a href="/legal" className="text-sm text-gold hover:underline">← All legal documents</a>
          <div className="mt-8 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">{content}</div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
