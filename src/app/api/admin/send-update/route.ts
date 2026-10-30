/**
 * POST /api/admin/send-update
 *
 * Sends a product-update email to all enquiry contacts who opted in
 * (subscribeUpdates = true in the contact-enquiries.jsonl log).
 * Uses Brevo (same provider as the contact auto-reply). Admin-only.
 *
 * Reads the JSONL log, deduplicates by email, filters for subscribeUpdates,
 * and sends individually via Brevo.
 *
 * Body:
 *   {
 *     "subject": "Sakhi'ksasa update: new Standpoint features",
 *     "htmlBody": "<h2>What's new</h2><p>...</p>",
 *     "textBody": "What's new: ...",  // optional
 *     "dryRun": false  // if true, returns recipient list without sending
 *   }
 */
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const LOG_FILE = path.join(process.cwd(), 'logs', 'contact-enquiries.jsonl');

interface EnquiryRecord {
  ts: string;
  ref?: string;
  name?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
  subscribeUpdates?: boolean;
}

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function readSubscribers(): Promise<{ email: string; name: string }[]> {
  try {
    const raw = await fs.readFile(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter((l) => l.trim());
    const records: EnquiryRecord[] = lines.map((l) => {
      try { return JSON.parse(l); } catch { return {} as EnquiryRecord; }
    });
    // Filter for subscribeUpdates = true, deduplicate by email
    const seen = new Set<string>();
    const subscribers: { email: string; name: string }[] = [];
    for (const r of records) {
      if (r.subscribeUpdates === true && r.email && !seen.has(r.email.toLowerCase())) {
        seen.add(r.email.toLowerCase());
        subscribers.push({ email: r.email, name: r.name || r.email });
      }
    }
    return subscribers;
  } catch {
    return [];
  }
}

export async function POST(req: Request) {
  // Admin auth — use a simple shared key (ADMIN_API_KEY env var)
  const adminKey = process.env.ADMIN_API_KEY;
  const supplied = req.headers.get('x-admin-key') || req.headers.get('X-Admin-Key');
  if (!adminKey || supplied !== adminKey) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => null);
  if (!body || !body.subject || !body.htmlBody) {
    return NextResponse.json({ ok: false, error: 'subject and htmlBody required' }, { status: 400 });
  }

  const subscribers = await readSubscribers();

  if (subscribers.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, message: 'No subscribers in the enquiry log.' });
  }

  if (body.dryRun) {
    return NextResponse.json({
      ok: true,
      dryRun: true,
      recipientCount: subscribers.length,
      recipients: subscribers.map((s) => ({ email: s.email, name: s.name })),
    });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'BREVO_API_KEY not set' }, { status: 500 });
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || 'onboarding@brevo.com';
  const senderName = process.env.BREVO_SENDER_NAME || "Sakhi'ksasa Holdings";
  const textContent = body.textBody || body.htmlBody.replace(/<[^>]+>/g, '');

  let sent = 0;
  let skipped = 0;

  for (const sub of subscribers) {
    try {
      const res = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'content-type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          sender: { email: senderEmail, name: senderName },
          to: [{ email: sub.email, name: sub.name }],
          subject: body.subject,
          htmlContent: body.htmlBody,
          textContent,
        }),
      });
      if (res.ok) sent++;
      else skipped++;
    } catch {
      skipped++;
    }
  }

  return NextResponse.json({
    ok: true,
    sent,
    skipped,
    recipientCount: subscribers.length,
    message: `Sent to ${sent} subscriber(s), ${skipped} skipped.`,
  });
}

export async function GET(req: Request) {
  const adminKey = process.env.ADMIN_API_KEY;
  const supplied = req.headers.get('x-admin-key') || req.headers.get('X-Admin-Key');
  if (!adminKey || supplied !== adminKey) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const subscribers = await readSubscribers();
  return NextResponse.json({ ok: true, subscriberCount: subscribers.length });
}
