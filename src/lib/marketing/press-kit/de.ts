import type { PressKitBundle } from './types';

export const pressKitBundle: PressKitBundle = {
  language: 'de',
  productDescriptionShort:
    'AI Empire ist eine Entwicklerplattform, die professionelle Next.js 14-Vorlagen mit einer einheitlichen KI-API (Groq und Gemini), Stripe-Abrechnung und Authentifizierung kombiniert — sodass Entwickler KI-gestützte SaaS-Produkte schneller erstellen und bereitstellen können.',
  productDescriptionLong:
    "AI Empire bietet ein komplettes Toolkit für die Erstellung KI-gestützter SaaS-Produkte. Die Plattform bietet produktionsfertige Next.js 14-Vorlagen — darunter NeuraStore (E-Commerce), NeuraBlog (Content-Publishing) und NeuraPortfolio (Entwickler-Portfolio) — jeweils mit modernem responsivem Design, Dark Mode und integrierter SEO-Optimierung.\n\nAlle Vorlagen integrieren sich mit AI Empires einheitlicher API, die Zugang zu Groq- und Gemini-Modellen über einen einzigen Endpoint bietet. Die Plattform umfasst zudem Stripe-Abrechnungsintegration, Authentifizierung und ein Admin-Dashboard, wodurch die typische SaaS-Entwicklungszeit von Monaten auf Tage verkürzt wird.\n\nAI Empire richtet sich an Entwickler, Indie-Hacker, Startup-Gründer und kleine bis mittlere Unternehmen, die KI-gestützte Produkte starten möchten, ohne die Infrastruktur von Grund auf aufzubauen. Die Plattform arbeitet nach einem Freemium-Modell: Die KI-API bietet ein kostenloses Tier mit 100 Credits, und Vorlagen sind zum Einzelkauf (19 € bis 29 €) oder als Komplettpaket (299 €) verfügbar.",
  keyFeatures: [
    'Einheitliche KI-API — Zugang zu Groq- und Gemini-Modellen über einen einzigen Endpoint',
    'Professionelle Next.js 14-Vorlagen — NeuraStore, NeuraBlog, NeuraPortfolio und mehr',
    'Stripe-Abrechnungsintegration — Zahlungen direkt einsetzbar',
    'Authentifizierung inklusive — Benutzerverwaltung ohne Drittanbieter-Setup',
    'Admin-Dashboard — Benutzer, Analysen und Inhalte verwalten',
    'Kostenloses Tier — 100 API-Credits bei der Anmeldung, keine Kreditkarte erforderlich',
    'Responsives Design — Mobile-First-Vorlagen mit Dark Mode',
    'SEO-Optimierung — Meta-Tags, strukturierte Daten und Leistungsoptimierung',
    'Vercel-ready — One-Click-Deployment für alle Vorlagen',
    'JavaScript- und Python-SDKs — Entwicklerfreundliche Integration',
  ],
  pricingTable: [
    {
      name: 'Kostenloses Tier',
      price: '0 €',
      description: 'Starten Sie mit KI-APIs ohne Kosten',
      features: [
        '100 KI-API-Credits',
        'Groq- und Gemini-Zugang',
        'REST-API + SDKs',
        'Community-Support',
        'Keine Kreditkarte erforderlich',
      ],
    },
    {
      name: 'NeuraBlog',
      price: '19 €',
      description: 'Professionelle Blog-Vorlage für Next.js 14',
      features: [
        'MDX-Unterstützung',
        'Dark Mode',
        'RSS-Feed',
        'SEO-Optimierung',
        'Newsletter-Integration',
        'Einmaliger Kauf',
      ],
    },
    {
      name: 'NeuraStore',
      price: '29 €',
      description: 'Komplette E-Commerce-Vorlage für Next.js 14',
      features: [
        'Stripe-Zahlungen',
        'Warenkorb-Verwaltung',
        'Admin-Dashboard',
        'KI-Produktempfehlungen',
        'Responsives Design',
        'Einmaliger Kauf',
      ],
    },
    {
      name: 'NeuraPortfolio',
      price: '29 €',
      description: 'Entwickler-Portfolio-Vorlage für Next.js 14',
      features: [
        'Framer Motion-Animationen',
        'Dark Mode',
        'Kontaktformular',
        'Responsives Design',
        'SEO-Optimierung',
        'Einmaliger Kauf',
      ],
    },
    {
      name: 'Komplettpaket',
      price: '299 €',
      description: 'Alle Vorlagen plus bevorzugter Support',
      features: [
        'Alle 6 Vorlagen',
        'Bevorzugter Support',
        'Kostenlose Updates',
        'Frühzeitiger Zugang zu neuen Vorlagen',
        'Kommerzielle Lizenz',
        'Sparen Sie über 400 € gegenüber dem Einzelkauf',
      ],
    },
  ],
  founderQuote: {
    text: 'Wir haben AI Empire gebaut, weil wir glauben, dass jeder Entwickler KI-gestützte Produkte erstellen sollte, ohne monatelang an der Infrastruktur zu arbeiten. Unsere Vorlagen und unsere API ermöglichen es Ihnen, sich auf das zu konzentrieren, was wirklich zählt — Ihr Produkt und Ihre Nutzer.',
    attribution: 'AI Empire-Team',
    title: 'Gründer von AI Empire',
  },
  logoUsage: {
    primaryUsage: 'Verwenden Sie das AI Empire-Logo auf einem weißen oder dunklen Hintergrund mit ausreichendem Kontrast.',
    clearSpace: 'Halten Sie einen minimalen Freiraum ein, der der Höhe des „A" im Logo auf allen Seiten entspricht.',
    minimumSize: 'Das Logo sollte nicht kleiner als 120 px breit (digital) oder 30 mm (Druck) reproduziert werden.',
    donts: [
      'Logo nicht strecken, drehen oder verzerren',
      'Logo-Farben nicht ändern',
      'Logo nicht auf unübersichtigen Hintergründen ohne Container platzieren',
      'Keine Effekte wie Schatten, Glühen oder Verläufe zum Logo hinzufügen',
      'Logo-Elemente nicht umordnen oder verändern',
    ],
  },
  contactInfo: {
    press: 'presse@ai-empire.dev',
    partnerships: 'partner@ai-empire.dev',
    general: 'hallo@ai-empire.dev',
    website: 'https://ai-empire-steel.vercel.app',
  },
  boilerplate:
    'AI Empire ist eine Entwicklerplattform, die professionelle Next.js 14-Vorlagen mit integrierten KI-APIs (Groq und Gemini), Stripe-Abrechnung und Authentifizierung bietet. Gegründet, um Entwicklern zu helfen, KI-gestützte SaaS-Produkte schneller zu erstellen, bedient AI Empire Entwickler, Indie-Hacker und Startup-Gründer weltweit. Die Plattform bietet ein kostenloses API-Tier und Vorlagen ab 19 €. Weitere Informationen finden Sie unter ai-empire-steel.vercel.app.',
};
