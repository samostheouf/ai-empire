import type { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = genMeta({
  title: 'Conditions Générales d\'Utilisation — CGU NeuraAPI',
  description: 'Conditions générales d\'utilisation de NeuraAPI. Lisez nos CGU pour connaître les règles d\'utilisation de nos APIs IA et templates premium.',
  path: '/terms',
  keywords: ['cgu neuraapi', 'conditions générales', 'terms of service', 'règles utilisation'],
})

export default function TermsPage() {
  return (
    <div className="bg-indigo-950 min-h-screen">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumb items={[{ name: 'CGU', href: '/terms' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 mt-8">Conditions Générales d&apos;Utilisation</h1>

          <div className="prose prose-invert prose-indigo space-y-8 text-indigo-200">
            <div>
              <h2 className="text-xl font-bold text-white mb-3">1. Objet</h2>
              <p>
                Les présentes conditions générales d&apos;utilisation (CGU) régissent l&apos;utilisation de la plateforme NeuraAPI, accessible à l&apos;adresse https://ai-empire-steel.vercel.app.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">2. Acceptation des CGU</h2>
              <p>
                En utilisant NeuraAPI, vous acceptez sans réserve les présentes CGU. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser la plateforme.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">3. Description du service</h2>
              <p>
                NeuraAPI fournit des APIs d&apos;intelligence artificielle (génération de texte, code, contenu SEO) et des templates Next.js premium. Le service est accessible via une clé API unique.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">4. Inscription et compte</h2>
              <p>
                L&apos;inscription est gratuite et ne nécessite pas de carte bancaire. Chaque utilisateur reçoit une clé API et 100 crédits mensuels avec le plan Starter. L&apos;utilisateur est responsable de la sécurité de sa clé API.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">5. Tarification</h2>
              <p>
                Les tarifs sont disponibles sur la page /pricing. Les abonnements Pro et Enterprise sont facturés mensuellement via Stripe. L&apos;annulation est possible à tout moment sans engagement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">6. Utilisation acceptable</h2>
              <p>
                Vous vous engagez à utiliser NeuraAPI de manière légale et éthique. L&apos;utilisation pour générer du contenu illégal, nuisible ou frauduleux est strictement interdite.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">7. Propriété intellectuelle</h2>
              <p>
                Le contenu généré par les APIs IA vous appartient. Les templates premium sont soumis à une licence d&apos;utilisation. Le code source de la plateforme est la propriété de NeuraAPI.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">8. Protection des données</h2>
              <p>
                Conformément au RGPD, vos données personnelles sont traitées conformément à notre Politique de Confidentialité. Vous pouvez demander la suppression de vos données à tout moment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">9. Limitation de responsabilité</h2>
              <p>
                NeuraAPI fournit le service &quot;en l&apos;état&quot;. Nous ne garantissons pas l&apos;absence d&apos;interruption ou d&apos;erreur. Notre responsabilité est limitée au montant de votre abonnement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">10. Modification des CGU</h2>
              <p>
                Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications prennent effet dès leur publication sur la plateforme.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">11. Droit applicable</h2>
              <p>
                Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
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
