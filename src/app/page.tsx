'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { BRAND } from '@/config/brand';

/* ============================================================
   Sakhi'ksasa Holdings — Public marketing site
   Single-page premium corporate site with anchored sections:
   Home · About · Vision & Mission · Standpoint · Contact
   All brand colours + copy sourced from `BRAND` config.
============================================================ */

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision & Mission' },
  { id: 'standpoint', label: 'Standpoint' },
  { id: 'contact', label: 'Contact' },
] as const;

const SKYLINE_HEIGHTS = [62, 88, 48, 78, 56, 92, 44, 82, 60, 70, 50, 86];

/* ----------------------------- Icons ----------------------------- */
const Icon = {
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  MapPin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Instagram: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Whatsapp: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.73-.86-2-.95-.27-.1-.46-.15-.65.15-.2.3-.75.94-.92 1.13-.17.2-.34.22-.63.08-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.14.3-.34.45-.54.15-.2.2-.34.3-.56.1-.22.05-.42-.02-.6-.08-.17-.65-1.58-.9-2.16-.24-.56-.48-.48-.65-.5h-.55c-.2 0-.5.07-.78.36s-1.02 1-1.02 2.43 1.05 2.82 1.2 3.02c.15.2 2.06 3.15 5 4.41.7.3 1.24.48 1.67.6.7.22 1.34.2 1.84.12.56-.08 1.73-.7 1.97-1.4.24-.68.24-1.27.17-1.4-.07-.13-.27-.2-.57-.35z" />
      <path d="M12 2a10 10 0 00-8.7 14.94L2 22l5.18-1.35A10 10 0 1012 2zm0 18.18a8.18 8.18 0 01-4.17-1.14l-.3-.18-3.07.8.82-3-.2-.31A8.18 8.18 0 1112 20.18z" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
  Index: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 3 3 5-6" />
    </svg>
  ),
  Spot: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
    </svg>
  ),
  Tiers: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V10M10 21V6M14 21v-9M19 21V4" />
    </svg>
  ),
};

/* ----------------------------- Brand Mark ----------------------------- */
function BrandMark() {
  return (
    <a href="#home" className="h-brand" aria-label={`${BRAND.shortName} — home`}>
      <img
        src="/favicon.png"
        alt=""
        width={40}
        height={40}
        className="h-brand-mark-img"
        aria-hidden="true"
      />
      <span className="h-brand-name">
        <strong>Sakhi&rsquo;ksasa</strong>
        <span>Holdings</span>
      </span>
    </a>
  );
}

/* ----------------------------- Header ----------------------------- */
function Header({ activeId, onOpenMenu }: { activeId: string; onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="h-header" data-scrolled={scrolled}>
      <div className="h-header-inner">
        <BrandMark />
        <nav className="h-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} data-active={activeId === item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="h-nav-cta">
          <a href={BRAND.standpoint.url} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-accent">
            Launch Standpoint <Icon.ArrowRight />
          </a>
        </div>
        <button className="h-menu-btn" onClick={onOpenMenu} aria-label="Open menu">
          <Icon.Menu />
        </button>
      </div>
    </header>
  );
}

