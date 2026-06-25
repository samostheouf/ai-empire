import { NextRequest, NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { verifyPassword } from '@/lib/auth';
import { rateLimit, resetRateLimit } from '@/lib/rate-limit';

const MAX_ATTEMPTS = 5
const LOCKOUT_MS = 15 * 60 * 1000

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

    if (!email || !password) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const attemptResult = await rateLimit(`login:${email}`, MAX_ATTEMPTS, LOCKOUT_MS)
    if (!attemptResult.allowed) {
      return NextResponse.json({ error: 'Tentatives épuisées. Réessayez plus tard.' }, { status: 429 })
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { email } });
      },
      null
    );

    if (!user || !user.password) {
      await safeQuery(async () => {
        const { prisma } = await import('@/lib/db');
        const fake = await prisma.apiUser.findFirst({ where: { email: 'nonexistent@test.com' } });
        if (fake) await verifyPassword(password, fake.password || 'x');
      }, null);
      return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.password);
    if (!valid) {
      return NextResponse.json({ error: 'Email ou mot de passe incorrect' }, { status: 401 });
    }

    await resetRateLimit(`login:${email}`)

    return NextResponse.json({
      success: true,
      message: 'Connexion réussie',
      email: user.email,
      plan: user.plan,
      credits: user.credits,
    });
  } catch {
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
