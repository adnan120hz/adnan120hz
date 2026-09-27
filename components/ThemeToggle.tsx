"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../lib/i18n";

type Theme = "light" | "dark";
const STORAGE_KEY = "adnan-theme";

export default function ThemeToggle() {
  const { t } = useLanguage();
  // Dark is the default; hydrate from localStorage after mount.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const next: Theme = saved === "light" ? "light" : "dark";
      setTheme(next);
      document.documentElement.classList.toggle("dark", next === "dark");
    } catch {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable — theme still applies for this session.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t("themeLight") : t("themeDark")}
      title={theme === "dark" ? t("themeLight") : t("themeDark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900/10 bg-white/60 text-slate-700 backdrop-blur-xl transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-amber-300 dark:hover:bg-white/10"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}
