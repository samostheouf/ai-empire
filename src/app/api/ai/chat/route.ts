import { NextResponse } from 'next/server';
import { callAI, isDemoMode } from '@/lib/ai';
import { findResponse } from '@/lib/chatbot-knowledge';
import { safeQuery } from '@/lib/db';
import { rateLimit, getRateLimitHeaders } from '@/lib/rate-limit';
import { validateString } from '@/lib/input-validation';
import { SUBSCRIPTION_PLANS } from '@/lib/plans';

// Les tarifs sont injectes dans le prompt depuis la source unique
// (src/lib/plans.ts). Un LLM libre, asked « combien ça coûte ? », invente un
// chiffre : c'est une declaration de prix fausse, et c'est exactement le bug
// que le tunnel de paiement eliminait. Verifie en prod : le chatbot
// repondait « 19 EUR » la ou Stripe debitait 49 EUR.
const PRICE_GUARD: Record<string, string> = {
  fr: `
TARIFS OFFICIELS (seuls ces montants sont vrais, n'invente jamais d'autre prix) :
- Starter : gratuit, 100 crédits/mois
- Pro : ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/mois, 10 000 crédits/mois
- Business : ${SUBSCRIPTION_PLANS.business.price / 100} EUR/mois, crédits illimités
- Templates : de 49 à 199 EUR, remise de lancement de -30% déjà appliquée
Si tu ne connais pas un prix, dis-le et renvoie vers /pricing. Ne propose jamais de code promo sur un abonnement.`,
  en: `
OFFICIAL PRICING (these are the only true amounts, never invent another price):
- Starter: free, 100 credits/month
- Pro: ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/month, 10,000 credits/month
- Business: ${SUBSCRIPTION_PLANS.business.price / 100} EUR/month, unlimited credits
- Templates: from 49 to 199 EUR, launch discount of -30% already applied
If you don't know a price, say so and point to /pricing. Never offer a promo code on a subscription.`,
  es: `\nPRECIOS OFICIALES (únicos importes reales, nunca inventes otro): Starter gratis; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/mes; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/mes. Plantillas de 49 a 199 EUR con -30% ya aplicado. Si no sabes un precio, dilo y remite a /pricing.`,
  de: `\nOFFIZIELLE PREISE (nur diese Beträge stimmen, erfinde keine anderen): Starter kostenlos; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/Monat; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/Monat. Templates 49–199 EUR mit -30% Rabatt. Bei unbekanntem Preis auf /pricing verweisen.`,
  it: `\nPREZZI UFFICIALI (unici importi reali, non inventarne altri): Starter gratis; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/mese; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/mese. Template da 49 a 199 EUR con -30% già applicato. Se non sai un prezzo, rimanda a /pricing.`,
  pt: `\nPREÇOS OFICIAIS (únicos valores verdadeiros, nunca invente outro): Starter grátis; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/mês; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/mês. Templates de 49 a 199 EUR com -30% já aplicado. Se não souber um preço, indique /pricing.`,
  ja: `\n公式価格（この金额のみが正しい。他を作らないこと）: Starter 無料; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/月; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/月。テンプレートは49〜199 EUR、-30%割引適用済み。不明な価格は /pricing を案内。`,
  ko: `\n공식 가격(다음 금액만 정확합니다, 다른 금액을 만들지 마세요): Starter 무료; Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/월; Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/월. 템플릿 49~199 EUR, -30% 할인 적용됨. 모르는 가격은 /pricing 안내.`,
  zh: `\n官方价格（只有以下金额正确，不要编造其他价格）：Starter 免费；Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/月；Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/月。模板 49–199 EUR，已应用 -30% 折扣。不确定的价格请引导至 /pricing。`,
  ar: `\nالأسعار الرسمية (هذه المبالغ فقط صحيحة، لا تخترع أسعارًا أخرى): Starter مجاني؛ Pro ${SUBSCRIPTION_PLANS.pro.price / 100} EUR/شهر؛ Business ${SUBSCRIPTION_PLANS.business.price / 100} EUR/شهر. القوالب من 49 إلى 199 EUR مع خصم -30% مطبق. إذا لم تعرف سعرًا، وجّه إلى /pricing.`,
}

