"use client";

import { ArrowUpRight } from "lucide-react";
import type { SiteLink } from "@/data/links";
import { useI18n } from "@/lib/i18n";

/**
 * Fluid link card, WorkSlop style: 16px radius, hairline rule,
 * white panel, brand-wash icon chip, pill URL label, brand
 * "open" line. Whole card is one large touch/keyboard target.
 * No fixed heights — content decides the size. Plain CSS hover
 * lift only, no entrance animation.
 * (The solid-blue variant from 2026-11-01 was reverted on the
 * owner's order the same day — white panels are the design.)
 */
export default function LinkCard({ link }: { link: SiteLink }) {
  const { t } = useI18n();
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.title} — ${t("card.openAria")}`}
      className={`block min-w-0 rounded-2xl border border-rule p-5 transition-all duration-150 hover:-translate-y-0.5 hover:border-rulestrong hover:shadow-soft sm:p-6 ${
        link.accent ? "bg-brandwash/60" : "bg-panel"
      }`}
    >
      <div className="flex min-w-0 items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brandwash text-brand"
        >
          <Icon size={22} strokeWidth={2.25} />
        </span>

        <span className="block min-w-0 flex-1">
          <span className="twrap block text-lg font-bold leading-snug tracking-tight !text-ink sm:text-xl">
            {link.title}
          </span>
          <span className="twrap mt-1 block text-[15px] leading-relaxed text-ink2">
            {t(link.descriptionKey)}
          </span>
          {link.extraKey && (
            <span className="twrap mt-1 block text-[14px] leading-relaxed text-faint">
              {t(link.extraKey)}
            </span>
          )}
          <span className="twrap mt-3 inline-block max-w-full rounded-full bg-panel2 px-2.5 py-1 font-mono text-[12px] !text-ink2">
            {link.urlLabel}
          </span>
        </span>
      </div>

      <span className="mt-4 flex justify-end">
        <span className="inline-flex items-center gap-1 text-[13px] font-bold !text-brand">
          {t("card.open")}
          <ArrowUpRight size={15} strokeWidth={2.75} aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}
