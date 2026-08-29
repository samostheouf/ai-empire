import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Monitoring IA avancé : détection dérive, auto-éval, golden set 2026',
    description:
      'Au-delà des métriques de base : détecter la dérive silencieuse (data/concept/model drift), auto-évaluation LLM-as-judge, golden set nightly, alertes actionnables. Framework complet.',
    path: '/blog/monitoring-ia-avance-drift-eval',
    type: 'article',
    keywords: [
      'monitoring IA avancé',
      'détection dérive modèle',
      'data drift concept drift',
      'LLM as judge evaluation',
      'golden set nightly',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Monitoring IA avancé : détection dérive, auto-éval, golden set 2026',
  description:
    'Au-delà des métriques de base : détecter la dérive silencieuse (data/concept/model drift), auto-évaluation LLM-as-judge, golden set nightly, alertes actionnables. Framework complet.',
  slug: 'monitoring-ia-avance-drift-eval',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Monitoring IA avancé', path: '/blog/monitoring-ia-avance-drift-eval' },
  ],
})

export default function BlogMonitoringIaAvance() {
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
              <Tag className="w-3 h-3" /> Ops avancé
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 12 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Monitoring IA avancé : détection dérive, auto-éval, golden set 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Latence, erreurs, coûts : nécessaire mais insuffisant. Le vrai risque en production IA,
            c&apos;est la dérive silencieuse — le modèle répond encore, mais mal. Voici comment
            détecter data drift, concept drift, model drift avant qu&apos;ils n&apos;impactent
            vos utilisateurs, avec une auto-évaluation continue et un golden set nightly.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Les trois drifts : les reconnaître pour les détecter</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Définition</th>
                <th className="text-left p-2">Signal détectable</th>
                <th className="text-left p-2">Fréquence check</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Data drift</td>
                <td className="p-2">Distribution entrées change (nouveau jargon, nouvelle langue, nouveau format)</td>
                <td className="p-2">Distance embedding prompt entrant vs centroïde historique > seuil</td>
                <td className="p-2">Temps réel (streaming)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Concept drift</td>
                <td className="p-2">Bonne réponse change (régulation, prix, produit, politique)</td>
                <td className="p-2">Feedback négatif croissant sur sujets stables + auto-éval score baisse</td>
                <td className="p-2">Quotidien (agrégé)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Model drift</td>
                <td className="p-2">Provider met à jour le modèle silencieusement (GPT-4o → 4o-mini)</td>
                <td className="p-2">Régression sur golden set figé (similarité sémantique, format, hallucination)</td>
                <td className="p-2">À chaque déploiement + nightly</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">2. Détection data drift : embeddings des prompts entrants</h2>
          <p>
            Chaque prompt utilisateur → embedding (text-embedding-3-small, 0,02 $/M tokens).
            Maintenez un centroïde glissant (fenêtre 7 jours) des embeddings normaux.
            Alerte si distance cosinus > 0,3 (à calibrer sur votre historique).
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`# Pipeline data drift detection (exécuté à chaque requête, async)
async function checkDataDrift(prompt: string) {
  const embedding = await embed(prompt)  // 1536 dims, ~50ms
  const centroid = await getCentroid('7d')  // précalculé toutes les heures
  const distance = cosineDistance(embedding, centroid)
  
  if (distance > THRESHOLD) {
    await alert({ type: 'data_drift', distance, prompt: prompt.slice(0,100) })
    // Optionnel : router vers modèle plus robuste / human-in-the-loop
  }
  
  // Mise à jour centroïde (exponential moving average)
  await updateCentroid(embedding, alpha=0.01)
}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">3. Détection concept drift : feedback + auto-éval croisés</h2>
          <p>
            Le concept drift n&apos;apparaît pas dans les embeddings — la question semble normale,
            mais la bonne réponse a changé. Deux signaux croisés :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Feedback utilisateur explicite</strong> : 👎, signalement, reformulation de la question. Agrégé par topic (clustering embeddings).</li>
            <li><strong>Auto-évaluation LLM-as-judge</strong> : un modèle léger (Haiku, 4o-mini, Nemotron-3-Ultra) note chaque réponse sur : pertinence (1-5), respect format (oui/non), ton (1-5), hallucination (oui/non). Coût : ~0,001 $/éval.</li>
          </ul>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`# Prompt auto-éval (LLM-as-judge)
const EVAL_PROMPT = \`Tu es un évaluateur. Note la réponse sur :
1. Pertinence par rapport à la question (1-5)
2. Respect du format demandé (oui/non)
3. Ton conforme aux consignes (1-5)
4. Hallucination ou info non sourcée (oui/non)

Question : {{question}}
Réponse : {{answer}}
Contexte/Contraintes : {{system_prompt + few_shot}}

Réponds en JSON : {pertinence, format, ton, hallucination, commentaire}\`}`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">4. Golden set nightly : votre filet de sécurité ultime</h2>
          <p>
            Constituez 100-300 paires (prompt, réponse idéale, citations attendues, format attendu)
            couvrant : cas nominaux, cas limites, cas adverses, styles variés. Ce jeu est FIGÉ.
            Il ne change que quand le besoin métier change.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Exécution</strong> : tous les jours 03h00 UTC + à chaque déploiement + à chaque changement provider.</li>
            <li><strong>Métriques</strong> : similarité sémantique (embedding réponse vs référence), respect format (%), hallucination détectée (%), latence p95.</li>
            <li><strong>Seuils d&apos;alerte</strong> : similarité < 0,85 OU format invalide > 2 % OU hallucination > 1 % = alerte critical + blocage déploiement si en cours.</li>
            <li><strong>Dashboard</strong> : courbes temporelles par métrique, détection tendance (régression lente).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">5. Alertes actionnables : pas de bruit, que du signal</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Alerte</th>
                <th className="text-left p-2">Condition</th>
                <th className="text-left p-2">Action</th>
                <th className="text-left p-2">Sévérité</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">Data drift</td>
                <td className="p-2">Distance centroïde > 0,3 sur 5% requêtes / 1h</td>
                <td className="p-2">Router vers modèle robuste + investiguer nouveau pattern</td>
                <td className="p-2">Warning</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Concept drift</td>
                <td className="p-2">Auto-éval pertinence < 3,5 sur topic stable / 24h</td>
                <td className="p-2">Mettre à jour RAG docs / system prompt / re-fine-tune</td>
                <td className="p-2">Warning</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Model drift</td>
                <td className="p-2">Golden set similarité < 0,85 OU hallucination > 1%</td>
                <td className="p-2">Rollback provider / verrouiller version / re-valider golden set</td>
                <td className="p-2">Critical</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Coût anomaly</td>
                <td className="p-2">Coût/1k req > 1,5x médiane 7j</td>
                <td className="p-2">Identifier feature / prompt leak / fallback loop</td>
                <td className="p-2">Warning</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Latence p95</td>
                <td className="p-2">> 2x médiane sur 5 min</td>
                <td className="p-2">Failover provider / activer cache / réduire contexte</td>
                <td className="p-2">Warning</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">6. Architecture monitoring unifiée</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Ingestion</strong> : chaque requête → event structuré (prompt, réponse, métriques, embeddings, user_id, feature, model, provider, latency, cost, feedback).</li>
            <li><strong>Stream processing</strong> : Flink / Kafka Streams / Vercel Analytics / custom workers → agrégations temps réel (centroïdes, taux, percentiles).</li>
            <li><strong>Stockage</strong> : TimescaleDB / ClickHouse / Tinybird pour séries temporelles + vector DB pour embeddings drifts.</li>
            <li><strong>Évaluation</strong> : worker nightly lance golden set + auto-éval sur échantillon 10% trafic.</li>
            <li><strong>Alerting</strong> : PagerDuty / Opsgenie / Slack webhooks avec runbooks liés.</li>
            <li><strong>Dashboard</strong> : Grafana / custom Next.js : vue temps réel + tendances 7/30 jours + drill-down par feature/model/provider.</li>
          </ol>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Monitoring clé en main</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI : data drift detection natif, auto-éval LLM-as-judge, golden set runner,
              dashboard temps réel, alertes configurables. Zéro infrastructure à gérer.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir le dashboard →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/monitoring-ia-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA en production : métriques, alertes, dérive
              </Link>
            </li>
            <li>
              <Link href="/blog/eval-prompts-mesurer-qualite" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Prompts d'évaluation : mesurer la qualité
              </Link>
            </li>
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation coûts LLM en production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}