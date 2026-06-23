import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Onboarding-Sequenz — 5 Tage',
  type: 'onboarding',
  duration: '5 Tage',
  trigger: 'Neuer Benutzer registriert',
  goal: 'Benutzer aktivieren: Erster API-Aufruf + erste Template-Kauf',
  emails: [
    {
      day: 0,
      subject: 'Willkommen bei AI Empire — Deine KI-API ist bereit',
      preview: 'Du hast 100 kostenlose Credits. Starte jetzt.',
      body: `Hallo [Vorname],

willkommen bei AI Empire!

Du hast jetzt Zugang zu:
- 100 kostenlose KI-Credits
- GPT-4-, Groq- und Gemini-APIs
- Professionelle Next.js 14 Templates
- Technischer Support

Dein API-Schlüssel: [API_KEY]
Dashboard: https://ai-empire-steel.vercel.app/dashboard

Nächster Schritt: Mache deinen ersten API-Aufruf in 2 Minuten.

1. Gehe zu deinem Dashboard
2. Kopiere deinen API-Schlüssel
3. Führe diesen curl aus:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer DEIN_SCHLÜSSEL" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Hallo, wie geht es dir?"}'

Das war's! Du hast jetzt Zugang zur KI.

Bis bald,
Das AI Empire-Team`,
      cta: 'Meinen ersten Test starten',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 Tipps, um das Beste aus AI Empire herauszuholen',
      preview: 'Ratschläge für mehr.',
      body: `Hallo [Vorname],

gestern hast du dein Konto erstellt. Heute hier sind 3 Tipps, um weiterzukommen:

Tipp 1: Erkunde die Templates
Unsere Templates sind so gestaltet, dass sie sofort einsatzbereit sind. Beginne mit NeuraBlog (29 €) oder NeuraStore (45 €).

Tipp 2: Nutze die KI-APIs
Generiere Inhalte, analysiere Texte, erstelle einen Chatbot. Die APIs sind kostenlos, bis deine 100 Credits aufgebraucht sind.

Tipp 3: Integriere es in dein Projekt
Unsere Tutorials zeigen dir, wie du AI Empire in 5 Minuten in ein Next.js-Projekt integrierst.

Tutorials: https://ai-empire-steel.vercel.app/docs

Viel Spaß beim Entdecken!
Das AI Empire-Team`,
      cta: 'Tutorials ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'Das perfekte Template für dein Projekt',
      preview: 'Entdecke unsere Templates für deine Bedürfnisse.',
      body: `Hallo [Vorname],

du möchtest ein SaaS erstellen? Hier ist das Template, das du brauchst:

E-Commerce → NeuraStore (45 €)
Next.js 14 E-Commerce-Template mit Warenkorb, Stripe-Zahlungen, Admin-Dashboard.

Blog → NeuraBlog (29 €)
Premium-Blog mit SEO-Optimierung, Kommentarsystem, integriertem Newsletter.

Portfolio → NeuraPortfolio (45 €)
Professionelles Portfolio mit Animationen, Formularen, dunklem Modus.

Komplett-Paket → 6 Templates (469 €)
Alle unsere Templates + bevorzugter Support + kostenlose Updates.

Nutze den Code WELCOME10 für 10% Rabatt auf deinen ersten Kauf.

Das AI Empire-Team`,
      cta: 'Templates entdecken',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'So startest du schnell ein SaaS mit AI Empire',
      preview: 'Baue dein Projekt mit unseren einsatzbereiten Templates.',
      body: `Hallo [Vorname],

ein SaaS zu starten erfordert keine Monate der Entwicklung mehr.

Mit AI Empire kannst du Folgendes erreichen:
- Eine vollständige E-Commerce-Website in 24 Stunden mit NeuraStore (45 €)
- Stripe bereits integriert und bereit, Zahlungen anzunehmen
- In wenigen Klicks auf Vercel bereitstellen
- Admin-Dashboard im Template enthalten

NeuraStore beinhaltet:
- Funktionierenden Warenkorb
- Produkt- und Bestandsverwaltung
- Sichere Zahlungen über Stripe
- Vollständige Admin-Oberfläche
- Responsive Design und dunkles Modus

Beginne mit der Auswahl des Templates, das zu deinem Projekt passt.

Das AI Empire-Team`,
      cta: 'Templates ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '20% Rabatt auf dein erstes Template',
      preview: 'Ein Willkommensangebot für dich.',
      body: `Hallo [Vorname],

vielen Dank für deine Treue! Hier ist ein Willkommensrabatt:
20% Rabatt auf dein erstes Template.

Code: WELCOME20

Optionen:
- NeuraBlog: 29 € → 23,20 €
- NeuraStore: 45 € → 36 €
- NeuraPortfolio: 45 € → 36 €
- Komplett-Paket: 469 € → 375,20 €

Jetzt ist der richtige Zeitpunkt zu handeln.

Das AI Empire-Team`,
      cta: '20% Rabatt sichern',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Nurture-Sequenz — 7 Tage',
  type: 'nurture',
  duration: '7 Tage',
  trigger: 'Benutzer registriert, aber noch nicht gekauft',
  goal: 'Kostenlosen Benutzer in zahlenden Kunden verwandeln',
  emails: [
    {
      day: 0,
      subject: 'Das kannst du mit AI Empire erstellen',
      preview: 'Konkrete Beispiele zur Inspiration.',
      body: `Hallo [Vorname],

du hast ein AI Empire-Konto, aber noch nicht alles erkundet, was du erstellen kannst.

Hier sind 5 konkrete Projekte:

1. SEO-optimierter Blog → NeuraBlog
2. E-Commerce mit Stripe → NeuraStore
3. Professionelles Portfolio → NeuraPortfolio
4. KI-Chatbot → Integriere unsere APIs
5. Vollständiges SaaS → Premium-Paket

Jedes Projekt ist in 24 Stunden umsetzbar.

Das AI Empire-Team`,
      cta: 'Projekte erkunden',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'Der #1-Fehler von Indie-Hackern',
      preview: 'So vermeidest du Zeitverschwendung.',
      body: `Hallo [Vorname],

Der #1-Fehler von Indie-Hackern: Alles selbst entwickeln.

Du verbringst Wochen mit Programmieren:
- Authentifizierung (AI Empire macht es für dich)
- Zahlungen (Stripe ist bereits integriert)
- Dashboard (Es ist bereits fertig)
- Design (Die Templates sind professionell)

Währenddessen bringen deine Konkurrenten ihr Produkt auf den Markt.

AI Empire spart dir 6 Monate Entwicklung.

Das AI Empire-Team`,
      cta: 'Templates ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Tausende Entwickler nutzen bereits AI Empire',
      preview: 'Werde Teil einer wachsenden Community.',
      body: `Hallo [Vorname],

Tausende Entwickler vertrauen bereits auf AI Empire.

Das haben sie erstellt:
- Dutzende E-Commerce-SaaS
- Professionelle Blogs
- Kreative Portfolios
- KI-Chatbots

Und du? Was wirst du erstellen?

Das AI Empire-Team`,
      cta: 'Community beitreten',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'AI Empire ROI in Zahlen',
      preview: 'Zahlen, für sich selbst sprechen.',
      body: `Hallo [Vorname],

hier ist der tatsächliche ROI von AI Empire:

- Durchschnittliche Kosten: 50 € (1 Template + KI-Credits)
- Gesparte Zeit: 6 Monate Entwicklung
- Ein einziger Kunde mit 50 €/Monat reicht aus, um deine Investition hereinzuholen

Der Rest? Reiner Gewinn.

Das AI Empire-Team`,
      cta: 'Preise ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Entdecke NeuraStore — Das E-Commerce-Template',
      preview: 'Unser beliebtestes Template.',
      body: `Hallo [Vorname],

NeuraStore ist unser beliebtestes E-Commerce-Template.

Was es enthält:
- Warenkorb
- Stripe-Zahlungen
- Produktverwaltung
- Admin-Dashboard
- Responsive Design
- Dunkles Modus

Preis: 45 € (statt 750 €+ für einen Entwickler)

Das AI Empire-Team`,
      cta: 'NeuraStore entdecken',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'So integrierst du AI Empire in 5 Minuten',
      preview: 'Ein schnelles Tutorial zum Einstieg.',
      body: `Hallo [Vorname],

du möchtest AI Empire in dein Projekt integrieren? So geht's:

1. Installiere das Template
npx create-next-app@latest mein-saas --template ai-empire

2. Konfiguriere deine APIs
Kopiere deinen API-Schlüssel in .env.local

3. Stelle auf Vercel bereit
git push und deine Website ist online

Das war's! In 5 Minuten hast du dein SaaS.

Das AI-Empire-Team`,
      cta: 'Tutorial ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Early-Bird-Angebot: 30% Rabatt auf Templates',
      preview: 'Ein Angebot für frühe Nutzer.',
      body: `Hallo [Vorname],

du bist seit [NUMBER] Tagen bei uns.

Um dir zu danken, hier ist ein Angebot:
30% Rabatt auf alle Templates.

Code: EARLY30

Optionen:
- NeuraBlog: 29 € → 20,30 €
- NeuraStore: 45 € → 31,50 €
- NeuraPortfolio: 45 € → 31,50 €
- Komplett-Paket: 469 € → 328,30 €

Das AI Empire-Team`,
      cta: '30% Rabatt sichern',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Win-Back-Sequenz — Reaktivierung',
  type: 'winback',
  duration: '21 Tage',
  trigger: 'Benutzer seit 30 Tagen inaktiv',
  goal: 'Inaktiven Benutzer reaktivieren und binden',
  emails: [
    {
      day: 0,
      subject: '[Vorname], du fehlst uns',
      preview: 'Wir haben Neuigkeiten für dich.',
      body: `Hallo [Vorname],

wir haben bemerkt, dass du AI Empire seit einer Weile nicht mehr genutzt hast.

Können wir dir helfen?

- Brauchst du ein Tutorial?
- Technisches Problem?
- Eine fehlende Funktion?

Wir sind für dich da. Antworte auf diese E-Mail — wir lesen alles.

Das AI Empire-Team`,
      cta: 'Zum Dashboard zurückkehren',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Das hast du bei AI Empire verpasst',
      preview: 'Neue Funktionen, die dir gefallen werden.',
      body: `Hallo [Vorname],

seit deinem letzten Besuch haben wir hinzugefügt:

- Neue Templates (NeuraBlog, NeuraStore)
- Verbesserte KI-APIs (GPT-4, Groq, Gemini)
- Überarbeitetes Dashboard
- Optimierte Gestaltung

Du hast nichts verpasst — jetzt ist der richtige Zeitpunkt zurückzukehren.

Das AI Empire-Team`,
      cta: 'Neuigkeiten entdecken',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 kostenlose Credits zum Zurückkehren',
      preview: 'Ein Geschenk, um dir zu zeigen, dass wir an dich denken.',
      body: `Hallo [Vorname],

um dir zu zeigen, dass wir an dich denken, hier sind 50 kostenlose KI-Credits.

Dein Guthaben: +50 Credits
Gültig für 30 Tage

Nutze sie für:
- Inhalt generieren
- Text analysieren
- Chatbot erstellen
- Unsere APIs testen

Das AI Empire-Team`,
      cta: 'Meine Credits abholen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'Deine Credits laufen in 16 Tagen ab',
      preview: 'Vergiss nicht, sie zu nutzen.',
      body: `Hallo [Vorname],

du hast 50 kostenlose Credits, die in 16 Tagen ablaufen.

Läuft ab am [DATE]

Nutze sie für:
- Dein erstes Projekt erstellen
- Unsere APIs testen
- AI Empire erkunden

Das AI Empire-Team`,
      cta: 'Meine Credits nutzen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'Deine Credits laufen bald ab',
      preview: 'Vergiss nicht, sie zu nutzen.',
      body: `Hallo [Vorname],

deine 50 kostenlosen Credits laufen in 7 Tagen ab.

Läuft ab am [DATE]

Danach verlierst du deine Credits.

Das ist deine letzte Chance, sie zu nutzen.

Das AI Empire-Team`,
      cta: 'Meine Credits nutzen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Upsell-Sequenz — Upgrade auf Pro-Plan',
  type: 'upsell',
  duration: '14 Tage',
  trigger: 'Benutzer mit mehr als 100 API-Aufrufen oder 30 Tagen Aktivität',
  goal: 'Kostenlosen Benutzer in Pro-Kunden verwandeln',
  emails: [
    {
      day: 0,
      subject: '[Vorname], du bist kurz vor dem Limit',
      preview: 'Deine Nutzung steigt — so skalierst du.',
      body: `Hallo [Vorname],

gute Nachricht: Du nutzt AI Empire intensiv!

Hier ist deine aktuelle Nutzung:
- API-Aufrufe: [NUMBER]/100
- Verbleibende Credits: [NUMBER]
- Aktive Tage: [NUMBER]

Du bist kurz vor dem Limit des kostenlosen Plans.

Der Pro-Plan gibt dir:
- Unbegrenzte API-Aufrufe
- Bevorzugten Zugang
- Dedizierten Support
- Premium-Templates

Das AI Empire-Team`,
      cta: 'Auf Pro upgraden',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'Der Pro-Plan: Was du verpasst',
      preview: 'Exklusive Funktionen.',
      body: `Hallo [Vorname],

hier ist, was du mit dem kostenlosen Plan verpasst:

Pro-Plan (99 €/Monat):
- Unbegrenzte API-Aufrufe
- Bevorzugter Zugang zu neuen Funktionen
- Dedizierter Support (Antwort innerhalb von 2h)
- Premium-Templates (199 € Wert)
- Fortgeschrittenes Analytics-Dashboard
- Individuelle Webhook-API

Das AI Empire-Team`,
      cta: 'Pro entdecken',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '20% Rabatt auf deinen ersten Pro-Monat',
      preview: 'Ein Angebot für dich.',
      body: `Hallo [Vorname],

um dir für deine Treue zu danken, hier ist ein Angebot:
20% Rabatt auf deinen ersten Pro-Monat.

Statt 99 €/Monat → 79 €/Monat

Code: PRO20

Upgrade auf Pro:
- Unbegrenzte API-Aufrufe
- Dedizierter Support
- Premium-Templates
- Fortgeschrittene Analytics

Das AI Empire-Team`,
      cta: 'Mein Angebot aktivieren',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'So optimieren Pro-Benutzer ihre Kosten',
      preview: 'Ein Blick auf die Vorteile des Pro-Plans.',
      body: `Hallo [Vorname],

so optimieren unsere Pro-Benutzer ihre Kosten:

Mit dem Pro-Plan (99 €/Monat):
- Reduzierte KI-Kosten dank optimierter APIs
- Produktivitätssteigerung mit Premium-Templates
- Dedizierter Support zur schnellen Problembehandlung
- Fortgeschrittene Analytics zur Leistungsverfolgung

Der Pro-Plan ist für ernsthafte Projekte konzipiert, die mehr Leistung benötigen.

Das AI Empire-Team`,
      cta: 'Auf Pro upgraden',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '20% auf den Pro-Plan — Letzte Chance',
      preview: 'Verpasse dieses Angebot nicht.',
      body: `Hallo [Vorname],

dein 20%-Angebot auf den Pro-Plan ist noch verfügbar.

79 €/Monat statt 99 €/Monat

Upgrade auf Pro:
- Unbegrenzte API-Aufrufe
- Dedizierter Support
- Premium-Templates
- Fortgeschrittene Analytics

Das ist eine gute Gelegenheit, den Pro-Plan zu reduzierten Konditionen zu testen.

Das AI Empire-Team`,
      cta: '20% Rabatt sichern',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Vielen Dank [Vorname] — Wir sind da, wenn du es dir anders überlegst',
      preview: 'Kein Druck. Wir sind für dich da.',
      body: `Hallo [Vorname],

wir verstehen, dass der Pro-Plan vielleicht gerade nicht das Richtige für dich ist.

Kein Problem. Wir sind da, wenn du es dir anders überlegst.

In der Zwischenzeit kannst du weiterhin:
- Den kostenlosen Plan nutzen (100 Credits/Monat)
- Templates erkunden (ab 29 €)
- Uns kontaktieren, wenn du Fragen hast

Wir sind für dich da.

Das AI Empire-Team`,
      cta: 'Kontaktiere uns',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
