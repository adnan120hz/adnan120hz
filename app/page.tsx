'use client';

import { useState } from 'react';
import { LanguageProvider } from '../lib/i18n';
import AuroraBackground from '../components/AuroraBackground';
import CodeBackground from '../components/CodeBackground';
import FallingStars from '../components/FallingStars';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import LinksDashboard from '../components/LinksDashboard';
import LocalAI from '../components/LocalAI';
import BottomNavigation from '../components/BottomNavigation';
import Footer from '../components/Footer';

export type MainTab = 'links' | 'ai';

export default function Home() {
  const [tab, setTab] = useState<MainTab>('links');

  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#eef4ff] text-slate-900 dark:bg-[#04070f] dark:text-white antialiased">
        <AuroraBackground />
        <CodeBackground />
        <FallingStars />
        <Header />
        <main className="relative z-10 mx-auto w-full max-w-2xl px-4 pb-36 pt-6">
          <ProfileSection />
          {/* Both tabs stay mounted so Local AI keeps its selected FAQ when switching */}
          <div className={tab === 'links' ? '' : 'hidden'}>
            <LinksDashboard />
          </div>
          <div className={tab === 'ai' ? '' : 'hidden'}>
            <LocalAI />
          </div>
          <Footer />
        </main>
        <BottomNavigation active={tab} onChange={setTab} />
      </div>
    </LanguageProvider>
  );
}
