'use client';

import { Nav, Footer, SkylineHero, CookieBanner } from "@/components/Layout";
import { COMPANY, STANDPOINT_URL } from "@/config/company";
import systemsData from "@/config/systems.json";

export default function HomePage() {
  const liveSystems = systemsData.filter((s) => s.status === "Live");
  const foundingRemaining = COMPANY.foundingPilot.maxSlots;

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        {/* Hero */}
        <SkylineHero
          title="Systems built to give businesses the upper hand"
          subtitle={COMPANY.pledge}
        />

        {/* Standpoint feature block */}
        <section className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="text-sm font-medium text-standpoint-coral">Live product</span>
              <h2 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
                Standpoint
              </h2>
              <p className="mt-4 text-lg text-ink/70">
                Know where you stand. Fix where you lag. Standpoint turns scattered
                competitor signals into a single 0–100 Standing Index — built for
                South African SMEs.
              </p>
              <div className="mt-6 flex gap-4">
                <a
                  href="/standpoint"
                  className="rounded-lg bg-standpoint-coral px-6 py-3 text-sm font-medium text-white hover:opacity-90"
                >
                  Explore Standpoint
                </a>
                <a
                  href={STANDPOINT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-line px-6 py-3 text-sm font-medium text-ink hover:bg-line/30"
                >
                  Launch app →
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex items-end gap-2">
                {[70, 95, 55, 85, 60, 78, 45, 90].map((h, i) => (
                  <div
                    key={i}
                    className="w-8 rounded-t md:w-10"
                    style={{
                      height: `${h}%`,
                      background: `linear-gradient(180deg, ${["#FF5E3A", "#FFB347", "#14B8A6", "#8B5CF6"][i % 4]}, ${["#FF5E3A", "#FFB347", "#14B8A6", "#8B5CF6"][i % 4]}55)`,
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 text-sm text-ink/50">Standing Index — live competitive skyline</div>
            </div>
          </div>
        </section>

        {/* Systems pipeline teaser */}
        <section className="bg-ink text-paper">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="font-heading text-3xl font-bold">Systems pipeline</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {systemsData.map((s) => (
                <div key={s.id} className="rounded-xl border border-paper/10 bg-paper/5 p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-semibold" style={{ color: s.accent }}>
                      {s.name}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        s.status === "Live"
                          ? "bg-standpoint-teal/20 text-standpoint-teal"
                          : "bg-gold/20 text-gold"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-paper/60">{s.summary}</p>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-gold hover:underline"
                    >
                      Visit →
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a href="/systems" className="text-sm text-gold hover:underline">
                See all systems →
              </a>
            </div>
          </div>
        </section>

        {/* Founding-partner banner */}
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-ink">
              Founding client pilot — {foundingRemaining} of {COMPANY.foundingPilot.maxSlots} seats remaining
            </h2>
            <p className="mt-3 text-ink/70">
              Be among the first {COMPANY.foundingPilot.maxSlots} businesses to use Standpoint at{" "}
              <strong>{COMPANY.foundingPilot.price}/mo for {COMPANY.foundingPilot.duration}</strong> (was{" "}
              {COMPANY.foundingPilot.standardPrice}/mo). Setup fee waived.
            </p>
            <a
              href="/standpoint"
              className="mt-5 inline-block rounded-lg bg-gold px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Claim a founding seat
            </a>
          </div>
        </section>

        {/* About snippet */}
        <section className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold">Built in South Africa, for South Africa</h2>
              <p className="mt-4 text-ink/70">
                {COMPANY.founder.bio}
              </p>
              <div className="mt-5 text-sm text-ink/50">
                — {COMPANY.founder.name}, {COMPANY.founder.role}
              </div>
            </div>
            <div className="rounded-2xl border border-line p-6">
              <div className="text-sm font-medium text-gold">Headquarters</div>
              <div className="mt-1 text-ink/70">{COMPANY.address}</div>
              <div className="mt-4 text-sm font-medium text-gold">Registration</div>
              <div className="mt-1 text-ink/70">{COMPANY.regNumber}</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
