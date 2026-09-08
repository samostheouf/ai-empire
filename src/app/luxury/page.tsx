import type { Metadata } from 'next'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const APP_URL = 'https://ai-empire-steel.vercel.app'
const CANONICAL = `${APP_URL}/luxury`
const SKU = 'HERMES-LV-NBA-M-1A8WU8'
const PRICE = 4500
const CURRENCY = 'EUR'

export const metadata: Metadata = {
  title: 'Louis Vuitton x NBA Varsity M FW21 Virgil Abloh — 4500€ | Achat Direct Sécurisé',
  description:
    'LV x NBA Varsity Jacket M FW21 par Virgil Abloh — Porté 3x Parfait A+, AUTH VCCM09/CA36929 vérifiés, 14 photos HD + macros • DHL Express assuré + signature • Stock 1 • Paiement Stripe Live 4500€ direct sans frais eBay.',
  keywords: [
    'Louis Vuitton NBA',
    'LV NBA Virgil Abloh',
    'Varsity Jacket M',
    'FW21',
    'Virgil Abloh',
    'luxe streetwear',
    'direct Stripe',
    '4500 EUR',
  ],
  alternates: {
    canonical: CANONICAL,
    languages: {
      'fr-FR': CANONICAL,
      'en-US': `${CANONICAL}?hl=en`,
      'de-DE': `${CANONICAL}?hl=de`,
      'it-IT': `${CANONICAL}?hl=it`,
      'ja-JP': `${CANONICAL}?hl=ja`,
      'x-default': CANONICAL,
    },
  },
  openGraph: {
    title: 'Louis Vuitton x NBA — Varsity M FW21 Virgil Abloh — 4500€',
    description:
      'Porté 3x Parfait • AUTH VCCM09/CA36929 • 14 HD photos • DHL Express assuré • Stock 1 • Paiement Stripe direct',
    url: CANONICAL,
    siteName: 'HERMES Luxury Direct',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'de_DE', 'it_IT', 'ja_JP'],
    type: 'website',
    images: [
      {
        url: `${APP_URL}/api/og?title=${encodeURIComponent('LV x NBA Virgil Abloh M — 4500€')}&subtitle=${encodeURIComponent('Porte 3x Parfait • VCCM09/CA36929 • DHL assure')}`,
        width: 1200,
        height: 630,
        alt: 'Louis Vuitton x NBA Varsity M FW21 Virgil Abloh — 4500€',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LV x NBA Varsity M FW21 Virgil Abloh — 4500€ — Direct',
    description: 'Porté 3x Parfait • AUTH vérifiés • DHL assuré • Stripe Live • Stock 1',
    images: [`${APP_URL}/api/og?title=${encodeURIComponent('LV x NBA M — 4500€')}&subtitle=Virgil%20Abloh%20FW21`],
  },
  robots: { index: true, follow: true },
  other: {
    'product:price:amount': String(PRICE),
    'product:price:currency': CURRENCY,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Louis Vuitton x NBA Varsity Jacket M FW21 Virgil Abloh',
  description:
    'Louis Vuitton x NBA Varsity Jacket Taille M FW21 dessiné par Virgil Abloh — Porté 3x Parfait A+, authentifié VCCM09/CA36929, 14 photos HD + macros, DHL Express assuré + signature. Stock 1, vente directe Stripe autonome.',
  sku: SKU,
  brand: { '@type': 'Brand', name: 'Louis Vuitton' },
  manufacturer: { '@type': 'Organization', name: 'Louis Vuitton' },
  category: 'Apparel > Jackets > Varsity',
  color: 'Blue / White / Red NBA',
  material: 'Leather & Wool',
  size: 'M',
  condition: 'https://schema.org/UsedCondition',
  itemCondition: 'https://schema.org/UsedCondition',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Collection', value: 'FW21 Virgil Abloh' },
    { '@type': 'PropertyValue', name: 'Collaboration', value: 'Louis Vuitton x NBA' },
    { '@type': 'PropertyValue', name: 'Auth Code 1', value: 'VCCM09' },
    { '@type': 'PropertyValue', name: 'Auth Code 2', value: 'CA36929' },
    { '@type': 'PropertyValue', name: 'Etat', value: 'Porte 3x Parfait A+' },
    { '@type': 'PropertyValue', name: 'Taille', value: 'M' },
  ],
  image: [
    `${APP_URL}/api/og?title=${encodeURIComponent('LV x NBA M FW21')}&subtitle=Virgil%20Abloh`,
  ],
  offers: {
    '@type': 'Offer',
    url: CANONICAL,
    priceCurrency: CURRENCY,
    price: PRICE,
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    inventoryLevel: { '@type': 'QuantitativeValue', value: 1 },
    itemCondition: 'https://schema.org/UsedCondition',
    seller: { '@type': 'Organization', name: 'HERMES Luxury Direct', url: APP_URL },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: CURRENCY },
      shippingDestination: [
        { '@type': 'DefinedRegion', addressCountry: 'FR' },
        { '@type': 'DefinedRegion', addressCountry: 'DE' },
        { '@type': 'DefinedRegion', addressCountry: 'IT' },
        { '@type': 'DefinedRegion', addressCountry: 'GB' },
        { '@type': 'DefinedRegion', addressCountry: 'US' },
        { '@type': 'DefinedRegion', addressCountry: 'JP' },
      ],
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
      },
    },
  },
  aggregateRating: undefined,
}

