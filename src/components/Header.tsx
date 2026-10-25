import { COMPANY } from "@/config/company";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="/" className="brand-logo">
          <img src="/icon.png" alt="Sakhi'ksasa Holdings logo" />
          <span className="brand-logo-text">Sakhi&rsquo;ksasa</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/vision-mission">Vision &amp; Mission</a>
          <a href="/standpoint">Standpoint</a>
          <a href="/contact">Contact</a>
          <a href="/contact" className="nav-cta">Request a Demo</a>
        </nav>
        <button className="mobile-menu-btn" aria-label="Menu" onClick={() => {
          const nav = document.querySelector('.nav-links');
          if (nav) nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        }}>&#9776;</button>
      </div>
    </header>
  );
}
