"use client";

import { LINKS } from "@/data/links";
import { useI18n } from "@/lib/i18n";
import LinkCard from "./LinkCard";
import SectionHeading from "./SectionHeading";

/**
 * Uniform fluid card grid of all links, in LINKS array order —
 * never sorted. One grid, one section: the 2026-11-01 owner
 * order. Anchor ids stay on the card wrappers so the sticky
 * nav targets (#community, #support, #development) keep working.
 */
export default function LinkDashboard() {
  const { t } = useI18n();

  return (
    <section aria-label={t("links.section")} className="mt-14 sm:mt-16">
      <SectionHeading label={t("links.section")} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {LINKS.map((link) => (
          <div key={link.id} id={link.anchor} className="min-w-0 scroll-mt-24">
            <LinkCard link={link} />
          </div>
        ))}
      </div>
    </section>
  );
}
