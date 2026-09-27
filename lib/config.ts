/**
 * Central configuration — brand constants and external URLs.
 * Brand names and URLs are intentionally NOT translated.
 */
export const CONFIG = {
  siteName: "Adnan.120hz",
  tagline: "Independent iOS Security Research & Education",
  profileImage: "/images/profile.jpg",
  profileImageAlt: "Adnan.120hz profile photo",
  tiktokUrl: "https://www.tiktok.com/@adnan.120hz",
  telegramChannel: "https://t.me/adnan120hz",
  telegramChat: "https://t.me/chatadnan",
  donateUrl: "https://adnan120hz-redesign-ui.vercel.app/IMG_1097.jpeg",
  githubUrl: "https://github.com/gievano/WorkPlot",
  metadataBase: "https://adnan120hz-redesign-ui.vercel.app",
  terminalUser: "adnan@ios-research",
} as const;

export type Config = typeof CONFIG;
