import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // TODO: ganti dengan domain production final jika berbeda
  metadataBase: new URL('https://adnan120hz-redesign-ui.vercel.app'),
  title: 'Adnan.120hz | Apple Security Research',
  description:
    'Independent iOS Security Research, Apple Ecosystem, iOS Education, and Community Links.',
  openGraph: {
    title: 'Adnan.120hz | Apple Security Research',
    description: 'Independent iOS Security Research & Education.',
    images: ['/images/profile.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Adnan.120hz | Apple Security Research',
    description: 'Independent iOS Security Research & Education.',
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
