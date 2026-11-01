"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";
import DeviceLineup from "./DeviceLineup";

/**
 * Hero — the first thing visitors see, always visible.
 * Order on the owner's instruction: Adnan.120hz + profile
 * first, then the device lineup below it, then the links.
 * Pill, brand title, subtitle, description, profile photo,
 * TikTok CTA, then devices.
 * Fluid WorkSlop style: no card box around the hero, the
 * photo is a soft rounded image, the CTA is a brand pill.
 * Uses the exact supplied profile image, never a generated one.
 */
export default function ProfileSection() {
  const { t } = useI18n();

  return (
    <section id="home" aria-labelledby="profile-name" className="pt-8 sm:pt-12">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0 text-center md:text-left">
          <p className="inline-flex items-center gap-1.5 rounded-full bg-brandwash px-3.5 py-1.5 text-[12px] font-semibold tracking-wide text-brand">
            {t("profile.eyebrow")}
          </p>
          <h1
            id="profile-name"
            className="twrap mt-4 text-[clamp(44px,10vw,72px)] font-extrabold leading-[1.02] tracking-tight text-ink"
          >
            {CONFIG.siteName}
          </h1>
          <p className="twrap mt-3 text-[17px] font-semibold leading-relaxed text-ink2 sm:text-lg">
            {t("profile.subtitle")}
          </p>
          <p className="twrap mx-auto mt-3 max-w-xl text-[16px] leading-relaxed text-ink2 md:mx-0">
            {t("profile.description")}
          </p>

          <a
            href={CONFIG.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("profile.tiktokAria")}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-[14px] font-bold !text-white shadow-soft-sm transition-all hover:-translate-y-px hover:bg-branddeep"
          >
            {t("profile.tiktok")}
            <ArrowUpRight size={16} strokeWidth={2.75} aria-hidden="true" />
          </a>
        </div>

        <div className="mx-auto md:mx-0">
          <Image
            src={CONFIG.profileImage}
            alt={t("a11y.profilePhoto")}
            width={208}
            height={208}
            priority
            className="h-44 w-44 rounded-[20px] object-cover shadow-soft ring-1 ring-rule sm:h-52 sm:w-52"
          />
        </div>
      </div>

      <DeviceLineup />
    </section>
  );
}
