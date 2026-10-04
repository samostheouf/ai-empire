/**
 * Source unique HERMES LUXURY : le floor et les regles de negociation.
 *
 * Mesure 04/10 : le floor 4500 etait ecrit en dur dans 9 fichiers
 * (pricing, ebay-sync, negotiation, checkout, page.tsx, LuxuryCheckout,
 * dashboard, hub). Une regle de prix dupliquee N fois n'en est pas une seule
 * verite : elle diverge des la premiere correction oubliee. Ici une seule
 * constante, et une fonction pure qui decide.
 *
 * REGLE ABSOLUE : aucune fonction de ce fichier ne modifie un prix.
 * Une offre ne DECIDE pas, elle RECENSE. Le prix reste decide par le cron
 * pricing et par un humain.
 */

export const LUXURY_SKU = 'HERMES-LV-NBA-M-1A8WU8'

/** Floor absolu terminal. Aucune offre ne le fait descendre sans humain. */
export const LUXURY_FLOOR = 4500

/** Etendue de la bande de contre-offre, en euros sous le floor. */
export const LUXURY_COUNTER_BAND = 500

export type IntentKind = 'watcher' | 'offer'
export type IntentDecision =
  | { verdict: 'RECU';      action: string; floor: number }
  | { verdict: 'CONTRE';    action: string; counter: number; floor: number }
  | { verdict: 'REFUS';     action: string; floor: number }
  | { verdict: 'WATCH';     action: string; floor: number }

/**
 * Decide quoi repondre a une offre, SANS toucher au prix.
 *
 * - >= floor            : recue. Confirmation humaine, aucun auto-sold.
 * - floor-500..floor-1  : contre-offre au floor exact.
 * - < floor-500         : refusee. Le refus est honnete : on ne fait pas
 *                         semblant qu'un plancher est negociable.
 */
export function decideOffer(amountEur: number, floor: number = LUXURY_FLOOR): IntentDecision {
  if (!Number.isFinite(amountEur) || amountEur <= 0) {
    return { verdict: 'REFUS', action: 'Montant invalide — preciser un montant en euros.', floor }
  }
  if (amountEur >= floor) {
    return {
      verdict: 'RECU',
      action: `Offre de ${Math.round(amountEur)} EUR enregistree. Le prix de vente reste ${floor} EUR : une offre ne modifie pas le prix. Reponse humaine sous 24h.`,
      floor,
    }
  }
  if (amountEur >= floor - LUXURY_COUNTER_BAND) {
    return {
      verdict: 'CONTRE',
      counter: floor,
      action: `Offre de ${Math.round(amountEur)} EUR enregistree. Contre-offre : ${floor} EUR. Reponse humaine sous 24h.`,
      floor,
    }
  }
  return {
    verdict: 'REFUS',
    action: `Offre de ${Math.round(amountEur)} EUR enregistree, refusee : le plancher est ${floor} EUR. Reponse humaine sous 24h.`,
    floor,
  }
}