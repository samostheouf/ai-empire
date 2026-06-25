'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqs = [
  {
    category: 'Produit',
    items: [
      {
        q: 'Qu\'est-ce que NeuraAPI ?',
        a: 'NeuraAPI est une plateforme qui rend l\'IA accessible à tous les développeurs. Elle fournit des APIs IA (génération de texte, code, SEO) et des templates Next.js premium.',
      },
      {
        q: 'Comment fonctionne l\'API IA ?',
        a: 'NeuraAPI utilise Groq (Llama 3.3), Gemini et OpenAI en backend. Vous envoyez un prompt via POST /api/ai/generate et recevez le contenu généré en moins de 200ms.',
      },
      {
        q: 'Quelles APIs sont disponibles ?',
        a: '3 endpoints principaux : POST /api/ai/generate (texte), POST /api/ai/code (code), POST /api/ai/seo (contenu SEO). Chaque requête utilise des crédits selon votre plan.',
      },
      {
        q: 'Le chatbot utilise-t-il une vraie IA ?',
        a: 'Oui, le chatbot appelle un vrai LLM via notre endpoint /api/ai/chat. En mode démo (sans clé API), il utilise une base de connaissances statique.',
      },
    ],
  },
  {
    category: 'Tarification',
    items: [
      {
        q: 'Quels sont les tarifs ?',
        a: 'Starter : gratuit (100 crédits/mois). Pro : 19€/mois en offre de lancement (10 000 crédits). Enterprise : 99€/mois (crédits illimités).',
      },
      {
        q: 'Qu\'est-ce qu\'un crédit ?',
        a: 'Un crédit correspond à une requête API. La génération de texte consomme 1 crédit par token généré. Le code et le SEO consomment plus selon la complexité.',
      },
      {
        q: 'Puis-je annuler à tout moment ?',
        a: 'Oui, aucune engagement. Vous pouvez annuler votre abonnement à tout moment depuis votre dashboard.',
      },
      {
        q: 'Acceptez-vous les paiements par carte bancaire ?',
        a: 'Oui, nous utilisons Stripe pour traiter tous les paiements de manière sécurisée. Visa, Mastercard, Amex, PayPal et Apple Pay sont acceptés.',
      },
    ],
  },
  {
    category: 'Technique',
    items: [
      {
        q: 'Quel est le temps de réponse des APIs ?',
        a: 'Moins de 200ms en moyenne via Groq. Les APIs Gemini et OpenAI sont légèrement plus lentes mais offrent des modèles différents.',
      },
      {
        q: 'Y a-t-il des limites de débit ?',
        a: 'Starter : 10 requêtes/minute. Pro : 100 requêtes/minute. Enterprise : illimité.',
      },
      {
        q: 'Quels langages sont supportés pour le code ?',
        a: 'TypeScript, JavaScript, Python, React, Next.js, et tout langage via l\'API REST. Le SDK officiel supporte TypeScript et Python.',
      },
      {
        q: 'Le site est-il disponible en anglais ?',
        a: 'Oui, NeuraAPI est disponible en 10 langues : français, anglais, espagnol, allemand, italien, portugais, japonais, chinois, coréen et arabe.',
      },
    ],
  },
  {
    category: 'Sécurité & Légal',
    items: [
      {
        q: 'Mes données sont-elles sécurisées ?',
        a: 'Oui. Nous utilisons le chiffrement TLS, CSP headers, et nous ne stockons pas les prompts envoyés aux APIs IA.',
      },
      {
        q: 'Conformité RGPD ?',
        a: 'Oui, nous sommes conformes au RGPD. Vous pouvez demander la suppression de vos données à tout moment via notre page de contact.',
      },
      {
        q: 'Où sont hébergés les serveurs ?',
        a: 'Le frontend est sur Vercel (edge network mondial). Les APIs IA passent par Groq, Gemini et OpenAI selon le provider configuré.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const faqSchema = faqs.flatMap(cat => cat.items.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })))

  const filtered = faqs.map(cat => ({
    ...cat,
    items: cat.items.filter(
      item =>
        item.q.toLowerCase().includes(search.toLowerCase()) ||
        item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(cat => cat.items.length > 0)

  return (
    <div className="bg-indigo-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqSchema }),
        }}
      />
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Questions fréquentes</h1>
          <p className="mt-4 text-lg text-indigo-300">
            Trouvez rapidement les réponses à vos questions sur NeuraAPI.
          </p>
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Rechercher..."
              className="w-full rounded-xl border border-indigo-800/50 bg-indigo-900/30 pl-11 pr-4 py-3 text-white placeholder:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {filtered.map(cat => (
            <div key={cat.category}>
              <h2 className="text-xl font-bold text-white mb-6">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((item, i) => {
                  const key = `${cat.category}-${i}`
                  const isOpen = openIdx === key
                  return (
                    <div key={key} className="rounded-xl border border-indigo-800/50 bg-indigo-900/30">
                      <button
                        onClick={() => setOpenIdx(isOpen ? null : key)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-medium text-white pr-4">{item.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-indigo-300 text-sm leading-relaxed">
                          {item.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
