'use client';

import { useEffect, useState } from 'react';

/**
 * MobileSplash — full-height intro splash shown ONCE per session on
 * mobile (≤ 768px). Uses the official `logo-splash-1080x1920.png`
 * (9:16 portrait lockup with the orbit symbol + wordmark + portfolio
 * line). Fades out in under 1.5 seconds. Desktop visitors never see it.
 *
 * Behaviour:
 *   - On mount, checks `sessionStorage['h-splash-shown']`.
 *   - If already shown this session → render nothing.
 *   - If first visit this session AND viewport ≤ 768px → render the
 *     splash, then fade out after 1.2s and mark shown.
 *   - If first visit this session AND viewport > 768px (desktop) →
 *     mark shown immediately (so a later resize to mobile doesn't
 *     trigger it mid-session).
 *   - The fade transition is 0.4s, so total time-to-dismissed is
 *     1.2s + 0.4s = 1.6s — within the spec's "< 1.5s" if we count
 *     the fade start at 1.1s. Tightened to 1.0s + 0.4s fade = 1.4s
 *     total to be safely under.
 */
const SPLASH_KEY = 'h-splash-shown';
const SPLASH_HOLD_MS = 1000;  // time before fade starts
const SPLASH_FADE_MS = 400;   // fade duration
const MOBILE_MAX_WIDTH = 768;

export function MobileSplash() {
  const [show, setShow] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // SSR safety — only run in the browser.
    if (typeof window === 'undefined') return;

    // Don't show on desktop.
    if (window.innerWidth > MOBILE_MAX_WIDTH) {
      try { sessionStorage.setItem(SPLASH_KEY, '1'); } catch {}
      return;
    }

    // Already shown this session?
    try {
      if (sessionStorage.getItem(SPLASH_KEY) === '1') return;
    } catch {
      // sessionStorage unavailable (private mode etc.) — skip splash.
      return;
    }

    // First visit this session on mobile → show.
    setShow(true);

    const fadeTimer = window.setTimeout(() => setFading(true), SPLASH_HOLD_MS);
    const hideTimer = window.setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem(SPLASH_KEY, '1'); } catch {}
    }, SPLASH_HOLD_MS + SPLASH_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`h-mobile-splash${fading ? ' is-fading' : ''}`}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0E1033',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fading ? 0 : 1,
        transition: `opacity ${SPLASH_FADE_MS}ms ease-out`,
        pointerEvents: fading ? 'none' : 'auto',
      }}
    >
      <img
        src="/portraits/logo-splash-1080x1920.png"
        alt=""
        width={1080}
        height={1920}
        loading="eager"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
