/**
 * JSON-LD helpers pour les pages produits.
 */

// ItemList pour la page catalogue
export interface ItemListSchema {
  '@context': string
  '@type': 'ItemList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    url: string
    name: string
    description?: string
    image?: string
    offers?: {
      '@type': 'Offer'
      price: number
      priceCurrency: string
      availability: string
    }
  }>
}

// ---------------------------------------------------------------------
// FAQs par produit (données statiques, à enrichir via IA en Phase 2)
// ---------------------------------------------------------------------

export const FrenchProductFAQs: Record<string, Array<{ question: string; answer: string }>> = {
  default: [
    {
      question: 'Ce template est-il prêt pour la production ?',
      answer: 'Oui. Chaque template est testé en environnement de production, avec authentification, Stripe et design responsive intégrés.',
    },
    {
      question: 'Comment recevoir le template après achat ?',
      answer: 'Un email de confirmation avec le lien de téléchargement est envoyé immédiatement après le paiement Stripe. Votre template est disponible en quelques secondes.',
    },
    {
      question: 'Les mises à jour sont-elles gratuites ?',
      answer: 'Oui. Toutes les mises à jour du template sont incluses dans l\'achat initial, sans frais supplémentaires.',
    },
    {
      question: 'Quel est le délai de support ?',
      answer: 'Le support par email est disponible pour toutes les questions techniques. Les réponses sont généralement envoyées sous 24 heures.',
    },
    {
      question: 'Puis-je annuler et être remboursé ?',
      answer: 'Oui. La garantie satisfait ou remboursé couvre 30 jours après l\'achat. Contactez-nous pour initier le remboursement.',
    },
  ],

  'neura-saas-kit': [
    {
      question: 'Qu\'est-ce que le NeuraSaaS Kit inclut ?',
      answer: 'Le NeuraSaaS Kit est un template Next.js complet avec authentification, dashboard admin, intégration Stripe, et 3 endpoints IA prêts à l\'emploi.',
    },
    {
      question: 'Le SDK TypeScript est-il inclus ?',
      answer: 'Oui, le SDK complet est fourni avec types, autocomplete et documentation intégrée pour tous les endpoints IA.',
    },
    {
      question: 'Puis-je utiliser le template pour plusieurs projets ?',
      answer: 'Oui. Une fois acheté, vous pouvez l\'utiliser sur tous vos projets personnels et commerciaux.',
    },
  ],
}

export function getFAQsForProduct(slug: string): Array<{ question: string; answer: string }> {
  return FrenchProductFAQs[slug] || FrenchProductFAQs['default']
}
