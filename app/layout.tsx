import type { Metadata, Viewport } from "next";
import { CONFIG } from "@/lib/config";
import TerminalBackground from "@/components/TerminalBackground";
import Providers from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.metadataBase),
  title: "Adnan.120hz | Apple Security Research",
  description:
    "Independent iOS Security Research, Apple Ecosystem, iOS Education, and Community Links.",
  openGraph: {
    title: "Adnan.120hz | Apple Security Research",
    description:
      "Independent iOS Security Research, Apple Ecosystem, iOS Education, and Community Links.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TerminalBackground />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
