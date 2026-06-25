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

    if (!email || !password || password.length < 8 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const existing = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma!.apiUser.findUnique({ where: { email } });
      },
      null
    );

    const apiKey = existing?.apiKey || await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const { generateApiKey: gen } = await import('@/lib/utils');
        const hashedPassword = await hashPassword(password);
        const user = await prisma!.apiUser.create({
          data: { email, apiKey: gen(), password: hashedPassword, plan: 'starter', credits: 100 },
        });
        return user.apiKey;
      },
      null
    );

    if (apiKey) {
      try { await sendApiKeyEmail({ to: email, apiKey, plan: 'starter' }); } catch {}
    }

    return NextResponse.json({
      message: 'Si un compte n\'existe pas, il a été créé. Un email contenant votre clé API vous a été envoyé.',
    });
  } catch {
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
