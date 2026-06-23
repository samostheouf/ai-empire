import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy — NeuraAPI',
  description: 'Cookie Policy di NeuraAPI — Informazioni sui cookie utilizzati e gestione delle vostre preferenze.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/it/cookie-policy' },
}

export default function CookiePolicy() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Cookie Policy</h1>
          <p className="mt-2 text-indigo-300">Informazioni sui cookie utilizzati su NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cos&apos;è un cookie?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Un cookie è un piccolo file di testo depositato sul vostro dispositivo (computer, tablet, smartphone) durante la visita di un sito web. Consente al sito di riconoscere il vostro dispositivo e di memorizzare alcune informazioni sulle vostre preferenze o azioni passate.
              </p>
              <p>
                I cookie sono regolati dal Regolamento Generale sulla Protezione dei Dati (GDPR) e dalle raccomandazioni della CNIL.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Tipi di cookie utilizzati</h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookie essenziali</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Sempre attivi</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Questi cookie sono indispensabili per il funzionamento del sito. Non possono essere disattivati perché sono necessari per il corretto funzionamento del sito.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Scopo</th>
                        <th className="pb-2 font-medium">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">Sessione utente</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">Protezione CSRF</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Preferenze cookie</td>
                        <td className="py-2">13 mesi</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Autenticazione</td>
                        <td className="py-2">30 giorni</td>
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
                  <h3 className="text-lg font-bold text-white">Cookie analitici</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">Con consenso</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Questi cookie ci permettono di misurare l&apos;audience del nostro sito, di capire come i visitatori lo utilizzano e di identificare le pagine più visitate.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Scopo</th>
                        <th className="pb-2 font-medium">Durata</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Statistiche visite</td>
                        <td className="py-2">Sessione</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Analisi delle prestazioni</td>
                        <td className="py-2">1 anno</td>
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
                  <h3 className="text-lg font-bold text-white">Cookie di marketing</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">Con consenso</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Questi cookie sono utilizzati per proporvi pubblicità e contenuti personalizzati in base ai vostri interessi.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    Al momento, NeuraAPI non utilizza cookie di marketing di terze parti. Questa sezione è prevista per un utilizzo futuro se necessario.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Come gestire i vostri cookie</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Tramite il banner di consenso</h3>
              <p>
                Durante la vostra prima visita, un banner di consenso vi permette di scegliere quali cookie attivare o disattivare. Potete modificare le vostre preferenze in qualsiasi momento cliccando sul pulsante &quot;Cookie&quot; in fondo alla pagina.
              </p>

              <h3 className="font-semibold text-white mt-4">Tramite le impostazioni del browser</h3>
              <p>Potete anche gestire i cookie direttamente dalle impostazioni del vostro browser:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/it/kb/attivare-disattivare-cookie" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Conseguenze della disattivazione</h3>
              <p>
                La disattivazione dei cookie essenziali può impedire il corretto funzionamento del sito. I cookie analitici e di marketing possono essere liberamente attivati o disattivati senza impatto sull&apos;utilizzo del sito.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookie di terze parti</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Il nostro sito può includere componenti di terze parti. Queste terze parti possono depositare cookie sul vostro dispositivo quando visitate il nostro sito. Non abbiamo controllo su questi cookie di terze parti.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (pagamenti)</h3>
              <p>
                Stripe utilizza cookie per garantire la sicurezza delle transazioni e prevenire le frodi. Per maggiori informazioni: <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (hosting)</h3>
              <p>
                Vercel può depositare cookie per garantire il corretto funzionamento dell&apos;infrastruttura e raccogliere statistiche anonimizzate. Per maggiori informazioni: <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contatti</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Per qualsiasi domanda relativa alla nostra Cookie Policy, potete contattarci:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                Potete inoltre presentare un reclamo al Garante per la protezione dei dati personali.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
