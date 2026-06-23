import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) — NeuraAPI',
  description: "Conditions Générales de Vente de NeuraAPI — Services d'intelligence artificielle et templates numériques.",
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/cgv' },
}

export default function CGV() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Conditions Générales de Vente</h1>
          <p className="mt-2 text-indigo-300">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Article 1 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Article 1 — Objet</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre la société NeuraAPI SAS, ci-après dénommée « le Vendeur », et toute personne physique ou morale, ci-après dénommée « le Client », souhaitant acquérir les services et produits proposés sur le site <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                Toute commande de services ou produits sur le site implique l&apos;acceptation sans réserve des présentes CGV. Le Vendeur se réserve le droit de modifier ces CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande du Client.
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 2 — Produits et services</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Le Vendeur propose à la vente les produits et services suivants :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Abonnements à des API d&apos;intelligence artificielle</span> — Accès à des endpoints d&apos;IA (génération de texte, SEO, code) via une clé API personnelle.</li>
                <li><span className="font-semibold text-white">Templates numériques</span> — Templates web (Next.js, Tailwind CSS) téléchargeables et utilisables conformément à la licence acquise.</li>
                <li><span className="font-semibold text-white">Packs de crédits</span> — Unités de consommation pour les appels API, valables pour une durée déterminée.</li>
              </ul>
              <p>
                Les caractéristiques essentielles des produits et services sont présentées sur le site. Les images et descriptions sont fournies à titre indicatif et n&apos;engagent pas le Vendeur.
              </p>
            </div>
          </section>

          {/* Article 3 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 3 — Prix et modalités de paiement</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Prix</h3>
              <p>
                Les prix des produits et services sont indiqués en euros (€) toutes taxes comprises (TVA comprise au taux en vigueur). Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les prix applicables sont ceux en vigueur au moment de la validation de la commande par le Client.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Modalités de paiement</h3>
              <p>Le paiement s&apos;effectue exclusivement en ligne par :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                <li>Virement bancaire (pour les abonnements Enterprise)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Facturation</h3>
              <p>
                Une facture est électroniquement émise et accessible dans l&apos;espace client après chaque paiement. Le Client s&apos;engage à conserver ses factures.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Défaut de paiement</h3>
              <p>
                En cas de défaut de paiement, le Vendeur se réserve le droit de suspendre l&apos;accès aux services après une mise en demeure restée sans effet pendant 15 jours. Des pénalités de retard au taux de 3 fois le taux d&apos;intérêt légal peuvent être appliquées.
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 4 — Mise à disposition et livraison</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Services par abonnement</h3>
              <p>
                L&apos;accès aux API est mis à disposition immédiatement après validation du paiement. La clé API est générée automatiquement et accessible depuis l&apos;espace client.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Templates numériques</h3>
              <p>
                Les templates sont téléchargeables immédiatement après l&apos;achat. Un lien de téléchargement est envoyé par email et accessible depuis l&apos;espace client.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Packs de crédits</h3>
              <p>
                Les crédits sont crédités sur le compte du Client immédiatement après le paiement et restent valides pendant 12 mois à compter de l&apos;date d&apos;achat.
              </p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 5 — Droit de rétractation</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Conformément aux articles L.221-18 et suivants du Code de la consommation, le Client dispose d&apos;un délai de <span className="font-semibold text-white">14 jours</span> à compter de la date de souscription ou d&apos;achat pour exercer son droit de rétractation, sans avoir à motiver sa décision.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Conditions de rétractation</h3>
              <p>Pour exercer son droit de rétractation, le Client doit adresser au Vendeur une déclaration écrobe (email ou courrier) exprimant clairement sa volonté de se rétracter.</p>
              <p>Email : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Exceptions au droit de rétractation</h3>
              <p>Le droit de rétractation ne peut être exercé dans les cas suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L&apos;exécution du service a commencé, avec l&apos;accord exprès du Client, avant la fin du délai de 14 jours</li>
                <li>Le contenu numérique (templates) a été téléchargé ou activé par le Client</li>
                <li>La prestation de services a été pleinement exécutée avant la fin du délai de rétractation</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Remboursement</h3>
              <p>
                En cas de rétractation valable, le remboursement s&apos;effectue sous 14 jours maximum, par le même moyen de paiement que celui utilisé lors de la transaction initiale.
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 6 — Garanties</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Garantie de conformité</h3>
              <p>
                Conformément aux articles L.217-3 et suivants du Code de la consommation, le Vendeur est tenu de livrer un bien conforme au contrat. Le Client peut demander la mise en conformité du bien dans un délai de 2 ans à compter de la livraison.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Garantie des vices cachés</h3>
              <p>
                Conformément aux articles 1641 et suivants du Code civil, le Vendeur est tenu de la garantie des vices cachés. Le Client dispose d&apos;un délai de 2 ans à compter de la découverte du vice pour agir.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Disponibilité du service</h3>
              <p>
                Le Vendeur s&apos;engage à assurer la disponibilité du service avec un taux de disponibilité mensuel de 99,9% (SLA). Les maintenances planifiées sont communiquées 48h à l&apos;avance.
              </p>
            </div>
          </section>

          {/* Article 7 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 7 — Limitation de responsabilité</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Le Vendeur ne saurait être tenu responsable des dommages résultant :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>D&apos;une utilisation non conforme des services par le Client</li>
                <li>D&apos;une interruption temporaire du service pour maintenance ou mise à jour</li>
                <li>D&apos;une perte de données due à une défaillance de l&apos;infrastructure technique</li>
                <li>D&apos;un dommage indirect, perte de chiffre d&apos;affaires, perte de données ou tout autre préjudice</li>
                <li>D&apos;une utilisation des résultats générés par l&apos;IA à des fins illicites ou contraires à l&apos;ordre public</li>
              </ul>
              <p className="mt-4">
                La responsabilité totale du Vendeur est limitée au montant payé par le Client au cours des 12 derniers mois précédant le fait générateur du dommage.
              </p>
            </div>
          </section>

          {/* Article 8 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 8 — Licence d&apos;utilisation des templates</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                L&apos;achat d&apos;un template confère au Client une licence d&apos;utilisation non exclusive, non transférable et limitée, lui permettant :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Utiliser le template dans le cadre de projets personnels ou commerciaux</li>
                <li>Modifier le template pour l&apos;adapter à ses besoins</li>
                <li>Utiliser le template pour un nombre illimité de projets</li>
              </ul>
              <p className="mt-3">Le Client ne peut pas :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Revendre ou redistribuer le template en tant que tel</li>
                <li>Sous-licencier le template à des tiers</li>
                <li>Supprimer ou modifier les mentions de copyright</li>
              </ul>
            </div>
          </section>

          {/* Article 9 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 9 — Données personnelles</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Le traitement des données personnelles du Client est régi par notre <a href="/politique-confidentialite" className="text-indigo-400 hover:text-white transition-colors underline">Politique de Confidentialité</a>, conforme au RGPD.
              </p>
              <p>
                Le Client dispose des droits d&apos;accès, de rectification, d&apos;effacement, de portabilité et d&apos;opposition sur ses données personnelles en contactant : <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          {/* Article 10 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 10 — Droit applicable et litiges</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Les présentes CGV sont régies par le <span className="font-semibold text-white">droit français</span>. En cas de litige, les parties s&apos;efforceront de trouver une solution amiable. À défaut, le litige sera porté devant les tribunaux judiciaires de Paris.
              </p>
              <p>
                Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le Client peut recourir gratuitement à un médiateur de la consommation en cas de litige non résolu :
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Médiation de la consommation — mediation-conso.fr</a></p>
                <p>• Plateforme européenne de règlement des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          {/* Article 11 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Article 11 — Dispositions diverses</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Intégralité</h3>
              <p>
                Les présentes CGV constituent l&apos;intégralité de l&apos;accord entre le Vendeur et le Client. Si une clause était déclarée nulle, les autres clauses resteraient en vigueur.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Modification</h3>
              <p>
                Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Force majeure</h3>
              <p>
                Le Vendeur ne saurait être tenu responsable de l&apos;exécution de ses obligations en cas de force majeure au sens de l&apos;article 1218 du Code civil.
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Contact</h3>
              <p>
                Pour toute question relative aux présentes CGV, vous pouvez nous contacter à l&apos;adresse : <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
