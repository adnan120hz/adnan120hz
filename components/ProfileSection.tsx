"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Music2, ShieldCheck } from "lucide-react";
import { CONFIG } from "../lib/config";
import { useLanguage } from "../lib/i18n";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ProfileSection() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const rawUrl = (CONFIG.tiktokUrl ?? "").trim();
  const tiktokReady = rawUrl !== "" && !rawUrl.includes("PASTE_");

  return (
    <motion.section
      variants={reduceMotion ? undefined : container}
      initial={reduceMotion ? undefined : "hidden"}
      animate={reduceMotion ? undefined : "show"}
      className="mx-auto flex max-w-2xl flex-col items-center px-4 pt-12 text-center"
    >
      <motion.span
        variants={item}
        className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-slate-900/10 bg-white/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-sky-300"
      >
        <ShieldCheck className="h-3.5 w-3.5" />
        {t("brand")}
      </motion.span>

      <motion.div variants={item} className="relative mb-5">
        <div className="absolute -inset-2 rounded-full bg-sky-500/30 blur-2xl dark:bg-sky-500/40" />
        <Image
          src="/images/profile.jpg"
          alt="Adnan.120hz profile photo"
          width={120}
          height={120}
          priority
          className="relative h-[100px] w-[100px] rounded-full border border-white/40 object-cover shadow-xl shadow-sky-500/25 ring-1 ring-slate-900/10 backdrop-blur-xl dark:border-white/20 dark:ring-white/20 sm:h-[120px] sm:w-[120px]"
        />
      </motion.div>

      <motion.h1
        variants={item}
        className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
      >
        Adnan.120hz
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-2 text-sm font-medium text-sky-700 dark:text-sky-300"
      >
        {t("profileRole")}
      </motion.p>

      <motion.p
        variants={item}
        className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-white/60"
      >
        {t("profileDesc")}
      </motion.p>

      <motion.div variants={item} className="mt-6">
        {tiktokReady ? (
          <a
            href={rawUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:shadow-sky-500/50"
          >
            <Music2 className="h-4 w-4" />
            {t("visitTiktok")}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-900/10 bg-white/40 px-6 py-3 text-sm font-semibold text-slate-400 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/40"
          >
            <Music2 className="h-4 w-4" />
            {t("tiktokComingSoon")}
          </button>
        )}
      </motion.div>
    </motion.section>
  );
}
