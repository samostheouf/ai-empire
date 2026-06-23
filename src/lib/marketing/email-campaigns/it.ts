import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'it',
  campaigns: [
    // === Campaign 1: Launch Announcement ===
    {
      id: 'email-launch',
      name: 'Annuncio di Lancio',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire è online — Il toolkit SaaS potenziato dall\'IA', previewText: 'Template, API IA, Stripe e autenticazione — tutto in una piattaforma.' },
        { id: 'launch-b', subject: 'Abbiamo lanciato: template Next.js 14 + API IA', previewText: 'Tutto ciò che Le serve per lanciare il suo SaaS in 24 ore.' },
        { id: 'launch-c', subject: 'Lanci il suo SaaS più velocemente — AI Empire è arrivata', previewText: 'Template professionali con integrazione IA, pronti al deploy.' },
      ],
      previewText: 'Template, API IA, Stripe e autenticazione — tutto in una piattaforma.',
      cta: 'Esplora AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire è Arrivata</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Il toolkit completo per creare prodotti SaaS potenziati dall'IA</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Gentile {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Siamo lieti di annunciare il lancio di <strong>AI Empire</strong> — una piattaforma progettata per aiutare gli sviluppatori a lanciare prodotti SaaS potenziati dall'IA più velocemente.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Ecco cosa è incluso:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Template professionali Next.js 14 (da €19)</p>
      <p style="margin:4px 0;color:#333;">✅ API IA unificata — Groq + Gemini in un unico endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Integrazione Stripe billing configurata</p>
      <p style="margin:4px 0;color:#333;">✅ Autenticazione pronta all'uso</p>
      <p style="margin:4px 0;color:#333;">✅ Dashboard amministrativa inclusa</p>
      <p style="margin:4px 0;color:#333;">✅ Tier API gratuito — 100 crediti alla registrazione</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Che stia creando un negozio online, un blog o un portfolio, AI Empire Le fornisce la base di cui ha bisogno.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Esplora AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Template Disponibili</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template e-commerce completo con Stripe, carrello e dashboard amministrativa</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog ottimizzato per SEO con MDX, modalità scura e feed RSS</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfolio professionale con animazioni, modalità scura e modulo di contatto</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Pacchetto Completo — €299</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Tutti i 6 template + supporto prioritario + aggiornamenti gratuiti</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      Domande? Risponda a questa email — leggiamo ogni risposta.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Il team di AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crei prodotti SaaS potenziati dall'IA più velocemente<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sito web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentazione</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Annulla iscrizione</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 2: Product Update ===
    {
      id: 'email-update',
      name: 'Aggiornamento Prodotto',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'Novità — Aggiornamenti AI Empire di questo mese', previewText: 'Nuove funzionalità, miglioramenti e cosa arriverà prossimamente.' },
        { id: 'update-b', subject: 'Changelog AI Empire — Nuovi template e funzionalità API', previewText: 'Siamo stati molto attivi. Ecco cosa abbiamo rilasciato.' },
        { id: 'update-c', subject: 'Il Suo aggiornamento mensile di AI Empire è arrivato', previewText: 'Nuove integrazioni, miglioramenti delle prestazioni e funzionalità in arrivo.' },
      ],
      previewText: 'Nuove funzionalità, miglioramenti e cosa arriverà prossimamente.',
      cta: 'Visualizza il Changelog',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">Novità su AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Aggiornamento Mensile del Prodotto — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Gentile {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Ecco cosa abbiamo rilasciato questo mese:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Nuova funzionalità: Endpoint per la Generazione di Codice IA</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Un nuovo endpoint API ottimizzato per le attività di generazione di codice. Supporta Groq Llama 3 e Gemini Pro. Disponibile su tutti i piani inclusa la versione gratuita.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Migliorato: Flusso di Checkout di NeuraStore</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Esperienza di checkout riprogettata con supporto per Apple Pay e Google Pay. Tasso di conversione migliorato del 15% nei test.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Aggiornato: Documentazione API</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Documentazione completamente riscritta con esempi interattivi, frammenti di codice copia-incolla e una nuova guida di rapido avvio.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">In Arrivo il Prossimo Mese</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Ottimizzatore SEO basato sull'IA per NeuraBlog. Meta descrizioni automatiche, immagini Open Graph e generazione di dati strutturati.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Visualizza il Changelog Completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      La ringraziamo per aver scelto AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Il team di AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crei prodotti SaaS potenziati dall'IA più velocemente<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sito web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentazione</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Annulla iscrizione</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 3: Monthly Newsletter ===
    {
      id: 'email-newsletter',
      name: 'Newsletter Mensile',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Mensile — Consigli, tutorial e aggiornamenti', previewText: 'La Sua dose mensile di intuizioni su IA e SaaS.' },
        { id: 'newsletter-b', subject: 'Questo mese nel mondo IA e SaaS — Newsletter AI Empire', previewText: 'In evidenza dalla comunità, nuove funzionalità e analisi del settore.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — Cosa abbiamo imparato questo mese', previewText: 'Consigli pratici per creare prodotti potenziati dall\'IA.' },
      ],
      previewText: 'La Sua dose mensile di intuizioni su IA e SaaS.',
      cta: 'Leggi di Più',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Mensile</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Edizione #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Gentile {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Benvenuto nella newsletter di questo mese. Ecco cosa è successo nella comunità AI Empire e nel più ampio panorama IA/SaaS.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutorial</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Come Aggiungere una Chat IA alla Sua App Next.js</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Guida passo-passo per integrare l'endpoint chat di AI Empire in un'applicazione Next.js. Include campioni di codice e suggerimenti per il deploy.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Migliori Pratiche per l'Integrazione Stripe nel SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Lezioni dalla costruzione del flusso di pagamento di NeuraStore. Gestione abbonamenti, webhook e configurazione del portale clienti.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Deploy di Next.js 14 su Vercel: Guida Completa</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Da zero alla produzione. Variabili d'ambiente, domini, deploy di anteprima e ottimizzazione delle prestazioni.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">In Evidenza dalla Comunità</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Progetto in Evidenza:</strong> Uno dei nostri utenti ha lanciato un SaaS per l'elaborazione di documenti usando NeuraStore come template base e l'API di AI Empire per l'estrazione del testo. Da zero a clienti paganti in 3 settimane.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Consiglio del Mese:</strong> Utilizzi Groq per risposte in tempo reale (bassa latenza) e Gemini per attività di ragionamento complesse. AI Empire Le permette di passare da un modello all'altro con una semplice modifica del parametro.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Analisi del Settore</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      Il mercato delle API IA continua a evolversi rapidamente. Stiamo osservando una chiara tendenza verso gli endpoint unificati — gli sviluppatori vogliono un'unica integrazione, non cinque. AI Empire è stata creata per questa realtà e stiamo aggiungendo nuovi modelli regolarmente.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Leggi il Blog Completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Al prossimo mese,<br>Il team di AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crei prodotti SaaS potenziati dall'IA più velocemente<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sito web</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Annulla iscrizione</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 4: Re-engagement ===
    {
      id: 'email-reengagement',
      name: 'Riacquisizione',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'Ci manca — Il Suo account AI Empire è in attesa', previewText: 'Torni e riceva 50 crediti bonus.' },
        { id: 'reeng-b', subject: 'Ci sta ancora pensando? I Suoi crediti gratuiti stanno scadendo', previewText: '100 crediti gratuiti La attendono. Torni a creare.' },
        { id: 'reeng-c', subject: 'Molto è cambiato su AI Empire dalla Sua ultima visita', previewText: 'Nuove funzionalità, nuovi template e crediti bonus per Lei.' },
      ],
      previewText: 'Torni e riceva 50 crediti bonus.',
      cta: 'Riattiva il Mio Account',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Ci manca</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Il Suo account AI Empire è ancora qui — e abbiamo qualcosa di riservato per Lei</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Gentile {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      È passato del tempo dalla Sua ultima visita su AI Empire. Volevamo informarLa che il Suo account è ancora attivo e Le abbiamo aggiunto <strong>50 crediti bonus</strong> per aiutarLa a ricominciare.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Crediti</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Gratis. Nessuna condizione.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Dalla Sua ultima visita, abbiamo aggiunto:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>Nuovo endpoint per la generazione di codice IA</li>
      <li>Flusso di checkout NeuraStore migliorato</li>
      <li>Documentazione API completamente riscritta</li>
      <li>Miglioramenti ai SDK JavaScript e Python</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Riattiva il Mio Account
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Se non desidera più ricevere email, può <a href="{{unsubscribe_url}}" style="color:#999;">annullare l'iscrizione</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crei prodotti SaaS potenziati dall'IA più velocemente<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sito web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentazione</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Annulla iscrizione</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    // === Campaign 5: Upgrade Offer ===
    {
      id: 'email-upgrade',
      name: 'Offerta di Aggiornamento',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Acceda a di più — Aggiorni il Suo piano AI Empire oggi', previewText: 'Più crediti, più template, supporto prioritario.' },
        { id: 'upgrade-b', subject: 'Il Suo utilizzo di AI Empire sta crescendo — È ora di aggiornare?', previewText: 'Ottenga più crediti API e template premium.' },
        { id: 'upgrade-c', subject: 'Offerta speciale: 20% di sconto sui template AI Empire', previewText: 'Offerta a tempo limitato per utenti attivi. Aggiorni ora.' },
      ],
      previewText: 'Più crediti, più template, supporto prioritario.',
      cta: 'Aggiorna Ora — 20% di Sconto',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="it">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Elevi il Suo SaaS</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">20% di sconto sui template per gli utenti attivi di AI Empire</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Gentile {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Sta utilizzando attivamente AI Empire — e vogliamo ricompensarLa. Ecco uno <strong>sconto esclusivo del 20%</strong> su tutti i template e il pacchetto completo.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Utilizzi il codice al checkout:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">Cosa Ottiene con i Template</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — €29 → €23,20 con codice</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template e-commerce con Stripe, carrello, dashboard amministrativa, raccomandazioni IA</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — €19 → €15,20 con codice</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template blog con MDX, modalità scura, RSS, ottimizzazione SEO</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — €29 → €23,20 con codice</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Template portfolio con animazioni, modalità scura, modulo di contatto</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Pacchetto Completo — €299 → €239,20 con codice</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Tutti i 6 template + supporto prioritario + aggiornamenti gratuiti. Miglior rapporto qualità-prezzo.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Aggiorna Ora — 20% di Sconto
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Questa offerta scade tra 72 ore. Codice valido per un singolo utilizzo.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crei prodotti SaaS potenziati dall'IA più velocemente<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sito web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentazione</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Annulla iscrizione</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
