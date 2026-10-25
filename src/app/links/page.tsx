import type { Metadata } from "next";
import { Nav, Footer, CookieBanner } from "@/components/Layout";
import { COMPANY, STANDPOINT_URL, FLEET_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Links Hub",
  description: "All official links for Sakhi'ksasa Holdings — Standpoint app, systems, legal docs, contact.",
};

export default function LinksPage() {
  const links = [
    { label: "Standpoint App", url: STANDPOINT_URL, icon: "📊", desc: "Competitive intelligence SaaS" },
    { label: "The Fleet Dashboard", url: FLEET_URL, icon: "🤖", desc: "Autonomous agent system" },
    { label: "Email", url: `mailto:${COMPANY.email}`, icon: "✉️", desc: COMPANY.email },
  ];

  const legalLinks = [
    { label: "Terms of Service", url: "/legal/terms" },
    { label: "Privacy Policy", url: "/legal/privacy" },
    { label: "AI Use Notice", url: "/legal/ai-use" },
    { label: "Acceptable Use Policy", url: "/legal/acceptable-use" },
    { label: "Data Processing Addendum", url: "/legal/data-processing" },
    { label: "Founding Client Addendum", url: "/legal/founding-client-addendum" },
    { label: "Key Limitations", url: "/legal/key-limitations" },
  ];

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-2xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold text-center">Links Hub</h1>
          <p className="mt-3 text-center text-ink/60">
            All official links for Sakhi&apos;ksasa Holdings.
          </p>

          {/* Main links */}
          <div className="mt-10 space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target={l.url.startsWith("http") ? "_blank" : undefined}
                rel={l.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between rounded-xl border border-line bg-white p-4 hover:border-gold/50 hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{l.icon}</span>
                  <div>
                    <div className="font-medium text-ink">{l.label}</div>
                    <div className="text-xs text-ink/50">{l.desc}</div>
                  </div>
                </div>
                <span className="text-gold">→</span>
              </a>
            ))}
          </div>

          {/* Legal links */}
          <div className="mt-8">
            <h2 className="font-heading text-lg font-semibold text-ink/70">Legal documents</h2>
            <div className="mt-3 space-y-2">
              {legalLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  className="block rounded-lg border border-line/60 p-3 text-sm text-ink/70 hover:bg-line/20 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social (placeholder) */}
          <div className="mt-8">
            <h2 className="font-heading text-lg font-semibold text-ink/70">Social</h2>
            <p className="mt-2 text-sm text-ink/40">Social links will be added as they become available.</p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
