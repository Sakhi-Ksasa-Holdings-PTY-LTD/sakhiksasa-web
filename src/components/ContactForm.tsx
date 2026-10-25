'use client';

import { COMPANY } from "@/config/company";

export function ContactForm() {
  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const name = (form.elements.namedItem("name") as HTMLInputElement).value;
        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
        window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
      }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">Name</label>
        <input id="name" name="name" type="text" required className="mt-1" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid var(--line)', borderRadius: '0.5rem', fontSize: '0.875rem' }} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
        <input id="email" name="email" type="email" required className="mt-1" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid var(--line)', borderRadius: '0.5rem', fontSize: '0.875rem' }} placeholder="you@business.co.za" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">Message</label>
        <textarea id="message" name="message" required rows={5} className="mt-1" style={{ width: '100%', padding: '0.5rem 1rem', border: '1px solid var(--line)', borderRadius: '0.5rem', fontSize: '0.875rem' }} placeholder="How can we help?"></textarea>
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" required className="mt-1" style={{ width: 'auto' }} />
        <label htmlFor="consent" className="text-xs text-ink/60">
          I consent to Sakhi&apos;ksasa Holdings processing my personal information as described in the{' '}
          <a href="/legal/privacy" className="text-gold hover:underline">Privacy Policy</a>.
        </label>
      </div>
      <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send message</button>
    </form>
  );
}
