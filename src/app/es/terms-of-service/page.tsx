import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Condiciones Generales de Venta — NeuraAPI',
  description: 'Condiciones Generales de Venta de NeuraAPI — Servicios de inteligencia artificial y plantillas digitales.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/es/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Condiciones Generales de Venta</h1>
          <p className="mt-2 text-indigo-300">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Artículo 1 — Objeto</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Las presentes Condiciones Generales de Venta (CGV) rigen las relaciones contractuales entre la sociedad NeuraAPI SAS, en adelante denominada &quot;el Vendedor&quot;, y toda persona física o jurídica, en adelante denominada &quot;el Cliente&quot;, que desee adquirir los servicios y productos ofrecidos en el sitio web <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                Toda compra de servicios o productos en el sitio web implica la aceptación sin reservas de las presentes CGV. El Vendedor se reserva el derecho de modificar estas CGV en cualquier momento. Las CGV aplicables son las vigentes en la fecha de la compra del Cliente.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 2 — Productos y servicios</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>El Vendedor ofrece a la venta los siguientes productos y servicios:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Suscripciones a APIs de inteligencia artificial</span> — Acceso a endpoints de IA (generación de texto, SEO, código) mediante una clave API personal.</li>
                <li><span className="font-semibold text-white">Plantillas digitales</span> — Plantillas web (Next.js, Tailwind CSS) descargables y utilizables conforme a la licencia adquirida.</li>
                <li><span className="font-semibold text-white">Paquetes de créditos</span> — Unidades de consumo para las llamadas API, válidas por un período determinado.</li>
              </ul>
              <p>
                Las características esenciales de los productos y servicios se presentan en el sitio web. Las imágenes y descripciones se proporcionan a título informativo y no comprometen al Vendedor.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 3 — Precios y modalidades de pago</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Precios</h3>
              <p>
                Los precios de los productos y servicios se indican en euros (€) impuestos incluidos (IVA incluido al tipo vigente). El Vendedor se reserva el derecho de modificar sus precios en cualquier momento. Los precios aplicables son los vigentes en el momento de la validación de la compra por el Cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Modalidades de pago</h3>
              <p>El pago se realiza exclusivamente en línea mediante:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Tarjeta bancaria (Visa, Mastercard, American Express)</li>
                <li>Transferencia bancaria (para suscripciones Enterprise)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Facturación</h3>
              <p>
                Se emite electrónicamente una factura accesible en el área de cliente después de cada pago. El Cliente se compromete a conservar sus facturas.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Impago</h3>
              <p>
                En caso de impago, el Vendedor se reserva el derecho de suspender el acceso a los servicios tras un requerimiento que haya quedado sin efecto durante 15 días. Se podrán aplicar penalizaciones por retraso al triple del tipo de interés legal.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 4 — Puesta a disposición y entrega</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Servicios por suscripción</h3>
              <p>
                El acceso a las APIs se pone a disposición inmediatamente después de la validación del pago. La clave API se genera automáticamente y es accesible desde el área de cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Plantillas digitales</h3>
              <p>
                Las plantillas son descargables inmediatamente después de la compra. Se envía un enlace de descarga por correo electrónico y es accesible desde el área de cliente.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Paquetes de créditos</h3>
              <p>
                Los créditos se acreditan en la cuenta del Cliente inmediatamente después del pago y permanecen válidos durante 12 meses a partir de la fecha de compra.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 5 — Derecho de desistimiento</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                De conformidad con los artículos L.221-18 y siguientes del Código de Consumo, el Cliente dispone de un plazo de <span className="font-semibold text-white">14 días</span> a partir de la fecha de suscripción o compra para ejercer su derecho de desistimiento, sin necesidad de justificar su decisión.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Condiciones del desistimiento</h3>
              <p>Para ejercer su derecho de desistimiento, el Cliente debe comunicar al Vendedor una declaración escrita (correo electrónico o carta) que exprese claramente su voluntad de desistir.</p>
              <p>Correo electrónico: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Excepciones al derecho de desistimiento</h3>
              <p>El derecho de desistimiento no puede ejercerse en los siguientes casos:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>La prestación del servicio ha comenzado, con el consentimiento expreso del Cliente, antes de que finalice el plazo de 14 días</li>
                <li>El contenido digital (plantillas) ha sido descargado o activado por el Cliente</li>
                <li>La prestación de servicios se ha ejecutado completamente antes de que finalice el plazo de desistimiento</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Reembolso</h3>
              <p>
                En caso de desistimiento válido, el reembolso se realizará en un máximo de 14 días, por el mismo medio de pago utilizado en la transacción inicial.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 6 — Garantías</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Garantía de conformidad</h3>
              <p>
                De conformidad con los artículos L.217-3 y siguientes del Código de Consumo, el Vendedor está obligado a entregar un bien conforme al contrato. El Cliente puede solicitar la conformidad del bien en un plazo de 2 años a partir de la entrega.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Garantía de vicios ocultos</h3>
              <p>
                De conformidad con los artículos 1641 y siguientes del Código Civil, el Vendedor está obligado a garantizar los vicios ocultos. El Cliente dispone de un plazo de 2 años a partir del descubrimiento del vicio para actuar.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Disponibilidad del servicio</h3>
              <p>
                El Vendedor se compromete a garantizar la disponibilidad del servicio con una tasa de disponibilidad mensual del 99,9% (SLA). Los mantenimientos planificados se comunican con 48 horas de antelación.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 7 — Limitación de responsabilidad</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>El Vendedor no será responsable de los daños derivados de:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Un uso no conforme de los servicios por parte del Cliente</li>
                <li>Una interrupción temporal del servicio por mantenimiento o actualización</li>
                <li>Una pérdida de datos debida a un fallo de la infraestructura técnica</li>
                <li>Un daño indirecto, pérdida de ingresos, pérdida de datos o cualquier otro perjuicio</li>
                <li>Un uso de los resultados generados por la IA con fines ilícitos o contrarios al orden público</li>
              </ul>
              <p className="mt-4">
                La responsabilidad total del Vendedor está limitada al importe pagado por el Cliente durante los 12 meses anteriores al hecho que causó el daño.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 8 — Licencia de uso de las plantillas</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                La compra de una plantilla confiere al Cliente una licencia de uso no exclusiva, intransferible y limitada, que le permite:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utilizar la plantilla en proyectos personales o comerciales</li>
                <li>Modificar la plantilla para adaptarla a sus necesidades</li>
                <li>Utilizar la plantilla para un número ilimitado de proyectos</li>
              </ul>
              <p className="font-semibold text-indigo-100 mt-3">Queda prohibido:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Revender o redistribuir la plantilla como tal</li>
                <li>Sublicenciar la plantilla a terceros</li>
                <li>Eliminar o modificar las menciones de copyright</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 9 — Datos personales</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                El tratamiento de los datos personales del Cliente se rige por nuestra <a href="/es/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Privacidad</a>, conforme al RGPD.
              </p>
              <p>
                El Cliente dispone de los derechos de acceso, rectificación, supresión, portabilidad y oposición sobre sus datos personales contactando a: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Artículo 10 — Ley aplicable y litigios</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Las presentes CGV se rigen por el <span className="font-semibold text-white">derecho francés</span>. En caso de litigio, las partes se esforzarán por encontrar una solución amistosa. En su defecto, el litigio se someterá a los tribunales judiciales de París.
              </p>
              <p>
                De conformidad con los artículos L.616-1 y R.616-1 del Código de Consumo, el Cliente puede recurrir gratuitamente a un mediador de consumo en caso de litigio no resuelto:
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mediación de consumo — mediation-conso.fr</a></p>
                <p>• Plataforma europea de resolución de litigios: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Artículo 11 — Disposiciones varias</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Integridad</h3>
              <p>
                Las presentes CGV constituyen la totalidad del acuerdo entre el Vendedor y el Cliente. Si alguna cláusula fuera declarada nula, las demás cláusulas permanecerían vigentes.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Modificación</h3>
              <p>
                El Vendedor se reserva el derecho de modificar las presentes CGV en cualquier momento. Las CGV aplicables son las vigentes en la fecha de la compra.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Fuerza mayor</h3>
              <p>
                El Vendedor no será responsable del cumplimiento de sus obligaciones en caso de fuerza mayor en el sentido del artículo 1218 del Código Civil.
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Contacto</h3>
              <p>
                Para cualquier pregunta relativa a las presentes CGV, puede contactarnos en: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
