'use client'
import { useEffect } from 'react'

const SKU = 'HERMES-LV-NBA-M-1A8WU8'
const FLAG = 'luxury_view_pinged_v1'

/**
 * Le compteur LuxurySale.views etait a 0 depuis 29 jours parce que RIEN
 * n'appelle POST /api/luxury {action:'view'} : le signal qui pilote la
 * regle DYNAMIC_PRICING (days>=2 && views===0) etait donc structurellement
 * nul, independamment du trafic reel. Ce composant le branche.
 *
 * 1 ping par session navigateur (sessionStorage) : mesure une session, ne
 * gonfle pas le chiffre a chaque rechargement.
 */
export default function ViewPing({ locale }: { locale: string }) {
  useEffect(() => {
    // <html lang> vient du layout racine (toujours fr) : on le recale sur la
    // locale reellement servie, sinon hreflang annonce ja-JP sur une page
    // dont le document se declare fr.
    try {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    } catch {}

    try {
      if (sessionStorage.getItem(FLAG) === '1') return
      sessionStorage.setItem(FLAG, '1')
    } catch {
      return // navigation privee : on ne ping pas plutot que de mentir
    }

    const body = JSON.stringify({ action: 'view', sku: SKU })
    fetch('/api/luxury', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    })
      .then((r) => { if (!r.ok) console.error('[luxury] view ping refused', r.status) })
      .catch(() => { try { sessionStorage.removeItem(FLAG) } catch {} })
  }, [locale])

  return null
}