import type { EmailSequence } from '../email-sequences'

export const onboardingSequence: EmailSequence = {
  id: 'seq_onboarding',
  name: 'Sequenza di Onboarding — 5 giorni',
  type: 'onboarding',
  duration: '5 giorni',
  trigger: 'Nuovo utente registrato',
  goal: 'Attivare l\'utente: prima chiamata API + primo template acquistato',
  emails: [
    {
      day: 0,
      subject: 'Benvenuto su AI Empire — La tua API IA è pronta',
      preview: 'Hai 100 crediti gratuiti. Inizia ora.',
      body: `Ciao [Nome],

benvenuto su AI Empire!

Ora hai accesso a:
- 100 crediti IA gratuiti
- API GPT-4, Groq e Gemini
- Template Next.js 14 professionali
- Supporto tecnico

La tua chiave API: [API_KEY]
Pannello: https://ai-empire-steel.vercel.app/dashboard

Prossimo passo: Fai la tua prima chiamata API in 2 minuti.

1. Vai al tuo pannello
2. Copia la tua chiave API
3. Esegui questo curl:
curl -X POST https://ai-empire-steel.vercel.app/api/ai/chat \\
  -H "Authorization: Bearer TUA_CHIAVE" \\
  -H "Content-Type: application/json" \\
  -d '{"message": "Ciao, come stai?"}'

Ecco fatto! Ora hai accesso all'IA.

A presto,
Il team di AI Empire`,
      cta: 'Avvia il mio primo test',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 1,
      subject: '3 suggerimenti per sfruttare al meglio AI Empire',
      preview: 'Consigli per andare oltre.',
      body: `Ciao [Nome],

ieri hai creato il tuo account. Oggi, ecco 3 suggerimenti per andare oltre:

Suggerimento 1: Esplora i template
I nostri template sono progettati per essere immediatamente utilizzabili. Inizia con NeuraBlog (€29) o NeuraStore (€45).

Suggerimento 2: Usa le API IA
Genera contenuti, analizza il testo, crea un chatbot. Le API sono gratuite fino a esaurimento dei 100 crediti.

Suggerimento 3: Integra nel tuo progetto
I nostri tutorial ti mostrano come integrare AI Empire in un progetto Next.js in 5 minuti.

Tutorial: https://ai-empire-steel.vercel.app/docs

Buona esplorazione!
Il team di AI Empire`,
      cta: 'Guarda i tutorial',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 2,
      subject: 'Il template perfetto per il tuo progetto',
      preview: 'Scopri i nostri template adatti alle tue esigenze.',
      body: `Ciao [Nome],

vuoi creare un SaaS? Ecco il template che ti serve:

E-commerce → NeuraStore (€45)
Template e-commerce Next.js 14 con carrello, pagamenti Stripe, pannello di amministrazione.

Blog → NeuraBlog (€29)
Blog premium con SEO ottimizzato, sistema di commenti, newsletter integrata.

Portfolio → NeuraPortfolio (€45)
Portfolio professionale con animazioni, moduli, modalità scura.

Pacchetto completo → 6 template (€469)
Tutti i nostri template + supporto prioritario + aggiornamenti gratuiti.

Usa il codice WELCOME10 per il 10% di sconto sul tuo primo acquisto.

Il team di AI Empire`,
      cta: 'Scopri i template',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 3,
      subject: 'Come lanciare un SaaS rapidamente con AI Empire',
      preview: 'Costruisci il tuo progetto con i nostri template pronti all\'uso.',
      body: `Ciao [Nome],

lanciare un SaaS non richiede più mesi di sviluppo.

Con AI Empire, ecco cosa puoi realizzare:
- Un sito e-commerce completo in 24 ore con NeuraStore (€45)
- Stripe già integrato e pronto ad accettare pagamenti
- Distribuire su Vercel in pochi click
- Pannello di amministrazione incluso nel template

NeuraStore include:
- Carrello funzionante
- Gestione prodotti e inventario
- Pagamenti sicuri tramite Stripe
- Interfaccia di amministrazione completa
- Design responsive e modalità scura

Inizia scegliendo il template adatto al tuo progetto.

Il team di AI Empire`,
      cta: 'Guarda i template',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 5,
      subject: '20% di sconto sul tuo primo template',
      preview: 'Un\'offerta di benvenuto per te.',
      body: `Ciao [Nome],

grazie per la tua fedeltà! Ecco uno sconto di benvenuto:
20% di sconto sul tuo primo template.

Codice: WELCOME20

Opzioni:
- NeuraBlog: €29 → €23.20
- NeuraStore: €45 → €36
- NeuraPortfolio: €45 → €36
- Pacchetto completo: €469 → €375.20

È il momento di agire.

Il team di AI Empire`,
      cta: 'Ottieni il 20% di sconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const nurtureSequence: EmailSequence = {
  id: 'seq_nurture',
  name: 'Sequenza Nurture — 7 giorni',
  type: 'nurture',
  duration: '7 giorni',
  trigger: 'Utente registrato ma non ancora acquistato',
  goal: 'Convertire l\'utente gratuito in cliente pagante',
  emails: [
    {
      day: 0,
      subject: 'Ecco cosa puoi creare con AI Empire',
      preview: 'Esempi concreti per ispirarti.',
      body: `Ciao [Nome],

hai un account AI Empire ma non hai ancora esplorato tutto ciò che puoi creare.

Ecco 5 progetti concreti:

1. Blog ottimizzato per SEO → NeuraBlog
2. E-commerce con Stripe → NeuraStore
3. Portfolio professionale → NeuraPortfolio
4. Chatbot IA → Integra le nostre API
5. SaaS completo → Pacchetto premium

Ogni progetto è realizzabile in 24 ore.

Il team di AI Empire`,
      cta: 'Esplora i progetti',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 1,
      subject: 'L\'errore #1 degli indie hacker',
      preview: 'Come evitare di perdere tempo.',
      body: `Ciao [Nome],

l\'errore #1 degli indie hacker: sviluppare tutto da zero.

Passi settimane a programmare:
- Autenticazione (AI Empire lo fa per te)
- Pagamenti (Stripe è già integrato)
- Pannello (È già pronto)
- Design (I template sono professionali)

Nel frattempo, i tuoi concorrenti lanciano il loro prodotto.

AI Empire ti fa risparmiare 6 mesi di sviluppo.

Il team di AI Empire`,
      cta: 'Guarda i template',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    },
    {
      day: 2,
      subject: 'Migliaia di sviluppatori usano già AI Empire',
      preview: 'Unisciti a una comunità in crescita.',
      body: `Ciao [Nome],

migliaia di sviluppatori si fidano già di AI Empire.

Ecco cosa hanno creato:
- Decine di SaaS e-commerce
- Blog professionali
- Portfolio creativi
- Chatbot IA

E tu? Cosa stai per creare?

Il team di AI Empire`,
      cta: 'Unisciti alla comunità',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 3,
      subject: 'Il ROI di AI Empire in numeri',
      preview: 'Numeri che parlano da soli.',
      body: `Ciao [Nome],

ecco il ROI reale di AI Empire:

- Costo medio: €50 (1 template + crediti IA)
- Tempo risparmiato: 6 mesi di sviluppo
- Un solo cliente a €50/mese basta per ripagare il tuo investimento

Il resto? Puro profitto.

Il team di AI Empire`,
      cta: 'Guarda i prezzi',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 4,
      subject: 'Scopri NeuraStore — Il template e-commerce',
      preview: 'Il nostro template più popolare.',
      body: `Ciao [Nome],

NeuraStore è il nostro template e-commerce più popolare.

Cosa include:
- Carrello
- Pagamenti Stripe
- Gestione prodotti
- Pannello di amministrazione
- Design responsive
- Modalità scura

Prezzo: €45 (invece di €750+ per uno sviluppatore)

Il team di AI Empire`,
      cta: 'Scopri NeuraStore',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates/neurastore'
    },
    {
      day: 5,
      subject: 'Come integrare AI Empire in 5 minuti',
      preview: 'Un tutorial rapido per iniziare.',
      body: `Ciao [Nome],

vuoi integrare AI Empire nel tuo progetto? Ecco come fare:

1. Installa il template
npx create-next-app@latest mio-saas --template ai-empire

2. Configura le API
Copia la tua chiave API in .env.local

3. Distribuisci su Vercel
git push e il tuo sito è online

Ecco fatto! In 5 minuti hai il tuo SaaS.

Il team di AI Empire`,
      cta: 'Guarda il tutorial',
      ctaUrl: 'https://ai-empire-steel.vercel.app/docs'
    },
    {
      day: 6,
      subject: 'Offerta early adopters: 30% di sconto sui template',
      preview: 'Un\'offerta per i primi utenti.',
      body: `Ciao [Nome],

sei con noi da [NUMBER] giorni.

Per ringraziarti, ecco un\'offerta:
30% di sconto su tutti i template.

Codice: EARLY30

Opzioni:
- NeuraBlog: €29 → €20.30
- NeuraStore: €45 → €31.50
- NeuraPortfolio: €45 → €31.50
- Pacchetto completo: €469 → €328.30

Il team di AI Empire`,
      cta: 'Ottieni il 30% di sconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/templates'
    }
  ]
}

export const winbackSequence: EmailSequence = {
  id: 'seq_winback',
  name: 'Sequenza Win-Back — Riattivazione',
  type: 'winback',
  duration: '21 giorni',
  trigger: 'Utente inattivo da 30 giorni',
  goal: 'Riattivare l\'utente inattivo e trattenerlo',
  emails: [
    {
      day: 0,
      subject: '[Nome], ci manchi',
      preview: 'Abbiamo novità per te.',
      body: `Ciao [Nome],

abbiamo notato che non usi AI Empire da un po\`.

Possiamo aiutarti?

- Hai bisogno di un tutorial?
- Problema tecnico?
- Funzionalità mancante?

Siamo qui per te. Rispondi a questa email — leggiamo tutto.

Il team di AI Empire`,
      cta: 'Torna al pannello',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 3,
      subject: 'Ecco cosa ti sei perso su AI Empire',
      preview: 'Novità che ti piaceranno.',
      body: `Ciao [Nome],

dalla tua ultima visita, abbiamo aggiunto:

- Nuovi template (NeuraBlog, NeuraStore)
- API IA migliorate (GPT-4, Groq, Gemini)
- Pannello rinnovato
- Design ottimizzato

Non ti sei perso nulla — è il momento di tornare.

Il team di AI Empire`,
      cta: 'Scopri le novità',
      ctaUrl: 'https://ai-empire-steel.vercel.app'
    },
    {
      day: 7,
      subject: '50 crediti gratuiti per tornare',
      preview: 'Un regalo per farti sapere che pensiamo a te.',
      body: `Ciao [Nome],

per farti sapere che pensiamo a te, ecco 50 crediti IA gratuiti.

Il tuo saldo: +50 crediti
Valido 30 giorni

Usali per:
- Generare contenuti
- Analizzare il testo
- Creare un chatbot
- Testare le nostre API

Il team di AI Empire`,
      cta: 'Ricevi i miei crediti',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 14,
      subject: 'I tuoi crediti scadono tra 16 giorni',
      preview: 'Non dimenticare di usarli.',
      body: `Ciao [Nome],

hai 50 crediti gratuiti che scadono tra 16 giorni.

Scade il [DATE]

Usali per:
- Creare il tuo primo progetto
- Testare le nostre API
- Esplorare AI Empire

Il team di AI Empire`,
      cta: 'Usa i miei crediti',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    },
    {
      day: 21,
      subject: 'I tuoi crediti scadono presto',
      preview: 'Non dimenticare di usarli.',
      body: `Ciao [Nome],

i tuoi 50 crediti gratuiti scadono tra 7 giorni.

Scade il [DATE]

Dopo di che, perderai i tuoi crediti.

È la tua ultima occasione per usarli.

Il team di AI Empire`,
      cta: 'Usa i miei crediti',
      ctaUrl: 'https://ai-empire-steel.vercel.app/dashboard'
    }
  ]
}

export const upsellSequence: EmailSequence = {
  id: 'seq_upsell',
  name: 'Sequenza Upsell — Upgrade al Piano Pro',
  type: 'upsell',
  duration: '14 giorni',
  trigger: 'Utente con più di 100 chiamate API o 30 giorni di attività',
  goal: 'Convertire l\'utente gratuito in cliente Pro',
  emails: [
    {
      day: 0,
      subject: '[Nome], stai per raggiungere il limite',
      preview: 'Il tuo utilizzo sta crescendo — ecco come scalare.',
      body: `Ciao [Nome],

buone notizie: stai usando attivamente AI Empire!

Ecco il tuo utilizzo attuale:
- Chiamate API: [NUMBER]/100
- Crediti rimanenti: [NUMBER]
- Giorni di attività: [NUMBER]

Stai per raggiungere il limite del piano gratuito.

Il piano Pro ti dà:
- Chiamate API illimitate
- Accesso prioritario
- Supporto dedicato
- Template premium

Il team di AI Empire`,
      cta: 'Passa al Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 2,
      subject: 'Il piano Pro: cosa ti stai perdendo',
      preview: 'Funzionalità esclusive.',
      body: `Ciao [Nome],

ecco cosa ti stai perdendo con il piano gratuito:

Piano Pro (€99/mese):
- Chiamate API illimitate
- Accesso prioritario alle nuove funzionalità
- Supporto dedicato (risposta entro 2h)
- Template premium (valore €199)
- Pannello analytics avanzato
- API webhook personalizzata

Il team di AI Empire`,
      cta: 'Scopri il Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 5,
      subject: '20% di sconto sul tuo primo mese Pro',
      preview: 'Un\'offerta per te.',
      body: `Ciao [Nome],

per ringraziarti della tua fedeltà, ecco un\'offerta:
20% di sconto sul tuo primo mese Pro.

Invece di €99/mese → €79/mese

Codice: PRO20

Passa al Pro:
- Chiamate API illimitate
- Supporto dedicato
- Template premium
- Analytics avanzati

Il team di AI Empire`,
      cta: 'Attiva la mia offerta',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 7,
      subject: 'Come gli utenti Pro ottimizzano i costi',
      preview: 'Uno sguardo ai vantaggi del piano Pro.',
      body: `Ciao [Nome],

ecco come i nostri utenti Pro ottimizzano i costi:

Con il piano Pro (€99/mese):
- Riduzione dei costi IA grazie alle API ottimizzate
- Guadagni di produttività con i template premium
- Supporto dedicato per risolvere i problemi rapidamente
- Analytics avanzati per monitorare le tue prestazioni

Il piano Pro è pensato per progetti seri che necessitano di più potenza.

Il team di AI Empire`,
      cta: 'Passa al Pro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 10,
      subject: '20% sul piano Pro — Ultima occasione',
      preview: 'Non perdere questa offerta.',
      body: `Ciao [Nome],

la tua offerta del 20% sul piano Pro è ancora disponibile.

€79/mese invece di €99/mese

Passa al Pro:
- Chiamate API illimitate
- Supporto dedicato
- Template premium
- Analytics avanzati

Questa è un\'ottima occasione per provare il piano Pro a tariffa ridotta.

Il team di AI Empire`,
      cta: 'Ottieni il 20% di sconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing'
    },
    {
      day: 14,
      subject: 'Grazie [Nome] — Siamo qui se cambi idea',
      preview: 'Nessuna pressione. Siamo qui per te.',
      body: `Ciao [Nome],

comprendiamo che il piano Pro potrebbe non essere per te in questo momento.

Nessun problema. Siamo qui se cambi idea.

Nel frattempo, puoi ancora:
- Usare il piano gratuito (100 crediti/mese)
- Esplorare i template (da €29)
- Contattarci se hai domande

Siamo qui per te.

Il team di AI Empire`,
      cta: 'Contattaci',
      ctaUrl: 'https://ai-empire-steel.vercel.app/contact'
    }
  ]
}
