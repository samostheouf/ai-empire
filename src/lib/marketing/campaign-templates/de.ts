export interface CampaignTemplate {
  id: string
  name: string
  type: 'product-launch' | 'seasonal' | 'referral' | 'black-friday' | 'new-year'
  duration: string
  channels: string[]
  budget: string
  objective: string
  content: CampaignTemplateContent
  schedule: CampaignSchedule[]
  metrics: CampaignMetrics
}

export interface CampaignTemplateContent {
  headline: string
  subheadline: string
  body: string
  cta: string
  hashtags: string[]
  emailSubject: string
  emailBody: string
  socialPost: string
}

export interface CampaignSchedule {
  day: string
  action: string
  channel: string
}

export interface CampaignMetrics {
  targetReach: string
  targetConversion: string
  targetRevenue: string
}

// ============================================================
// PRODUKTLAUNCH-KAMPAGNE
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Produktlaunch — AI Empire',
  type: 'product-launch',
  duration: '14 Tage',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: '500 Anmeldungen und €3,000 Umsatz im ersten Monat generieren',
  content: {
    headline: '🚀 Neu: Die AI-Revolution für SaaS ist da!',
    subheadline: 'Starte dein SaaS in 24h mit Next.js 14 Templates + leistungsstarken KI-APIs',
    body: `Du träumst davon, dein SaaS zu starten, aber die Entwicklung dauert Wochen?

AI Empire ändert das Spiel:
✅ Professionelle Next.js 14 Templates — moderne Designs, responsive, Dark Mode
✅ Integrierte KI-APIs — GPT-4, Groq, Gemini einsatzbereit
✅ Stripe + Auth inklusive — Zahlungen und Authentifizierung in 5 Minuten
✅ Vollständiges Admin-Dashboard — verwalte Nutzer, Analytics, Rechnungen

🔥 Launch-Angebot: -30% auf alle Templates für 72 Stunden!

Schließe dich den frühen Nutzern an, die bereits ihr SaaS mit AI Empire gestartet haben.
Verpasse diese Chance nicht — das Angebot endet am [DATE].`,
    cta: '🚀 Jetzt starten — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#KI'
    ],
    emailSubject: '🚀 Es ist offiziell: AI Empire ist live! -30% für dich',
    emailBody: `Hallo [First Name],

Der Tag ist gekommen. AI Empire ist endlich live!

Hier ist, was wir anbieten:
🎨 6 professionelle Next.js 14 Templates (€49-199)
🤖 Integrierte KI-APIs (GPT-4, Groq, Gemini)
💳 Stripe + Auth konfiguriert
📊 Vollständiges Admin-Dashboard

🎁 Exklusives Angebot: -30% auf alle Templates nur für 72 Stunden.

Verwende den Code LAUNCH30 an der Kasse.

[CTA: Templates entdecken →]

Bis bald,
Das AI-Empire-Team 🇫🇷`,
    socialPost: `🚀 AI Empire ist endlich LIVE!

Die Plattform, die kombiniert:
✅ Pro Next.js 14 Templates
✅ Integrierte KI-APIs
✅ Stripe + Auth inklusive
✅ Admin-Dashboard

🎁 -30% für 72h mit Code LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'T-7', action: 'Teaser in sozialen Medien', channel: 'Twitter/X, LinkedIn' },
    { day: 'T-3', action: 'Teaser-Email an Newsletter-Abonnenten', channel: 'Email' },
    { day: 'T-1', action: 'Countdown in Instagram Stories', channel: 'Instagram' },
    { day: 'T0', action: 'Offizieller Launch — Post + Email + Ads', channel: 'Alle Kanäle' },
    { day: 'T+1', action: 'Early-Adopter-Testimonials', channel: 'Twitter/X, LinkedIn' },
    { day: 'T+3', action: '-30%-Angebot-Erinnerung', channel: 'Email, Twitter' },
    { day: 'T+5', action: 'Tutorial "So erstellst du dein erstes SaaS"', channel: 'YouTube, Blog' },
    { day: 'T+7', action: 'Ende des -30%-Angebots', channel: 'Email, Social' },
    { day: 'T+10', action: 'Kunden-Case-Study', channel: 'LinkedIn, Blog' },
    { day: 'T+14', action: 'Zusammenfassung + Testimonials', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Zielgruppe (je nach Kampagne)',
    targetConversion: '1-2% Konversionsrate',
    targetRevenue: 'Proportional zum Werbebudget'
  }
}

// ============================================================
// SAISONALE PROMOTIONS-KAMPAGNE
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Saisonale Promotion — Frühling/Sommer',
  type: 'seasonal',
  duration: '21 Tage',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Umsatz um 40% während der Sommerzeit steigern',
  content: {
    headline: '☀️ AI Empire Sommer-Sale — Bis zu -40%!',
    subheadline: 'Sommer ist zum Launchen deines SaaS da, nicht zum Chillen am Strand',
    body: `Der Sommer naht und ist der perfekte Zeitpunkt, dein Projekt zu boosten!

