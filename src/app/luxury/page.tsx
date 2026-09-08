import type { Metadata } from 'next'
import Link from 'next/link'
import { cookies } from 'next/headers'
import LuxuryGallery from './LuxuryGallery'
import LuxuryCheckout from './LuxuryCheckout'
import { luxuryTranslations } from '@/i18n/translations/luxury'
import { locales, defaultLocale, type Locale } from '@/i18n/config'

export const dynamic = 'force-dynamic'

const APP_URL = 'https://ai-empire-steel.vercel.app'
const CANONICAL = `${APP_URL}/luxury`
const SKU = 'HERMES-LV-NBA-M-1A8WU8'
const PRICE = 4500
const CURRENCY = 'EUR'

function resolveLocale(hl?: string): Locale {
  const fromHl = hl?.toLowerCase()
  if (fromHl && (locales as readonly string[]).includes(fromHl)) return fromHl as Locale
  try {
    const cookieLocale = cookies().get('neuralocale')?.value
    if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) return cookieLocale as Locale
  } catch {}
  return defaultLocale
}

export async function generateMetadata({ searchParams }: { searchParams?: { hl?: string } }): Promise<Metadata> {
  const locale = resolveLocale(searchParams?.hl)
  const t = luxuryTranslations[locale] ?? luxuryTranslations.fr
  const locMap: Record<string, string> = { fr:'fr-FR', en:'en-US', es:'es-ES', de:'de-DE', it:'it-IT', pt:'pt-PT', ja:'ja-JP', zh:'zh-CN', ko:'ko-KR', ar:'ar-SA' }
  const languages: Record<string, string> = { 'x-default': CANONICAL }
  for (const l of locales) {
    const hl = locMap[l] ?? l
    languages[hl] = l === 'fr' ? CANONICAL : `${CANONICAL}?hl=${l}`
  }
  return {
    title: t.metaTitle,
    description: t.metaDesc,
    keywords: ['Louis Vuitton NBA', 'LV NBA Virgil Abloh', 'Varsity Jacket M', 'FW21', 'Virgil Abloh', 'cuir laine varsity', 'VCCM09 CA36929', 'DHL assure', 'Stripe direct'],
    alternates: { canonical: CANONICAL, languages },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDesc,
      url: CANONICAL,
      siteName: 'HERMES Luxury Direct',
      locale: locMap[locale] ?? 'fr_FR',
      alternateLocale: Object.values(locMap).filter(v => v !== locMap[locale]),
      type: 'website',
      images: [{ url: `${APP_URL}/api/og?title=${encodeURIComponent(t.ogTitle)}&subtitle=${encodeURIComponent(t.ogDesc)}`, width: 1200, height: 630, alt: t.title }],
    },
    twitter: { card: 'summary_large_image', title: t.ogTitle, description: t.ogDesc, images: [`${APP_URL}/api/og?title=${encodeURIComponent(t.title)}&subtitle=Virgil%20Abloh%20FW21`] },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    other: { 'product:price:amount': String(PRICE), 'product:price:currency': CURRENCY },
  }
}

const BLOB = 'https://jyjp02vaprlkyxab.public.blob.vercel-storage.com'

const gallery = [
  { url: `${BLOB}/03_dos.jpg`, label: 'Dos HD', alt: 'Dos Louis Vuitton x NBA varsity M FW21 Virgil Abloh — cuir bleu nuit et laine crème, lettres LV géantes au dos, coutures parfaites, porté 3x état neuf', w: 1200, h: 900 },
  { url: `${BLOB}/04_profil.jpg`, label: 'Profil 3/4', alt: 'Profil trois-quarts veste LV x NBA varsity M — coupe varsity cuir et laine, manches contrastées, boutons pression gravés LV, bord-côte rayé', w: 1200, h: 900 },
  { url: `${BLOB}/05_lv_brode.jpg`, label: 'LV brodé', alt: 'Broderie LV poitrine Louis Vuitton x NBA — fil blanc haute densité sur cuir bleu, détail Virgil Abloh FW21 macro nette haute définition', w: 1200, h: 900 },
  { url: `${BLOB}/06_patch_nba.jpg`, label: 'Patch NBA', alt: 'Patch NBA brodé manche — logo NBA officiel réversible cousu, couleurs vives, authentification visuelle FW21', w: 1200, h: 900 },
  { url: `${BLOB}/07_patchs_manches.jpg`, label: 'Patchs manches', alt: 'Patchs manches Louis Vuitton x NBA — patchs multiples cuir et textile NBA, finition bord-côte impeccable état A+', w: 1200, h: 900 },
  { url: `${BLOB}/08_boutons.jpg`, label: 'Boutons gravés', alt: 'Boutons pression gravés Louis Vuitton — métal doré gravé LV, fermeture avant varsity, macro haute définition', w: 1200, h: 900 },
  { url: `${BLOB}/09_doublure.jpg`, label: 'Doublure satin', alt: 'Doublure intérieure satin imprimée LV x NBA — motif monogram et logos NBA, coutures intérieures propres taille M', w: 1200, h: 900 },
  { url: `${BLOB}/10_etiquette_face.jpg`, label: 'Étiquette VCCM09', alt: 'Étiquette authentification Louis Vuitton face — codes VCCM09 et CA36929 visibles Made in Italy taille M macro lisible', w: 1200, h: 900 },
]

