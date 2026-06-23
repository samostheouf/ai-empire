'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Filter, X } from 'lucide-react';
import CreateUserForm from '@/components/CreateUserForm';
import EditUserButton from '@/components/EditUserButton';
import DeleteUserButton from '@/components/DeleteUserButton';
import { useI18n } from '@/i18n';

interface User {
  id: string;
  email: string;
  plan: string;
  credits: number;
  apiKey: string;
  createdAt: string;
}

interface Props {
  users: User[];
}

export default function UsersPageClient({ users }: Props) {
  const { t, locale } = useI18n();
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [planFilter, setPlanFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'email' | 'credits' | 'createdAt'>('createdAt');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');

  const filteredUsers = useMemo(() => {
    let result = [...users];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (u) =>
          u.email.toLowerCase().includes(q) ||
          u.apiKey.toLowerCase().includes(q)
      );
    }

    if (planFilter !== 'all') {
      result = result.filter((u) => u.plan === planFilter);
    }

    result.sort((a, b) => {
      let compare = 0;
      if (sortBy === 'email') {
        compare = a.email.localeCompare(b.email);
      } else if (sortBy === 'credits') {
        compare = a.credits - b.credits;
      } else {
        compare = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
      return sortDir === 'asc' ? compare : -compare;
    });

    return result;
  }, [users, search, planFilter, sortBy, sortDir]);

  const toggleSort = (field: 'email' | 'credits' | 'createdAt') => {
    if (sortBy === field) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDir('desc');
    }
  };

  const clearFilters = () => {
    setSearch('');
    setPlanFilter('all');
    setSortBy('createdAt');
    setSortDir('desc');
  };

  const hasFilters = search || planFilter !== 'all';

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t('adminNavUsers')}</h1>
        <CreateUserForm onUserCreated={() => router.refresh()} />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder={t('adminSearchPlaceholder')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={t('adminSearchAria')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label={t('adminClearSearchAria')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="relative min-w-[150px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={planFilter}
              onChange={(e) => setPlanFilter(e.target.value)}
              aria-label={t('adminFilterPlanAria')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none appearance-none bg-white"
            >
              <option value="all">{t('adminAllPlans')}</option>
              <option value="starter">{t('adminPlanStarter')}</option>
              <option value="pro">{t('adminPlanPro')}</option>
              <option value="enterprise">{t('adminPlanEnterprise')}</option>
            </select>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              aria-label={t('adminClearFiltersAria')}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              {t('adminClear')}
            </button>
          )}

          <span className="text-sm text-gray-500">
            {t('adminResultsCount').replace('{count}', filteredUsers.length.toString()).replace('{total}', users.length.toString())} {users.length > 1 ? t('adminUserPlural') : t('adminUserSingular')}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th
                onClick={() => toggleSort('email')}
                className="text-left px-6 py-3 font-medium text-gray-500 cursor-pointer hover:text-gray-700 select-none"
              >
                {t('adminTableEmail')} {sortBy === 'email' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{t('adminPlan')}</th>
              <th
                onClick={() => toggleSort('credits')}
                className="text-left px-6 py-3 font-medium text-gray-500 cursor-pointer hover:text-gray-700 select-none"
              >
                {t('adminCredits')} {sortBy === 'credits' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{t('adminApiKey')}</th>
              <th
                onClick={() => toggleSort('createdAt')}
                className="text-left px-6 py-3 font-medium text-gray-500 cursor-pointer hover:text-gray-700 select-none"
              >
                {t('adminTableDate')} {sortBy === 'createdAt' && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
              <th className="text-left px-6 py-3 font-medium text-gray-500">{t('adminTableActions')}</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-3 font-medium">{user.email}</td>
                <td className="px-6 py-3">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700 capitalize">
                    {user.plan}
                  </span>
                </td>
                <td className="px-6 py-3">{user.credits.toLocaleString(locale)}</td>
                <td className="px-6 py-3 font-mono text-xs text-gray-500 max-w-[200px] truncate">
                  {user.apiKey}
                </td>
                <td className="px-6 py-3 text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString(locale)}
                </td>
                <td className="px-6 py-3">
                  <div className="flex items-center gap-1">
                    <EditUserButton user={user} onUpdated={() => router.refresh()} />
                    <DeleteUserButton
                      userId={user.id}
                      userEmail={user.email}
                      onDeleted={() => router.refresh()}
                    />
                  </div>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                  {hasFilters ? t('adminNoResults') : t('adminNoUsers')}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
