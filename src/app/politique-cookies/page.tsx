import type { Metadata } from 'next'
import { Cookie, Settings, Eye, BarChart3, Megaphone, Info } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Cookies — NeuraAPI',
  description: "Politique de cookies de NeuraAPI — Informations sur les cookies utilisés et gestion de vos préférences.",
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/politique-cookies' },
}

export default function PolitiqueCookies() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Cookie className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Politique de Cookies</h1>
          <p className="mt-2 text-indigo-300">Informations sur les cookies utilisés sur NeuraAPI</p>
          <p className="mt-1 text-sm text-indigo-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Qu&apos;est-ce qu&apos;un cookie ?</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Un cookie est un petit fichier texte déposé sur votre équipement (ordinateur, tablette, smartphone) lors de la visite d&apos;un site internet. Il permet au site de reconnaître votre appareil et de stocker certaines informations sur vos préférences ou actions passées.
              </p>
              <p>
                Les cookies sont régis par la loi Informatique et Libertés, le Règlement Général sur la Protection des Données (RGPD) et les recommandations de la CNIL.
              </p>
            </div>
          </section>

          {/* Types de cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Types de cookies utilisés</h2>
            </div>

            <div className="space-y-8">
              {/* Essential cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-900/50">
                    <Eye className="h-4 w-4 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies essentiels</h3>
                  <span className="rounded-full bg-green-900/50 px-3 py-1 text-xs font-medium text-green-400">Toujours actifs</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés car ils sont nécessaires au bon fonctionnement du site.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalité</th>
                        <th className="pb-2 font-medium">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">session_id</td>
                        <td className="py-2">Session utilisateur</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">csrf_token</td>
                        <td className="py-2">Protection CSRF</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">cookie_consent</td>
                        <td className="py-2">Préférences de cookies</td>
                        <td className="py-2">13 mois</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">auth_token</td>
                        <td className="py-2">Authentification</td>
                        <td className="py-2">30 jours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-900/50">
                    <BarChart3 className="h-4 w-4 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies analytiques</h3>
                  <span className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-400">Avec consentement</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Ces cookies nous permettent de mesurer l&apos;audience de notre site, de comprendre comment les visiteurs l&apos;utilisent et d&apos;identifier les pages les plus visitées.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-indigo-300">
                        <th className="pb-2 font-medium">Cookie</th>
                        <th className="pb-2 font-medium">Finalité</th>
                        <th className="pb-2 font-medium">Durée</th>
                      </tr>
                    </thead>
                    <tbody className="text-indigo-200">
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_analytics</td>
                        <td className="py-2">Statistiques de visit</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-t border-indigo-800/50">
                        <td className="py-2 font-mono text-xs">_vercel_insights</td>
                        <td className="py-2">Analyse des performances</td>
                        <td className="py-2">1 an</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing cookies */}
              <div className="rounded-xl bg-indigo-900/50 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-900/50">
                    <Megaphone className="h-4 w-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Cookies marketing</h3>
                  <span className="rounded-full bg-purple-900/50 px-3 py-1 text-xs font-medium text-purple-400">Avec consentement</span>
                </div>
                <p className="text-sm text-indigo-200 mb-4">
                  Ces cookies sont utilisés pour vous proposer des publicités et du contenu personnalisés en fonction de vos centres d&apos;intérêt.
                </p>
                <div className="rounded-lg bg-indigo-950/50 p-4">
                  <p className="text-sm text-indigo-300">
                    À ce jour, NeuraAPI n&apos;utilise pas de cookies marketing tiers. Cette section est prévue pour une utilisation future si nécessaire.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Comment gérer vos cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">Via le bandeau de consentement</h3>
              <p>
                Lors de votre première visite, un bandeau de consentement vous permet de choisir les cookies que vous souhaitez activer ou désactiver. Vous pouvez modifier vos préférences à tout moment en cliquant sur le bouton « Cookies » en bas de page.
              </p>

              <h3 className="font-semibold text-white mt-4">Via les paramètres de votre navigateur</h3>
              <p>Vous pouvez également gérer les cookies directement depuis les paramètres de votre navigateur :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Conséquences de la désactivation</h3>
              <p>
                La désactivation des cookies essentiels peut empêcher le bon fonctionnement du site. Les cookies analytiques et marketing peuvent être librement activés ou désactivés sans impact sur l&apos;utilisation du site.
              </p>
            </div>
          </section>

          {/* Cookies tiers */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Cookies tiers</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Notre site peut inclure des composants provenant de tiers. Ces tiers peuvent déposer des cookies sur votre équipement lorsque vous visitez notre site. Nous n&apos;avons pas de contrôle sur ces cookies tiers.
              </p>
              <h3 className="font-semibold text-white mt-4">Stripe (paiements)</h3>
              <p>
                Stripe utilise des cookies pour sécuriser les transactions et prévenir la fraude. Pour plus d&apos;informations : <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">stripe.com/cookies-policy</a>
              </p>
              <h3 className="font-semibold text-white mt-4">Vercel (hébergement)</h3>
              <p>
                Vercel peut déposer des cookies pour assurer le bon fonctionnement de l&apos;infrastructure et collecter des statistiques anonymisées. Pour plus d&apos;informations : <a href="https://vercel.com/docs/edge-network/cookies" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">vercel.com/docs/edge-network/cookies</a>
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Info className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Pour toute question relative à notre politique de cookies, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Email : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></li>
                <li>DPO : <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a></li>
              </ul>
              <p className="mt-4">
                Vous pouvez également déposer une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
