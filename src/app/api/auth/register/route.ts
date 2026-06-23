import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { generateApiKey } from '@/lib/utils';
import { sendApiKeyEmail } from '@/lib/email';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
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

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    if (!password || password.length < 8) {
      return NextResponse.json({ error: 'Le mot de passe doit contenir au moins 8 caractères' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Format d\'email invalide' }, { status: 400 });
    }

    const existing = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { email } });
      },
      null
    );

    if (existing) {
      try {
        await sendApiKeyEmail({ to: email, apiKey: existing.apiKey, plan: existing.plan });
      } catch {
      }
      return NextResponse.json({
        message: 'Un compte existe déjà avec cet email. Un email vous a été envoyé.',
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const apiKey = generateApiKey();
        return prisma.apiUser.create({
          data: {
            email,
            apiKey,
            password: hashedPassword,
            plan: 'starter',
            credits: 100,
          },
        });
      },
      null
    );

    if (!user) {
      return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
    }

    try {
      await sendApiKeyEmail({ to: email, apiKey: user.apiKey, plan: user.plan });
    } catch {
    }

    return NextResponse.json({
      email: user.email,
      plan: user.plan,
      credits: user.credits,
      apiKey: user.apiKey,
    });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
