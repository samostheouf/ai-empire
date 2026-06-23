import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'fr',
  campaigns: [
    {
      id: 'email-launch',
      name: 'Annonce de lancement',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire est en ligne — Votre boîte à outils SaaS propulsée par l\'IA', previewText: 'Des modèles, des API IA, Stripe et l\'auth — tout en une seule plateforme.' },
        { id: 'launch-b', subject: 'Nous venons de lancer : modèles Next.js 14 + API IA', previewText: 'Tout ce dont vous avez besoin pour lancer votre SaaS en 24 heures.' },
        { id: 'launch-c', subject: 'Lancez votre SaaS plus vite — AI Empire est arrivé', previewText: 'Des modèles professionnels avec intégration IA, prêts à déployer.' },
      ],
      previewText: 'Des modèles, des API IA, Stripe et l\'auth — tout en une seule plateforme.',
      cta: 'Découvrir AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire est là</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">La boîte à outils complète pour créer des produits SaaS propulsés par l'IA</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Bonjour {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Nous sommes ravis d'annoncer le lancement d'<strong>AI Empire</strong> — une plateforme conçue pour aider les développeurs à livrer des produits SaaS propulsés par l'IA plus rapidement.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Voici ce qui est inclus :</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Modèles professionnels Next.js 14 (à partir de 19 €)</p>
      <p style="margin:4px 0;color:#333;">✅ API IA unifiée — Groq + Gemini en un seul endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Intégration de facturation Stripe configurée</p>
      <p style="margin:4px 0;color:#333;">✅ Authentification prête à l'emploi</p>
      <p style="margin:4px 0;color:#333;">✅ Tableau de bord administrateur inclus</p>
      <p style="margin:4px 0;color:#333;">✅ Niveau API gratuit — 100 crédits à l'inscription</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Que vous construisiez une boutique en ligne, un blog ou un portfolio, AI Empire vous offre les fondations nécessaires.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Découvrir AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Modèles disponibles</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Modèle e-commerce complet avec Stripe, panier et tableau de bord administrateur</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog optimisé pour le SEO avec MDX, mode sombre et flux RSS</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfolio professionnel avec animations, mode sombre et formulaire de contact</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Pack complet — 299 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Les 6 modèles + support prioritaire + mises à jour gratuites</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      Des questions ? Répondez à cet e-mail — nous lisons chaque réponse.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      L'équipe AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Créez des produits SaaS propulsés par l'IA plus vite<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-update',
      name: 'Mise à jour produit',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'Les nouveautés — Mises à jour AI Empire de ce mois', previewText: 'Nouvelles fonctionnalités, améliorations et ce qui arrive ensuite.' },
        { id: 'update-b', subject: 'Journal des modifications AI Empire — Nouveaux modèles et fonctionnalités API', previewText: 'Nous avons beaucoup travaillé. Voici ce qui a été livré.' },
        { id: 'update-c', subject: 'Votre mise à jour mensuelle AI Empire est arrivée', previewText: 'Nouvelles intégrations, améliorations de performances et fonctionnalités à venir.' },
      ],
      previewText: 'Nouvelles fonctionnalités, améliorations et ce qui arrive ensuite.',
      cta: 'Voir le journal',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">Les nouveautés chez AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Mise à jour mensuelle du produit — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Bonjour {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Voici ce que nous avons livré ce mois-ci :
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Nouvelle fonctionnalité : Endpoint de génération de code IA</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Un nouvel endpoint API optimisé pour les tâches de génération de code. Compatible avec Groq Llama 3 et Gemini Pro. Disponible sur tous les forfaits, y compris le forfait gratuit.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Amélioré : Processus de paiement NeuraStore</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Expérience de paiement repensée avec prise en charge d'Apple Pay et Google Pay. Le taux de conversion a augmenté de 15 % lors des tests.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Mis à jour : Documentation API</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Documentation entièrement réécrite avec des exemples interactifs, des extraits de code à copier-coller et un nouveau guide de démarrage rapide.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">À venir le mois prochain</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Optimiseur SEO alimenté par l'IA pour NeuraBlog. Méta-descriptions automatiques, images Open Graph et génération de données structurées.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Voir le journal complet
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Merci de construire avec AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      L'équipe AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Créez des produits SaaS propulsés par l'IA plus vite<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-newsletter',
      name: 'Newsletter mensuelle',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Monthly — Astuces, tutoriels et nouveautés', previewText: 'Votre dose mensuelle d\'infos sur l\'IA et le SaaS.' },
        { id: 'newsletter-b', subject: 'Ce mois-ci dans l\'IA et le SaaS — Newsletter AI Empire', previewText: 'Points forts de la communauté, nouvelles fonctionnalités et analyses du marché.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — Ce que nous avons appris ce mois-ci', previewText: 'Conseils pratiques pour créer des produits propulsés par l\'IA.' },
      ],
      previewText: 'Votre dose mensuelle d\'infos sur l\'IA et le SaaS.',
      cta: 'En savoir plus',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Monthly</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Numéro #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Bonjour {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Bienvenue dans la newsletter de ce mois-ci. Voici ce qui se passe dans la communauté AI Empire et dans le secteur plus large de l'IA et du SaaS.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutoriels</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Comment ajouter un chat IA à votre application Next.js</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Guide étape par étape pour intégrer l'endpoint de chat d'AI Empire dans une application Next.js. Comprend des exemples de code et des conseils de déploiement.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Bonnes pratiques d'intégration Stripe pour le SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Leçons tirées de la création du flux de paiement de NeuraStore. Gestion des abonnements, webhooks et configuration du portail client.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Déployer Next.js 14 sur Vercel : guide complet</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">De zéro à la production. Variables d'environnement, domaines, déploiements de prévisualisation et optimisation des performances.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Points forts de la communauté</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Projet en vedette :</strong> L'un de nos utilisateurs a lancé un SaaS de traitement de documents en utilisant NeuraStore comme modèle de base et l'API d'AI Empire pour l'extraction de texte. De zéro à des clients payants en 3 semaines.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Astuce du mois :</strong> Utilisez Groq pour les réponses en temps réel (faible latence) et Gemini pour les tâches de raisonnement complexes. AI Empire vous permet de basculer entre les modèles en changeant un seul paramètre.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Analyses du secteur</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      Le marché des API IA continue d'évoluer rapidement. Nous constatons une tendance claire vers les endpoints unifiés — les développeurs veulent une seule intégration, pas cinq. AI Empire a été conçu pour cette réalité et nous ajoutons de nouveaux modèles régulièrement.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Lire le blog complet
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      À bientôt,<br>L'équipe AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Créez des produits SaaS propulsés par l'IA plus vite<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site web</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-reengagement',
      name: 'Réactivation',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'Nous vous manquez — Votre compte AI Empire vous attend', previewText: 'Revenez et recevez 50 crédits offerts.' },
        { id: 'reeng-b', subject: 'Vous y réfléchissez encore ? Vos crédits gratuits expirent bientôt', previewText: '100 crédits gratuits vous attendent. Revenez et créez.' },
        { id: 'reeng-c', subject: 'Beaucoup de choses ont changé chez AI Empire depuis votre dernière visite', previewText: 'Nouvelles fonctionnalités, nouveaux modèles et crédits bonus pour vous.' },
      ],
      previewText: 'Revenez et recevez 50 crédits offerts.',
      cta: 'Réactiver mon compte',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Nous vous manquez</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Votre compte AI Empire est toujours là — et nous avons réservé quelque chose pour vous</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Bonjour {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Cela fait un moment que vous n'avez pas visité AI Empire. Nous voulions vous informer que votre compte est toujours actif et nous avons ajouté <strong>50 crédits bonus</strong> pour vous aider à reprendre.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Crédits</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Gratuits. Sans engagement.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Depuis votre dernière visite, nous avons ajouté :</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>Nouvel endpoint de génération de code IA</li>
      <li>Processus de paiement NeuraStore amélioré</li>
      <li>Documentation API entièrement réécrite</li>
      <li>Améliorations des SDK JavaScript et Python</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Réactiver mon compte
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Si vous ne souhaitez plus recevoir d'e-mails, vous pouvez <a href="{{unsubscribe_url}}" style="color:#999;">vous désabonner</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Créez des produits SaaS propulsés par l'IA plus vite<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-upgrade',
      name: 'Offre de mise à niveau',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Passez au niveau supérieur — Mise à jour de votre forfait AI Empire', previewText: 'Plus de crédits, plus de modèles, support prioritaire.' },
        { id: 'upgrade-b', subject: 'Votre utilisation d\'AI Empire augmente — Le moment de passer au niveau supérieur ?', previewText: 'Obtenez plus de crédits API et des modèles premium.' },
        { id: 'upgrade-c', subject: 'Offre spéciale : -20 % sur les modèles AI Empire', previewText: 'Offre à durée limitée pour les utilisateurs actifs. Passez au niveau supérieur maintenant.' },
      ],
      previewText: 'Plus de crédits, plus de modèles, support prioritaire.',
      cta: 'Mise à niveau — -20 %',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Passez au niveau supérieur</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">-20 % sur les modèles pour les utilisateurs actifs d'AI Empire</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Bonjour {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Vous utilisez activement AI Empire — et nous voulons vous en remercier. Voici une <strong>remise de 20 %</strong> exclusive sur tous les modèles et le pack complet.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Utilisez le code lors du paiement :</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">Ce que vous obtenez avec les modèles</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 € → 23,20 € avec le code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Modèle e-commerce avec Stripe, panier, tableau de bord administrateur, recommandations IA</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 € → 15,20 € avec le code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Modèle de blog avec MDX, mode sombre, RSS, optimisation SEO</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 € → 23,20 € avec le code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Modèle de portfolio avec animations, mode sombre, formulaire de contact</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Pack complet — 299 € → 239,20 € avec le code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Les 6 modèles + support prioritaire + mises à jour gratuites. Le meilleur rapport qualité-prix.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Mise à niveau — -20 %
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Cette offre expire dans 72 heures. Code valable pour une seule utilisation.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Créez des produits SaaS propulsés par l'IA plus vite<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Site web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Se désabonner</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
