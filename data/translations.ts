/**
 * Local translation dictionary. No external translation API.
 * Brand names and URLs are intentionally left untranslated.
 */

export type Lang = "en" | "id" | "vi" | "zh" | "ptBR";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "id", label: "Indonesia", short: "ID" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
  { code: "zh", label: "简体中文", short: "中文" },
  { code: "ptBR", label: "Português (BR)", short: "PT-BR" },
];

export const DEFAULT_LANG: Lang = "en";

type Dict = Record<string, string>;

const en: Dict = {
  "header.portal": "INDEPENDENT RESEARCH PORTAL",
  "header.online": "ONLINE",
  "header.boot": "./render --profile --links --retro",
  "nav.home": "HOME",
  "nav.community": "Adnan.120hz/WorkPlot",
  "nav.support": "Adnan.120hz/Gievano",
  "nav.development": "Adnan.120hz",
  "nav.label": "Section navigation",

  "profile.section": "PROFILE",
  "profile.eyebrow": "APPLE SECURITY RESEARCH",
  "profile.subtitle": "Independent iOS Security Research & Education",
  "profile.description":
    "Exploring the Apple ecosystem, iOS security, and mobile technology through independent research and educational projects.",
  "profile.tiktok": "VISIT MY TIKTOK",
  "profile.tiktokAria": "Visit Adnan.120hz on TikTok (opens in a new tab)",

  "sections.community": "COMMUNITY",
  "sections.communityChat": "COMMUNITY CHAT",
  "sections.support": "SUPPORT",
  "sections.social": "SOCIAL",
  "sections.development": "DEVELOPMENT",

  "links.telegram.description": "Official Telegram Channel",
  "links.chat.description": "Official Community Chat",
  "links.donate.description": "Support Future Projects & Development",
  "links.donate.extra":
    "Support upcoming independent research, development, and future projects.",
  "links.tiktok.description": "Follow My TikTok",
  "links.workplot.description": "GitHub Repository • Source Code & Development",
  "links.workslop.description": "GitHub Repository • iOS System Modification Tools",
  "about.section": "ABOUT MY RESEARCH",
  "about.description":
    "Independent educational content covering iOS technology, Apple ecosystem research, mobile development, and general security concepts.",
  "card.open": "OPEN LINK",
  "card.openAria": "Open link",

  "footer.tagline": "Independent iOS Security Research & Education.",
  "footer.rights": "© 2026 Adnan.120hz. All rights reserved.",
  "footer.disclaimer":
    "This is an independent personal website and is not affiliated with or endorsed by Apple Inc.",
  "footer.end": "end of transmission",

  "status.line": "status: all systems nominal",

  "a11y.language": "Select language",
  "a11y.languageAria": "Language selector",
  "a11y.profilePhoto": "Profile photo of Adnan.120hz",
};

const id: Dict = {
  "header.portal": "PORTAL RISET INDEPENDEN",
  "header.online": "ONLINE",
  "header.boot": "./render --profile --links --retro",
  "nav.home": "BERANDA",
  "nav.community": "Adnan.120hz/WorkPlot",
  "nav.support": "Adnan.120hz/Gievano",
  "nav.development": "Adnan.120hz",
  "nav.label": "Navigasi bagian",

  "profile.section": "PROFIL",
  "profile.eyebrow": "APPLE SECURITY RESEARCH",
  "profile.subtitle": "Riset & Edukasi Keamanan iOS Independen",
  "profile.description":
    "Menjelajahi ekosistem Apple, keamanan iOS, dan teknologi seluler melalui riset independen dan proyek edukasi.",
  "profile.tiktok": "KUNJUNGI TIKTOK SAYA",
  "profile.tiktokAria": "Kunjungi Adnan.120hz di TikTok (terbuka di tab baru)",

  "sections.community": "KOMUNITAS",
  "sections.communityChat": "OBROLAN KOMUNITAS",
  "sections.support": "DUKUNGAN",
  "sections.social": "SOSIAL",
  "sections.development": "PENGEMBANGAN",

  "links.telegram.description": "Kanal Telegram Resmi",
  "links.chat.description": "Obrolan Komunitas Resmi",
  "links.donate.description": "Dukung Proyek Masa Depan & Pengembangan",
  "links.donate.extra":
    "Dukung riset independen, pengembangan, dan proyek masa depan yang akan datang.",
  "links.tiktok.description": "Ikuti TikTok Saya",
  "links.workplot.description": "Repositori GitHub • Kode Sumber & Pengembangan",
  "links.workslop.description": "Repositori GitHub • Tools Modifikasi Sistem iOS",
  "about.section": "TENTANG RISET SAYA",
  "about.description":
    "Konten edukasi independen yang mencakup teknologi iOS, riset ekosistem Apple, pengembangan seluler, dan konsep keamanan umum.",
  "card.open": "BUKA TAUTAN",
  "card.openAria": "Buka tautan",

  "footer.tagline": "Riset & Edukasi Keamanan iOS Independen.",
  "footer.rights": "© 2026 Adnan.120hz. Hak cipta dilindungi.",
  "footer.disclaimer":
    "Ini adalah situs web pribadi independen dan tidak berafiliasi dengan atau didukung oleh Apple Inc.",
  "footer.end": "akhir transmisi",

  "status.line": "status: semua sistem normal",

  "a11y.language": "Pilih bahasa",
  "a11y.languageAria": "Pemilih bahasa",
  "a11y.profilePhoto": "Foto profil Adnan.120hz",
};

