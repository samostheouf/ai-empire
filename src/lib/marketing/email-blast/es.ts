// ============================================
// AI-EMPIRE — Plantillas de Email Blast
// Campañas de email optimizadas para conversión
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

// === CAMPAÑA 1: LANZAMIENTO DE PRODUCTO ===
export const productLaunchEmail: EmailTemplate = {
  id: 'email-launch',
  name: 'Anuncio de lanzamiento',
  subject: '🚀 AI-Empire ya está aquí — La plataforma de IA francesa para startups',
  preheader: 'Obtén una API de IA gratuita en 5 minutos, con soporte en francés.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🚀 ¡AI-Empire ya está aquí!</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">La plataforma de IA francesa para startups</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hola {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Tenemos buenas noticias: <strong>¡AI-Empire se ha lanzado oficialmente!</strong>
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ahora tienes acceso a:
        </p>

        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0;">
          <p style="margin: 5px 0; color: #333;">✅ API de IA unificada (Groq + Gemini)</p>
          <p style="margin: 5px 0; color: #333;">✅ 3 endpoints: Generación, SEO, Código</p>
          <p style="margin: 5px 0; color: #333;">✅ Créditos gratuitos para empezar</p>
          <p style="margin: 5px 0; color: #333;">✅ Panel de control intuitivo en francés</p>
          <p style="margin: 5px 0; color: #333;">✅ Soporte en francés</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          <strong>Tu clave API:</strong> <code style="background: #f0f0f0; padding: 4px 8px; border-radius: 4px;">{{api_key}}</code>
        </p>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=launch&utm_campaign={{campaign_id}}"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Iniciar mi primera prueba →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Siguiente paso: Realiza tu primera llamada API en 2 minutos.
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sitio web</a> |
          <a href="https://ai-empire-steel.vercel.app/docs?utm_source=email&utm_medium=footer" style="color: #667eea;">Documentación</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar suscripción</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Iniciar mi primera prueba →',
  trackingParams: '?utm_source=email&utm_medium=launch&utm_campaign=product_launch',
};

// === CAMPAÑA 2: OFERTA LIMITADA -50% ===
export const limitedOfferEmail: EmailTemplate = {
  id: 'email-offer',
  name: 'Oferta limitada -50%',
  subject: '⚡ -50% en NeuraPortfolio — La oferta expira en 48h',
  preheader: 'Plantilla premium de Next.js a mitad de precio. 50+ componentes, modo oscuro, responsive.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 32px;">⚡ -50%</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 18px;">¡La oferta expira en 48h!</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hola {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Tenemos una <strong>oferta exclusiva</strong> para ti: <strong>-50% en NeuraPortfolio</strong>, la plantilla premium de Next.js para crear tu portfolio de IA.
        </p>

        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 20px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">⚠️ Limitada a 50 ventas — expira en 48h</p>
        </div>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Lo que obtienes:
        </p>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>✅ 50+ componentes React</li>
          <li>✅ Modo oscuro + responsive</li>
          <li>✅ Animaciones fluidas</li>
          <li>✅ Integración nativa de IA</li>
          <li>✅ Soporte en francés</li>
          <li>✅ Actualizaciones gratuitas de por vida</li>
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
            Aprovechar la oferta →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Después de 48h, el precio vuelve a €49. ¡No te pierdas esta oportunidad!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sitio web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar suscripción</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Aprovechar la oferta →',
  trackingParams: '?utm_source=email&utm_medium=offer&utm_campaign=limited_50',
};

// === CAMPAÑA 3: CASOS DE ÉXITO ===
export const successStoriesEmail: EmailTemplate = {
  id: 'email-success',
  name: 'Testimonios de clientes',
  subject: '💬 Cómo estas startups francesas triunfaron con la IA',
  preheader: '3 historias de clientes que demuestran que la IA es accesible para todos.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💬 Testimonios de clientes</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Su éxito puede ser el tuyo</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hola {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Queremos mostrarte lo que las startups francesas están logrando con AI-Empire.
        </p>

        <!-- Testimonio 1 -->
        <div style="background: #f8f9fa; border-left: 4px solid #11998e; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Reducimos nuestros costos de IA en un 60% al migrar a AI-Empire. La integración tomó 5 minutos y el soporte en francés es un verdadero plus."
          </p>
          <p style="margin: 0; font-weight: bold; color: #11998e;">— Marc, CTO de una startup en París</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: -60% costos, +40% velocidad</p>
        </div>

        <!-- Testimonio 2 -->
        <div style="background: #f8f9fa; border-left: 4px solid #38ef7d; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "Integré la IA en mi SaaS en 2 horas. Los clientes adoran las nuevas funcionalidades."
          </p>
          <p style="margin: 0; font-weight: bold; color: #38ef7d;">— Sophie, fundadora de un SaaS en Lyon</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: +25% de conversiones</p>
        </div>

        <!-- Testimonio 3 -->
        <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
          <p style="margin: 0 0 10px 0; font-style: italic; color: #333;">
            "El panel de control en francés es intuitivo. Mi equipo adoptó la IA en 1 día."
          </p>
          <p style="margin: 0; font-weight: bold; color: #667eea;">— Lucas, PM de una scale-up en Burdeos</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">Resultado: +40% de productividad</p>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=success&utm_campaign=testimonials"
             style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Unirse a los éxitos →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sitio web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar suscripción</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Unirse a los éxitos →',
  trackingParams: '?utm_source=email&utm_medium=success&utm_campaign=testimonials',
};

