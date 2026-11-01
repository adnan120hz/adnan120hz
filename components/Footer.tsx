"use client";

import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";

/**
 * Simple fluid footer: brand, tagline, rights, independence
 * disclaimer, status line. No box, just a hairline on top.
 */
export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="mt-16 border-t border-rule pt-8">
      <p className="twrap text-xl font-extrabold tracking-tight text-ink">
        {CONFIG.siteName}
      </p>
      <p className="twrap mt-1 text-[14px] font-semibold text-ink2">
        {t("footer.tagline")}
      </p>
      <p className="twrap mt-2 font-mono text-[12px] text-faint">
        {t("footer.rights")}
      </p>
      <p className="twrap mt-2 max-w-2xl text-[13px] leading-relaxed text-faint">
        {t("footer.disclaimer")}
      </p>

      <p className="twrap mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
        <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-good" />
        {t("status.line")}
      </p>
    </footer>
  );
}
