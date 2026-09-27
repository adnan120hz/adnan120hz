'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircleQuestion, WifiOff } from 'lucide-react';
import { faqs, CATEGORIES, type FAQ } from '../data/faq';
import { getFaqById, getAdjacentIds } from '../lib/faq-utils';
import { useLanguage } from '../lib/i18n';
import AnswerPanel from './AnswerPanel';
import QuestionSelector from './QuestionSelector';

const SUPPORTED_LANGUAGE_COUNT = 5;

export default function LocalAI() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const faq: FAQ | null = selectedId !== null ? getFaqById(selectedId) ?? null : null;

  const handleSelect = (id: number) => {
    setSelectedId(id);
    setModalOpen(false);
  };

  const handlePrev = () => {
    if (selectedId === null) return;
    const { prev } = getAdjacentIds(selectedId);
    if (prev !== null) setSelectedId(prev);
  };

  const handleNext = () => {
    if (selectedId === null) return;
    const { next } = getAdjacentIds(selectedId);
    if (next !== null) setSelectedId(next);
  };

  const handleBack = () => {
    setModalOpen(true);
  };

  const adjacent = selectedId !== null ? getAdjacentIds(selectedId) : { prev: null, next: null };

  const stats = [
    { value: String(faqs.length), label: t('statQuestions') },
    { value: String(SUPPORTED_LANGUAGE_COUNT), label: t('statLanguages') },
    { value: String(CATEGORIES.length), label: t('statCategories') },
  ];

  return (
    <section aria-label="local-ai" className="space-y-6">
      <div className="text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:border-emerald-400/30 dark:text-emerald-300">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {t('aiBadge')}
        </div>
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          <Sparkles
            className="h-6 w-6 text-indigo-500 dark:text-indigo-300"
            aria-hidden="true"
          />
          {t('aiTitle')}
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-white/60 md:text-base">
          {t('aiSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-4 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-slate-500 dark:text-white/55 md:text-sm">
              {s.label}
            </p>
          </div>
        ))}
        <div className="col-span-3 flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 backdrop-blur-xl dark:border-emerald-400/20">
          <WifiOff
            className="h-4 w-4 text-emerald-600 dark:text-emerald-300"
            aria-hidden="true"
          />
          <p className="text-sm font-medium text-emerald-700 dark:text-emerald-200">
            {t('statOffline')}
          </p>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => setModalOpen(true)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-shadow hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
      >
        <MessageCircleQuestion className="h-5 w-5" aria-hidden="true" />
        {t('chooseQuestion')}
      </motion.button>

      <AnswerPanel
        faq={faq}
        onPrev={handlePrev}
        onNext={handleNext}
        onBack={handleBack}
        hasPrev={adjacent.prev !== null}
        hasNext={adjacent.next !== null}
      />

      <QuestionSelector
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelect}
      />
    </section>
  );
}
