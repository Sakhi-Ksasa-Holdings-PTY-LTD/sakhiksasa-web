# Security Policy — Sakhi'ksasa Holdings

## Reporting a vulnerability

If you find a security issue in any Sakhi'ksasa Holdings property
(including this website and the Standpoint product), report it by email —
do not open a public issue.

**Contact:** [sakhiksasaholdingsptyltd@gmail.com](mailto:sakhiksasaholdingsptyltd@gmail.com)

Please include: what you found, how to reproduce it, and the impact.
We take every report seriously and will acknowledge receipt.

## Scope

- `sakhiksasa-web` (this repository) — the holding-company website
- Standpoint — `standpoint-web.onrender.com`

## Our commitments

- No secrets are committed to this repository (`.env` files are git-ignored;
  only `.env.example` placeholders are tracked).
- The internal enquiry log at `/admin/log` is key-protected, fails closed,
  and is excluded from search engines.
- Security headers (frame-deny, nosniff, referrer policy, HSTS) are applied
  to every route via `next.config.ts`.
- The contact API is rate-limited to blunt abuse.
