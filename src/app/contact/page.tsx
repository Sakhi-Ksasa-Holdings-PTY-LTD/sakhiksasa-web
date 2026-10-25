import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY } from "@/config/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sakhi'ksasa Holdings. Email only \u2014 no WhatsApp for clients.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <section className="section container" style={{ maxWidth: '600px' }}>
          <div className="section-label">Contact</div>
          <h1>Get in touch</h1>
          <p className="section-desc">We respond to emails within 2 business days. No WhatsApp for client communication.</p>
          <div className="card" style={{ marginTop: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--brand-primary)' }}>Email</div>
            <a href={`mailto:${COMPANY.email}`} style={{ fontSize: 'var(--text-lg)', fontWeight: 500, display: 'block', marginTop: '4px' }}>{COMPANY.email}</a>
          </div>
          <ContactForm />
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
