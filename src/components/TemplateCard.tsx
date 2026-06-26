'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo, memo } from 'react';
import { parseJsonField, formatPrice } from '@/lib/utils';
import { Tag, Download, Star, Eye, X } from 'lucide-react';
import { trackTemplateView } from '@/lib/analytics';
import { useI18n } from '@/i18n';

interface TemplateCardProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  screenshot: string;
  tags: unknown;
}

function stableHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

const TemplateCard = memo(function TemplateCardInner({ id, name, slug, description, price, screenshot, tags }: TemplateCardProps) {
  const { t } = useI18n();
  const parsedTags = parseJsonField<string[]>(tags || '[]');
  const [hovered, setHovered] = useState(false);
  const [quickView, setQuickView] = useState(false);

  const { downloadCount, rating, reviewCount, ratingWhole } = useMemo(() => {
    const h = stableHash(id);
    return {
      downloadCount: (h % 200) + 50,
      rating: ((h % 9) + 1) / 10,
      reviewCount: (h % 40) + 10,
      ratingWhole: 4 + ((h % 9) + 1) / 10,
    };
  }, [id]);

  useEffect(() => {
    if (!quickView) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setQuickView(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [quickView])

  const handleQuickView = () => {
    trackTemplateView(id, name)
    setQuickView(true)
  }

  return (
    <>
      <div
        className="group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-xl hover:border-indigo-200 transition-all overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 mb-4 img-skeleton">
          <Image
            src={screenshot}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjM2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+PC9zdmc+"
            className={`object-cover transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

          <div className={`absolute top-3 right-3 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
            <button
              onClick={(e) => { e.preventDefault(); handleQuickView(); }}
              aria-label={t('templateQuickView')}
              className="inline-flex items-center gap-1.5 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-white transition-all shadow-lg"
            >
              <Eye className="w-3 h-3" aria-hidden="true" />
              {t('templateQuickView')}
            </button>
          </div>

          <div className={`absolute bottom-3 left-3 right-3 flex items-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="flex items-center gap-1 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-white">
              <Download className="w-3 h-3" aria-hidden="true" />
              {downloadCount}
            </div>
            <div className="flex items-center gap-0.5 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-yellow-400">
              <Star className="w-3 h-3 fill-current" aria-hidden="true" />
              {ratingWhole.toFixed(1)}
            </div>
          </div>

          <div className={`absolute bottom-3 left-3 right-3 flex items-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="flex items-center gap-1 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-white">
              <Download className="w-3 h-3" />
              {downloadCount}
            </div>
            <div className="flex items-center gap-0.5 rounded-md bg-black/50 backdrop-blur-sm px-2 py-1 text-xs text-yellow-400">
              <Star className="w-3 h-3 fill-current" />
              {ratingWhole.toFixed(1)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
            {formatPrice(price)}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">{name}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>

        {parsedTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {parsedTags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
              >
                <Tag className="h-3 w-3" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Download className="w-3 h-3" aria-hidden="true" />
              {downloadCount}
            </span>
            <span className="flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              {ratingWhole.toFixed(1)}
            </span>
          </div>
          <Link
            href={`/templates/${slug}`}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500 transition-colors"
          >
            {t('templateViewDetails')}
          </Link>
        </div>
      </div>

      {quickView && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={t('templateQuickView')}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setQuickView(false)} aria-hidden="true" />
          <div className="relative w-full max-w-2xl rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden animate-scale-in">
                <button
                  onClick={() => setQuickView(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/80 backdrop-blur-sm text-gray-500 hover:text-gray-900 hover:bg-white transition-colors shadow"
                  aria-label={t('templateClosePreview')}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
            <div className="relative aspect-video bg-gray-100">
              <Image src={screenshot} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 672px" placeholder="blur" blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCBmaWxsPSIjZjFmNWY5IiB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIvPjwvc3ZnPg==" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 text-sm font-bold text-white shadow-sm">
                  {formatPrice(price)}
                </span>
                <div className="flex items-center gap-1 text-sm text-yellow-500">
                  <Star className="w-4 h-4 fill-current" aria-hidden="true" />
                  {ratingWhole.toFixed(1)} ({reviewCount} {t('templateReviews')})
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
              {parsedTags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {parsedTags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-6 flex gap-3">
                <Link
                  href={`/templates/${slug}`}
                  className="flex-1 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors text-center"
                >
                  {t('templateViewDetails')}
                </Link>
                <button
                  onClick={() => setQuickView(false)}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  {t('templateClose')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default TemplateCard;
