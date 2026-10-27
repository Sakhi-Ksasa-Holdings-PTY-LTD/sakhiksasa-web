/**
 * POST /api/contact
 *
 * The company's enquiry intake with SLA handling. Server-side only.
 *
 * Flow:
 *   1. Validate input (name, email, message required; topic enum)
 *   2. Assign a reference (SKH-XXXXXX) + SLA due date (next business day)
 *   3. Persist to logs/contact-enquiries.jsonl — the daily review log
 *   4. Auto-reply to the enquirer via Brevo (acknowledgement + SLA promise)
 *   5. Forward to the company inbox via Brevo
 *   6. Return 200 { ok, ref }
 *
 * SLA: every enquiry is answered within ONE BUSINESS DAY. The due date is
 * stored with the record; /admin/log (key-protected) surfaces overdue ones.
 *
 * Does NOT touch the Standpoint SaaS database or subscribe anyone to a list.
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

function makeRef(): string {
  const t = Date.now().toString(36).toUpperCase();
  const r = Math.floor(Math.random() * 46656).toString(36).toUpperCase().padStart(3, '0');
  return `SKH-${t.slice(-4)}${r}`;
}

/** Next business day (Mon–Fri), South African time approximated via UTC+2. */
function nextBusinessDay(from: Date): string {
  const d = new Date(from.getTime() + 24 * 60 * 60 * 1000);
  while (d.getUTCDay() === 0 || d.getUTCDay() === 6) {
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return d.toISOString();
}

async function appendToLog(record: Record<string, unknown>): Promise<void> {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(LOG_FILE, JSON.stringify(record) + '\n', 'utf8');
  } catch {
    // Logging is best-effort — never fail the request because of it.
  }
}

type MailKind = 'forward' | 'autoreply';

