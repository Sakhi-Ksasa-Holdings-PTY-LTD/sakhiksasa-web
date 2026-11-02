/**
 * POST /api/admin/test-contact
 *
 * Temporary diagnostic endpoint — triggers both Brevo sends (autoreply
 * + forward) and returns the raw results so we can see why emails
 * aren't arriving. Will be removed after diagnosis.
 */
import { NextResponse } from 'next/server';

const COMPANY_INBOX = process.env.COMPANY_CONTACT_EMAIL || 'sakhiksasaholdingsptyltd@gmail.com';
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || 'onboarding@brevo.com';
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || "Sakhi'ksasa Holdings";

async function sendBrevoTest(kind: 'forward' | 'autoreply') {
  if (!BREVO_API_KEY) return { ok: false, error: 'BREVO_API_KEY not set' };
  
  const to = kind === 'forward' 
    ? [{ email: COMPANY_INBOX, name: 'Company Inbox' }]
    : [{ email: 'diagnostic@example.com', name: 'Test' }];
  const subject = kind === 'forward' 
    ? '[TEST] Contact forward diagnostic' 
    : '[TEST] Contact autoreply diagnostic';
  
  const body = {
    sender: { email: BREVO_SENDER_EMAIL, name: BREVO_SENDER_NAME },
    to,
    subject,
    htmlContent: `<p>Diagnostic test — ${kind}. Sender: ${BREVO_SENDER_EMAIL}</p>`,
    textContent: `Diagnostic test — ${kind}. Sender: ${BREVO_SENDER_EMAIL}`,
  };
  
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'accept': 'application/json', 'content-type': 'application/json', 'api-key': BREVO_API_KEY },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    const text = await res.text().catch(() => '');
    return { ok: res.ok, status: res.status, response: text.slice(0, 500) };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Unknown error' };
  }
}

export async function POST() {
  const [forwardResult, autoreplyResult] = await Promise.all([
    sendBrevoTest('forward'),
    sendBrevoTest('autoreply'),
  ]);
  
  return NextResponse.json({
    sender: BREVO_SENDER_EMAIL,
    companyInbox: COMPANY_INBOX,
    forward: forwardResult,
    autoreply: autoreplyResult,
    timestamp: new Date().toISOString(),
  });
}