// === CAMPAÑA 4: NEWSLETTER MENSUAL ===
export const monthlyNewsletterEmail: EmailTemplate = {
  id: 'email-newsletter',
  name: 'Newsletter mensual',
  subject: '📰 Newsletter de AI-Empire — Enero 2025',
  preheader: 'Las últimas noticias, consejos y ofertas de la plataforma de IA francesa.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">📰 Newsletter de AI-Empire</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Enero 2025</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hola {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Estas son las últimas novedades de AI-Empire:
        </p>

        <!-- Novedad 1 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">🚀 Nuevo: Endpoint SEO</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Genera contenido optimizado para SEO con un solo clic. Intégralo en tu blog o SaaS.
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/seo?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Descubrir el endpoint SEO →
        </a>

        <!-- Novedad 2 -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📊 Consejo: Optimiza tus llamadas API</h3>
        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Ahorra hasta un 30% en tus llamadas usando caché inteligente. Así se hace:
        </p>
        <a href="https://ai-empire-steel.vercel.app/docs/cache?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan" style="color: #667eea; font-weight: bold;">
          Ver el tutorial →
        </a>

        <!-- Oferta -->
        <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin: 25px 0; border-radius: 8px;">
          <p style="margin: 0; color: #856404; font-weight: bold;">🎁 Oferta exclusiva para suscriptores: -30% en NeuraBlog</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #856404;">Usa el código NEWSLETTER30</p>
        </div>

        <!-- Estadísticas -->
        <h3 style="color: #667eea; margin: 25px 0 10px 0;">📈 Nuestras cifras del mes</h3>
        <div style="display: flex; justify-content: space-around; text-align: center; margin: 20px 0;">
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">+35%</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Usuarios</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">10K+</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Llamadas API</p>
          </div>
          <div style="padding: 10px;">
            <p style="margin: 0; font-size: 24px; font-weight: bold; color: #667eea;">4.8/5</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Satisfacción</p>
          </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/dashboard?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan"
             style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Acceder al panel →
          </a>
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sitio web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar suscripción</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Acceder al panel →',
  trackingParams: '?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_jan',
};

// === CAMPAÑA 5: PROGRAMA DE REFERIDOS ===
export const referralProgramEmail: EmailTemplate = {
  id: 'email-referral',
  name: 'Programa de referidos',
  subject: '💰 ¡Gana €50 por cada amigo que refieras!',
  preheader: 'Programa de referidos: invita a tus amigos, gana dinero.',
  body: `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">

      <!-- Header -->
      <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">💰 Programa de referidos</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Gana €50 por cada amigo referido</p>
      </div>

      <!-- Body -->
      <div style="padding: 30px;">

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          Hola {{first_name}},
        </p>

        <p style="font-size: 16px; color: #333; line-height: 1.6;">
          ¿Te gusta AI-Empire? <strong>¡Compártelo con tus amigos y gana dinero!</strong>
        </p>

        <!-- Cómo funciona -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">¿Cómo funciona?</h3>

        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>1.</strong> Comparte tu enlace de referido único
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>2.</strong> Tu amigo se registra con tu enlace
          </p>
          <p style="margin: 0 0 15px 0; font-size: 16px; color: #333;">
            <strong>3.</strong> Compra un plan de pago
          </p>
          <p style="margin: 0; font-size: 16px; color: #333;">
            <strong>4.</strong> ¡Recibes <strong>€50</strong> en tu cuenta!
          </p>
        </div>

        <!-- Enlace único -->
        <div style="background: #f0f0f0; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0 0 10px 0; font-size: 14px; color: #666;">Tu enlace único:</p>
          <p style="margin: 0; font-size: 16px; color: #667eea; font-weight: bold; word-break: break-all;">
            https://ai-empire-steel.vercel.app/ref/{{referral_code}}?utm_source=referral&utm_medium=email
          </p>
        </div>

        <!-- Ventajas -->
        <h3 style="color: #f5576c; margin: 25px 0 10px 0;">Ventajas del referidor</h3>

        <ul style="font-size: 16px; color: #333; line-height: 1.8;">
          <li>💰 €50 por cada referido exitoso</li>
          <li>📊 Panel de seguimiento en tiempo real</li>
          <li>💳 Pago vía Stripe (transferencia bancaria)</li>
          <li>🎁 -20% en tu próxima renovación</li>
          <li>⭐ Estado "Referidor Gold" después de 5 referidos</li>
        </ul>

        <!-- CTA -->
        <div style="text-align: center; margin: 30px 0;">
          <a href="https://ai-empire-steel.vercel.app/referrals?utm_source=email&utm_medium=referral&utm_campaign=referral_program"
             style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
            Compartir mi enlace →
          </a>
        </div>

        <p style="font-size: 14px; color: #666; line-height: 1.6; text-align: center;">
          Sin límite de referidos. ¡Cuanto más compartas, más ganarás!
        </p>

      </div>

      <!-- Footer -->
      <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="margin: 0; font-size: 12px; color: #999;">
          AI-Empire — La plataforma de IA francesa para startups 🇫🇷<br>
          <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=footer" style="color: #667eea;">Sitio web</a> |
          <a href="{{unsubscribe_url}}" style="color: #999;">Cancelar suscripción</a>
        </p>
      </div>

    </div>
  `,
  cta: 'Compartir mi enlace →',
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
