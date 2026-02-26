import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestDriveSection from "@/components/TestDriveSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestDriveSection />
      <SocialProofSection />
      <FAQSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
