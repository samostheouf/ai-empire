import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { authenticateApiKey } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const auth = await authenticateApiKey(request);
    if (auth.error) return auth.error;

    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json({ error: 'Email requis' }, { status: 400 });
    }

    if (email !== auth.user!.email && auth.user!.plan !== 'admin') {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const data = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        const [orders, user] = await Promise.all([
          prisma.order.findMany({
            where: { email },
            include: { template: true },
            orderBy: { createdAt: 'desc' },
          }),
          prisma.apiUser.findUnique({ where: { email } }),
        ]);
        return { orders, user };
      },
      { orders: [], user: null }
    );

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
  }
}
