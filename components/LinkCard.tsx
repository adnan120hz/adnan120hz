'use client';

import { motion } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Heart,
  Music2,
  Github,
  ExternalLink,
} from 'lucide-react';
import type { LinkItem } from '../lib/config';
import { useLanguage } from '../lib/i18n';

const ICONS = {
  Send,
  MessageCircle,
  Heart,
  Music2,
  Github,
} as const;

type LinkCardProps = {
  link: LinkItem;
};

export default function LinkCard({ link }: LinkCardProps) {
  const { t } = useLanguage();
  const Icon = ICONS[link.icon];

  const inner = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/30">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-slate-900 dark:text-white">
          {link.title}
        </p>
        <p className="truncate text-sm text-slate-600 dark:text-white/60">
          {t(link.descKey)}
        </p>
      </div>
      {link.url ? (
        <ExternalLink
          className="h-4 w-4 shrink-0 text-slate-400 dark:text-white/40"
          aria-hidden="true"
        />
      ) : (
        <span className="shrink-0 rounded-full bg-slate-900/10 px-2 py-0.5 text-xs text-slate-600 dark:bg-white/10 dark:text-white/60">
          {t('tiktokComingSoon')}
        </span>
      )}
    </>
  );

  const className =
    'flex w-full items-center gap-4 rounded-2xl border border-slate-900/10 bg-white/60 px-4 py-4 backdrop-blur-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70 dark:border-white/10 dark:bg-white/5';

  if (!link.url) {
    return (
      <div className={className} aria-disabled="true">
        {inner}
      </div>
    );
  }

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.title}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className={`${className} hover:border-slate-900/25 hover:bg-white/80 dark:hover:border-white/20 dark:hover:bg-white/10`}
    >
      {inner}
    </motion.a>
  );
}