export default function LuxuryPage({ searchParams }: { searchParams?: { hl?: string } }) {
  const locale = resolveLocale(searchParams?.hl)
  const t = luxuryTranslations[locale] ?? luxuryTranslations.fr
  const isRTL = locale === 'ar'
  const dir = isRTL ? 'rtl' : 'ltr'

  const points = [t.point1, t.point2, t.point3, t.point4, t.point5, t.point6, t.point7, t.point8, t.point9, t.point10]
  const faqs = [
    { q: t.faqQ1, a: t.faqA1 },
    { q: t.faqQ2, a: t.faqA2 },
    { q: t.faqQ3, a: t.faqA3 },
    { q: t.faqQ4, a: t.faqA4 },
    { q: t.faqQ5, a: t.faqA5 },
  ]

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: APP_URL },
      { '@type': 'ListItem', position: 2, name: 'Luxury', item: CANONICAL },
      { '@type': 'ListItem', position: 3, name: t.title, item: CANONICAL },
    ],
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: t.title,
    description: t.description,
    sku: SKU,
    mpn: SKU,
    brand: { '@type': 'Brand', name: 'Louis Vuitton' },
    manufacturer: { '@type': 'Organization', name: 'Louis Vuitton', url: 'https://louisvuitton.com' },
    category: 'Apparel > Jackets > Varsity',
    color: 'Bleu / Blanc / Rouge NBA',
    material: 'Cuir + laine + satin doublure',
    size: 'M',
    pattern: 'Varsity NBA',
    audience: { '@type': 'Audience', audienceType: 'Unisex' },
    condition: 'https://schema.org/UsedCondition',
    itemCondition: 'https://schema.org/UsedCondition',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Collection', value: 'FW21 Virgil Abloh' },
      { '@type': 'PropertyValue', name: 'Collaboration', value: 'Louis Vuitton x NBA' },
      { '@type': 'PropertyValue', name: 'Auth Code 1', value: 'VCCM09' },
      { '@type': 'PropertyValue', name: 'Auth Code 2', value: 'CA36929' },
      { '@type': 'PropertyValue', name: 'Etat', value: locale==='fr' ? 'Porte 3x Parfait A+' : locale==='en' ? 'Worn 3x Mint A+' : '3x' },
      { '@type': 'PropertyValue', name: 'Taille', value: 'M' },
      { '@type': 'PropertyValue', name: 'Locale', value: locale },
    ],
    image: gallery.map((g) => g.url),
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
      hasMerchantReturnPolicy: { '@type': 'MerchantReturnPolicy', applicableCountry: 'FR', returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted', merchantReturnDays: 0 },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: { '@type': 'MonetaryAmount', value: 0, currency: CURRENCY },
        shippingDestination: [{ '@type': 'DefinedRegion', addressCountry: 'FR' }, { '@type': 'DefinedRegion', addressCountry: 'DE' }, { '@type': 'DefinedRegion', addressCountry: 'IT' }, { '@type': 'DefinedRegion', addressCountry: 'GB' }, { '@type': 'DefinedRegion', addressCountry: 'US' }, { '@type': 'DefinedRegion', addressCountry: 'JP' }],
        deliveryTime: { '@type': 'ShippingDeliveryTime', handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' }, transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' } },
      },
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <div dir={dir} className="bg-[#fafaf9] text-zinc-900">
      <link rel="preconnect" href="https://jyjp02vaprlkyxab.public.blob.vercel-storage.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://jyjp02vaprlkyxab.public.blob.vercel-storage.com" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <link rel="alternate" hrefLang="fr-FR" href={CANONICAL} />
      <link rel="alternate" hrefLang="en-US" href={`${CANONICAL}?hl=en`} />
      <link rel="alternate" hrefLang="es-ES" href={`${CANONICAL}?hl=es`} />
      <link rel="alternate" hrefLang="de-DE" href={`${CANONICAL}?hl=de`} />
      <link rel="alternate" hrefLang="it-IT" href={`${CANONICAL}?hl=it`} />
      <link rel="alternate" hrefLang="pt-PT" href={`${CANONICAL}?hl=pt`} />
      <link rel="alternate" hrefLang="ja-JP" href={`${CANONICAL}?hl=ja`} />
      <link rel="alternate" hrefLang="zh-CN" href={`${CANONICAL}?hl=zh`} />
      <link rel="alternate" hrefLang="ko-KR" href={`${CANONICAL}?hl=ko`} />
      <link rel="alternate" hrefLang="ar-SA" href={`${CANONICAL}?hl=ar`} />
      <link rel="alternate" hrefLang="x-default" href={CANONICAL} />

      <div className="mx-auto max-w-[1080px] px-4 pt-3 md:px-6">
        <nav aria-label="Langues" className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="font-semibold tracking-widest text-zinc-400 uppercase mr-1">Langue:</span>
          {(locales as readonly string[]).map((l) => (
            <a key={l} href={l==='fr' ? CANONICAL : `${CANONICAL}?hl=${l}`} className={`rounded-full border px-2.5 py-1 ${locale===l ? 'bg-black text-white border-black font-bold' : 'bg-white border-zinc-200 hover:border-black'}`}>
              {l.toUpperCase()} {l==='fr'?'🇫🇷':l==='en'?'🇬🇧':l==='es'?'🇪🇸':l==='de'?'🇩🇪':l==='it'?'🇮🇹':l==='pt'?'🇵🇹':l==='ja'?'🇯🇵':l==='zh'?'🇨🇳':l==='ko'?'🇰🇷':'🇸🇦'}
            </a>
          ))}
          <span className="ml-2 text-zinc-400 hidden md:inline">fallback FR • ?hl= / cookie neuralocale</span>
        </nav>
      </div>

      <header className="relative overflow-hidden bg-black text-white mt-3">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" aria-hidden />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} aria-hidden />
        <div className="relative mx-auto max-w-[1080px] px-4 py-10 md:px-6 md:py-14">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-zinc-400 uppercase">HERMES LUXURY DIRECT • SKU {SKU} • VIRGIL ABLOH FW21 • {locale.toUpperCase()}</p>
          <div className="mt-4 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <h1 className="text-[28px] font-extrabold leading-[0.98] tracking-tight md:text-[38px]">{t.title}</h1>
              <p className="mt-2 text-[13px] font-semibold text-zinc-300">{t.subtitle}</p>
              <p className="mt-3 max-w-[54ch] text-[14px] leading-relaxed text-zinc-300">{t.description.slice(0, 280)}{t.description.length>280?'…':''}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                <span className="rounded-full bg-white px-3 py-1.5 font-bold tracking-wide text-black">STOCK 1 — PIÈCE UNIQUE</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 tracking-wide">{t.badgeAuth}</span>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 tracking-wide">{t.badgeDhl}</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1.5 font-bold tracking-wide text-black">{t.badgePrice}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#acheter" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-black hover:bg-zinc-100">{t.ctaButton}</a>
                <a href="#galerie" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Voir les 8 HD</a>
              </div>
              <p className="mt-3 text-[11px] text-zinc-500">{t.ctaNote}</p>
            </div>
            <div id="acheter" className="rounded-2xl border border-white/10 bg-white p-5 text-zinc-900 shadow-2xl md:p-6">
              <h2 id="checkout-heading" className="text-[13px] font-bold tracking-widest text-zinc-500 uppercase">{t.ctaTitle}</h2>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-[32px] font-extrabold tracking-tight">4 500 €</span>
                <span className="text-sm text-zinc-500">TTC • port inclus</span>
                <span className="ml-auto rounded-full bg-black px-2.5 py-1 text-[11px] font-bold text-white">FLOOR HOLD</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5 text-[11px]">
                <span className="rounded-full bg-zinc-900 px-2.5 py-1 font-medium text-white">Taille M</span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1">Etat A+ 3x</span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1">{t.badgeVirgil}</span>
              </div>
              <div className="mt-4">
                <LuxuryCheckout />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] leading-tight">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5"><p className="text-lg" aria-hidden>🛡️</p> AUTH<br /><span className="text-zinc-500">VCCM09</span></div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5"><p className="text-lg" aria-hidden>📦</p> DHL<br /><span className="text-zinc-500">+ signature</span></div>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-2.5"><p className="text-lg" aria-hidden>⚡</p> Webhook<br /><span className="text-zinc-500">&lt;5 min sold</span></div>
              </div>
              <p className="mt-3 text-center text-[11px] text-zinc-500"><Link href="/api/luxury/checkout" className="underline decoration-dotted underline-offset-4 hover:text-black">API checkout</Link> • <Link href="/api/luxury/health" className="underline decoration-dotted underline-offset-4 hover:text-black">Health</Link></p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1080px] px-4 py-8 md:px-6">
        <div className="flex flex-col gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 md:flex-row md:items-center md:justify-between" role="status" aria-live="polite">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-[11px] font-extrabold tracking-widest text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-white" aria-hidden /> DERNIERE PIECE</span>
            <div>
              <p className="text-[13px] font-extrabold leading-none text-red-900">1 exemplaire disponible — pas de restock FW21</p>
              <p className="text-[11px] leading-snug text-red-700">Stock reel DB — verifiable /api/luxury/health. Locale: {locale}</p>
            </div>
          </div>
          <div className="min-w-[140px]">
            <div className="h-1.5 overflow-hidden rounded-full bg-red-100"><div className="h-full w-[8%] rounded-full bg-red-600" /></div>
            <p className="mt-1 text-right text-[10px] font-bold tracking-widest text-red-800">STOCK: 1 RESTANT</p>
          </div>
        </div>

        <section aria-labelledby="pourquoi" className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 md:p-6">
          <h2 id="pourquoi" className="text-[18px] font-extrabold tracking-tight">{t.whyTitle}</h2>
          <p className="mt-1 text-[12px] text-zinc-500">10 raisons — impact emotionnel, pas technique — {locale.toUpperCase()} • VCCM09/CA36929 • 4500€ floor</p>
          <div className="mt-4 grid gap-2.5 md:grid-cols-2">
            {points.map((p, i) => (
              <div key={i} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3.5 py-3 text-[12.5px] leading-relaxed text-zinc-800">{p}</div>
            ))}
          </div>
          <p className="mt-3 rounded-xl bg-black p-3 text-[12px] leading-relaxed text-zinc-300">Stock 1 — pas de restock FW21 Virgil Abloh. {t.ctaNote}</p>
        </section>

        <section id="galerie" aria-labelledby="galerie-heading" className="mt-8">
          <h2 id="galerie-heading" className="text-[18px] font-extrabold tracking-tight">Galerie 8 HD — macros contractuelles</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-zinc-600">{t.description.slice(0,160)}...</p>
          <div className="mt-4">
            <LuxuryGallery images={gallery} />
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="mt-8">
          <h2 id="faq-heading" className="text-[18px] font-extrabold tracking-tight">FAQ — {locale.toUpperCase()}</h2>
          <div className="mt-3 space-y-2">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-zinc-200 bg-white open:bg-zinc-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 text-[13px] font-semibold">
                  <span>{f.q}</span>
                  <span aria-hidden className="shrink-0 rounded-full border border-zinc-300 bg-white px-2 py-1 text-xs transition group-open:rotate-180">⌄</span>
                </summary>
                <div className="px-4 pb-4 text-[13px] leading-relaxed text-zinc-600">{f.a}</div>
              </details>
            ))}
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        </section>

        <section aria-labelledby="urgence-heading" className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h2 id="urgence-heading" className="text-[14px] font-extrabold tracking-tight">Urgence honnete — stock 1</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-700">{t.point10}</p>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-bold text-white"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden /> Stock 1 — HOLD 4500€ ferme — {locale}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <h3 className="text-[14px] font-bold">Livraison & destinations</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-700">{t.faqA3}</p>
            <p className="mt-2 text-[11px] text-zinc-500">{t.faqA4}</p>
          </div>
        </section>

        <nav aria-label="Fil d’Ariane" className="mt-8 text-[11px] text-zinc-500">
          <ol className="flex flex-wrap gap-1">
            <li><Link href="/" className="underline underline-offset-4 hover:text-black">Accueil</Link> <span aria-hidden>›</span></li>
            <li><Link href="/luxury" className="underline underline-offset-4 hover:text-black">Luxury</Link> <span aria-hidden>›</span></li>
            <li aria-current="page" className="font-semibold text-zinc-700">{t.title}</li>
          </ol>
        </nav>
        <p className="mt-6 border-t border-zinc-200 pt-4 text-center text-[11px] leading-relaxed text-zinc-500">
          HERMES Luxury Direct — Vente autonome Stripe • AUTH VCCM09/CA36929 • 8 photos HD • {locale.toUpperCase()} • ?hl= / cookie neuralocale • fallback FR
        </p>
      </main>
    </div>
  )
}
