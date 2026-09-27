"use client";

import { useLanguage } from "../lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mx-auto max-w-2xl px-4 pb-32 pt-10 text-center">
      <p className="text-xs text-slate-500 dark:text-white/40">
        © 2026 Adnan.120hz. {t("rights")}
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-slate-400 dark:text-white/30">
        {t("disclaimer")}
      </p>
    </footer>
  );
}
