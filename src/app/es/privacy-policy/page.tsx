import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad (RGPD) — NeuraAPI',
  description: 'Política de privacidad de NeuraAPI, conforme al Reglamento General de Protección de Datos (RGPD — UE 2016/679).',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/es/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Política de Privacidad</h1>
          <p className="mt-2 text-indigo-300">Conforme al Reglamento General de Protección de Datos (RGPD — UE 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Responsable del tratamiento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Responsable:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Sede social:</span> 12 Rue de la Paix, 75002 Paris, Francia</p>
              <p><span className="font-semibold text-white">SIRET:</span> Por completar</p>
              <p><span className="font-semibold text-white">Delegado de Protección de Datos (DPD):</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>12 Rue de la Paix, 75002 Paris, Francia</p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Datos recopilados</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>En el marco de nuestros servicios, recopilamos las siguientes categorías de datos:</p>

              <h3 className="font-semibold text-white">Datos de identificación</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nombre y apellidos</li>
                <li>Correo electrónico</li>
                <li>Contraseña (cifrada)</li>
                <li>Nombre de usuario</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Datos de facturación</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Dirección de facturación</li>
                <li>Información de pago (tratada por Stripe, no tenemos acceso a los números de tarjeta)</li>
                <li>Historial de transacciones</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Datos de uso</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Claves API (cifradas)</li>
                <li>Historial de llamadas API (prompts, respuestas, marcas de tiempo)</li>
                <li>Estadísticas de uso (número de llamadas, créditos consumidos)</li>
                <li>Datos de rendimiento y diagnóstico</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Datos de conexión</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Dirección IP</li>
                <li>Tipo de navegador y sistema operativo</li>
                <li>Fecha y hora de conexión</li>
                <li>Páginas visitadas y acciones realizadas</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Finalidades del tratamiento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Sus datos se tratan para las siguientes finalidades:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Gestión de cuentas:</span> Creación, gestión y autenticación de cuentas de usuario</li>
                <li><span className="font-semibold text-white">Prestación de servicios:</span> Acceso a APIs, entrega de plantillas, gestión de créditos</li>
                <li><span className="font-semibold text-white">Facturación:</span> Emisión de facturas, seguimiento de pagos, recordatorios</li>
                <li><span className="font-semibold text-white">Atención al cliente:</span> Respuesta a solicitudes y resolución de problemas</li>
                <li><span className="font-semibold text-white">Mejora del servicio:</span> Estadísticas de uso, optimización del rendimiento</li>
                <li><span className="font-semibold text-white">Seguridad:</span> Prevención del fraude, detección de abusos, protección contra ataques</li>
                <li><span className="font-semibold text-white">Comunicación:</span> Envío de notificaciones importantes relativas al servicio</li>
                <li><span className="font-semibold text-white">Obligaciones legales:</span> Conservación de datos contables y fiscales</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Base jurídica del tratamiento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Cada tratamiento de datos se basa en una base jurídica:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Ejecución del contrato (art. 6.1.b RGPD):</span> Prestación de servicios, gestión de cuentas, facturación</li>
                <li><span className="font-semibold text-white">Interés legítimo (art. 6.1.f RGPD):</span> Seguridad del servicio, mejora, prevención del fraude</li>
                <li><span className="font-semibold text-white">Obligación legal (art. 6.1.c RGPD):</span> Conservación de datos contables y fiscales</li>
                <li><span className="font-semibold text-white">Consentimiento (art. 6.1.a RGPD):</span> Cookies no esenciales, comunicaciones de marketing</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Plazo de conservación</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Sus datos se conservan durante los siguientes plazos:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Datos de cuenta:</span> Durante toda la duración de la relación contractual, luego 3 años después de la última conexión</li>
                <li><span className="font-semibold text-white">Datos de facturación:</span> 10 años (obligación legal contable)</li>
                <li><span className="font-semibold text-white">Historial de llamadas API:</span> 12 meses después de la última llamada</li>
                <li><span className="font-semibold text-white">Datos de conexión:</span> 12 meses</li>
                <li><span className="font-semibold text-white">Cookies:</span> 13 meses máximo</li>
                <li><span className="font-semibold text-white">Datos de prospección:</span> 3 años después del último contacto</li>
              </ul>
              <p className="mt-4">
                Al vencimiento de estos plazos, los datos se eliminan o anonimizan de forma irreversible.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Destinatarios de los datos</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Sus datos pueden ser compartidos con las siguientes categorías de destinatarios:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Proveedores técnicos:</span> Vercel (alojamiento), Stripe (pagos), Vercel Analytics (estadísticas)</li>
                <li><span className="font-semibold text-white">Proveedores de pago:</span> Stripe Inc. — tratamiento seguro de pagos</li>
                <li><span className="font-semibold text-white">Autoridades competentes:</span> En caso de obligación legal o requerimiento judicial</li>
              </ul>
              <p className="mt-4">
                Estos proveedores están sujetos a obligaciones contractuales que garantizan la protección de sus datos conforme al RGPD. Nunca vendemos sus datos a terceros.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Transferencias fuera de la Unión Europea</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Algunos de nuestros proveedores se encuentran fuera de la Unión Europea (especialmente en Estados Unidos). Estas transferencias están reguladas por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cláusulas contractuales tipo (CCT) conformes a la decisión de ejecución de la Comisión Europea</li>
                <li>El Escudo de Privacidad (para proveedores certificados)</li>
                <li>Garantías adicionales adecuadas conforme a los artículos 46 y siguientes del RGPD</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Sus derechos</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                De conformidad con el RGPD, usted dispone de los siguientes derechos sobre sus datos personales:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Derecho de acceso (art. 15):</span> Obtener una copia de sus datos</li>
                <li><span className="font-semibold text-white">Derecho de rectificación (art. 16):</span> Corregir datos inexactos</li>
                <li><span className="font-semibold text-white">Derecho de supresión (art. 17):</span> Solicitar la eliminación de sus datos</li>
                <li><span className="font-semibold text-white">Derecho a la limitación del tratamiento (art. 18):</span> Limitar el tratamiento de sus datos</li>
                <li><span className="font-semibold text-white">Derecho a la portabilidad (art. 20):</span> Recibir sus datos en un formato estructurado</li>
                <li><span className="font-semibold text-white">Derecho de oposición (art. 21):</span> Oponerse al tratamiento de sus datos</li>
                <li><span className="font-semibold text-white">Retirar su consentimiento:</span> En cualquier momento, sin afectar la licitud del tratamiento anterior</li>
              </ul>
              <p className="mt-4">
                Para ejercer sus derechos, contáctenos en: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                También tiene derecho a presentar una reclamación ante la AEPD: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Nuestro sitio web utiliza cookies de conformidad con la normativa vigente. Para más información, consulte nuestra <a href="/es/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Cookies</a>.
              </p>
              <p>
                Puede gestionar sus preferencias de cookies mediante el banner de consentimiento que se muestra durante su primera visita.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Seguridad de los datos</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Implementamos las siguientes medidas técnicas y organizativas para proteger sus datos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cifrado TLS/SSL para todas las comunicaciones</li>
                <li>Cifrado de datos sensibles en reposo</li>
                <li>Autenticación multifactor (MFA) disponible</li>
                <li>Claves API cifradas y gestionadas de forma segura</li>
                <li>Acceso restringido a los datos (principio de mínimo privilegio)</li>
                <li>Registro y supervisión de accesos</li>
                <li>Auditorías de seguridad periódicas</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Para cualquier pregunta relativa a la protección de sus datos personales:</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Correo electrónico: </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Dirección: NeuraAPI SAS — DPD, 12 Rue de la Paix, 75002 Paris, Francia</span>
                </div>
              </div>
              <p className="mt-4">
                Nos comprometemos a responder a su solicitud en un plazo de un mes.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
