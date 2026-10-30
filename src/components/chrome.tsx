'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BRAND } from '@/config/brand';

/* ============================================================
   Shared site chrome — Nav, Footer, CookieBanner, Reveal.
   Client components (mobile menu state, observers).
   Enquiries: email only (no WhatsApp anywhere, per founder).
============================================================ */

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/vantage', label: 'Vantage' },
  { href: '/vantage/standpoint', label: 'Standpoint' },
] as const;

/* ----------------------------- Icons -----------------------------
   Each icon is its own named export. Server components cannot reach
   into an object of components from a client module (client-reference
   proxies return undefined for properties), so Icon.ArrowRight-style
   access is not safe across the server/client boundary. */
export function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
export function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
export function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}
export function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}
export function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ----------------------------- Ambient orbs -----------------------------
   Fixed background layer of slow-drifting brand-coloured light orbs.
   Purely decorative — they sit BEHIND all content and give the glass
   surfaces something alive to blur. Server component: zero JS. */
export function GlassOrbs() {
  return (
    <div className="h-orbs" aria-hidden="true">
      <span className="h-orb h-orb-blue" />
      <span className="h-orb h-orb-orange" />
      <span className="h-orb h-orb-far" />
    </div>
  );
}

/* ----------------------------- Division mark -----------------------------
   The official division logo (the Standpoint system mark), presented in a
   glass tile. Used on the Vantage cover and on every Vantage system card. */
export function DivisionMark({ size = 'md', className = '' }: { size?: 'md' | 'lg'; className?: string }) {
  return (
    <span className={`h-division-mark h-division-mark-${size} ${className}`.trim()}>
      <img
        src={BRAND.divisionLogo}
        alt=""
        width={size === 'lg' ? 128 : 56}
        height={size === 'lg' ? 128 : 56}
        className="h-division-mark-img"
        aria-hidden="true"
      />
    </span>
  );
}

/* ----------------------------- Contact modal -----------------------------
   The intake for the SLA system: enquiries captured here are auto-
   acknowledged by email, logged with an SLA due-date, and surfaced in
   the daily review log at /admin/log.
   Opening: any element with [data-contact-open="<topic>"] anywhere on the
   page — delegation keeps server components able to trigger it. */
const CONTACT_TOPICS = ['General enquiry', 'Standpoint — sales', 'Standpoint — support', 'Press / Media'] as const;

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<string>('General enquiry');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const [ref, setRef] = useState('');

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as HTMLElement | null)?.closest?.('[data-contact-open]');
      if (!trigger) return;
      e.preventDefault();
      const t = trigger.getAttribute('data-contact-open') || 'General enquiry';
      setTopic(CONTACT_TOPICS.includes(t as (typeof CONTACT_TOPICS)[number]) ? t : 'General enquiry');
      setState('idle');
      setError('');
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') || ''),
          email: String(data.get('email') || ''),
          company: String(data.get('company') || ''),
          topic: String(data.get('topic') || 'General enquiry'),
          message: String(data.get('message') || ''),
          subscribeUpdates: data.get('subscribeUpdates') === 'on',
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setError(json.error || 'Something went wrong. Please email us directly.');
        setState('error');
        return;
      }
      setRef(json.ref || '');
      setState('sent');
      form.reset();
    } catch {
      setError('Network error. Please email us directly.');
      setState('error');
    }
  };

  const inputStyle = 'h-cf-input';

  return (
    <div className="h-modal" data-open={open} onClick={() => setOpen(false)} aria-hidden={!open}>
      <div className="h-modal-panel" onClick={(ev) => ev.stopPropagation()} role="dialog" aria-modal="true" aria-label="Contact Sakhi'ksasa Holdings">
        <button className="h-modal-close" onClick={() => setOpen(false)} aria-label="Close contact form">
          <IconClose />
        </button>

        {state === 'sent' ? (
          <div className="h-cf-done">
            <div className="h-cf-done-badge">Received</div>
            <h3 className="h-cf-title">Your enquiry is with us.</h3>
            <p className="h-cf-text">
              A confirmation is on its way to your inbox
              {ref ? <> — your reference is <strong>{ref}</strong></> : null}.
            </p>
            <button className="h-btn h-btn-primary" onClick={() => setOpen(false)}>Done</button>
          </div>
        ) : (
          <>
            <div className="h-modal-eyebrow">Contact</div>
            <h3 className="h-cf-title">Tell us what you need.</h3>
            <p className="h-cf-sub">
              Straight to the company inbox. Auto-confirmed, tracked, and reviewed daily.
            </p>
            <form onSubmit={submit} className="h-cf-form">
              <div className="h-cf-row">
                <label className="h-cf-label">
                  Name *
                  <input name="name" required maxLength={120} className={inputStyle} placeholder="Your full name" />
                </label>
                <label className="h-cf-label">
                  Email *
                  <input name="email" type="email" required maxLength={160} className={inputStyle} placeholder="you@company.co.za" />
                </label>
              </div>
              <div className="h-cf-row">
                <label className="h-cf-label">
                  Company
                  <input name="company" maxLength={160} className={inputStyle} placeholder="Optional" />
                </label>
                <label className="h-cf-label">
                  Topic
                  <select name="topic" value={topic} onChange={(e) => setTopic(e.target.value)} className={inputStyle}>
                    {CONTACT_TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </label>
              </div>
              <label className="h-cf-label">
                Message *
                <textarea name="message" required minLength={10} maxLength={4000} rows={5} className={inputStyle} placeholder="What do you want to know or do?" />
              </label>
              <label className="h-cf-checkbox">
                <input type="checkbox" name="subscribeUpdates" defaultChecked />
                <span>Send me product updates, new systems, and Sakhi&rsquo;ksasa news by email. I can unsubscribe at any time.</span>
              </label>
              {state === 'error' && <p className="h-cf-error" role="alert">{error}</p>}
              <div className="h-cf-actions">
                <button type="submit" className="h-btn h-btn-accent" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending…' : 'Send enquiry'}
                  <IconArrowRight />
                </button>
                <a href={`mailto:${BRAND.email}`} className="h-cf-mailto">Prefer your own email client? {BRAND.email}</a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ----------------------------- Brand mark ----------------------------- */
export function BrandMark() {
  return (
    <a href="/" className="h-brand" aria-label={`${BRAND.shortName} — home`}>
      <img src="/favicon.png" alt="" width={40} height={40} className="h-brand-mark-img" aria-hidden="true" />
      <span className="h-brand-name">
        <strong>Sakhi&rsquo;ksasa</strong>
        <span>Holdings</span>
      </span>
    </a>
  );
}

/* ----------------------------- Nav ----------------------------- */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    // Enable reveal animations only when JS is running (content visible without JS)
    const root = document.querySelector('.holdings');
    if (root) root.classList.add('js-ready');
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="h-header" data-scrolled={scrolled}>
        <div className="h-header-inner">
          <BrandMark />
          <nav className="h-nav" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="h-nav-cta">
            <button data-contact-open="General enquiry" className="h-btn h-btn-accent">
              Contact <IconArrowRight />
            </button>
          </div>
          <button className="h-menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
            <IconMenu />
          </button>
        </div>
      </header>

      <div className="h-drawer" data-open={open} onClick={() => setOpen(false)} aria-hidden={!open}>
        <div className="h-drawer-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="h-drawer-head">
            <BrandMark />
            <button className="h-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
              <IconClose />
            </button>
          </div>
          <nav className="h-drawer-nav" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
            ))}
          </nav>
          <button
            data-contact-open="General enquiry"
            className="h-btn h-btn-accent h-btn-lg"
            onClick={() => setOpen(false)}
            style={{ marginTop: 'auto' }}
          >
            Contact <IconArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

/* ----------------------------- Reveal ----------------------------- */
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fallback = setTimeout(() => setReady(true), 1600);
    if (!('IntersectionObserver' in window)) {
      setReady(true);
      return () => clearTimeout(fallback);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReady(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => { clearTimeout(fallback); io.disconnect(); };
  }, []);

  return (
    <div ref={ref} className={`h-reveal${ready ? ' is-visible' : ''} ${className}`} data-reveal>
      {children}
    </div>
  );
}