/* ----------------------------- Mobile Drawer ----------------------------- */
function Drawer({ open, onClose, activeId }: { open: boolean; onClose: () => void; activeId: string }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="h-drawer" data-open={open} onClick={onClose} aria-hidden={!open}>
      <div className="h-drawer-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="h-drawer-head">
          <BrandMark />
          <button className="h-drawer-close" onClick={onClose} aria-label="Close menu">
            <Icon.Close />
          </button>
        </div>
        <nav className="h-drawer-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={onClose} data-active={activeId === item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={BRAND.standpoint.url}
          target="_blank"
          rel="noopener noreferrer"
          className="h-btn h-btn-accent h-btn-lg"
          onClick={onClose}
          style={{ marginTop: 'auto' }}
        >
          Launch Standpoint <Icon.ArrowRight />
        </a>
      </div>
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section id="home" className="h-hero" aria-label="Introduction">
      <div className="h-hero-grid" aria-hidden="true" />
      <div className="h-hero-inner">
        <div className="h-hero-eyebrow">{BRAND.shortName} Holdings · Est. {BRAND.founded}</div>
        <h1 className="h-hero-motto">
          {BRAND.mottoLines.line1}
          <span className="accent">{BRAND.mottoLines.line2}</span>
        </h1>
        <p className="h-hero-sub">{BRAND.mission}</p>
        <div className="h-hero-cta">
          <a href="#standpoint" className="h-btn h-btn-accent h-btn-lg">
            Explore Standpoint <Icon.ArrowRight />
          </a>
          <a href="#about" className="h-btn h-btn-ghost-light h-btn-lg">
            About the company
          </a>
        </div>
        <dl className="h-hero-stats">
          <div>
            <dt className="h-stat-value">2026</dt>
            <dd className="h-stat-label">Founded</dd>
          </div>
          <div>
            <dt className="h-stat-value">1</dt>
            <dd className="h-stat-label">Product live</dd>
          </div>
          <div>
            <dt className="h-stat-value">100%</dt>
            <dd className="h-stat-label">Self-funded</dd>
          </div>
          <div>
            <dt className="h-stat-value">RSA</dt>
            <dd className="h-stat-label">Based in</dd>
          </div>
        </dl>
      </div>
      <div className="h-skyline" aria-hidden="true">
        {SKYLINE_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="bar"
            style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
          />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- About ----------------------------- */
function About() {
  return (
    <section id="about" className="h-section h-about" aria-label="About Sakhi'ksasa Holdings">
      <div className="h-container h-about-grid">
        <div className="h-about-copy h-reveal" data-reveal>
          <div className="h-eyebrow">About the company</div>
          <h2 className="h-section-title">A holding company, built to outlast its founders.</h2>
          <p className="h-about-lede">
            Sakhi&rsquo;ksasa Holdings builds, owns, and operates businesses for the long term.
          </p>
          <div className="h-about-body">
            <p>
              We are a self-funded, privately-owned holding company based in South Africa.
              We launch products that solve real problems for real businesses, run them to a
              high standard, and reinvest what they earn into the next.
            </p>
            <p>
              Our conviction is simple: enduring businesses are built by those who make the
              first move — not by those who wait for permission. We make decisions we can
              defend in ten years, not ten weeks. We answer for outcomes, not effort. And we
              ship at the quality we would demand as clients.
            </p>
            <p>
              We do not chase trendlines or outside capital. What we earn goes back into
              building. That discipline is the only ceiling that matters — and geography is
              not one.
            </p>
          </div>
        </div>
        <aside className="h-about-aside h-reveal" data-reveal>
          <div className="h-eyebrow" style={{ marginBottom: 'var(--h-space-4)' }}>Company fact sheet</div>
          <dl>
            <div className="h-fact-row">
              <dt>Legal name</dt>
              <dd>{BRAND.legalName}</dd>
            </div>
            <div className="h-fact-row">
              <dt>Registration</dt>
              <dd>{BRAND.regNumber}</dd>
            </div>
            <div className="h-fact-row">
              <dt>Founded</dt>
              <dd>{BRAND.founded}</dd>
            </div>
            <div className="h-fact-row">
              <dt>Based in</dt>
              <dd>{BRAND.locationShort}</dd>
            </div>
            <div className="h-fact-row">
              <dt>Capital structure</dt>
              <dd>Self-funded</dd>
            </div>
            <div className="h-fact-row">
              <dt>Product</dt>
              <dd>{BRAND.standpoint.name}</dd>
            </div>
          </dl>
          <div className="h-leader">
            <div className="h-leader-photo" aria-hidden="true">{BRAND.founder.initials}</div>
            <div>
              <div className="h-leader-name">{BRAND.founder.name}</div>
              <div className="h-leader-role">{BRAND.founder.role}</div>
              <p className="h-leader-bio">{BRAND.founder.bio}</p>
              <blockquote className="h-leader-quote">&ldquo;{BRAND.founder.quote}&rdquo;</blockquote>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ----------------------------- Vision & Mission ----------------------------- */
function VisionMission() {
  return (
    <section id="vision" className="h-section h-vision" aria-label="Vision and Mission">
      <div className="h-container h-vision-inner">
        <div className="h-reveal" data-reveal>
          <div className="h-eyebrow">Our Vision</div>
          <p className="h-vision-statement">
            To build enduring businesses that <span className="accent">outlast their founders</span> and compound value across generations.
          </p>
        </div>
        <div className="h-vision-mission h-reveal" data-reveal>
          <div className="h-vision-label">Mission</div>
          <p className="h-vision-mission-text">{BRAND.mission}</p>
        </div>
        <div className="h-reveal" data-reveal>
          <div className="h-eyebrow" style={{ marginTop: 'var(--h-space-10)', display: 'inline-flex' }}>
            Our Values
          </div>
          <div className="h-values">
            {BRAND.values.map((v, i) => (
              <div className="h-value" key={v.title}>
                <div className="h-value-num">0{i + 1}</div>
                <h3 className="h-value-title">{v.title}</h3>
                <p className="h-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-reveal" data-reveal>
          <div className="h-eyebrow" style={{ marginTop: 'var(--h-space-12)', display: 'inline-flex' }}>
            Strategic Goals
          </div>
          <div className="h-goals">
            {BRAND.goals.map((g, i) => (
              <div className="h-goal" key={i}>
                <div className="h-goal-num">{String(i + 1).padStart(2, '0')}</div>
                <p className="h-goal-text">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Standpoint ----------------------------- */
function Standpoint() {
  return (
    <section id="standpoint" className="h-section h-product" aria-label="Standpoint product">
      <div className="h-container">
        <div className="h-reveal" data-reveal style={{ maxWidth: '64ch', marginBottom: 'var(--h-space-8)' }}>
          <div className="h-eyebrow">Our Product</div>
          <h2 className="h-section-title">One product. Built to a standard clients can rely on.</h2>
          <p className="h-section-desc">
            Standpoint is Sakhi&rsquo;ksasa&rsquo;s first live product — a competitive-intelligence
            platform that turns scattered competitor signals into a single 0&ndash;100
            Standing Index.
          </p>
        </div>

        <div className="h-product-hero h-reveal" data-reveal>
          <div>
            <div className="h-product-eyebrow">Flagship Product</div>
            <h3 className="h-product-name">Standpoint</h3>
            <p className="h-product-tag">{BRAND.standpoint.tagline}</p>
            <p className="h-product-desc">{BRAND.standpoint.description}</p>
            <div className="h-product-cta">
              <a href={BRAND.standpoint.url} target="_blank" rel="noopener noreferrer" className="h-btn h-btn-primary h-btn-lg">
                Launch Standpoint <Icon.ArrowRight />
              </a>
              <a href="#contact" className="h-btn h-btn-outline h-btn-lg">Talk to us</a>
            </div>
          </div>
          <div className="h-product-visual" aria-hidden="true">
            <div className="h-index-card">
              <div className="h-index-label">Standing Index · This week</div>
              <div className="h-index-value">78<span className="accent">/100</span></div>
              <div className="h-index-delta">+6 pts vs last week</div>
              <div className="h-bars">
                {[58, 72, 64, 80, 68, 88, 74, 92, 70, 84].map((h, i) => (
                  <div className="bar" key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-pillars h-reveal" data-reveal>
          {BRAND.standpoint.pillars.map((p) => {
            const IconCmp = p.title.includes('Index') ? Icon.Index : p.title.includes('Blind') ? Icon.Spot : Icon.Tiers;
            return (
              <div className="h-pillar" key={p.title}>
                <div className="h-pillar-icon"><IconCmp /></div>
                <h3 className="h-pillar-title">{p.title}</h3>
                <p className="h-pillar-desc">{p.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="h-tiers h-reveal" data-reveal>
          <div className="h-tiers-head">
            <div className="h-eyebrow" style={{ display: 'inline-flex' }}>Pricing</div>
            <h3 className="h-section-title" style={{ margin: '0 auto var(--h-space-2)', maxWidth: 'none' }}>
              Tiered for every stage of business.
            </h3>
            <p className="h-section-desc" style={{ margin: '0 auto' }}>
              From a forever-free tier to enterprise multi-branch — pricing scales with the business, never the other way around.
            </p>
          </div>
          <div className="h-tiers-grid">
            {BRAND.standpoint.tiers.map((t) => (
              <div className="h-tier" key={t.name}>
                <div className="h-tier-name">{t.name}</div>
                <div className="h-tier-price">{t.price}<span className="h-tier-period">{t.period}</span></div>
                <div className="h-tier-note">{t.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-faq h-reveal" data-reveal style={{ margin: 'var(--h-space-12) auto 0' }}>
          {BRAND.standpoint.faqs.map((f) => (
            <div className="h-faq-item" key={f.q}>
              <div className="h-faq-q">{f.q}</div>
              <p className="h-faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Contact ----------------------------- */
function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      company: String(data.get('company') || '').trim(),
      topic: String(data.get('topic') || 'General enquiry'),
      message: String(data.get('message') || '').trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setMessage('Please complete your name, email, and message before sending.');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setMessage('Thank you — your message has been logged. We respond within two business days.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Something went wrong sending the form. Please email us directly at ' + BRAND.email + '.');
    }
  };

  return (
    <section id="contact" className="h-section h-contact" aria-label="Contact Sakhi'ksasa">
      <div className="h-container">
        <div className="h-reveal" data-reveal style={{ maxWidth: '64ch' }}>
          <div className="h-eyebrow">Contact</div>
          <h2 className="h-section-title">Let&rsquo;s talk.</h2>
          <p className="h-section-desc">
            For more enquiries, reach the office at <a href={`mailto:${BRAND.email}`} style={{ color: 'var(--h-primary)', textDecoration: 'underline' }}>{BRAND.email}</a> or use the form below. We respond within two business days.
          </p>
        </div>
        <div className="h-contact-grid">
          <div className="h-contact-list h-reveal" data-reveal>
            <div className="h-contact-item">
              <div className="h-contact-icon"><Icon.Mail /></div>
              <div>
                <div className="h-contact-label">Email</div>
                <div className="h-contact-value">
                  <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                </div>
              </div>
            </div>
            <div className="h-contact-item">
              <div className="h-contact-icon"><Icon.Instagram /></div>
              <div>
                <div className="h-contact-label">Instagram</div>
                <div className="h-contact-value">
                  <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer">{BRAND.instagramHandle}</a>
                </div>
              </div>
            </div>
          </div>
          <form className="h-form h-reveal" data-reveal onSubmit={handleSubmit} noValidate>
            {status === 'success' && (
              <div className="h-alert h-alert-success" role="status">
                <Icon.Check /><span>{message}</span>
              </div>
            )}
            {status === 'error' && (
              <div className="h-alert h-alert-error" role="alert">
                <span>{message}</span>
              </div>
            )}
            <div className="h-field-row">
              <div className="h-field">
                <label className="h-label" htmlFor="name">Full name</label>
                <input className="h-input" id="name" name="name" type="text" autoComplete="name" required placeholder="Sanele Zwane" />
              </div>
              <div className="h-field">
                <label className="h-label" htmlFor="email">Email</label>
                <input className="h-input" id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.co.za" />
              </div>
            </div>
            <div className="h-field-row">
              <div className="h-field">
                <label className="h-label" htmlFor="company">Company (optional)</label>
                <input className="h-input" id="company" name="company" type="text" autoComplete="organization" placeholder="Your business" />
              </div>
              <div className="h-field">
                <label className="h-label" htmlFor="topic">Topic</label>
                <select className="h-select" id="topic" name="topic" defaultValue="General enquiry">
                  <option>General enquiry</option>
                  <option>Standpoint — sales</option>
                  <option>Standpoint — support</option>
                  <option>Press / Media</option>
                </select>
              </div>
            </div>
            <div className="h-field">
              <label className="h-label" htmlFor="message">Message</label>
              <textarea className="h-textarea" id="message" name="message" required placeholder="Tell us what you need." />
            </div>
            <div className="h-form-foot">
              <p className="h-form-note">
                By submitting, you agree to our use of your details solely to respond to this enquiry.
              </p>
              <button
                type="submit"
                className="h-btn h-btn-primary h-btn-lg"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : <>Send message <Icon.ArrowRight /></>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="h-footer" aria-label="Site footer">
      <div className="h-container">
        <div className="h-footer-grid">
          <div className="h-footer-brand">
            <BrandMark />
            <p className="h-footer-tag">{BRAND.positioning}</p>
            <div className="h-footer-social">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Icon.Instagram />
              </a>
              <a href={`mailto:${BRAND.email}`} aria-label="Email">
                <Icon.Mail />
              </a>
            </div>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Company</div>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#vision">Vision &amp; Mission</a></li>
              <li><a href="#standpoint">Standpoint</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Legal</div>
            <ul>
              <li><a href="#home">Privacy Policy</a></li>
              <li><a href="#home">Terms of Service</a></li>
              <li><a href="#home">POPIA Notice</a></li>
              <li><a href="#home">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Get in touch</div>
            <ul>
              <li style={{ color: 'rgba(243, 240, 234, 0.85)' }}>{BRAND.location}</li>
              <li style={{ color: 'rgba(243, 240, 234, 0.55)' }}>Reg: {BRAND.regNumber}</li>
              <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="h-footer-bottom">
          <div className="h-footer-copy">
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved. {BRAND.regNumber}.
          </div>
          <div className="h-footer-copy">
            Self-funded · Privately owned · Made in South Africa.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Cookie Banner ----------------------------- */
function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      const ok = localStorage.getItem('h-cookie-consent');
      if (!ok) setTimeout(() => setShow(true), 900);
    } catch {
      setTimeout(() => setShow(true), 900);
    }
  }, []);
  const decide = (value: 'accepted' | 'rejected') => {
    try { localStorage.setItem('h-cookie-consent', value); } catch {}
    setShow(false);
  };
  return (
    <div className="h-cookie" data-show={show} role="dialog" aria-label="Cookie notice">
      <p className="h-cookie-text">
        We use only essential cookies to operate this site. No tracking, no ad networks.
        See our <a href="#home">Cookie Policy</a>.
      </p>
      <div className="h-cookie-actions">
        <button className="h-btn h-btn-outline" onClick={() => decide('rejected')}>Dismiss</button>
        <button className="h-btn h-btn-primary" onClick={() => decide('accepted')}>Got it</button>
      </div>
    </div>
  );
}

/* ----------------------------- Reveal Observer ----------------------------- */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));

    // Safety net: if IntersectionObserver fails or doesn't fire (e.g. during
    // full-page screenshot capture, or in environments without scroll), make
    // everything visible after 1.6s so the page never looks empty.
    const fallback = setTimeout(() => {
      els.forEach((el) => el.setAttribute('data-visible', 'true'));
    }, 1600);

    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.setAttribute('data-visible', 'true'));
      return () => clearTimeout(fallback);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-visible', 'true');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
}

/* ----------------------------- Active Nav Observer ----------------------------- */
function useActiveSection() {
  const [activeId, setActiveId] = useState<string>('home');
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return activeId;
}

/* ----------------------------- Page ----------------------------- */
export default function HoldingsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection();
  useReveal();

  // Mark the wrapper as JS-ready so reveal animations can take over.
  // Before this flips, content is visible by default (CSS handles no-JS).
  // We mutate the DOM directly to avoid a redundant render cycle.
  useEffect(() => {
    const root = document.querySelector('.holdings');
    if (root) root.classList.add('js-ready');
  }, []);

  return (
    <div className="holdings">
      <Header activeId={activeId} onOpenMenu={() => setMenuOpen(true)} />
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)} activeId={activeId} />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <VisionMission />
        <Standpoint />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
