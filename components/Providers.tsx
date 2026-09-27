"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";

/**
 * Client-side providers: i18n + motion settings.
 * `reducedMotion="user"` disables Framer Motion transforms
 * for visitors who prefer reduced motion.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>{children}</LanguageProvider>
    </MotionConfig>
  );
}