🌞 Frühling/Sommer Sonderangebote:
- NeuraStore (E-Commerce-Template): €39 → €29 (-25%)
- NeuraBlog (Blog-Template): €29 → €19 (-35%)
- Komplett-Bundle (6 Templates): €599 → €359 (-40%)

⚡ Warum Sommer?
→ Weniger Wettbewerb im Markt
→ Mehr Zeit zum Bauen vor der Herbstsaison
→ Startups, die im Sommer starten, kommen im September mit einem Produkt

⏱️ Angebot gültig von [START_DATUM] bis [END_DATUM]

Nutze den Code ETE2024 für -40% auf das Bundle.`,
    cta: '☀️ Schnapp dir die Angebote — -40%',
    hashtags: [
      '#AIEmpire', '#Sale', '#Sommer2024', '#SaaS', '#Templates',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ Sommer-Sale: -40% auf alle AI Empire Templates!',
    emailBody: `Hallo [Vorname],

Der Sommer kommt und wir haben ein Angebot, das du nicht ausschlagen kannst! 🌞

🌞 Sonderangebote:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- 6-Template-Bundle: €599 → €359

⏰ Angebot gültig bis [END_DATUM]

Nutze den Code ETE2024 an der Kasse.

[CTA: Angebote ansehen →]

Einen schönen Sommer!
Das AI-Empire-Team 🇫🇷`,
    socialPost: `☀️ AI EMPIRE SOMMER-SALE ☀️

-40% auf das Komplett-Bundle:
✅ 6 Next.js 14 Templates
✅ Integrierte KI-APIs
✅ Prioritäts-Support

Code: ETE2024
⏰ Gültig bis [DATUM]

👉 ai-empire-steel.vercel.app

#AIEmpire #Sale #Sommer2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'T-3', action: 'Teaser "Etwas kommt diesen Sommer..."', channel: 'Twitter/X, Instagram' },
    { day: 'T0', action: 'Offizielle Sale-Ankündigung', channel: 'Alle Kanäle' },
    { day: 'T+3', action: 'Kunden-Testimonial + Vorher/Nachher', channel: 'LinkedIn, Facebook' },
    { day: 'T+7', action: 'Mitte-Erinnerung + begrenzter Vorrat', channel: 'Email' },
    { day: 'T+10', action: 'Tutorial "Starte dein SaaS diesen Sommer"', channel: 'YouTube, Blog' },
    { day: 'T+14', action: 'Letzte Tage — Dringlichkeit', channel: 'Alle Kanäle' },
    { day: 'T+18', action: 'Letzte Chance', channel: 'Email, Twitter' },
    { day: 'T+21', action: 'Sale endet — Zusammenfassung', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Zielgruppe (je nach Kampagne)',
    targetConversion: '1-2% Konversionsrate',
    targetRevenue: 'Proportional zum Werbebudget'
  }
}