export default function LuxuryPage() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* hreflang explicit for crawlers without JS */}
      <link rel="alternate" hrefLang="fr-FR" href={CANONICAL} />
      <link rel="alternate" hrefLang="en-US" href={`${CANONICAL}?hl=en`} />
      <link rel="alternate" hrefLang="de-DE" href={`${CANONICAL}?hl=de`} />
      <link rel="alternate" hrefLang="it-IT" href={`${CANONICAL}?hl=it`} />
      <link rel="alternate" hrefLang="ja-JP" href={`${CANONICAL}?hl=ja`} />
      <link rel="alternate" hrefLang="x-default" href={CANONICAL} />

      <p style={{ fontSize: 12, color: '#888', letterSpacing: 1, textTransform: 'uppercase' }}>
        HERMES LUXURY DIRECT • SKU {SKU} • Stock 1 • Autonome Stripe Live
      </p>
      <h1 style={{ fontSize: 26, fontWeight: 800, margin: '8px 0', lineHeight: 1.15 }}>
        Louis Vuitton x NBA — Varsity M FW21 Virgil Abloh — 4500€
      </h1>
      <p style={{ color: '#666', margin: '0 0 12px', fontSize: 14 }}>
        Porté 3x Parfait A+ — 14 photos HD + macros VCCM09/CA36929 — DHL Express assuré + signature — Stock 1 —
        Paiement direct Stripe sans frais eBay
      </p>

      {/* Trust badges SEO */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 11, marginBottom: 12 }}>
        <span style={{ background: '#000', color: '#fff', padding: '4px 8px', borderRadius: 999 }}> AUTH VCCM09 / CA36929</span>
        <span style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: 999, border: '1px solid #e2e8f0' }}> Virgil Abloh FW21</span>
        <span style={{ background: '#ecfdf5', padding: '4px 8px', borderRadius: 999, border: '1px solid #a7f3d0' }}> DHL Express assuré</span>
        <span style={{ background: '#fff7ed', padding: '4px 8px', borderRadius: 999, border: '1px solid #fed7aa' }}> 4500€ floor • Stock 1</span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
          gap: 12,
          margin: '16px 0',
        }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              height: 160,
              background: '#0a0a0a',
              border: '1px solid #222',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: 12,
            }}
          >
            Photo {String(i + 1).padStart(2, '0')} HD
          </div>
        ))}
      </div>

      {/* SEO international text block (helpful for indexing) */}
      <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16, background: '#fafafa', marginBottom: 16, fontSize: 13, color: '#444', lineHeight: 1.6 }}>
        <p style={{ margin: '0 0 8px', fontWeight: 700 }}>Pourquoi ce LV x NBA M est rare</p>
        <p style={{ margin: 0 }}>
          Édition FW21 dessinée par Virgil Abloh — collaboration Louis Vuitton x NBA. Cuir + laine varsity,
          patchs NBA/LV, doublure imprimée. Taille M, porté seulement 3 fois, état parfait A+. Codes authentification
          VCCM09 / CA36929 vérifiés. 14 photos HD + macros coutures/étiquettes/zip. Envoi DHL Express assuré avec signature.
          Vente directe <strong>4500€</strong> via Stripe — aucune commission eBay/Grailed/Vestiaire. Webhook autonome : désactivation auto des cross-listings &lt;5 min après paiement.
        </p>
        <p style={{ margin: '8px 0 0', fontSize: 12, color: '#888' }}>
          EN: Rare LV x NBA Varsity M FW21 Virgil Abloh — Worn 3x Mint, AUTH codes, DHL insured — Direct Stripe 4500€.{' '}
          DE: Seltene LV x NBA Varsity M FW21 Virgil Abloh — 3x getragen Top-Zustand, AUTH, DHL versichert — 4500€.{' '}
          IT: Rara LV x NBA Varsity M FW21 Virgil Abloh — Indossata 3x perfetta, AUTH, DHL assicurato — 4500€.{' '}
          JP: ルイ・ヴィトン × NBA バーシティ M FW21 ヴァージル・アブロー — 3回着用 極美品 鑑定済 — DHL保険付 4500€.
        </p>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, background: '#fff' }}>
        <h3 style={{ margin: '0 0 8px' }}>Acheter maintenant — 4500€ — Stripe sécurisé</h3>
        <form id="luxForm">
          <input
            name="email"
            type="email"
            placeholder="votre@email.com"
            required
            style={{ padding: '10px 12px', borderRadius: 8, border: '1px solid #ccc', width: '100%', maxWidth: 360 }}
          />
          <button
            type="submit"
            style={{
              marginTop: 12,
              padding: '12px 20px',
              background: '#000',
              color: '#fff',
              borderRadius: 10,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Payer 4500€ — DHL assuré
          </button>
        </form>
        <p style={{ fontSize: 12, color: '#888', marginTop: 8 }}>
          Vente directe autonome — eBay/Grailed/Vestiaire désactivés auto après paiement (webhook Stripe → LuxurySale
          sold → type luxury_direct)
        </p>
        <p id="luxMsg" style={{ fontSize: 13, marginTop: 8 }}></p>
      </div>

      <p style={{ marginTop: 16, fontSize: 13 }}>
        <Link href="/api/ebay/auth?redirect=1" style={{ color: '#0066ff' }}>
          Ou acheter via eBay (OAuth)
        </Link>{' '}
        — <Link href="/api/luxury/health" style={{ color: '#888' }}>Health</Link> —{' '}
        <Link href="/api/luxury/checkout" style={{ color: '#888' }}>Checkout API</Link>
      </p>

      <p style={{ marginTop: 18, fontSize: 11, color: '#aaa', borderTop: '1px solid #eee', paddingTop: 12 }}>
        Livraison: FR DE IT ES GB US JP CH BE NL CA AU SG AE HK KR • Shipping address collection Stripe • Taxes/Duties selon pays •
        Retour: vente finale authentifiée — photos contractuelles.
      </p>

      <script
        dangerouslySetInnerHTML={{
          __html: `document.getElementById('luxForm')?.addEventListener('submit',async(e)=>{e.preventDefault();const m=document.getElementById('luxMsg');const fd=new FormData(e.target);const email=fd.get('email');m.textContent='Creation session...';try{const r=await fetch('/api/luxury/checkout',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email})});const j=await r.json();if(j.url) location.href=j.url; else m.textContent=j.error||'Erreur'}catch(err){m.textContent='Erreur reseau'}})`,
        }}
      />
    </main>
  )
}
