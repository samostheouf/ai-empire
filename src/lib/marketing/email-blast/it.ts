// ============================================
// AI-EMPIRE — Modelli Email Blast
// Campagne email ottimizzate per la conversione
// ============================================

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preheader: string;
  body: string;
  cta: string;
  trackingParams: string;
}

// === CAMPAGNA 1: LANCIO PRODOTTO ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Annuncio di lancio',
  subject: '🚀 AI-Empire è finalmente qui — La piattaforma AI francese per startup',
  preheader: 'Ottieni un\'API AI gratuita in 5 minuti, con supporto in francese.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire è finalmente qui!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">La piattaforma AI francese per startup</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ciao {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Abbiamo ottime notizie: <strong>AI-Empire è ufficialmente lanciato!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ora hai accesso a:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ API AI unificata (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 endpoint: Generazione, SEO, Codice</p>
          <p style="margin: 5px 0; color: #333;">✅ Crediti gratuiti per iniziare</p>
          <p style="margin: 5px 0; color: #333;">✅ Dashboard intuitiva in francese</p>
          <p style="margin: 5px 0; color: #333;">✅ Supporto in francese</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>La tua chiave API:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Avvia il mio primo test →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Prossimo passo: Esegui la tua prima chiamata API in 2 minuti.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La piattaforma AI francese per startup 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sito web</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Documentazione</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Annulla iscrizione</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Avvia il mio primo test →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === CAMPAGNA 2: OFFERTA LIMITATA -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Offerta limitata -50%',
  subject: '⚡ -50% su NeuraPortfolio — L\'offerta scade tra 48h',
  preheader: 'Template Next.js premium a metà prezzo. 50+ componenti, dark mode, responsive.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">L\'offerta scade tra 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ciao {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Abbiamo un\'<strong>offerta esclusiva</strong> per te: <strong>-50% su NeuraPortfolio</strong>, il template premium Next.js per creare il tuo portfolio AI.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Limitata a 50 vendite — scade tra 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Cosa ottieni:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ componenti React</li>
          <li>✅ Dark mode + responsive</li>
          <li>✅ Animazioni fluide</li>
          <li>✅ Integrazione AI nativa</li>
          <li>✅ Supporto in francese</li>
          <li>✅ Aggiornamenti gratuiti a vita</li>
        </ul>

        <!-- Price -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="margin: 0; font-size: 18px; color: #999; text-decoration: line-through;">€49</p>
          <p style="margin: 0; font-size: 36px; color: #f5576c; font-weight: bold;">€24.99</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/templates/neuraportfolio?utm_source=email&utm_medium=offer&utm_campaign=limited_50"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Approfitta dell\'offerta →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Dopo 48h, il prezzo torna a €49. Non perdere questa occasione!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La piattaforma AI francese per startup 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sito web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Annulla iscrizione</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Approfitta dell\'offerta →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === CAMPAGNA 3: STORIE DI SUCCESSO ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Testimonianze clienti',
  subject: '💬 Come queste startup francesi hanno successo con l\'IA',
  preheader: '3 storie clienti che dimostrano che l\'IA è accessibile a tutti.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Testimonianze clienti</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Il loro successo può essere il tuo</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ciao {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Vogliamo mostrarti cosa le startup francesi stanno accomplish con AI-Empire.
        </p>

        <!-- Testimonianza 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Abbiamo ridotto i costi AI del 60% passando a AI-Empire. L\'integrazione ha richiesto 5 minuti e il supporto in francese è un vero plus."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO di una startup a Parigi</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Risultato: -60% costi, +40% velocità</p>
        </div>

        <!-- Testimonianza 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Ho integrato l\'IA nel mio SaaS in 2 ore. I clienti adorano le nuove funzionalità."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, fondatrice di un SaaS a Lione</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Risultato: +25% di conversioni</p>
        </div>

        <!-- Testimonianza 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "La dashboard francese è intuitiva. Il mio team ha adottato l\'IA in 1 giorno."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM di una scale-up a Bordeaux</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Risultato: +40% di produttività</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Unisciti ai successi →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La piattaforma AI francese per startup 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sito web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Annulla iscrizione</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Unisciti ai successi →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === CAMPAGNA 4: NEWSLETTER MENSILE ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Newsletter mensile',
  subject: '📰 Newsletter AI-Empire — Gennaio 2025',
  preheader: 'Le ultime novità, suggerimenti e offerte dalla piattaforma AI francese.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 Newsletter AI-Empire</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Gennaio 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ciao {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ecco le ultime novità da AI-Empire:
        </p>

        <!-- Novità 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 Novità: Endpoint SEO</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Genera contenuti ottimizzati per SEO con un solo clic. Integrali nel tuo blog o SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Scopri l\'endpoint SEO →
        </a>

        <!-- Novità 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Suggerimento: Ottimizza le tue chiamate API</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Risparmia fino al 30% sulle tue chiamate usando la cache intelligente. Ecco come:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Guarda il tutorial →
        </a>

        <!-- Offerta -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Offerta esclusiva per abbonati: -30% su NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Usa il codice NEWSLETTER30</p>
        </div>

        <!-- Statistiche -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 I nostri numeri del mese</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Utenti</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Chiamate API</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Soddisfazione</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Accedi alla dashboard →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La piattaforma AI francese per startup 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sito web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Annulla iscrizione</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Accedi alla dashboard →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === CAMPAGNA 5: PROGRAMMA DI RIFERIMENTO ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Programma di riferimento',
  subject: '💰 Guadagna €50 per ogni amico che referral!',
  preheader: 'Programma di riferimento: invita i tuoi amici, guadagna denaro.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Programma di riferimento</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Guadagna €50 per ogni amico referito</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ciao {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ti piace AI-Empire? <strong>Condividilo con i tuoi amici e guadagna denaro!</strong>
        </p>

        <!-- Come funziona -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Come funziona?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Condividi il tuo link di riferimento unico
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Il tuo amico si iscrive con il tuo link
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> Acquista un piano a pagamento
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> Ricevi <strong>€50</strong> sul tuo account!
          </p>
        </div>

        <!-- Link unico -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Il tuo link unico:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Vantaggi -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Vantaggi per chi riferisce</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 per ogni riuscito riferimento</li>
          <li>📊 Dashboard di monitoraggio in tempo reale</li>
          <li>💳 Pagamento via Stripe (bonifico bancario)</li>
          <li>🎁 -20% sul prossimo rinnovo</li>
          <li>⭐ Status "Riferitore Gold" dopo 5 riferimenti</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Condividi il mio link →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Nessun limite ai riferimenti. Più condividi, più guadagni!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La piattaforma AI francese per startup 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sito web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Annulla iscrizione</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Condividi il mio link →',
  trackingParams: '?utm_source=email&utm_medium=referral&utm_campaign=referral_program',
};

// === COLLECTION ===
export const emailTemplates: EmailTemplate[] = [
  productLaunchEmail,
  limitedOfferEmail,
  successStoriesEmail,
  monthlyNewsletterEmail,
  referralProgramEmail,
];

export const getEmailTemplateById = (id: string): EmailTemplate | undefined => {
  return emailTemplates.find((e) => e.id === id);
};

export const generateEmailSequence = (): EmailTemplate[] => {
  return [
    productLaunchEmail,
    limitedOfferEmail,
    successStoriesEmail,
    monthlyNewsletterEmail,
    referralProgramEmail,
  ];
};
