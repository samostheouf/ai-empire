import Link from 'next/link'
import { Clock, Calendar, Tag } from 'lucide-react'
import { generateMetadata as genMeta } from '@/lib/seo'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import ShareButtons from '@/components/ShareButtons'
import Breadcrumb from '@/components/Breadcrumb'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app'

export async function generateMetadata() {
  return genMeta({
    title: 'Rate Limiting API IA : protégez vos coûts et vos quotas dans Next.js (2026)',
    description: 'Guide complet du rate limiting pour APIs IA dans Next.js : token bucket, files d\u2019attente, backoff exponentiel, cache sémantique et protection anti-surfacturation.',
    path: '/blog/rate-limiting-api-ia-nextjs',
    type: 'article',
    keywords: ['rate limiting API', 'protéger quota IA', 'Next.js rate limit API IA', 'contrôle coûts LLM', 'backoff exponentiel Next.js', 'token bucket SaaS'],
    publishedTime: '2026-10-19',
    modifiedTime: '2026-10-19',
  })
}

export default function BlogRateLimitingApiIa() {
  const articleSchema = generateArticleSchema({
    title: 'Rate Limiting API IA : protégez vos coûts et vos quotas dans Next.js (2026)',
    description: 'Guide complet du rate limiting pour APIs IA dans Next.js : token bucket, files d\u2019attente, backoff exponentiel, cache sémantique et protection anti-surfacturation.',
    slug: 'rate-limiting-api-ia-nextjs',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
  })

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Blog', path: '/blog' },
      { name: 'Rate Limiting API IA', path: '/blog/rate-limiting-api-ia-nextjs' },
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
        <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: 'Rate Limiting API IA', href: '/blog/rate-limiting-api-ia-nextjs' }]} />
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600/20 px-3 py-1 text-xs font-medium text-indigo-300 border border-indigo-600/30">
              <Tag className="w-3 h-3" /> Guide
            </span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Calendar className="w-4 h-4" /> 19 octobre 2026</span>
            <span className="flex items-center gap-1 text-sm text-indigo-400/60"><Clock className="w-4 h-4" /> 13 min de lecture</span>
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight sm:text-5xl">
            Rate Limiting API IA : protégez vos coûts et vos quotas dans Next.js
          </h1>

          <div className="mt-6">
            <ShareButtons url={`${baseUrl}/blog/rate-limiting-api-ia-nextjs`} title="Rate Limiting API IA Next.js" />
          </div>
        </div>

        <div className="mt-12 space-y-8 text-indigo-200/80 leading-relaxed">
          <p className="text-lg">
            Chaque appel à un modèle de langage a un coût : des tokens en entrée, des tokens en sortie,
            et parfois des frais de requête fixes. Sans garde-fou, un utilisateur malveillant ou un bug
            côté client peut vider votre quota en quelques minutes et gonfler votre facture du mois.
            Le rate limiting n&apos;est pas une option de confort : c&apos;est la barrière qui sépare un
            SaaS rentable d&apos;une surprise budgétaire.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Pourquoi l&apos;IA change la donne sur le rate limiting</h2>
          <p>
            Les APIs classiques comptent des requêtes. Les APIs IA comptent des tokens — et la
            consommation varie d&apos;un facteur 100 à 1 000 selon la requête. Une recherche documentaire
            avec de gros documents en contexte peut coûter cent fois plus cher qu&apos;une simple
            question de FAQ. Un plafond de requêtes minute ne vous protège donc pas vraiment : deux
            utilisateurs peuvent déclencher des factures radicalement différentes sur la même fenêtre
            de temps.
          </p>
          <p>
            Les providers imposent aussi leurs propres limites : requêtes par minute (RPM), tokens par
            minute (TPM), et parfois des plafonds de burst. Dépasser ces limites ne renvoie pas une
            simple erreur métier, mais un <code className="text-indigo-300">429 Too Many Requests</code> —
            avec une temporalité de retry imposée. Si vous ne gérez pas cette réponse en amont, ce sont
            vos utilisateurs finaux qui subissent les temps morts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Les trois couches de protection à implémenter</h2>
          <h3 className="text-xl font-semibold text-white mt-8">1. Le quota utilisateur : votre première ligne de défense</h3>
          <p>
            La règle la plus simple et la plus efficace : attribuer à chaque utilisateur (ou à chaque
            clé API) une consommation maximale sur une période donnée. Un utilisateur gratuit n&apos;a
            pas le droit de consommer le même volume qu&apos;un abonné premium. Ce quota se mesure
            idéalement en tokens estimés, pas en nombre de requêtes — c&apos;est la seule unité qui
            reflète votre coût réel.
          </p>
          <p>
            En pratique, stockez un compteur par utilisateur dans votre base de données, incrémenté
            après chaque appel au provider. Avant de déclencher la requête, comparez le compteur au
            plafond : au-delà, refusez immédiatement avec une réponse claire. Cette vérification se
            fait côté serveur, jamais côté client — un contournement côté navigateur ne doit jamais
            être possible.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8">2. Le token bucket : lisser le traffic sans le bloquer</h3>
          <p>
            Le quota répond à la question « combien au total ». Le token bucket répond à la question
            « à quelle vitesse ». L&apos;idée : un seau contient des jetons à raison de N jetons par
            seconde, jusqu&apos;à une capacité maximale (le burst). Chaque requête consomme un jeton.
            Seau vide : la requête est refusée ou mise en attente.
          </p>
          <p>
            Cette approche tolère les pics légers (un utilisateur qui envoie trois messages à la
            suite dans une conversation) tout en bloquant soutenu un débit qui dépasse votre budget.
            Pour un SaaS, une règle de départ raisonnable : un burst de quelques requêtes pour
            l&apos;expérience conversationnelle, puis un débit de croisière aligné sur votre marge.
          </p>

          <h3 className="text-xl font-semibold text-white mt-8">3. Le backoff exponentiel : absorber les refus du provider</h3>
          <p>
            Quand le provider renvoie un 429, la pire réaction est de réessayer immédiatement. La
            bonne réaction est un backoff exponentiel avec jitter : 1 seconde, puis 2, puis 4, puis 8 —
            avec une composante aléatoire pour éviter que tous vos utilisateurs renvoyent leurs requêtes
            au même instant quand la fenêtre se réouvre.
          </p>
          <p>
            Implémentez ce mécanisme dans une fonction d&apos;appel centralisée, pas dans chaque composant.
            Un seul point de passage signifie une seule politique, facile à auditer et à faire évoluer.
            C&apos;est aussi là que vous loguerez les métriques : nombre de 429 reçus, latence moyenne,
            taux de refus par utilisateur. Sans ces chiffres, impossible de savoir si votre rate limiting
            est trop lâche ou trop strict.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Implémentation dans Next.js : où placer le curseur</h2>
          <p>
            Next.js offre trois emplacements possibles pour vos garde-fous, et le choix dépend de ce
            que vous voulez protéger.
          </p>
          <p>
            Le <strong className="text-white">middleware</strong> est idéal pour les quotas globaux et
            la détection d&apos;abus avant même que la requête n&apos;atteigne votre logique métier.
            Il s&apos;exécute sur leEdge Runtime, proche de l&apos;utilisateur, avec une latence minimale.
            Mais attention : l&apos;Edge Runtime n&apos;a pas accès direct à votre base de données —
            vous devrez passer par une table de compteurs rapide (Redis, Upstash) ou par une API
            interne dédiée.
          </p>
          <p>
            Les <strong className="text-white">Route Handlers</strong> (routes API côté serveur)
            sont le bon endroit pour la logique fine : lecture du quota utilisateur, appel au provider,
            gestion du 429 avec backoff. Tout y est possible, y compris l&apos;accès à la base de
            données. Le coût est une latence légèrement supérieure à celle du middleware.
          </p>
          <p>
            Enfin, les <strong className="text-white">Server Components</strong> peuvent servir de
            dernière ligne pour les fonctionnalités IA rendues côté serveur (résumé automatique,
            enrichissement de contenu). Elles héritent du contexte de la requête et peuvent lire les
            compteurs avant d&apos;appeler le provider.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Le cache : le rate limiting le moins cher de tous</h2>
          <p>
            La meilleure façon de respecter un quota est de ne pas consommer de token. Deux requêtes
            identiques — même utilisateur, même prompt, mêmes paramètres — doivent produire un seul
            appel au provider. Un cache clé-valeur (Redis, ou le cache intégré de Next.js pour les
            requêtes idempotentes) stocke la réponse quelques minutes et la sert en cas de doublon.
          </p>
          <p>
            Poussez l&apos;idée plus loin avec le <strong className="text-white">cache sémantique</strong> :
            des requêtes différentes mais proches dans leur intention peuvent partager une même réponse
            approximative. Cette approche exige un seuil de similarité bien calibré — trop strict, le
            cache ne sert à rien ; trop lâche, vous servez des réponses erronées. Pour un SaaS, le
            cache exact sur les intents fréquentes (FAQ, support client) donne déjà des résultats
            spectaculaires : une part significative des appels IA devient gratuite.
          </p>
          <p>
            Le cache a aussi un effet bénéfique secondaire : il absorbe les pics de trafic. Même si
            votre rate limite est dépassé, les utilisateurs qui frappent sur des questions déjà
            posées obtiennent une réponse instantanée et correcte.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">L&apos;expérience utilisateur ne doit pas payer pour vos erreurs</h2>
          <p>
            Refuser une requête sans explication est une expérience utilisateur défaillante. Un bon
            rate limiting communique : un message clair (« vous avez atteint votre limite quotidienne »),
            un délai estimé avant la réinitialisation, et si possible une alternative (une fonctionnalité
            dégradée qui ne consomme pas de tokens).
          </p>
          <p>
            Les headers HTTP existent pour cela. Renvoyez un <code className="text-indigo-300">Retry-After</code> quand
          le provider l&apos;impose, et des headers personnalisés (<code className="text-indigo-300">X-RateLimit-Remaining</code>)
          pour laisser le client adapter son comportement de lui-même. Vos propres clients (application
          mobile, intégrations) vous remercieront de ne pas les laisser deviner.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12">Mesurer avant de dimensionner</h2>
          <p>
            Les chiffres qui comptent ne sont pas ceux du provider, mais les vôtres : consommation
            moyenne par utilisateur actif, taux de refus (idéalement inférieur à quelques pourcents),
          ratio de cache, et corrélation entre un pic de trafic et une augmentation de facture.
          Un tableau de bord minimaliste sur ces quatre indicateurs vous dira exactement quand resserrer
          ou assouplir vos limites.
          </p>
          <p>
          Sans ces métriques, le rate limiting devient une croyance : « on a mis 50 requêtes par
          minute, ça devrait aller ». Avec, c&apos;est une décision d&apos;affaires révisée chaque
          mois, alignée sur votre pricing et vos coûts réels.
          </p>

          <div className="rounded-2xl bg-indigo-900/30 border border-indigo-500/20 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Prêt à sécuriser votre SaaS IA ?</h3>
            <p className="text-indigo-200/70 mb-4">
              Nos templates Next.js intègrent rate limiting, backoff exponentiel et cache dès la première version.{' '}
              <Link href="/templates" className="font-semibold text-indigo-400 hover:text-indigo-300 underline">Découvrir les templates</Link>
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Voir les prix →
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12">Conclusion</h2>
          <p>
            Le rate limiting d&apos;une API IA ne se résume pas à un compteur de requêtes. C&apos;est
            un système à trois couches — quota utilisateur, token bucket, backoff exponentiel —
            complété par un cache agressif et une communication claire vers l&apos;utilisateur. Dans
            Next.js, chaque couche trouve sa place : le middleware pour le global, les Route Handlers
            pour le fin, le cache pour l&apos;efficacité.
          </p>
          <p>
            L&apos;enjeu n&apos;est pas technique, il est économique : sans ces garde-fous, votre facture
            de tokens est à la mercy du premier pic de trafic. Avec, vous transformez un coût imprévisible
            en une ligne budgétaire maîtrisée — et votre scaling devient une question de pricing, pas de
            survie.{' '}
            <Link href="/templates" className="text-indigo-400 hover:text-indigo-300 underline">Nos templates SaaS embarquent ces patterns prêts à l&apos;emploi.</Link>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">Articles liés</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/blog/couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Comprendre et maîtriser les coûts LLM en production
              </Link>
            </li>
            <li>
              <Link href="/blog/optimisation-couts-llm-production" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Optimisation des coûts LLM en production : le guide complet
              </Link>
            </li>
            <li>
              <Link href="/blog/cache-semantique-llm-nextjs-redis-2026" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Cache sémantique LLM avec Next.js et Redis (2026)
              </Link>
            </li>
            <li>
              <Link href="/blog/jobs-async-ia-nextjs-file-attente-webhooks" className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors group">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
                Jobs asynchrones IA dans Next.js : files d&apos;attente et webhooks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  )
}
