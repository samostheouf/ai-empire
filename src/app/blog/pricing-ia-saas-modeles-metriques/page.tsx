import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Pricing IA SaaS : modèles, métriques, et grilles 2026',
    description:
      'Comment tarifer votre fonctionnalité IA : per-seat, per-usage, per-outcome, hybrid. Métriques unit economics (CAC, LTV, marge brute), grilles de prix réelles, et pièges à éviter.',
    path: '/blog/pricing-ia-saas-modeles-metriques',
    type: 'article',
    keywords: [
      'pricing IA SaaS',
      'modèle tarification IA',
      'unit economics IA',
      'per usage pricing',
      'per outcome pricing',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'Pricing IA SaaS : modèles, métriques, et grilles 2026',
  description:
    'Comment tarifer votre fonctionnalité IA : per-seat, per-usage, per-outcome, hybrid. Métriques unit economics (CAC, LTV, marge brute), grilles de prix réelles, et pièges à éviter.',
  slug: 'pricing-ia-saas-modeles-metriques',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'Pricing IA SaaS', path: '/blog/pricing-ia-saas-modeles-metriques' },
  ],
})

export default function BlogPricingIaSaas() {
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
              <Tag className="w-3 h-3" /> Business
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 11 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Pricing IA SaaS : modèles, métriques, et grilles 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            Ajouter de l&apos;IA change vos coûts marginaux (chaque requête coûte) et votre valeur
            perçue (automatisation = gain de temps). Le pricing classique per-seat ne reflète
            ni l&apos;un ni l&apos;autre. Voici les modèles qui fonctionnent, les métriques à
            suivre, et des grilles de référence.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">1. Quatre modèles de tarification IA</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Modèle</th>
                <th className="text-left p-2">Fonctionnement</th>
                <th className="text-left p-2">Avantages</th>
                <th className="text-left p-2">Risques</th>
                <th className="text-left p-2">Exemples</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Per-seat + add-on IA</td>
                <td className="p-2">Base par utilisateur + $X/mois pour fonctionnalités IA</td>
                <td className="p-2">Simple, prévisible, familiarité client</td>
                <td className="p-2">Découle usage réel, heavy users subventionnés</td>
                <td className="p-2">Notion AI, GitHub Copilot</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Per-usage (tokens/requêtes)</td>
                <td className="p-2">Facturation à la consommation réelle</td>
                <td className="p-2">Aligne coût/client, scale naturel</td>
                <td className="p-2">Imprévisible pour client, anxiété facture</td>
                <td className="p-2">OpenAI API, Anthropic API</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Per-outcome (résultat)</td>
                <td className="p-2">Facturation par tâche réussie (ticket résolu, lead qualifié)</td>
                <td className="p-2">Alignement valeur maximal, facile à vendre</td>
                <td className="p-2">Définition « succès » complexe, risque gaming</td>
                <td className="p-2">Intercom Fin, Sierra AI</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Hybrid (base + usage/outcome)</td>
                <td className="p-2">Abonnement fixe + composante variable plafonnée</td>
                <td className="p-2">Prévisibilité + alignement, best of both</td>
                <td className="p-2">Complexité facturation, communication</td>
                <td className="p-2">Vercel, Supabase, Neon</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">2. Unit economics IA : les métriques qui comptent</h2>
          <p>
            L&apos;IA ajoute un COGS variable (coût par requête/token) au modèle SaaS classique.
            Vos unit economics doivent l&apos;intégrer :
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Marge brute IA</strong> = (Revenu client - Coût IA client) / Revenu client. Visez > 70 % (vs 80-90 % SaaS pur).</li>
            <li><strong>Coût IA par client/mois</strong> : tokens entrée+sortie × prix provider + infrastructure (cache, routing, monitoring). Suivez par tier/client.</li>
            <li><strong>Payback period IA</strong> : CAC / (Marge mensuelle - Coût IA mensuel). L&apos;IA allonge le payback si mal pricée.</li>
            <li><strong>LTV/CAC ratio</strong> : doit rester > 3x. Si l&apos;IA double la valeur mais triple le COGS, le ratio se dégrade.</li>
          </ul>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`# Exemple calcul marge brute IA (hybrid pricing)
# Client plan Pro : $99/mois base + $0,10/requête IA (plafond $200)
# Usage moyen : 800 requêtes/mois = $80 IA
# Revenu total : $179/mois
# Coût IA réel : 800 req × 2500 tokens × $0,0015/1k = $3,00
# Marge brute IA = ($179 - $3) / $179 = 98,3%  ← Excellent

# Mais si usage = 5000 req/mois (power user) :
# Revenu : $99 + $200 (plafond) = $299
# Coût IA : 5000 × 2500 × $0,0015 = $18,75
# Marge = 93,7%  ← Encore bon grâce au plafond

# Sans plafond (per-usage pur) :
# Revenu : $99 + $500 = $599
# Coût : $18,75 → Marge 96,9% mais client fuit (facture imprévisible)`}</code></pre>

          <h2 className="text-2xl font-bold text-white mt-12">3. Grilles de prix de référence 2026 (observées marché)</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Catégorie</th>
                <th className="text-left p-2">Entrée de gamme</th>
                <th className="text-left p-2">Milieu</th>
                <th className="text-left p-2">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">Copilote code (per-seat)</td>
                <td className="p-2">$10-15/user/mois</td>
                <td className="p-2">$19-30/user/mois</td>
                <td className="p-2">$39-60/user/mois + SSO</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Support IA (per-outcome)</td>
                <td className="p-2">$0,50-1,00/résolution</td>
                <td className="p-2">$1,00-2,00/résolution</td>
                <td className="p-2">$2-5/résolution + SLA</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Génération contenu (per-usage)</td>
                <td className="p-2">$0,001-0,005/100 mots</td>
                <td className="p-2">$0,005-0,02/100 mots</td>
                <td className="p-2">Volume discount + dedicated</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Analyse données (hybrid)</td>
                <td className="p-2">$49/mois + 100 analyses</td>
                <td className="p-2">$199/mois + 1000 analyses</td>
                <td className="p-2">$999/mois + illimité + on-prem</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">4. Pièges à éviter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sous-estimer le COGS variable</strong> : un prompt qui coûte $0,01 en test coûte $0,05 en prod (contexte, few-shot, retries, fallback). Mesurez en conditions réelles.</li>
            <li><strong>Plafond trop bas / trop haut</strong> : trop bas = frustration power users. Trop haut = risque financier. Calibrez sur P95 usage bêta + 50 % marge.</li>
            <li><strong>Ne pas différencier par modèle</strong> : GPT-4o ≠ Haiku ≠ Llama-local. Si le client choisit le modèle, facturez différemment. Si vous choisissez, intégrez dans votre marge.</li>
            <li><strong>Ignorer le coût d&apos;acquisition IA</strong> : démo IA, POC, fine-tuning initial, onboarding data. Ces coûts fixes doivent être amortis dans le pricing.</li>
            <li><strong>Communiquer « IA incluse » sans limite</strong> : « IA illimitée » = invitation à l&apos;abus. Toujours une fair use policy (ex. 100x usage médian) ou composante variable.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">5. Framework de décision pricing</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Mesurez votre COGS réel</strong> : 1000 requêtes production → coût total tokens + infra.</li>
            <li><strong>Définissez la valeur client</strong> : gain temps × taux horaire / économie coûts / revenu additionnel.</li>
            <li><strong>Choisissez le modèle</strong> : usage prévisible → per-seat/add-on. Usage variable → hybrid. Valeur claire par tâche → per-outcome.</li>
            <li><strong>Testez en bêta</strong> : 10-20 clients, facturation réelle, mesurez usage, marge, churn, NPS.</li>
            <li><strong>Itérez la grille</strong> : ajustez plafonds, seuils, overage pricing. Communiquez changements 60 jours à l&apos;avance.</li>
          </ol>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Pricing IA sans deviner</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI : facturation unifiée multi-provider, tracking coûts par client/feature,
              alertes marge, simulateur pricing. Vous vendez la valeur, on gère la complexité.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir notre grille →
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
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation coûts LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/monitoring-ia-avance-drift-eval" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monitoring IA avancé : détection dérive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}