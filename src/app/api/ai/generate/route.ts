import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { callAI, isDemoMode } from '@/lib/ai';
import { trackApiCall } from '@/lib/server-analytics';
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const DEMO_RESPONSES: Record<string, string> = {
  generate: `[Mode Démo] Voici un exemple de contenu généré par IA pour votre prompt.\n\nPour activer la génération réelle, configurez GROQ_API_KEY ou GEMINI_API_KEY.\n\n---\nContenu généré :\n\nL'intelligence artificielle transforme profondément notre façon de travailler.`,
  seo: `[Mode Démo] Contenu SEO généré par IA.\n\nPour activer la génération réelle, configurez GROQ_API_KEY ou GEMINI_API_KEY.`,
  code: `[Mode Démo] Code généré par IA.\n\nPour activer la génération réelle, configurez GROQ_API_KEY ou GEMINI_API_KEY.`,
};

export async function POST(request: Request) {
  const startTime = Date.now()
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

    const rl = await rateLimit(`ai-gen:${user.id}`, 20, 60_000)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez plus tard.' }, {
        status: 429,
        headers: getRateLimitHeaders(rl, 20),
      })
    }

    if (user.credits <= 0) {
      return NextResponse.json({ error: 'Crédits insuffisants' }, { status: 402 });
    }

    const body = await request.json();
    const { prompt, maxTokens = 1000 } = body;

    if (!prompt) {
      return NextResponse.json({ error: 'Le champ prompt est requis' }, { status: 400 });
    }

    if (typeof prompt === 'string' && prompt.length > 4000) {
      return NextResponse.json({ error: 'Le prompt ne doit pas dépasser 4000 caractères' }, { status: 400 });
    }

    const maxTokensValue = Math.min(Math.max(1, Number(maxTokens) || 1000), 4000);

    if (isDemoMode()) {
      await trackApiCall('/api/ai/generate', user.id, 0, Date.now() - startTime, true)
      return NextResponse.json({
        content: DEMO_RESPONSES.generate,
        tokensUsed: 0,
        model: 'demo',
        demo: true,
        message: 'Mode démo — Configurez GROQ_API_KEY ou GEMINI_API_KEY pour des réponses réelles',
      });
    }

    const result = await callAI(prompt, maxTokensValue);

    if (result.provider === 'demo') {
      return NextResponse.json({
        content: DEMO_RESPONSES.generate,
        tokensUsed: 0,
        model: 'demo',
        demo: true,
        message: 'Mode démo — Aucun provider IA configuré',
      });
    }

    await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        await prisma.$executeRaw`UPDATE "ApiUser" SET credits = GREATEST(0, credits - ${result.tokensUsed}) WHERE id = ${user.id} AND credits > 0`;
        await prisma.usageLog.create({
          data: {
            userId: user.id,
            endpoint: '/api/ai/generate',
            tokens: result.tokensUsed,
            cost: 0,
          },
        });
      },
      null
    );

    await trackApiCall('/api/ai/generate', user.id, result.tokensUsed, Date.now() - startTime, true)

    return NextResponse.json({
      content: result.content,
      tokensUsed: result.tokensUsed,
      model: result.provider,
      provider: result.provider,
    }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    await trackApiCall('/api/ai/generate', 'unknown', 0, Date.now() - startTime, false)
    return NextResponse.json({ error: 'Erreur lors de la génération' }, { status: 500 });
  }
}