async function sendBrevo(
  kind: MailKind,
  payload: ContactPayload,
  ref: string,
  slaDue: string,
): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return { ok: false, error: 'BREVO_API_KEY not configured' };
  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'onboarding@brevo.com';
  const senderName = process.env.BREVO_SENDER_NAME || "Sakhi'ksasa Holdings";

  let to: { email: string; name: string }[];
  let subject: string;
  let html: string;
  let text: string;
  const dueHuman = new Date(slaDue).toLocaleDateString('en-ZA', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Africa/Johannesburg',
  });

  if (kind === 'forward') {
    to = [{ email: COMPANY_INBOX, name: 'Company Inbox' }];
    subject = `[Website] ${payload.topic || 'General enquiry'} — ${payload.name} (${ref})`;
    html = [
      `<div style="font-family:-apple-system,sans-serif;max-width:560px;">`,
      `<h2 style="color:#2b2fd9;">New enquiry — ${ref}</h2>`,
      `<table style="border-collapse:collapse;font-size:14px;">`,
      `<tr><td style="padding:6px 12px;color:#6b6b7e;">Ref</td><td style="padding:6px 12px;"><strong>${escapeHtml(ref)}</strong></td></tr>`,
      `<tr><td style="padding:6px 12px;color:#6b6b7e;">Name</td><td style="padding:6px 12px;"><strong>${escapeHtml(payload.name)}</strong></td></tr>`,
      `<tr><td style="padding:6px 12px;color:#6b6b7e;">Email</td><td style="padding:6px 12px;"><a href="mailto:${escapeHtml(payload.email)}">${escapeHtml(payload.email)}</a></td></tr>`,
      payload.company ? `<tr><td style="padding:6px 12px;color:#6b6b7e;">Company</td><td style="padding:6px 12px;">${escapeHtml(payload.company)}</td></tr>` : '',
      `<tr><td style="padding:6px 12px;color:#6b6b7e;">Topic</td><td style="padding:6px 12px;">${escapeHtml(payload.topic || 'General enquiry')}</td></tr>`,
      `<tr><td style="padding:6px 12px;color:#6b6b7e;">SLA due</td><td style="padding:6px 12px;"><strong>${dueHuman}</strong></td></tr>`,
      `</table><hr style="margin:18px 0;border:none;border-top:1px solid #e0ddd5;">`,
      `<h3 style="color:#1a1a2e;">Message</h3>`,
      `<p style="white-space:pre-wrap;line-height:1.6;color:#1a1a2e;">${escapeHtml(payload.message)}</p>`,
      `<hr style="margin:24px 0 8px;border:none;border-top:1px solid #e0ddd5;">`,
      `<p style="font-size:12px;color:#6b6b7e;">SLA: reply within one business day. Daily review log: ${COMPANY_INBOX_BASE_URL}/admin/log?key=…</p>`,
      `</div>`,
    ].filter(Boolean).join('\n');
    text = [
      `New enquiry — ${ref}`,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : '',
      `Topic: ${payload.topic || 'General enquiry'}`,
      `SLA due: ${dueHuman}`,
      ``,
      `Message:`,
      payload.message,
    ].filter(Boolean).join('\n');
  } else {
    to = [{ email: payload.email, name: payload.name }];
    subject = `We've received your enquiry — ${ref}`;
    html = [
      `<div style="font-family:-apple-system,sans-serif;max-width:560px;color:#1a1a2e;">`,
      `<h2 style="color:#2b2fd9;margin:0 0 4px;">Thank you, ${escapeHtml(payload.name.split(' ')[0])}.</h2>`,
      `<p style="font-size:15px;line-height:1.6;">Your enquiry has been received and logged — reference <strong>${ref}</strong>.</p>`,
      `<p style="font-size:15px;line-height:1.6;">We reply to every enquiry <strong>within one business day</strong> — by <strong>${dueHuman}</strong> at the latest.</p>`,
      `<p style="font-size:15px;line-height:1.6;">If it's urgent in the meantime, simply reply to this email.</p>`,
      `<p style="font-size:13px;color:#6b6b7e;">Sakhi'ksasa Holdings (Pty) Ltd · We don't wait for validation. We make the first move.</p>`,
      `</div>`,
    ].join('\n');
    text = [
      `Thank you, ${payload.name.split(' ')[0]}.`,
      ``,
      `Your enquiry has been received and logged — reference ${ref}.`,
      `We reply within one business day — by ${dueHuman} at the latest.`,
      `If it's urgent in the meantime, simply reply to this email.`,
      ``,
      `Sakhi'ksasa Holdings (Pty) Ltd`,
    ].join('\n');
  }

  const body = {
    sender: { email: senderEmail, name: senderName },
    to,
    subject,
    htmlContent: html,
    textContent: text,
  };

  try {
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'content-type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const t = await res.text().catch(() => '');
      return { ok: false, error: `Brevo ${res.status}: ${t.slice(0, 200)}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}

const COMPANY_INBOX_BASE_URL = process.env.SITE_BASE_URL || 'https://sakhiksasa-web.onrender.com';

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
  const ref = makeRef();
  const slaDue = nextBusinessDay(new Date(ts));

  // 1. Persist to the daily review log (best-effort, never fails request)
  await appendToLog({
    ts,
    ref,
    slaDue,
    slaState: 'open',
    ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
    ua: req.headers.get('user-agent') || 'unknown',
    ...payload,
  });

  // 2. Auto-reply to the enquirer (SLA promise). Failure doesn't fail the request.
  const auto = await sendBrevo('autoreply', payload, ref, slaDue);
  if (!auto.ok) {
    await appendToLog({ ts, ref, slaState: 'autoreply-failed', note: auto.error });
  }

  // 3. Forward to the company inbox
  const fwd = await sendBrevo('forward', payload, ref, slaDue);
  if (!fwd.ok) {
    console.warn('[contact] Forward failed:', fwd.error, '— enquiry logged only.');
    await appendToLog({ ts, ref, slaState: 'forward-failed', note: fwd.error });
  }

  return NextResponse.json(
    { ok: true, ref, slaDue, autoReplied: auto.ok },
    { status: 200 },
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: 'Method not allowed. POST to submit an enquiry.' },
    { status: 405 },
  );
}
