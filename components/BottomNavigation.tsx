"use client";

import { motion } from "framer-motion";
import { LayoutGrid, Sparkles } from "lucide-react";
import { useLanguage } from "../lib/i18n";

export type TabId = "links" | "ai";

type Props = {
  active: TabId;
  onChange: (tab: TabId) => void;
};

export default function BottomNavigation({ active, onChange }: Props) {
  const { t } = useLanguage();

  const tabs: { id: TabId; label: string; icon: typeof LayoutGrid }[] = [
    { id: "links", label: t("tabLinks"), icon: LayoutGrid },
    { id: "ai", label: t("tabAI"), icon: Sparkles },
  ];

  return (
    <nav
      aria-label={t("tabLinks")}
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-slate-900/10 bg-white/70 p-1.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-black/40">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              aria-pressed={isActive}
              className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "text-white"
                  : "text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 shadow-lg shadow-sky-500/30"
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
