"use client";

import { BookOpenText } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

/**
 * Optional compact research info card, fluid style.
 * Educational framing only — no exploit details,
 * no capability claims, no Apple affiliation.
 */
export default function AboutResearch() {
  const { t } = useI18n();

  return (
    <section aria-label={t("about.section")} className="mt-14 sm:mt-16">
      <SectionHeading label={t("about.section")} />

      <div className="rounded-2xl border border-rule bg-panel p-5 sm:p-6">
        <div className="flex min-w-0 items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white"
          >
            <BookOpenText size={20} strokeWidth={2.25} />
          </span>
          <p className="twrap min-w-0 flex-1 text-[15px] leading-relaxed text-ink2">
            {t("about.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