// ============================================================
// EMPFEHLUNGSPROGRAMM
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Empfehlungsprogramm — Gutschriften verdienen',
  type: 'referral',
  duration: '30 Tage',
  channels: ['Email', 'Twitter/X', 'LinkedIn'],
  budget: '€500',
  objective: 'Empfehlungen generieren und Nutzerbasis vergrößern',
  content: {
    headline: '💸 Empfehlungen belohnen — Verdiene KI-Gutschriften!',
    subheadline: 'Teile AI Empire mit Freunden und verdiene Credits für KI-APIs',
    body: `Du liebst AI Empire? Teile es mit deinen Freunden!

💰 Unser Empfehlungsprogramm:
✅ Für jede Empfehlung: 500 KI-Gutschriften
✅ Wenn dein Freund sich registriert: 1000 Gutschriften额外
✅ Top-Empfehler: Exklusive Templates

📋 So funktioniert es:
1. Teile deinen personalisierten Link
2. Dein Freund registriert sich
3. Du erhältst automatisch deine Gutschriften

Jetzt deinen Link teilen und Gutschriften verdienen!`,
    cta: '💸 Gutschriften verdienen',
    hashtags: [
      '#AIEmpire', '#Referral', '#KIGutschriften', '#SaaS',
      '#Empfehlung', '#Nebeneinkommen', '#NextJS', '#Startup'
    ],
    emailSubject: '💸 Verdiene KI-Gutschriften mit unserem Empfehlungsprogramm',
    emailBody: `Hallo [Vorname],

Wir haben ein neues Empfehlungsprogramm gestartet und du kannst davon profitieren!

💰 Was du bekommst:
- 500 Gutschriften pro Empfehlung
- 1000 Gutschriften wenn dein Freund sich registriert
- Exklusive Belohnungen für Top-Empfehler

📋 So funktioniert es:
1. Teile deinen Link: [REFERRAL_LINK]
2. Dein Freund registriert sich
3. Automatische Gutschriften

[CTA: Jetzt teilen →]

Viel Erfolg!
Das AI-Empire-Team 🇫🇷`,
    socialPost: `💸 NEUES EMPFEHLUNGSPROGRAMM 💸

Teile AI Empire und verdiene KI-Gutschriften:
✅ 500 Gutschriften pro Empfehlung
✅ 1000 Gutschriften bei Registrierung
✅ Exklusive Belohnungen

Teile deinen Link und starte jetzt!

#AIEmpire #Referral #KIGutschriften #SaaS #Nebeneinkommen`
  },
  schedule: [
    { day: 'T0', action: 'Programm-Start — Email + Social', channel: 'Alle Kanäle' },
    { day: 'T+7', action: 'Rangliste der Top-Empfehler', channel: 'Email, Twitter' },
    { day: 'T+14', action: 'Erinnerung + Bonuswoche', channel: 'Email' },
    { day: 'T+21', action: 'Letzte Chance für Bonus', channel: 'Alle Kanäle' },
    { day: 'T+30', action: 'Ergebnisse + Gewinner', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Zielgruppe (je nach Kampagne)',
    targetConversion: '2-3% Empfehlungsrate',
    targetRevenue: 'Wachstum durch Empfehlungen'
  }
}

