import type { Metadata } from "next";
import { Nav, Footer, CookieBanner } from "@/components/Layout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "About",
  description: "About Sakhi'ksasa Holdings (Pty) Ltd — founded by Sanele Zwane in Vryheid, KZN.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-4xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold">About Sakhi&apos;ksasa Holdings</h1>
          <div className="mt-8 space-y-6 text-ink/70">
            <p className="text-lg">
              {COMPANY.founder.bio}
            </p>
            <p>
              {COMPANY.name} is a private company registered in South Africa (CIPC {COMPANY.regNumber}),
              headquartered in {COMPANY.address}. The group builds competitive-intelligence and
              business systems for South African SMEs — starting with{" "}
              <a href="/standpoint" className="text-gold hover:underline">Standpoint</a>.
            </p>
            <p>
              The mission is simple: give South African businesses the same tools the world&apos;s
              largest companies use to understand their competitive landscape — built here, priced
              for here, and accountable here.
            </p>
          </div>

          {/* Founder card */}
          <div className="mt-12 rounded-2xl border border-line p-6">
            <h2 className="font-heading text-2xl font-bold">{COMPANY.founder.name}</h2>
            <div className="text-sm text-gold">{COMPANY.founder.role}</div>
            <p className="mt-3 text-sm text-ink/60">
              Based in {COMPANY.founder.location}. Building Standpoint and the systems pipeline
              of {COMPANY.shortName} with a focus on accessible, decision-support tools for SMEs.
            </p>
          </div>

          {/* Company details */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line p-4">
              <div className="text-sm font-medium text-gold">Registration</div>
              <div className="mt-1 text-ink/70">{COMPANY.regNumber}</div>
            </div>
            <div className="rounded-xl border border-line p-4">
              <div className="text-sm font-medium text-gold">Information Officer</div>
              <div className="mt-1 text-ink/70">{COMPANY.ioName} (registered {COMPANY.ioRegisteredDate})</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
