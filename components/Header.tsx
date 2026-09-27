"use client";

import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.community", href: "#community" },
  { key: "nav.support", href: "#support" },
  { key: "nav.development", href: "#development" },
] as const;

/**
 * Terminal-window header: decorative window controls, the
 * `adnan@ios-research` prompt, portal badge, language selector,
 * and a compact sticky anchor nav.
 */
export default function Header() {
  const { t } = useI18n();

  return (
    <header className="relative z-10">
      <div className="term-window">
        {/* title bar */}
        <div className="term-titlebar">
          <span aria-hidden="true" className="flex gap-1.5">
            <span className="term-dot bg-accentdark" />
            <span className="term-dot bg-accent" />
            <span className="term-dot bg-codegreen" />
          </span>
          <span className="twrap font-mono text-[12px] font-bold text-ink">
            {CONFIG.terminalUser}:~$
          </span>
          <span className="ml-auto flex flex-shrink-0 items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
            <span className="status-dot" aria-hidden="true" />
            {t("header.online")}
          </span>
        </div>

        {/* identity row */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
          <div className="min-w-0">
            <p className="inline-block border-2 border-line bg-ink px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-paper">
              {t("header.portal")}
            </p>
            <p className="twrap mt-2 font-mono text-[12px] text-muted">
              <span aria-hidden="true" className="mr-1 text-codegreen">$</span>
              {t("header.boot")}
              <span aria-hidden="true" className="term-cursor ml-1" />
            </p>
          </div>
          <LanguageSelector />
        </div>
      </div>

      {/* compact anchor nav */}
      <nav
        aria-label={t("nav.label")}
        className="sticky top-2 z-40 mt-4 border-2 border-line bg-surface shadow-hard-sm"
      >
        <ul className="flex flex-wrap items-stretch">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href} className="flex min-w-0">
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="self-center font-mono text-muted"
                >
                  /
                </span>
              )}
              <a
                href={item.href}
                className="twrap px-3 py-2.5 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-accent hover:text-accenttext sm:px-4"
              >
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
