// ============================================
// AI-EMPIRE — E-Mail-Blast-Vorlagen
// Conversionsoptimierte E-Mail-Kampagnen
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

// === KAMPAGNE 1: PRODUKTLAUNCH ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Launch-Ankündigung',
  subject: '🚀 AI-Empire ist da — Die französische KI-Plattform für Startups',
  preheader: 'Erhalte eine kostenlose KI-API in 5 Minuten mit französischem Support.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire ist da!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Die französische KI-Plattform für Startups</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hallo {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Wir haben großartige Neuigkeiten: <strong>AI-Empire ist offiziell gestartet!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Du hast jetzt Zugriff auf:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ Einheitliche KI-API (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 Endpunkte: Generierung, SEO, Code</p>
          <p style="margin: 5px 0; color: #333;">✅ Kostenlose Credits zum Starten</p>
          <p style="margin: 5px 0; color: #333;">✅ Intuitives französisches Dashboard</p>
          <p style="margin: 5px 0; color: #333;">✅ Französischer Support</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>Dein API-Schlüssel:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Meinen ersten Test starten →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Nächster Schritt: Führe deinen ersten API-Aufruf in 2 Minuten durch.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — Die französische KI-Plattform für Startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Dokumentation</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Abbestellen</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Meinen ersten Test starten →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === KAMPAGNE 2: LIMITIERTES ANGEBOT -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Limitiertes Angebot -50%',
  subject: '⚡ -50% auf NeuraPortfolio — Angebot endet in 48h',
  preheader: 'Premium Next.js-Vorlage zum halben Preis. 50+ Komponenten, Dark Mode, responsiv.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">Angebot endet in 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hallo {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Wir haben ein <strong>exklusives Angebot</strong> für dich: <strong>-50% auf NeuraPortfolio</strong>, die Premium Next.js-Vorlage für dein KI-Portfolio.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Limitiert auf 50 Verkäufe — endet in 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Was du bekommst:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ React-Komponenten</li>
          <li>✅ Dark Mode + responsiv</li>
          <li>✅ Flüssige Animationen</li>
          <li>✅ Native KI-Integration</li>
          <li>✅ Französischer Support</li>
          <li>✅ Kostenlose Updates auf Lebenszeit</li>
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
            Angebot sichern →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Nach 48h kostet das Angebot wieder €49. Verpasse diese Gelegenheit nicht!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — Die französische KI-Plattform für Startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Abbestellen</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Angebot sichern →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === KAMPAGNE 3: ERFOLGSGESCHICHTEN ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Kundenstimmen',
  subject: '💬 Wie diese französischen Startups mit KI erfolgreich wurden',
  preheader: '3 Kundengeschichten, die beweisen, dass KI für jeden zugänglich ist.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Kundenstimmen</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Ihr Erfolg kann deiner sein</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hallo {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Wir möchten dir zeigen, was französische Startups mit AI-Empire erreichen.
        </p>

        <!-- Zeugnis 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Wir haben unsere KI-Kosten um 60% gesenkt, indem wir zu AI-Empire gewechselt sind. Die Integration dauerte 5 Minuten und der französische Support ist ein echter Plus."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO eines Startups in Paris</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Ergebnis: -60% Kosten, +40% Geschwindigkeit</p>
        </div>

        <!-- Zeugnis 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Ich habe KI in mein SaaS in 2 Stunden integriert. Die Kunden lieben die neuen Funktionen."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, Gründerin eines SaaS in Lyon</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Ergebnis: +25% Conversions</p>
        </div>

        <!-- Zeugnis 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Das französische Dashboard ist intuitiv. Mein Team hat KI in 1 Tag übernommen."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM eines Scale-ups in Bordeaux</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Ergebnis: +40% Produktivität</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Den Erfolgsgeschichten beitreten →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — Die französische KI-Plattform für Startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Abbestellen</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Den Erfolgsgeschichten beitreten →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === KAMPAGNE 4: MONATLICHER NEWSLETTER ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Monatlicher Newsletter',
  subject: '📰 AI-Empire Newsletter — Januar 2025',
  preheader: 'Die neuesten Neuigkeiten, Tipps und Angebote der französischen KI-Plattform.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 AI-Empire Newsletter</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Januar 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hallo {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hier sind die neuesten Neuigkeiten von AI-Empire:
        </p>

        <!-- Neuheit 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 Neu: SEO-Endpunkt</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Generiere SEO-optimierte Inhalte mit einem Klick. Integriere sie in deinen Blog oder dein SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Den SEO-Endpunkt entdecken →
        </a>

        <!-- Neuheit 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Tipp: Optimiere deine API-Aufrufe</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Spare bis zu 30% bei deinen Aufrufen durch intelligentes Caching. So geht's:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Tutorial ansehen →
        </a>

        <!-- Angebot -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Exklusives Abonnenten-Angebot: -30% auf NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Verwende den Code NEWSLETTER30</p>
        </div>

        <!-- Statistiken -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 Unsere Zahlen diesen Monat</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Nutzer</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">API-Aufrufe</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Zufriedenheit</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Zum Dashboard →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — Die französische KI-Plattform für Startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Abbestellen</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Zum Dashboard →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === KAMPAGNE 5: EMPFEHLUNGSPROGRAMM ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Empfehlungsprogramm',
  subject: '💰 Verdiene €50 für jeden empfohlenen Freund!',
  preheader: 'Empfehlungsprogramm: Lade deine Freunde ein, verdiene Geld.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Empfehlungsprogramm</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Verdiene €50 pro empfohlenem Freund</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hallo {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Du magst AI-Empire? <strong>Teile es mit deinen Freunden und verdiene Geld!</strong>
        </p>

        <!-- So funktioniert es -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Wie funktioniert es?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Teile deinen einzigartigen Empfehlungslink
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Dein Freund registriert sich mit deinem Link
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> Er kauft einen kostenpflichtigen Plan
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> Du erhältst <strong>€50</strong> auf dein Konto!
          </p>
        </div>

        <!-- Einzigartiger Link -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Dein einzigartiger Link:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Vorteile -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Empfehlervorteile</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 pro erfolgreicher Empfehlung</li>
          <li>📊 Echtzeit-Tracking-Dashboard</li>
          <li>💳 Zahlung über Stripe (Banküberweisung)</li>
          <li>🎁 -20% bei deiner nächsten Verlängerung</li>
          <li>⭐ "Gold-Empfehler"-Status nach 5 Empfehlungen</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Meinen Link teilen →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Keine Begrenzung der Empfehlungen. Je mehr du teilst, desto mehr verdienst du!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — Die französische KI-Plattform für Startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Website</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Abbestellen</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Meinen Link teilen →',
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
