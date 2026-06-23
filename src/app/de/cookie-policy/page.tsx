import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie-Richtlinie — NeuraAPI',
  description: 'Cookie-Richtlinie von NeuraAPI — Informationen über verwendete Cookies und Verwaltung Ihrer Einstellungen.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/de/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Cookie-Richtlinie</h1>
          <p className="mt-2 text-indigo-300">Informationen über die auf NeuraAPI verwendeten Cookies</p>
          <p className="mt-1 text-sm text-indigo-400">Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Was ist ein Cookie?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website auf Ihrem Gerät (Computer, Tablet, Smartphone) gespeichert wird. Sie ermöglicht es der Website, Ihr Gerät zu erkennen und bestimmte Informationen über Ihre Präferenzen oder vergangenen Aktionen zu speichern.
              </p>
              <p>
                Cookies unterliegen der Datenschutz-Grundverordnung (DSGVO) und den Empfehlungen der CNIL.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Verwendete Cookie-Arten</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Essenzielle Cookies</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Immer aktiv</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Diese Cookies sind für den Betrieb der Website unerlässlich. Sie können nicht deaktiviert werden, da sie für das ordnungsgemäße Funktionieren der Website erforderlich sind.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Zweck</th>
                        <th className="pb-2 font-medium">Dauer</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">Benutzersitzung</td>
                        <td className="py-2">Sitzung</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">CSRF-Schutz</td>
                        <td className="py-2">Sitzung</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Cookie-Einstellungen</td>
                        <td className="py-2">13 Monate</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Authentifizierung</td>
                        <td className="py-2">30 Tage</td>
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
                  <h3 className="text-lg font-bold text-white">Analyse-Cookies</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">Mit Einwilligung</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Diese Cookies ermöglichen es uns, die Besucherzahl unserer Website zu messen, zu verstehen, wie Besucher sie nutzen, und die meistbesuchten Seiten zu identifizieren.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Zweck</th>
                        <th className="pb-2 font-medium">Dauer</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Besucherstatistiken</td>
                        <td className="py-2">Sitzung</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Leistungsanalyse</td>
                        <td className="py-2">1 Jahr</td>
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
                  <h3 className="text-lg font-bold text-white">Marketing-Cookies</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">Mit Einwilligung</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Diese Cookies werden verwendet, um Ihnen personalisierte Werbung und Inhalte basierend auf Ihren Interessen anzuzeigen.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    Derzeit verwendet NeuraAPI keine Marketing-Cookies von Drittanbietern. Dieser Bereich ist für die zukünftige Nutzung vorgesehen, falls erforderlich.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">So verwalten Sie Ihre Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Über das Einwilligungsbanner</h3>
              <p>
                Bei Ihrem ersten Besuch können Sie über ein Einwilligungsbanner auswählen, welche Cookies Sie aktivieren oder deaktivieren möchten. Sie können Ihre Einstellungen jederzeit ändern, indem Sie auf die Schaltfläche „Cookies" am unteren Rand der Seite klicken.
              </p>

              <h3 className="font-semibold text-white mt-4">Über die Browsereinstellungen</h3>
              <p>Sie können Cookies auch direkt über die Einstellungen Ihres Browsers verwalten:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-blockieren" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Folgen der Deaktivierung</h3>
              <p>
                Die Deaktivierung essenzieller Cookies kann das ordnungsgemäße Funktionieren der Website verhindern. Analyse- und Marketing-Cookies können frei aktiviert oder deaktiviert werden, ohne die Nutzung der Website zu beeinträchtigen.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies von Drittanbietern</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Unsere Website kann Komponenten von Drittanbietern enthalten. Diese Drittanbieter können Cookies auf Ihrem Gerät speichern, wenn Sie unsere Website besuchen. Wir haben keine Kontrolle über diese Cookies von Drittanbietern.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (Zahlungen)</h3>
              <p>
                Stripe verwendet Cookies, um Transaktionen zu sichern und Betrug zu verhindern. Weitere Informationen: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (Hosting)</h3>
              <p>
                Vercel kann Cookies speichern, um den ordnungsgemäßen Betrieb der Infrastruktur zu gewährleisten und anonymisierte Statistiken zu erfassen. Weitere Informationen: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Kontakt</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Bei Fragen zu unserer Cookie-Richtlinie können Sie uns kontaktieren:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>E-Mail: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DSB: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                Sie können auch eine Beschwerde bei der zuständigen Datenschutzbehörde einreichen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
