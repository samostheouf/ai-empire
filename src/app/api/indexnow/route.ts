import { NextResponse } from "next/server";

// IndexNow : notifie Bing/IndexNow des URLs du blog dès qu'elles sont publiées.
// Implémentation statique — robuste en prod Vercel standalone où fs src/app/blog n'existe pas.
const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://ai-empire-steel.vercel.app";
const INDEXNOW_KEY = "aiempire-indexnow-9f3c2a7e8b1d4f60a5c2e9b7d3f1a8c4";

export const dynamic = "force-dynamic";

const BLOG_SLUGS = ['ai-agents-launch', 'ai-api-integration', 'ai-api-pour-saas', 'api-ia-nextjs', 'api-ia-nextjs-production', 'automatisation-api', 'automatisation-ia-saas', 'automatisation-ia-saas-avancee', 'automatiser-saas-ia', 'chatbot-ia-nextjs-groq', 'circuit-breaker-pattern-nextjs', 'comparaison-providers-ia-gratuits', 'comparatif-outils-no-code-2026', 'cout-reel-api-ia-2026', 'couts-llm-production', 'creer-saas-48h', 'edge-functions-ia-patterns', 'edge-runtime-ia', 'email-transactionnel-nextjs-resend-guide', 'ia-rgpd-conformite-2026', 'lancer-saas-sans-code', 'monitoring-ia-avance-drift-eval', 'monitoring-ia-production', 'neuraapi-vs-concurrents', 'nextjs-15-server-actions-ia', 'nextjs-saas-starter', 'optimisation-couts-llm-production', 'pricing-ia-saas-modeles-metriques', 'prompts-ia-customer-success', 'rag-nextjs-groq', 'rag-tutoriel-francais', 'rag-vs-fine-tuning', 'rag-vs-finetuning-architecture-decision', 'seo-ia-tools', 'stripe-billing-nextjs', 'template-saas-nextjs-2026', 'templates-nextjs-premium', 'templates-premium-guide', 'vercel-ai-sdk-nextjs-streaming-tool-calling', 'webhook-stripe-nextjs-tutorial'];

function blogUrls(): string[] {
  const base = [SITE_URL + "/blog"];
  for (const s of BLOG_SLUGS) base.push(SITE_URL + "/blog/" + s);
  return base;
}

export async function GET() {
  const urlList = blogUrls();
  const body = {
    host: new URL(SITE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return NextResponse.json({ ok: res.ok, submitted: urlList.length, status: res.status });
  } catch {
    return NextResponse.json({ ok: false, submitted: urlList.length, note: "indexnow submit skipped" });
  }
}
