# Security Hardening Checklist — GitHub, repos, launched products

Owner: Don (founder). Everything below is a click-by-click action you do
yourself in a browser — no one else needs account access, ever.
Time required: ~30–45 minutes, once.

---

## 1. GitHub account (do this first)

1. **Turn on 2FA** — GitHub → your avatar → *Settings* → *Password and
   authentication* → *Enable two-factor authentication*. Prefer a **passkey**
   or an **authenticator app** (Google Authenticator, Authy) over SMS.
   Download the **recovery codes** and store them offline (print or password
   manager) — this is your way back in if you lose your device.
2. **Review active sessions** — *Settings* → *Sessions*. Sign out anything
   you do not recognise.
3. **Review OAuth apps** — *Settings* → *Applications* → *Authorized OAuth
   Apps*. Revoke anything you do not actively use (especially anything with
   `repo` scope you don't recognise).
4. **Review personal access tokens (PATs)** — *Settings* → *Developer
   settings* → *Personal access tokens*. Revoke all except ones you created
   deliberately and still need. If any long-lived classic token exists that
   you don't need, delete it and issue a fine-grained one scoped to a single
   repo with an expiry date instead.
5. **Review SSH keys / deploy keys** — *Settings* → *SSH and GPG keys*.
   Remove keys you don't recognise. Check each **repo** → *Settings* →
   *Deploy keys* too.
6. **Check the audit log** — *Settings* → *Audit log*. Look for sign-ins or
   events from places you have never been. If you see anything suspicious:
   revoke everything in steps 3–5, change your password, and re-secure.
7. **Email + password hygiene** — use a unique password (password manager),
   and secure the underlying Gmail account with its own 2FA, since password
   resets route there.

## 2. Repositories (sakhiksasa-web and the others)

1. **Collaborator audit** — repo → *Settings* → *Collaborators*. If anyone
   is listed who should not be, remove them immediately, then rotate any
   secrets they could have seen (Render env vars, API keys).
2. **Branch protection** — repo → *Settings* → *Branches* → *Add branch
   protection rule* for `main`: require a pull request before merging
   (or at minimum: do not allow force pushes and do not allow deletions).
   With a single maintainer, "require PR" may slow you down — the essential
   part is **disallow force pushes and deletions**.
3. **Enable Dependabot** — repo → *Settings* → *Code security and analysis*
   → enable *Dependabot alerts*, *Dependabot security updates*, **Secret
   scanning** and **Push protection** (push protection blocks anyone from
   accidentally committing an API key).
4. **Visibility check** — confirm which repos are Public vs Private. Public
   repos must contain no `.env`, no keys, no customer data (this repo is
   clean — audited: git history scanned for secrets, none found; only
   `.env.example` placeholders are tracked).
5. **Repo webhooks** — repo → *Settings* → *Webhooks*. Delete any you did
   not create.

## 3. Render (launched products: sakhiksasa-web, standpoint-web)

1. **Render account 2FA** — Render dashboard → *Account Settings* →
   *Two-factor authentication*.
2. **Rotate environment variables** — for each service: *Environment* tab.
   Rotate anything sensitive at least once:
   - `ADMIN_VIEW_KEY` (the /admin/log key) — make it a long random string,
     then update your bookmark.
   - `BREVO_API_KEY` — regenerate in Brevo → *SMTP & API* → *API keys*,
     paste the new one into Render, delete the old key in Brevo.
   - Any database URLs or other service keys.
   Rotation closes the door on anyone who might have seen a value before.
3. **Render access audit** — dashboard team members list: remove anyone who
   is not you. Check *Events* logs on each service for deploys you did not
   trigger.
4. **Autodeploy scope** — service → *Settings* → confirm autodeploy is tied
   to the `main` branch of your repo only (so random branches never ship).

## 4. The products themselves (already done in this repo)

- [x] Security headers on every route (`next.config.ts`): frame-deny,
      nosniff, referrer policy, permissions policy, HSTS.
- [x] `poweredByHeader: false` (no X-Powered-By leak).
- [x] `/admin/log` fails closed: shows nothing when `ADMIN_VIEW_KEY` is
      unset or wrong; `noindex`; blocked in robots.txt.
- [x] Contact API rate-limited (5/IP/hour) to blunt spam and protect the
      Brevo quota.
- [x] All form inputs validated + length-capped server-side; HTML in emails
      is escaped.
- [x] No secrets in git history (audited with a full-history scan).
- [x] `SECURITY.md` added so responsible disclosures go to your inbox.
- [ ] Future (optional): a strict Content-Security-Policy — needs nonce
      plumbing for inline styles; do it as a standalone change, not in a
      copy pass.

## 5. Standing rule

**Nobody needs your passwords. Ever.** Any "agent", developer, or service
that asks for your GitHub login, Gmail password, or Render credentials is
either mistaken or malicious. Legitimate collaborators get scoped access
(a deploy key, a PAT with an expiry, a Render team seat) — and you revoke
it when the work is done.
