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
// CAMPAGNA DI LANCIO PRODOTTO
// ============================================================
export const productLaunchTemplate: CampaignTemplate = {
  id: 'tpl_product_launch',
  name: 'Lancio Prodotto — AI Empire',
  type: 'product-launch',
  duration: '14 giorni',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€1,500',
  objective: 'Generare 500 iscrizioni e €3,000 di ricavi nel primo mese',
  content: {
    headline: '🚀 Nuovo: La rivoluzione AI per SaaS è arrivata!',
    subheadline: 'Lancia il tuo SaaS in 24h con template Next.js 14 + API IA potenti',
    body: `Sogni di lanciare il tuo SaaS ma lo sviluppo ti richiede settimane?

AI Empire cambia le regole del gioco:
✅ Template Next.js 14 professionali — design moderni, responsive, dark mode
✅ API IA integrate — GPT-4, Groq, Gemini pronti all'uso
✅ Stripe + Auth inclusi — pagamenti e autenticazione in 5 minuti
✅ Dashboard admin completa — gestisci utenti, analytics, fatture

🔥 Offerta di lancio: -30% su tutti i template per 72 ore!

Unisciti ai primi utenti che hanno già lanciato il loro SaaS con AI Empire.
Non perdere questa opportunità — l'offerta scade il [DATE].`,
    cta: '🚀 Inizia ora — -30%',
    hashtags: [
      '#AIEmpire', '#SaaS', '#NextJS', '#AI', '#Launch',
      '#WebTemplates', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🚀 È ufficiale: AI Empire è live! -30% per te',
    emailBody: `Ciao [First Name],

Il giorno è arrivato. AI Empire è finalmente live!

Ecco cosa offriamo:
🎨 6 template Next.js 14 professionali (€49-199)
🤖 API IA integrate (GPT-4, Groq, Gemini)
💳 Stripe + Auth configurati
📊 Dashboard admin completa

🎁 Offerta esclusiva: -30% su tutti i template per sole 72 ore.

Usa il codice LAUNCH30 al checkout.

[CTA: Scopri i template →]

A presto,
Il team di AI Empire 🇫🇷`,
    socialPost: `🚀 AI Empire è finalmente LIVE!

La piattaforma che combina:
✅ Template Pro Next.js 14
✅ API IA integrate
✅ Stripe + Auth inclusi
✅ Dashboard admin

🎁 -30% per 72h con codice LAUNCH30

👉 ai-empire-steel.vercel.app

#AIEmpire #SaaS #NextJS #AI #Launch`
  },
  schedule: [
    { day: 'G-7', action: 'Teaser sui social media', channel: 'Twitter/X, LinkedIn' },
    { day: 'G-3', action: 'Email teaser agli iscritti alla newsletter', channel: 'Email' },
    { day: 'G-1', action: 'Conto alla rovescia su Instagram Stories', channel: 'Instagram' },
    { day: 'G0', action: 'Lancio ufficiale — post + email + ads', channel: 'Tutti i canali' },
    { day: 'G+1', action: 'Testimonial dei primi utenti', channel: 'Twitter/X, LinkedIn' },
    { day: 'G+3', action: 'Promemoria offerta -30%', channel: 'Email, Twitter' },
    { day: 'G+5', action: 'Tutorial "Come creare il tuo primo SaaS"', channel: 'YouTube, Blog' },
    { day: 'G+7', action: 'Fine dell\'offerta -30%', channel: 'Email, Social' },
    { day: 'G+10', action: 'Case study cliente', channel: 'LinkedIn, Blog' },
    { day: 'G+14', action: 'Riepilogo + testimonial', channel: 'Email, Twitter' }
  ],
  metrics: {
    targetReach: 'Pubblico target (varia per campagna)',
    targetConversion: 'Tasso di conversione 1-2%',
    targetRevenue: 'Proporzionale al budget pubblicitario'
  }
}

// ============================================================
// CAMPAGNA PROMOZIONALE STAGIONALE
// ============================================================
export const seasonalPromotionTemplate: CampaignTemplate = {
  id: 'tpl_seasonal',
  name: 'Promozione Stagionale — Primavera/Estate',
  type: 'seasonal',
  duration: '21 giorni',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram'],
  budget: '€800',
  objective: 'Aumentare le vendite del 40% durante il periodo estivo',
  content: {
    headline: '☀️ Saldo Estivo AI Empire — Fino al -40%!',
    subheadline: 'L\'estate è per lanciare il tuo SaaS, non per rilassarti sulla spiaggia',
    body: `L\'estate si avvicina, ed è il momento perfetto per boostare il tuo progetto!

🌞 Offerte speciali primavera/estate:
- NeuraStore (template e-commerce): €39 → €29 (-25%)
- NeuraBlog (template blog): €29 → €19 (-35%)
- Pacchetto completo (6 template): €599 → €359 (-40%)

⚡ Perché l\'estate?
→ Meno concorrenza nel mercato
→ Più tempo per costruire prima dell\'autunno
→ Le startup che lanciano in estate arrivano a settembre con un prodotto

⏱️ Offerta valida dal [START_DATE] al [END_DATE]

Usa il codice ETE2024 per -40% sul pacchetto.`,
    cta: '☀️ Approfitta dei saldi — -40%',
    hashtags: [
      '#AIEmpire', '#Saldo', '#Estate2024', '#SaaS', '#Template',
      '#Promo', '#NextJS', '#IndieHacker', '#StartupFrance', '#TechFR'
    ],
    emailSubject: '☀️ Saldo Estivo: -40% su tutti i template AI Empire!',
    emailBody: `Ciao [First Name],

L\'estate arriva e ti offriamo un\'offerta che non puoi rifiutare! 🌞

☀️ Offerte speciali:
- NeuraStore: €39 → €29
- NeuraBlog: €29 → €19
- Pacchetto 6 template: €599 → €359

⏰ Offerta valida fino al [END_DATE]

Usa il codice ETE2024 al checkout.

[CTA: Vedi le offerte →]

Buona estate!
Il team di AI Empire 🇫🇷`,
    socialPost: `☀️ SALDO ESTIVO AI EMPIRE ☀️

-40% sul pacchetto completo:
✅ 6 template Next.js 14
✅ API IA integrate
✅ Supporto prioritario

Codice: ETE2024
⏰ Valido fino al [DATE]

👉 ai-empire-steel.vercel.app

#AIEmpire #Saldo #Estate2024 #SaaS #Promo`
  },
  schedule: [
    { day: 'G-3', action: 'Teaser "Qualcosa arriva this estate..."', channel: 'Twitter/X, Instagram' },
    { day: 'G0', action: 'Annuncio ufficiale saldi', channel: 'Tutti i canali' },
    { day: 'G+3', action: 'Testimonial cliente + prima/dopo', channel: 'LinkedIn, Facebook' },
    { day: 'G+7', action: 'Promemoria metà percorso + stock limitato', channel: 'Email' },
    { day: 'G+10', action: 'Tutorial "Lancia il tuo SaaS quest\'estate"', channel: 'YouTube, Blog' },
    { day: 'G+14', action: 'Ultimi giorni — urgenza', channel: 'Tutti i canali' },
    { day: 'G+18', action: 'Ultima possibilità', channel: 'Email, Twitter' },
    { day: 'G+21', action: 'Fine dei saldi — riepilogo', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '30,000 persone',
    targetConversion: '300 vendite (1%)',
    targetRevenue: '€10,700 (300 × €35 media)'
  }
}

// ============================================================
// PROGRAMMA DI REFERRAL
// ============================================================
export const referralProgramTemplate: CampaignTemplate = {
  id: 'tpl_referral',
  name: 'Programma Referral — Guadagna Crediti',
  type: 'referral',
  duration: 'Permanente',
  channels: ['Email', 'Dashboard', 'Twitter/X'],
  budget: '€500 (crediti premio)',
  objective: 'Crescita virale: 1 referral = 2 nuovi utenti',
  content: {
    headline: '🎁 Consiglia un amico, guadagna 500 crediti IA gratis!',
    subheadline: 'Il passaparola è il nostro miglior canale di crescita',
    body: `Ti piace AI Empire? Condividilo e guadagna premi!

🎯 Come funziona:
1. Condividi il tuo link referral unico
2. Il tuo amico si iscrive con il tuo link
3. ENTRAMBI ricevete 500 crediti IA gratis!

💰 Livelli di premi:
- 1 referral = 500 crediti
- 3 referral = 1,500 crediti + badge "Ambasciatore"
- 5 referral = 2,500 crediti + accesso Pro 1 mese
- 10 referral = 5,000 crediti + accesso Pro 3 mesi + menzione sul sito

🔗 Il tuo link unico: [REFERRAL_LINK]

Condividilo su Twitter, LinkedIn, o invialo direttamente ai tuoi contatti!`,
    cta: '🎁 Condividi il mio link referral',
    hashtags: [
      '#AIEmpire', '#Referral', '#Gratis', '#IA', '#SaaS',
      '#Ambasciatore', '#TechFR', '#StartupFrance'
    ],
    emailSubject: '🎁 Vuoi 500 crediti IA gratis? Consiglia un amico!',
    emailBody: `Ciao [First Name],

Abbiamo una sorpresa per te! 🎁

Consiglia un amico su AI Empire e ENTRAMBI ricevete 500 crediti IA gratis.

Il tuo link unico: [REFERRAL_LINK]

🎯 Livelli:
- 1 referral → 500 crediti
- 3 referral → 1,500 crediti + badge
- 5 referral → 2,500 crediti + Pro 1 mese
- 10 referral → 5,000 crediti + Pro 3 mesi

Condividi il tuo link ora!

[CTA: Condividi il mio link →]

Grazie per far parte dell\'avventura! 💜
Il team di AI Empire`,
    socialPost: `🎁 CONSIGLIA UN AMICO, GUADAGNA 500 CREDITI! 🎁

Ti piace AI Empire? Condividilo!

✅ Il tuo amico si iscrive → 500 crediti gratis
✅ TU guadagni → 500 crediti gratis

🔗 Link referral: [REFERRAL_LINK]

5 referral = accesso Pro GRATIS per 1 mese 🚀

#AIEmpire #Referral #IA #SaaS #Gratis`
  },
  schedule: [
    { day: 'Permanente', action: 'Email di benvenuto con link referral', channel: 'Email' },
    { day: 'G+7', action: 'Promemoria programma referral', channel: 'Email' },
    { day: 'G+30', action: 'Email "Non hai ancora consigliato nessuno..."', channel: 'Email' },
    { day: 'Permanente', action: 'Link referral visibile nella dashboard', channel: 'Dashboard' },
    { day: 'Settimanale', action: 'Classifica dei top referrer su Twitter', channel: 'Twitter/X' }
  ],
  metrics: {
    targetReach: '1,000 condivisioni/mese',
    targetConversion: '200 nuove iscrizioni/mese',
    targetRevenue: '+40% crescita organica'
  }
}

// ============================================================
// CAMPAGNA BLACK FRIDAY / CYBER MONDAY
// ============================================================
export const blackFridayTemplate: CampaignTemplate = {
  id: 'tpl_black_friday',
  name: 'Black Friday / Cyber Monday — AI Empire',
  type: 'black-friday',
  duration: '5 giorni (mercoledì-sabato + Cyber Monday)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Instagram', 'Google Ads'],
  budget: '€2,500',
    objective: 'Massimizzare portata e conversioni',
  content: {
    headline: '🖤 BLACK FRIDAY AI EMPIRE — -50% SU TUTTO!',
    subheadline: 'La più grande promozione dell\'anno. Non perdertela.',
    body: `È il momento di agire. Per la prima volta nella storia:

🖤 BLACK FRIDAY — -50% SU TUTTO

📦 Offerte esclusive:
- NeuraStore: €39 → €19.50
- NeuraBlog: €29 → €14.50
- NeuraPortfolio: €59 → €29.50
- Pacchetto Premium (6 template): €599 → €299.50
- Piano Pro (1 anno): €1,188 → €594

⚡ NON è uno scherzo. È LA promozione dell\'anno.

⏱️ Tempo limitato: Dal [WEDNESDAY] al [MONDAY] solamente.

🔒 Stock limitato: I primi 50 acquirenti ricevono un template bonus gratuito.

Codice: BLACKFRIDAY50`,
    cta: '🖤 Approfitta del -50% ora',
    hashtags: [
      '#AIEmpire', '#BlackFriday', '#CyberMonday', '#Saldo',
      '#Promo', '#SaaS', '#Template', '#NextJS', '#IADeals', '#TechFR'
    ],
    emailSubject: '🖤 BLACK FRIDAY: -50% su tutto AI Empire — Solo 5 giorni!',
    emailBody: `Ciao [First Name],

È ufficiale. Il Black Friday è arrivato da AI Empire. 🖤

-50% SU TUTTO:
📦 NeuraStore: €39 → €19.50
📦 NeuraBlog: €29 → €14.50
📦 Pacchetto Premium: €599 → €299.50
📦 Piano Pro 1 anno: €1,188 → €594

⏰ Valido dal [WEDNESDAY] al [MONDAY] solamente.

Codice: BLACKFRIDAY50

I primi 50 acquirenti ricevono un template bonus gratuito! 🎁

[CTA: Prendi il tuo -50% →]

Non perdere questa occasione.
Il team di AI Empire 🖤`,
    socialPost: `🖤 BLACK FRIDAY AI EMPIRE 🖤

-50% SU TUTTO PER 5 GIORNI!

📦 Template da €14.50 a €299.50
📦 Piano Pro -50%
📦 Primi 50 = template bonus GRATIS

Codice: BLACKFRIDAY50
⏰ Dal [WEDNESDAY] al [MONDAY]

👉 ai-empire-steel.vercel.app

#BlackFriday #AIEmpire #SaaS #Promo`
  },
  schedule: [
    { day: 'Mercoledì G-1', action: 'Teaser "Domani arriva qualcosa di scuro..."', channel: 'Twitter, Instagram' },
    { day: 'Giovedì G0 (BF)', action: 'Lancio ufficiale Black Friday', channel: 'Tutti i canali + Email blast' },
    { day: 'Giovedì G0', action: 'Google Ads - campagna urgente', channel: 'Google Ads' },
    { day: 'Venerdì G+1', action: 'Promemoria + testimonial acquirenti', channel: 'Email, Twitter' },
    { day: 'Sabato G+2', action: 'Prova sociale: "Già X vendite!"', channel: 'Instagram, LinkedIn' },
    { day: 'Domenica G+3', action: 'Ultimo giorno per BF classico', channel: 'Email blast' },
    { day: 'Lunedì CM', action: 'Cyber Monday — Estensione speciale', channel: 'Tutti i canali' },
    { day: 'Lunedì CM', action: 'Offerta flash 24 ore', channel: 'Email, Twitter' },
    { day: 'Martedì G+5', action: 'Black Friday finisce — Grazie', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: 'Pubblico target (varia per campagna)',
    targetConversion: 'Tasso di conversione 0.5-1%',
    targetRevenue: 'Proporzionale al budget pubblicitario'
  }
}

// ============================================================
// CAMPAGNA ANNO NUOVO
// ============================================================
export const newYearTemplate: CampaignTemplate = {
  id: 'tpl_new_year',
  name: 'Anno Nuovo — Risoluzioni SaaS 2025',
  type: 'new-year',
  duration: '14 giorni (26 dicembre - 9 gennaio)',
  channels: ['Email', 'Twitter/X', 'LinkedIn', 'Facebook', 'Blog'],
  budget: '€800',
  objective: 'Convertire i prospect di fine anno e partire forte a gennaio',
  content: {
    headline: '🎆 2025: Lancia il tuo SaaS quest\'anno!',
    subheadline: 'Anno nuovo, nuovo SaaS. Parti forte con AI Empire.',
    body: `2025 è IL TUO anno. 🎆

Hai messo la tua idea su carta l\'anno scorso. Ora, passa all\'azione.

🚀 Offerta Anno Nuovo:
- -25% su tutti i template con codice NEWYEAR2025
- 500 crediti IA gratis per iniziare
- Accesso prioritario alle nuove funzionalità 2025

🎯 Risoluzioni 2025:
✅ "Lancio il mio SaaS" → Fatto in 24h con AI Empire
✅ "Guadagno online" → Template e-commerce + Stripe inclusi
✅ "Imparo l\'IA" → API IA integrate + tutorial
✅ "Mi digitalizzo" → Dashboard admin completa

⏱️ Offerta dal 26 dicembre al 9 gennaio solamente.

Fai del 2025 il tuo anno di successo.`,
    cta: '🎆 Inizia il 2025 con AI Empire',
    hashtags: [
      '#AIEmpire', '#AnnoNuovo', '#2025', '#Risoluzioni', '#SaaS',
      '#Launch', '#IndieHacker', '#StartupFrance', '#TechFR', '#IA'
    ],
    emailSubject: '🎆 Anno nuovo, nuovo SaaS: -25% + 500 crediti gratis!',
    emailBody: `Ciao [First Name],

Buon Anno! 🎆

2025 è l\'anno in cui lanci il tuo SaaS. E noi siamo qui per aiutarti.

🎁 Offerta Anno Nuovo:
- -25% su tutti i template
- 500 crediti IA gratis
- Accesso prioritario alle funzionalità 2025

Codice: NEWYEAR2025

⏰ Offerta dal 26 dicembre al 9 gennaio.

Fai di quest\'anno il buon anno.

[CTA: Scopri le offerte →]

Buon Anno e buona fortuna!
Il team di AI Empire 🇫🇷`,
    socialPost: `🎆 2025: L\'ANNO DEL TUO SAAS! 🎆

Anno nuovo, nuova partenza.

🎁 Offerta speciale:
✅ -25% sui template
✅ 500 crediti IA gratis
✅ Accesso prioritario 2025

Codice: NEWYEAR2025
⏰ Dal 26/12 al 09/01

👉 ai-empire-steel.vercel.app

#AIEmpire #AnnoNuovo #2025 #SaaS #Risoluzioni`
  },
  schedule: [
    { day: '26 dicembre', action: 'Email "Buon Anno — ecco il tuo regalo"', channel: 'Email' },
    { day: '27 dicembre', action: 'Post "Risoluzioni 2025: lancia il tuo SaaS"', channel: 'LinkedIn, Twitter' },
    { day: '30 dicembre', action: 'Promemoria offerta + testimonial', channel: 'Email, Twitter' },
    { day: '1 gennaio', action: 'Messaggio "Buon Anno — siamo qui per te"', channel: 'Email, Social' },
    { day: '2 gennaio', action: 'Tutorial "5 passi per lanciare il tuo SaaS a gennaio"', channel: 'Blog, YouTube' },
    { day: '5 gennaio', action: 'Prova sociale + urgenza', channel: 'Twitter, Instagram' },
    { day: '7 gennaio', action: 'Ultima possibilità', channel: 'Email' },
    { day: '9 gennaio', action: 'Fine dell\'offerta — riepilogo + preview 2025', channel: 'Email, LinkedIn' }
  ],
  metrics: {
    targetReach: '40,000 persone',
    targetConversion: '400 iscrizioni (1%)',
    targetRevenue: '€5,000 (200 × €25 media)'
  }
}

// ============================================================
// FUNZIONI UTILITÀ
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
  return `€${total.toLocaleString('it-IT')}`
}
