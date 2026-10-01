import {
  Github,
  Heart,
  MessageCircle,
  Music2,
  Send,
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
 * Single source of truth for the five primary links.
 * Rendered in array order — never sorted, never filtered.
 */
export const LINKS: SiteLink[] = [
  {
    id: "telegram-channel",
    sectionNo: "02",
    sectionKey: "community",
    title: "Adnan.120hz Telegram",
    descriptionKey: "links.telegram.description",
    url: CONFIG.telegramChannel,
    urlLabel: "t.me/adnan120hz",
    icon: Send,
    anchor: "community",
  },
  {
    id: "telegram-chat",
    sectionNo: "03",
    sectionKey: "communityChat",
    title: "Adnan.120hz Chat",
    descriptionKey: "links.chat.description",
    url: CONFIG.telegramChat,
    urlLabel: "t.me/chatadnan",
    icon: MessageCircle,
  },
  {
    id: "donate",
    sectionNo: "04",
    sectionKey: "support",
    title: "Donate Adnan.120hz / Gievano",
    descriptionKey: "links.donate.description",
    extraKey: "links.donate.extra",
    url: CONFIG.donateUrl,
    urlLabel: "adnan120hz-redesign-ui.vercel.app",
    icon: Heart,
    anchor: "support",
    accent: true,
  },
  {
    id: "tiktok",
    sectionNo: "05",
    sectionKey: "social",
    title: "Adnan.120hz TikTok",
    descriptionKey: "links.tiktok.description",
    url: CONFIG.tiktokUrl,
    urlLabel: "tiktok.com/@adnan.120hz",
    icon: Music2,
    anchor: "social",
  },
  {
    id: "workplot",
    sectionNo: "06",
    sectionKey: "development",
    title: "Gievano & Adnan.120hz WorkPlot",
    descriptionKey: "links.workplot.description",
    url: CONFIG.githubUrl,
    urlLabel: "github.com/gievano/WorkPlot",
    icon: Github,
    anchor: "development",
  },
  {
    id: "workslop",
    sectionNo: "07",
    sectionKey: "development",
    title: "Adnan.120hz WorkSlop (Archive)",
    descriptionKey: "links.workslop.description",
    url: "https://github.com/adnan120hz/WorkSlop",
    urlLabel: "github.com/adnan120hz/WorkSlop",
    icon: Github,
    anchor: "workslop",
  },
  {
    id: "workslop-desktop",
    sectionNo: "08",
    sectionKey: "development",
    title: "WorkSlop Desktop Version",
    descriptionKey: "links.workslopDesktop.description",
    url: "https://github.com/adnan120hz/WorkSlop-Desktop-Version",
    urlLabel: "github.com/adnan120hz/WorkSlop-Desktop-Version",
    icon: Github,
    anchor: "workslop-desktop",
  },
  {
    id: "whatsapp-group",
    sectionNo: "09",
    sectionKey: "community",
    title: "Kamera & HP Whatsapp Group",
    descriptionKey: "links.whatsapp.description",
    url: "https://chat.whatsapp.com/KyKxm5YYk608BuTHuymCn1?s=cl&p=i&mlu=0&ilr=4",
    urlLabel: "chat.whatsapp.com",
    icon: Users,
  },
];
