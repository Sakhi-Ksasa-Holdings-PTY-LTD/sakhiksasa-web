import { Nav, Footer, CookieBanner, Reveal, IconArrowRight, GlassOrbs, DivisionMark, ContactModal } from '@/components/chrome';
import { BRAND, visibleDivisions } from '@/config/brand';

/* ============================================================
   Home — company-first.
   Company name LARGE in the hero with the motto, then vision,
   values, and "The House" showing only visible divisions.
   Standpoint depth lives on /vantage/standpoint — NOT here.
============================================================ */

const SKYLINE_HEIGHTS = [62, 88, 48, 78, 56, 92, 44, 82, 60, 70, 50, 86];

export default function HomePage() {
  return (
    <div className="holdings">
      <GlassOrbs />
      <Nav />
      <main style={{ flex: 1 }}>
        {/* ---------- HERO: company name LARGE + motto ---------- */}
        <section id="home" className="h-hero" aria-label="Introduction">
          <div className="h-hero-grid" aria-hidden="true" />
          <div className="h-hero-inner">
            <div className="h-hero-eyebrow">Holding company · Est. {BRAND.founded}</div>
            <h1 className="h-hero-company">
              Sakhi&rsquo;ksasa<br />Holdings
            </h1>
            <p className="h-hero-motto">
              {BRAND.mottoLines.line1}
              <span className="accent">{BRAND.mottoLines.line2}</span>
            </p>
            <p className="h-hero-sub">{BRAND.positioning}</p>
            <div className="h-hero-cta">
              <a href="/vantage" className="h-btn h-btn-accent h-btn-lg">
                Explore Vantage <IconArrowRight />
              </a>
              <a href="#house" className="h-btn h-btn-ghost-light h-btn-lg">
                The House
              </a>
            </div>
          </div>
          <div className="h-skyline" aria-hidden="true">
            {SKYLINE_HEIGHTS.map((h, i) => (
              <div key={i} className="bar" style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }} />
            ))}
          </div>
        </section>

        {/* ---------- VISION + MISSION ---------- */}
        <section id="vision" className="h-section h-vision" aria-label="Vision and Mission">
          <div className="h-container h-vision-inner">
            <Reveal>
              <div className="h-eyebrow">Our Vision</div>
              <p className="h-vision-statement">
                To build enduring businesses that <span className="accent">outlast their founders</span> and compound value across generations.
              </p>
            </Reveal>
            <div className="h-vision-mission">
              <Reveal className="h-vision-label-wrap">
                <div className="h-vision-label">Mission</div>
              </Reveal>
              <Reveal>
                <p className="h-vision-mission-text">{BRAND.mission}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- VALUES ---------- */}
        <section id="values" className="h-section h-about" aria-label="Our values">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Our Values</div>
              <h2 className="h-section-title">Five standards. No exceptions.</h2>
            </Reveal>
            <div className="h-values-light">
              {BRAND.values.map((v, i) => (
                <Reveal key={v.title}>
                  <div className="h-value-light">
                    <div className="h-value-num">{String(i + 1).padStart(2, '0')}</div>
                    <h3 className="h-value-title">{v.title}</h3>
                    <p className="h-value-desc">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- THE HOUSE ---------- */}
        <section id="house" className="h-section h-product" aria-label="The House — divisions">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">The House</div>
              <h2 className="h-section-title">One company. Divisions with their own names and purpose.</h2>
              <p className="h-section-desc">
                Like any company that sells more than one product, each division carries its own
                name. What they share is the standard they are held to.
              </p>
            </Reveal>

            <div className="h-house-grid">
              {visibleDivisions.map((d) => (
                <Reveal key={d.slug}>
                  <a href={`/${d.slug}`} className="h-house-card h-house-card-division" aria-label={`${d.name} division`}>
                    <div className="h-house-card-top">
                      <DivisionMark size="md" />
                      <div className="h-house-status">
                        <span className="h-status-dot" aria-hidden="true" />
                        Live
                      </div>
                    </div>
                    <h3 className="h-house-name">{d.name}</h3>
                    <p className="h-house-desc">{d.descriptor}</p>
                    <span className="h-house-link">
                      Visit {d.name} <IconArrowRight />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Understated line for unreleased divisions — the ONLY trace */}
            <Reveal>
              <p className="h-house-note">{BRAND.houseNote}</p>
            </Reveal>
          </div>
        </section>

        {/* ---------- FOUNDER ---------- */}
        <section className="h-section-tight h-about" aria-label="Leadership">
          <div className="h-container">
            <Reveal>
              <div className="h-leader">
                <div className="h-leader-photo" aria-hidden="true">{BRAND.founder.initials}</div>
                <div>
                  <div className="h-leader-name">{BRAND.founder.name}</div>
                  <div className="h-leader-role">{BRAND.founder.role}</div>
                  <p className="h-leader-bio">{BRAND.founder.bio}</p>
                  <blockquote className="h-leader-quote">&ldquo;{BRAND.founder.quote}&rdquo;</blockquote>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
      <ContactModal />
    </div>
  );
}
