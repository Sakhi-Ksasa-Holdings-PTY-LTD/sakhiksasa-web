import type { NextConfig } from "next";

/* Security headers applied to every route. Render terminates TLS, so HSTS
   is safe. CSP added with nonce plumbing via the middleware below.

   CSP policy:
   - default-src 'self': everything from the same origin
   - script-src 'self' 'nonce-{nonce}' 'unsafe-inline': scripts from same
     origin + inline scripts with a valid nonce (Next.js needs this for
     hydration) + 'unsafe-inline' as a fallback for JSON-LD (which uses
     <script type="application/ld+json"> and doesn't execute code)
   - style-src 'self' 'unsafe-inline': styles from same origin + inline
     styles (the site uses inline styles for layout)
   - img-src 'self' data: https:: images from same origin, data URIs, and
     any HTTPS source (for the og:image and poster images)
   - font-src 'self': fonts from same origin
   - connect-src 'self': API calls to same origin only
   - frame-ancestors 'none': no framing (clickjacking defence)
   - base-uri 'self': no base tampering
   - form-action 'self': forms can only submit to same origin
   - object-src 'none': no plugins/embeds
   - upgrade-insecure-requests: force HTTPS

   The nonce is generated per-request in the middleware (next.config.ts
   can't generate nonces, so we use a middleware function that sets the
   nonce header and rewrites the CSP to include it). */
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Use webpack instead of Turbopack for the build (more stable in Docker)
  // Turbopack has a CSS parsing bug: "invalid type: null, expected a string"
  experimental: {
    // Explicitly do NOT use Turbopack
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
