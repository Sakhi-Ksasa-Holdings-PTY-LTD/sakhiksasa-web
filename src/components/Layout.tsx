/**
 * Shared components for the Sakhi'ksasa Holdings website.
 */

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div>
            <div className="font-heading text-lg font-bold">
              Sakhi&apos;ksasa Holdings (Pty) Ltd
            </div>
            <div className="mt-1 text-sm text-paper/60">
              CIPC 2026/405064/07 · Vryheid, KwaZulu-Natal, South Africa
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/standpoint" className="text-paper/80 hover:text-gold">Standpoint</a>
            <a href="/systems" className="text-paper/80 hover:text-gold">Systems</a>
            <a href="/about" className="text-paper/80 hover:text-gold">About</a>
            <a href="/contact" className="text-paper/80 hover:text-gold">Contact</a>
            <a href="https://instagram.com/sakhi.holdings" target="_blank" rel="noopener noreferrer" className="text-paper/80 hover:text-gold">Instagram</a>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/legal/terms" className="text-paper/80 hover:text-gold">Terms of Service</a>
            <a href="/legal/privacy" className="text-paper/80 hover:text-gold">Privacy Policy</a>
            <a href="/legal/ai-use" className="text-paper/80 hover:text-gold">AI Use Notice</a>
            <a href="/legal/acceptable-use" className="text-paper/80 hover:text-gold">Acceptable Use Policy</a>
            <a href="/legal/data-processing" className="text-paper/80 hover:text-gold">Data Processing Addendum</a>
            <a href="/legal/founding-client-addendum" className="text-paper/80 hover:text-gold">Founding Client Addendum</a>
            <a href="/legal/key-limitations" className="text-paper/80 hover:text-gold">Key Limitations</a>
          </div>
        </div>
        <div className="mt-8 border-t border-paper/10 pt-4 text-xs text-paper/40">
          © {new Date().getFullYear()} Sakhi&apos;ksasa Holdings (Pty) Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="font-heading text-lg font-bold text-ink">Sakhi&apos;ksasa</span>
          <span className="hidden text-xs text-gold sm:inline">Holdings</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a href="/standpoint" className="text-sm text-ink/70 hover:text-gold">Standpoint</a>
          <a href="/systems" className="text-sm text-ink/70 hover:text-gold">Systems</a>
          <a href="/about" className="text-sm text-ink/70 hover:text-gold">About</a>
          <a href="/media" className="text-sm text-ink/70 hover:text-gold">Media</a>
          <a href="/contact" className="text-sm text-ink/70 hover:text-gold">Contact</a>
          <a
            href="https://standpoint-web.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-gold"
          >
            Launch Standpoint
          </a>
        </div>
        <div className="md:hidden">
          <a
            href="https://standpoint-web.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-ink px-3 py-1.5 text-xs font-medium text-paper"
          >
            Launch
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SkylineHero({ title, subtitle }: { title: string; subtitle?: string }) {
  const bars = [
    { h: "55%", c: "#FF5E3A" },
    { h: "85%", c: "#FFB347" },
    { h: "40%", c: "#14B8A6" },
    { h: "70%", c: "#8B5CF6" },
    { h: "60%", c: "#FF5E3A" },
    { h: "95%", c: "#FFB347" },
    { h: "45%", c: "#14B8A6" },
    { h: "75%", c: "#8B5CF6" },
  ];
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 35%, rgba(176,138,62,0.4), transparent 40%), radial-gradient(circle at 75% 65%, rgba(255,94,58,0.3), transparent 35%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:py-28">
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-2xl text-base text-paper/80 md:text-lg">{subtitle}</p>
        )}
        {/* Skyline bars */}
        <div className="flex h-32 w-full max-w-2xl items-end justify-center gap-2 md:gap-3">
          {bars.map((b, i) => (
            <div
              key={i}
              className="bar w-8 rounded-t md:w-12"
              style={{
                ["--bar-h" as string]: b.h,
                background: `linear-gradient(180deg, ${b.c}, ${b.c}55)`,
                boxShadow: `0 0 20px ${b.c}88`,
                height: b.h,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CookieBanner() {
  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-paper px-6 py-3 shadow-lg"
      style={{ display: "none" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p className="text-xs text-ink/70">
          We use essential cookies to keep you logged in. By using this site, you agree to our{" "}
          <a href="/legal/privacy" className="text-gold hover:underline">Privacy Policy</a>.
        </p>
        <button
          onClick={() => {
            const banner = document.getElementById("cookie-banner");
            if (banner) banner.style.display = "none";
            document.cookie = "cookie-consent=accepted; max-age=31536000; path=/";
          }}
          className="rounded-lg bg-ink px-4 py-1.5 text-xs font-medium text-paper hover:bg-gold"
        >
          Accept
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (!document.cookie.includes('cookie-consent=accepted')) {
              document.getElementById('cookie-banner').style.display = 'block';
            }
          `,
        }}
      />
    </div>
  );
}
