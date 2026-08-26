import { NextRequest, NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { verifyPassword } from '@/lib/auth';
import { rateLimit, resetRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { validateEmail } from '@/lib/input-validation';

const MAX_ATTEMPTS = 5
const LOCKOUT_MS = 15 * 60 * 1000

// Precomputed decoy hash: PBKDF2("dummy", salt "fixed-salt-cv", 100k iter, sha512, hex).
// Used to equalize timing when the user does not exist, preventing email
// enumeration via response-time analysis.
const DECOY_HASH =
  'fixed-salt-cv:eb4224a66953fce9bd5631bedfaeddf5b70660619b5c1b7717edede1fc7b99e8800e667c21cd532baa753fa79bebf6fc3257056e83df05bc569010cf3f4398ef'

export async function POST(request: NextRequest) {
  try {
    let email: string;
    let password: string;
    try {
      const body = await request.json();
      email = body.email;
      password = body.password;
    } catch {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const validEmail = validateEmail(email);
    if (!validEmail || !password || typeof password !== 'string' || password.length < 1 || password.length > 128) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const attemptResult = await rateLimit(`login:${validEmail}`, MAX_ATTEMPTS, LOCKOUT_MS)
    const rlHeaders = getRateLimitHeaders(attemptResult, MAX_ATTEMPTS)
    if (!attemptResult.allowed) {
      return NextResponse.json({ error: 'Tentatives épuisées. Réessayez plus tard.' }, { status: 429, headers: rlHeaders })
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { email: validEmail } });
      },
      null
    );

    if (!user || !user.password) {
      // Constant-time mitigation: run the same PBKDF2 work as a real login
      // so response timing does not reveal whether the email exists.
      try {
        await verifyPassword(password, DECOY_HASH);
      } catch {}
      return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
    }

    await resetRateLimit(`login:${validEmail}`)

    return NextResponse.json({
      success: true,
      message: 'Connexion réussie',
      email: user.email,
      plan: user.plan,
      credits: user.credits,
    }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
