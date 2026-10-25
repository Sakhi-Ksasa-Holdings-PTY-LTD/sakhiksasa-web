import type { Metadata } from "next";
import { Nav, Footer, CookieBanner } from "@/components/Layout";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sakhi'ksasa Holdings. Email only — no WhatsApp for clients.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-xl px-6 py-20">
          <h1 className="font-heading text-4xl font-bold text-center">Contact us</h1>
          <p className="mt-3 text-center text-ink/60">
            We respond to emails within 2 business days. No WhatsApp for client communication.
          </p>

          {/* Email link */}
          <div className="mt-10 rounded-xl border border-line bg-white p-6 text-center">
            <div className="text-sm font-medium text-gold">Email</div>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-1 block text-lg font-medium text-ink hover:text-gold"
            >
              {COMPANY.email}
            </a>
          </div>

          {/* Contact form */}
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
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-line px-4 py-2 text-sm focus:border-gold focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-line px-4 py-2 text-sm focus:border-gold focus:outline-none"
                placeholder="you@business.co.za"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-line px-4 py-2 text-sm focus:border-gold focus:outline-none"
                placeholder="How can we help?"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                required
                className="mt-1 rounded border-line"
              />
              <label htmlFor="consent" className="text-xs text-ink/60">
                I consent to Sakhi&apos;ksasa Holdings processing my personal information as described in
                the{" "}
                <a href="/legal/privacy" className="text-gold hover:underline">Privacy Policy</a>.
                This form sends an email — no data is stored on a server.
              </label>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-ink py-3 text-sm font-medium text-paper hover:bg-gold"
            >
              Send message
            </button>
          </form>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
