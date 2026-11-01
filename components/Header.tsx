"use client";

import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import LanguageSelector from "./LanguageSelector";

const NAV_ITEMS = [
  { key: "nav.home", href: "#home" },
  { key: "nav.community", href: "#community" },
  { key: "nav.support", href: "#support" },
  { key: "nav.development", href: "#development" },
] as const;

/**
 * Fluid sticky header, WorkSlop style: blurred paper background,
 * rounded brand mark, pill nav links. No boxes, no hard borders.
 */
export default function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1020px] flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-2.5 !text-ink">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-brand text-white"
          >
            <ShieldCheck size={18} strokeWidth={2.5} />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="twrap block text-[15px] font-extrabold tracking-tight">
              Adnan.120hz
            </span>
            <span className="twrap block text-[11px] font-medium text-faint">
              {t("profile.eyebrow")}
            </span>
          </span>
        </a>

        <nav aria-label={t("nav.label")} className="order-3 w-full min-w-0 sm:order-none sm:w-auto sm:flex-1">
          <ul className="flex min-w-0 flex-wrap items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href} className="min-w-0">
                <a
                  href={item.href}
                  className="block rounded-full px-3 py-1.5 text-[13px] font-semibold !text-ink2 transition-colors hover:bg-brandwash hover:!text-brand"
                >
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <span className="hidden items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-faint sm:inline-flex">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-good"
          />
          {t("header.online")}
        </span>
        <span className="ml-auto sm:ml-0">
          <LanguageSelector />
        </span>
      </div>
    </header>
  );
}
