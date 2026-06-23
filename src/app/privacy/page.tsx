export default function PrivacyPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Politique de Confidentialité</h1>

          <div className="prose prose-invert prose-indigo space-y-8 text-indigo-200">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Responsable du traitement</h2>
              <p>
                NeuraAPI — Samy Multiservice<br />
                61 rue Raymond Poincaré, 57700 Hayange, France<br />
                Email : samilaboulette21@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Données collectées</h2>
              <p>Nous collectons les données suivantes :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Données d&apos;inscription</strong> : email, clé API, plan d&apos;abonnement</li>
                <li><strong>Données d&apos;utilisation</strong> : requêtes API, tokens utilisés, endpoints appelés</li>
                <li><strong>Données de paiement</strong> : gérées par Stripe (nous ne stockons pas les données bancaires)</li>
                <li><strong>Données de navigation</strong> : pages visitées, durée de session (via analytics)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Finalité du traitement</h2>
              <p>Les données sont collectées pour :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fournir le service NeuraAPI (APIs IA, templates)</li>
                <li>Gérer votre compte et votre facturation</li>
                <li>Améliorer la plateforme et l&apos;expérience utilisateur</li>
                <li>Assurer la sécurité et prévenir les abus</li>
                <li>Envoyer des communications relatives au service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Base légale</h2>
              <p>
                Le traitement est fondé sur l&apos;exécution du contrat (utilisation du service) et notre intérêt légitime (amélioration, sécurité).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Conservation des données</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Données de compte : durée de l&apos;abonnement + 3 ans</li>
                <li>Logs d&apos;utilisation : 12 mois</li>
                <li>Données de paiement : gérées par Stripe selon leur politique</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
                <li><strong>Droit de rectification</strong> : corriger vos données</li>
                <li><strong>Droit à l&apos;effacement</strong> : supprimer vos données</li>
                <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
                <li><strong>Droit d&apos;opposition</strong> : vous opposer au traitement</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à samilaboulette21@gmail.com.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement TLS, accès restreint, surveillance continue.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Cookies</h2>
              <p>
                Nous utilisons un seul cookie technique pour stocker votre préférence de langue. Aucun cookie de tracking n&apos;est utilisé sans votre consentement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Contact</h2>
              <p>
                Pour toute question relative à la protection de vos données :<br />
                Email : samilaboulette21@gmail.com<br />
                Adresse : 61 rue Raymond Poincaré, 57700 Hayange, France
              </p>
            </div>
          </div>

          <p className="mt-12 text-sm text-indigo-400">
            Dernière mise à jour : 23 juin 2026
          </p>
        </div>
      </section>
    </div>
  )
}
