import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://ai-empire-steel.vercel.app';

const EMAIL_FROM = process.env.EMAIL_FROM || 'NeuraAPI <hello@neuraapi.com>';

export { EMAIL_FROM };

const EMAIL_COPY: Record<string, {
  orderSubject: string; orderConfirmation: string; paymentConfirmed: string;
  download: string; thanks: string; contactUs: string;
  apiKeySubject: string; apiKeyTitle: string; welcome: string;
  apiKeyDesc: string; plan: string; credits: string; docs: string; keepSafe: string;
}> = {
  fr: { orderSubject: '✅ Confirmation — ', orderConfirmation: 'Confirmation de commande', paymentConfirmed: '✅ Paiement confirmé', download: '📥 Télécharger le template', thanks: 'Merci pour votre achat !', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 Votre clé API NeuraAPI', apiKeyTitle: '🔑 Votre clé API', welcome: 'Bienvenue !', apiKeyDesc: 'Voici votre clé API pour accéder aux services NeuraAPI :', plan: 'Plan', credits: 'Crédits', docs: '📖 Voir la documentation', keepSafe: 'Conservez cette clé en lieu sûr.' },
  en: { orderSubject: '✅ Order Confirmed — ', orderConfirmation: 'Order Confirmation', paymentConfirmed: '✅ Payment Confirmed', download: '📥 Download Template', thanks: 'Thank you for your purchase!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 Your NeuraAPI Key', apiKeyTitle: '🔑 Your API Key', welcome: 'Welcome!', apiKeyDesc: 'Here is your API key to access NeuraAPI services:', plan: 'Plan', credits: 'Credits', docs: '📖 View Documentation', keepSafe: 'Keep this key safe.' },
  es: { orderSubject: '✅ Pedido Confirmado — ', orderConfirmation: 'Confirmación de Pedido', paymentConfirmed: '✅ Pago Confirmado', download: '📥 Descargar Plantilla', thanks: '¡Gracias por tu compra!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 Tu Clave API NeuraAPI', apiKeyTitle: '🔑 Tu Clave API', welcome: '¡Bienvenido!', apiKeyDesc: 'Aquí está tu clave API para acceder a los servicios de NeuraAPI:', plan: 'Plan', credits: 'Créditos', docs: '📖 Ver Documentación', keepSafe: 'Guarda esta clave en un lugar seguro.' },
  de: { orderSubject: '✅ Bestellung Bestätigt — ', orderConfirmation: 'Bestellbestätigung', paymentConfirmed: '✅ Zahlung Bestätigt', download: '📥 Template Herunterladen', thanks: 'Danke für deinen Kauf!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 Dein NeuraAPI Schlüssel', apiKeyTitle: '🔑 Dein API Schlüssel', welcome: 'Willkommen!', apiKeyDesc: 'Hier ist dein API-Schlüssel:', plan: 'Plan', credits: 'Guthaben', docs: '📖 Dokumentation Ansehen', keepSafe: 'Bewahre diesen Schlüssel sicher auf.' },
  it: { orderSubject: '✅ Ordine Confermato — ', orderConfirmation: 'Conferma Ordine', paymentConfirmed: '✅ Pagamento Confermato', download: '📥 Scarica Template', thanks: 'Grazie per il tuo acquisto!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 La Tua Chiave NeuraAPI', apiKeyTitle: '🔑 La Tua Chiave API', welcome: 'Benvenuto!', apiKeyDesc: 'Ecco la tua chiave API:', plan: 'Piano', credits: 'Crediti', docs: '📖 Vedi Documentazione', keepSafe: 'Conserva questa chiave in un posto sicuro.' },
  pt: { orderSubject: '✅ Pedido Confirmado — ', orderConfirmation: 'Confirmação de Pedido', paymentConfirmed: '✅ Pagamento Confirmado', download: '📥 Baixar Template', thanks: 'Obrigado pela sua compra!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 Sua Chave NeuraAPI', apiKeyTitle: '🔑 Sua Chave API', welcome: 'Bem-vindo!', apiKeyDesc: 'Aqui está sua chave API:', plan: 'Plano', credits: 'Créditos', docs: '📖 Ver Documentação', keepSafe: 'Guarde esta chave em local seguro.' },
  ja: { orderSubject: '✅ ご注文確認 — ', orderConfirmation: '注文確認', paymentConfirmed: '✅ お支払い確認', download: '📥 テンプレートをダウンロード', thanks: 'ご購入ありがとうございます！', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 NeuraAPI APIキー', apiKeyTitle: '🔑 APIキー', welcome: 'ようこそ！', apiKeyDesc: 'NeuraAPIサービスにアクセスするためのAPIキーです：', plan: 'プラン', credits: 'クレジット', docs: '📖 ドキュメントを見る', keepSafe: 'このキーは安全な場所に保管してください。' },
  ko: { orderSubject: '✅ 주문 확인 — ', orderConfirmation: '주문 확인', paymentConfirmed: '✅ 결제 확인', download: '📥 템플릿 다운로드', thanks: '구매해 주셔서 감사합니다!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 NeuraAPI API 키', apiKeyTitle: '🔑 API 키', welcome: '환영합니다!', apiKeyDesc: 'NeuraAPI 서비스에 접근하기 위한 API 키입니다:', plan: '플랜', credits: '크레딧', docs: '📖 문서 보기', keepSafe: '이 키를 안전한 곳에 보관하세요.' },
  zh: { orderSubject: '✅ 订单确认 — ', orderConfirmation: '订单确认', paymentConfirmed: '✅ 付款确认', download: '📥 下载模板', thanks: '感谢您的购买！', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 您的 NeuraAPI 密钥', apiKeyTitle: '🔑 API 密钥', welcome: '欢迎！', apiKeyDesc: '这是您访问 NeuraAPI 服务的 API 密钥：', plan: '套餐', credits: '积分', docs: '📖 查看文档', keepSafe: '请妥善保管此密钥。' },
  ar: { orderSubject: '✅ تأكيد الطلب — ', orderConfirmation: 'تأكيد الطلب', paymentConfirmed: '✅ تأكيد الدفع', download: '📥 تحميل القالب', thanks: 'شكراً لك على الشراء!', contactUs: 'support@neuraapi.com', apiKeySubject: '🔑 مفتاح NeuraAPI الخاص بك', apiKeyTitle: '🔑 مفتاح API', welcome: 'مرحباً!', apiKeyDesc: 'إليك مفتاح API للوصول إلى خدمات NeuraAPI:', plan: 'الخطة', credits: 'الرصيد', docs: '📖 عرض التوثيق', keepSafe: 'احفظ هذا المفتاح في مكان آمن.' },
};

interface SendOrderEmailProps {
  to: string;
  templateName: string;
  templatePrice: number;
  downloadUrl: string;
  lang?: string;
}

export async function sendOrderConfirmation({ to, templateName, templatePrice, downloadUrl, lang }: SendOrderEmailProps) {
  const price = (templatePrice / 100).toFixed(2);
  const c = EMAIL_COPY[lang || 'fr'] || EMAIL_COPY.fr;

  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: `${c.orderSubject}${templateName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
        <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">${c.orderConfirmation}</p>
          </div>
          <div style="padding: 32px;">
            <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 24px;">
              <p style="margin: 0; color: #166534; font-weight: 600;">${c.paymentConfirmed}</p>
            </div>
            <h2 style="margin: 0 0 8px; color: #1e293b;">${templateName}</h2>
            <p style="margin: 0 0 24px; color: #64748b;">${c.plan} : <strong>${price}€</strong></p>
            <a href="${downloadUrl}" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
              ${c.download}
            </a>

            <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <p style="margin: 0 0 8px; color: #1e40af; font-weight: 600;">🚀 Vous pourriez aussi aimer</p>
              <p style="margin: 0 0 12px; color: #64748b; font-size: 14px;">
                Utilisez le code <strong>BIENVENUE20</strong> pour -20% sur votre prochain template.
              </p>
              <a href="${appUrl}/templates" style="display: inline-block; background: #1e40af; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Découvrir les templates premium
              </a>
            </div>

            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
            <p style="color: #94a3b8; font-size: 13px; margin: 0;">
              ${c.thanks}
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    return { success: false, error };
  }

  return { success: true, data };
}

interface SendApiKeyEmailProps {
  to: string;
  apiKey: string;
  plan: string;
  lang?: string;
}

export async function sendApiKeyEmail({ to, apiKey, plan, lang }: SendApiKeyEmailProps) {
  const c = EMAIL_COPY[lang || 'fr'] || EMAIL_COPY.fr;

  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to,
    subject: c.apiKeySubject,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; padding: 40px 20px;">
        <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background: linear-gradient(135deg, #4F46E5, #7C3AED); padding: 32px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">NeuraAPI</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">${c.apiKeyTitle}</p>
          </div>
          <div style="padding: 32px;">
            <h2 style="margin: 0 0 16px; color: #1e293b;">${c.welcome}</h2>
            <p style="color: #64748b; margin: 0 0 16px;">${c.apiKeyDesc}</p>
            <div style="background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 13px; word-break: break-all; margin-bottom: 24px;">
              ${apiKey}
            </div>
            <p style="color: #64748b; margin: 0 0 8px;"><strong>${c.plan} :</strong> ${plan}</p>
            <p style="color: #64748b; margin: 0 0 24px;"><strong>${c.credits} :</strong> 100</p>
            <a href="${appUrl}/docs" style="display: block; background: #4F46E5; color: white; text-align: center; padding: 14px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
              ${c.docs}
            </a>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
            <p style="color: #94a3b8; font-size: 13px; margin: 0;">
              ${c.keepSafe}
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  if (error) {
    return { success: false, error };
  }

  return { success: true, data };
}
