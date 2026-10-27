import type { Metadata } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

/**
 * /admin/log — the founder's DAILY ENQUIRY REVIEW.
 *
 * Protected by a shared key: set ADMIN_VIEW_KEY in the environment, then open
 *   /admin/log?key=<ADMIN_VIEW_KEY>
 * No key configured, or wrong key → nothing is shown (no data leak).
 * robots.txt disallows /admin. Not in the sitemap.
 *
 * Shows: every enquiry (newest first), its reference, the SLA due date
 * (next business day), and whether it is OVERDUE — plus today's count.
 */

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Enquiry log — internal',
  robots: { index: false, follow: false },
};

interface Enquiry {
  ts: string;
  ref?: string;
  slaDue?: string;
  slaState?: string;
  name?: string;
  email?: string;
  company?: string;
  topic?: string;
  message?: string;
  note?: string;
}

async function readLog(): Promise<Enquiry[]> {
  try {
    const file = path.join(process.cwd(), 'logs', 'contact-enquiries.jsonl');
    const raw = await fs.readFile(file, 'utf8');
    return raw
      .split('\n')
      .filter((l) => l.trim())
      .map((l) => {
        try { return JSON.parse(l) as Enquiry; } catch { return { ts: '', note: 'unparsable line' }; }
      });
  } catch {
    return [];
  }
}

function isOverdue(e: Enquiry): boolean {
  if (!e.slaDue) return false;
  return Boolean(e.slaState && e.slaState !== 'closed') && new Date(e.slaDue).getTime() < Date.now();
}

export default async function AdminLogPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const params = await searchParams;
  const expected = process.env.ADMIN_VIEW_KEY;
  const authorised = Boolean(expected) && params.key === expected;

  if (!expected) {
    return (
      <main style={{ fontFamily: 'var(--font-inter, sans-serif)', padding: 48, maxWidth: 640, margin: '0 auto' }}>
        <h1 style={{ fontSize: 20 }}>Enquiry log</h1>
        <p style={{ color: '#555', lineHeight: 1.6 }}>
          Not configured. Set <code>ADMIN_VIEW_KEY</code> in the environment, then open
          <code> /admin/log?key=…</code>. The key never leaves the server.
        </p>
      </main>
    );
  }

  if (!authorised) {
    return (
      <main style={{ fontFamily: 'var(--font-inter, sans-serif)', padding: 48, maxWidth: 640, margin: '0 auto' }}>
        <h1 style={{ fontSize: 20 }}>Enquiry log</h1>
        <p style={{ color: '#555' }}>Unauthorised. Append <code>?key=…</code> with the admin key.</p>
      </main>
    );
  }

  const log = await readLog();
  const enquiries = log.filter((e) => e.name); // system notes (autoreply-failed etc.) have no name
  const notes = log.filter((e) => !e.name);
  const enquiriesDesc = [...enquiries].reverse();
  const today = new Date().toISOString().slice(0, 10);
  const todayCount = enquiries.filter((e) => (e.ts || '').slice(0, 10) === today).length;
  const overdue = enquiriesDesc.filter(isOverdue);

  const td: React.CSSProperties = { padding: '8px 10px', borderBottom: '1px solid #e5e2da', verticalAlign: 'top', fontSize: 13 };
  const th: React.CSSProperties = { padding: '8px 10px', textAlign: 'left', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b6b7e', borderBottom: '2px solid #1a1a2e' };

  return (
    <main style={{ fontFamily: 'var(--font-inter, sans-serif)', padding: 40, maxWidth: 1080, margin: '0 auto', color: '#1a1a2e' }}>
      <h1 style={{ fontSize: 24, marginBottom: 4 }}>Daily enquiry review</h1>
      <p style={{ color: '#6b6b7e', marginBottom: 20 }}>
        {todayCount} received today · {overdue.length} overdue · SLA: reply within one business day
      </p>

      {overdue.length > 0 && (
        <div style={{ background: '#fde9d6', border: '1px solid #e8590c', borderRadius: 10, padding: '12px 16px', marginBottom: 20, fontSize: 14 }}>
          <strong>SLA breached:</strong>{' '}
          {overdue.map((e) => e.ref).join(', ')} — reply today and mark handled.
        </div>
      )}

      {enquiriesDesc.length === 0 ? (
        <p style={{ color: '#6b6b7e' }}>No enquiries yet. New ones appear here automatically.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr>
                <th style={th}>Ref</th>
                <th style={th}>Received</th>
                <th style={th}>Who</th>
                <th style={th}>Topic</th>
                <th style={th}>SLA due</th>
                <th style={th}>Message</th>
              </tr>
            </thead>
            <tbody>
              {enquiriesDesc.map((e, i) => {
                const late = isOverdue(e);
                return (
                  <tr key={`${e.ref}-${i}`}>
                    <td style={td}><strong>{e.ref}</strong></td>
                    <td style={td}>{e.ts ? new Date(e.ts).toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }) : '—'}</td>
                    <td style={td}>
                      {e.name}
                      <br />
                      <a href={`mailto:${e.email}`} style={{ color: '#2b2fd9' }}>{e.email}</a>
                      {e.company ? <><br /><span style={{ color: '#6b6b7e' }}>{e.company}</span></> : null}
                    </td>
                    <td style={td}>{e.topic}</td>
                    <td style={{ ...td, color: late ? '#c44a08' : undefined, fontWeight: late ? 700 : 400 }}>
                      {e.slaDue ? new Date(e.slaDue).toLocaleDateString('en-ZA', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'Africa/Johannesburg' }) : '—'}
                      {late ? ' · OVERDUE' : ''}
                    </td>
                    <td style={{ ...td, maxWidth: 360 }}>
                      {(e.message || '').slice(0, 220)}
                      {(e.message || '').length > 220 ? '…' : ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {notes.length > 0 && (
        <details style={{ marginTop: 28 }}>
          <summary style={{ cursor: 'pointer', color: '#6b6b7e', fontSize: 13 }}>System notes ({notes.length})</summary>
          <ul style={{ fontSize: 12, color: '#6b6b7e', marginTop: 8 }}>
            {notes.slice(-20).reverse().map((n, i) => (
              <li key={i}>{n.ts} {n.ref ? `· ${n.ref}` : ''} · {n.slaState} · {n.note}</li>
            ))}
          </ul>
        </details>
      )}
    </main>
  );
}
