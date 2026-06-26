import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { generateApiKey } from '@/lib/utils';
import { sendApiKeyEmail } from '@/lib/email';
import { hashPassword } from '@/lib/auth';
import { validateEmail, validatePassword } from '@/lib/input-validation';

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

    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    if (!validEmail || !validPassword) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const existing = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma!.apiUser.findUnique({ where: { email: validEmail } });
      },
      null
    );

    const apiKey = existing?.apiKey || await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const { generateApiKey: gen } = await import('@/lib/utils');
        const hashedPassword = await hashPassword(validPassword);
        const user = await prisma!.apiUser.create({
          data: { email: validEmail, apiKey: gen(), password: hashedPassword, plan: 'starter', credits: 100 },
        });
        return user.apiKey;
      },
      null
    );

    if (apiKey) {
      try { await sendApiKeyEmail({ to: validEmail, apiKey, plan: 'starter' }); } catch {}
    }

    return NextResponse.json({
      message: 'Si un compte n\'existe pas, il a été créé. Un email contenant votre clé API vous a été envoyé.',
    });
  } catch {
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 });
  }
}
