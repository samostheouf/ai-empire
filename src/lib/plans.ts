/**
 * SOURCE UNIQUE DE VERITE des tarifs NeuraAPI.
 *
 * Pourquoi ce module existe : le site affichait 19 EUR sur /pricing alors que le
 * tunnel Stripe debitait 49 EUR sur la meme page (art. L. 121-2 C. conso. —
 * publicite trompeuse sur le prix). Le montant affiche et le montant facture
 * doivent provenir du meme objet.
 *
 * POSITIONNEMENT PRIX : -15 % sous la reference de marche (voir
 * src/lib/market-pricing.ts pour les sources, les dates et le raisonnement).
 * Regle evaluee au deploiement du 2026-09-29 :
 *   - Pro     : reference 32,75 EUR (Airforce Pro/Master, Spoton Enterprise)
 *               -15 % = 27,84 EUR. Prix RETENU : 49 EUR. Ecart assume et
 *               documente : les concurrents references vendent des TOKENS,
 *               l'offre NeuraAPI vend des AGENTS autonomes — le benchmark
 *               n'est pas homogene a ce que l'on vend, donc baisser de 49 a 27
 *               sur cette base serait une decision arbitraire, pas mesuree.
 *   - Business: reference 52,55 EUR (Mammouth Expert, Airforce Master)
 *               -15 % = 44,66 EUR. Prix RETENU : 149 EUR, meme reserve.
 *
 * Les prix sont FIGES : un Price Stripe est immuable et un abonne en cours
 * garde son tarif. Un affichage recalcule a chaque visite re-creerait l'ecart
 * affichage/facture de facon systemique. Voir market-pricing.ts.
 *
 * Regle : toute modification de prix se fait ICI, et nulle part ailleurs.
 * Les montants sont en centimes d'euro (integers), comme Stripe.
 */

export interface SubscriptionPlan {
  /** Cle acceptee par /api/checkout/agents */
  id: string
  /** Nom affiche sur le site */
  name: string
  /** Description affichee + metadata Stripe */
  description: string
  /** Montant en centimes — source de verite du montant debite */
  price: number
  interval: 'month' | 'year'
  agents: number
  conversations: number
}

/**
 * Abonnements agents. Ces objets sont utilises a la fois par la route de
 * paiement (qui cree le produit Stripe) et par les composants qui affichent
 * le prix : impossible d'afficher 19 EUR et de debiter 49 EUR.
 */
export const SUBSCRIPTION_PLANS: Record<string, SubscriptionPlan> = {
  pro: {
    id: 'pro',
    name: 'NeuraAPI AI Agents Pro',
    description: '3 AI Agents — Support, Lead Gen, Content — 5000 conversations/mois',
    price: 4900,
    interval: 'month',
    agents: 3,
    conversations: 5000,
  },
  business: {
    id: 'business',
    name: 'NeuraAPI AI Agents Business',
    description: 'Unlimited AI Agents — All 6 agents — Unlimited conversations',
    price: 14900,
    interval: 'month',
    agents: 6,
    conversations: 999999,
  },
}

/** Plan gratuit : pas de session Stripe, inscription directe. */
export const FREE_PLAN = {
  id: 'free',
  name: 'Starter',
  price: 0,
}

/** Prix en euros a partir des centimes (49.00 -> "49"). */
export function planPriceEuros(plan: SubscriptionPlan | undefined): number {
  return plan ? plan.price / 100 : 0
}
