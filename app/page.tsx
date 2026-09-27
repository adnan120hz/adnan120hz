import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import LinkDashboard from "@/components/LinkDashboard";
import Footer from "@/components/Footer";

/**
 * Adnan.120hz — single-page retro terminal dashboard.
 * Profile first, then the five link cells in fixed order.
 */
export default function HomePage() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1060px] px-4 pb-12 pt-4 sm:px-6">
      <Header />
      <main>
        <ProfileSection />
        <LinkDashboard />
      </main>
      <Footer />
    </div>
  );
}
