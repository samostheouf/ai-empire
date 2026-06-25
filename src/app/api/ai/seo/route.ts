import { NextResponse } from 'next/server';
import { safeQuery } from '@/lib/db';
import { callAI, isDemoMode } from '@/lib/ai';
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

const DEMO_SEO = {
  title: "Guide Complet - Tout Ce Qu'il Faut Savoir en 2025",
  metaDescription: "Découvrez notre guide expert. Conseils pratiques, astuces et meilleures pratiques pour réussir votre projet.",
  content: `# Le Guide Ultime

## Introduction
Dans cet article, nous allons explorer en profondeur les meilleures pratiques pour réussir en 2025.

## Section 1: Les Bases
Pour commencer, il est essentiel de comprendre les fondamentaux. Chaque projet réussi repose sur des bases solides.

## Section 2: Stratégies Avancées
Une fois les bases maîtrisées, passez aux stratégies avancées pour vous démarquer de la concurrence.

## Section 3: Erreurs à Éviter
Ne commettez pas ces erreurs courantes qui peuvent ruiner votre projet.

## Conclusion
En résumé, la clé du succès en 2025 est l'combination de bases solides et d'innovation constante.`,
};

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

    const rl = await rateLimit(`ai-seo:${user.id}`, 20, 60_000)
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
    const { topic, keywords = [], maxTokens = 2000 } = body;

    if (!topic) {
      return NextResponse.json({ error: 'Le champ topic est requis' }, { status: 400 });
    }

    if (typeof topic !== 'string' || topic.length > 4000) {
      return NextResponse.json({ error: 'Le topic doit être une chaîne de caractères de max 4000 caractères' }, { status: 400 });
    }

    const safeTopic = topic.replace(/[<>'"]/g, '').substring(0, 2000);
    const safeKeywords = Array.isArray(keywords) 
      ? keywords.filter((k: unknown) => typeof k === 'string').slice(0, 20).map((k: string) => k.replace(/[<>'"]/g, '').substring(0, 100))
      : [];

    const maxTokensValue = Math.min(Math.max(1, Number(maxTokens) || 2000), 4000);

    if (isDemoMode()) {
      return NextResponse.json({
        ...DEMO_SEO,
        tokensUsed: 0,
        demo: true,
        message: 'Mode démo — Configurez GROQ_API_KEY ou GEMINI_API_KEY pour du vrai SEO',
      });
    }

    const prompt = `Tu es un expert en SEO. Génère du contenu optimisé pour le référencement naturel sur le sujet: "${safeTopic}".
Mots-clés à inclure: ${safeKeywords.join(', ') || 'non spécifié'}.
Retourne un JSON avec: title, metaDescription, content.`;

    const result = await callAI(prompt, maxTokensValue);

    if (result.provider === 'demo') {
      return NextResponse.json({
        ...DEMO_SEO,
        tokensUsed: 0,
        demo: true,
        message: 'Mode démo — Aucun provider IA configuré',
      });
    }

    let parsed: typeof DEMO_SEO;
    try {
      parsed = JSON.parse(result.content || '{}');
    } catch {
      parsed = { title: topic, metaDescription: (result.content || '').substring(0, 160), content: result.content || '' };
    }

    await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        await prisma.$executeRaw`UPDATE "ApiUser" SET credits = GREATEST(0, credits - ${result.tokensUsed}) WHERE id = ${user.id} AND credits > 0`;
        await prisma.usageLog.create({ data: { userId: user.id, endpoint: '/api/ai/seo', tokens: result.tokensUsed, cost: 0 } });
      },
      null
    );

    return NextResponse.json({ ...parsed, tokensUsed: result.tokensUsed, provider: result.provider });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
