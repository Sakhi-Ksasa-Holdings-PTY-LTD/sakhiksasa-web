import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { COMPANY } from "@/config/company";

export default function HomePage() {
  const skylineBars = [
    { h: '60%', c: 'var(--brand-primary)' },
    { h: '90%', c: 'var(--brand-accent)' },
    { h: '45%', c: 'var(--brand-primary)' },
    { h: '75%', c: 'var(--brand-accent)' },
    { h: '55%', c: 'var(--brand-primary)' },
    { h: '85%', c: 'var(--brand-accent)' },
  ];
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <section className="hero">
          <div className="hero-skyline">
            {skylineBars.map((b, i) => (
              <div key={i} className="bar" style={{ ['--bar-h' as string]: b.h, height: b.h, background: b.c }} />
            ))}
          </div>
          <div className="hero-inner">
            <h1 className="hero-motto">
              We don&rsquo;t wait for validation.<br />
              <span className="accent">We make the first move.</span>
            </h1>
            <p className="hero-sub">
              Sakhi&rsquo;ksasa Holdings builds and owns businesses for the long term. We launch products that solve real problems, run them to a high standard, and reinvest what they earn into the next.
            </p>
            <div className="hero-cta-group">
              <a href="/about" className="btn btn-accent">About Sakhi&rsquo;ksasa</a>
              <a href="/standpoint" className="btn btn-outline" style={{ color: 'var(--surface)', borderColor: 'rgba(243,240,234,0.3)' }}>Explore Standpoint</a>
            </div>
          </div>
        </section>

        {/* Product — Standpoint */}
        <section className="section container">
          <div className="section-label">Our Product</div>
          <div className="product-block">
            <div style={{ flex: 1 }}>
              <h3>Standpoint</h3>
              <p style={{ marginTop: '12px' }}>
                A competitive-intelligence platform that turns scattered competitor signals into a single 0&ndash;100 Standing Index. Built for businesses that want to know where they lead, where they lag, and what to do about it.
              </p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/standpoint" className="btn btn-accent">Learn more</a>
                <a href={COMPANY.standpoint.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: 'var(--surface)', borderColor: 'rgba(243,240,234,0.3)' }}>Launch Standpoint &rarr;</a>
              </div>
            </div>
            <div className="product-skyline">
              {[70, 95, 55, 85, 60, 78, 45, 90].map((h, i) => (
                <div key={i} className="bar" style={{ height: `${h}%`, background: `linear-gradient(180deg, ${i % 2 ? 'var(--brand-accent)' : 'var(--brand-primary)'}, transparent)` }} />
              ))}
            </div>
          </div>
        </section>

        {/* Vision teaser */}
        <section className="section container">
          <div className="section-label">Vision</div>
          <h2 className="section-title" style={{ maxWidth: '900px' }}>{COMPANY.vision}</h2>
          <p className="section-desc">{COMPANY.mission}</p>
          <a href="/vision-mission" className="btn btn-primary">Read our vision &amp; mission</a>
        </section>

        {/* Leadership */}
        <section className="section container" style={{ background: 'var(--surface-alt)', borderRadius: '20px' }}>
          <div className="section-label">Leadership</div>
          <div className="leader-card" style={{ marginTop: '24px' }}>
            <div className="leader-photo">{COMPANY.founder.initials}</div>
            <div>
              <div className="leader-name">{COMPANY.founder.name}</div>
              <div className="leader-role">{COMPANY.founder.role}</div>
              <p className="leader-bio" style={{ maxWidth: '600px' }}>{COMPANY.founder.bio}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
