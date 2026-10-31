import { NextRequest, NextResponse } from 'next/server';

// Combined daily growth cron (Vercel Hobby: max 2 cron jobs).
// Triggers abandoned-cart recovery emails + IndexNow submission.
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = request.headers.get('authorization');
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app';
  const results: Record<string, unknown> = {};
  const authHeaders: Record<string, string> = cronSecret ? { Authorization: `Bearer ${cronSecret}` } : {};

  // 0. Luxury pricing refresh
  try {
    const res = await fetch(`${appUrl}/api/cron/luxury-pricing`, { method: 'GET', headers: authHeaders });
    results.luxuryPricing = { ok: res.ok, status: res.status };
  } catch (err) {
    results.luxuryPricing = { error: err instanceof Error ? err.message : 'Unknown error' };
  }

  // 0b. Luxury hub
  try {
    const res = await fetch(`${appUrl}/api/cron/luxury-hub`, { method: 'GET', headers: authHeaders });
    results.luxuryHub = { ok: res.ok, status: res.status };
  } catch (err) {
    results.luxuryHub = { error: err instanceof Error ? err.message : 'Unknown error' };
  }

  // 1. Abandoned-cart recovery
  try {
    const adminKey = process.env.ADMIN_API_KEY;
    if (adminKey) {
      const res = await fetch(`${appUrl}/api/recovery`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${adminKey}` },
      });
      results.recovery = { ok: res.ok, status: res.status, data: await res.json().catch(() => ({})) };
    } else {
      results.recovery = { skipped: 'ADMIN_API_KEY not configured' };
    }
  } catch (err) {
    results.recovery = { error: err instanceof Error ? err.message : 'Unknown error' };
  }

  // 2. IndexNow
  try {
    const res = await fetch(`${appUrl}/api/indexnow`, { method: 'GET' });
    results.indexnow = { ok: res.ok, status: res.status, data: await res.json().catch(() => ({})) };
  } catch (err) {
    results.indexnow = { error: err instanceof Error ? err.message : 'Unknown error' };
  }

  return NextResponse.json({ ok: true, results });
}