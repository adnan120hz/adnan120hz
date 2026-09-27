"use client";

import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.community", href: "#community" },
  { key: "nav.support", href: "#support" },
  { key: "nav.development", href: "#development" },
] as const;

/**
 * Insert a break opportunity after every "." and "/" so long nav labels
 * wrap cleanly ("Adnan." / "120hz/" / "WorkPlot") instead of being cut
 * mid-word by overflow-wrap: anywhere.
 */
function breakable(label: string) {
  return label.split(/([./])/g).map((chunk, i) =>
    chunk === "." || chunk === "/" ? (
      <span key={i}>
        {chunk}
        <wbr />
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    ),
  );
}

/**
 * Compact terminal-inspired header.
 * One short title-bar strip plus one slim sticky nav row —
 * deliberately small so the profile appears immediately below,
 * even on mobile. No boot log, no fake terminal session.
 */
export default function Header() {
  const { t } = useI18n();

  return (
    <header className="relative z-10">
      {/* title-bar strip */}
      <div className="term-window">
        <div className="term-titlebar flex-wrap gap-x-3 gap-y-2 py-2">
          <span aria-hidden="true" className="flex flex-shrink-0 gap-1.5">
            <span className="term-dot bg-accentdark" />
            <span className="term-dot bg-accent" />
            <span className="term-dot bg-codegreen" />
          </span>
          <span className="twrap min-w-0 flex-1 font-mono text-[12px] font-bold text-ink">
            <span className="block leading-tight">Adnan.120hz</span>
            <span className="block leading-tight">Apple Security Reserch</span>
          </span>
          <span className="flex flex-shrink-0 items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
            <span className="status-dot" aria-hidden="true" />
            {t("header.online")}
          </span>
          <LanguageSelector />
        </div>
      </div>

      {/* slim sticky nav with brand badge */}
      <nav
        aria-label={t("nav.label")}
        className="sticky top-2 z-40 mt-3 border-2 border-line bg-surface shadow-hard-sm"
      >
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-2 py-1.5 sm:px-3">
          <p className="mr-1 inline-flex flex-shrink-0 items-center gap-1.5 border-2 border-line bg-ink px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-paper">
            <ShieldCheck size={13} strokeWidth={2.75} aria-hidden="true" />
            {t("profile.eyebrow")}
          </p>
          <ul className="flex min-w-0 flex-1 flex-wrap items-center">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href} className="flex min-w-0 items-center">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="font-mono text-[11px] text-muted"
                  >
                    /
                  </span>
                )}
                <a
                  href={item.href}
                  style={{ overflowWrap: "break-word" }}
                  className="min-w-0 max-w-full px-2 py-1.5 font-mono text-[11px] font-bold tracking-[0.16em] text-ink transition-colors hover:bg-accent hover:text-accenttext sm:px-3"
                >
                  {breakable(t(item.key))}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
