import type { Metadata } from "next";
import { Nav, Footer } from "@/components/Layout"
import { ContactForm } from "@/components/ContactForm"
import { CookieBanner } from "@/components/CookieBanner";
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
          <ContactForm />
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
