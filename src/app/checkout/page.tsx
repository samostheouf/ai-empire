'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { Loader2, CreditCard, Shield, Lock, RotateCcw, Check } from 'lucide-react';
import { useI18n } from '@/i18n';

function CheckoutContent() {
  const { t, locale } = useI18n();
  const searchParams = useSearchParams();
  const template = searchParams.get('template');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const prices: Record<string, { name: string; price: number }> = {
    'Pro': { name: 'NeuraAPI Pro', price: 2900 },
    'Enterprise': { name: 'NeuraAPI Enterprise', price: 9900 },
  };

  const plan = prices[template || ''] || prices['Pro'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId: `${template?.toLowerCase()}-plan`,
          templateTitle: plan.name,
          price: plan.price,
          email: email,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(t('checkoutErrorSession'));
        setLoading(false);
      }
    } catch (err) {
      setError(t('checkoutErrorNetwork'));
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-950 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <CreditCard className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">{t('checkoutTitle')}</h1>
          <p className="text-gray-500 mt-2">
            {plan.name} — {plan.price / 100}€{t('checkoutPerMonth')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('checkoutEmailLabel')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              placeholder="votre@email.com"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !email}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t('checkoutRedirect')}
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                {t('checkoutPay')} {plan.price / 100}€{t('checkoutPerMonth')}
              </>
            )}
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-4">
          {t('checkoutFooter')}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-green-500" />
            {t('checkoutBadgeSsl')}
          </span>
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-green-500" />
            {t('checkoutBadgeEncrypted')}
          </span>
          <span className="flex items-center gap-1.5">
            <RotateCcw className="w-3.5 h-3.5 text-green-500" />
            {t('checkoutBadgeGuarantee')}
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-5 text-green-500" />
            {t('checkoutBadgeNoCommitment')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-indigo-950 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-indigo-600 animate-spin" />
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}
