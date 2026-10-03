const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire.vercel.app'

/** Offres IA Premium */
const OFFRES = [
  {
    id: 'contenu-premium',
    name: 'IA Premium — Contenu Premium',
    description:
      'Accès complet au contenu premium IA Premium : prompts avancés, framework stratégique, templates businesses. Téléchargement immédiat.',
    price: 49,
    badge: 'Essentiel',
    badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
  {
    id: 'pack5',
    name: 'IA Premium — Pack 5',
    description:
      '5 packs thématiques complets : e-commerce, SaaS, content marketing, réseaux sociaux, copywriting. +200 prompts exclusifs.',
    price: 79,
    badge: 'Recommandé',
    badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
  {
    id: 'coffret',
    name: 'IA Premium — Coffret Exclusif',
    description:
      'Tout-en-un : tous les packs + 2 séances mentoring 1:1 + communauté privée + mises à jour à vie. Édition limitée 50 places.',
    price: 149,
    badge: 'Le plus complet',
    badgeColor: 'bg-amber-500/20 text-amber-400 border border-amber-500/30',
  },
] as const

type OffreId = (typeof OFFRES)[number]['id']

/** JSON-LD Product — un par offre, à appeler dans la section pricing */
export function JsonLdProduit({ id }: { id: string }) {
  const offre = OFFRES.find((o) => o.id === id)
  if (!offre) return null

  const product = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/ia-premium#product-${offre.id}`,
    name: offre.name,
    description: offre.description,
    image: `${SITE_URL}/og.png`,
    brand: { '@type': 'Brand', name: 'IA Premium' },
    offers: {
      '@type': 'Offer',
      '@id': `${SITE_URL}/ia-premium#offer-${offre.id}`,
      url: `${SITE_URL}/ia-premium`,
      priceCurrency: 'EUR',
      price: offre.price.toString(),
      priceValidUntil: new Date(Date.now() + 365 * 86400000).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      seller: { '@type': 'Organization', name: 'IA Premium', url: SITE_URL },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
    category: 'Software / Digital Product',
    sku: offre.id,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
    />
  )
}

/** JSON-LD Site — Organization + WebSite */
export function JsonLdSite() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'IA Premium',
        url: SITE_URL,
        logo: `${SITE_URL}/og.png`,
        email: 'samilaboulette21@gmail.com',
        priceRange: '€49–€149',
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'IA Premium — Prompts IA avancés pour entrepreneurs',
        inLanguage: 'fr',
        publisher: { '@id': `${SITE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/ia-premium?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

/** FAQPage JSON-LD */
export function FaqJsonLd() {
  const FAQ_ITEMS = [
    {
      q: "Qu'est-ce que IA Premium ?",
      a: "IA Premium est une collection exclusive de prompts IA avancés, frameworks stratégiques et templates businesses conçus pour les entrepreneurs qui veulent exploiter l'intelligence artificielle au plus haut niveau.",
    },
    {
      q: "Quelle est la différence entre les trois offres ?",
      a: "Contenu Premium (49€) donne accès au contenu de base. Pack 5 (79€) ajoute 5 packs thématiques avec +200 prompts exclusifs. Le Coffret Exclusif (149€) est le tout-en-un avec mentoring 1:1, communauté privée et mises à jour à vie.",
    },
    {
      q: 'Comment se passe le paiement ?',
      a: 'Le paiement est traité par Stripe. Carte bancaire, Apple Pay et Google Pay acceptés. Paiement unique, aucun abonnement, aucun frais caché.',
    },
    {
      q: 'Quand est-ce que je reçois mon contenu ?',
      a: "Immédiatement. Dès que le paiement est confirmé, tu reçois ton accès par email et sur la page de confirmation. Tu peux commencer à utiliser les prompts dans les 5 minutes.",
    },
    {
      q: "Et si le contenu ne me convient pas ?",
      a: "Tu as 14 jours pour changer d'avis. Un simple email suffit : remboursement intégral, sans justification. Tu ne risques rien.",
    },
    {
      q: "Les contenus sont-ils vraiment avancés ?",
      a: "Oui. Conçus par des experts IA avec des années d'expérience en stratégie business. Chaque prompt est testé et optimisé pour des résultats professionnels.",
    },
    {
      q: 'Est-ce que je recevrai les futures mises à jour ?',
      a: 'Oui, les mises à jour sont à vie pour toutes les offres. Chaque enrichissement est envoyé gratuitement par email.',
    },
    {
      q: 'Le mentoring est-il inclus dans toutes les offres ?',
      a: 'Le mentoring 1:1 (2 séances) est exclusif au Coffret Exclusif (149€). Places limitées à 50 pour 2026.',
    },
  ] as const

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export { OFFRES }
