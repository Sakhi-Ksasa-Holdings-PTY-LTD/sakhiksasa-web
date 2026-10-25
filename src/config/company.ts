/**
 * Sakhi'ksasa Holdings — Company Configuration
 * Single source of truth for all company data.
 */

export const COMPANY = {
  name: "Sakhi'ksasa Holdings (Pty) Ltd",
  shortName: "Sakhi'ksasa",
  regNumber: "2026/405064/07",
  location: "Durban, KwaZulu-Natal, South Africa",
  email: "sakhiksasaholdingsptyltd@gmail.com",
  motto: "We don't wait for validation. We make the first move.",
  
  founder: {
    name: "Sanele T. Zwane",
    role: "Founder & CEO",
    bio: "Sanele T. Zwane founded Sakhi'ksasa Holdings with a conviction that enduring businesses are built by those who make the first move — not by those who wait for permission. Based in Durban, he leads the company's strategy, capital allocation, and product vision.",
    initials: "SZ",
  },

  vision: "To build enduring businesses that outlast their founders and compound value across generations.",
  
  mission: "Sakhi'ksasa Holdings builds and owns businesses for the long term. We launch products that solve real problems, run them to a high standard, and reinvest what they earn into the next.",
  
  values: [
    { title: "Longevity over speed", desc: "We make decisions we can defend in ten years, not ten weeks." },
    { title: "Ownership", desc: "We answer for outcomes, not effort." },
    { title: "Standards", desc: "We ship at the quality we would demand as clients." },
    { title: "Integrity", desc: "We say what is true, even when it costs us." },
    { title: "Reinvestment", desc: "What we earn goes back into building." },
  ],

  goals: [
    "Build a portfolio of profitable, self-sustaining businesses that compound value over decades — not quarters.",
    "Launch products that solve real problems for real businesses, and run them to a standard our clients can rely on.",
    "Reinvest earnings into the next venture, so the company grows without depending on outside capital. [CONFIRM]",
    "Be recognised as a company that holds itself to the highest standard of integrity and quality, regardless of scale.",
    "Prove that world-class companies can be built from Durban — and that geography is not a ceiling. [CONFIRM]",
  ],

  standpoint: {
    name: "Standpoint",
    tagline: "Know where you stand. Fix where you lag.",
    description: "A competitive-intelligence platform that turns scattered competitor signals — SEO, social, ad spend, reviews — into a single 0–100 Standing Index. Built for businesses that want to know where they lead, where they lag, and what to do about it.",
    url: "https://standpoint-web.onrender.com",
    tiers: [
      { name: "Free", price: "R0", period: "/mo", features: ["1 competitor", "Monthly snapshot", "2 blind spots (first 30 days)", "Basic dashboard"], featured: false },
      { name: "Starter", price: "R1,000", period: "/mo", features: ["3 competitors", "Weekly refresh", "Email alerts", "AI monthly briefing (Coming soon)"], featured: true },
      { name: "Growth", price: "R2,500", period: "/mo", features: ["5 competitors", "Twice-weekly", "PDF report", "3 seats"], featured: false },
      { name: "Pro", price: "R7,500", period: "/mo", features: ["10 competitors", "Daily + weekly deep", "Data export", "10 seats"], featured: false },
      { name: "Enterprise", price: "from R20,000", period: "/mo", features: ["25 competitors", "Multi-branch", "API access", "Unlimited seats"], featured: false },
    ],
    faqs: [
      { q: "What is the Standing Index?", a: "A proprietary 0–100 score that combines SEO, social, ad spend, reviews, and pricing signals into one number — so you know where you rank against every competitor at a glance." },
      { q: "How does the free tier work?", a: "Free forever for 1 competitor with a monthly snapshot. First-time users also get 2 tracked blind spots for 30 days. After 30 days, blind-spot tracking locks but the dashboard keeps updating." },
      { q: "What are blind spots?", a: "Blind spots are metrics where you trail the category leader by 25+ points. Standpoint flags them in plain English so your team knows exactly what to fix." },
      { q: "What is the founding pilot?", a: "The first 3 clients get Starter features at R500/mo for 6 months (instead of R1,000/mo). Setup fee waived + free assisted setup. In return: a testimonial, a case study, and a monthly 30-minute feedback call." },
    ],
  },
};
