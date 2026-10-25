'use client';

export function CookieBanner() {
  return (
    <div id="cookie-banner" className="cookie-banner" style={{ display: 'none' }}>
      <p>We use essential cookies only. By using this site, you agree to our <a href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</a>.</p>
      <button onClick={() => {
        const b = document.getElementById('cookie-banner');
        if (b) b.style.display = 'none';
        document.cookie = 'cookie-consent=accepted; max-age=31536000; path=/';
      }} style={{ background: 'var(--brand-primary)', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px 20px', fontSize: '0.875rem', cursor: 'pointer' }}>Accept</button>
      <script dangerouslySetInnerHTML={{ __html: `if(!document.cookie.includes('cookie-consent=accepted')){document.getElementById('cookie-banner').style.display='flex';}` }} />
    </div>
  );
}