/* ----------------------------- Footer ----------------------------- */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="h-footer" aria-label="Site footer">
      <div className="h-container">
        <div className="h-footer-grid">
          <div className="h-footer-brand">
            <BrandMark />
            <p className="h-footer-tag">{BRAND.positioning}</p>
            <div className="h-footer-social">
              <a href={BRAND.x} target="_blank" rel="noopener noreferrer" aria-label={`X (Twitter) — ${BRAND.xHandle}`}>
                <IconX />
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href={`mailto:${BRAND.email}`} aria-label="Email">
                <IconMail />
              </a>
            </div>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Company</div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/vantage">Vantage</a></li>
              <li><a href="/vantage/standpoint">Standpoint</a></li>
            </ul>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Legal</div>
            <ul>
              <li><a href={`${BRAND.standpoint.legalBase}/legal/terms`} target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
              <li><a href={`${BRAND.standpoint.legalBase}/legal/privacy`} target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href={`${BRAND.standpoint.legalBase}/legal/paia-manual`} target="_blank" rel="noopener noreferrer">PAIA Manual</a></li>
            </ul>
          </div>
          <div className="h-footer-col">
            <div className="h-footer-col-title">Get in touch</div>
            <ul>
              <li><a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
              <li style={{ color: 'rgba(243, 240, 234, 0.55)' }}>Enquiries by email only</li>
              {BRAND.showRegistration && (
                <li style={{ color: 'rgba(243, 240, 234, 0.55)' }}>Reg: {BRAND.regNumber}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="h-footer-bottom">
          <div className="h-footer-copy">
            © {year} {BRAND.legalName}. All rights reserved.{BRAND.showRegistration ? ` ${BRAND.regNumber}.` : ''}
          </div>
          <div className="h-footer-copy">
            Self-funded · Privately owned · Made in South Africa.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Cookie banner ----------------------------- */
export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      if (!localStorage.getItem('h-cookie-consent')) setTimeout(() => setShow(true), 900);
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
      </p>
      <div className="h-cookie-actions">
        <button className="h-btn h-btn-outline" onClick={() => decide('rejected')}>Dismiss</button>
        <button className="h-btn h-btn-primary" onClick={() => decide('accepted')}>Got it</button>
      </div>
    </div>
  );
}