// ============================================================
// BLACK FRIDAY-KAMPAGNE
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday — Das größte Angebot des Jahres',
  type: 'black-friday',
  duration: '7 Tage (20. November - 26. November)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,000',
  objective: 'Rekordumsatz mit dem größten Sale des Jahres',
  content: {
    headline: '🖤 BLACK FRIDAY — -50% auf ALLES!',
    subheadline: 'Das größte Angebot des Jahres. Nur für 7 Tage.',
    body: `🖤 BLACK FRIDAY IST DA!

Das ist kein normales Angebot. Das ist DAS Angebot des Jahres.

🎁 Black Friday Deals:
- NeuraStore: €39 → €19 (-50%)
- NeuraBlog: €29 → €14 (-50%)
- Komplett-Bundle: €599 → €299 (-50%)
- Enterprise: €199 → €99 (-50%)

🔥 Warum du zugreifen solltest:
→ Das sind die niedrigsten Preise, die wir jemals hatten
→ Du sparst bis zu €300 pro Template
→ Das Angebot gilt NUR diese Woche

⏱️ Angebot endet am 26. November um 23:59 Uhr

Nutze den Code BLACKFRIDAY50 an der Kasse.`,
    cta: '🖤 -50% sichern — Black Friday',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#BlackFriday2024', '#Sale',
      '#SaaS', '#Templates', '#Angebot', '#NextJS', '#KI'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% auf ALLES bei AI Empire!',
    emailBody: `Hallo [Vorname],

🖤 BLACK FRIDAY IST DA!

Das ist unser größtes Angebot des Jahres:

- NeuraStore: €39 → €19
- NeuraBlog: €29 → €14
- Komplett-Bundle: €599 → €299

⏰ Angebot endet am 26. November!

Nutze den Code BLACKFRIDAY50.

[CTA: Jetzt -50% sichern →]

Das AI-Empire-Team 🇫🇷`,
    socialPost: `🖤 BLACK FRIDAY bei AI EMPIRE 🖤

-50% auf ALLES! Das größte Angebot des Jahres.

🎁 Deals:
- NeuraStore: €39 → €19
- Komplett-Bundle: €599 → €299

Code: BLACKFRIDAY50
⏰ Nur bis 26. November!

#AIEmpire #BlackFriday #Sale #SaaS`
  },
  schedule: [
    { day: 'T-3', action: 'Teaser "Bereite dich auf das größte Angebot vor..."', channel: 'Twitter/X, Instagram' },
    { day: 'T-1', action: 'Countdown-Email', channel: 'Email' },
    { day: 'T0', action: 'Black Friday — Alle Deals live', channel: 'Alle Kanäle' },
    { day: 'T+1', action: 'Customer-Favoriten highlighten', channel: 'LinkedIn, Facebook' },
    { day: 'T+3', action: 'Letzte 3 Tage Erinnerung', channel: 'Email, Twitter' },
    { day: 'T+5', action: 'Heute: Letzte 48 Stunden', channel: 'Alle Kanäle' },
    { day: 'T+7', action: 'Sale endet — Danke + Zusammenfassung', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Zielgruppe (je nach Kampagne)',
    targetConversion: '3-5% Conversion-Rate',
    targetRevenue: 'Höchster Umsatz des Jahres'
  }
}

