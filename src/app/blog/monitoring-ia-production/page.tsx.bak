import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Monitoring IA en production : métriques, alertes, dérive 2026',
    description:
      'Quoi surveiller quand votre IA est en prod : latence, taux d\'erreur, coûts, dérive de qualité, hallucinations. Dashboard pratique et seuils d\'alerte.',
    path: '/blog/monitoring-ia-production',
    type: 'article',
    keywords: [
      'monitoring IA production',
      'observabilité LLM',
      'dérive modèle',
      'alertes IA',
      'métriques inférence',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Monitoring IA en production : métriques, alertes, dérive 2026',
  description:
    'Quoi surveiller quand votre IA est en prod : latence, taux d\'erreur, coûts, dérive de qualité, hallucinations. Dashboard pratique et seuils d\'alerte.',
  slug: 'monitoring-ia-production',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Monitoring IA en production', path: '/blog/monitoring-ia-production' },
  ],
})

export default function BlogMonitoringIaProduction() {
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
              <Tag className="w-3 h-3" /> Ops
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 11 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Monitoring IA en production : métriques, alertes, dérive 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Mettre un LLM en production, c\'est comme déployer un service externe dont vous
            ne contrôlez pas les poids. Le modèle peut changer (mise à jour provider), dériver
            (prompt engineering qui casse), ou halluciner différemment selon l\'entrée.
            Voici les métriques à suivre, les alertes à poser, et comment détecter la dérive.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Métriques d\'infrastructure (niveau 1)</h2>
          <p>
            Ces métriques existent pour tout service HTTP. Elles sont nécessaires mais
            non suffisantes pour l\'IA.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Latence p50 / p95 / p99</strong> : par provider, par endpoint, par type de tâche.</li>
            <li><strong>Taux d\'erreur HTTP</strong> : 429 (rate limit), 5xx (provider down), 400 (validation).</li>
            <li><strong>Throughput</strong> : requêtes/minute, tokens/seconde.</li>
            <li><strong>Disponibilité</strong> : uptime du routeur multi-provider.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">2. Métriques de coût (niveau 2)</h2>
          <p>
            Le coût est une métrique opérationnelle, pas seulement financière.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Coût par 1k requêtes</strong> : ventilé par provider, par modèle, par feature.</li>
            <li><strong>Tokens entrée/sortie par requête</strong> : dérive du prompt = dérive du coût.</li>
            <li><strong>Ratio cache hit</strong> : % de requêtes servies du cache sémantique.</li>
            <li><strong>Coût de fallback</strong> : surcoût quand le provider principal échoue.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">3. Métriques de qualité (niveau 3 — le cœur IA)</h2>
          <p>
            Ici, pas de ground truth automatique. Il faut des proxys mesurables.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Taux de refus</strong> : % de réponses « Je ne peux pas répondre ».</li>
            <li><strong>Longueur moyenne de réponse</strong> : chute brutale = hallucination ou troncature.</li>
            <li><strong>Répétition n-grammes</strong> : boucle de tokens = modèle coincé.</li>
            <li><strong>Score de cohérence (auto-éval)</strong> : un LLM juge léger évalue la réponse sur une grille (pertinence, ton, format). Coût faible, signal fort.</li>
            <li><strong>Feedback utilisateur explicite</strong> : 👍/👎, signalement, copie de la réponse.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">4. Détecter la dérive (drift)</h2>
          <p>
            La dérive n\'est pas un bug, c\'est un glissement progressif. Trois types :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data drift</strong> : la distribution des entrées change (nouveaux utilisateurs, nouveau jargon). Détectable via embedding des prompts entrants + distance au centroïde historique.</li>
            <li><strong>Concept drift</strong> : la bonne réponse change (régulation, prix, produit). Détectable via feedback négatif croissant sur des sujets stables.</li>
            <li><strong>Model drift</strong> : le provider a mis à jour le modèle (ex. GPT-4o → GPT-4o-mini silencieux). Détectable via régression sur un jeu de test figé (golden set).</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">5. Alertes pratiques (seuils de départ)</h2>
          <p>
            Adaptez à votre volume. L\'objectif : être réveillé pour les vraies pannes, pas pour le bruit.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Latence p95 > 2x la médiane sur 5 min → alerte warning.</li>
            <li>Taux d\'erreur 5xx > 2 % sur 5 min → alerte critical.</li>
            <li>Coût/1k req > 1,5x la médiane 7 jours → alerte warning.</li>
            <li>Taux de refus > 10 % sur 15 min → alerte warning.</li>
            <li>Score auto-éval < seuil défini sur golden set → alerte critical.</li>
            <li>Feedback négatif > 2x la baseline sur 1 h → alerte warning.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">6. Le golden set : votre filet de sécurité</h2>
          <p>
            Constituez un jeu de 50-200 paires (prompt, réponse attendue) représentatif de
            vos cas d\'usage critiques. Lancez-le automatiquement à chaque déploiement,
            à chaque changement de provider, et tous les jours à heure fixe. Comparez
            les réponses actuelles aux réponses de référence (similarité sémantique,
            respect du format, absence d\'hallucination). C\'est le seul moyen de
            détecter une régression silencieuse.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Monitoring intégré</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI expose latence, coûts, taux d\'erreur, cache hit et auto-éval
              par endpoint. Dashboard temps réel + alertes configurables.
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
              <Link href="/blog/couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Coûts réels des LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/automatisation-ia-saas" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Automatisation IA pour SaaS
              </Link>
            </li>
            <li>
              <Link href="/blog/edge-functions-ia" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Edge Functions pour l\'IA
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}