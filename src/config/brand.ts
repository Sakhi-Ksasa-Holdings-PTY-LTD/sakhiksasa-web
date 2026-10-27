/**
 * Sakhi'ksasa Holdings — brand config. Single source of truth.
 *
 * STRUCTURE (parent → divisions → products):
 *   Sakhi'ksasa Holdings
 *     ├── Vantage  (division, LIVE) → owns Standpoint (product, LIVE)
 *     ├── Lodestar (division, in development) — HIDDEN
 *     ├── Bedrock  (division, in development) — HIDDEN
 *     └── Keystone (division, in development) — HIDDEN
 *
 * HIDDEN-DIVISION RULE: divisions with `visible: false` are never rendered —
 * no cards, no "coming soon" tiles, no nav, no sitemap. Because pages are only
 * generated for visible divisions, their routes naturally return 404.
 * Enabling a division later = flip `visible` to true and add its page.
 *
 * All copy below is founder-approved unless marked [CONFIRM].
 * Colours/fonts come from the supplied logo, mirrored in globals.css.
 */

export const BRAND = {
  /* ---------- Identity ---------- */
  legalName: "Sakhi'ksasa Holdings (Pty) Ltd",
  shortName: "Sakhi'ksasa",
  founded: "2026",
  /** Shown in the footer ONLY when showRegistration is true — [CONFIRM] pending. */
  regNumber: "2026/405064/07",
  showRegistration: false, // [CONFIRM] flip to true only on Don's explicit OK
  location: "South Africa",
  email: "sakhiksasaholdingsptyltd@gmail.com",
  /**
   * Division mark — the logo used by the Standpoint system. This is THE mark
   * carried by Vantage and by every system under the Vantage division.
   */
  divisionLogo: "/favicon.png",
  instagram: "https://instagram.com/sakhi.holdings",
  instagramHandle: "@sakhi.holdings",
  /** Official company X (Twitter) account — founder-approved. */
  x: "https://x.com/SakhiHoldings",
  xHandle: "@SakhiHoldings",

  /** Motto — verbatim, founder-approved. */
  motto: "We don't wait for validation. We make the first move.",
  mottoLines: {
    line1: "We don't wait for validation.",
    line2: "We make the first move.",
  },

  positioning:
    "Sakhi'ksasa Holdings is a self-funded, privately-owned holding company that builds, owns, and operates systems for the long term.",

  /* ---------- Company copy — verbatim, founder-approved ---------- */
  vision:
    "To build enduring systems that outlast their founders and compound value across generations.",

  mission:
    "Sakhi'ksasa Holdings builds and owns systems for the long term. We launch products that solve real problems, run them to a high standard, and reinvest what they earn into the next.",

  values: [
    { title: "Longevity over speed", desc: "We make decisions we can defend in ten years, not ten weeks." },
    { title: "Ownership", desc: "We answer for outcomes, not effort." },
    { title: "Standards", desc: "We ship at the quality we would demand as clients." },
    { title: "Integrity", desc: "We say what is true, even when it costs us." },
    { title: "Reinvestment", desc: "What we earn goes back into building." },
  ],

  /** The House — understated line for unreleased divisions (the ONLY trace). */
  houseNote: "More divisions are being built under the same standard.",

  /* ---------- Divisions ---------- */
  divisions: [
    {
      name: "Vantage",
      slug: "vantage",
      /** [CONFIRM] proposed one-sentence descriptor — Don to confirm/edit. */
      descriptor:
        "Vantage builds competitive-intelligence software that shows a company exactly where it stands against its competitors.",
      status: "live" as const,
      visible: true,
    },
    { name: "Lodestar", slug: "lodestar", descriptor: "", status: "in-development" as const, visible: false },
    { name: "Bedrock", slug: "bedrock", descriptor: "", status: "in-development" as const, visible: false },
    { name: "Keystone", slug: "keystone", descriptor: "", status: "in-development" as const, visible: false },
  ],

  /* ---------- Founder ---------- */
  founder: {
    name: "Sanele T. Zwane",
    role: "Founder & Chief Executive",
    initials: "SZ",
    bio: "Sanele T. Zwane founded Sakhi'ksasa Holdings with a conviction that enduring companies are built by those who make the first move — not by those who wait for permission. As the sole owner, he leads the company's strategy, capital allocation, and product vision.",
    quote: "Discipline is the only ceiling that matters.",
  },

  /* ---------- Standpoint (product inside Vantage) ---------- */
  standpoint: {
    name: "Standpoint",
    division: "Vantage",
    tagline: "Know where you stand. Fix where you lag.",
    description:
      "A competitive-intelligence platform that turns scattered competitor signals — SEO, social, ad spend, reviews, pricing — into a single 0–100 Standing Index. Built for companies that want to know where they lead, where they lag, and what to do about it.",
    appUrl: "https://standpoint-web.onrender.com",
    legalBase: "https://standpoint-web.onrender.com",
    pillars: [
      {
        title: "The Standing Index",
        desc: "One 0–100 score that combines SEO, social, ad spend, reviews, and pricing — so you know where you rank at a glance.",
      },
      {
        title: "Blind-spot tracking",
        desc: "Where you trail the category leader by 25+ points, Standpoint flags it in plain English your team can act on.",
      },
      {
        title: "Monthly briefings",
        desc: "A written briefing each month: what moved, what it means, and the next moves worth making.",
      },
    ],
    signals: ["SEO", "Social", "Ad spend", "Reviews", "Pricing"],
    /**
     * Pricing note. The company is NOT registered for VAT (no income yet),
     * so no VAT is charged or referenced — prices are final, in ZAR.
     */
    vatNote: "All prices in South African rand (ZAR). Final — no VAT added.",
    tiers: [
      { name: "Free", monthly: "R0", annual: "R0", note: "Forever-free" },
      { name: "Starter", monthly: "R1,000/mo", annual: "R10,000/yr", note: "3 competitors" },
      { name: "Growth", monthly: "R2,500/mo", annual: "R25,000/yr", note: "5 competitors" },
      { name: "Pro", monthly: "R7,500/mo", annual: "R75,000/yr", note: "10 competitors" },
      { name: "Enterprise", monthly: "from R20,000/mo", annual: "from R200,000/yr", note: "25 competitors included" },
    ],
    foundingPilot: {
      slots: 3,
      /**
       * Slots still open. ONE-LINE UPDATE after each signing:
       *   after founding client #1 signs → 2
       *   after founding client #2 signs → 1
       *   after founding client #3 signs → 0 (then remove the block)
       */
      slotsRemaining: 3,
      text: "The first 3 clients get Starter features at R500/mo for 6 months, then R1,000/mo. Setup waived, with free assisted setup.",
    },
  },
} as const;

export type BrandConfig = typeof BRAND;

/** Convenience: the single visible division (Vantage). */
export const visibleDivisions = BRAND.divisions.filter((d) => d.visible);
