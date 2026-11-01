import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import LinkDashboard from "@/components/LinkDashboard";
import AboutResearch from "@/components/AboutResearch";
import Footer from "@/components/Footer";

/**
 * Adnan.120hz — fluid single page: sticky blur header, hero,
 * link card grid, research note, footer. No boxed frame,
 * no terminal chrome — WorkSlop website language.
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto w-full max-w-[1020px] px-5 pb-16 sm:px-6">
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
