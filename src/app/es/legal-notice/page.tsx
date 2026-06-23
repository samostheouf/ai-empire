import type { Metadata } from 'next'
import { Scale, Building2, Globe, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Aviso Legal — NeuraAPI',
  description: 'Aviso legal del sitio web NeuraAPI, de conformidad con la Ley de Servicios de la Sociedad de la Información y de Comercio Electrónico.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/es/legal-notice' },
}

export default function LegalNotice() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Aviso Legal</h1>
          <p className="mt-2 text-indigo-300">Información legal relativa al sitio web NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Editor del sitio</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Denominación social:</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Forma jurídica:</span> Sociedad por Acciones Simplificada (SAS)</p>
              <p><span className="font-semibold text-white">Sede social:</span> 12 Rue de la Paix, 75002 Paris, Francia</p>
              <p><span className="font-semibold text-white">SIRET:</span> Por completar</p>
              <p><span className="font-semibold text-white">SIREN:</span> Por completar</p>
              <p><span className="font-semibold text-white">Código NAF/APE:</span> 6201Z — Programación informática</p>
              <p><span className="font-semibold text-white">Número de IVA intracomunitario:</span> Por completar</p>
              <p><span className="font-semibold text-white">Capital social:</span> Por completar</p>
              <p><span className="font-semibold text-white">Director de la publicación:</span> Por completar</p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Proveedor de alojamiento</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Nombre:</span> Vercel Inc.</p>
              <p><span className="font-semibold text-white">Dirección:</span> 340 S Lemon Ave #4133, Walnut, CA 91789, Estados Unidos</p>
              <p><span className="font-semibold text-white">Sitio web:</span> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com</a></p>
              <p className="text-sm text-indigo-300 mt-4">
                El sitio web está alojado en la infraestructura en la nube de Vercel, de conformidad con las normas de seguridad y disponibilidad del RGPD.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Correo electrónico:</span> <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Teléfono:</span> Por completar</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-400" />
                <p><span className="font-semibold text-white">Dirección:</span> 12 Rue de la Paix, 75002 Paris, Francia</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Seguros profesionales</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p><span className="font-semibold text-white">Asegurador:</span> AXA France</p>
              <p><span className="font-semibold text-white">N.º de póliza:</span> Por completar</p>
              <p><span className="font-semibold text-white">Cobertura:</span> Responsabilidad civil profesional y ciberriesgos</p>
              <p className="text-sm text-indigo-300 mt-4">
                De conformidad con las disposiciones legales, NeuraAPI SAS dispone de un seguro de responsabilidad civil profesional que cubre los daños causados a terceros en el marco de su actividad.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Propiedad intelectual</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                Todo el contenido de este sitio web (textos, imágenes, gráficos, logotipos, iconos, sonidos, software) es propiedad exclusiva de NeuraAPI SAS o de sus socios y está protegido por las leyes francesas e internacionales de propiedad intelectual.
              </p>
              <p>
                Queda prohibida cualquier reproducción, representación, modificación, publicación, transmisión o alteración del sitio web o de su contenido, por cualquier medio, sin autorización previa por escrito de NeuraAPI SAS.
              </p>
              <p>
                Las marcas y logotipos que aparecen en este sitio web son marcas registradas de NeuraAPI SAS o de sus socios. Queda prohibida cualquier reproducción o representación, total o parcial, de estas marcas o logotipos sin autorización previa.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Datos personales</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                El tratamiento de datos personales se rige por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, y el Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679).
              </p>
              <p>
                Para más información, consulte nuestra <a href="/es/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Privacidad</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                De conformidad con la normativa de protección de datos y el RGPD, se pueden instalar cookies en su dispositivo al navegar por nuestro sitio web.
              </p>
              <p>
                Para más información sobre las cookies que utilizamos y cómo gestionarlas, consulte nuestra <a href="/es/cookie-policy" className="text-indigo-400 hover:text-white transition-colors underline">Política de Cookies</a>.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Resolución de litigios</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                De conformidad con los artículos L.616-1 y R.616-1 del Código de Consumo, ofrecemos a nuestros clientes no profesionales un mecanismo de resolución de litigios gratuito.
              </p>
              <p>
                En caso de litigio, puede acudir al Mediador de Consumo:
              </p>
              <div className="ml-4 space-y-2">
                <p>• Sitio web: <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.mediation-conso.fr</a></p>
                <p>• Dirección: BP 84229, 69342 Lyon Cedex 07</p>
                <p>• Correo electrónico: <a href="mailto:contact@mediation-conso.fr" className="text-indigo-400 hover:text-white transition-colors">contact@mediation-conso.fr</a></p>
              </div>
              <p className="text-sm text-indigo-300 mt-4">
                También puede utilizar la plataforma europea de resolución de litigios en línea disponible en: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Ley aplicable</h2>
            </div>
            <div className="space-y-3 text-indigo-200">
              <p>
                El presente aviso legal se rige por el derecho francés. En caso de litigio, los tribunales judiciales de París serán los únicos competentes, salvo disposición imperativa en contrario.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
