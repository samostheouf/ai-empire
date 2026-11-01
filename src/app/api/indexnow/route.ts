import { NextResponse } from "next/server";

// IndexNow : notifie Bing/IndexNow des URLs du site dès qu'elles sont publiées.
// Implémentation statique — robuste en prod Vercel standalone où fs src/app/blog n'existe pas.
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://ai-empire-steel.vercel.app";
const INDEXNOW_KEY = "aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const REQUEST_TIMEOUT_MS = 8000;

export const dynamic = "force-dynamic";

const BLOG_SLUGS = [
  "ai-agents-launch",
  "ai-api-integration",
  "ai-api-pour-saas",
  "api-ia-nextjs",
  "api-ia-nextjs-production",
  "architecture-multi-tenant-saas-ia-nextjs",
  "automatisation-api",
  "automatisation-ia-saas",
  "automatisation-ia-saas-avancee",
  "automatiser-saas-ia",
  "cache-semantique-llm-nextjs-redis-2026",
  "chatbot-ia-nextjs-groq",
  "circuit-breaker-pattern-nextjs",
  "comparaison-providers-ia-gratuits",
  "comparatif-outils-no-code-2026",
  "cout-reel-api-ia-2026",
  "couts-llm-production",
  "creer-saas-48h",
  "edge-functions-ia-patterns",
  "edge-runtime-ia",
  "email-transactionnel-nextjs-resend-guide",
  "ia-rgpd-conformite-2026",
  "ia-seo-contenu-automatise-saas",
  "jobs-async-ia-nextjs-file-attente-webhooks",
  "lancer-saas-sans-code",
  "monetiser-api-ia-nextjs-stripe",
  "monitoring-ia-avance-drift-eval",
  "monitoring-ia-production",
  "neuraapi-vs-concurrents",
  "nextjs-15-server-actions-ia",
  "nextjs-16-migration",
  "nextjs-ia-saas-architecture-2026",
  "nextjs-saas-starter",
  "optimisation-couts-llm-production",
  "pricing-ia-saas-modeles-metriques",
  "prompts-ia-customer-success",
  "rag-nextjs-groq",
  "rag-tutoriel-francais",
  "rag-vs-fine-tuning",
  "rag-vs-finetuning-architecture-decision",
  "rate-limiting-api-ia-nextjs",
  "securiser-api-ia-nextjs-2026",
  "seo-ia-tools",
  "server-actions-ia-nextjs-14",
  "stripe-billing-nextjs",
  "template-saas-nextjs-2026",
  "templates-nextjs-premium",
  "templates-premium-guide",
  "comment-integrer-api-ia-saas-nextjs-2026",
  "groq-vs-openai-vs-gemini-comparatif-developpeurs",
  "templates-nextjs-premium-economiser-200h",
  "vercel-ai-sdk-nextjs-streaming-tool-calling",
  "webhook-stripe-nextjs-tutorial",
];

function buildUrlList(): string[] {
  const urls: string[] = [SITE_URL];
  urls.push(`${SITE_URL}/blog`);
  for (const slug of BLOG_SLUGS) urls.push(`${SITE_URL}/blog/${slug}`);
  urls.push(`${SITE_URL}/templates`);
  urls.push(`${SITE_URL}/pricing`);
  return urls;
}

export async function GET() {
  const urlList = buildUrlList();
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);

    let detail: string | undefined;
    if (!res.ok) {
      try {
        detail = (await res.text()).slice(0, 500);
      } catch {
        detail = undefined;
      }
    }

    return NextResponse.json({
      ok: res.ok,
      submitted: urlList.length,
      status: res.status,
      ...(detail ? { detail } : {}),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { ok: false, submitted: urlList.length, note: "indexnow submit skipped", error: message },
      { status: 200 },
    );
  }
}