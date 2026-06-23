import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { generateApiKey } from '@/lib/utils';
import { validateEmail, validateId } from '@/lib/input-validation';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id: rawId, email, plan, credits } = body;

    const id = validateId(rawId);
    if (!id) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 });
    }

    if (email && !validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    const updated = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const user = await prisma.apiUser.findUnique({ where: { id } });
        if (!user) {
          throw new Error('Utilisateur non trouvé');
        }
        return prisma.apiUser.update({
          where: { id },
          data: {
            ...(email && { email }),
            ...(plan && { plan }),
            ...(credits !== undefined && { credits: parseInt(credits) || 0 }),
          },
        });
      },
      null
    );

    if (!updated) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la mise à jour' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawId = searchParams.get('id');

    const id = validateId(rawId);
    if (!id) {
      return NextResponse.json({ error: 'ID invalide' }, { status: 400 });
    }

    const deleted = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const user = await prisma.apiUser.findUnique({ where: { id } });
        if (!user) {
          throw new Error('Utilisateur non trouvé');
        }
        await prisma.apiUser.delete({ where: { id } });
        return true;
      },
      false
    );

    if (!deleted) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la suppression' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, plan, credits } = body;

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const existing = await prisma.apiUser.findUnique({ where: { email } });
        if (existing) {
          throw new Error('Cet email existe déjà');
        }
        const apiKey = generateApiKey();
        return prisma.apiUser.create({
          data: {
            email,
            apiKey,
            plan: plan || 'starter',
            credits: credits || 100,
          },
        });
      },
      null
    );

    if (!user) {
      return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
    }

    return NextResponse.json(user, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la création' }, { status: 500 });
  }
}
