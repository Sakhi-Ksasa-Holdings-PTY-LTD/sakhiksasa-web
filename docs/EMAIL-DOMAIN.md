# Sending email from your own address — domain verification walkthrough

Answers: "walk me through it to verify my own domain, if it is free if not save it for later with the rest of the tasks that require money."

## Where we are today

The website's enquiry system (`/api/contact`) sends two emails on every enquiry:

1. An **auto-reply** to the enquirer ("We've received your enquiry — SKH-XXXXXX").
2. A **forward** of the enquiry to the company inbox.

Both go through **Brevo** (the transactional-email provider wired into the
contact route). Brevo needs to know the "From" address is one you control,
otherwise it falls back to Brevo's shared sandbox sender
`onboarding@brevo.com` — which looks unprofessional in a client's inbox.

There are **two paths** to fix that. One is free and you can do it in five
minutes today. The other costs money (a domain) and belongs on the
paid-tasks list for later.

---

## Path A — Verify your existing Gmail address in Brevo (FREE · do this now)

This makes the auto-reply send **from** `sakhiksasaholdingsptyltd@gmail.com`
(the address clients already see). Cost: **R0**. Brevo's free tier allows
this and it does not change your Gmail account in any way.

### Steps

1. Sign in at **https://app.brevo.com** (use the same login that owns the
   `BREVO_API_KEY` already set on Render).
2. Top menu → **Senders & IP** → **Senders** tab → click **Add a new sender**.
3. Fill in:
   - **Name**: `Sakhi'ksasa Holdings`
   - **Email**: `sakhiksasaholdingsptyltd@gmail.com`
4. Brevo sends a confirmation email to that Gmail address. Open Gmail, find
   the Brevo email, click **Verify this sender**.
5. Back in Brevo, the sender now shows a green "Verified" badge.

### Make the website actually use it

On Render (the hosting dashboard for `sakhiksasa-web`):
1. Open the **sakhiksasa-web** service → **Environment** tab.
2. Add (or update) the variable:
   ```
   BREVO_SENDER_EMAIL=sakhiksasaholdingsptyltd@gmail.com
   BREVO_SENDER_NAME=Sakhi'ksasa Holdings
   ```
3. Save — Render redeploys automatically. The next enquiry auto-reply will
   arrive from the company Gmail.

### Limits to know (free tier)
- **300 emails/day** — far more than enquiry volume needs.
- Gmail as a "From" address works, but some strict mail servers treat
  `@gmail.com` business mail cautiously. This is a cosmetic / convenience
  step, not the final state.

---

## Path B — Your own custom domain (PAID · save for later)

The professional end-state: send as `no-reply@sakhiksasa.co.za` (or similar)
from a domain you own. This needs **two** things, only one of which is free.

### B1. Own a domain — PAID (the part to defer)
- A `.co.za` domain is ~**R50–R95/year** at Afrihost, Domains.co.za, or
  RegisterDomains. A `.com` is ~R180–R250/year.
- Buy it, keep the DNS at the registrar (or move DNS to Cloudflare's free
  tier for faster records).
- This goes on the **paid-tasks list** alongside: business banking, a
  registered office address, paid Brevo (once email volume justifies it),
  and a custom email inbox (Google Workspace ~R140/mo or Zoho Mail free tier).

### B2. Verify that domain in Brevo — FREE (once you own it)
Once the domain is yours, verifying it in Brevo costs nothing:
1. Brevo → **Senders & IP** → **Domains** → **Add a domain**.
2. Enter `sakhiksasa.co.za`.
3. Brevo gives you **three DNS records** to add at your registrar:
   - an **SPF** TXT record,
   - a **DKIM** TXT (or CNAME) record,
   - a **DKIM CNAME** for signing.
4. Add them in your registrar's DNS panel. Propagation: 15 min – 24 h.
5. Brevo shows green ticks next to each record once verified.

After that, any address `@sakhiksasa.co.za` can be used as a "From" — and
delivery to Gmail/Outlook/banks is noticeably better because SPF + DKIM pass.

---

## Recommendation

1. **Today (free):** do Path A — verify `sakhiksasaholdingsptyltd@gmail.com`
   in Brevo and set the two Render env vars. Five minutes, zero rand.
2. **Later (paid):** when you're ready to spend on a domain, do Path B in
   this order: buy `.co.za` → verify in Brevo → set up a real inbox
   (`no-reply@sakhiksasa.co.za`) → update `BREVO_SENDER_EMAIL` on Render.

Until Path B is done, the auto-reply will come from the company Gmail —
which is perfectly fine for a young company. The domain move is a polish
step, not a blocker.
