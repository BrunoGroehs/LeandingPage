import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestDriveSection from "@/components/TestDriveSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestDriveSection />
      <FAQSection />
      <LeadCaptureSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}
