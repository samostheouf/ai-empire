'use client';

import { useState } from 'react';
import { Trash2, Loader2, AlertTriangle } from 'lucide-react';
import { useI18n } from '@/i18n';

interface Props {
  userId: string;
  userEmail: string;
  onDeleted: () => void;
}

export default function DeleteUserButton({ userId, userEmail, onDeleted }: Props) {
  const { t } = useI18n();
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/users?id=${userId}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setShowConfirm(false);
        onDeleted();
      }
    } catch (err) {
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        aria-label={t('adminDeleteAria')}
        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" role="dialog" aria-modal="true" aria-label={t('adminDeleteConfirmTitleAria')}>
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-lg font-semibold">{t('adminDeleteUser')}</h2>
            </div>

            <p className="text-gray-600 mb-6">
              {t('adminDeleteConfirm').replace('{email}', userEmail)}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                aria-label={t('adminCancelDeleteAria')}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t('adminCancel')}
              </button>
              <button
                onClick={handleDelete}
                disabled={loading}
                aria-label={t('adminDeleteConfirmAria')}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                {loading ? t('adminDeleting') : t('adminDelete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
