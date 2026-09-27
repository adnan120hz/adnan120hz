import type { Lang } from '../data/faq';

export const CONFIG = {
  siteName: 'Adnan.120hz',
  brand: 'Apple Security Research',
  defaultLanguage: 'en' as Lang,
  supportedLanguages: ['en', 'id', 'vi', 'zh', 'ptBR'] as Lang[],
  // User-provided TikTok profile URL (from conversation)
  tiktokUrl: 'https://www.tiktok.com/@adnan.120hz',
  telegramChannelUrl: 'https://t.me/adnan120hz',
  telegramChatUrl: 'https://t.me/chatadnan',
  donationUrl: 'https://adnan120hz-redesign-ui.vercel.app/IMG_1097.jpeg',
  githubUrl: 'https://github.com/gievano/WorkPlot',
  faqCount: 100,
};

export type LinkIcon = 'Send' | 'MessageCircle' | 'Heart' | 'Music2' | 'Github';

export interface LinkItem {
  id: string;
  icon: LinkIcon;
  title: string;
  descKey: string;
  url: string;
}

// Dashboard card order is MANDATORY and must never be re-sorted.
export const LINKS: LinkItem[] = [
  {
    id: 'telegram-channel',
    icon: 'Send',
    title: 'Adnan.120hz Telegram',
    descKey: 'linkDescTelegramChannel',
    url: CONFIG.telegramChannelUrl,
  },
  {
    id: 'telegram-chat',
    icon: 'MessageCircle',
    title: 'Adnan.120hz Chat',
    descKey: 'linkDescTelegramChat',
    url: CONFIG.telegramChatUrl,
  },
  {
    id: 'donate',
    icon: 'Heart',
    title: 'Donate Adnan.120hz / Gievano',
    descKey: 'linkDescDonate',
    url: CONFIG.donationUrl,
  },
  {
    id: 'tiktok',
    icon: 'Music2',
    title: 'Adnan.120hz TikTok',
    descKey: 'linkDescTiktok',
    url: CONFIG.tiktokUrl,
  },
  {
    id: 'github',
    icon: 'Github',
    title: 'Gievano WorkPlot',
    descKey: 'linkDescGithub',
    url: CONFIG.githubUrl,
  },
];
