import {
  Github,
  Globe,
  Heart,
  MessageCircle,
  Music2,
  Send,
  Smartphone,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { CONFIG } from "@/lib/config";

export interface SiteLink {
  id: string;
  /** Calendar section number, e.g. "02" */
  sectionNo: string;
  /** i18n key suffix under "sections.", e.g. "community" */
  sectionKey: string;
  /** Brand title — never translated, never reordered */
  title: string;
  /** i18n key for the description */
  descriptionKey: string;
  /** Optional i18n key for a second description line */
  extraKey?: string;
  url: string;
  /** Short human-readable host label shown on the card */
  urlLabel: string;
  icon: LucideIcon;
  /** Anchor id for in-page navigation (optional) */
  anchor?: string;
  /** Mustard highlight variant (donation card) */
  accent?: boolean;
}

/**
 * Single source of truth for the link table.
 * Rendered in array order — never sorted, never filtered.
 * Order set by the owner (2026-11-01, final list + Siri Ai
 * insertion): TikTok, Channel, Chat, Donate, Siri Ai, WorkTweaks,
 * WorkSlop trio, WorkSlop Group Chat, WorkPlot Github
 * Download, WorkPlot Chat. The two WhatsApp groups were
 * dropped from the list by the same owner order; the
 * archived WorkSlop card stays removed.
 */
export const LINKS: SiteLink[] = [
  {
    id: "tiktok",
    sectionNo: "02",
    sectionKey: "social",
    title: "Adnan.120hz TikTok",
    descriptionKey: "links.tiktok.description",
    url: CONFIG.tiktokUrl,
    urlLabel: "tiktok.com/@adnan.120hz",
    icon: Music2,
    anchor: "social",
  },
  {
    id: "telegram-channel",
    sectionNo: "03",
    sectionKey: "community",
    title: "Adnan.120hz Channel",
    descriptionKey: "links.telegram.description",
    url: CONFIG.telegramChannel,
    urlLabel: "t.me/adnan120hz",
    icon: Send,
    anchor: "community",
  },
  {
    id: "telegram-chat",
    sectionNo: "04",
    sectionKey: "communityChat",
    title: "Adnan.120hz Chat",
    descriptionKey: "links.chat.description",
    url: CONFIG.telegramChat,
    urlLabel: "t.me/chatadnan",
    icon: MessageCircle,
  },
  {
    id: "donate",
    sectionNo: "05",
    sectionKey: "support",
    title: "Donate All Project Adnan.120hz",
    descriptionKey: "links.donate.description",
    extraKey: "links.donate.extra",
    url: CONFIG.donateUrl,
    urlLabel: "adnan120hz-redesign-ui.vercel.app",
    icon: Heart,
    anchor: "support",
    accent: true,
  },
  {
    id: "siri-ai",
    sectionNo: "06",
    sectionKey: "development",
    title: "Siri Ai By Adnan.120hz",
    descriptionKey: "links.siriAi.description",
    url: "https://github.com/adnan120hz/Siri-Ai-by-adnan.120hz",
    urlLabel: "github.com/adnan120hz/Siri-Ai-by-adnan.120hz",
    icon: Sparkles,
  },
  {
    id: "worktweaks",
    sectionNo: "07",
    sectionKey: "development",
    title: "WorkTweaks",
    descriptionKey: "links.worktweaks.description",
    url: "https://github.com/adnan120hz/WorkTweaks",
    urlLabel: "github.com/adnan120hz/WorkTweaks",
    icon: Github,
    anchor: "worktweaks",
  },
  {
    id: "workslop-website",
    sectionNo: "08",
    sectionKey: "development",
    title: "WorkSlop Website",
    descriptionKey: "links.workslopWebsite.description",
    url: "https://workslop-nu.vercel.app",
    urlLabel: "workslop-nu.vercel.app",
    icon: Globe,
    anchor: "workslop-website",
  },
  {
    id: "workslop-desktop",
    sectionNo: "09",
    sectionKey: "development",
    title: "WorkSlop Desktop Version",
    descriptionKey: "links.workslopDesktop.description",
    url: "https://github.com/adnan120hz/WorkSlop-Desktop-Version",
    urlLabel: "github.com/adnan120hz/WorkSlop-Desktop-Version",
    icon: Github,
    anchor: "workslop-desktop",
  },
  {
    id: "workslop-mobile",
    sectionNo: "10",
    sectionKey: "development",
    title: "WorkSlop Mobile",
    descriptionKey: "links.workslopMobile.description",
    url: "https://github.com/adnan120hz/WorkSlop-Mobile-New",
    urlLabel: "github.com/adnan120hz/WorkSlop-Mobile-New",
    icon: Smartphone,
    anchor: "workslop-mobile",
  },
  {
    id: "workslop-group-chat",
    sectionNo: "11",
    sectionKey: "community",
    title: "WorkSlop Group Chat",
    descriptionKey: "links.workslopGroupChat.description",
    url: "https://t.me/workslopgroup",
    urlLabel: "t.me/workslopgroup",
    icon: Users,
  },
  {
    id: "workplot",
    sectionNo: "12",
    sectionKey: "development",
    title: "WorkPlot Github Download",
    descriptionKey: "links.workplot.description",
    url: CONFIG.githubUrl,
    urlLabel: "github.com/gievano/WorkPlot",
    icon: Github,
    anchor: "development",
  },
  {
    id: "workplot-chat",
    sectionNo: "13",
    sectionKey: "community",
    title: "WorkPlot Chat",
    descriptionKey: "links.workplotChat.description",
    url: "https://t.me/workplotios",
    urlLabel: "t.me/workplotios",
    icon: MessageCircle,
  },
];
