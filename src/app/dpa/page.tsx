import type { Metadata } from 'next'
import { FileText, Database, Server, Shield, Globe, Clock, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accord de Traitement des Données (DPA) — NeuraAPI',
  description: 'Accord de traitement des données de NeuraAPI, conforme au RGPD.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/dpa' },
}

export default function DPA() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Accord de Traitement des Données (DPA)</h1>
          <p className="mt-2 text-indigo-300">Conforme au RGPD — UE 2016/679</p>
          <p className="mt-1 text-sm text-indigo-400">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        <div className="space-y-12">
          {/* Objet */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">1. Objet</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Le présent Accord de Traitement des Données (DPA) définit les modalités selon lesquelles NeuraAPI SAS
                (ci-après « le Sous-traitant ») traite les données à caractère personnel au nom et pour le compte de ses
                clients (ci-après « le Responsable du traitement ») dans le cadre de la fourniture de services d&apos;API.
              </p>
              <p>
                Cet accord s&apos;applique à tous les traitements de données effectués par NeuraAPI dans le cadre de la
                relation contractuelle avec le Responsable du traitement, conformément au Règlement Général sur la
                Protection des Données (RGPD — UE 2016/679).
              </p>
            </div>
          </section>

          {/* Description du traitement */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">2. Description du traitement</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>NeuraAPI traite les données à caractère personnel pour les finalités suivantes :</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Gestion des comptes :</span> Création, authentification et gestion des comptes utilisateurs</li>
                <li><span className="font-semibold text-white">Fourniture des services API :</span> Livraison et maintenance des services d&apos;API, traitement des requêtes</li>
                <li><span className="font-semibold text-white">Traitement des paiements :</span> Facturation, encaissement et suivi des transactions</li>
                <li><span className="font-semibold text-white">Statistiques et analyses :</span> Mesure d&apos;utilisation, amélioration des performances du service</li>
              </ul>
            </div>
          </section>

          {/* Catégories de données */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">3. Catégories de données</h2>
            </div>
            <div className="space-y-4 text-indigo-200 text-sm">
              <p>Les catégories de données à caractère personnel traitées sont les suivantes :</p>

              <h3 className="font-semibold text-white">Données d&apos;identification</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Nom d&apos;utilisateur</li>
                <li>Mot de passe (chiffré)</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données de facturation</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adresse de facturation</li>
                <li>Informations de paiement (traitées par Stripe)</li>
                <li>Historique des transactions</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données d&apos;utilisation</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Clés API (chiffrées)</li>
                <li>Historique des appels API</li>
                <li>Statistiques d&apos;utilisation</li>
                <li>Données de performance</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">Données de connexion</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adresse IP</li>
                <li>Type de navigateur et système d&apos;exploitation</li>
                <li>Date et heure de connexion</li>
              </ul>
            </div>
          </section>

          {/* Sous-traitants */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Server className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">4. Sous-traitants (Sub-processors)</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>NeuraAPI s&apos;appuie sur les sous-traitants suivants pour le traitement des données :</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-indigo-800/50">
                      <th className="py-3 px-4 font-semibold text-white">Sous-traitant</th>
                      <th className="py-3 px-4 font-semibold text-white">Service</th>
                      <th className="py-3 px-4 font-semibold text-white">Lieu</th>
                      <th className="py-3 px-4 font-semibold text-white">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-indigo-800/30">
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Vercel Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">Hébergement</td>
                      <td className="py-3 px-4 text-indigo-200">USA (CCT)</td>
                      <td className="py-3 px-4 text-indigo-200">Durée du contrat</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Stripe Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">Paiements</td>
                      <td className="py-3 px-4 text-indigo-200">USA (Privacy Shield)</td>
                      <td className="py-3 px-4 text-indigo-200">10 ans</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">OpenAI</td>
                      <td className="py-3 px-4 text-indigo-200">IA Génération</td>
                      <td className="py-3 px-4 text-indigo-200">USA (CCT)</td>
                      <td className="py-3 px-4 text-indigo-200">Non stocké</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-indigo-200">Groq Inc.</td>
                      <td className="py-3 px-4 text-indigo-200">IA Inférence rapide</td>
                      <td className="py-3 px-4 text-indigo-200">USA (CCT)</td>
                      <td className="py-3 px-4 text-indigo-200">Non stocké</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Mesures de sécurité */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">5. Mesures de sécurité</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                NeuraAPI met en œuvre les mesures techniques et organisationnelles suivantes pour garantir la sécurité des données traitées :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiffrement TLS/SSL pour toutes les communications en transit</li>
                <li>Chiffrement au repos des données sensibles</li>
                <li>Contrôles d&apos;accès basés sur les rôles (RBAC)</li>
                <li>Journalisation et surveillance des accès</li>
                <li>Audits de sécurité réguliers</li>
                <li>Authentification multi-facteurs (MFA) pour les accès administratifs</li>
              </ul>
            </div>
          </section>

          {/* Transferts hors UE */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">6. Transferts hors Union européenne</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Certains sous-traitants de NeuraAPI sont situés hors de l&apos;Union européenne (notamment aux États-Unis).
                Ces transferts sont encadrés par des clauses contractuelles types (CCT) conformes à la décision
                d&apos;exécution de la Commission européenne.
              </p>
              <p>
                Les garanties supplémentaires appropriées sont mises en place conformément aux articles 46 et suivants
                du RGPD, incluant le cas échéant la certification au Privacy Shield pour les prestataires concernés.
              </p>
            </div>
          </section>

          {/* Durée */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">7. Durée</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                Le présent accord reste en vigueur pour toute la durée du contrat principal entre le Responsable du
                traitement et NeuraAPI. À la résiliation du contrat, NeuraAPI s&apos;engage à supprimer ou restituer
                toutes les données à caractère personnel dans un délai de 30 jours, sauf obligation légale de conservation.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">8. Contact</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>Pour toute question relative au présent accord ou au traitement de vos données :</p>
              <div className="ml-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-indigo-400" />
                  <span>Délégué à la Protection des Données (DPO) :</span>
                  <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
