"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LANGS } from "@/data/translations";
import { useI18n } from "@/lib/i18n";

/**
 * Fluid language dropdown, WorkSlop style: pill button,
 * soft rounded menu. Hydration-safe: renders from context
 * (English default) and only reflects a stored preference
 * after mount.
 */
export default function LanguageSelector() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open ]);

  const current = LANGS.find((entry) => entry.code === lang) ?? LANGS[0];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("a11y.languageAria")}
        className="flex items-center gap-2 rounded-full border border-rule bg-panel px-3 py-1.5 text-[12px] font-semibold !text-ink shadow-soft-sm transition-colors hover:border-rulestrong"
      >
        <Globe size={14} strokeWidth={2.5} aria-hidden="true" />
        <span>{current.short}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t("a11y.language")}
          className="absolute right-0 z-50 mt-2 w-44 rounded-2xl border border-rule bg-panel p-1.5 shadow-soft"
        >
          {LANGS.map((entry) => {
            const active = entry.code === lang;
            return (
              <button
                key={entry.code}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLang(entry.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-full px-3 py-2 text-[12px] font-semibold transition-colors ${
                  active
                    ? "bg-brand !text-white"
                    : "!text-ink hover:bg-brandwash"
                }`}
              >
                <span className="twrap text-left">
                  {entry.label}
                  <span className="ml-2 text-faint">[{entry.short}]</span>
                </span>
                {active && (
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
