"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";

/**
 * Client-side providers: i18n only. No motion library —
 * the fluid theme uses plain CSS transitions.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
