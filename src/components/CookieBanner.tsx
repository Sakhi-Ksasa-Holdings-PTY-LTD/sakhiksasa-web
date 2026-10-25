'use client';

export function CookieBanner() {
  return (
    <div
      id="cookie-banner"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-paper px-6 py-3 shadow-lg"
      style={{ display: 'none' }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p className="text-xs text-ink/70">
          We use essential cookies to keep you logged in. By using this site, you agree to our{' '}
          <a href="/legal/privacy" className="text-gold hover:underline">Privacy Policy</a>.
        </p>
        <button
          onClick={() => {
            const banner = document.getElementById('cookie-banner');
            if (banner) banner.style.display = 'none';
            document.cookie = 'cookie-consent=accepted; max-age=31536000; path=/';
          }}
          className="rounded-lg bg-ink px-4 py-1.5 text-xs font-medium text-paper hover:bg-gold"
        >
          Accept
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `if (!document.cookie.includes('cookie-consent=accepted')) { document.getElementById('cookie-banner').style.display = 'block'; }`,
        }}
      />
    </div>
  );
}
