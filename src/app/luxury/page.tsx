'use client'
import { useEffect, useState, useCallback } from 'react'

export const dynamic = 'force-dynamic'

type Dash = {
  success: boolean
  timestamp: string
  health: { db: string; latencyMs: number | null; activeSales: number; totalSales: number; soldCount: number; mode: string }
  stats: { sku: string | null; price: number | null; currency: string; status: string | null; views: number; watchers: number; offers: any; offersCount: number; platform: string | null; createdAt: string | null; updatedAt: string | null; all: any[] }
  logs: { id: string; saleId: string; type: string; message: string; data: any; createdAt: string }[]
  pricing: { current: any; history: any[]; journal_hint: string }
}

export default function LuxuryPage() {
  const [data, setData] = useState<Dash | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [selling, setSelling] = useState(false)
  const [soldMsg, setSoldMsg] = useState<string | null>(null)

  const fetchDash = useCallback(async () => {
    try {
      const r = await fetch('/api/luxury/dashboard', { cache: 'no-store' })
      const j = await r.json()
      if (!r.ok) throw new Error(j.error || 'fetch failed')
      setData(j)
      setErr(null)
    } catch (e: any) {
      setErr(e.message || String(e))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchDash()
    const id = setInterval(fetchDash, 5 * 60 * 1000) // 5 min
    return () => clearInterval(id)
  }, [fetchDash])

  const markSold = async () => {
    if (!data?.stats.sku) return
    if (!confirm(`Confirmer VENDU pour ${data.stats.sku} ? Cette action passe le statut en sold et désactive le cross-listing.`)) return
    setSelling(true)
    setSoldMsg(null)
    try {
      const sku = data.stats.sku
      const r = await fetch('/api/luxury', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sold', sku, platform: 'manual-luxury-dashboard' }),
      })
      const j = await r.json()
      if (!j.success) throw new Error(j.error || 'sold failed')
      setSoldMsg('✓ Statut passé en SOLD — cross-listing à désactiver <1h (eBay/Grailed/Vestiaire).')
      await fetchDash()
    } catch (e: any) {
      setSoldMsg('Erreur: ' + (e.message || String(e)))
    } finally {
      setSelling(false)
    }
  }

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '16px 12px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#111' }}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <h1 style={{ fontSize: 22, fontWeight: 800, margin: '8px 0 4px' }}>LUXURY — Monitoring temps réel</h1>
      <p style={{ fontSize: 12, color: '#666', margin: '0 0 12px' }}>
        SSOT Prisma LuxurySale/Log · SKU HERMES-LV-NBA-M-1A8WU8 · auto-refresh 5 min · Ne jamais inventer vente (SOLD = humain + preuve plateforme uniquement)
      </p>

      {loading && <div style={{ padding: 12, background: '#f5f5f5', borderRadius: 8 }}>Chargement…</div>}
      {err && <div style={{ padding: 12, background: '#fee', borderRadius: 8, color: '#900', fontSize: 13 }}>Erreur: {err}</div>}

      {data && (
        <>
          {/* HEALTH + STATS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 12 }}>
            <div style={{ flex: '1 1 260px', minWidth: 260, border: '1px solid #e5e5e5', borderRadius: 10, padding: 12, background: '#fff' }}>
              <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', fontWeight: 700 }}>HEALTH</div>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
                DB: <b style={{ color: data.health.db === 'ok' ? '#0a7a2e' : '#b00' }}>{data.health.db}</b> {data.health.latencyMs != null ? `· ${data.health.latencyMs}ms` : ''}<br />
                Actives: <b>{data.health.activeSales}</b> · Total: {data.health.totalSales} · Sold: {data.health.soldCount}<br />
                Mode: <b>{data.health.mode}</b><br />
                <span style={{ fontSize: 11, color: '#888' }}>{new Date(data.timestamp).toLocaleString('fr-FR')}</span>
              </div>
            </div>
            <div style={{ flex: '1 1 260px', minWidth: 260, border: '1px solid #e5e5e5', borderRadius: 10, padding: 12, background: '#fff' }}>
              <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', fontWeight: 700 }}>STATS {data.stats.sku || '—'}</div>
              <div style={{ fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
                Prix: <b>{data.stats.price ?? '—'} {data.stats.currency}</b> · Status: <b style={{ color: data.stats.status === 'active' ? '#0a7a2e' : data.stats.status === 'sold' ? '#b00' : '#666' }}>{data.stats.status || '—'}</b><br />
                Vues: <b>{data.stats.views}</b> · Watchers: <b>{data.stats.watchers}</b> · Offres: <b>{data.stats.offersCount}</b><br />
                Plateforme: {data.stats.platform || '—'}<br />
                {data.stats.offers && Array.isArray(data.stats.offers) && data.stats.offers.length > 0 && (
                  <span style={{ fontSize: 11 }}>Offres: {JSON.stringify(data.stats.offers)}</span>
                )}
              </div>
              <button
                onClick={markSold}
                disabled={selling || data.stats.status === 'sold'}
                style={{
                  marginTop: 10,
                  width: '100%',
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: 'none',
                  background: data.stats.status === 'sold' ? '#888' : '#111',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: selling || data.stats.status === 'sold' ? 'not-allowed' : 'pointer',
                  opacity: selling ? 0.7 : 1,
                }}
              >
                {data.stats.status === 'sold' ? 'DÉJÀ VENDU' : selling ? '…envoi' : 'MARCHER SOLD (humain uniquement)'}
              </button>
              {soldMsg && <div style={{ marginTop: 8, fontSize: 12, padding: 8, borderRadius: 6, background: soldMsg.startsWith('✓') ? '#e6f5ea' : '#fee', color: soldMsg.startsWith('✓') ? '#0a7a2e' : '#900' }}>{soldMsg}</div>}
              <div style={{ marginTop: 6, fontSize: 10, color: '#999' }}>Règle: ne jamais passer en sold sans preuve de paiement plateforme. Action loggée en DB.</div>
            </div>
          </div>

          {/* PRICING */}
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: 12, background: '#fff', marginBottom: 12 }}>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', fontWeight: 700 }}>PRICING — HERMES DYNAMIC_PRICING</div>
            <div style={{ fontSize: 12, marginTop: 6, lineHeight: 1.6, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <span>ASK <b>{data.pricing.current.ask}€</b></span>
              <span>Médiane sold cuir <b>{data.pricing.current.median_sold_eur}€</b></span>
              <span>Médiane active cuir <b>{data.pricing.current.median_active_cuir_eur}€</b></span>
              <span>P25 {data.pricing.current.p25}€ · P75 {data.pricing.current.p75}€</span>
              <span>Floor <b>{data.pricing.current.floor}€</b></span>
              <span>Velocity: {data.pricing.current.velocity}</span>
            </div>
            <div style={{ fontSize: 11, color: '#666', marginTop: 6 }}>{data.pricing.journal_hint}</div>
            {data.pricing.history.length > 0 && (
              <div style={{ marginTop: 8, fontSize: 11 }}>
                <div style={{ fontWeight: 700, fontSize: 11, color: '#888' }}>HISTORIQUE PRICING ({data.pricing.history.length})</div>
                <div style={{ maxHeight: 120, overflow: 'auto', marginTop: 4 }}>
                  {data.pricing.history.map((h: any, i: number) => (
                    <div key={i} style={{ padding: '4px 0', borderBottom: '1px solid #f0f0f0' }}>{new Date(h.ts).toLocaleString('fr-FR')} — {h.message}</div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ALL SALES */}
          {data.stats.all.length > 1 && (
            <div style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: 12, background: '#fff', marginBottom: 12 }}>
              <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', fontWeight: 700 }}>TOUTES VENTES ({data.stats.all.length})</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                {data.stats.all.map((s: any) => (
                  <div key={s.sku} style={{ flex: '1 1 180px', border: '1px solid #eee', borderRadius: 8, padding: 8, fontSize: 11, lineHeight: 1.5 }}>
                    <b>{s.sku}</b><br />{s.price}€ · {s.status} · 👁 {s.views} · 👀 {s.watchers} · {s.platform || '—'}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* LOGS */}
          <div style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: 12, background: '#fff' }}>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', fontWeight: 700 }}>LOGS — LuxuryLog (20 derniers)</div>
            {data.logs.length === 0 ? (
              <div style={{ fontSize: 12, color: '#888', marginTop: 6 }}>Aucun log — les crons luxury-hub / luxury-pricing / luxury-negotiation écrivent ici toutes les heures.</div>
            ) : (
              <div style={{ marginTop: 8, maxHeight: 320, overflow: 'auto' }}>
                {data.logs.map((l) => (
                  <div key={l.id} style={{ padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 11, lineHeight: 1.4 }}>
                    <span style={{ color: '#888' }}>{new Date(l.createdAt).toLocaleString('fr-FR')}</span> · <b>{l.type}</b> · {l.message}
                    {l.data && <span style={{ color: '#666' }}> — {typeof l.data === 'string' ? l.data : JSON.stringify(l.data).slice(0, 160)}</span>}
                  </div>
                ))}
              </div>
            )}
            <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button onClick={fetchDash} style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', fontSize: 12, cursor: 'pointer' }}>↻ Rafraîchir</button>
              <a href="/api/luxury/dashboard" target="_blank" style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', fontSize: 12, textDecoration: 'none', color: '#111' }}>JSON brut</a>
              <a href="/api/luxury?_cache=0" target="_blank" style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', fontSize: 12, textDecoration: 'none', color: '#111' }}>/api/luxury</a>
            </div>
          </div>

          <div style={{ fontSize: 10, color: '#aaa', marginTop: 12, textAlign: 'center' }}>
            Viewport méta + flex-wrap + max 860px · SSOT Prisma Neon · Build push --skip-generate côté Vercel · Ne jamais inventer vente
          </div>
        </>
      )}
    </div>
  )
}