const vi: Dict = {
  "header.portal": "CỔNG NGHIÊN CỨU ĐỘC LẬP",
  "header.online": "TRỰC TUYẾN",
  "header.boot": "./render --profile --links --retro",
  "nav.home": "TRANG CHỦ",
  "nav.community": "Adnan.120hz/WorkPlot",
  "nav.support": "Adnan.120hz/Gievano",
  "nav.development": "Adnan.120hz",
  "nav.label": "Điều hướng mục",

  "profile.section": "HỒ SƠ",
  "profile.eyebrow": "APPLE SECURITY RESEARCH",
  "profile.subtitle": "Nghiên cứu & Giáo dục Bảo mật iOS Độc lập",
  "profile.description":
    "Khám phá hệ sinh thái Apple, bảo mật iOS và công nghệ di động thông qua nghiên cứu độc lập và các dự án giáo dục.",
  "profile.tiktok": "GHÉ THĂM TIKTOK CỦA TÔI",
  "profile.tiktokAria": "Ghé thăm Adnan.120hz trên TikTok (mở trong tab mới)",

  "sections.community": "CỘNG ĐỒNG",
  "sections.communityChat": "TRÒ CHUYỆN CỘNG ĐỒNG",
  "sections.support": "HỖ TRỢ",
  "sections.social": "MẠNG XÃ HỘI",
  "sections.development": "PHÁT TRIỂN",

  "links.telegram.description": "Kênh Telegram Chính thức",
  "links.chat.description": "Nhóm Trò chuyện Cộng đồng Chính thức",
  "links.donate.description": "Hỗ trợ Dự án Tương lai & Phát triển",
  "links.donate.extra":
    "Hỗ trợ nghiên cứu độc lập, phát triển và các dự án tương lai sắp tới.",
  "links.tiktok.description": "Theo dõi TikTok của Tôi",
  "links.workplot.description": "Kho GitHub • Mã nguồn & Phát triển",
  "links.workslop.description": "Kho GitHub • Công cụ sửa đổi hệ thống iOS",
  "about.section": "VỀ NGHIÊN CỨU CỦA TÔI",
  "about.description":
    "Nội dung giáo dục độc lập về công nghệ iOS, nghiên cứu hệ sinh thái Apple, phát triển di động và các khái niệm bảo mật chung.",
  "card.open": "MỞ LIÊN KẾT",
  "card.openAria": "Mở liên kết",

  "footer.tagline": "Nghiên cứu & Giáo dục Bảo mật iOS Độc lập.",
  "footer.rights": "© 2026 Adnan.120hz. Bảo lưu mọi quyền.",
  "footer.disclaimer":
    "Đây là trang web cá nhân độc lập, không liên kết hoặc được xác nhận bởi Apple Inc.",
  "footer.end": "kết thúc truyền tải",

  "status.line": "trạng thái: mọi hệ thống bình thường",

  "a11y.language": "Chọn ngôn ngữ",
  "a11y.languageAria": "Bộ chọn ngôn ngữ",
  "a11y.profilePhoto": "Ảnh đại diện của Adnan.120hz",
};

