"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { LANGS, translations, type Lang } from "@/data/translations";

const STORAGE_KEY = "adnan120hz-lang";

interface I18nContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

function isLang(value: unknown): value is Lang {
  return LANGS.some((entry) => entry.code === value);
}

/**
 * Language provider.
 * Defaults to English on both server and client (hydration-safe);
 * a stored preference is applied after mount only.
 * Only the language choice is persisted — never personal data.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(saved)) {
        setLangState(saved);
      }
    } catch {
      /* storage unavailable — stay on English */
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — preference applies for this session only */
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? translations.en[key] ?? key;
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang === "ptBR" ? "pt-BR" : lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  return useContext(I18nContext);
}
