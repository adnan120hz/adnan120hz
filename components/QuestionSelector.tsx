'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Search, SearchX } from 'lucide-react';
import { faqs } from '../data/faq';
import { getFaqsByCategory } from '../lib/faq-utils';
import { useLanguage } from '../lib/i18n';
import CategoryGrid, { type CategoryFilter } from './CategoryGrid';

type QuestionSelectorProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (id: number) => void;
};

export default function QuestionSelector({
  open,
  onClose,
  onSelect,
}: QuestionSelectorProps) {
  const { lang, t } = useLanguage();
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setCategory('all');
      setQuery('');
    }
  }, [open]);

  const filtered = useMemo(() => {
    const base =
      category === 'all' ? faqs : getFaqsByCategory(category);
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((f) =>
      f.question[lang].toLowerCase().includes(q),
    );
  }, [category, query, lang]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t('modalTitle')}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative flex max-h-[80vh] w-[92%] max-w-lg flex-col overflow-hidden rounded-3xl border border-slate-900/10 bg-white dark:border-white/10 dark:bg-[#0a0f1e]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-900/10 px-5 py-4 dark:border-white/10">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {t('modalTitle')}
                </h2>
                <p className="text-sm text-slate-500 dark:text-white/50">
                  {faqs.length} {t('questionsLabel')}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t('closeModal')}
                className="rounded-full border border-slate-900/10 bg-slate-900/5 p-2 text-slate-500 transition-colors hover:bg-slate-900/10 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-3 border-b border-slate-900/10 px-5 py-4 dark:border-white/10">
              <CategoryGrid active={category} onSelect={setCategory} />
              <div className="relative">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-white/40"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  aria-label={t('searchPlaceholder')}
                  className="w-full rounded-xl border border-slate-900/10 bg-slate-900/5 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500/60 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-indigo-400/60"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-10 text-center">
                  <SearchX
                    className="h-8 w-8 text-slate-300 dark:text-white/30"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-slate-500 dark:text-white/50">
                    {t('noResults')}
                  </p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {filtered.map((faq) => (
                    <li key={faq.id}>
                      <button
                        type="button"
                        onClick={() => onSelect(faq.id)}
                        className="flex w-full items-center gap-3 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-3 text-left transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-xs font-semibold tabular-nums text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
                          {faq.id}
                        </span>
                        <span className="text-sm text-slate-800 dark:text-white/85">
                          {faq.question[lang]}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
