import CaseStudies from "@/components/CaseStudies";
import Dashboard from "@/components/Dashboard";
import PromoBanner from "@/components/PromoBanner";
import EfficiencySection from "@/components/EfficiencySection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import DigitalBankingSection from "@/components/DigitalBankingSection";
import FintechInsightsSection from "@/components/Insightsection/FintechInsightsSection";
import PaperlessBanner from "@/components/PaperlessBanner";
import {MY_CASE_STUDIES, externalBanking, externalSocials, externalSolutions} from "../database/data"


export default function Home() {
  return (
    <div className="bg-[#060b13] text-white overflow-hidden pt-14">
      <Navbar />
      <Hero />
      <Features />
      <Dashboard />
      <EfficiencySection />
      <PromoBanner top={"-30%"} left={"30%"} />
      <DigitalBankingSection />
      <FintechInsightsSection />
      <CaseStudies data={MY_CASE_STUDIES} />
      <PaperlessBanner />
      <Footer
        solutionLinks={externalSolutions}
        bankingLinks={externalBanking}
        socialLinks={externalSocials}
      />
    </div>
  );
}
