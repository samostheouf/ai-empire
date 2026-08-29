import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Optimisation coûts LLM en production : stratégies 2026',
    description:
      'Réduire la facture LLM sans dégrader la qualité : cache sémantique, routing intelligent, compression de prompts, modèles locaux hybrides. Méthodes mesurées en production.',
    path: '/blog/optimisation-couts-llm-production',
    type: 'article',
    keywords: [
      'optimisation coûts LLM',
      'réduire facture IA',
      'cache sémantique LLM',
      'routing multi-provider',
      'modèles locaux hybrides',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Optimisation coûts LLM en production : stratégies 2026',
  description:
    'Réduire la facture LLM sans dégrader la qualité : cache sémantique, routing intelligent, compression de prompts, modèles locaux hybrides. Méthodes mesurées en production.',
  slug: 'optimisation-couts-llm-production',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Optimisation coûts LLM', path: '/blog/optimisation-couts-llm-production' },
  ],
})

export default function BlogOptimisationCoutsLlm() {
  return (
    <article className="min-h-screen bg-[#0f0a2e] text-indigo-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Optimisation
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 12 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Optimisation coûts LLM en production : stratégies 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Le prix affiché par token n&apos;est qu&apos;un point de départ. En production, la facture
            réelle dépend de votre architecture : cache, routing, compression, et choix du modèle
            par tâche. Voici les leviers qui réduisent la note de 40 à 80 % sans casser la qualité.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Cache sémantique : le levier #1 (30-70 % d&apos;économie)</h2>
          <p>
            La plupart des requêtes sont répétitives ou très similaires. Un cache exact (même prompt)
            capture 10-20 % du trafic. Un cache sémantique (embeddings + similarité > 0,85)
            capture 40-70 % selon votre cas d&apos;usage.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Implémentation</strong> : embeddings du prompt utilisateur → recherche vectorielle → si score > seuil, retour réponse en cache.</li>
            <li><strong>Invalidation</strong> : TTL court (1-6h) + invalidation manuelle sur mise à jour doc/source.</li>
            <li><strong>Coût infrastructure</strong> : ~5-15 $/mois pour 100k requêtes/jour (Redis + embeddings). ROI immédiat.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">2. Routing intelligent : le bon modèle pour la bonne tâche</h2>
          <p>
            Ne payez pas GPT-4o pour classer un ticket ou extraire une entité. Routez selon la complexité :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Classification / extraction / formatage</strong> : modèles petits (Haiku, 4o-mini, GLM-4-Flash, Gemma-2-9B). Coût : 5-20x moins cher.</li>
            <li><strong>Raisonnement complexe / code / analyse longue</strong> : modèles forts (Sonnet, GPT-4o, Opus).</li>
            <li><strong>Streaming chat / UX temps réel</strong> : modèles ultra-rapides (Groq Llama-3, Cerebras).</li>
          </ul>
          <p>
            Un routeur basé sur few-shot classification (coût quasi nul) décide avant d&apos;appeler
            le provider. Gain typique : 40-60 % sur la facture totale.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">3. Compression de prompts : moins de tokens, même résultat</h2>
          <p>
            Les system prompts, few-shot examples, et contexte RAG gonflent l&apos;entrée.
            Trois techniques pour compresser sans perte :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Prompt compression (LLMLingua, Selective Context)</strong> : un petit modèle supprime les tokens redondants du prompt. Gain : 2-5x tokens entrée.</li>
            <li><strong>Few-shot dynamique</strong> : n&apos;injectez que les 1-2 exemples les plus pertinents (similarité embedding) au lieu de 5-10 fixes.</li>
            <li><strong>RAG chunking optimisé</strong> : chunks de 300-500 tokens, top-3 au lieu de top-10, reranker avant injection.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">4. Hybride local + API : le point d&apos;équilibre 2026</h2>
          <p>
            Faire tourner un modèle open-source (Llama-3.1-8B, Qwen-2.5-7B, Nemotron-3-Ultra)
            sur GPU loué (RunPod, Lambda, Vast.ai) coûte 0,20-0,50 $/h pour un A100/H100 partagé.
            Le point d&apos;équilibre : ~2-5 millions de tokens/jour selon le modèle.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`# Calcul approximatif point d'équilibre
# API (GPT-4o-mini) : 0,15 $/M tokens entrée + 0,60 $/M tokens sortie
# Local (Llama-3.1-8B sur H100 0,30 $/h) : ~50k tokens/s = 180M tokens/h
# Coût local/token ≈ 0,0000017 $/token = 1,70 $/M tokens (entrée+sortie mélangés)

# Seuil : si volume > 2M tokens/jour → local devient rentable
# Mais : maintenance, monitoring, mise à jour, expertise MLOps requises`}</code></pre>
          <p>
            Stratégie hybride recommandée : local pour le volume répétitif (classification,
            embedding, résumé court), API pour le raisonnement complexe et la qualité finale.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">5. Monitoring des coûts par feature : voir pour optimiser</h2>
          <p>
            Sans ventilation, vous optimisez à l&apos;aveugle. Taggez chaque appel : feature, user_tier,
            model, provider. Dashboard quotidien : coût/1k req par feature, drift de tokens/prompt,
            cache hit rate, fallback rate.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Allez sur la feature la plus coûteuse → compressez son prompt / changez de modèle / cachez.</li>
            <li>Surveillez le « prompt creep » : les développeurs ajoutent du contexte sans mesurer l&apos;impact.</li>
            <li>Automatisez l&apos;alerte : coût/feature > 1,5x médiane 7 jours = investigation.</li>
          </ul>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Optimisation intégrée</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI : cache sémantique natif, routing multi-modèles, compression prompts,
              et dashboard coûts par endpoint. Une clé, facturation unifiée.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Tester gratuitement →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Coûts réels des LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/monitoring-ia-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA en production
              </Link>
            </li>
            <li>
              <Link href="/blog/edge-functions-ia" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Edge Functions pour l&apos;IA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}