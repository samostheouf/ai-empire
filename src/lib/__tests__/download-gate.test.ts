import { decideDownload, isPaidTarballPath, resolveTarballFilename } from '@/lib/download-gate'

describe('download-gate', () => {
  it('refuse sans paramètres', () => {
    expect(decideDownload({ order: null, templateId: null, sessionId: null }).status).toBe(400)
    expect(decideDownload({ order: null, templateId: 't1', sessionId: null }).status).toBe(400)
  })
  it('refuse session inconnue en 404', () => {
    expect(decideDownload({ order: null, templateId: 't1', sessionId: 'cs_x' }).status).toBe(404)
  })
  it('refuse template différent en 404 sans fuiter', () => {
    const d = decideDownload({
      order: { templateId: 'autre', status: 'completed', refunded: false },
      templateId: 't1',
      sessionId: 'cs_x',
    })
    expect(d.allow).toBe(false)
    expect(d.status).toBe(404)
  })
  it('refuse paiement non completed en 403', () => {
    const d = decideDownload({
      order: { templateId: 't1', status: 'pending', refunded: false },
      templateId: 't1',
      sessionId: 'cs_x',
    })
    expect(d.status).toBe(403)
  })
  it('refuse commande remboursée en 403', () => {
    const d = decideDownload({
      order: { templateId: 't1', status: 'completed', refunded: true },
      templateId: 't1',
      sessionId: 'cs_x',
    })
    expect(d.status).toBe(403)
  })
  it('autorise commande completed non remboursée', () => {
    const d = decideDownload({
      order: { templateId: 't1', status: 'completed', refunded: false },
      templateId: 't1',
      sessionId: 'cs_x',
    })
    expect(d).toEqual({ allow: true, status: 200, reason: 'OK' })
  })
  it('détecte les chemins tar.gz payés', () => {
    expect(isPaidTarballPath('/agent-pro.tar.gz')).toBe(true)
    expect(isPaidTarballPath('/api/templates/download')).toBe(false)
    expect(isPaidTarballPath('/templates')).toBe(false)
  })
  it('extrait le nom de fichier sans traversal', () => {
    expect(resolveTarballFilename('/agent-pro.tar.gz')).toBe('agent-pro.tar.gz')
    expect(resolveTarballFilename('https://x.test/agent-pro.tar.gz?dl=1')).toBe('agent-pro.tar.gz')
    expect(resolveTarballFilename('/api/free-template/download')).toBeNull()
    expect(resolveTarballFilename('/../secret.tar.gz')).toBeNull()
    expect(resolveTarballFilename('/a/b/../../x.tar.gz')).toBeNull()
  })
})
