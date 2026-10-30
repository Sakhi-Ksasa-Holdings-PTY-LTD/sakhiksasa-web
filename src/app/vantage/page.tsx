import type { Metadata } from "next";
import { Nav, Footer, CookieBanner, Reveal, IconArrowRight, GlassOrbs, DivisionMark, ContactModal } from '@/components/chrome';
import { BRAND, visibleDivisions } from '@/config/brand';

/* ============================================================
   Vantage — division page.
   One-sentence descriptor of what the division does, then the
   Standpoint product card. Product depth lives on the product page.
============================================================ */

const division = visibleDivisions[0]; // Vantage — the only visible division

export const metadata: Metadata = {
  title: "Vantage",
  description: division.descriptor,
  openGraph: {
    title: "Vantage by Sakhi'ksasa",
    description: division.descriptor,
    images: [{ url: "/vantage-profile-1080.png", width: 1080, height: 1080, alt: "Vantage by Sakhi'ksasa logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vantage by Sakhi'ksasa",
    description: division.descriptor,
    images: ["/vantage-profile-1080.png"],
  },
};

export default function VantagePage() {
  const sp = BRAND.standpoint;

  return (
    <div className="holdings">
      <GlassOrbs />
      <Nav />
      <main style={{ flex: 1 }}>
        {/* ---------- DIVISION COVER ----------
            The cover carries the division mark — the same logo used by the
            Standpoint system, and by every system under Vantage. */}
        <section className="h-hero h-cover" aria-label="Vantage division" style={{ padding: 'var(--h-space-16) 0 var(--h-space-12)' }}>
          <div className="h-hero-grid" aria-hidden="true" />
          <div className="h-hero-inner h-cover-inner">
            <figure className="h-cover-figure">
              <img
                src="/vantage-profile-1080.png"
                alt="Vantage by Sakhi'ksasa logo"
                width={1080}
                height={1080}
                style={{ maxWidth: '128px', height: 'auto', borderRadius: '20px' }}
              />
              <figcaption className="sr-only-h">
                The Vantage division mark — carried by every system in the division.
              </figcaption>
            </figure>
            <div className="h-hero-eyebrow">Vantage by Sakhi&rsquo;ksasa · Live</div>
            <h1 className="h-hero-division-name">Vantage</h1>
            <p className="h-hero-sub" style={{ maxWidth: '52ch' }}>{division.descriptor}</p>
          </div>
        </section>

        {/* ---------- PRODUCTS ---------- */}
        <section className="h-section h-product" aria-label="Vantage products">
          <div className="h-container">
            <Reveal>
              <div className="h-eyebrow">Products</div>
              <h2 className="h-section-title">Built and run to a standard clients can rely on.</h2>
            </Reveal>

            <div className="h-house-grid">
              <Reveal>
                <a href="/vantage/standpoint" className="h-house-card" aria-label={`${sp.name} product`}>
                  <div className="h-house-card-top">
                    <DivisionMark size="md" />
                    <div className="h-house-status">
                      <span className="h-status-dot" aria-hidden="true" />
                      Live
                    </div>
                  </div>
                  <h3 className="h-house-name">{sp.name}</h3>
                  <p className="h-house-desc">{sp.tagline} A competitive-intelligence platform built around a single 0–100 Standing Index.</p>
                  <span className="h-house-link">
                    About {sp.name} <IconArrowRight />
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------- BACK TO HOUSE ---------- */}
        <section className="h-section-tight h-about" aria-label="Back to the House">
          <div className="h-container">
            <Reveal>
              <p className="h-house-note" style={{ textAlign: 'left' }}>
                Vantage is a division of <a href="/" style={{ color: 'var(--h-primary)' }}>{BRAND.legalName}</a>.
                {' '}{BRAND.houseNote}
              </p>
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
