'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Copy, Check, List, Inbox } from 'lucide-react';
import type { FAQ } from '../data/faq';
import { CATEGORIES } from '../data/faq';
import { useLanguage } from '../lib/i18n';

type AnswerPanelProps = {
  faq: FAQ | null;
  onPrev: () => void;
  onNext: () => void;
  onBack: () => void;
  hasPrev: boolean;
  hasNext: boolean;
};

export default function AnswerPanel({
  faq,
  onPrev,
  onNext,
  onBack,
  hasPrev,
  hasNext,
}: AnswerPanelProps) {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setCopied(false);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [faq?.id]);

  const handleCopy = async () => {
    if (!faq) return;
    const text = `${faq.question[lang]}\n\n${faq.answer[lang]}`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'absolute';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
      } catch {
        /* noop */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  if (!faq) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/60 px-6 py-14 text-center backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <Inbox
          className="h-10 w-10 text-slate-300 dark:text-white/25"
          aria-hidden="true"
        />
        <p className="max-w-sm text-sm text-slate-500 dark:text-white/55">
          {t('emptyState')}
        </p>
      </div>
    );
  }

  const categoryLabel =
    CATEGORIES.find((c) => c.id === faq.category)?.label[lang] ?? faq.category;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={faq.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-slate-900/10 bg-white/60 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-white/50">
          <span className="rounded-full bg-indigo-500/15 px-2.5 py-1 font-medium text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
            {t('faqIdLabel')} #{faq.id}
          </span>
          <span aria-hidden="true">•</span>
          <span>
            {t('categoryLabel')}: {categoryLabel}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white md:text-2xl">
          {faq.question[lang]}
        </h3>
        <p className="whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-white/75">
          {faq.answer[lang]}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-900/10 pt-5 dark:border-white/10">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className="flex items-center gap-1.5 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm text-slate-700 transition-all hover:bg-slate-900/10 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:disabled:hover:bg-white/5"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            {t('prevQuestion')}
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center gap-1.5 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm text-slate-700 transition-all hover:bg-slate-900/10 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:disabled:hover:bg-white/5"
          >
            {t('nextQuestion')}
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-xl border border-slate-900/10 bg-slate-900/5 px-4 py-2 text-sm text-slate-700 transition-all hover:bg-slate-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
          >
            {copied ? (
              <Check
                className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
            ) : (
              <Copy className="h-4 w-4" aria-hidden="true" />
            )}
            {copied ? t('copied') : t('copyAnswer')}
          </button>
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-700 transition-all hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-indigo-400/40 dark:bg-indigo-500/15 dark:text-indigo-200 dark:hover:bg-indigo-500/25"
          >
            <List className="h-4 w-4" aria-hidden="true" />
            {t('backToQuestions')}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
