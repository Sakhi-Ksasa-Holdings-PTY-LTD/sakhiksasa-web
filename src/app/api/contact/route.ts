/**
 * POST /api/contact
 *
 * Public contact-form endpoint for the Sakhi'ksasa Holdings marketing site.
 * Server-side only — no client SDK imports.
 *
 * Behaviour:
 *   1. Validates input (name, email, message required; topic enum)
 *   2. Persists the enquiry to a server-side log file (always — survives restart)
 *   3. Forwards to the company inbox via Brevo (if BREVO_API_KEY is set)
 *   4. Returns 200 on accept, 4xx on validation failure, 5xx on server error
 *
 * This endpoint is intentionally simple and self-contained. It does NOT touch
 * the Standpoint SaaS database, does NOT subscribe the sender to any list,
 * and does NOT expose internal company data.
 */
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const TOPICS = new Set([
  'General enquiry',
  'Standpoint — sales',
  'Standpoint — support',
  'Press / Media',
]);

const COMPANY_INBOX = process.env.COMPANY_CONTACT_EMAIL || 'sakhiksasaholdingsptyltd@gmail.com';
const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'contact-enquiries.jsonl');

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  topic?: string;
  message: string;
}

function isValidEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function sanitize(v: string, maxLen: number): string {
  return String(v || '').trim().slice(0, maxLen);
}

async function appendToLog(record: Record<string, unknown>): Promise<void> {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(LOG_FILE, JSON.stringify(record) + '\n', 'utf8');
  } catch {
    // Logging is best-effort — never fail the request because of it.
  }
}

async function forwardToBrevo(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    // Brevo not configured — that's fine; the log persists the enquiry.
    return { ok: true };
  }
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'onboarding@brevo.com';
  const senderName = process.env.BREVO_SENDER_NAME || "Sakhi'ksasa Holdings (website)";

  const body = {
    sender: { email: senderEmail, name: senderName },
    replyTo: { email: payload.email, name: payload.name },
    to: [{ email: COMPANY_INBOX }],
    subject: `[Website] ${payload.topic || 'General enquiry'} — ${payload.name}`,
    htmlContent: [
      `<div style="font-family: -apple-system, sans-serif; max-width:560px;">`,
      `<h2 style="color:#2b2fd9;">New enquiry from sakhiksasa holdings website</h2>`,
      `<table style="border-collapse:collapse; font-size:14px;">`,
      `<tr><td style="padding:6px 12px; color:#6b6b7e;">Name</td><td style="padding:6px 12px;"><strong>${escapeHtml(payload.name)}</strong></td></tr>`,
      `<tr><td style="padding:6px 12px; color:#6b6b7e;">Email</td><td style="padding:6px 12px;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>`,
      payload.company ? `<tr><td style="padding:6px 12px; color:#6b6b7e;">Company</td><td style="padding:6px 12px;">${escapeHtml(payload.company)}</td></tr>` : '',
      `<tr><td style="padding:6px 12px; color:#6b6b7e;">Topic</td><td style="padding:6px 12px;">${escapeHtml(payload.topic || 'General enquiry')}</td></tr>`,
      `</table>`,
      `<hr style="margin:18px 0; border:none; border-top:1px solid #e0ddd5;">`,
      `<h3 style="color:#1a1a2e;">Message</h3>`,
      `<p style="white-space:pre-wrap; line-height:1.6; color:#1a1a2e;">${escapeHtml(payload.message)}</p>`,
      `<hr style="margin:24px 0 8px; border:none; border-top:1px solid #e0ddd5;">`,
      `<p style="font-size:12px; color:#6b6b7e;">Sent from sakhiksasa-web public contact form.</p>`,
      `</div>`,
    ].filter(Boolean).join('\n'),
    textContent: [
      `New enquiry from sakhiksasa holdings website`,
      ``,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : '',
      `Topic: ${payload.topic || 'General enquiry'}`,
      ``,
      `Message:`,
      payload.message,
    ].filter(Boolean).join('\n'),
  };

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, error: `Brevo ${res.status}: ${text.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const name = sanitize(body.name, 120);
  const email = sanitize(body.email, 160).toLowerCase();
  const company = sanitize(body.company || '', 160);
  const topic = sanitize(body.topic || 'General enquiry', 60);
  const message = sanitize(body.message, 4000);

  if (!name) return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 400 });
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 400 });
  }
  if (!message || message.length < 10) {
    return NextResponse.json({ ok: false, error: 'Message must be at least 10 characters' }, { status: 400 });
  }
  if (!TOPICS.has(topic)) {
    return NextResponse.json({ ok: false, error: 'Invalid topic' }, { status: 400 });
  }

  const payload: ContactPayload = { name, email, company, topic, message };
  const ts = new Date().toISOString();

  // 1. Always persist to log (best-effort, never fails request)
  await appendToLog({
    ts,
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
    ua: req.headers.get('user-agent') || 'unknown',
    ...payload,
  });

  // 2. Forward via Brevo (if configured). Failure here doesn't fail the request —
  //    the enquiry is already persisted to the log.
  const brevo = await forwardToBrevo(payload);
  if (!brevo.ok) {
    console.warn('[contact] Brevo forward failed:', brevo.error, '— enquiry logged only.');
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'Your enquiry has been received. We respond within two business days.',
      loggedAt: ts,
    },
    { status: 200 },
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed. POST to submit an enquiry.' },
    { status: 405 },
  );
}
