"use client";

import { Terminal } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";

/**
 * Compact terminal-style footer with the independence disclaimer.
 */
export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-14">
      <div className="term-window overflow-hidden">
        <div className="flex items-center gap-2 border-b-2 border-line bg-ink px-4 py-2">
          <Terminal
            size={14}
            strokeWidth={2.5}
            aria-hidden="true"
            className="flex-shrink-0 text-paper"
          />
          <p className="twrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-paper">
            {CONFIG.siteName} — session log
          </p>
        </div>

        <div className="px-5 py-5">
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
          <p className="twrap mt-3 font-mono text-[12px] text-muted">
            <span aria-hidden="true" className="mr-1 text-codegreen">
              $
            </span>
            echo &quot;{t("footer.end")}&quot;
            <span aria-hidden="true" className="term-cursor ml-1" />
          </p>
        </div>
      </div>

      <p className="twrap mt-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        <span aria-hidden="true" className="mr-2 inline-block h-2 w-2 bg-codegreen align-middle" />
        {t("status.line")}
      </p>
    </footer>
  );
}
