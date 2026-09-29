import Link from 'next/link'
import { Clock, Calendar, Tag, ArrowRight } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Next.js 14 et IA : comment construire un SaaS rentable sans exploser son budget (2026)',
    description: 'Guide pratique pour architectural un SaaS IA avec Next.js 14, optimiser ses coûts LLM, structurer ses templates et monétiser sans surcoût infrastructure.',
    path: '/blog/nextjs-ia-saas-rentable-2026',
    type: 'article',
    keywords: ['Next.js 14 SaaS', 'SaaS IA coûts', 'architecture Next.js IA', 'LLM coûts production', 'SaaS monétisation IA', 'Next.js 2026 guide', 'template SaaS IA', 'optimisation coûts API IA'],
    publishedTime: '2026-09-29',
    modifiedTime: '2026-09-29',
  })
}

export default function BlogNextjsIaaSRentable() {
  const articleSchema = generateArticleSchema({
    title: 'Next.js 14 et IA : comment construire un SaaS rentable sans exploser son budget (2026)',
    description: 'Guide pratique pour architecturer un SaaS IA avec Next.js 14, optimiser ses coûts LLM, structurer ses templates et monétiser sans surcoût infrastructure.',
    slug: 'nextjs-ia-saas-rentable-2026',
    datePublished: '2026-09-29',
    dateModified: '2026-09-29',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Next.js 14 et IA : SaaS rentable', path: '/blog/nextjs-ia-saas-rentable-2026' },
    ],
  })

  return (
    <article className="min-h-screen bg-[#0f0a2e]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Next.js 14 et IA : SaaS rentable', href: '/blog/nextjs-ia-saas-rentable-2026' }]} />

        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Architecture & Budget
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 29 septembre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 14 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Next.js 14 et IA : comment construire un SaaS rentable sans exploser son budget
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/nextjs-ia-saas-rentable-2026`} title="Next.js 14 et IA : SaaS rentable 2026" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            La promesse est séduisante : lancer un SaaS IA en quelques semaines, monétiser une idée,
            scaler sans infrastructure lourde. La réalité, c&apos;est que beaucoup de fondateurs découvrent
            Six mois plus tard que leurs coûts d&apos;inférence ont doublé leur temps de développement —
            et que leur marge a disparu.
          </p>
          <p>
            Ce guide explique comment éviter cet écueil. Pas de théorie abstraite :
            des décisions architecturales concrètes avec Next.js 14, des stratégies de réduction des
            coûts LLM testées en production, et une méthode pour monétiser sans construire
            une usine à gaz.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi Next.js 14 pour un SaaS IA</h2>
          <p>
            Next.js 14 offre un compromis rare : performances côté client proches d&apos;une Single Page App,
            rendu serveur pour le SEO, et une route API native pour les appels à vos providers IA.
            Tout ça dans un framework que vous et vos collègues connaissez déjà.
          </p>
          <p>
            La pile typique d&apos;un SaaS IA en 2026 repose sur trois briques :
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">App Router + Server Components</strong> pour le contenu SEO et la logique métier serveur (clés API, secrets).</li>
            <li><strong className="text-white">Route API (/api/*)</strong> pour proxyer les appels IA, masquer vos clés et appliquer un rate limiting.</li>
            <li><strong className="text-white">Edge ou Node runtime</strong> selon la latence acceptable et la charge attendue.</li>
          </ul>
          <p>
            L&apos;erreur la plus fréquente est de mélanger ces rôles : exposer une clé API dans un client component,
            ou appeler l&apos;API IA directement depuis le navigateur. Next.js 14 vous permet de faire les deux
            correctement, mais le framework ne l&apos;impose pas — c&apos;est à vous de tracer la frontière.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Une architecture de référence qui tient la charge</h2>
          <p>
            Voici l&apos;architecture que nous recommandons pour un SaaS IA dont la charge est prévisible
            et dont les coûts doivent rester maîtrisés.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// src/app/api/generate/route.ts
import { NextRequest } from 'next/server'
import { createGroq } from 'groq-sdk'

export async function POST(req: NextRequest) {
  const { prompt, model, stream } = await req.json()

  const groq = createGroq({ apiKey: process.env.GROQ_API_KEY! })
  const streamResp = await groq.chat.completions.create({
    model: model ?? 'meta/llama-3.3-70b-versatile',
    messages: [{ role: 'user', content: prompt }],
    stream: !!stream,
  })

  if (stream) {
    return new Response(streamResp.toReadableStream(), {
      headers: { 'Content-Type': 'text/event-stream' },
    })
  }

  const text = streamResp.choices[0]?.message?.content ?? ''
  return Response.json({ text })
}`}</code>
            </pre>
          </div>

          <p>
            Ce route handler fait trois choses utiles d&apos;un coup : il garde votre clé API hors du bundle client,
            il applique un modèle par défaut si le client n&apos;en précise pas, et il supporte à la fois le streaming
            et la réponse complète selon le besoin de l&apos;interface.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Contrôler ses coûts LLM avant qu&apos;ils ne vous contrôlent</h2>
          <p>
            Le coût d&apos;une inférence se décompose en trois leviers que vous contrôlez directement :
            le modèle choisi, la quantité de tokens envoyés, et la fréquence des appels.
            Ignorer l&apos;un de ces trois leviers, c&apos;est s&apos;exposer à une surprise sur la facture Stripe.
          </p>

          <h3 className="text-xl font-semibold text-indigo-300 mt-8">1. Choisir le modèle juste</h3>
          <p>
            Llama 3.3 70B sur Groq coûte environ 0,59 € / million de tokens en entrée et 0,79 € / million en sortie.
            GPT-4o derrière OpenAI facture près de 5 € / million en entrée pour une qualité similaire sur
            des tâches bien cadrées. Pour un SaaS qui génère du contenu, des résumés ou des réponses FAQ,
            la différence est un ordre de grandeur — sans que l&apos;utilisateur final le remarque systématiquement.
          </p>
          <p>
            La règle pratique : commencez avec le modèle le moins cher qui fait le job, montez en qualité
            seulement si les metrics le justifient (taux d&apos;abandon, temps de réponse, score de satisfaction).
          </p>

          <h3 className="text-xl font-semibold text-indigo-300 mt-8">2. Limiter le contexte</h3>
          <p>
            Un prompt système de 3 000 tokens envoyé à chaque appel coûte cher à l&apos;échelle.
            Extrayez ce qui est vraiment nécessaire : les instructions fixes peuvent résider dans le prompt système,
            mais les données utilisateur, l&apos;historique et les documents à synthétiser doivent être
            tranchés avant d&apos;être injectés.
          </p>

          <div className="rounded-xl bg-black/40 border border-white/10 p-6 overflow-x-auto">
            <pre className="text-sm text-indigo-300/80">
              <code>{`// Limitation de l'historique côté serveur
const MAX_HISTORY = 10
const history = messages.slice(-MAX_HISTORY)

// Troncature des documents trop longs
const truncatedDoc = doc.length > 4000
  ? doc.slice(0, 4000) + '\n… (document tronqué)'
  : doc`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-indigo-300 mt-8">3. Mettre en cache sans mentir</h3>
          <p>
            Certaines requêtes sont identiques d&apos;un utilisateur à l&apos;autre, ou répétées pour le même utilisateur
            sur une courte fenêtre. Un cache HTTP ou applicatif sur ces requêtes évite de payer une inférence
            pour une réponse déjà calculée.
          </p>
          <p>
            Attention : ne cachez pas les réponses dynamiques sans TTL court, et ne cachez jamais
            une réponse personnalisée (historique utilisateur, données privées). Un cache inapproprié
            donne l&apos;impression d&apos;un SaaS lent ou incorrect, et coûte plus cher que l&apos;inférence qu&apos;il était censé économiser.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">De la théorie à la vente : structurer la monétisation</h2>
          <p>
            Une architecture propre ne suffit pas : vous devez transformer cette infrastructure en produit
            que des gens payent. Trois leviers de monétisation fonctionnent particulièrement bien
            pour les SaaS IA en 2026.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Modèle 1 — Crédits au forfait</h3>
            <p className="text-indigo-200/70 mb-4">
              L&apos;utilisateur achète un paquet de crédits (ex. 10 000 tokens ou 50 requêtes/mois).
              Simple à comprendre, facile à limiter, et compatible avec un abonnement récurrent Stripe.
              La transparence sur la consommation restante est ce qui convertit :
              un tableau de bord qui affiche les crédits restants transforme l&apos;incertitude en confiance.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les offres de NeuraAPI →
            </Link>
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Modèle 2 — Templates prêts à l&apos;emploi</h3>
            <p className="text-indigo-200/70 mb-4">
              Beaucoup de visiteurs ne veulent pas architecturer eux-mêmes le plumbing IA :
              ils veulent un chatbot, un générateur de contenu, ou un outil de résumé qui fonctionne
              dès l&apos;inscription. Des templates pré-configurés (prompt système inclus, limite de tokens,
              interface adaptée) sont un produit en soi.
            </p>
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explorer les templates Next.js →
            </Link>
          </div>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Modèle 3 — Agents autonomes par tâche</h3>
            <p className="text-indigo-200/70 mb-4">
              Un agent est une séquence orchestrée : récupérer un contexte, appeler un LLM, extraire une action,
              exécuter. Vendre un agent par tâche métier (ex. support client, rédaction SEO, extraction de données)
              est plus facile à vendre qu&apos;une API brute, parce que le résultat est concret.
            </p>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les agents IA →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Checklist de démarrage : 10 points avant le premier déploiement</h2>
          <p>
            Avant de lancer la première version publique, passez cette liste.
            Chaque point évite une catégorie de problèmes qui, une fois en production,
            coûtent 10 fois plus cher à corriger.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Clés API côté serveur uniquement</strong> — aucune clé IA dans un client component.</li>
            <li><strong className="text-white">Fallback explicite</strong> — si la clé est absente ou le provider en panne, affichez un état clair, pas une page blanche.</li>
            <li><strong className="text-white">Rate limiting</strong> — un abus ponctuel peut générer une facture surprise ; limitez par IP ou par utilisateur.</li>
            <li><strong className="text-white">Logs structurés</strong> — timestamp, modèle, nombre de tokens, coût estimé par requête. Sans ces logs, vous optimisez aveugle.</li>
            <li><strong className="text-white">Maillage interne</strong> — chaque article de blog et chaque page produit doit pointer vers un CTA réel (pricing, templates, agents).</li>
            <li><strong className="text-white">JSON-LD Article</strong> — un schéma d&apos;article structuré améliore l&apos;affichage en recherche ; utilisez <code>generateArticleSchema</code>.</li>
            <li><strong className="text-white">Open Graph personnalisé</strong> — chaque publication doit générer sa propre carte via <code>/api/og</code>, pas une image générique.</li>
            <li><strong className="text-white">Traduction minimale</strong> — si le produit cible un public francophone, la page d&apos;accueil et les pages produits doivent être en français au minimum.</li>
            <li><strong className="text-white">Déploiement Vercel</strong> — un projet Next.js 14 se déploie en deux minutes avec <code>npx vercel --prod</code> ; vérifiez les routes critiques après.</li>
            <li><strong className="text-white">Audit de contenu</strong> — aucune statistique inventée (&#xAB; 40 000 clients &#xBB;, &#xAB; 4,8/5 &#xBB;) ne doit apparaître sur le site ; des placeholders honnêtes remplacent ces faux chiffres.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12">Ce qui coûte le plus cher (et comment l&apos;éviter)</h2>
          <p>
            Les factures surprises viennent presque toujours des mêmes causes.
            Les identifier tôt sauve des mois de rattrapage.
          </p>

          <div className="rounded-xl bg-red-900/20 border border-red-700/30 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Piège 1 : appels répétés sans cache</h3>
            <p className="text-red-200/70 text-sm">
              Dix utilisateurs qui demandent la même réponse en même temps génèrent dix inférences payantes.
              Une minute de réflexion sur ce qui doit être unique vs partagé évite ce problème.
            </p>
          </div>

          <div className="rounded-xl bg-red-900/20 border border-red-700/30 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Piège 2 : contexte telescope</h3>
            <p className="text-red-200/70 text-sm">
              Rapporter tout l&apos;historique de conversation à chaque tour fait exploser la consommation.
              Limitez à 10 messages et tronquez les réponses longues avant de les renvoyer au modèle.
            </p>
          </div>

          <div className="rounded-xl bg-red-900/20 border border-red-700/30 p-6 mb-8">
            <h3 className="text-lg font-semibold text-red-300 mb-2">Piège 3 : modèle sur-dimensionné</h3>
            <p className="text-red-200/70 text-sm">
              Un modèle 70B pour de la classification ou des FAQ courtes coûte 5 à 10 fois plus cher
              qu&apos;un modèle 8B assez bon pour la tâche. Le juste-à-temps dans le choix du modèle
              est l&apos;économie la plus fiable.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Les outils qui rendent ça possible</h2>
          <p>
            Vous ne devez pas tout construire vous-même. Voici la pile minimale qui couvre 90 % des besoins
            d&apos;un SaaS IA en 2026.
          </p>
          <ul className="list-disc list-inside space-y-3">
            <li><strong className="text-white">Next.js 14 + TypeScript</strong> — App Router, route handlers, Server Components. Tout ce qu&apos;on a évoqué ci-dessus tient dans cette stack.</li>
            <li><strong className="text-white">Groq SDK (ou OpenAI-compatible)</strong> — une API compatible OpenAI vous donne la flexibilité de changer de provider sans réécrire votre code.</li>
            <li><strong className="text-white">Stripe Checkout</strong> — pour la monétisation, le moins d&apos;écarts possible entre ce que le client voit et ce qu&apos;il paie.</li>
            <li><strong className="text-white">Vercel</strong> — déploiement, CDN, et edge sans gérer serveur. L&apos;alias par défaut suffit pour démarrer.</li>
            <li><strong className="text-white">Templates pré-configurés</strong> — au lieu de vendre une API, vendez un produit fini avec prompt système, limite, interface. C&apos;est ce que proposent les templates de NeuraAPI.</li>
          </ul>
          <p>
            Ces cinq briques, bien assemblées, suffisent à lancer un SaaS IA monétisé sans
            infrastructure lourde ni surprise à la facture.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Un SaaS IA rentable ne dépend pas d&apos;une technologie miracle. Il dépend de décisions
            architecturales claires : garder les clés serveur, choisir le modèle juste,
            limiter le contexte, mettre en cache intelligemment, et vendre des produits finis
            plutôt que de la brute.
          </p>
          <p>
            Next.js 14 est un bon terrain d&apos;attaque pour ça, parce qu&apos;il regroupe
            SEO, performances et route API dans une stack que vous connaissez déjà.
            Le reste — monétisation, templates, agents — s&apos;ajuste autour de cette base.
          </p>
          <p>
            Pour aller plus vite sans réécrire la plumbing, les templates Next.js de
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">NeuraAPI</Link>
            incluent déjà un chatbot IA, une génération de contenu et un agent de support
            prêts à être personnalisés et monétisés.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/chatbot-ia-nextjs-groq" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Créer un chatbot IA avec Next.js et Groq : le guide complet
              </Link>
            </li>
            <li>
              <Link href="/blog/monetizer-api-ia-nextjs-stripe" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Monétiser une API IA avec Next.js et Stripe
              </Link>
            </li>
            <li>
              <Link href="/blog/comparaison-providers-ia-gratuits" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comparaison des providers IA gratuits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
