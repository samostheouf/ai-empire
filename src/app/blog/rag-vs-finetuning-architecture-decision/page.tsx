import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'RAG vs Fine-tuning : cadre de décision architectural 2026',
    description:
      'Au-delà du comparatif : matrice de décision par cas d\'usage, architecture hybride, coûts réels, et pièges à éviter. Choisissez l\'approche qui scale pour votre produit.',
    path: '/blog/rag-vs-finetuning-architecture-decision',
    type: 'article',
    keywords: [
      'RAG vs fine-tuning décision',
      'architecture hybride RAG fine-tuning',
      'choix approche IA produit',
      'retrieval augmented generation vs fine-tune',
      'stratégie knowledge IA',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'RAG vs Fine-tuning : cadre de décision architectural 2026',
  description:
    'Au-delà du comparatif : matrice de décision par cas d\'usage, architecture hybride, coûts réels, et pièges à éviter. Choisissez l\'approche qui scale pour votre produit.',
  slug: 'rag-vs-finetuning-architecture-decision',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'RAG vs Fine-tuning : décision', path: '/blog/rag-vs-finetuning-architecture-decision' },
  ],
})

export default function BlogRagVsFinetuningDecision() {
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
              <Tag className="w-3 h-3" /> Architecture
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 11 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            RAG vs Fine-tuning : cadre de décision architectural 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            RAG et fine-tuning ne sont pas mutuellement exclusifs. La vraie question n&apos;est pas
            « lequel choisir » mais « comment les combiner pour votre architecture ». Voici une
            matrice de décision par cas d&apos;usage, les coûts réels observés, et l&apos;architecture
            hybride qui gagne en production.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Matrice de décision par cas d&apos;usage</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Cas d'usage</th>
                <th className="text-left p-2">Approche recommandée</th>
                <th className="text-left p-2">Pourquoi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Doc technique / FAQ / contrats</td>
                <td className="p-2">RAG pur</td>
                <td className="p-2">Connaissance factuelle, mise à jour fréquente, citations requises</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Style de marque / ton / refus</td>
                <td className="p-2">Fine-tuning (ou system prompt)</td>
                <td className="p-2">Comportement, pas connaissance. System prompt souvent suffisant</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Code generation interne</td>
                <td className="p-2">Fine-tuning sur codebase</td>
                <td className="p-2">Patterns récurrents, conventions, API internes → internaliser</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Support client multi-produits</td>
                <td className="p-2">Hybride : FT style + RAG knowledge</td>
                <td className="p-2">Ton cohérent + faits à jour par produit</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Analyse juridique / conformité</td>
                <td className="p-2">RAG + citations obligatoires</td>
                <td className="p-2">Traçabilité source = exigence légale, fine-tuning = boîte noire</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2 font-mono">Copilote développeur spécialisé</td>
                <td className="p-2">Fine-tuning (LoRA/QLoRA)</td>
                <td className="p-2">Latence critique, patterns fixes, pas de mise à jour quotidienne</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">L&apos;architecture hybride qui gagne : FT pour le « comment », RAG pour le « quoi »</h2>
          <p>
            Séparez le comportement de la connaissance. Fine-tunez un modèle de base (8-70B)
            sur : ton, format de sortie, règles de refus, style de code, structure de réponse.
            Utilisez RAG pour : faits, docs, prix, régulations, données clients.
          </p>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 text-sm"><code>{`# Pipeline hybride production
1. Requête utilisateur → Classificateur d'intention (petit modèle)
2. Si "faits requis" → RAG retrieve (top-k + rerank) → chunks injectés
3. System prompt fine-tuné (comportement) + chunks RAG (connaissance) → Modèle principal
4. Validateur : citations présentes ? Format respecté ? Pas d'hallucination ?
5. Réponse finale`}</code></pre>
          <p>
            Avantages : mise à jour connaissance = réindexation RAG (minutes), pas de réentraînement.
            Comportement stable = fine-tuning figé. Coût inférence = modèle FT + tokens RAG.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Coûts réels observés (production, 2025-2026)</h2>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left p-2">Poste</th>
                <th className="text-left p-2">RAG seul</th>
                <th className="text-left p-2">Fine-tuning seul</th>
                <th className="text-left p-2">Hybride</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-2">Setup initial</td>
                <td className="p-2">2-5 jours (ingestion, chunking, index)</td>
                <td className="p-2">1-3 semaines (dataset, training, eval)</td>
                <td className="p-2">3-4 semaines (les deux en parallèle)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Coût inférence / 1k req</td>
                <td className="p-2">$0,50-2,00 (tokens prompt + retrieval)</td>
                <td className="p-2">$1,00-5,00 (modèle FT souvent plus cher)</td>
                <td className="p-2">$1,50-4,00 (FT + RAG tokens)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Mise à jour connaissance</td>
                <td className="p-2">Minutes (réindexation)</td>
                <td className="p-2">Jours-semaines (réentraînement)</td>
                <td className="p-2">Minutes (côté RAG uniquement)</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-2">Expertise requise</td>
                <td className="p-2">Data engineering, search</td>
                <td className="p-2">ML engineering, MLOps, GPU</td>
                <td className="p-2">Les deux (ou plateforme unifiée)</td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-bold text-white mt-12">Pièges à éviter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fine-tuner pour injecter des faits</strong> : le modèle « oublie » ou hallucine. Les faits vont en RAG.</li>
            <li><strong>RAG pour imposer un style</strong> : le retriever ne contrôle pas le ton. Le style va en system prompt ou fine-tuning.</li>
            <li><strong>Négliger l&apos;évaluation</strong> : sans golden set (50-200 cas), vous ne saurez pas si un changement améliore ou casse.</li>
            <li><strong>Sur-dimensionner le modèle FT</strong> : un 7B LoRA bien entraîné bat souvent un 70B mal entraîné pour une tâche étroite.</li>
            <li><strong>Ignorer le reranking</strong> : bi-encoder (retrieval) + cross-encoder (rerank) = qualité RAG x2 pour coût marginal.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Checklist de démarrage</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Listez vos cas d&apos;usage : faites le tri « connaissance » vs « comportement ».</li>
            <li>Pour la connaissance : prototype RAG en 1 jour (LlamaIndex/LangChain + vector DB).</li>
            <li>Pour le comportement : testez system prompt d&apos;abord. Si insuffisant → fine-tuning LoRA.</li>
            <li>Construisez le golden set commun (entrées + réponses idéales + citations attendues).</li>
            <li>Déployez hybride : modèle de base + LoRA comportement + RAG connaissance.</li>
            <li>Automatisez l&apos;éval nightly sur golden set. Alerte si régression.</li>
          </ol>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Plateforme unifiée</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI gère l&apos;hybride nativement : fine-tuning LoRA hébergé + index vectoriel
              géré + routing intelligent. Une API, zéro MLOps.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Essayer l'hybride →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/rag-vs-fine-tuning" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG vs Fine-tuning : choisir la bonne approche
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG avec Next.js et Groq : tutoriel complet
              </Link>
            </li>
            <li>
              <Link href="/blog/rag-prompts-retrieval-augmented" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Prompts RAG : retrieval-augmented generation qui marche
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}