/**
 * Sakhi'ksasa Holdings — Holding-company brand config.
 *
 * Single source of truth for the public marketing site (sakhiksasa-web).
 * Brand colours are extracted verbatim from the official logo asset.
 *
 *   Primary blue   #2b2fd9  (logo ring + inner disc)
 *   Accent orange #e8590c  (logo stem + crown)
 *   Cream surface #f3f0ea  (logo background)
 *   Deep ink      #1a1a2e  (primary text)
 *
 * Vision / Mission / Values text is approved verbatim — do not paraphrase.
 */

export const BRAND = {
  /* Identity */
  legalName: "Sakhi'ksasa Holdings (Pty) Ltd",
  shortName: "Sakhi'ksasa",
  regNumber: "2026/405064/07",
  location: "Vryheid, KwaZulu-Natal, South Africa",
  locationShort: "Vryheid, KZN",
  founded: "2026",
  email: "sakhiksasaholdingsptyltd@gmail.com",
  instagram: "https://instagram.com/sakhi.holdings",
  instagramHandle: "@sakhi.holdings",
  whatsapp: "+27 78 195 6558",

  /** Motto — the brand promise, headline-grade. */
  motto: "We don't wait for validation. We make the first move.",
  mottoLines: {
    line1: "We don't wait for validation.",
    line2: "We make the first move.",
  },

  /** One-line positioning statement. */
  positioning:
    "Sakhi'ksasa Holdings is a self-funded holding company that builds, owns, and operates businesses for the long term.",

  /** Approved Vision statement — verbatim. */
  vision:
    "To build enduring businesses that outlast their founders and compound value across generations.",

  /** Approved Mission statement — verbatim. */
  mission:
    "Sakhi'ksasa Holdings builds and owns businesses for the long term. We launch products that solve real problems, run them to a high standard, and reinvest what they earn into the next.",

  /** Approved Values — verbatim titles + descriptions. */
  values: [
    {
      title: "Longevity over speed",
      desc: "We make decisions we can defend in ten years, not ten weeks.",
    },
    {
      title: "Ownership",
      desc: "We answer for outcomes, not effort.",
    },
    {
      title: "Standards",
      desc: "We ship at the quality we would demand as clients.",
    },
    {
      title: "Integrity",
      desc: "We say what is true, even when it costs us.",
    },
    {
      title: "Reinvestment",
      desc: "What we earn goes back into building.",
    },
  ],

  /**
   * Strategic goals — confirmed by founder (Sanele Zwane).
   * Goal 3 (self-funded) and Goal 5 (geography) both confirmed in session.
   */
  goals: [
    "Build a portfolio of profitable, self-sustaining businesses that compound value over decades — not quarters.",
    "Launch products that solve real problems for real businesses, and run them to a standard our clients can rely on.",
    "Reinvest earnings into the next venture, so the company grows without depending on outside capital.",
    "Be recognised as a company that holds itself to the highest standard of integrity and quality, regardless of scale.",
    "Prove that world-class companies can be built from Vryheid — and that geography is not a ceiling.",
  ],

  /** Founder / leadership. */
  founder: {
    name: "Sanele T. Zwane",
    role: "Founder & Chief Executive",
    initials: "SZ",
    bio: "Sanele T. Zwane founded Sakhi'ksasa Holdings with a conviction that enduring businesses are built by those who make the first move — not by those who wait for permission. Based in Vryheid, KwaZulu-Natal, he leads the company's strategy, capital allocation, and product vision.",
    quote:
      "Geography is not a ceiling. Discipline is the only one that matters.",
  },

  /** The flagship product — Standpoint. */
  standpoint: {
    name: "Standpoint",
    tagline: "Know where you stand. Fix where you lag.",
    description:
      "A competitive-intelligence platform that turns scattered competitor signals — SEO, social, ad spend, reviews — into a single 0–100 Standing Index. Built for businesses that want to know where they lead, where they lag, and what to do about it.",
    url: "https://standpoint-web.onrender.com",
    pillars: [
      {
        title: "The Standing Index",
        desc: "One 0–100 score that combines SEO, social, ad spend, reviews, and pricing — so you know where you rank at a glance.",
      },
      {
        title: "Blind-spot tracking",
        desc: "Standpoint flags where you trail the category leader by 25+ points, in plain English your team can act on.",
      },
      {
        title: "Tiered for every stage",
        desc: "From a forever-free tier to enterprise multi-branch, pricing scales with the business — never the other way around.",
      },
    ],
    tiers: [
      { name: "Free", price: "R0", period: "/mo", note: "Forever-free" },
      { name: "Starter", price: "R1,000", period: "/mo", note: "Founding pilot R500" },
      { name: "Growth", price: "R2,500", period: "/mo", note: "3 seats" },
      { name: "Pro", price: "R7,500", period: "/mo", note: "10 seats" },
      { name: "Enterprise", price: "from R20,000", period: "/mo", note: "Unlimited" },
    ],
    faqs: [
      {
        q: "What is the Standing Index?",
        a: "A proprietary 0–100 score that combines SEO, social, ad spend, reviews, and pricing signals into one number — so you know where you rank against every competitor at a glance.",
      },
      {
        q: "How does the free tier work?",
        a: "Free forever for one competitor with a monthly snapshot. First-time users also get two tracked blind spots for 30 days.",
      },
      {
        q: "What is the founding pilot?",
        a: "The first three clients get Starter features at R500/month for six months (instead of R1,000). Setup fee waived. In return: a testimonial, a case study, and a monthly feedback call.",
      },
    ],
  },
} as const;

export type BrandConfig = typeof BRAND;
