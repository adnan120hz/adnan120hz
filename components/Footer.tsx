"use client";

import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";

/**
 * Compact footer: brand, tagline, rights, and the
 * independence disclaimer. Beige surface, thin black
 * border — no terminal chrome, no blinking cursor.
 */
export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-14">
      <div className="border-2 border-line bg-surfacelight px-5 py-5 shadow-hard-sm">
        <p className="twrap text-xl font-black uppercase tracking-wide text-ink">
          {CONFIG.siteName}
        </p>
        <p className="twrap mt-1 text-[14px] font-bold text-ink">
          {t("footer.tagline")}
        </p>
        <p className="twrap mt-2 font-mono text-[12px] text-muted">
          {t("footer.rights")}
        </p>
        <p className="twrap mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
          {t("footer.disclaimer")}
        </p>
      </div>

      <p className="twrap mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span
          aria-hidden="true"
          className="mr-2 inline-block h-2 w-2 bg-codegreen align-middle"
        />
        {t("status.line")}
      </p>
    </footer>
  );
}
