/**
 * Nettoyage de la marque dans les titres.
 *
 * Le layout racine de l'app declare `title.template = '%s | NeuraAPI'` :
 * Next.js ajoute donc la marque a chaque page. Or les dictionnaires de
 * traduction l contiennent deja dans le texte du titre (« Blog NeuraAPI »,
 * « FAQ — Questions fréquentes sur NeuraAPI », « Templates … — NeuraAPI »).
 * Les deux s'empilent et produisent « Blog NeuraAPI | NeuraAPI » sur les
 * 200 pages, y compris les 81 routes /<locale>/<slug>.
 *
 * Plutot que de corriger 10 fichiers de traduction de ~190 Ko — et d'avoir a
 * refaire le travail a chaque nouvelle cle — on normalise au point unique ou
 * le suffixe est ajoute. La regle vaut pour toutes les langues, presentes et
 * futures.
 */
export function stripBrand(title: string): string {
  // Nettoyer d'abord les formes avec separateur, en fin de chaine.
  let cleaned = title
    .replace(/(?:\s*[|—–-]\s*|\s+)NeuraAPI\s*$/g, '')
    .replace(/NeuraAPI(?=[\u3000-\u30ff\u4e00-\u9fff])/g, '')
    .replace(/NeuraAPI\s*$/g, '')

  // Nettoyer la marque en DEBUT de titre (« NeuraAPI Blog », « NeuraAPI -
  // Enterprise »). Sans separateur, un mot adjacent resterait colle
  // (« NeuraAPIBlog »), donc on exige une.frontiere de mot.
  cleaned = cleaned
    .replace(/^NeuraAPI\s*[|—–-]\s*/, '')
    .replace(/^NeuraAPI\s+(?=\S)/, '')

  // Re Nettoyer les mots orphelins apres le retrait (« FAQ … sur NeuraAPI »
  // -> « FAQ … sur », « À propos de NeuraAPI » -> « À propos »).
  cleaned = cleaned
    .replace(/\s+(?:sur|sobre|de|del|della|di|of|about|über)\s*$/i, '')
    .replace(/[\s|—–-]+$/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()

  // Un titre entierement consomme par la marque ne doit pas laisser de <title>
  // vide : on renvoie un repli exploitable.
  return cleaned || 'NeuraAPI'
}
