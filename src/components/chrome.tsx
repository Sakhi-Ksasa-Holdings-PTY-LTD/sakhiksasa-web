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
export function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
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
            <a href={`mailto:${BRAND.email}`} className="h-btn h-btn-accent">
              Contact <IconArrowRight />
            </a>
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
          <a
            href={`mailto:${BRAND.email}`}
            className="h-btn h-btn-accent h-btn-lg"
            onClick={() => setOpen(false)}
            style={{ marginTop: 'auto' }}
          >
            Contact by email <IconArrowRight />
          </a>
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
