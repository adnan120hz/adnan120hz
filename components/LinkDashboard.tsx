"use client";

import { LINKS, type SiteLink } from "@/data/links";
import { useI18n } from "@/lib/i18n";
import LinkCard from "./LinkCard";
import SectionHeading from "./SectionHeading";

/**
 * Calendar grid of the five primary link cells.
 * Rendered strictly in LINKS array order — never sorted.
 * Single column on mobile (readability first), two columns
 * on desktop with the donation card spanning both.
 */
const SPANS: Record<SiteLink["id"], string> = {
  "telegram-channel": "",
  "telegram-chat": "",
  donate: "md:col-span-2",
  tiktok: "",
  workplot: "",
  workslop: "",
};

export default function LinkDashboard() {
  const { t } = useI18n();

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
      {LINKS.map((link) => (
        <section
          key={link.id}
          id={link.anchor}
          aria-label={`${link.sectionNo} ${link.title}`}
          className={`min-w-0 ${SPANS[link.id] ?? ""}`}
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
