"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLanguage } from "../lib/i18n";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "id", label: "Indonesia" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "zh", label: "中文" },
  { code: "ptBR", label: "Português (BR)" },
] as const;

export default function LanguageSelector() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open ]);

  const activeLabel =
    LANGUAGES.find((l) => l.code === lang)?.label ?? "English";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language")}
        className="flex h-10 items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3 text-sm font-medium text-slate-700 backdrop-blur-xl transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{activeLabel}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("language")}
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-2xl border border-slate-900/10 bg-white/90 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90"
          >
            {LANGUAGES.map((l) => {
              const isActive = lang === l.code;
              return (
                <li key={l.code} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => {
                      setLang(l.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-slate-900/5 dark:hover:bg-white/10 ${
                      isActive
                        ? "font-semibold text-slate-900 dark:text-white"
                        : "text-slate-600 dark:text-white/70"
                    }`}
                  >
                    {l.label}
                    {isActive && <Check className="h-4 w-4 text-sky-500" />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
