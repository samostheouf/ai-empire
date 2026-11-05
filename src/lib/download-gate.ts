/**
 * SOURCE UNIQUE de la décision de téléchargement payé.
 *
 * Les tar.gz payés vivent dans public/ pour le moment (legacy). Le proxy
 * bloque tout accès direct *.tar.gz (401). La seule voie de livraison est
 * GET /api/templates/download, qui appelle decideDownload() avant de servir
 * le fichier. Une décision de prix ou de droit ne se duplique jamais :
 * elle vit ici, testable sans déployer.
 */

export interface OrderGate {
  templateId: string
  status: string
  refunded: boolean
}

export interface DownloadDecision {
  allow: boolean
  status: number
  reason: string
}

export function decideDownload(input: {
  order: OrderGate | null
  templateId: string | null
  sessionId: string | null
}): DownloadDecision {
  const { order, templateId, sessionId } = input
  if (!templateId || !sessionId) {
    return { allow: false, status: 400, reason: 'Paramètres manquants' }
  }
  if (!order) {
    return { allow: false, status: 404, reason: 'Session introuvable' }
  }
  if (order.templateId !== templateId) {
    return { allow: false, status: 404, reason: 'Session introuvable' }
  }
  if (order.status !== 'completed') {
    return { allow: false, status: 403, reason: 'Paiement non confirmé' }
  }
  if (order.refunded) {
    return { allow: false, status: 403, reason: 'Commande remboursée' }
  }
  return { allow: true, status: 200, reason: 'OK' }
}

/** Vrai si le chemin demande un livrable payé (.tar.gz). */
export function isPaidTarballPath(pathname: string): boolean {
  return pathname.endsWith('.tar.gz')
}

/**
 * Extrait le nom de fichier d'un fileUrl de template, sans traversal.
 * Retourne null si fileUrl n'est pas un .tar.gz simple ou contient .. / .
 */
export function resolveTarballFilename(fileUrl: string): string | null {
  const clean = fileUrl.split('?')[0].split('#')[0]
  if (clean.includes('..')) return null
  const base = clean.split('/').pop() || ''
  if (!base.endsWith('.tar.gz')) return null
  if (base.includes('..') || base.includes('\\')) return null
  if (!/^[a-zA-Z0-9._-]+\.tar\.gz$/.test(base)) return null
  return base
}
