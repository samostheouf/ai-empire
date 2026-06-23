import type { Metadata } from 'next'
import { FileText, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, AlertTriangle, Scale } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — NeuraAPI',
  description: 'Terms of Service of NeuraAPI — Artificial intelligence services and digital templates.',
  robots: 'index, follow',
  alternates: { canonical: 'https://ai-empire-steel.vercel.app/en/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <div className="bg-indigo-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-indigo-400" />
          <h1 className="mt-4 text-4xl font-bold text-white">Terms of Service</h1>
          <p className="mt-2 text-indigo-300">Last updated: {new Date().toLocaleDateString('en-US')}</p>
        </div>

        <div className="space-y-12">
          {/* Article 1 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Article 1 — Purpose</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                These Terms of Service (TOS) govern the contractual relationship between the company NeuraAPI SAS, hereinafter referred to as &quot;the Seller&quot;, and any natural or legal person, hereinafter referred to as &quot;the Customer&quot;, wishing to acquire the services and products offered on the website <a href="https://ai-empire-steel.vercel.app" className="text-indigo-400 hover:text-white transition-colors">ai-empire-steel.vercel.app</a>.
              </p>
              <p>
                Any order of services or products on the website implies unconditional acceptance of these TOS. The Seller reserves the right to modify these TOS at any time. The applicable TOS are those in force at the date of the Customer&apos;s order.
              </p>
            </div>
          </section>

          {/* Article 2 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 2 — Products and Services</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                The Seller offers the following products and services for sale:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold text-white">Artificial intelligence API subscriptions</span> — Access to AI endpoints (text generation, SEO, code) via a personal API key.</li>
                <li><span className="font-semibold text-white">Digital templates</span> — Web templates (Next.js, Tailwind CSS) downloadable and usable in accordance with the acquired license.</li>
                <li><span className="font-semibold text-white">Credit packs</span> — Consumption units for API calls, valid for a specified duration.</li>
              </ul>
              <p>
                The essential characteristics of the products and services are presented on the website. Images and descriptions are provided for informational purposes only and do not bind the Seller.
              </p>
            </div>
          </section>

          {/* Article 3 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 3 — Prices and Payment Terms</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">3.1 Prices</h3>
              <p>
                Product and service prices are indicated in euros (€) inclusive of all taxes (VAT included at the current rate). The Seller reserves the right to modify its prices at any time. Applicable prices are those in effect at the time of order validation by the Customer.
              </p>

              <h3 className="font-semibold text-white mt-4">3.2 Payment Methods</h3>
              <p>Payment is made exclusively online via:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Credit card (Visa, Mastercard, American Express)</li>
                <li>Bank transfer (for Enterprise subscriptions)</li>
                <li>Apple Pay / Google Pay</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">3.3 Invoicing</h3>
              <p>
                An invoice is electronically issued and accessible in the customer area after each payment. The Customer agrees to retain their invoices.
              </p>

              <h3 className="font-semibold text-white mt-4">3.4 Non-Payment</h3>
              <p>
                In the event of non-payment, the Seller reserves the right to suspend access to services after a formal notice remains unpaid for 15 days. Late payment penalties at a rate of three times the statutory interest rate may be applied.
              </p>
            </div>
          </section>

          {/* Article 4 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Truck className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 4 — Provision and Delivery</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">4.1 Subscription Services</h3>
              <p>
                Access to APIs is made available immediately after payment validation. The API key is automatically generated and accessible from the customer area.
              </p>

              <h3 className="font-semibold text-white mt-4">4.2 Digital Templates</h3>
              <p>
                Templates are downloadable immediately after purchase. A download link is sent by email and accessible from the customer area.
              </p>

              <h3 className="font-semibold text-white mt-4">4.3 Credit Packs</h3>
              <p>
                Credits are credited to the Customer&apos;s account immediately after payment and remain valid for 12 months from the date of purchase.
              </p>
            </div>
          </section>

          {/* Article 5 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <RotateCcw className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 5 — Right of Withdrawal</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                In accordance with Articles L.221-18 and following of the Consumer Code, the Customer has a period of <span className="font-semibold text-white">14 days</span> from the date of subscription or purchase to exercise their right of withdrawal, without having to justify their decision.
              </p>

              <h3 className="font-semibold text-white mt-4">5.1 Withdrawal Conditions</h3>
              <p>To exercise their right of withdrawal, the Customer must send the Seller a written declaration (email or letter) clearly expressing their intention to withdraw.</p>
              <p>Email: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a></p>

              <h3 className="font-semibold text-white mt-4">5.2 Exceptions to the Right of Withdrawal</h3>
              <p>The right of withdrawal cannot be exercised in the following cases:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The performance of the service has commenced, with the Customer&apos;s express consent, before the end of the 14-day period</li>
                <li>The digital content (templates) has been downloaded or activated by the Customer</li>
                <li>The service has been fully performed before the end of the withdrawal period</li>
              </ul>

              <h3 className="font-semibold text-white mt-4">5.3 Refund</h3>
              <p>
                In the event of a valid withdrawal, the refund is made within a maximum of 14 days, using the same payment method as that used for the initial transaction.
              </p>
            </div>
          </section>

          {/* Article 6 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 6 — Warranties</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">6.1 Conformity Warranty</h3>
              <p>
                In accordance with Articles L.217-3 and following of the Consumer Code, the Seller is required to deliver a product that conforms to the contract. The Customer may request the conformity of the product within a period of 2 years from delivery.
              </p>

              <h3 className="font-semibold text-white mt-4">6.2 Hidden Defects Warranty</h3>
              <p>
                In accordance with Articles 1641 and following of the Civil Code, the Seller is required to warrant against hidden defects. The Customer has a period of 2 years from the discovery of the defect to take action.
              </p>

              <h3 className="font-semibold text-white mt-4">6.3 Service Availability</h3>
              <p>
                The Seller commits to ensuring service availability with a monthly uptime rate of 99.9% (SLA). Scheduled maintenance is communicated 48 hours in advance.
              </p>
            </div>
          </section>

          {/* Article 7 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 7 — Limitation of Liability</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                The Seller shall not be held liable for damage resulting from:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Non-compliant use of the services by the Customer</li>
                <li>Temporary service interruption for maintenance or updates</li>
                <li>Data loss due to a technical infrastructure failure</li>
                <li>Indirect damage, loss of revenue, data loss or any other prejudice</li>
                <li>Use of AI-generated results for illicit purposes or contrary to public order</li>
              </ul>
              <p className="mt-4">
                The Seller&apos;s total liability is limited to the amount paid by the Customer during the 12 months preceding the event giving rise to the damage.
              </p>
            </div>
          </section>

          {/* Article 8 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 8 — Template Usage License</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                The purchase of a template grants the Customer a non-exclusive, non-transferable, and limited usage license, allowing them to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use the template for personal or commercial projects</li>
                <li>Modify the template to suit their needs</li>
                <li>Use the template for an unlimited number of projects</li>
              </ul>
              <p className="mt-3">The Customer may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Resell or redistribute the template as such</li>
                <li>Sublicense the template to third parties</li>
                <li>Remove or modify copyright notices</li>
              </ul>
            </div>
          </section>

          {/* Article 9 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 9 — Personal Data</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                The processing of the Customer&apos;s personal data is governed by our <a href="/en/privacy-policy" className="text-indigo-400 hover:text-white transition-colors underline">Privacy Policy</a>, which complies with the GDPR.
              </p>
              <p>
                The Customer has the right to access, rectify, erase, port, and object to their personal data by contacting: <a href="mailto:dpo@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">dpo@neuraapi.com</a>
              </p>
            </div>
          </section>

          {/* Article 10 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="h-5 w-5 text-indigo-400" />
              <h2 className="text-xl font-bold text-white">Article 10 — Applicable Law and Disputes</h2>
            </div>
            <div className="space-y-3 text-indigo-200 text-sm">
              <p>
                These TOS are governed by <span className="font-semibold text-white">French law</span>. In the event of a dispute, the parties shall endeavor to find an amicable solution. Failing that, the dispute shall be brought before the courts of Paris.
              </p>
              <p>
                In accordance with Articles L.616-1 and R.616-1 of the Consumer Code, the Customer may freely resort to a consumer mediator in the event of an unresolved dispute:
              </p>
              <div className="ml-4 space-y-2 mt-2">
                <p>• <a href="https://www.mediation-conso.fr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">Consumer Mediation — mediation-conso.fr</a></p>
                <p>• European online dispute resolution platform: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-white transition-colors">ec.europa.eu/consumers/odr</a></p>
              </div>
            </div>
          </section>

          {/* Article 11 */}
          <section className="rounded-2xl border border-indigo-800/50 bg-indigo-900/30 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Article 11 — Miscellaneous Provisions</h2>
            <div className="space-y-3 text-indigo-200 text-sm">
              <h3 className="font-semibold text-white">11.1 Entire Agreement</h3>
              <p>
                These TOS constitute the entire agreement between the Seller and the Customer. If any clause is declared null and void, the other clauses shall remain in force.
              </p>

              <h3 className="font-semibold text-white mt-4">11.2 Amendments</h3>
              <p>
                The Seller reserves the right to amend these TOS at any time. The applicable TOS are those in force at the date of the order.
              </p>

              <h3 className="font-semibold text-white mt-4">11.3 Force Majeure</h3>
              <p>
                The Seller shall not be held liable for the performance of its obligations in the event of force majeure within the meaning of Article 1218 of the Civil Code.
              </p>

              <h3 className="font-semibold text-white mt-4">11.4 Contact</h3>
              <p>
                For any questions relating to these TOS, you may contact us at: <a href="mailto:contact@neuraapi.com" className="text-indigo-400 hover:text-white transition-colors">contact@neuraapi.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
