'use client';

import { LayoutGrid } from 'lucide-react';
import { CATEGORIES, type CategoryId } from '../data/faq';
import { getFaqsByCategory } from '../lib/faq-utils';
import { useLanguage } from '../lib/i18n';

export type CategoryFilter = CategoryId | 'all';

type CategoryGridProps = {
  active: CategoryFilter;
  onSelect: (c: CategoryFilter) => void;
};

export default function CategoryGrid({ active, onSelect }: CategoryGridProps) {
  const { lang, t } = useLanguage();

  const chip = (selected: boolean) =>
    `flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 ${
      selected
        ? 'border-indigo-500/60 bg-indigo-500/15 text-slate-900 ring-2 ring-indigo-500/30 dark:border-indigo-400/60 dark:bg-indigo-500/20 dark:text-white dark:ring-indigo-400/40'
        : 'border-slate-900/10 bg-slate-900/5 text-slate-600 hover:border-slate-900/25 hover:bg-slate-900/10 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:border-white/25 dark:hover:bg-white/10 dark:hover:text-white'
    }`;

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label={t('categoryLabel')}
    >
      <button
        type="button"
        onClick={() => onSelect('all')}
        aria-pressed={active === 'all'}
        className={chip(active === 'all')}
      >
        <LayoutGrid className="h-4 w-4" aria-hidden="true" />
        {t('allCategories')}
      </button>
      {CATEGORIES.map((cat) => {
        const selected = active === cat.id;
        const count = getFaqsByCategory(cat.id).length;
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            aria-pressed={selected}
            className={chip(selected)}
          >
            <span>{cat.label[lang]}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-xs tabular-nums ${
                selected
                  ? 'bg-indigo-500/25 text-indigo-700 dark:bg-indigo-400/30 dark:text-white'
                  : 'bg-slate-900/10 text-slate-500 dark:bg-white/10 dark:text-white/60'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