const SYSTEM_PROMPTS: Record<string, string> = {
  fr: `Tu es l'assistant NeuraAPI. Réponds de manière utile et concise en français. Tu aides les développeurs avec les APIs IA, les templates Next.js, et le déploiement SaaS.${PRICE_GUARD.fr}`,
  en: `You are the NeuraAPI assistant. Answer helpfully and concisely in English. You help developers with AI APIs, Next.js templates, and SaaS deployment.${PRICE_GUARD.en}`,
  es: `Eres el asistente de NeuraAPI. Responde de forma útil y concisa en español. Ayudas a desarrolladores con APIs de IA, plantillas Next.js y despliegue SaaS.${PRICE_GUARD.es}`,
  de: `Du bist der NeuraAPI-Assistent. Antworte hilfreich und präzise auf Deutsch. Du hilfst Entwicklern mit KI-APIs, Next.js-Templates und SaaS-Bereitstellung.${PRICE_GUARD.de}`,
  pt: `Você é o assistente NeuraAPI. Responda de forma útil e concisa em português. Você ajuda desenvolvedores com APIs de IA, templates Next.js e implantação SaaS.${PRICE_GUARD.pt}`,
  ja: `NeuraAPIアシスタントです。日本語で簡潔に役立つ回答をします。AI API、Next.jsテンプレート、SaaSデプロイについて開発者をサポートします。${PRICE_GUARD.ja}`,
  ko: `NeuraAPI 어시스턴트입니다. 한국어로 간결하고 유용하게 답변합니다. AI API, Next.js 템플릿, SaaS 배포에 대해 개발자를 지원합니다.${PRICE_GUARD.ko}`,
  zh: `您是NeuraAPI助手。用中文简洁高效地回答。帮助开发者处理AI API、Next.js模板和SaaS部署。${PRICE_GUARD.zh}`,
  ar: `أنت مساعد NeuraAPI. أجب بطريقة مفيدة ومختصرة بالعربية. تساعد المطورين على APIs الذكاء الاصطناعي وقوالب Next.js ونشر SaaS.${PRICE_GUARD.ar}`,
}

const MAX_MESSAGE_LENGTH = 4000
const MAX_MESSAGES = 50

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const apiKey = request.headers.get('x-api-key') || '';

    // DEUX NOTIONS A NE PAS CONFONDRE (corrige le 29/09) :
    //
    // 1. `aiConfigured` : un LLM est-il configure sur l'app ? Si oui, le
    //    chatbot doit RÉPONDRE AVEC LE LLM. Avant, `isDemo` melangeait les deux
    //    et comme le widget du site est anonyme (pas de x-api-key), la route
    //    tombait systematiquement en mode demo — alors que GROQ_API_KEY,
    //    OPENAI_API_KEY, GLM_API_KEY et XAI_API_KEY sont tous presentes en
    //    production. Le site annoncait « une IA reelle » et servait des reponses
    //    en boite : fausse declaration sur l'assistant de vente.
    //
    // 2. `hasApiKey` : le visiteur a-t-il une cle ? Ca ne concerne que la
    //    facturation de credits et la validation, pas l'existence du LLM.
    const aiConfigured = !isDemoMode();
    const hasApiKey = Boolean(apiKey) && apiKey !== 'demo';
    // Le SEUL critere de repli est l absence de LLM configure. Un
    // visiteur anonyme (le widget du site) n a pas de cle API et doit
    // MALGRE TOUT obtenir une reponse du LLM. La version precedente
    // faisait `!hasApiKey || !aiConfigured` : comme le widget est
    // anonyme, le chatbot servait du texte statique meme avec un LLM
    // fonctionnel (verifie : isDemoMode() = false, Groq repondait).
    const isDemo = !aiConfigured;

    const body = await request.json();
    const { messages, locale = 'fr' } = body;

    if (hasApiKey) {
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
        const { prisma } = await import('@/lib/db')
        return prisma.apiUser.findUnique({ where: { apiKey } });
      },
      null
    );

    if (hasApiKey && !user) {
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

    // Repli : aucun LLM ne repond. On rend la base de connaissances ET on
    // l'annonce comme tel — un visiteur qui croit parler a un modele doit le
    // savoir. Cacher la degradation derriere une fausse reponse « naturelle »
    // est ce qui fait perdre confiance a la premiere question hors-sujet.
    const lastUserMsg = [...messages].reverse().find((m: { role: string }) => m.role === 'user')
    const fallbackAnswer = () => {
      const canned = findResponse(lastUserMsg?.content || '', locale)
      return `${canned}\n\n_Note : assistant en mode guidé — réponse tirée de la documentation NeuraAPI._`
    }

    if (isDemo) {
      return NextResponse.json({
        content: fallbackAnswer(),
        provider: 'demo',
        demo: true,
      });
    }

    const result = await callAI(formattedMessages, 1000);

    if (!result.content) {
      return NextResponse.json({
        content: fallbackAnswer(),
        provider: result.provider,
        fallback: true,
      });
    }

    if (user) {
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
