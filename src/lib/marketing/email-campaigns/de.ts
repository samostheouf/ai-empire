import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'de',
  campaigns: [
    {
      id: 'email-launch',
      name: 'Launch-Ankündigung',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire ist da — Ihr KI-gestütztes SaaS-Toolkit', previewText: 'Vorlagen, KI-APIs, Stripe und Auth — alles in einer Plattform.' },
        { id: 'launch-b', subject: 'Wir haben gerade gestartet: Next.js 14-Vorlagen + KI-APIs', previewText: 'Alles, was Sie brauchen, um Ihr SaaS in 24 Stunden aufzusetzen.' },
        { id: 'launch-c', subject: 'Starten Sie Ihr SaaS schneller — AI Empire ist da', previewText: 'Professionelle Vorlagen mit KI-Integration, bereit zum Deployen.' },
      ],
      previewText: 'Vorlagen, KI-APIs, Stripe und Auth — alles in einer Plattform.',
      cta: 'AI Empire entdecken',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire ist da</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Das komplette Toolkit für die Erstellung KI-gestützter SaaS-Produkte</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hallo {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Wir freuen uns, die Launch von <strong>AI Empire</strong> anzukündigen — eine Plattform, die Entwicklern hilft, KI-gestützte SaaS-Produkte schneller auf den Markt zu bringen.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Hier ist, was enthalten ist:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Professionelle Next.js 14-Vorlagen (ab 19 €)</p>
      <p style="margin:4px 0;color:#333;">✅ Einheitliche KI-API — Groq + Gemini in einem Endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Stripe-Abrechnungsintegration konfiguriert</p>
      <p style="margin:4px 0;color:#333;">✅ Authentifizierung direkt einsetzbar</p>
      <p style="margin:4px 0;color:#333;">✅ Admin-Dashboard enthalten</p>
      <p style="margin:4px 0;color:#333;">✅ Kostenloses API-Tier — 100 Credits bei der Anmeldung</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Ob Sie einen Online-Shop, einen Blog oder ein Portfolio erstellen — AI Empire bietet Ihnen die Grundlage, die Sie brauchen.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        AI Empire entdecken
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Verfügbare Vorlagen</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Komplette E-Commerce-Vorlage mit Stripe, Warenkorb und Admin-Dashboard</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">SEO-optimierter Blog mit MDX, Dark Mode und RSS-Feed</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Professionelles Portfolio mit Animationen, Dark Mode und Kontaktformular</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Komplettpaket — 299 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Alle 6 Vorlagen + bevorzugter Support + kostenlose Updates</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      Fragen? Antworten Sie auf diese E-Mail — wir lesen jede Nachricht.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Das AI Empire-Team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Erstellen Sie KI-gestützte SaaS-Produkte schneller<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Webseite</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Dokumentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Abmelden</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-update',
      name: 'Produkt-Update',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'Was ist neu — AI Empire-Updates für diesen Monat', previewText: 'Neue Funktionen, Verbesserungen und was als Nächstes kommt.' },
        { id: 'update-b', subject: 'AI Empire-Changelog — Neue Vorlagen und API-Funktionen', previewText: 'Wir waren fleißig. Hier ist, was wir veröffentlicht haben.' },
        { id: 'update-c', subject: 'Ihr monatliches AI Empire-Update ist da', previewText: 'Neue Integrationen, Leistungsverbesserungen und kommende Funktionen.' },
      ],
      previewText: 'Neue Funktionen, Verbesserungen und was als Nächstes kommt.',
      cta: 'Changelog ansehen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">Was ist neu bei AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Monatliches Produkt-Update — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hallo {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Hier ist, was wir diesen Monat veröffentlicht haben:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Neue Funktion: KI-Code-Generierungs-Endpoint</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Ein neuer API-Endpoint, optimiert für Code-Generierungsaufgaben. Unterstützt Groq Llama 3 und Gemini Pro. Verfügbar in allen Tarifen, einschließlich des kostenlosen.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Verbessert: NeuraStore-Checkout-Ablauf</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Redesign der Checkout-Erfahrung mit Apple Pay- und Google Pay-Unterstützung. Die Conversion-Rate verbesserte sich um 15 % in den Tests.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Aktualisiert: API-Dokumentation</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Vollständig überarbeitete Dokumentation mit interaktiven Beispielen, kopierbaren Code-Snippets und einem neuen Quickstart-Leitfaden.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Kommt nächsten Monat</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          KI-gestützter SEO-Optimierer für NeuraBlog. Automatische Meta-Beschreibungen, Open-Graph-Bilder und strukturierte Datengenerierung.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Vollständigen Changelog ansehen
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Vielen Dank, dass Sie mit AI Empire entwickeln.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Das AI Empire-Team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Erstellen Sie KI-gestützte SaaS-Produkte schneller<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Webseite</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Dokumentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Abmelden</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-newsletter',
      name: 'Monatlicher Newsletter',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Monthly — Tipps, Tutorials und Neuigkeiten', previewText: 'Ihre monatliche Dosis an KI- und SaaS-Einblicken.' },
        { id: 'newsletter-b', subject: 'Diesen Monat in KI und SaaS — AI Empire Newsletter', previewText: 'Community-Highlights, neue Funktionen und Brancheneinblicke.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — Was wir diesen Monat gelernt haben', previewText: 'Praktische Tipps für die Erstellung KI-gestützter Produkte.' },
      ],
      previewText: 'Ihre monatliche Dosis an KI- und SaaS-Einblicken.',
      cta: 'Weiterlesen',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Monthly</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Ausgabe #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hallo {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Willkommen zum Newsletter dieses Monats. Hier ist, was in der AI Empire-Community und im weiteren KI-/SaaS-Bereich passiert ist.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutorials</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">So fügen Sie einen KI-Chat zu Ihrer Next.js-App hinzu</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Schritt-für-Schritt-Anleitung zur Integration des AI Empire Chat-Endpoints in eine Next.js-Anwendung. Inklusive Codebeispiele und Deployment-Tipps.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Best Practices für die Stripe-Integration im SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Erfahrungen aus dem Aufbau des NeuraStore-Zahlungsflusses. Abonnements-Verwaltung, Webhooks und Portal-Setup für Kunden.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Next.js 14 auf Vercel deployen: Kompletter Leitfaden</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Von Null bis Produktion. Umgebungsvariablen, Domains, Preview-Deployments und Leistungsoptimierung.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Community-Highlights</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Vorgestelltes Projekt:</strong> Einer unserer Benutzer hat ein SaaS zur Dokumentenverarbeitung gestartet und dabei NeuraStore als Basisvorlage sowie die AI Empire-API zur Textextraktion eingesetzt. Von Null zu zahlenden Kunden in 3 Wochen.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Tipp des Monats:</strong> Verwenden Sie Groq für Echtzeitantworten (niedrige Latenz) und Gemini für komplexe Denkaufgaben. AI Empire ermöglicht den Wechsel zwischen Modellen mit einer einzigen Parameteränderung.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Brancheneinblicke</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      Der KI-API-Markt entwickelt sich weiterhin rasant. Wir beobachten einen klaren Trend zu einheitlichen Endpoints — Entwickler wollen eine Integration, nicht fünf. AI Empire wurde für diese Realität gebaut, und wir fügen regelmäßig neue Modelle hinzu.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Vollständigen Blog lesen
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Bis zum nächsten Monat,<br>Das AI Empire-Team
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Erstellen Sie KI-gestützte SaaS-Produkte schneller<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Webseite</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Abmelden</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-reengagement',
      name: 'Reaktivierung',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'Wir vermissen Sie — Ihr AI Empire-Konto wartet', previewText: 'Kehren Sie zurück und erhalten Sie 50 Bonus-Credits.' },
        { id: 'reeng-b', subject: 'Noch am Überlegen? Ihre kostenlosen Credits laufen ab', previewText: '100 kostenlose Credits warten auf Sie. Kehren Sie zurück und entwickeln Sie.' },
        { id: 'reeng-c', subject: 'Seit Ihrem letzten Besuch hat sich bei AI Empire viel verändert', previewText: 'Neue Funktionen, neue Vorlagen und Bonus-Credits für Sie.' },
      ],
      previewText: 'Kehren Sie zurück und erhalten Sie 50 Bonus-Credits.',
      cta: 'Konto reaktivieren',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Wir vermissen Sie</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Ihr AI Empire-Konto ist noch da — und wir haben etwas für Sie aufgehoben</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hallo {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Es ist eine Weile her, dass Sie AI Empire besucht haben. Wir möchten Sie darüber informieren, dass Ihr Konto noch aktiv ist und wir <strong>50 Bonus-Credits</strong> hinzugefügt haben, um Ihnen beim Wiedereinstieg zu helfen.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Credits</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Kostenlos. Ohne Bedingungen.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Seit Ihrem letzten Besuch haben wir hinzugefügt:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>Neuer KI-Code-Generierungs-Endpoint</li>
      <li>Verbesserter NeuraStore-Checkout-Ablauf</li>
      <li>Vollständig überarbeitete API-Dokumentation</li>
      <li>JavaScript- und Python-SDK-Verbesserungen</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Mein Konto reaktivieren
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Wenn Sie keine E-Mails mehr erhalten möchten, können Sie sich <a href="{{unsubscribe_url}}" style="color:#999;">abmelden</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Erstellen Sie KI-gestützte SaaS-Produkte schneller<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Webseite</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Dokumentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Abmelden</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-upgrade',
      name: 'Upgrade-Angebot',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Schalten Sie mehr frei — Upgraden Sie Ihren AI Empire-Plan heute', previewText: 'Mehr Credits, mehr Vorlagen, bevorzugter Support.' },
        { id: 'upgrade-b', subject: 'Ihre AI Empire-Nutzung wächst — Zeit für ein Upgrade?', previewText: 'Erhalten Sie mehr API-Credits und Premium-Vorlagen.' },
        { id: 'upgrade-c', subject: 'Sonderangebot: 20 % Rabatt auf AI Empire-Vorlagen', previewText: 'Zeitlich begrenztes Angebot für aktive Nutzer. Upgraden Sie jetzt.' },
      ],
      previewText: 'Mehr Credits, mehr Vorlagen, bevorzugter Support.',
      cta: 'Jetzt upgraden — 20 % Rabatt',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Steigern Sie Ihr SaaS</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">20 % Rabatt auf Vorlagen für aktive AI Empire-Nutzer</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hallo {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Sie nutzen AI Empire aktiv — und wir möchten das belohnen. Hier ist ein exklusiver <strong>20 %-Rabatt</strong> auf alle Vorlagen und das Komplettpaket.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Code beim Checkout eingeben:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">Was Sie mit den Vorlagen erhalten</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 € → 23,20 € mit Code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">E-Commerce-Vorlage mit Stripe, Warenkorb, Admin-Dashboard, KI-Empfehlungen</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 € → 15,20 € mit Code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog-Vorlage mit MDX, Dark Mode, RSS, SEO-Optimierung</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 € → 23,20 € mit Code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfolio-Vorlage mit Animationen, Dark Mode, Kontaktformular</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Komplettpaket — 299 € → 239,20 € mit Code</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Alle 6 Vorlagen + bevorzugter Support + kostenlose Updates. Bester Wert.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Jetzt upgraden — 20 % Rabatt
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Dieses Angebot läuft in 72 Stunden ab. Code gültig für einmalige Nutzung.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Erstellen Sie KI-gestützte SaaS-Produkte schneller<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Webseite</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Dokumentation</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Abmelden</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
