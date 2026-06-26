import { NextResponse } from 'next/server';
import { callAI, isDemoMode } from '@/lib/ai';
import { findResponse } from '@/lib/chatbot-knowledge';
import { safeQuery } from '@/lib/db';
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { validateString } from '@/lib/input-validation';

const SYSTEM_PROMPTS: Record<string, string> = {
  fr: 'Tu es l\'assistant NeuraAPI. Réponds de manière utile et concise en français. Tu aides les développeurs avec les APIs IA, les templates Next.js, et le déploiement SaaS.',
  en: 'You are the NeuraAPI assistant. Answer helpfully and concisely in English. You help developers with AI APIs, Next.js templates, and SaaS deployment.',
  es: 'Eres el asistente de NeuraAPI. Responde de forma útil y concisa en español. Ayudas a desarrolladores con APIs de IA, plantillas Next.js y despliegue SaaS.',
  de: 'Du bist der NeuraAPI-Assistent. Antworte hilfreich und präzise auf Deutsch. Du hilfst Entwicklern mit KI-APIs, Next.js-Templates und SaaS-Bereitstellung.',
  pt: 'Você é o assistente NeuraAPI. Responda de forma útil e concisa em português. Você ajuda desenvolvedores com APIs de IA, templates Next.js e implantação SaaS.',
  ja: 'NeuraAPIアシスタントです。日本語で簡潔に役立つ回答をします。AI API、Next.jsテンプレート、SaaSデプロイについて開発者をサポートします。',
  ko: 'NeuraAPI 어시스턴트입니다. 한국어로 간결하고 유용하게 답변합니다. AI API, Next.js 템플릿, SaaS 배포에 대해 개발자를 지원합니다.',
  zh: '您是NeuraAPI助手。用中文简洁高效地回答。帮助开发者处理AI API、Next.js模板和SaaS部署。',
  ar: 'أنت مساعد NeuraAPI. أجب بطريقة مفيدة ومختصرة بالعربية. تساعد المطورين على APIs الذكاء الاصطناعي وقوالب Next.js ونشر SaaS.',
}

const MAX_MESSAGE_LENGTH = 4000
const MAX_MESSAGES = 50

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('x-api-key') || '';
    
    const isDemo = !apiKey || apiKey === 'demo' || isDemoMode();

    const body = await request.json();
    const { messages, locale = 'fr' } = body;
    
    if (!isDemo) {
      const rl = await rateLimit(`ai:${apiKey}`, 20, 60_000)
      if (!rl.allowed) {
        return NextResponse.json({ error: locale === 'fr' ? 'Trop de requêtes. Réessayez plus tard.' : 'Too many requests. Please try again later.' }, {
          status: 429,
          headers: getRateLimitHeaders(rl, 20),
        })
      }
    }

    const user = await safeQuery(
      async () => {
        const { prisma } = await import('@/lib/db');
        return prisma.apiUser.findUnique({ where: { apiKey } });
      },
      null
    );

    if (!isDemo && !user) {
      return NextResponse.json({ error: 'Clé API invalide' }, { status: 401 });
    }

    if (!isDemo && user && user.credits <= 0) {
      return NextResponse.json({ error: 'Crédits insuffisants' }, { status: 402 });
    }

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Le champ messages est requis' }, { status: 400 });
    }

    const ALLOWED_ROLES = new Set(['user', 'assistant']);
    const safeMessages = messages
      .slice(-MAX_MESSAGES)
      .filter((m: { role: string; content: string }) =>
        m.content && typeof m.content === 'string' && m.content.length < MAX_MESSAGE_LENGTH
      )
      .map((m: { role: string; content: string }) => ({
        role: ALLOWED_ROLES.has(m.role) ? m.role as 'user' | 'assistant' : 'user',
        content: m.content.substring(0, MAX_MESSAGE_LENGTH),
      }));

    const validLocale = validateString(locale, 5) || 'fr';
    const systemPrompt = SYSTEM_PROMPTS[validLocale] || SYSTEM_PROMPTS.fr
    const formattedMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...safeMessages,
    ]

    if (isDemo) {
      const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
      return NextResponse.json({
        content: findResponse(lastUserMsg?.content || '', locale),
        provider: 'demo',
        demo: true,
      });
    }

    const result = await callAI(formattedMessages, 1000);

    if (!result.content) {
      const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user');
      return NextResponse.json({
        content: findResponse(lastUserMsg?.content || '', locale),
        provider: result.provider,
        fallback: true,
      });
    }

    if (!isDemo && user) {
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
    }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch {
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
