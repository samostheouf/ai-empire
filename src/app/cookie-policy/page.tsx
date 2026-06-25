export const metadata = {
  title: 'Politique de Cookies — NeuraAPI',
  description: 'Détails des cookies utilisés par NeuraAPI : essentiels, analytiques, marketing. Comment les gérer.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/cookie-policy' },
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Politique de Cookies</h1>
          <p className="text-sm text-indigo-400 mb-8">Dernière mise à jour : 24 juin 2026</p>

          <div className="space-y-8 text-indigo-200">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
              <p>Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez un site web. Il permet au site de mémoriser vos actions et préférences.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Cookies utilisés par NeuraAPI</h2>
              <div className="space-y-3">
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">neuralocale</p>
                  <p className="text-sm text-indigo-300 mt-1">Stocke votre préférence de langue. Durée : 1 an.</p>
                  <p className="text-xs text-indigo-400 mt-1">Type : Fonctionnel | Consentement : non requis</p>
                </div>
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">admin_session</p>
                  <p className="text-sm text-indigo-300 mt-1">Session d&apos;authentification admin. Durée : 8 heures.</p>
                  <p className="text-xs text-indigo-400 mt-1">Type : Fonctionnel | Consentement : non requis</p>
                </div>
                <div className="rounded-lg border border-indigo-800/50 bg-indigo-900/30 p-4">
                  <p className="font-semibold text-white">neura_consent</p>
                  <p className="text-sm text-indigo-300 mt-1">Enregistre votre choix de consentement cookies. Durée : 1 an.</p>
                  <p className="text-xs text-indigo-400 mt-1">Type : Consentement | Consentement : requis</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Cookies tiers</h2>
              <p>Nous utilisons les services suivants qui peuvent déposer des cookies :</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Stripe</strong> — traitement des paiements (cookie _stripe_mid, _stripe_sid)</li>
                <li><strong>Vercel Analytics</strong> — analyse du trafic (optionnel, avec consentement)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Gérer vos cookies</h2>
              <p>Vous pouvez gérer vos préférences cookies à tout moment via le bandeau de consentement en bas de page. Vous pouvez également configurer votre navigateur pour bloquer les cookies.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Contact</h2>
              <p>Pour toute question relative à notre politique de cookies : contact@neuraapi.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
