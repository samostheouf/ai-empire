import type { Metadata } from 'next'
import { Shield, Database, Target, Scale, Clock, Users, Eye, Cookie, Mail,  MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité (RGPD) — NeuraAPI',
  description: "Politique de confidentialité de NeuraAPI, conforme au Règlement Général sur la Protection des Données (RGPD — UE 2016/679).",
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/politique-confidentialite' },
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Shield className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Politique de Confidentialité</h1>
          <p className="mt-2 text-indigo-300">Conforme au Règlement Général sur la Protection des Données (RGPD — UE 2016/679)</p>
          <p className="mt-1 text-sm text-indigo-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Responsable */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Responsable du traitement</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p><span className="font-semibold text-white">Responsable :</span> NeuraAPI SAS</p>
              <p><span className="font-semibold text-white">Siège social :</span> 61 rue Raymond Poincaré, 57700 Hayange, France</p>
              <p><span className="font-semibold text-white">SIRET :</span> 931 277 359 00012</p>
              <p><span className="font-semibold text-white">Délégué à la Protection des Données (DPO) :</span></p>
              <div className="ml-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <p>61 rue Raymond Poincaré, 57700 Hayange, France</p>
                </div>
              </div>
            </div>
          </section>

          {/* Données collectées */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Données collectées</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>Dans le cadre de nos services, nous collectons les catégories de données suivantes :</p>

              <h3 className="font-semibold text-white">Données d&apos;identification</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Mot de passe (chiffré)</li>
                <li>Nom d&apos;utilisateur</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données de facturation</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adresse de facturation</li>
                <li>Informations de paiement (traitées par Stripe, nous n&apos;avons pas accès aux numéros de carte)</li>
                <li>Historique des transactions</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données d&apos;utilisation</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Clés API (chiffrées)</li>
                <li>Historique des appels API (prompts, réponses, horodatages)</li>
                <li>Statistiques d&apos;utilisation (nombre d&apos;appels, crédits consommés)</li>
                <li>Données de performance et de diagnostic</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données de connexion</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur et système d&apos;exploitation</li>
                <li>Date et heure de connexion</li>
                <li>Pages visitées et actions effectuées</li>
              </ul>
            </div>
          </section>

          {/* Finalités */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Finalités du traitement</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Vos données sont traitées pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Gestion des comptes :</span> Création, gestion et authentification des comptes utilisateurs</li>
                <li><span className="font-semibold text-white">Fourniture des services :</span> Accès aux API, livraison des templates, gestion des crédits</li>
                <li><span className="font-semibold text-white">Facturation :</span> Émission de factures, suivi des paiements, relances</li>
                <li><span className="font-semibold text-white">Support client :</span> Réponse aux demandes et résolution des problèmes</li>
                <li><span className="font-semibold text-white">Amélioration du service :</span> Statistiques d&apos;utilisation, optimisation des performances</li>
                <li><span className="font-semibold text-white">Sécurité :</span> Prévention de la fraude, détection d&apos;abus, protection contre les attaques</li>
                <li><span className="font-semibold text-white">Communication :</span> Envoi de notifications importantes relatives au service</li>
                <li><span className="font-semibold text-white">Obligations légales :</span> Conservation des données comptables et fiscales</li>
              </ul>
            </div>
          </section>

          {/* Base légale */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Base légale du traitement</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Chaque traitement de données repose sur une base légale :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Exécution du contrat (art. 6.1.b RGPD) :</span> Fourniture des services, gestion des comptes, facturation</li>
                <li><span className="font-semibold text-white">Intérêt légitime (art. 6.1.f RGPD) :</span> Sécurité du service, amélioration, prévention de la fraude</li>
                <li><span className="font-semibold text-white">Obligation légale (art. 6.1.c RGPD) :</span> Conservation des données comptables et fiscales</li>
                <li><span className="font-semibold text-white">Consentement (art. 6.1.a RGPD) :</span> Cookies non essentiels, communications marketing</li>
              </ul>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Durée de conservation</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Vos données sont conservées pour les durées suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Données de compte :</span> Pendant toute la durée de la relation contractuelle, puis 3 ans après la dernière connexion</li>
                <li><span className="font-semibold text-white">Données de facturation :</span> 10 ans (obligation légale comptable)</li>
                <li><span className="font-semibold text-white">Historique des appels API :</span> 12 mois après le dernier appel</li>
                <li><span className="font-semibold text-white">Données de connexion :</span> 12 mois</li>
                <li><span className="font-semibold text-white">Cookies :</span> 13 mois maximum</li>
                <li><span className="font-semibold text-white">Données de prospection :</span> 3 ans après le dernier contact</li>
              </ul>
              <p className="mt-4">
                À l&apos;expiration de ces délais, les données sont supprimées ou anonymisées de manière irréversible.
              </p>
            </div>
          </section>

          {/* Destinataires */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Destinataires des données</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Vos données peuvent être partagées avec les catégories de destinataires suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Prestataires techniques :</span> Vercel (hébergement), Stripe (paiements), Vercel Analytics (statistiques)</li>
                <li><span className="font-semibold text-white">Prestataires de paiement :</span> Stripe Inc. — traitement sécurisé des paiements</li>
                <li><span className="font-semibold text-white">Autorités compétentes :</span> En cas d&apos;obligation légale ou de réquisition judiciaire</li>
              </ul>
              <p className="mt-4">
                Ces prestataires sont soumis à des obligations contractuelles garantissant la protection de vos données conformément au RGPD. Nous ne vendons jamais vos données à des tiers.
              </p>
            </div>
          </section>

          {/* Transferts hors UE */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Transferts hors Union européenne</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Certains de nos prestataires sont situés hors de l&apos;Union européenne (notamment aux États-Unis). Ces transferts sont encadrés par :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Des clauses contractuelles types (CCT) conformes à la décision d&apos;exécution de la Commission européenne</li>
                <li>Le Privacy Shield (pour les prestataires certifiés)</li>
                <li>Des garanties supplémentaires appropriées conformément aux articles 46 et suivants du RGPD</li>
              </ul>
            </div>
          </section>

          {/* Droits */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Vos droits</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données à caractère personnel :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Droit d&apos;accès (art. 15) :</span> Obtenir une copie de vos données</li>
                <li><span className="font-semibold text-white">Droit de rectification (art. 16) :</span> Corriger des données inexactes</li>
                <li><span className="font-semibold text-white">D&apos;effacement (art. 17) :</span> Demander la suppression de vos données</li>
                <li><span className="font-semibold text-white">À la limitation du traitement (art. 18) :</span> Limiter le traitement de vos données</li>
                <li><span className="font-semibold text-white">À la portabilité (art. 20) :</span> Recevoir vos données dans un format structuré</li>
                <li><span className="font-semibold text-white">D&apos;opposition (art. 21) :</span> Vous opposer au traitement de vos données</li>
                <li><span className="font-semibold text-white">De retirer votre consentement :</span> À tout moment, sans affecter la licéité du traitement antérieur</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, contactez-nous à : <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
              <p>
                Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">www.cnil.fr</a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">9. Cookies</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Notre site utilise des cookies conformément à la réglementation en vigueur. Pour plus d&apos;informations, consultez notre <a href="/politique-cookies" className="text-indigo-400 hover:text-white transition-colors underline">Politique de Cookies</a>.
              </p>
              <p>
                Vous pouvez gérer vos préférences de cookies via le bandeau de consentement affiché lors de votre première visite.
              </p>
            </div>
          </section>

          {/* Sécurité */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">10. Sécurité des données</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles suivantes pour protéger vos données :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiffrement TLS/SSL pour toutes les communications</li>
                <li>Chiffrement au repos des données sensibles</li>
                <li>Authentification multi-facteurs (MFA) disponible</li>
                <li>Clés API chiffrées et gérées de manière sécurisée</li>
                <li>Accès restreint aux données (principe du moindre privilège)</li>
                <li>Journalisation et surveillance des accès</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">11. Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Pour toute question relative à la protection de vos données personnelles :</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Email : </span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-indigo-400" />
                  <span>Adresse : NeuraAPI SAS — DPO, 61 rue Raymond Poincaré, 57700 Hayange, France</span>
                </div>
              </div>
              <p className="mt-4">
                Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
