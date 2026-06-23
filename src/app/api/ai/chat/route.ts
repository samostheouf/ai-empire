import { NextResponse } from 'next/server';
import { callAI, isDemoMode } from '@/lib/ai';
import { findResponse } from '@/lib/chatbot-knowledge';
import { safeQuery } from '@/lib/db';

const SYSTEM_PROMPT = 'Tu es lassistant NeuraAPI. Réponds de manière utile et concise en français. Tu aides les développeurs avec les APIs IA, les templates Next.js, et le déploiement SaaS. Tu peux fournir des guides étape par étape pour aider les utilisateurs à démarrer.';

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('x-api-key');
    if (!apiKey) {
      return NextResponse.json({ error: 'Clé API requise' }, { status: 401 });
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { apiKey } });
      },
      null
    );

    if (!user) {
      return NextResponse.json({ error: 'Clé API invalide' }, { status: 401 });
    }

    if (user.credits <= 0) {
      return NextResponse.json({ error: 'Crédits insuffisants' }, { status: 402 });
    }

    try {
      const body = await request.json();
      const { messages } = body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return NextResponse.json({ error: 'Le champ messages est requis' }, { status: 400 });
      }

      const formattedMessages = [
        { role: 'system' as const, content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      ];

      if (isDemoMode()) {
        const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
        return NextResponse.json({
          content: findResponse(lastUserMsg?.content || ''),
          provider: 'demo',
          demo: true,
        });
      }

      const result = await callAI(formattedMessages, 1000);

      if (!result.content) {
        const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
        return NextResponse.json({
          content: findResponse(lastUserMsg?.content || ''),
          provider: result.provider,
          fallback: true,
        });
      }

      if (result.tokensUsed > 0) {
        await safeQuery(
          async () => {
            const { prisma } = await import('@/lib/db');
            await prisma.$executeRaw`UPDATE "ApiUser" SET credits = GREATEST(0, credits - ${result.tokensUsed}) WHERE id = ${user.id}`;
            await prisma.usageLog.create({
              data: { userId: user.id, endpoint: '/api/ai/chat', tokens: result.tokensUsed, cost: 0 },
            });
          },
          null
        );
      }

      return NextResponse.json({
        content: result.content,
        tokensUsed: result.tokensUsed,
        provider: result.provider,
      });
    } catch {
      return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
