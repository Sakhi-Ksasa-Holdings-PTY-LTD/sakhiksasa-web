import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "About",
  description: "Sakhi'ksasa Holdings is a Durban-based, Black-owned, founder-led holding company, built for long-term value.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section className="section container">
          <div className="section-label">About</div>
          <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: '24px' }}>Who we are</h1>
          <p style={{ fontSize: 'var(--text-lg)', maxWidth: '700px' }}>
            Sakhi&rsquo;ksasa Holdings (Pty) Ltd is a Durban-based, Black-owned, founder-led holding company, built for long-term value. We build and own businesses, launch products that solve real problems, and reinvest what they earn into the next.
          </p>
          
          <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div className="card">
              <div className="card-title">Durban-based</div>
              <p className="card-desc">Headquartered in Durban, KwaZulu-Natal. We prove that world-class companies can be built from anywhere.</p>
            </div>
            <div className="card">
              <div className="card-title">Black-owned</div>
              <p className="card-desc">100% Black-owned and founder-led. Our identity is a strength, not a qualifier.</p>
            </div>
            <div className="card">
              <div className="card-title">Founder-led</div>
              <p className="card-desc">Led by Sanele T. Zwane, who sets strategy, capital allocation, and product vision.</p>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="section-label">Leadership</div>
          <div className="leader-card" style={{ marginTop: '24px', background: 'var(--surface-alt)', borderRadius: '16px', padding: '32px' }}>
            <div className="leader-photo" style={{ width: '96px', height: '96px', fontSize: 'var(--text-3xl)' }}>{COMPANY.founder.initials}</div>
            <div>
              <div className="leader-name" style={{ fontSize: 'var(--text-2xl)' }}>{COMPANY.founder.name}</div>
              <div className="leader-role">{COMPANY.founder.role}</div>
              <p className="leader-bio" style={{ maxWidth: '600px', marginTop: '12px' }}>{COMPANY.founder.bio}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
