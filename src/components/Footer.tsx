import { COMPANY } from "@/config/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Sakhi&rsquo;ksasa Holdings (Pty) Ltd</div>
            <div className="footer-motto">{COMPANY.motto}</div>
            <div style={{ marginTop: '16px', fontSize: '0.875rem', color: 'rgba(243,240,234,0.5)' }}>
              {COMPANY.location} &middot; {COMPANY.regNumber}
            </div>
          </div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/vision-mission">Vision &amp; Mission</a>
            <a href="/standpoint">Standpoint</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-links">
            <a href="/legal/terms">Terms of Service</a>
            <a href="/legal/privacy">Privacy Policy</a>
            <a href="/legal/ai-use">AI Use Notice</a>
            <a href="/legal/acceptable-use">Acceptable Use</a>
            <a href="/legal/data-processing">DPA</a>
            <a href="/legal/key-limitations">Key Limitations</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Sakhi&rsquo;ksasa Holdings (Pty) Ltd. All rights reserved.</span>
          <span>Durban, South Africa</span>
        </div>
      </div>
    </footer>
  );
}
