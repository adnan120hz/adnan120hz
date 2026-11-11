"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { SiteLink } from "@/data/links";
import { useI18n } from "@/lib/i18n";

interface LinkCardProps {
  link: SiteLink;
  /** extra grid-span classes from the dashboard */
  spanClass?: string;
}

/**
 * Calendar-cell link card.
 * The whole card is one large touch/keyboard target.
 * No fixed heights — content decides the size.
 */
export default function LinkCard({ link, spanClass = "" }: LinkCardProps) {
  const { t } = useI18n();
  const Icon = link.icon;

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${link.title} — ${t("card.openAria")}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`card-cell ${link.accent ? "card-cell-accent" : ""} block min-w-0 p-5 ${spanClass}`}
    >
      <div className="flex min-w-0 items-start gap-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center border-2 border-line bg-surfacelight text-ink"
        >
          <Icon size={22} strokeWidth={2.25} />
        </span>

        <span className="block min-w-0 flex-1">
          <span className="twrap block text-lg font-extrabold uppercase leading-snug tracking-wide text-ink sm:text-xl">
            {link.title}
          </span>
          <span className="twrap mt-1.5 block text-[15px] leading-relaxed text-ink">
            {t(link.descriptionKey)}
          </span>
          {link.extraKey && (
            <span className="twrap mt-1.5 block text-[14px] leading-relaxed text-muted">
              {t(link.extraKey)}
            </span>
          )}
          <span className="twrap mt-3 inline-block max-w-full border-2 border-line bg-surfacelight px-2 py-1 font-mono text-[12px] text-ink">
            {link.urlLabel}
          </span>
        </span>
      </div>

      <span className="mt-4 flex justify-end">
        <span className="inline-flex items-center gap-1.5 border-2 border-line bg-ink px-3 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-paper">
          {t("card.open")}
          <ArrowUpRight size={14} strokeWidth={3} aria-hidden="true" />
        </span>
      </span>
    </motion.a>
  );
}