const zh: Dict = {
  "header.portal": "独立研究门户",
  "header.online": "在线",
  "header.boot": "./render --profile --links --retro",
  "nav.home": "首页",
  "nav.community": "Adnan.120hz/WorkPlot",
  "nav.support": "Adnan.120hz/Gievano",
  "nav.development": "Adnan.120hz",
  "nav.label": "分节导航",

  "profile.section": "简介",
  "profile.eyebrow": "APPLE SECURITY RESEARCH",
  "profile.subtitle": "独立 iOS 安全研究与教育",
  "profile.description":
    "通过独立研究和教育项目，探索 Apple 生态、iOS 安全与移动技术。",
  "profile.tiktok": "访问我的 TIKTOK",
  "profile.tiktokAria": "访问 Adnan.120hz 的 TikTok（在新标签页中打开）",

  "sections.community": "社区",
  "sections.communityChat": "社区聊天",
  "sections.support": "支持",
  "sections.social": "社交",
  "sections.development": "开发",

  "links.telegram.description": "官方 Telegram 频道",
  "links.chat.description": "官方社区聊天",
  "links.donate.description": "支持未来项目与开发",
  "links.donate.extra": "支持即将开展的独立研究、开发与未来项目。",
  "links.tiktok.description": "关注我的 TikTok",
  "links.workplot.description": "GitHub 仓库 • 源代码与开发",
  "links.workslop.description": "GitHub 仓库 • iOS 系统修改工具",
  "about.section": "关于我的研究",
  "about.description":
    "独立教育内容，涵盖 iOS 技术、Apple 生态研究、移动开发与通用安全概念。",
  "card.open": "打开链接",
  "card.openAria": "打开链接",

  "footer.tagline": "独立 iOS 安全研究与教育。",
  "footer.rights": "© 2026 Adnan.120hz。保留所有权利。",
  "footer.disclaimer":
    "这是一个独立的个人网站，与 Apple Inc. 没有关联，也未获得其认可。",
  "footer.end": "传输结束",

  "status.line": "状态：所有系统正常",

  "a11y.language": "选择语言",
  "a11y.languageAria": "语言选择器",
  "a11y.profilePhoto": "Adnan.120hz 的头像",
};

const ptBR: Dict = {
  "header.portal": "PORTAL DE PESQUISA INDEPENDENTE",
  "header.online": "ONLINE",
  "header.boot": "./render --profile --links --retro",
  "nav.home": "INÍCIO",
  "nav.community": "Adnan.120hz/WorkPlot",
  "nav.support": "Adnan.120hz/Gievano",
  "nav.development": "Adnan.120hz",
  "nav.label": "Navegação de seções",

  "profile.section": "PERFIL",
  "profile.eyebrow": "APPLE SECURITY RESEARCH",
  "profile.subtitle": "Pesquisa & Educação Independente em Segurança iOS",
  "profile.description":
    "Explorando o ecossistema Apple, a segurança do iOS e a tecnologia móvel por meio de pesquisa independente e projetos educacionais.",
  "profile.tiktok": "VISITAR MEU TIKTOK",
  "profile.tiktokAria": "Visitar Adnan.120hz no TikTok (abre em nova aba)",

  "sections.community": "COMUNIDADE",
  "sections.communityChat": "CHAT DA COMUNIDADE",
  "sections.support": "APOIO",
  "sections.social": "SOCIAL",
  "sections.development": "DESENVOLVIMENTO",

  "links.telegram.description": "Canal Oficial no Telegram",
  "links.chat.description": "Chat Oficial da Comunidade",
  "links.donate.description": "Apoie Projetos Futuros & Desenvolvimento",
  "links.donate.extra":
    "Apoie próximas pesquisas independentes, desenvolvimento e projetos futuros.",
  "links.tiktok.description": "Siga Meu TikTok",
  "links.workplot.description": "Repositório GitHub • Código-fonte & Desenvolvimento",
  "links.workslop.description": "Repositório GitHub • Ferramentas de modificação do sistema iOS",
  "about.section": "SOBRE MINHA PESQUISA",
  "about.description":
    "Conteúdo educacional independente sobre tecnologia iOS, pesquisa do ecossistema Apple, desenvolvimento móvel e conceitos gerais de segurança.",
  "card.open": "ABRIR LINK",
  "card.openAria": "Abrir link",

  "footer.tagline": "Pesquisa & Educação Independente em Segurança iOS.",
  "footer.rights": "© 2026 Adnan.120hz. Todos os direitos reservados.",
  "footer.disclaimer":
    "Este é um site pessoal independente e não é afiliado nem endossado pela Apple Inc.",
  "footer.end": "fim da transmissão",

  "status.line": "status: todos os sistemas normais",

  "a11y.language": "Selecionar idioma",
  "a11y.languageAria": "Seletor de idioma",
  "a11y.profilePhoto": "Foto de perfil de Adnan.120hz",
};

export const translations: Record<Lang, Dict> = { en, id, vi, zh, ptBR };
