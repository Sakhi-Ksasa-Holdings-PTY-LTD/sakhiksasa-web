'use client';
import { COMPANY } from "@/config/company";

export function ContactForm() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const f = e.target as HTMLFormElement;
      const name = (f.elements.namedItem('name') as HTMLInputElement).value;
      const email = (f.elements.namedItem('email') as HTMLInputElement).value;
      const message = (f.elements.namedItem('message') as HTMLTextAreaElement).value;
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent('Contact from ' + name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`;
    }} style={{ marginTop: '32px' }}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Name</label>
        <input className="form-input" id="name" name="name" type="text" required placeholder="Your name" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" id="email" name="email" type="email" required placeholder="you@company.com" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea className="form-input" id="message" name="message" required rows={5} placeholder="How can we help?" style={{ resize: 'vertical' }}></textarea>
      </div>
      <div className="form-consent">
        <input id="consent" type="checkbox" required />
        <label htmlFor="consent" style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
          I consent to Sakhi&rsquo;ksasa Holdings processing my personal information as described in the <a href="/legal/privacy" style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
        </label>
      </div>
      <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
    </form>
  );
}
