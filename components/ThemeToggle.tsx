"use client";

import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

/**
 * Light / dark theme toggle, placed next to the language selector.
 * Hydration-safe: renders the light-mode icon until a stored
 * preference is applied after mount.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const isDark = theme === "dark";
  const label = t(isDark ? "theme.toLight" : "theme.toDark");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="flex items-center border-2 border-line bg-surfacelight px-2.5 py-1.5 font-mono text-[12px] font-bold uppercase tracking-widest text-ink shadow-hard-sm transition-transform hover:-translate-y-px active:translate-y-px active:shadow-hard-none"
    >
      {isDark ? (
        <Sun size={14} strokeWidth={2.5} aria-hidden="true" />
      ) : (
        <Moon size={14} strokeWidth={2.5} aria-hidden="true" />
      )}
    </button>
  );
}
