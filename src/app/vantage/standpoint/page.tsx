import type { Metadata } from "next";
import { Nav, Footer, CookieBanner, Reveal, GlassOrbs, DivisionMark, ContactModal } from '@/components/chrome';
import { BRAND } from '@/config/brand';

/* ============================================================
   Standpoint — product page (inside Vantage).
   What it is · Standing Index (0–100) · monthly briefings ·
   pricing (excl. VAT) · 3 Founding Client slots · app CTA.
   Depth lives ONLY here — the home page stays company-first.

   No "Request a demo" anywhere (founder instruction): the app
   itself is live, so CTAs point straight at it.
============================================================ */

const sp = BRAND.standpoint;

export const metadata: Metadata = {
  title: "Standpoint — Know where you stand. Fix where you lag.",
  description: sp.description,
};

const ASSETS = '/standpoint-assets';

export default function StandpointPage() {
  return (
    <div className="holdings">
      <GlassOrbs />
      <Nav />
      <main style={{ flex: 1 }}>
        {/* ---------- PRODUCT HERO ---------- */}
        <section className="h-hero" aria-label="Standpoint product" style={{ padding: 'var(--h-space-16) 0 var(--h-space-12)' }}>
          <div className="h-hero-grid" aria-hidden="true" />
          <div className="h-hero-inner">
            <figure className="h-cover-figure h-cover-figure-sm">
              <DivisionMark size="md" />
              <figcaption className="sr-only-h">The Standpoint system mark.</figcaption>
            </figure>
            <div className="h-hero-eyebrow">A Vantage product · {BRAND.shortName} Holdings · Live</div>
            <h1 className="h-hero-division-name">Standpoint</h1>
            <p className="h-hero-motto-line">{sp.tagline}</p>
            <p className="h-hero-sub" style={{ maxWidth: '58ch' }}>{sp.description}</p>
            <div className="h-hero-cta">
              <a href={sp.appUrl} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-accent h-btn-lg">
                Launch the app
              </a>
              <a href="#h-pricing" className="h-btn h-btn-ghost-light h-btn-lg">
                See pricing
              </a>
            </div>
          </div>
        </section>

        {/* ---------- WATCH: INTRO VIDEO ---------- */}
        <section className="h-section h-product" aria-label="Introducing Standpoint — video" style={{ paddingTop: 'var(--h-space-10)' }}>
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Watch · 14 seconds</div>
              <h2 className="h-section-title">Introducing Standpoint.</h2>
            </Reveal>
            <Reveal>
              <div className="h-video-frame h-video-frame-wide">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={`${ASSETS}/video/standpoint_intro_poster.jpg`}
                  className="h-video"
                >
                  <source src={`${ASSETS}/video/standpoint_intro_16x9.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Reveal>
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

            {/* Watch: how it works — the 22-second walkthrough */}
            <Reveal>
              <div className="h-eyebrow" style={{ marginTop: 'var(--h-space-10)' }}>Watch · 22 seconds</div>
              <h2 className="h-section-title">How Standpoint works.</h2>
              <div className="h-video-frame h-video-frame-wide" style={{ marginTop: 'var(--h-space-5)' }}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={`${ASSETS}/video/standpoint_how_it_works_poster.jpg`}
                  className="h-video"
                >
                  <source src={`${ASSETS}/video/standpoint_how_it_works_16x9.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="h-section-desc" style={{ fontSize: '0.85rem', marginTop: 'var(--h-space-3)', opacity: 0.7 }}>
                Music: &ldquo;Long Note Two&rdquo; — Kevin MacLeod (incompetech.com), licensed under CC-BY 4.0.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------- INSIDE THE SYSTEM (real product screens) ---------- */}
        <section className="h-section h-about" aria-label="Inside Standpoint">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Inside the system</div>
              <h2 className="h-section-title">The dashboard, the signals, the briefings.</h2>
              <p className="h-section-desc">
                Every screen, one glance: your score, your gaps, and the month's next moves.
                <em> (Interface shown with sample data.)</em>
              </p>
            </Reveal>

            <div className="h-gallery">
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/ui_01_dashboard_1920x1080.png`}
                    alt="Standpoint dashboard: the Standing Index gauge at 68 for Sakhi'ksasa Holdings, a category benchmark ranking you against Haefele Software, Brave Digital and CubeZoo, blind-spot flags and the monthly briefing card."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>The dashboard — your Standing Index, benchmark and flags in one view. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/ui_02_signals_1920x1080.png`}
                    alt="Signal breakdown table showing SEO, social, ad spend, reviews and pricing scores for Sakhi'ksasa Holdings, with your position versus the category leader and trend arrows."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>The five signals behind your score — leads green, lags red. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/ui_03_blindspots_1920x1080.png`}
                    alt="Blind spots screen: a 31-point ad-spend gap behind Haefele Software and a 14-point social gap behind Brave Digital, each with a plain-English action to take."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>Blind spots — each gap comes with what to do about it. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/ui_04_briefing_1920x1080.png`}
                    alt="The October monthly briefing for Sakhi'ksasa Holdings: what moved, what it means, and the next moves worth making."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>The monthly briefing — what moved, what it means, next moves. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/ui_05_competitors_1920x1080.png`}
                    alt="Competitor set comparison: Sakhi'ksasa Holdings versus Haefele Software, Brave Digital and CubeZoo, scored across all five signals, side by side."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>You vs the competitors that matter — every signal, side by side. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- PRICING (ZAR final — company not VAT-registered) ---------- */}
        <section id="h-pricing" className="h-section h-product" aria-label="Pricing">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Pricing</div>
              <h2 className="h-section-title">Tiered for every stage of growth.</h2>
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
                <div className="h-founding-badge">
                  {`Founding clients · ${sp.foundingPilot.slotsRemaining} of ${sp.foundingPilot.slots} slot${Number(sp.foundingPilot.slots) === 1 ? '' : 's'} open`}
                </div>
                <p className="h-founding-text">{sp.foundingPilot.text}</p>
                <button data-contact-open="Standpoint — sales" className="h-btn h-btn-primary h-btn-lg">
                  Claim a founding slot
                </button>
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
                <a href={sp.appUrl} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-accent h-btn-lg">
                  Launch the app
                </a>
                <a href="#h-pricing" className="h-btn h-btn-ghost-light h-btn-lg">
                  See pricing
                </a>
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
