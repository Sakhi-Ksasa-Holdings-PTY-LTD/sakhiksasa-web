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

        {/* ---------- STANDPOINT IN 56 SECONDS (explainer video) ---------- */}
        <section id="standpoint-in-56-seconds" className="h-section h-product h-explainer-section" aria-label="Standpoint in 56 seconds — explainer video">
          <div className="h-container">
            <div className="h-eyebrow">Watch · 56 seconds</div>
            <h2 className="h-section-title">Standpoint in 56 seconds</h2>
            <p className="h-section-desc">
              See your Standing Index, every competitor signal side by side, the blind spots where you trail the leader, and the Leak Ledger of re-checkable findings. Start free.
            </p>

            {/* Lazy-loaded 16:9 video player — preload="metadata" only, no autoplay */}
            <div
              className="h-video-frame h-video-frame-wide h-explainer-video"
              style={{ marginTop: 'var(--h-space-6)' }}
            >
              <video
                controls
                playsInline
                preload="metadata"
                poster={`${ASSETS}/video/standpoint_explainer_16x9_v0_poster_1920.webp`}
                className="h-video"
                aria-label="Standpoint in 56 seconds — explainer video showing the Standing Index, competitor signals, blind spots, and Leak Ledger"
              >
                <source src={`${ASSETS}/video/standpoint_explainer_16x9_v0.mp4`} type="video/mp4" />
                <source src={`${ASSETS}/video/standpoint_explainer_16x9_v0.webm`} type="video/webm" />
                Your browser does not support the video tag. <a href={`${ASSETS}/video/standpoint_explainer_16x9_v0.mp4`}>Watch the explainer</a>.
              </video>
            </div>

            <p style={{ marginTop: 'var(--h-space-3)', fontSize: 'var(--h-text-sm)', color: 'var(--h-muted)', textAlign: 'center' }}>
              Sample data: Sakhi&rsquo;ksasa Holdings. Sound effects only — no voiceover. All spoken content is on-screen text.
            </p>

            {/* Collapsible transcript — built from the on-screen text */}
            <details style={{ marginTop: 'var(--h-space-4)', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
              <summary style={{ cursor: 'pointer', fontSize: 'var(--h-text-sm)', color: 'var(--h-muted)', fontWeight: 600, padding: 'var(--h-space-1) 0', listStyle: 'none' }}>
                Read the transcript
                <span aria-hidden="true" style={{ marginLeft: '8px', fontSize: '0.75em' }}>&#9662;</span>
              </summary>
              <p style={{ marginTop: 'var(--h-space-2)', fontSize: 'var(--h-text-sm)', color: 'var(--h-muted)', lineHeight: 1.7, padding: '0 var(--h-space-1)' }}>
                How do you really know where you stand? Meet Standpoint. One number, your standing. Every signal, side by side. Where you trail the leader. Re-checkable, no AI. Five views, one tap. Start at R0. Founding clients R500 per month for 6 months, first 3 only. Know where you stand. Fix where you lag. Start free today.
              </p>
            </details>
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
      {/* VideoObject structured data for the 56-second explainer video */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'Standpoint in 56 seconds',
            description: 'See your Standing Index, every competitor signal side by side, the blind spots where you trail the leader, and the Leak Ledger of re-checkable findings. Start free.',
            thumbnailUrl: `${ASSETS}/video/standpoint_explainer_16x9_v0_poster_1920.jpg`,
            uploadDate: '2026-11-16',
            duration: 'PT56S',
            contentUrl: `${ASSETS}/video/standpoint_explainer_16x9_v0.mp4`,
            embedUrl: `https://sakhiksasa.co.za/vantage/standpoint#standpoint-in-56-seconds`,
          }),
        }}
      />
      <Footer />
      <CookieBanner />
      <ContactModal />
    </div>
  );
}
