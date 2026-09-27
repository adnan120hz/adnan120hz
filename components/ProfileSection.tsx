"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

/**
 * Profile — the first thing visitors see.
 * Photo, brand title, subtitle, description, TikTok CTA.
 * Uses the exact supplied profile image, never a generated one.
 */
export default function ProfileSection() {
  const { t } = useI18n();

  return (
    <section id="home" aria-labelledby="profile-name" className="mt-8">
      <SectionHeading no="01" label={t("profile.section")} />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="term-window overflow-hidden"
      >
        {/* card header strip */}
        <div className="flex items-center gap-2 border-b-2 border-line bg-surfacelight px-4 py-2.5">
          <ShieldCheck
            size={17}
            strokeWidth={2.5}
            aria-hidden="true"
            className="flex-shrink-0 text-accentdark"
          />
          <p className="twrap font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-ink">
            {t("profile.eyebrow")}
          </p>
          <span
            aria-hidden="true"
            className="ml-auto hidden font-mono text-[11px] text-muted sm:inline"
          >
            {"//"} verified-human
          </span>
        </div>

        <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
          <div className="mx-auto md:mx-0">
            <Image
              src={CONFIG.profileImage}
              alt={t("a11y.profilePhoto")}
              width={184}
              height={184}
              priority
              className="h-40 w-40 rounded-md border-2 border-line object-cover shadow-hard-sm sm:h-44 sm:w-44"
            />
          </div>

          <div className="min-w-0 text-center md:text-left">
            <h1
              id="profile-name"
              className="twrap text-3xl font-black tracking-tight text-ink sm:text-4xl"
            >
              {CONFIG.siteName}
            </h1>
            <p className="twrap mt-2 font-mono text-[12px] font-bold uppercase tracking-[0.18em] text-accentdark sm:text-[13px]">
              {t("profile.subtitle")}
            </p>
            <p className="twrap mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink md:mx-0">
              {t("profile.description")}
            </p>

            <a
              href={CONFIG.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("profile.tiktokAria")}
              className="mt-5 inline-flex items-center gap-2 border-2 border-line bg-accent px-5 py-2.5 font-mono text-[13px] font-bold uppercase tracking-[0.18em] text-accenttext shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-lg active:translate-y-0.5 active:shadow-hard-none"
            >
              {t("profile.tiktok")}
              <ArrowUpRight size={16} strokeWidth={2.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
