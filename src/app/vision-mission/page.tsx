import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Our vision, mission, values, and strategic goals. Sakhi'ksasa Holdings builds enduring businesses that compound value across generations.",
};

export default function VisionMissionPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section className="section container">
          <div className="section-label">Vision</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', maxWidth: '900px', marginBottom: '24px' }}>{COMPANY.vision}</h1>
        </section>

        <section className="section container" style={{ background: 'var(--surface-alt)', borderRadius: '20px' }}>
          <div className="section-label">Mission</div>
          <p style={{ fontSize: 'var(--text-xl)', maxWidth: '700px' }}>{COMPANY.mission}</p>
        </section>

        <section className="section container">
          <div className="section-label">Values</div>
          <h2 className="section-title">What we stand for</h2>
          {COMPANY.values.map((v, i) => (
            <div key={i} className="value-item">
              <div className="value-marker">{i + 1}</div>
              <div>
                <div className="value-title">{v.title}</div>
                <div className="value-desc">{v.desc}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="section container" style={{ background: 'var(--surface-alt)', borderRadius: '20px' }}>
          <div className="section-label">Strategic Goals</div>
          <h2 className="section-title">What we commit to</h2>
          <ul style={{ listStyle: 'none', marginTop: '16px' }}>
            {COMPANY.goals.map((g, i) => (
              <li key={i} style={{ padding: '12px 0', borderBottom: '1px solid var(--border)', fontSize: 'var(--text-base)', color: 'var(--ink)' }}>
                {g}
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
