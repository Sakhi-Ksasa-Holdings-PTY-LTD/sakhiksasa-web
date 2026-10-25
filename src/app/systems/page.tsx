import type { Metadata } from "next";
import { Nav, Footer, CookieBanner } from "@/components/Layout";
import systemsData from "@/config/systems.json";

export const metadata: Metadata = {
  title: "Systems",
  description: "The systems built by Sakhi'ksasa Holdings — live products and pipeline.",
};

export default function SystemsPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold">Systems</h1>
          <p className="mt-3 text-ink/60">
            What we build. What we are building. What comes next.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {systemsData.map((s) => (
              <div key={s.id} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold" style={{ color: s.accent }}>
                    {s.name}
                  </h2>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      s.status === "Live"
                        ? "bg-standpoint-teal/15 text-standpoint-teal"
                        : "bg-gold/15 text-gold"
                    }`}
                  >
                    {s.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink/60">{s.summary}</p>
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs font-medium text-gold hover:underline"
                  >
                    Visit →
                  </a>
                ) : (
                  <span className="mt-4 inline-block text-xs text-ink/40">Details to be announced</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
