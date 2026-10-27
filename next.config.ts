import type { NextConfig } from "next";

/* Security headers applied to every route. Render terminates TLS, so HSTS
   is safe. No CSP yet — the site uses inline styles and JSON-LD; a strict
   CSP needs nonce plumbing first (documented in docs/SECURITY-CHECKLIST.md). */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
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
