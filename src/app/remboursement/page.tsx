import type { Metadata } from 'next'
import { RotateCcw, Mail, ShieldCheck } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Politique de remboursement — NeuraAPI',
  description:
    'Garantie satisfait ou remboursé 14 jours sur NeuraAPI : modalités, procédure et délais de remboursement.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/remboursement' },
}

export default function RemboursementPage() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <RotateCcw className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Politique de remboursement</h1>
          <p className="mt-2 text-indigo-300">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Garantie 14 jours</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Chaque achat de crédit, d’abonnement ou de template est couvert par une garantie
                « satisfait ou remboursé » de <span className="font-semibold text-white">14 jours</span>{' '}
                à compter de la date de paiement, sans justification nécessaire.
              </p>
              <p>
                Conformément à l’article L.221-28 du Code de la consommation (exception au droit de
                rétractation pour les contenus numériques fournis avant la fin du délai de 14 jours
                avec accord préalable), le remboursement intégral s’applique lorsqu’aucun usage
                substantiel du service n’a été fait, ou dans le cadre de la garantie commerciale
                annoncée.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Procédure</h2>
            <ol className="list-decimal list-inside space-y-2 text-indigo-200 text-sm">
              <li>
                Envoyez un email à{' '}
                <a
                  href="mailto:samilaboulette21@gmail.com"
                  className="text-indigo-400 hover:text-white transition-colors"
                >
                  samilaboulette21@gmail.com
                </a>{' '}
                depuis l’adresse utilisée lors de l’achat (idéalement avec le numéro de commande).
              </li>
              <li>Le remboursement est effectué sur votre moyen de paiement d’origine sous 72 heures.</li>
              <li>
                Selon votre banque, l’opération peut apparaître sous 3 à 5 jours ouvrés supplémentaires.
              </li>
              <li>Après remboursement, l’accès au service et la licence d’utilisation prennent fin.</li>
            </ol>
          </section>

          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Contact</h2>
            </div>
            <p className="text-indigo-200 text-sm">
              Une question ? Écrivez-nous :{' '}
              <a
                href="mailto:samilaboulette21@gmail.com"
                className="text-indigo-400 hover:text-white transition-colors"
              >
                samilaboulette21@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
