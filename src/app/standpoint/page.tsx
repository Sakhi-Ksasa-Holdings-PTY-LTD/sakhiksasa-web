import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Standpoint",
  description: "Competitive-intelligence platform by Sakhi'ksasa Holdings. Standing Index, monthly AI briefings, blind-spot tracking.",
};

export default function StandpointPage() {
  const s = COMPANY.standpoint;
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-motto" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Know where you stand.<br /><span className="accent">Fix where you lag.</span></h1>
            <p className="hero-sub">{s.description}</p>
          </div>
        </section>

        <section className="section container">
          <div className="section-label">How it works</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '24px' }}>
            {[{t:'Signals',d:'SEO, social, ad spend, reviews, pricing collected from public sources + providers.'},{t:'Standing Index 0\u2013100',d:'All signals normalised into one number. See where you rank against every competitor.'},{t:'Monthly AI briefing',d:'A written report with your standing, blind spots, trends, and 3\u20135 prioritised actions. Coming soon.'},{t:'Blind-spot tracking',d:'Where you trail the leader by 25+ points. Flagged in plain English. Free for 30 days.'}].map((step, i) => (
              <div key={i} className="card">
                <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{['\uD83D\uDCE1','\uD83D\uDCCA','\uD83D\uDCC4','\uD83D\uDC41\uFE0F'][i]}</div>
                <div className="card-title">{step.t}</div>
                <p className="card-desc">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Plans for every stage</h2>
          <p className="section-desc">All prices excl. VAT &middot; Annual: 2 months free</p>
          <div className="pricing-grid" style={{ marginTop: '24px' }}>
            {s.tiers.map((tier, i) => (
              <div key={i} className={`pricing-card ${tier.featured ? 'featured' : ''}`}>
                <div className="pricing-name" style={{ color: tier.featured ? 'var(--brand-primary)' : 'var(--ink)' }}>{tier.name}</div>
                <div className="pricing-price">{tier.price}<small>{tier.period}</small></div>
                <ul className="pricing-features" style={{ marginTop: '12px' }}>
                  {tier.features.map((f, j) => <li key={j}>&#10003; {f}</li>)}
                </ul>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '16px', textAlign: 'center', justifyContent: 'center', fontSize: 'var(--text-xs)', padding: '10px 16px' }}>Choose {tier.name}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="section container" style={{ background: 'var(--surface-alt)', borderRadius: '20px' }}>
          <div className="section-label">Founding Pilot</div>
          <h2 className="section-title">First 3 clients: R500/mo for 6 months</h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--muted)', maxWidth: '600px' }}>Starter features at R500/mo (was R1,000). Setup waived + free assisted setup. In return: a testimonial, a case study, and a monthly 30-minute feedback call.</p>
          <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ marginTop: '16px' }}>Claim a founding seat</a>
        </section>

        <section className="section container">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently asked</h2>
          {s.faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <div className="faq-q">{faq.q}</div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
