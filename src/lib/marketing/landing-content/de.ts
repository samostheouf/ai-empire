import { LandingContent } from './en'

export const landingContent: LandingContent = {
  hero: {
    headline: 'SaaS-Produkte schneller liefern mit Next.js 14 und KI',
    subheadline: 'Produktionsfertige Vorlagen mit Groq AI API, Stripe-Abrechnung und Authentifizierung — so dass du dich auf dein Produkt konzentrieren kannst, nicht auf Boilerplate-Code.',
    ctaText: 'Kostenlos starten'
  },
  features: [
    {
      title: 'Next.js 14 App Router Vorlagen',
      description: 'Erstellt mit den neuesten Next.js-Mustern. TypeScript, Tailwind CSS und Server-Komponenten direkt aus der Box.'
    },
    {
      title: 'Groq AI API Integration',
      description: 'Schnelle Inferenz von Groq unterstützt. Enthält Streaming-Chat, strukturierte Completions und Dokumentenanalyse-Endpunkte.'
    },
    {
      title: 'Stripe-Abrechnung bereit',
      description: 'Abonnementverwaltung, nutzungsbasierte Preisgestaltung, Kundenportal und Webhook-Handling — alles vorkonfiguriert.'
    },
    {
      title: 'Authentifizierung & Rollen',
      description: 'Integrierte Authentifizierung mit rollenbasiertem Zugriff. Keine Drittanbieter-Auth-Bibliotheken für grundlegende Abläufe nötig.'
    },
    {
      title: 'Admin-Dashboard',
      description: 'Benutzer verwalten, Analysen einsehen und Einstellungen über eine vorgefertigte Admin-Oberfläche konfigurieren.'
    },
    {
      title: 'Kostenlose Stufe verfügbar',
      description: 'Starte mit 100 API-Guthaben. Keine Kreditkarte erforderlich. Upgrade wenn du mehr brauchst.'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Wähle eine Vorlage',
      description: 'Wähle aus 6 produktionsfertigen Vorlagen: SaaS-Starter, Marketplace, Dashboard, Blog, Portfolio oder Landingpage.'
    },
    {
      step: 2,
      title: 'Passe dein Produkt an',
      description: 'Füge deine Geschäftslogik hinzu, konfiguriere deinen Groq API-Schlüssel und richte Stripe ein. Der Boilerplate-Code ist bereits erledigt.'
    },
    {
      step: 3,
      title: 'Bereitstellen und Liefern',
      description: 'Push zu Vercel oder deiner bevorzugten Plattform. Dein SaaS ist bereit für Benutzer.'
    }
  ],
  faq: [
    {
      question: 'Was ist die kostenlose Stufe?',
      answer: 'Die kostenlose Stufe umfasst 100 API-Guthaben, unterstützt von Groq AI. Keine Kreditkarte erforderlich. Du kannst alle Vorlagen und grundlegenden Funktionen ohne Bezahlung nutzen.'
    },
    {
      question: 'Brauche ich eigene API-Schlüssel?',
      answer: 'Ja, du brauchst einen Groq API-Schlüssel (kostenlose Stufe verfügbar auf groq.com) und ein Stripe-Konto für die Abrechnung. AI Empire übernimmt die Integration — du steckst einfach deine Schlüssel ein.'
    },
    {
      question: 'Kann ich diese Vorlagen für kommerzielle Projekte verwenden?',
      answer: 'Ja. Du kannst AI Empire-Vorlagen für persönliche und kommerzielle Projekte verwenden. Du besitzt den Code, den du darauf aufbaust.'
    },
    {
      question: 'Welche Technologien werden verwendet?',
      answer: 'Next.js 14 (App Router), TypeScript, Tailwind CSS, Groq AI API für Inferenz, Stripe für Zahlungen und ein vorgefertigtes Authentifizierungssystem mit rollenbasiertem Zugriff.'
    },
    {
      question: 'Gibt es Dokumentation?',
      answer: 'Ja. Jede Vorlage enthält Einrichtungsanleitungen, API-Referenz und Code-Kommentare. Wir bieten auch Anleitungen für gängige Anpassungsmuster.'
    },
    {
      question: 'Was unterscheidet dies von anderen SaaS-Vorlagen?',
      answer: 'AI Empire konzentriert sich auf funktionierenden Code statt Marketing-Versprechen. Jede Vorlage ist produktionsfertig, enthält KI-API-Integration und kommt mit ehrlicher Dokumentation. Keine gefälschten Testimonials oder aufgeblähte Statistiken.'
    }
  ]
}
