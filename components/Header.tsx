"use client";

import { ShieldCheck } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 shadow-lg shadow-sky-500/30">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="font-bold text-slate-900 dark:text-white">
              Adnan.120hz
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-white/50">
              Apple Security Research
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
