"use client";

import { LINKS_FEATURED } from "@/data/links";
import { useI18n } from "@/lib/i18n";
import LinkCard from "./LinkCard";
import SectionHeading from "./SectionHeading";

/**
 * Second link table (owner order, 2026-10-10): the WorkSlop quick
 * route — Website → Desktop → Mobile — then the Telegram channel,
 * the Telegram chat group and the two WhatsApp groups.
 * Rendered above the primary dashboard, strictly in array order.
 */
export default function FeaturedLinks() {
  const { t } = useI18n();

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
      {LINKS_FEATURED.map((link) => (
        <section
          key={link.id}
          id={link.anchor}
          aria-label={`${link.sectionNo} ${link.title}`}
          className="min-w-0"
        >
          <SectionHeading
            no={link.sectionNo}
            label={t(`sections.${link.sectionKey}`)}
          />
          <LinkCard link={link} />
        </section>
      ))}
    </div>
  );
}
