import type { Metadata } from "next";
import { Nav, Footer, CookieBanner, Reveal } from '@/components/chrome';
import { BRAND } from '@/config/brand';

/* ============================================================
   Standpoint — product page (inside Vantage).
   What it is · Standing Index (0–100) · monthly briefings ·
   pricing (excl. VAT) · 3 Founding Client slots · demo CTA.
   Depth lives ONLY here — the home page stays company-first.

   Demo: read-only showcase demo not built yet → "Request a demo"
   email button (mailto). Flip BRAND.standpoint.demoUrl when live.
============================================================ */

const sp = BRAND.standpoint;

export const metadata: Metadata = {
  title: "Standpoint — Know where you stand. Fix where you lag.",
  description: sp.description,
};

const ASSETS = '/standpoint-assets';

export default function StandpointPage() {
  const demoHref = sp.demoUrl
    ? sp.demoUrl
    : `mailto:${BRAND.email}?subject=${encodeURIComponent(sp.demoEmailSubject)}`;
  const demoLabel = sp.demoUrl ? 'See the live demo' : 'Request a demo';

  return (
    <div className="holdings">
      <Nav />
      <main style={{ flex: 1 }}>
        {/* ---------- PRODUCT HERO ---------- */}
        <section className="h-hero" aria-label="Standpoint product" style={{ padding: 'var(--h-space-16) 0 var(--h-space-12)' }}>
          <div className="h-hero-grid" aria-hidden="true" />
          <div className="h-hero-inner">
            <div className="h-hero-eyebrow">A Vantage product · {BRAND.shortName} Holdings · Live</div>
            <h1 className="h-hero-division-name">Standpoint</h1>
            <p className="h-hero-motto-line">{sp.tagline}</p>
            <p className="h-hero-sub" style={{ maxWidth: '58ch' }}>{sp.description}</p>
            <div className="h-hero-cta">
              <a href={demoHref} target={sp.demoUrl ? '_blank' : undefined} rel={sp.demoUrl ? 'noopener noreferrer' : undefined} className="h-btn h-btn-accent h-btn-lg">
                {demoLabel}
              </a>
              <a href={sp.appUrl} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-ghost-light h-btn-lg">
                Launch the app
              </a>
            </div>
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="h-section h-product" aria-label="How Standpoint works">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">How it works</div>
              <h2 className="h-section-title">Five signals. One score. Plain-English answers.</h2>
              <p className="h-section-desc">
                Standpoint collects the signals that actually move a market, combines them into
                one Standing Index, and explains — in plain English — where you lead, where you
                lag, and what to do about it.
              </p>
            </Reveal>

            {/* Signal chips */}
            <Reveal>
              <div className="h-signals" role="list" aria-label="The five signals">
                {sp.signals.map((s) => (
                  <span className="h-signal-chip" role="listitem" key={s}>{s}</span>
                ))}
                <span className="h-signal-arrow" aria-hidden="true">→</span>
                <span className="h-signal-index" role="listitem">Standing Index 0–100</span>
              </div>
            </Reveal>

            <div className="h-pillars">
              {sp.pillars.map((p) => (
                <Reveal key={p.title}>
                  <div className="h-pillar">
                    <h3 className="h-pillar-title">{p.title}</h3>
                    <p className="h-pillar-desc">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- SEE IT (asset gallery + video — fixes the display bug) ---------- */}
        <section className="h-section h-about" aria-label="See Standpoint">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">See it</div>
              <h2 className="h-section-title">The index, the signals, the briefings — in one view.</h2>
            </Reveal>

            <Reveal>
              <div className="h-video-frame">
                <video
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={`${ASSETS}/video/standpoint_video_poster.jpg`}
                  className="h-video"
                >
                  <source src={`${ASSETS}/video/standpoint_video_9x16_1080x1920.mp4`} type="video/mp4" />
                  <track kind="captions" src={`${ASSETS}/video/standpoint_video_captions.vtt`} srcLang="en" label="English" default />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Reveal>

            <div className="h-gallery">
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/standpoint_01_hero_16x9_1920x1080.png`}
                    alt="Standpoint Standing Index gauge on a dark CRT-style screen — Know where you stand. Fix where you lag."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>The Standing Index — one 0–100 score from five signals.</figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/standpoint_02_convergence_16x9_1920x1080.png`}
                    alt="Five competitive signals — SEO, social, ad spend, reviews, pricing — converging into one Standing Index score."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>Five signals converge into one score.</figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/standpoint_03_blindspots_16x9_1920x1080.png`}
                    alt="Blind spots where you trail the category leader by 25+ points, flagged in plain English. Illustrative sample data."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>Blind spots, flagged in plain English. <em>(Sample data)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/standpoint_04_briefing_16x9_1920x1080.png`}
                    alt="A clean briefing-document card with clear next moves for the month. Illustrative sample data."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>Clear next moves, in a written briefing. <em>(Sample data)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/standpoint_05_brandclose_16x9_1920x1080.png`}
                    alt="Sakhi'ksasa x Standpoint brand lockup — We make the first move. Start free."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>Sakhi&rsquo;ksasa x Standpoint — we make the first move.</figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- PRICING (excl. VAT) ---------- */}
        <section className="h-section h-product" aria-label="Pricing">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Pricing</div>
              <h2 className="h-section-title">Tiered for every stage of business.</h2>
              <p className="h-section-desc">{sp.vatNote} Annual billing gets two months free.</p>
            </Reveal>
            <div className="h-tiers-grid">
              {sp.tiers.map((t) => (
                <Reveal key={t.name}>
                  <div className="h-tier">
                    <div className="h-tier-name">{t.name}</div>
                    <div className="h-tier-price">{t.monthly}</div>
                    <div className="h-tier-annual">{t.annual}</div>
                    <div className="h-tier-note">{t.note}</div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Founding Client slots */}
            <Reveal>
              <div className="h-founding">
                <div className="h-founding-badge">Founding clients · {sp.foundingPilot.slots} slots</div>
                <p className="h-founding-text">{sp.foundingPilot.text}</p>
                <a href={`mailto:${BRAND.email}?subject=${encodeURIComponent('Founding client — Standpoint')}`} className="h-btn h-btn-primary h-btn-lg">
                  Claim a founding slot
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section className="h-section h-vision" aria-label="Get started">
          <div className="h-container h-vision-inner" style={{ textAlign: 'center' }}>
            <Reveal>
              <h2 className="h-vision-statement" style={{ margin: '0 auto var(--h-space-4)' }}>
                Know where you stand. <span className="accent">Fix where you lag.</span>
              </h2>
              <div style={{ display: 'flex', gap: 'var(--h-space-2)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href={demoHref} target={sp.demoUrl ? '_blank' : undefined} rel={sp.demoUrl ? 'noopener noreferrer' : undefined} className="h-btn h-btn-accent h-btn-lg">
                  {demoLabel}
                </a>
                <a href={sp.appUrl} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-ghost-light h-btn-lg">
                  Launch the app
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
