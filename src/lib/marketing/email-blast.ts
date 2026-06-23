// ============================================
// AI-EMPIRE — Templates Email Blast
// Campagnes email maximisées pour conversion
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

// === CAMPAGNE 1: LANCEMENT PRODUIT ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Annonce de lancement',
  subject: '🚀 AI-Empire est enfin là — La plateforme AI française pour startups',
  preheader: 'Accède à une API IA gratuite, en 5 minutes, avec support en français.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 AI-Empire est enfin là!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">La plateforme AI française pour startups</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Salut {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          On a une bonne nouvelle: <strong>AI-Empire est enfin lancé!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Tu as maintenant accès à:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ API AI unifiée (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 endpoints: Génération, SEO, Code</p>
          <p style="margin: 5px 0; color: #333;">✅ Credits offerts pour démarrer</p>
          <p style="margin: 5px 0; color: #333;">✅ Dashboard français intuitif</p>
          <p style="margin: 5px 0; color: #333;">✅ Support en français</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>Ton API key:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Lancer mon premier test →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Prochaine étape: Fais ton premier appel API en 2 minutes.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plateforme AI française pour startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site web</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Documentation</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Se désabonner</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Lancer mon premier test →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === CAMPAGNE 2: OFFRE LIMITÉE -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Offre limitée -50%',
  subject: '⚡ -50% sur NeuraPortfolio — Offre expire dans 48h',
  preheader: 'Template Next.js premium à moitié prix. 50+ composants, dark mode, responsive.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">Offre expire dans 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Salut {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          On te propose une <strong>offre exclusive</strong>: <strong>-50% sur NeuraPortfolio</strong>, le template Next.js premium pour créer ton portfolio AI.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Offre limitée à 50 ventes — expire dans 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ce que tu obtiens:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ composants React</li>
          <li>✅ Dark mode + responsive</li>
          <li>✅ Animations fluides</li>
          <li>✅ Intégration AI native</li>
          <li>✅ Support en français</li>
          <li>✅ Mises à jour gratuites à vie</li>
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
            Profiter de l'offre →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Après 48h, le prix revient à €49. Ne rate pas cette occasion!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plateforme AI française pour startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Se désabonner</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Profiter de l\'offre →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === CAMPAGNE 3: SUCCESS STORIES ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Témoignages clients',
  subject: '💬 Comment ces startups françaises ont réussi avec l\'IA',
  preheader: '3 cas clients qui prouvent que l\'IA est accessible à tous.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Témoignages clients</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Leur succès peut être le tien</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Salut {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          On veut te montrer ce que les startups françaises accomplissent avec AI-Empire.
        </p>

        <!-- Témoignage 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "On a réduit nos coûts AI de 60% en passant à AI-Empire. L'intégration a pris 5 minutes et le support en français est un vrai plus."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO d'une startup à Paris</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Résultat: -60% coûts, +40% rapidité</p>
        </div>

        <!-- Témoignage 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "J'ai intégré l'IA dans mon SaaS en 2 heures. Les clients adorent les nouvelles features."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, founder d'un SaaS à Lyon</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Résultat: +25% de conversions</p>
        </div>

        <!-- Témoignage 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Le dashboard français est intuitif. Mon équipe a adopté l'IA en 1 jour."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM d'une scale-up à Bordeaux</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Résultat: +40% de productivité</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Rejoindre les réussites →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plateforme AI française pour startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Se désabonner</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Rejoindre les réussites →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === CAMPAGNE 4: NEWSLETTER MENSUELLE ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Newsletter mensuelle',
  subject: '📰 Newsletter AI-Empire — Janvier 2025',
  preheader: 'Les dernières nouvelles, astuces et offres de la plateforme AI française.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 Newsletter AI-Empire</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Janvier 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Salut {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Voici les dernières nouvelles d'AI-Empire:
        </p>

        <!-- Nouveauté 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 Nouveau: Endpoint SEO</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Génère du contenu optimisé SEO en 1 clic. Intègre-le dans ton blog ou ton SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Découvrir l'endpoint SEO →
        </a>

        <!-- Nouveauté 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Astuce: Optimiser tes appels API</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Sauvegarde jusqu'à 30% sur tes appels en utilisant le cache intelligent. Voici comment:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Voir le tutoriel →
        </a>

        <!-- Offre -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Offre exclusive abonnés: -30% sur NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Utilise le code NEWSLETTER30</p>
        </div>

        <!-- Statistiques -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 Nos chiffres du mois</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Utilisateurs</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Appels API</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Satisfaction</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Accéder au dashboard →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plateforme AI française pour startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Se désabonner</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Accéder au dashboard →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === CAMPAGNE 5: PROGRAMME DE PARRAINAGE ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Programme de parrainage',
  subject: '💰 Gagne €50 pour chaque ami référé!',
  preheader: 'Programme de parrainage: invites tes amis, gagne de l\'argent.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Programme de parrainage</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Gagne €50 par ami référé</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Salut {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Tu aimes AI-Empire? <strong>Partage-le avec tes amis et gagne de l'argent!</strong>
        </p>

        <!-- Comment ça marche -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Comment ça marche?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Partage ton lien de parrainage unique
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Ton ami s'inscrit avec ton lien
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> Il achète un plan payant
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> Tu reçois <strong>€50</strong> sur ton compte!
          </p>
        </div>

        <!-- Lien unique -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Ton lien unique:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Avantages -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Avantages parrain</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 par parrainage réussi</li>
          <li>📊 Dashboard de suivi en temps réel</li>
          <li>💳 Paiement via Stripe (virement bancaire)</li>
          <li>🎁 -20% sur ton prochain renouvellement</li>
          <li>⭐ Statut "Parrain Gold" après 5 parrainages</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Partager mon lien →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Pas de limite de parrainages. Plus tu partages, plus tu gagnes!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plateforme AI française pour startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Site web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Se désabonner</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Partager mon lien →',
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
