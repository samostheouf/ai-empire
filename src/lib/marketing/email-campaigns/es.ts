import type { EmailCampaignBundle } from './types';

export const emailCampaignBundle: EmailCampaignBundle = {
  language: 'es',
  campaigns: [
    {
      id: 'email-launch',
      name: 'Anuncio de lanzamiento',
      type: 'launch_announcement',
      variants: [
        { id: 'launch-a', subject: 'AI Empire ya está aquí — Tu toolkit SaaS con IA', previewText: 'Plantillas, APIs de IA, Stripe y autenticación — todo en una sola plataforma.' },
        { id: 'launch-b', subject: 'Acabamos de lanzar: plantillas Next.js 14 + APIs de IA', previewText: 'Todo lo que necesitas para crear tu SaaS en 24 horas.' },
        { id: 'launch-c', subject: 'Lanza tu SaaS más rápido — AI Empire ha llegado', previewText: 'Plantillas profesionales con integración de IA, listas para desplegar.' },
      ],
      previewText: 'Plantillas, APIs de IA, Stripe y autenticación — todo en una sola plataforma.',
      cta: 'Explorar AI Empire',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement',
      htmlBody: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;font-weight:700;">AI Empire ya está aquí</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">El kit de herramientas completo para crear productos SaaS con IA</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hola {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Estamos emocionados de anunciar el lanzamiento de <strong>AI Empire</strong> — una plataforma diseñada para ayudar a los desarrolladores a crear productos SaaS con IA más rápido.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">Esto es lo que incluye:</p>

    <div style="background:#f8f9fa;border-left:4px solid #667eea;padding:16px 20px;margin:24px 0;border-radius:0 8px 8px 0;">
      <p style="margin:4px 0;color:#333;">✅ Plantillas profesionales de Next.js 14 (desde 19 €)</p>
      <p style="margin:4px 0;color:#333;">✅ API de IA unificada — Groq + Gemini en un solo endpoint</p>
      <p style="margin:4px 0;color:#333;">✅ Integración de facturación con Stripe configurada</p>
      <p style="margin:4px 0;color:#333;">✅ Autenticación lista para usar</p>
      <p style="margin:4px 0;color:#333;">✅ Panel de administración incluido</p>
      <p style="margin:4px 0;color:#333;">✅ Nivel gratuito de API — 100 créditos al registrarte</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Ya sea que estés construyendo una tienda en línea, un blog o un portfolio, AI Empire te proporciona la base que necesitas.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=launch&utm_campaign=launch_announcement" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Explorar AI Empire
      </a>
    </div>

    <h2 style="font-size:20px;color:#333;margin:32px 0 16px;">Plantillas disponibles</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Plantilla de comercio electrónico completa con Stripe, carrito y panel de administración</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Blog optimizado para SEO con MDX, modo oscuro y feed RSS</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Portfolio profesional con animaciones, modo oscuro y formulario de contacto</p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;">Paquete completo — 299 €</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Las 6 plantillas + soporte prioritario + actualizaciones gratuitas</p>
    </div>

    <p style="font-size:14px;color:#666;line-height:1.6;margin-top:32px;">
      ¿Preguntas? Responde a este correo — leemos cada respuesta.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      El equipo de AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crea productos SaaS con IA más rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sitio web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentación</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar suscripción</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-update',
      name: 'Actualización de producto',
      type: 'product_update',
      variants: [
        { id: 'update-a', subject: 'Novedades — Actualizaciones de AI Empire este mes', previewText: 'Nuevas funciones, mejoras y lo que viene después.' },
        { id: 'update-b', subject: 'Registro de cambios de AI Empire — Nuevas plantillas y funciones de API', previewText: 'Hemos estado muy ocupados. Esto es lo que se ha publicado.' },
        { id: 'update-c', subject: 'Tu actualización mensual de AI Empire ya está aquí', previewText: 'Nuevas integraciones, mejoras de rendimiento y próximas funciones.' },
      ],
      previewText: 'Nuevas funciones, mejoras y lo que viene después.',
      cta: 'Ver el registro',
      ctaUrl: 'https://ai-empire-steel.vercel.app/changelog?utm_source=email&utm_medium=update&utm_campaign=product_update',
      htmlBody: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">Novedades en AI Empire</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Actualización mensual del producto — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hola {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Esto es lo que publicamos este mes:
    </p>

    <div style="margin:24px 0;">
      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Nueva función: Endpoint de generación de código con IA</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Un nuevo endpoint de API optimizado para tareas de generación de código. Compatible con Groq Llama 3 y Gemini Pro. Disponible en todos los planes, incluido el gratuito.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Mejorado: Proceso de pago de NeuraStore</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Experiencia de pago rediseñada con soporte para Apple Pay y Google Pay. La tasa de conversión mejoró un 15% en las pruebas.
        </p>
      </div>

      <div style="border-bottom:1px solid #eee;padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Actualizado: Documentación de la API</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Documentación completamente reescrita con ejemplos interactivos, fragmentos de código para copiar y pegar, y una nueva guía de inicio rápido.
        </p>
      </div>

      <div style="padding:16px 0;">
        <p style="margin:0;font-weight:600;color:#333;">Próximamente el próximo mes</p>
        <p style="margin:8px 0 0;color:#666;font-size:14px;line-height:1.5;">
          Optimizador de SEO con IA para NeuraBlog. Meta descripciones automáticas, imágenes Open Graph y generación de datos estructurados.
        </p>
      </div>
    </div>

    <div style="text-align:center;margin:24px 0;">
      <a href="https://ai-empire-steel.vercel.app/changelog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Ver el registro completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Gracias por construir con AI Empire.
    </p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      El equipo de AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crea productos SaaS con IA más rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sitio web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentación</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar suscripción</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-newsletter',
      name: 'Newsletter mensual',
      type: 'newsletter',
      variants: [
        { id: 'newsletter-a', subject: 'AI Empire Monthly — Consejos, tutoriales y novedades', previewText: 'Tu dosis mensual de información sobre IA y SaaS.' },
        { id: 'newsletter-b', subject: 'Este mes en IA y SaaS — Newsletter de AI Empire', previewText: 'Destacados de la comunidad, nuevas funciones y perspectivas del mercado.' },
        { id: 'newsletter-c', subject: 'AI Empire #{{issue_number}} — Lo que aprendimos este mes', previewText: 'Consejos prácticos para crear productos con IA.' },
      ],
      previewText: 'Tu dosis mensual de información sobre IA y SaaS.',
      cta: 'Leer más',
      ctaUrl: 'https://ai-empire-steel.vercel.app/blog?utm_source=email&utm_medium=newsletter&utm_campaign=monthly_newsletter',
      htmlBody: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:24px;margin:0;">AI Empire Monthly</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:14px;margin:8px 0 0;">Número #{{issue_number}} — {{month_year}}</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hola {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Bienvenido al newsletter de este mes. Esto es lo que está sucediendo en la comunidad de AI Empire y en el ámbito más amplio de la IA y el SaaS.
    </p>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Tutoriales</h2>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Cómo agregar un chat de IA a tu aplicación Next.js</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Guía paso a paso para integrar el endpoint de chat de AI Empire en una aplicación Next.js. Incluye ejemplos de código y consejos de despliegue.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Mejores prácticas de integración de Stripe para SaaS</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">Lecciones de la creación del flujo de pago de NeuraStore. Gestión de suscripciones, webhooks y configuración del portal de clientes.</p>
    </div>

    <div style="margin:12px 0;">
      <p style="margin:0;font-weight:600;color:#333;"><a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Desplegar Next.js 14 en Vercel: guía completa</a></p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;line-height:1.5;">De cero a producción. Variables de entorno, dominios, despliegues de vista previa y optimización de rendimiento.</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Destacados de la comunidad</h2>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Proyecto destacado:</strong> Uno de nuestros usuarios lanzó un SaaS de procesamiento de documentos usando NeuraStore como plantilla base y la API de AI Empire para extracción de texto. De cero a clientes que pagan en 3 semanas.
      </p>
    </div>

    <div style="background:#f8f9fa;padding:16px;border-radius:8px;margin:12px 0;">
      <p style="margin:0;color:#333;font-size:14px;line-height:1.5;">
        <strong>Consejo del mes:</strong> Usa Groq para respuestas en tiempo real (baja latencia) y Gemini para tareas de razonamiento complejo. AI Empire te permite cambiar entre modelos con un simple cambio de parámetro.
      </p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:28px 0 12px;border-bottom:2px solid #667eea;padding-bottom:8px;">Perspectivas del mercado</h2>

    <p style="font-size:15px;color:#333;line-height:1.6;">
      El mercado de APIs de IA sigue evolucionando rápidamente. Estamos viendo una tendencia clara hacia endpoints unificados — los desarrolladores quieren una integración, no cinco. AI Empire fue construido para esta realidad y estamos añadiendo nuevos modelos regularmente.
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/blog" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:12px 28px;text-decoration:none;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">
        Leer el blog completo
      </a>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Hasta el próximo mes,<br>El equipo de AI Empire
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crea productos SaaS con IA más rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sitio web</a> ·
      <a href="https://ai-empire-steel.vercel.app/blog" style="color:#667eea;text-decoration:none;">Blog</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar suscripción</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-reengagement',
      name: 'Reactivación',
      type: 'reengagement',
      variants: [
        { id: 'reeng-a', subject: 'Te extrañamos — Tu cuenta de AI Empire te espera', previewText: 'Vuelve y recibe 50 créditos de bonificación.' },
        { id: 'reeng-b', subject: '¿Sigues pensándolo? Tus créditos gratuitos están por expirar', previewText: '100 créditos gratuitos te esperan. Vuelve y construye.' },
        { id: 'reeng-c', subject: 'Muchas cosas han cambiado en AI Empire desde tu última visita', previewText: 'Nuevas funciones, nuevas plantillas y créditos de bonificación para ti.' },
      ],
      previewText: 'Vuelve y recibe 50 créditos de bonificación.',
      cta: 'Reactivar mi cuenta',
      ctaUrl: 'https://ai-empire-steel.vercel.app?utm_source=email&utm_medium=reengagement&utm_campaign=reengagement',
      htmlBody: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Te extrañamos</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">Tu cuenta de AI Empire sigue aquí — y guardamos algo para ti</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hola {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Ha pasado un tiempo desde tu última visita a AI Empire. Queremos informarte que tu cuenta sigue activa y hemos añadido <strong>50 créditos de bonificación</strong> para ayudarte a empezar de nuevo.
    </p>

    <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:12px;padding:24px;text-align:center;margin:24px 0;">
      <p style="color:#ffffff;font-size:32px;font-weight:700;margin:0;">+50 Créditos</p>
      <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:8px 0 0;">Gratis. Sin compromisos.</p>
    </div>

    <p style="font-size:16px;color:#333;line-height:1.6;">Desde tu última visita, hemos añadido:</p>

    <ul style="font-size:15px;color:#333;line-height:1.8;padding-left:20px;">
      <li>Nuevo endpoint de generación de código con IA</li>
      <li>Proceso de pago de NeuraStore mejorado</li>
      <li>Documentación de la API completamente reescrita</li>
      <li>Mejoras en los SDK de JavaScript y Python</li>
    </ul>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/dashboard" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Reactivar mi cuenta
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Si ya no deseas recibir correos electrónicos, puedes <a href="{{unsubscribe_url}}" style="color:#999;">cancelar tu suscripción</a>.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crea productos SaaS con IA más rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sitio web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentación</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar suscripción</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },

    {
      id: 'email-upgrade',
      name: 'Oferta de actualización',
      type: 'upgrade_offer',
      variants: [
        { id: 'upgrade-a', subject: 'Desbloquea más — Actualiza tu plan de AI Empire hoy', previewText: 'Más créditos, más plantillas, soporte prioritario.' },
        { id: 'upgrade-b', subject: 'Tu uso de AI Empire está creciendo — ¿Es hora de actualizar?', previewText: 'Obtén más créditos de API y plantillas premium.' },
        { id: 'upgrade-c', subject: 'Oferta especial: 20% de descuento en plantillas de AI Empire', previewText: 'Oferta por tiempo limitado para usuarios activos. Actualiza ahora.' },
      ],
      previewText: 'Más créditos, más plantillas, soporte prioritario.',
      cta: 'Actualizar ahora — 20% dto.',
      ctaUrl: 'https://ai-empire-steel.vercel.app/pricing?utm_source=email&utm_medium=upgrade&utm_campaign=upgrade_offer',
      htmlBody: `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:48px 32px;text-align:center;">
    <h1 style="color:#ffffff;font-size:28px;margin:0 0 8px 0;">Eleva tu SaaS al siguiente nivel</h1>
    <p style="color:rgba(255,255,255,0.9);font-size:16px;margin:0;">20% de descuento en plantillas para usuarios activos de AI Empire</p>
  </div>

  <div style="padding:32px;">
    <p style="font-size:16px;color:#333;line-height:1.6;">Hola {{first_name}},</p>

    <p style="font-size:16px;color:#333;line-height:1.6;">
      Estás usando activamente AI Empire — y queremos recompensarte. Aquí tienes un <strong>20% de descuento</strong> exclusivo en todas las plantillas y el paquete completo.
    </p>

    <div style="background:#f8f9fa;border-radius:12px;padding:24px;margin:24px 0;">
      <p style="text-align:center;font-size:14px;color:#666;margin:0 0 4px;">Usa el código al completar la compra:</p>
      <p style="text-align:center;font-size:28px;font-weight:700;color:#667eea;margin:0;letter-spacing:2px;">UPGRADE20</p>
    </div>

    <h2 style="font-size:18px;color:#333;margin:24px 0 12px;">Qué obtienes con las plantillas</h2>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraStore — 29 € → 23,20 € con el código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Plantilla de comercio electrónico con Stripe, carrito, panel de administración, recomendaciones de IA</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraBlog — 19 € → 15,20 € con el código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Plantilla de blog con MDX, modo oscuro, RSS, optimización SEO</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#f0fdf4;border-radius:8px;">
      <p style="margin:0;font-weight:600;color:#333;">NeuraPortfolio — 29 € → 23,20 € con el código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Plantilla de portfolio con animaciones, modo oscuro, formulario de contacto</p>
    </div>

    <div style="margin:12px 0;padding:12px 16px;background:#eff6ff;border-radius:8px;border:2px solid #667eea;">
      <p style="margin:0;font-weight:600;color:#333;">Paquete completo — 299 € → 239,20 € con el código</p>
      <p style="margin:4px 0 0;color:#666;font-size:14px;">Las 6 plantillas + soporte prioritario + actualizaciones gratuitas. La mejor relación calidad-precio.</p>
    </div>

    <div style="text-align:center;margin:32px 0;">
      <a href="https://ai-empire-steel.vercel.app/pricing?coupon=UPGRADE20" style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#ffffff;padding:14px 36px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;display:inline-block;">
        Actualizar ahora — 20% dto.
      </a>
    </div>

    <p style="font-size:14px;color:#999;line-height:1.6;text-align:center;">
      Esta oferta expira en 72 horas. Código válido para un solo uso.
    </p>
  </div>

  <div style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #eee;">
    <p style="margin:0;font-size:12px;color:#999;">
      AI Empire — Crea productos SaaS con IA más rápido<br>
      <a href="https://ai-empire-steel.vercel.app" style="color:#667eea;text-decoration:none;">Sitio web</a> ·
      <a href="https://ai-empire-steel.vercel.app/docs" style="color:#667eea;text-decoration:none;">Documentación</a> ·
      <a href="{{unsubscribe_url}}" style="color:#999;text-decoration:none;">Cancelar suscripción</a>
    </p>
  </div>

</div>
</body>
</html>`,
    },
  ],
};
