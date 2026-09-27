'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '../data/faq';
import { translations } from '../data/translations';
import { CONFIG } from './config';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: (k: string) => k,
});

const STORAGE_KEY = 'adnan-lang';

function toHtmlLang(l: Lang): string {
  return l === 'ptBR' ? 'pt-BR' : l;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default 'en' on both server and first client render -> no hydration mismatch.
  const [lang, setLangState] = useState<Lang>(CONFIG.defaultLanguage);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && (CONFIG.supportedLanguages as string[]).includes(saved)) {
        setLangState(saved);
        document.documentElement.lang = toHtmlLang(saved);
      }
    } catch {
      /* storage unavailable — keep default */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = toHtmlLang(l);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}
