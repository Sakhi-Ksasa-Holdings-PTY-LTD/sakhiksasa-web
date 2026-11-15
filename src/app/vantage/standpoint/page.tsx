import type { Metadata } from "next";
import { Nav, Footer, CookieBanner, Reveal, GlassOrbs, DivisionMark, ContactModal } from '@/components/chrome';
import { BRAND } from '@/config/brand';

/* ============================================================
   Standpoint — product page (inside Vantage).
   What it is · Standing Index (0–100) · Leak Ledger ·
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

        {/* ---------- WATCH: PRODUCT FILM ---------- */}
        <section className="h-section h-product" aria-label="Standpoint product film" style={{ paddingTop: 'var(--h-space-10)' }}>
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Watch · 16 seconds</div>
              <h2 className="h-section-title">Know where you stand.</h2>
            </Reveal>
            <Reveal>
              {/* Desktop: 16:9 film. Mobile: 9:16 reel. Switch by CSS breakpoint. */}
              <div className="h-video-frame h-video-frame-wide h-video-desktop">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={`${ASSETS}/video/standpoint_x_poster.jpg`}
                  className="h-video"
                  aria-label="Standpoint product film — know where you stand"
                >
                  <source src={`${ASSETS}/video/standpoint_x_16x9_v0.mp4`} type="video/mp4" />
                  <source src={`${ASSETS}/video/standpoint_x_16x9_v0.webm`} type="video/webm" />
                  Your browser does not support the video tag. <a href={`${ASSETS}/video/standpoint_x_16x9_v0.mp4`}>Watch the film</a>.
                </video>
              </div>
              <div className="h-video-frame h-video-mobile">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={`${ASSETS}/video/standpoint_reel_poster.jpg`}
                  className="h-video"
                  aria-label="Standpoint product film — know where you stand"
                >
                  <source src={`${ASSETS}/video/standpoint_reel_9x16_v0.mp4`} type="video/mp4" />
                  <source src={`${ASSETS}/video/standpoint_reel_9x16_v0.webm`} type="video/webm" />
                  Your browser does not support the video tag. <a href={`${ASSETS}/video/standpoint_reel_9x16_v0.mp4`}>Watch the film</a>.
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

            {/* Feature gallery — 4 cards */}
            <Reveal>
              <div className="h-eyebrow" style={{ marginTop: 'var(--h-space-10)' }}>Inside the system</div>
              <div className="h-feature-gallery" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--h-space-4)', marginTop: 'var(--h-space-5)' }}>
                <figure style={{ margin: 0 }}>
                  <img src={`${ASSETS}/images/01_hero_4x5.png`} alt="Standpoint hero — know where you stand" width={1080} height={1350} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: 'var(--h-radius)' }} />
                  <figcaption style={{ marginTop: 'var(--h-space-2)', fontSize: '0.85rem', color: 'var(--h-muted)' }}>Know where you stand. <em>(Sample data: Sakhi&rsquo;ksasa Holdings)</em></figcaption>
                </figure>
                <figure style={{ margin: 0 }}>
                  <img src={`${ASSETS}/images/02_skyline_4x5.png`} alt="Competitive Skyline view" width={1080} height={1350} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: 'var(--h-radius)' }} />
                  <figcaption style={{ marginTop: 'var(--h-space-2)', fontSize: '0.85rem', color: 'var(--h-muted)' }}>Competitive Skyline. <em>(Sample data: Sakhi&rsquo;ksasa Holdings)</em></figcaption>
                </figure>
                <figure style={{ margin: 0 }}>
                  <img src={`${ASSETS}/images/03_standing_index_4x5.png`} alt="Standing Index gauge" width={1080} height={1350} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: 'var(--h-radius)' }} />
                  <figcaption style={{ marginTop: 'var(--h-space-2)', fontSize: '0.85rem', color: 'var(--h-muted)' }}>Standing Index. <em>(Sample data: Sakhi&rsquo;ksasa Holdings)</em></figcaption>
                </figure>
                <figure style={{ margin: 0 }}>
                  <img src={`${ASSETS}/images/04_pricing_4x5.png`} alt="Pricing tiers" width={1080} height={1350} loading="lazy" style={{ width: '100%', height: 'auto', borderRadius: 'var(--h-radius)' }} />
                  <figcaption style={{ marginTop: 'var(--h-space-2)', fontSize: '0.85rem', color: 'var(--h-muted)' }}>Pricing. <em>(Sample data: Sakhi&rsquo;ksasa Holdings)</em></figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- INSIDE THE SYSTEM (real product screens) ---------- */}
        <section className="h-section h-about" aria-label="Inside Standpoint">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Inside the system</div>
              <h2 className="h-section-title">The dashboard, the signals, the Leak Ledger.</h2>
              <p className="h-section-desc">
                Every screen, one glance: your score, your gaps, and the month's next moves.
                <em> (Interface shown with sample data.)</em>
              </p>
            </Reveal>

            <div className="h-gallery">
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/spatial/dashboard_16x9.png`}
                    alt="Standpoint dashboard: the Standing Index gauge at 68 for Sakhi'ksasa Holdings, a category benchmark ranking you against Haefele Software, Brave Digital and CubeZoo, blind-spot flags and the Leak Ledger card."
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
                    src={`${ASSETS}/images/spatial/signals_16x9.png`}
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
                    src={`${ASSETS}/images/spatial/blindspots_16x9.png`}
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
                    src={`${ASSETS}/images/spatial/leaks_16x9.png`}
                    alt="The Leak Ledger for Sakhi'ksasa Holdings: verified, re-checkable findings about your business."
                    width={1920}
                    height={1080}
                    loading="lazy"
                  />
                  <figcaption>The Leak Ledger — verified, re-checkable findings about your business. <em>(Sample data: Sakhi'ksasa Holdings)</em></figcaption>
                </figure>
              </Reveal>
              <Reveal>
                <figure className="h-gallery-item">
                  <img
                    src={`${ASSETS}/images/spatial/competitors_16x9.png`}
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
