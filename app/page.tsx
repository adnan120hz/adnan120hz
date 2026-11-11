import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import LinkDashboard from "@/components/LinkDashboard";
import AboutResearch from "@/components/AboutResearch";
import Footer from "@/components/Footer";

/**
 * Adnan.120hz — single-page personal profile + link dashboard.
 * Visual hierarchy: compact header → profile → five link cells
 * → research note → footer. The boxed outer frame echoes the
 * retro-packaging reference; the animated terminal code stays
 * behind everything as decoration only.
 */
export default function HomePage() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1060px] px-3 pb-12 pt-3 sm:px-6 sm:pt-5">
      <div className="border-[3px] border-line px-3 py-4 outline outline-2 outline-line outline-offset-[5px] sm:px-6 sm:py-6 sm:outline-offset-[7px]">
        <Header />
        <main>
          <ProfileSection />
          <LinkDashboard />
          <AboutResearch />
        </main>
        <Footer />
      </div>
    </div>
  );
}