// ============================================================
// NEUJAHR-KAMPAGNE
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'Neujahr — SaaS-Vorsätze 2025',
  type: 'new-year',
  duration: '14 Tage (26. Dezember - 9. Januar)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Jahresend-Konvertierungen und stark im Januar starten',
  content: {
    headline: '🎆 2025: Starte dein SaaS dieses Jahr!',
    subheadline: 'Neues Jahr, neues SaaS. Starte stark mit AI Empire.',
    body: `2025 ist DEIN Jahr. 🎆

Du hast deine Idee letztes Jahr aufgeschrieben. Jetzt, werde aktiv.

🚀 Neujahr-Angebot:
- -25% auf alle Templates mit Code NEWYEAR2025
- 500 kostenlose KI-Gutschriften zum Starten
- Prioritätszugang zu neuen 2025-Features

🎯 Vorsätze für 2025:
✅ "Ich starte mein SaaS" → Erledigt in 24h mit AI Empire
✅ "Ich verdiene online" → E-Commerce-Templates + Stripe inklusive
✅ "Ich lerne KI" → Integrierte KI-APIs + Tutorials
✅ "Ich digitalisiere mich" → Vollständiges Admin-Dashboard

⏱️ Angebot vom 26. Dezember bis 9. Januar nur.

Mache 2025 zu deinem Jahr des Erfolgs.`,
    cta: '🎆 2025 mit AI Empire starten',
    hashtags: [
      '#AIEmpire', '#Neujahr', '#2025', '#Vorsätze', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#KI'
    ],
    emailSubject: '🎆 Neues Jahr, neues SaaS: -25% + 500 kostenlose Gutschriften!',
    emailBody: `Hallo [First Name],

Frohes neues Jahr! 🎆

2025 ist das Jahr, in dem du dein SaaS startest. Und wir sind hier, um zu helfen.

🎁 Neujahr-Angebot:
- -25% auf alle Templates
- 500 kostenlose KI-Gutschriften
- Prioritätszugang zu 2025-Features

Code: NEWYEAR2025

⏰ Angebot vom 26. Dezember bis 9. Januar.

Mache dieses Jahr zum guten Jahr.

[CTA: Angebote entdecken →]

Frohes neues Jahr und viel Glück!
Das AI-Empire-Team 🇫🇷`,
    socialPost: `🎆 2025: DEIN SAAS-JAHR! 🎆

Neues Jahr, neuer Anfang.

🎁 Sonderangebot:
✅ -25% auf Templates
✅ 500 kostenlose KI-Gutschriften
✅ Prioritätszugang 2025

Code: NEWYEAR2025
⏰ Vom 26.12. bis 09.01

👉 ai-empire-steel.vercel.app

#AIEmpire #Neujahr #2025 #SaaS #Vorsätze`
  },
  schedule: [
    { day: '26. Dezember', action: 'Email "Frohes neues Jahr — hier ist dein Geschenk"', channel: 'Email' },
    { day: '27. Dezember', action: 'Beitrag "2025-Vorsätze: Starte dein SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '30. Dezember', action: 'Angebots-Erinnerung + Testimonials', channel: 'Email, Twitter' },
    { day: '1. Januar', action: 'Nachricht "Frohes neues Jahr — wir sind für dich da"', channel: 'Email, Social' },
    { day: '2. Januar', action: 'Tutorial "5 Schritte zum SaaS-Start im Januar"', channel: 'Blog, YouTube' },
    { day: '5. Januar', action: 'Sozialer Beweis + Dringlichkeit', channel: 'Twitter, Instagram' },
    { day: '7. Januar', action: 'Letzte Chance', channel: 'Email' },
    { day: '9. Januar', action: 'Angebot endet — Zusammenfassung + Vorschau 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 Personen',
    targetConversion: '400 Anmeldungen (1%)',
    targetRevenue: '€5,000 (200 × €25 Ø)'
  }
}

// ============================================================
// HILFSFUNKTIONEN
// ============================================================

export function getAllCampaignTemplates(): CampaignTemplate[] {
  return [
    productLaunchTemplate,
    seasonalPromotionTemplate,
    referralProgramTemplate,
    blackFridayTemplate,
    newYearTemplate,
  ]
}

export function getCampaignTemplateByType(type: CampaignTemplate['type']): CampaignTemplate | undefined {
  return getAllCampaignTemplates().find(t => t.type === type)
}

export function generateCampaignTemplateId(): string {
  return `campaign_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

export function generateEmailBlast(template: CampaignTemplate, recipientName: string): {
  subject: string
  body: string
  cta: string
} {
  return {
    subject: template.content.emailSubject.replace('[First Name]', recipientName),
    body: template.content.emailBody.replace(/\[First Name\]/g, recipientName),
    cta: template.content.cta,
  }
}

export function generateTemplateSocialPost(template: CampaignTemplate): string {
  return template.content.socialPost
}

export function formatScheduleForCalendar(schedule: CampaignSchedule[]): string {
  return schedule.map(s => `${s.day} | ${s.channel} | ${s.action}`).join('\n')
}

export function calculateTotalBudget(templates: CampaignTemplate[]): string {
  const total = templates.reduce((sum, t) => {
    const budgetNum = parseInt(t.budget.replace(/[^0-9]/g, ''), 10)
    return sum + (isNaN(budgetNum) ? 0 : budgetNum)
  }, 0)
  return `€${total.toLocaleString('de-DE')}`
}
