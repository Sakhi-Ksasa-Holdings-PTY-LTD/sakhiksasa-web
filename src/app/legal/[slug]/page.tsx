import { notFound } from "next/navigation";
import { Nav, Footer, CookieBanner } from "@/components/Layout";

// The legal documents are stored as raw markdown strings.
// These are the attorney-reviewed versions from the Standpoint repo.
// To update: copy the text from /legal/*.md in the Standpoint repo.

const legalDocs: Record<string, string> = {
  terms: `# Standpoint — Terms of Service

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026

## Supplier information (ECTA s43)

- **Supplier:** Sakhi'ksasa Holdings (Pty) Ltd, a private company, registration number 2026/405064/07
- **Registered office:** 181 Park Street, Vryheid, KwaZulu-Natal, South Africa
- **Service:** Standpoint, a competitive intelligence software service
- **Contact:** sakhiksasaholdingsptyltd@gmail.com · Information Officer: Sanele Zwane (registered with the Information Regulator of South Africa on 23 October 2026)
- **Prices:** see clause 4. All prices exclude VAT.
- **Payment:** by PayFast. We do not see or store your card details.
- **Cancellation and refunds:** see clauses 4 and 14.

## 1. About these Terms

1.1 These Terms govern your use of Standpoint (the "Service"). They bind the business or person that creates an account, buys a plan or uses the Service ("you"). If you accept for a business, you confirm you are authorised to bind it.

1.2 The agreement between us consists of: these Terms; the Key Limitations (which you must acknowledge at checkout); the AI Use Notice; the Acceptable Use Policy; the Privacy Policy; the Data Processing Addendum (where it applies); the Founding Client Addendum (if you are a Founding Client); and your plan and order details. If they conflict, the order of priority is: the Founding Client Addendum (for pilot pricing and pilot obligations only), the Data Processing Addendum (for personal information), then these Terms, then the other documents.

1.3 You accept these Terms by clicking to accept, by creating an account, or by using the Service. We record the document versions you accept, the time, your IP address and your user agent so that we can prove acceptance.

1.4 You must be at least 18 and you must use the Service for business or organisational purposes (including, for Political Club Ward Tracking, on behalf of a political club or party structure).

## 2. What the Service does and does not do

2.1 Standpoint collects competitor signals (search visibility, website traffic, advertising signals, price positioning, review velocity and social media growth) from third-party providers and public sources and turns them into a single 0–100 Standing Index. It shows where you rank against the competitors you choose, identifies blind spots, and (depending on your plan) produces AI-generated monthly briefings.

2.2 **Decision-support only.** The Service provides decision-support analysis. It is **not** financial, pricing, investment, tax or legal advice. Sakhi'ksasa is not a registered financial services provider under FAIS and is not your professional adviser. No adviser–client relationship arises.

2.3 The Standing Index is a proprietary composite score. It is not a valuation, a forecast or a guarantee of performance. We may refine the methodology and will note material changes in the product release notes.

2.4 Our data comes from third parties and public sources. It may be estimated, delayed, incomplete or wrong. Metrics older than 14 days are marked as stale in the Service.

2.5 Plans (prices exclude VAT):

| Plan | Monthly | Annual | Competitors | Seats | Setup fee |
|---|---|---|---|---|---|
| Free | R0 | n/a | 1 | 1 | None |
| Starter | R1,000 | R10,000 (2 months free) | 3 | 1 | None |
| Growth | R2,500 | R25,000 | 5 | 3 | R2,500 (waived if annual) |
| Pro | R7,500 | R75,000 | 10 | 10 | R7,500 |
| Enterprise | From R20,000 | From R200,000 | 25 (additional R400/month each) | Unlimited | From R25,000 |

## 3. Your account

3.1 Give us accurate information (business name, email, domain, social handles, Google Business Profile query) and keep it current.

3.2 Keep credentials confidential. You are responsible for everything done through your account, including by your seat users. Tell us immediately if you suspect unauthorised access.

3.3 Seat limits apply per plan. Do not share one seat between several people.

3.4 API keys (Enterprise only) are secret credentials. Do not publish or share them. We may revoke a key that is compromised or misused.

## 4. Fees and payment

4.1 You pay the fees for your plan. Prices exclude VAT, which we add where applicable.

4.2 Payments are processed by PayFast. By subscribing you authorise recurring charges through PayFast at the applicable interval. PayFast's own terms apply to the payment.

4.3 **Setup fees** are one-off and payable before activation. They are non-refundable once setup work has started. Waivers: Growth setup fee is waived on annual billing; the Founding Client Addendum waives the setup fee for Founding Clients.

4.4 Monthly plans are billed monthly in advance. Annual plans are billed once, in advance, for 12 months.

4.5 **Annual renewal.** Annual plans renew automatically for a further 12 months at the then-current annual price unless you cancel. We will email you a renewal reminder between 80 and 40 business days before the end of the term.

4.6 **Upgrades and downgrades.** Upgrades take effect immediately and you pay the pro-rata difference. Downgrades take effect at the next billing date.

4.7 **Additional competitors** (Enterprise) are R400 per competitor per month.

4.8 **Price changes.** We may change prices on 30 days' written notice, effective from your next billing period. Prices for an annual term already paid do not change until renewal.

4.9 **Late or failed payment.** We will retry failed payments and notify you. If payment is still outstanding 7 days after our notice, we may suspend access until it is paid.

4.10 **Refunds.** Fees are non-refundable except: (a) where the law requires (including any cooling-off right that applies to you under the CPA or ECTA); or (b) where we fail to provide the Service in a material respect and do not fix it within 30 days of your written notice, in which case we refund the fees for the unused part of the period.

4.11 Raise billing disputes within 30 days of the invoice. Pay the undisputed portion meanwhile.

4.12 **Free plan.** The Free plan has no fee and no service level. First-time users (one grant per verified email and per company/domain) receive 2 tracked blind spots for 30 days from account activation. After that, blind-spot tracking reverts to the standard Free-plan limit (none). We may change or discontinue the Free plan on 30 days' notice.

## 5. Your responsibilities

5.1 **You make the decisions.** You are solely responsible for every business decision you make using the Service. Before acting on any output (changing prices, spending on advertising, investing, or taking legal steps), check it against your own costs, margins and circumstances and, where appropriate, consult a qualified professional.

5.2 Do not treat the Standing Index or any briefing as the only basis for a decision.

5.3 Comply with the Acceptable Use Policy and all applicable law, including the Competition Act 89 of 1998. You must not use the Service to coordinate pricing or conduct with competitors.

5.4 If you give us personal information (for example, seat users or any personal data you connect), you confirm you are entitled to do so and have given any notices POPIA requires.

## 6. AI-generated content

6.1 Briefings and some analysis are generated using AI models as described in the AI Use Notice. Our controls reduce errors but cannot eliminate them.

6.2 Every briefing carries this notice: *"Decision-support analysis, not financial, pricing or legal advice. Based on data as at [date]. Check against your own costs, margins and circumstances before acting."*

6.3 Pro and Enterprise briefings are quality-reviewed by a named internal reviewer before release. Starter and Growth briefings are AI-generated and a random 10% are audited internally after generation. We do not promise that any particular Starter or Growth briefing has been individually reviewed. The reviewer is an internal quality-assurance reviewer, not a credentialed external analyst.

6.4 Briefings describe observations and options with trade-offs. They are not predictions or guarantees of outcomes.

6.5 Report suspected errors to sakhiksasaholdingsptyltd@gmail.com. We will investigate and may correct or reissue the briefing.

## 7. Availability and third-party data

7.1 We aim for reliable service but provide it on an "as available" basis. We may perform maintenance and are not liable for outages or data delays caused by third-party providers or by events outside our reasonable control. No uptime commitment applies unless an Enterprise order form says so.

7.2 Third-party data is subject to the providers' terms. We may substitute providers without notice where the Service is not materially reduced.

## 8. Intellectual property

8.1 The Service, the Standing Index methodology, software, prompts, validators and branding belong to us or our licensors. You receive a limited, non-exclusive, non-transferable right to use the Service during your subscription.

8.2 **Your data.** You keep ownership of the information you give us (your business details, domains and handles).

8.3 **Outputs.** We grant you a non-exclusive licence to use briefings, reports and exports for your internal business purposes, including sharing them with your directors, employees, lenders and professional advisers. You may not resell them or present them publicly as independent research without our written consent.

8.4 If you give us feedback, you grant us a free, perpetual licence to use it to improve the Service, without attribution.

8.5 We will not use your data in cross-client benchmarking unless you opt in, and then only in aggregated form with a minimum group size of 5 clients.

## 9. Confidentiality

9.1 Each party must keep the other's non-public business information confidential and use it only for this agreement, for 3 years after termination (indefinitely for trade secrets).

9.2 This does not apply to information that is public, already known, independently developed, or required to be disclosed by law or a court.

## 10. Data protection

10.1 Our Privacy Policy explains how we handle personal information. The Data Processing Addendum applies to personal information we process for you as operator.

10.2 Tenant isolation: no client can see another client's data.

## 11. Warranties

11.1 We warrant that we have authority to enter this agreement and will provide the Service with reasonable care and skill.

11.2 Otherwise, to the extent the law permits, the Service is provided "as is". We give no warranty that data is accurate, complete or current, that the Service will be uninterrupted, or that any outcome will result from using it.

11.3 Nothing in this clause removes any right you have that cannot lawfully be excluded, including under the CPA.

## 12. Limitation of liability

**Please read this clause carefully. It limits our liability and you acknowledge that it has been drawn to your attention. The Key Limitations summarise it in plain language.**

12.1 Nothing in these Terms limits or excludes liability for fraud, gross negligence, wilful misconduct, death or personal injury, or any liability that cannot be limited or excluded by law (including any statutory right you hold under the CPA or POPIA).

12.2 Subject to 12.1, our total liability to you for all claims arising from or connected with the Service, whether in contract, delict or otherwise, is limited to the fees you paid us in the **12 months** before the event that gave rise to the first claim. If you are on the Free plan or have paid no fees, the limit is R1,000.

12.3 Subject to 12.1, we are not liable for indirect or consequential loss, or for loss of profit, revenue, goodwill, opportunity or anticipated savings.

12.4 Subject to 12.1, we are not liable for loss arising from a business decision you make using an output of the Service, including pricing, advertising, investment or legal decisions. You are responsible for verifying outputs against your own costs, margins and circumstances (clause 5).

12.5 Each party must take reasonable steps to limit its loss.

## 13. Indemnity

You indemnify us against third-party claims, and resulting losses and reasonable legal costs, arising from your breach of the Acceptable Use Policy, your unlawful use of the Service, or content or personal information you supply that infringes someone's rights. We will tell you promptly of any such claim and give reasonable cooperation.

## 14. Term and termination

14.1 The agreement starts when you accept it and runs for your plan period.

14.2 **You may cancel at any time** by notice through the Service or by email. Monthly plans end at the close of the current billing month. Annual plans end at the close of the paid term (with no renewal), and early termination does not entitle you to a refund except under clause 4.10 or where the law requires. You may delete a Free account at any time.

14.3 We may end the agreement for convenience on 30 days' written notice, refunding prepaid fees for the unused period.

14.4 Either party may end the agreement if the other commits a material breach and does not remedy it within 14 days of written notice. We may end it immediately for a serious breach of the Acceptable Use Policy or for unlawful use.

14.5 We may suspend access, with notice where practical, for non-payment, security risk, or breach of the Acceptable Use Policy.

14.6 **On termination:** access ends. You may export your data (where your plan includes export) for 30 days. We then delete your data as set out in the Privacy Policy, section 8. Accrued rights and clauses that by nature survive (including 8, 9, 12, 13 and 18) continue.

14.7 **Account deletion.** On deletion we permanently delete or irreversibly de-identify your personal information, except records we must keep by law, as set out in the Privacy Policy.

## 15. Changes

15.1 We may update these Terms or the Service. For material changes we will give 30 days' notice by email. If you do not agree, you may cancel and receive a pro-rata refund of prepaid fees for the unused period.

15.2 Continued use after the effective date means acceptance. We record acceptance of each new version.

## 16. Notices

Notices to you go to your account email. Notices to us go to sakhiksasaholdingsptyltd@gmail.com with a copy to our registered office. Each party chooses its registered address (or your account email) as its *domicilium citandi et executandi*. A notice sent by email is deemed received one business day after sending.

## 17. General

17.1 **Entire agreement.** This agreement is the whole agreement on its subject. No variation is binding unless in writing (including an electronic update under clause 15).

17.2 **Severability.** If a provision is unenforceable, the rest continues, and the provision is limited to the minimum extent needed.

17.3 **No waiver.** A delay in enforcing a right is not a waiver.

17.4 **Assignment.** We may assign this agreement to a successor of the business. You need our written consent to assign.

17.5 **Force majeure.** Neither party is liable for failure caused by events beyond its reasonable control, including power outages, provider outages, and acts of government. This does not excuse payment obligations.

17.6 **Electronic acceptance.** Electronic acceptance is binding under the Electronic Communications and Transactions Act 25 of 2002.

## 18. Governing law and disputes

18.1 South African law governs this agreement.

18.2 The parties will first try in good faith to resolve a dispute by written negotiation for 30 days.

18.3 Failing that, the courts of South Africa have jurisdiction, including the High Court of South Africa, KwaZulu-Natal Division, and any Magistrates' Court with jurisdiction. You consent to the Magistrates' Court's jurisdiction under s45 of the Magistrates' Courts Act 32 of 1944, even if the claim would otherwise fall outside it.

18.4 Either party may seek urgent interim relief from a competent court. If you are protected by the CPA, you may also approach the National Consumer Commission, the National Consumer Tribunal or an accredited ombud.`,

  privacy: `# Standpoint — Privacy Policy

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026

This policy explains how Sakhi'ksasa Holdings (Pty) Ltd ("Sakhi'ksasa", "we") processes personal information through Standpoint, in line with the Protection of Personal Information Act 4 of 2013 (POPIA).

## 1. Who we are

Responsible party: Sakhi'ksasa Holdings (Pty) Ltd, registration 2026/405064/07, registered office 181 Park Street, Vryheid, KwaZulu-Natal, South Africa.

Information Officer: Sanele Zwane (registered with the Information Regulator of South Africa on 23 October 2026).

Privacy contact: sakhiksasaholdingsptyltd@gmail.com

## 2. Whose information this covers

2.1 Clients and their seat users: the people and businesses that sign up for Standpoint.

2.2 Competitors and other third parties: businesses (and, where a business is a sole proprietor or the name identifies a person, individuals) whose public signals a client asks us to track. Under POPIA, juristic persons are also data subjects.

2.3 Website visitors who interact with our site or sign-up pages.

Standpoint is for businesses. It is not directed at anyone under 18 and we do not knowingly collect children's information.

## 3. What we collect

We do not collect special personal information (such as health, religion or biometric data) and ask you not to put any into the Service.

Category | What | Source
---|---|---
Account | Business name, email, password (stored only as a scrypt hash), domain, social handles, Google Business Profile query | You
Contact | Phone number (used only for internal operational reports from our automated agents to the Sakhi'ksasa team — never for client notifications) | You
Competitors | Competitor names, domains and social handles | You, and public sources only
Metrics | Per competitor per month: search visibility, traffic, ad spend signals, price position, reviews, social growth | Third-party providers and public sources
Payments | PayFast transaction references and amounts. We do not receive or store card data. | PayFast
AI output | Briefing text, grounding validation results, model name and version, prompt version, input data hash | Generated by us
Legal | Versions of documents accepted, IP address, user agent, timestamp | Automatically
Internal records | Per-client monthly data, AI and labour costs in rand, and admin time spent | Internal operations

## 4. Why we process it, and our lawful basis

We collect information for these specific purposes and do not process it for incompatible ones. We do not sell personal information.

## 5. AI processing

We use Anthropic (Claude) to write briefings and extract/classify provider data. The AI Use Notice explains what each receives. We do not make decisions that have legal or similarly significant effects on any individual based solely on automated processing (POPIA s71). Briefings support a business decision made by a human client. Z.ai is a development-only fallback, is blocked in production, and receives no client data. Anthropic's terms state that customer data is not used to train their models.

## 6. Who we share information with (operators and sub-processors)

We share information only with the service providers below, who process it on our behalf, and with regulators or courts where the law requires.

Provider | Purpose | Location | Information accessed
---|---|---|---
Render (render.com) | Hosting and PostgreSQL database | Virginia, USA | All application data
Anthropic (Claude) | AI briefings | USA | Metric data and competitor names
Brevo | Email delivery (alerts, briefings, account notices — the only client-facing notification channel) | EU (France) | Client email and briefing text
Meta Cloud API | WhatsApp delivery for internal ops-agent reports only (never client-facing) | Global | Internal team phone number and report message
DataForSEO | Search visibility data | EU (Germany) | Domain names
Similarweb | Traffic estimates | Global | Domain names
Meta Ad Library | Ad spend signals (public data) | Global | Page names
Google Business Profile API | Review data | Global | Listing names
PayFast | Payment processing | South Africa | Payment reference and amount
Sentry | Error monitoring (when enabled) | USA | Error stack traces
Google Fonts | Font file delivery (via next/font/google) | Global (CDN) | None (font files only)

We will give 30 days' notice before adding or replacing a sub-processor that processes personal information. PayFast also acts as an independent responsible party for payment data under its own privacy policy.

## 7. Transfers outside South Africa

Most of our providers are outside South Africa. Under POPIA s72 we transfer personal information abroad only where: the recipient is bound by a written agreement giving a level of protection substantially similar to POPIA; or you consent; or the transfer is necessary to perform our contract with you. Our hosting database is in the USA. Details are in the Data Processing Addendum.

## 8. How long we keep information

Information | Retention
---|---
Briefings and AI audit trail | 5 years
Payment records | 5 years, or longer where required by law (accounting records up to 7 years)
API call logs | 90 days
Legal acceptance logs | 7 years (to prove acceptance and for legal compliance)
Account, competitor and metric data | While your account is active
Free-tier blind-spot grant records (hashed email + domain) | 24 months after the grant ends, then deleted

Account deletion. When you delete your account we permanently delete or irreversibly de-identify all your personal information, except records the law requires us to keep (payment and accounting records) and records we need to prove legal compliance (acceptance logs). Those are retained under restricted access for the periods above and used for no other purpose.

## 9. How we protect it

We apply reasonable technical and organisational safeguards (POPIA s19), including: tenant isolation so no client can see another client's data; salted scrypt password hashing; cryptographically signed sessions and webhooks; separate secrets for separate functions; hashed and revocable API keys; and access limited to what staff need. If a security compromise affects your personal information, we will notify you and the Information Regulator as soon as reasonably possible (POPIA s22).

## 10. Your rights

You may ask us to:
- Access the personal information we hold about you (s23)
- Correct or delete information that is inaccurate, irrelevant, excessive, out of date, incomplete, misleading or unlawfully obtained (s24)
- Object to processing based on our legitimate interests, on reasonable grounds (s11(3))
- Withdraw consent (for example, benchmarking opt-in or marketing), without affecting earlier lawful processing
- Opt out of direct marketing at any time (s69)

These rights apply equally to competitors and other third parties whose public information appears in the Service. We respond within a reasonable time, normally within 30 days. We may need to verify your identity first.

## 11. How to exercise your rights or complain

Email sakhiksasaholdingsptyltd@gmail.com. If you are unhappy with our response, you may complain to the Information Regulator of South Africa: JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001 · complaints.IR@justice.gov.za · inforeg@justice.gov.za.

## 12. Cookies

We use essential session cookies to keep you logged in and secure. We use essential session cookies only. If we add analytics or marketing cookies in the future, this section and consent mechanics will be updated.

## 13. Changes

We will tell you of material changes by email at least 30 days before they take effect and record your acceptance of new versions.`,

  "ai-use": `# Standpoint — AI Use Notice

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026

## The short version

Standpoint uses AI to write your briefings and to sort the raw data behind them. AI can be wrong. We check its work with automatic controls, and on higher plans a person approves it. Briefings are decision-support analysis, not financial, pricing or legal advice. You make the decisions.

## 1. Where AI is used

The AI does not receive your password, payment details, or other clients' data. Your information is kept separate from every other client's.

## 2. What AI does not do

- It does not give financial, pricing or legal advice.
- It does not make decisions for you or about individual people.
- It does not predict or guarantee results.
- It does not use another client's data to write your briefing. Cross-client benchmarking only happens if you opt in, and then only on anonymous, aggregated groups of at least 5 clients.

## 3. The controls we put around the AI

1. **Grounding check.** Every claim in a briefing must point to a stored metric or event. If a number in the briefing does not match our database, the claim is flagged and rejected.
2. **Language check.** Briefings must describe observations and options with their trade-offs, not give orders. Instructions like "cut your prices" or "you must", and promises like "guaranteed" or "will increase", are blocked.
3. **Decision-support notice.** Every briefing ends with: "Decision-support analysis, not financial, pricing or legal advice. Based on data as at [date]. Check against your own costs, margins and circumstances before acting."

## 4. Human review

| Plan | Review |
|---|---|
| Pro and Enterprise | A named internal reviewer must approve each briefing before it is released. The reviewer is an internal quality-assurance reviewer, not a credentialed external analyst. |
| Starter and Growth | AI-generated. A random 10% of briefings are audited internally. Most briefings are therefore not individually reviewed. |
| Free | Monthly snapshot only, with no AI briefing. |

## 5. Limits you should know about

Data comes from third parties and can be estimated, late or incomplete. AI can misread data or miss context that only you know: your costs, margins, contracts, local conditions. Our checks catch many errors but not all. A briefing can pass every check and still be wrong or unhelpful. A "Confidence" section in each briefing tells you how strongly the data supports its observations.

## 6. Your responsibility

Check anything important against your own numbers, and take professional advice before major pricing, spending, investment or legal decisions. If something looks wrong, tell us at sakhiksasaholdingsptyltd@gmail.com and we will investigate.

## 7. Your privacy

See our Privacy Policy. AI providers act as our service providers. Anthropic (Claude) processes metric data and competitor names to generate briefings. Anthropic's terms state that customer data is not used to train their models. Z.ai is a development-only fallback, is blocked in production, and receives no client data.`,

  "acceptable-use": `# Standpoint — Acceptable Use Policy

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026

## 1. Purpose

This policy sets the rules for using Standpoint so it stays lawful, secure and fair to everyone, including the competitors whose public information it tracks. It applies to you, your seat users and anyone using your account or API keys.

## 2. You must not

**Break the law or others' rights**
- Use the Service for any unlawful purpose or to facilitate unlawful conduct.
- Use the Service, its outputs or its data to coordinate or fix prices, allocate markets, rig bids or otherwise collude with competitors, in breach of the Competition Act 89 of 1998.
- Use the Service to harass, defame, threaten or unlawfully target any person or business, or to make unlawful comparative or misleading advertising claims.
- Infringe intellectual property, privacy or confidentiality rights.

**Misuse data and personal information**
- Enter personal information you are not entitled to share, or special personal information (for example health, religion, biometric data) or any information about children.
- Use competitor information from the Service to profile or locate individuals, or for any purpose other than lawful business analysis.
- Upload or connect data you obtained unlawfully.

**Scrape, copy or reverse engineer**
- Scrape, crawl, harvest or systematically extract data, scores, briefings or other content from the Service by automated or manual means, other than through the API where your plan includes it and within its limits.
- Reverse engineer, decompile, disassemble or try to discover the source code, Standing Index methodology, prompts, validators or models of the Service.
- Copy, frame, mirror or build a competing product or dataset from the Service, or use outputs to train or benchmark another AI or competitive intelligence product.
- Resell, sublicense, white-label or provide the Service to third parties without our written agreement.

**Attack or abuse the Service**
- Access accounts, data or systems you are not authorised to access, or attempt to bypass tenant isolation, authentication, rate limits or other security controls.
- Introduce malware, probe or test our systems for vulnerabilities without our written permission, or overload the Service.
- Share logins, exceed your seat limit, or share, publish or transfer API keys.
- Manipulate or try to manipulate the Standing Index, or the validators that govern AI output (for example by feeding us false data or prompting the AI to bypass its controls).

**Misrepresent outputs**
- Present Standpoint briefings as financial, pricing, legal or other professional advice, or as an independent audit or certification.
- Remove or alter the decision-support notice on a briefing you share.

## 3. API use (Enterprise)

API keys are for your own business systems. Respect rate limits. We may revoke or rotate a key that is exposed, abused or used outside this policy. You are responsible for all calls made with your keys.

## 4. Reporting

Report suspected misuse, security issues or errors to sakhiksasaholdingsptyltd@gmail.com. Report security vulnerabilities there too, and give us reasonable time to fix them before disclosing them.

## 5. Enforcement

We may investigate suspected breaches, remove content, rate-limit, suspend or end access, and report unlawful conduct to authorities, in line with clauses 14.4 and 14.5 of the Terms. Where reasonable, we will warn you first and give you a chance to fix the problem. For serious or repeated breaches, we may act immediately.`,

  "data-processing": `# Standpoint — Data Processing Addendum

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026

Forms part of the Standpoint Terms of Service between Sakhi'ksasa Holdings (Pty) Ltd ("Sakhi'ksasa") and the client ("Client"). It satisfies the written-contract requirement for operators in POPIA ss20–21.

## 1. Definitions and roles

1.1 Terms such as "personal information", "process", "responsible party", "operator" and "data subject" have their POPIA meanings.

1.2 Sakhi'ksasa as responsible party. For the Client's account data, seat-user details, payment references, legal acceptance logs, usage logs, and public information about competitors, Sakhi'ksasa decides why and how it is processed and is the responsible party. The Privacy Policy governs that processing.

1.3 Sakhi'ksasa as operator. If the Client submits or connects any other personal information for processing through the Service ("Client Personal Information"), the Client is the responsible party and Sakhi'ksasa is its operator. Sections 2 to 11 apply to Client Personal Information. The Client should not submit special personal information or information about children.

1.4 Information Officer. Sanele Zwane (registered with the Information Regulator of South Africa on 23 October 2026).

## 2. Processing details

| Item | Description |
|---|---|
| Subject matter | Providing the Standpoint Service under the Terms |
| Duration | The subscription term, plus the retention and deletion periods in section 9 |
| Nature | Storing, organising, analysing (including AI processing), transmitting and deleting |
| Purpose | Delivering the Standing Index, alerts, reports and AI briefings to the Client |
| Types of information | Names, business email addresses and phone numbers of the Client's users; competitor names, domains and social handles; business metrics; any Client Personal Information the Client submits |
| Data subjects | The Client's users; individuals identified through competitor names or listings; individuals whose information the Client submits |

## 3. Sakhi'ksasa's obligations as operator

Sakhi'ksasa will:
3.1 process Client Personal Information only on the Client's documented instructions (the Terms and the Client's use of the Service), unless the law requires otherwise, and tell the Client if it believes an instruction breaches POPIA;
3.2 treat Client Personal Information as confidential and ensure that people with access are bound by confidentiality;
3.3 maintain the security measures in Annexure B (POPIA s19);
3.4 not process Client Personal Information for its own purposes, sell it, or use it to build cross-client datasets (other than opt-in, aggregated benchmarking with a minimum group size of 5);
3.5 help the Client respond to data subject requests (section 7);
3.6 give the Client the information reasonably needed to show compliance, and allow audits under section 10.

## 4. Sub-processors

4.1 The Client authorises the sub-processors in Annexure A.

4.2 Sakhi'ksasa will give at least 30 days' notice (by email or in-app notice) before adding or replacing a sub-processor that processes Client Personal Information. The Client may object on reasonable data protection grounds within that period. If the parties cannot resolve the objection, the Client may terminate the affected Service and receive a pro-rata refund of prepaid fees.

4.3 Sakhi'ksasa will bind each sub-processor by written terms that provide protection substantially equivalent to this Addendum, and remains responsible for their performance.

## 5. Transfers outside South Africa (POPIA s72)

5.1 Client Personal Information is hosted in Virginia, USA, and is sent to other sub-processors in the countries listed in Annexure A.

5.2 Sakhi'ksasa will transfer Client Personal Information abroad only where: (a) the recipient is subject to a law, binding corporate rules or a binding agreement that provides an adequate level of protection substantially similar to POPIA, and effectively upholds principles for reasonable processing, including restricting onward transfer; or (b) the data subject consents; or (c) the transfer is necessary to perform the contract with the data subject or the Client. For sub-processors in the USA and elsewhere, Sakhi'ksasa relies on written data processing agreements with the recipients.

5.3 The Client acknowledges these transfers and agrees to them where its consent is required.

## 6. Security incidents

6.1 Sakhi'ksasa will notify the Client without undue delay and in any event within 48 hours after becoming aware of a security compromise affecting Client Personal Information.

6.2 The notice will say, as far as known: what happened, the information and data subjects affected, likely consequences, and the steps taken or proposed. Sakhi'ksasa will update the Client as it learns more and cooperate with its investigation.

6.3 As responsible party, the Client is responsible for notifying the Information Regulator and affected data subjects under POPIA s22 for Client Personal Information. For information for which Sakhi'ksasa is the responsible party, Sakhi'ksasa will notify the Regulator and affected data subjects as soon as reasonably possible.

6.4 Sakhi'ksasa will require sub-processors to notify it without undue delay of any compromise affecting the information.

## 7. Data subject rights

7.1 Data subjects have the rights of access, correction, deletion, objection and complaint under POPIA, set out in the Privacy Policy.

7.2 If Sakhi'ksasa receives a request relating to Client Personal Information, it will forward it to the Client within 5 business days and will not respond itself unless instructed or required by law.

7.3 Sakhi'ksasa will give reasonable help (including export, correction and deletion functions) so the Client can meet requests within the POPIA timeframes.

## 8. Retention

The retention periods in Annexure C apply. Records the law requires Sakhi'ksasa to keep are held under restricted access and used for no other purpose.

## 9. Return and deletion

9.1 On termination or account deletion the Client may export its data (where its plan includes export) for 30 days.

9.2 Within 30 days after that, Sakhi'ksasa will permanently delete or irreversibly de-identify Client Personal Information, including backups on their normal rotation, and confirm in writing on request, except for records the law requires it to keep.

## 10. Audit

On 30 days' notice, not more than once a year (or after a confirmed security incident), the Client may request evidence of compliance, and if that is insufficient, an audit by the Client or an independent auditor under confidentiality terms during business hours, without disrupting the Service or exposing other clients' data. The Client bears the audit costs.

## 11. Liability and general

11.1 Clause 12 of the Terms applies to this Addendum, except where POPIA or other law does not allow the limitation.

11.2 If this Addendum conflicts with the Terms on the processing of personal information, this Addendum prevails.

11.3 South African law governs this Addendum, and clause 18 of the Terms applies.

## Annexure A: Sub-processors

| # | Sub-processor | Purpose | Location | Information accessed |
|---|---|---|---|---|
| 1 | Render (render.com) | Hosting and PostgreSQL database | Virginia, USA | All application data |
| 2 | Anthropic (Claude) | LLM for AI briefings | USA | Metric data and competitor names |
| 3 | Brevo | Email delivery (alerts, briefings, account notices — the only client-facing notification channel) | EU (France) | Client email and briefing text |
| 4 | Meta Cloud API | WhatsApp delivery for internal ops-agent reports only (never client-facing) | Global | Internal team phone number and report message |
| 5 | DataForSEO | Search visibility data | EU (Germany) | Domain names |
| 6 | Similarweb | Traffic estimates | Global | Domain names |
| 7 | Meta Ad Library | Ad spend signals (public data) | Global | Page names |
| 8 | Google Business Profile API | Review data | Global | Listing names |
| 9 | PayFast | Payment processing | South Africa | Payment reference and amount |
| 10 | Sentry | Error monitoring (when enabled) | USA | Error stack traces |
| 11 | Google Fonts | Font file delivery | Global (CDN) | None (font files only) |

## Annexure B: Security measures

- **Tenant isolation:** no client can access another client's data.
- **Authentication:** passwords stored only as salted scrypt hashes; administrator sessions use signed cookies; API keys are random 32-byte values, stored hashed, limited to Enterprise accounts and revocable.
- **Secrets management:** four distinct secrets, enforced at application start-up, so a compromise of one does not expose the others.
- **Integrity of integrations:** outgoing webhooks are signed (HMAC-SHA256).
- **Data minimisation:** no card data is held (PayFast processes it); no on-premise or local file storage.
- **Access control:** staff access limited to what the role requires; admin approvals and AI reviews are logged.
- **AI safeguards:** grounding and directive-language validators; stored audit trail (input hash, model and prompt version).
- **Retention enforcement:** deletion routines per Annexure C.

## Annexure C: Retention

| Information | Period |
|---|---|
| Briefings and audit trail | 5 years |
| Payment records | 5 years, or longer where required by law (accounting records up to 7 years) |
| API call logs | 90 days |
| Legal acceptance logs | 7 years (to prove acceptance and for legal compliance) |
| Free-tier blind-spot grant records (hashed email + domain) | 24 months after the grant ends, then deleted |
| All other personal information | Deleted on account deletion, subject to the above |`,

  "founding-client-addendum": `# Standpoint — Founding Client Addendum

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026 · Forms part of the Standpoint Terms of Service. Applies only to the first three clients admitted to the Founding Client Pilot ("Founding Client").

## 1. Eligibility and start

1.1 The pilot is open to the first 3 clients who accept this Addendum and are confirmed in writing by Sakhi'ksasa. Founding Client number: [1/2/3].

1.2 The pilot runs for 6 months from the date Sakhi'ksasa activates your account (the "Pilot Start Date") and ends on the 6-month anniversary (the "Pilot Period").

## 2. What you get

2.1 Starter features: 3 competitors, weekly refresh, email alerts, and an AI-generated monthly briefing.

2.2 Price: R500 per month (excl. VAT) instead of the standard Starter price of R1,000, billed monthly only.

2.3 Setup fee waived, and free assisted setup.

2.4 No stacking. The pilot price is available on monthly billing only. It cannot be combined with annual pricing, the annual discount, any other discount or any other promotion.

## 3. What we ask in return

3.1 **Monthly feedback call.** One 30-minute call each month during the Pilot Period (6 calls), at a time we agree in good faith, with a decision-maker who uses the Service.

3.2 **Testimonial.** A short written testimonial, in your own words, based on your genuine experience, once you have used the Service for at least 3 months. We may suggest a draft, but you decide what it says. We do not require a favourable testimonial, only an honest one.

3.3 **Case study.** Reasonable help (for example, one interview and access to relevant non-confidential facts) for one case study about how you used Standpoint. We will not publish the case study, your name, your logo or any statistics about your business without your written approval of the final text. You will have 10 business days to review and approve or request changes.

## 4. How we may use what you give us

4.1 Once you approve content, you give us a free, non-exclusive licence to use your approved testimonial, case study, name and logo in our marketing for as long as Standpoint is offered, unless you withdraw it.

4.2 You may withdraw permission for future use on 30 days' written notice. We will stop new uses and remove the content from our channels within that time, but are not obliged to recall materials already distributed or printed.

4.3 Feedback you give is licensed to us under clause 8.4 of the Terms. We will not disclose your confidential information in feedback materials.

## 5. Transition to standard pricing

5.1 We will email you a reminder at least 30 days before the Pilot Period ends.

5.2 When the Pilot Period ends, your plan continues on standard Starter pricing (R1,000 per month, excl. VAT) from the next billing date, unless you cancel or change plan before then. You may cancel at any time under clause 14.2 of the Terms, and you may upgrade to any other plan at its standard price.

5.3 The pilot price is a one-time offer. If you cancel and return later, standard pricing applies.

## 6. If you do not do what you agreed

If you miss your feedback calls or fail to provide the testimonial or case study help without good reason, we will give you written notice. If the failure is not fixed within 10 business days, we may end the pilot price and move you to standard Starter pricing from the next billing date. We will not ask you to repay discounts already given, and we will not remove your access to the Service for this reason alone.

## 7. Other terms

7.1 We make no promise that the pilot will produce any result, and the Key Limitations and clause 12 of the Terms apply to the pilot in full.

7.2 Sakhi'ksasa may end the pilot early only under clause 14 of the Terms. If it does so for convenience, it will refund any prepaid fees for the unused period and the pilot discount for the months already used will not be reversed.

7.3 This Addendum overrides the Terms only on pricing, setup fees and the pilot obligations above. Everything else in the Terms continues to apply.

## Signature

For Sakhi'ksasa Holdings (Pty) Ltd: ______________________ Name: ____________ Date: __________

For the Founding Client: ______________________ Name: ____________ Business: ____________ Date: __________

(Electronic acceptance under the Electronic Communications and Transactions Act 25 of 2002 is sufficient.)`,

  "key-limitations": `# Standpoint — Key Limitations

Sakhi'ksasa Holdings (Pty) Ltd · CIPC 2026/405064/07

Effective date: 24/10/2026 · Shown at checkout before you buy. Please read this. It is a plain-language summary, and the full Terms of Service apply.

## What Standpoint is

Standpoint is decision-support analysis. It shows you how you compare with competitors and gives you observations and options to think about.

## What it is not

- It is not financial, pricing, investment or legal advice.
- It does not tell you what to do, and it does not predict or guarantee results.
- Sakhi'ksasa Holdings (Pty) Ltd is not your financial adviser or lawyer.

## Why you need to double-check

Our data comes from third parties and public sources. It can be estimated, late, incomplete or wrong. Anything older than 14 days is marked as stale.

Briefings are written with AI. We run automatic accuracy and language checks, and an internal reviewer approves briefings on Pro and Enterprise. On Starter and Growth, only a random 10% are audited internally. The reviewer is an internal quality-assurance reviewer, not a credentialed external analyst. AI can still make mistakes.

We do not know your costs, margins, contracts or circumstances. You do.

## You make the decisions

Before you change prices, spend on advertising, invest, or take any legal step because of something in Standpoint, check it against your own costs, margins and circumstances, and speak to a qualified professional where the decision matters.

## Our liability is limited

- We are not responsible for losses that come from business decisions you make using Standpoint.
- We are not liable for lost profit, lost revenue or other indirect loss.
- Our total liability to you is limited to the fees you paid us in the 12 months before the event (R1,000 if you are on the Free plan or have paid nothing).
- These limits do not apply to fraud, gross negligence or wilful misconduct, or where the law does not allow us to limit liability. Nothing here takes away rights you have under the Consumer Protection Act or POPIA.

## Free-tier blind-spot grant

Free-tier users get 2 tracked blind spots for 30 days from account activation. After that, blind-spot tracking locks. The trial is granted once per verified email and per company/domain.

## Before you buy

Prices exclude VAT. Setup fees are non-refundable once setup starts. You can cancel at any time (the Terms explain when cancellation takes effect). See clause 4 of the Terms for payment and refunds.

☐ I have read and understood the Key Limitations, and I accept the Terms of Service, Privacy Policy, AI Use Notice and Acceptable Use Policy.

We record the version you accept, the time, your IP address and your user agent.`,
};

export function generateStaticParams() {
  return Object.keys(legalDocs).map((slug) => ({ slug }));
}

export default function LegalDocPage({ params }: { params: { slug: string } }) {
  const content = legalDocs[params.slug];
  if (!content) notFound();

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="mx-auto w-full max-w-3xl px-6 py-20">
          <a href="/legal" className="text-sm text-gold hover:underline">← All legal documents</a>
          <div className="mt-8 whitespace-pre-wrap text-sm leading-relaxed text-ink/80">{content}</div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
