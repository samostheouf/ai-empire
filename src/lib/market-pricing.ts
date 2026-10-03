/**
 * REFERENCES DE MARCHE ET REGLE DE TARIFICATION — NeuraAPI
 *
 * Positionnement : -15 % sous le prix de marche du segment equivalent.
 *
 * ---------------------------------------------------------------------------
 * POURQUOI LES PRIX SONT FIGES ET NON « EN TEMPS REEL »
 * ---------------------------------------------------------------------------
 * Un prix d'abonnement ne peut pas fluctuer en direct, pour trois raisons
 * cumules :
 *
 * 1. Stripe fige le `unit_amount` a la creation du Price. Un Price est
 *    immuable : pour le changer, on cree un nouveau Price. Un site qui affiche
 *    un prix recalcule a chaque visite mais facture le Price fige reintroduit
 *    exactement l'ecart affichage/facturation (art. L. 121-2 C. conso.) — ici
 *    de facon systemique et invisible.
 * 2. Un abonne deja souscrit conserve son tarif. Un nouveau visiteur verrait un
 *    prix different de celui de son voisin : la comparaison de prix sur le site
 *    devient un mensonge, et le client existant decouvre la difference a la
 *    facture suivante.
 * 3. Une grille qui bouge toutes les heures n'est pas opposable : « le prix
 *    affiche au moment de la commande » n'a aucun sens si la reference change
 *    entre le clic et la facture.
 *
 * La regle retenue : reference de marche relevee, -15 % applique une fois,
 * resultat FIGE. Pour suivre le marche sans casser le prix affiche/facture,
 * la voie est un job qui releve les concurrents et ALERTE quand la reference
 * bouge de plus de 10 % (voir src/app/api/cron/market-watch).
 *
 * ---------------------------------------------------------------------------
 * SOURCES (releve du 2026-09-29)
 * ---------------------------------------------------------------------------
 * Airforce AI API  — api.airforce/fr/pricing — Starter 8,61 / Premium 21,54 /
 *   Pro 30,16 / Master 43,09 EUR/mois (API multi-modeles, quotas mensuels)
 * Spoton          — spoton-ai.com/fr/pricing — Pro 15 EUR HT / Enterprise
 *   25 EUR HT par utilisateur/mois (orchestration IA, FR)
 * Mammouth AI      — reapi.ai — Starter 12 / Standard 24 / Expert 72 USD/mois
 *   (~11 / ~22 / ~62 EUR), quota de chat + credits API separes
 * IG1             — ig1.ai/fr/pricing — 100 EUR/mois (API souveraine, usage
 *   inclus 100 EUR) : segment entreprise, hors comparaison directe
 */

export interface MarketReference {
  competitor: string
  plan: string
  /** Prix en euros par mois, converti si la source publie en USD */
  priceEuros: number
  source: string
  /** Date de releve — un prix de marche non date ne vaut rien */
  checkedOn: string
}

/** References de marche relevees, segment « abonnement IA pour equipe ». */
export const MARKET_REFERENCES: MarketReference[] = [
  { competitor: 'Airforce AI API', plan: 'Pro', priceEuros: 30.16, source: 'api.airforce/fr/pricing', checkedOn: '2026-09-29' },
  { competitor: 'Airforce AI API', plan: 'Master', priceEuros: 43.09, source: 'api.airforce/fr/pricing', checkedOn: '2026-09-29' },
  { competitor: 'Spoton', plan: 'Enterprise (par utilisateur)', priceEuros: 25.0, source: 'spoton-ai.com/fr/pricing', checkedOn: '2026-09-29' },
  { competitor: 'Mammouth AI', plan: 'Expert', priceEuros: 62.0, source: 'reapi.ai', checkedOn: '2026-09-29' },
]

/** Remise de positionnement appliquee sous le marche. */
export const MARKET_DISCOUNT = 0.15

/**
 * References utilisees pour benchmarker chaque plan NeuraAPI.
 * Chaque plan est cale sur le segment de marche le plus proche, pas sur la
 * moyenne de tout le marche : un plan « agents autonomes » n'est pas
 * comparable a un plan « acces API ».
 */
const PLAN_BENCHMARKS: Record<string, string[]> = {
  // 3 agents autonomes + 5 000 conversations/mois : equivalent du palier
  // « equipe » d'un agregateur IA (Spoton Enterprise, Airforce Pro/Master).
  pro: ['Airforce AI API:Pro', 'Airforce AI API:Master', 'Spoton:Enterprise (par utilisateur)'],
  // Agents illimites : equivalent du palier haut de gamme (Mammouth Expert).
  business: ['Mammouth AI:Expert', 'Airforce AI API:Master'],
}

function refKey(r: MarketReference): string {
  return `${r.competitor}:${r.plan}`
}

/** Prix de marche de reference (EUR/mois) pour un plan NeuraAPI. */
export function marketBenchmarkEuros(planId: string): number | null {
  const keys = PLAN_BENCHMARKS[planId]
  if (!keys || keys.length === 0) return null
  const values = keys
    .map((k) => MARKET_REFERENCES.find((r) => refKey(r) === k)?.priceEuros)
    .filter((v): v is number => typeof v === 'number')
  if (values.length === 0) return null
  return values.reduce((a, b) => a + b, 0) / values.length
}

/**
 * Prix final = reference de marche - 15 %, arrondi au palier commercial
 * se terminant par 9 (49, 29, 149) — pratique de prix, standard du secteur.
 * Le resultat est FIGE : c'est le montant que Stripe doit facturer.
 */
export function priceFromMarket(planId: string, fallbackCents: number): number {
  const benchmark = marketBenchmarkEuros(planId)
  if (benchmark === null) return fallbackCents
  const raw = benchmark * (1 - MARKET_DISCOUNT)
  // arrondi au .x9 le plus proche
  const rounded = Math.round(raw) - 1
  return Math.max(0, rounded) * 100
}

/** Trace lisible de la derivation, pour audit et pour la page /pricing. */
export function pricingRationale(planId: string): {
  benchmarkEuros: number | null
  discount: number
  finalEuros: number
  references: string[]
} {
  const benchmark = marketBenchmarkEuros(planId)
  return {
    benchmarkEuros: benchmark,
    discount: MARKET_DISCOUNT,
    finalEuros: benchmark === null ? 0 : priceFromMarket(planId, 0) / 100,
    references: PLAN_BENCHMARKS[planId] || [],
  }
}
