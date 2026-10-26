/**
 * Le floor 4500 n'est une regle que si on l'a vu refuser.
 * Mesure 04/10 : `decideOffer` decide sur une fonction pure — la seule maniere
 * de prouver qu'une offre sous le floor ne peut pas passer, sans deployer.
 */
import { decideOffer, LUXURY_FLOOR } from '../src/lib/luxury-intent'

let failed = 0
function check(label: string, cond: boolean, detail?: unknown) {
  if (cond) console.log(`ok   ${label}`)
  else { failed++; console.log(`FAIL ${label}`, detail ?? '') }
}

// Bande de contre-offre : 4000..4499 -> contre-offre au floor exact.
check('4499 EUR -> CONTRE au floor', decideOffer(4499).verdict === 'CONTRE')
check('contre = floor exact', (decideOffer(4499) as any).counter === LUXURY_FLOOR)
check('4000 EUR (borne basse) -> CONTRE', decideOffer(4000).verdict === 'CONTRE')

// Sous floor-500 : refus HONNETE, pas de promesse.
check('3999 EUR -> REFUS', decideOffer(3999).verdict === 'REFUS')
check('100 EUR -> REFUS', decideOffer(100).verdict === 'REFUS')
check('0 EUR -> REFUS', decideOffer(0).verdict === 'REFUS')
check('-500 EUR -> REFUS', decideOffer(-500).verdict === 'REFUS')
check('NaN -> REFUS', decideOffer(NaN).verdict === 'REFUS')

// Au-dessus du floor : recu, SANS pretendre que le prix change.
const high = decideOffer(6000)
check('6000 EUR -> RECU', high.verdict === 'RECU')
check('RECU ne renvoie pas de counter (le prix ne bouge pas)', !('counter' in (high as any)))
check('RECU rappelle le floor', (high as any).floor === LUXURY_FLOOR)

// Le message ne doit jamais promettre une remise.
check('aucune decision ne promet un prix sous le floor', [100, 3999, 4000, 4499, 4500, 6000]
  .every((n) => !/\d{3,}\s*EUR/.test(decideOffer(n).action.replace(/^\D*/, '')) ||
                 decideOffer(n).action.includes(String(LUXURY_FLOOR))))

console.log(failed === 0 ? '\nTOUT PASSE' : `\n${failed} ECHEC(S)`)
if (failed > 0) throw new Error(`${failed} ECHEC(S)`)