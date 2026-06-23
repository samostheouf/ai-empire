import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Cookies — NeuraAPI',
  description: 'Política de cookies de NeuraAPI — Información sobre las cookies utilizadas y gestión de sus preferencias.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/es/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Política de Cookies</h1>
          <p className="mt-2 text-indigo-300">Información sobre las cookies utilizadas en NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">¿Qué es una cookie?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Una cookie es un pequeño archivo de texto que se deposita en su dispositivo (ordenador, tableta, teléfono inteligente) al visitar un sitio web. Permite al sitio web reconocer su dispositivo y almacenar cierta información sobre sus preferencias o acciones pasadas.
              </p>
              <p>
                Las cookies están reguladas por la normativa de protección de datos, el Reglamento General de Protección de Datos (RGPD) y las recomendaciones de la CNIL.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Tipos de cookies utilizadas</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies esenciales</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Siempre activas</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estas cookies son indispensables para el funcionamiento del sitio web. No se pueden desactivar porque son necesarias para el correcto funcionamiento del sitio.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalidad</th>
                        <th className="pb-2 font-medium">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">Sesión de usuario</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">Protección CSRF</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Preferencias de cookies</td>
                        <td className="py-2">13 meses</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Autenticación</td>
                        <td className="py-2">30 días</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies analíticas</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">Con consentimiento</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estas cookies nos permiten medir la audiencia de nuestro sitio web, comprender cómo lo utilizan los visitantes e identificar las páginas más visitadas.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalidad</th>
                        <th className="pb-2 font-medium">Duración</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Estadísticas de visitas</td>
                        <td className="py-2">Sesión</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Análisis de rendimiento</td>
                        <td className="py-2">1 año</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Megaphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies de marketing</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">Con consentimiento</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Estas cookies se utilizan para ofrecerle publicidad y contenido personalizados en función de sus intereses.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    Actualmente, NeuraAPI no utiliza cookies de marketing de terceros. Esta sección está prevista para un uso futuro si fuera necesario.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cómo gestionar sus cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Mediante el banner de consentimiento</h3>
              <p>
                Durante su primera visita, un banner de consentimiento le permite elegir las cookies que desea activar o desactivar. Puede modificar sus preferencias en cualquier momento haciendo clic en el botón &quot;Cookies&quot; en la parte inferior de la página.
              </p>

              <h3 className="font-semibold text-white mt-4">Mediante la configuración de su navegador</h3>
              <p>También puede gestionar las cookies directamente desde la configuración de su navegador:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/activar-desactivar-cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Consecuencias de la desactivación</h3>
              <p>
                La desactivación de las cookies esenciales puede impedir el correcto funcionamiento del sitio web. Las cookies analíticas y de marketing pueden activarse o desactivarse libremente sin impacto en el uso del sitio.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies de terceros</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Nuestro sitio web puede incluir componentes de terceros. Estos terceros pueden depositar cookies en su dispositivo cuando visita nuestro sitio. No tenemos control sobre estas cookies de terceros.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (pagos)</h3>
              <p>
                Stripe utiliza cookies para asegurar las transacciones y prevenir el fraude. Para más información: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (alojamiento)</h3>
              <p>
                Vercel puede depositar cookies para asegurar el correcto funcionamiento de la infraestructura y recopilar estadísticas anonimizadas. Para más información: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contacto</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Para cualquier pregunta relativa a nuestra política de cookies, puede contactarnos:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Correo electrónico: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPD: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                También puede presentar una reclamación ante la AEPD: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
