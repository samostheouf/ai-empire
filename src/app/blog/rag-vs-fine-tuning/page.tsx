import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'RAG vs Fine-tuning : choisir la bonne approche 2026',
    description:
      'Quand utiliser RAG et quand fine-tuner un modèle ? Critères de décision honnêtes : volume de données, fréquence de mise à jour, expertise technique, coûts.',
    path: '/blog/rag-vs-fine-tuning',
    type: 'article',
    keywords: [
      'RAG vs fine-tuning',
      'RAG LLM',
      'fine-tuning modèle',
      'choix approche IA',
      'retrieval augmented generation',
    ],
    publishedTime: '2026-08-29',
    modifiedTime: '2026-08-29',
  })
}

const articleSchema = generateArticleSchema({
  title: 'RAG vs Fine-tuning : choisir la bonne approche 2026',
  description:
    'Quand utiliser RAG et quand fine-tuner un modèle ? Critères de décision honnêtes : volume de données, fréquence de mise à jour, expertise technique, coûts.',
  slug: 'rag-vs-fine-tuning',
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
})

const breadcrumbSchema = generateBreadcrumbSchema({
  items: [
    { name: 'Blog', path: '/blog' },
    { name: 'RAG vs Fine-tuning', path: '/blog/rag-vs-fine-tuning' },
  ],
})

export default function BlogRagVsFineTuning() {
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
              <Tag className="w-3 h-3" /> Comparatif
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Calendar className="w-4 h-4" /> 29 août 2026
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60">
              <Clock className="w-4 h-4" /> 11 min de lecture
            </span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            RAG vs Fine-tuning : choisir la bonne approche 2026
          </h1>
        </div>

        <div className="mt-12 space-y-8 leading-relaxed">
          <p className="text-lg">
            RAG (Retrieval-Augmented Generation) et fine-tuning répondent à des problèmes
            différents. L\'un récupère de l\'information à la volée, l\'autre modifie les
            poids du modèle. Voici comment décider sans suivre le marketing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Ce que fait chaque approche</h2>
          <p>
            <strong>RAG</strong> : le modèle reste figé. À chaque requête, on récupère
            des documents pertinents (via embeddings + base vectorielle) et on les injecte
            dans le prompt. La connaissance est externe, mise à jour en temps réel.
          </p>
          <p>
            <strong>Fine-tuning</strong> : on réentraîne (ou on adapte via LoRA/QLoRA)
            les poids du modèle sur vos données. La connaissance est internalisée.
            Mise à jour = nouvel entraînement.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Critère 1 : Fréquence de mise à jour des connaissances</h2>
          <p>
            Vos données changent tous les jours (prix, stock, docs techniques, régulation) ?
            RAG. Le fine-tuning nécessite un cycle d\'entraînement complet à chaque
            mise à jour majeure, ce qui est coûteux et lent. RAG met à jour l\'index
            vectoriel en quelques minutes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Critère 2 : Volume et nature des données</h2>
          <p>
            Des millions de documents hétérogènes (PDF, pages web, base de connaissances) ?
            RAG gère nativement l\'échelle via la recherche vectorielle. Fine-tuning
            nécessite un dataset nettoyé, formaté, dédupliqué — travail lourd en amont.
            Si vos données tiennent en quelques milliers d\'exemples structurés (paires
            question-réponse, style d\'écriture), le fine-tuning devient pertinent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Critère 3 : Expertise technique et maintenance</h2>
          <p>
            RAG demande : pipeline d\'ingestion, chunking, embeddings, base vectorielle,
            reranking, évaluation de la récupération. Compétences : data engineering, search.
            Fine-tuning demande : GPU, gestion de l\'entraînement, évaluation du drift,
            gestion des versions de modèle. Compétences : ML engineering, MLOps.
            RAG est généralement plus accessible pour une équipe produit standard.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Critère 4 : Coût total de possession</h2>
          <p>
            RAG : coût d\'inférence (tokens prompt + récupération) + infrastructure
            vectorielle. Prévisible, proportionnel à l\'usage. Fine-tuning : coût
            d\'entraînement (GPU heures) + coût d\'inférence du modèle adapté
            (souvent plus cher qu\'un modèle de base) + réentraînement périodique.
            Pour la plupart des SaaS, RAG est moins cher à faire tourner.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Critère 5 : Comportement vs Connaissance</h2>
          <p>
            Vous voulez que le modèle « parle comme votre marque », « suive votre style »,
            « refuse certains sujets » ? C\'est du comportement → fine-tuning (ou
            prompt engineering poussé). Vous voulez que le modèle « sache votre
            documentation », « cite vos contrats », « réponde sur votre base légale » ?
            C\'est de la connaissance → RAG.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">L\'approche hybride (souvent la bonne)</h2>
          <p>
            Beaucoup de cas réels combinent les deux : un modèle de base fine-tuné
            sur le style/ton/comportement souhaité, couplé à un RAG pour la connaissance
            factuelle à jour. Le fine-tuning gère le « comment répondre », le RAG
            gère le « quoi répondre ».
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Tester sans s\'engager</h3>
            <p className="text-indigo-200/70 mb-4">
              NeuraAPI permet de basculer entre RAG (via base vectorielle) et modèles
              fine-tunés via la même interface. Une clé, plusieurs approches.
            </p>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Essayer gratuitement →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/rag-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                RAG avec Next.js et Groq : tutoriel complet
              </Link>
            </li>
            <li>
              <Link href="/blog/automatisation-ia-saas" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Automatisation IA pour SaaS : guide pratique
              </Link>
            </li>
            <li>
              <Link href="/blog/couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Coûts réels des LLM en production
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}