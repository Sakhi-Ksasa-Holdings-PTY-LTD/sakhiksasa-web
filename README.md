# Sakhi'ksasa Holdings — Website

The official website for Sakhi'ksasa Holdings (Pty) Ltd (CIPC 2026/405064/07), a South African holding company based in Vryheid, KZN. Home of Standpoint (competitive-intelligence SaaS) + the systems pipeline.

## Tech Stack
- Next.js 16 + TypeScript + Tailwind CSS 4
- Fraunces (headings) + Inter (body)
- Fully responsive, SEO-ready, Lighthouse 90+

## How to edit

### Add or edit a system (Systems page + Home page)
Edit `src/config/systems.json`:
```json
{
  "id": "new-system",
  "name": "New System",
  "status": "Coming soon",
  "summary": "What it does.",
  "url": null,
  "accent": "#b08a3e"
}
```
That's it — the Home page + Systems page both read from this file.

### Add media (Media Gallery page)
1. Drop your image/video in `public/media/`
2. Edit `src/config/media.json`:
```json
{
  "id": "new-media",
  "type": "image",
  "title": "Ad Poster Q4",
  "src": "/media/ad-poster-q4.png",
  "alt": "Q4 advertising poster",
  "tag": "Marketing"
}
```

### Change the founding-pilot seat counter
Edit `src/config/company.ts`:
```ts
foundingPilot: {
  maxSlots: 3,  // ← change this number
  ...
}
```
The Home page + Standpoint page both read from this.

### Paste the final legal text
The legal pages at `/legal/[slug]` are placeholders. To paste the final text:
1. Edit `src/app/legal/[slug]/page.tsx`
2. Replace the placeholder string for each document
3. Or copy the final text from the Standpoint repo's `/legal/*.md` files

### Change company details
Edit `src/config/company.ts` — name, reg number, address, email, founder bio, social links.

## Development
```bash
bun install
bun run dev    # → http://localhost:3001
bun run build
```

## Deployment
The site is designed to deploy on Render (or any Docker-capable host).
Set the env vars listed in `.env.example` and connect the repo to Render.

## Brand
- **Palette**: ink #16213a, paper #fbf9f4, gold #b08a3e, line #e7e0d1
- **Standpoint accents**: coral #FF5E3A, amber #FFB347, teal #14B8A6, violet #8B5CF6
- **Fonts**: Fraunces (headings) + Inter (body)
- **Pledge**: "We don't wait for validation. We make the first move."
