import Header from "@/ui/Header";
import HeroSection from "@/components/HeroSection";
import HowWorksSection from "@/components/HowWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import Banner from "@/components/CtaBanner";
import PlansSection from "@/components/PlansSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <HowWorksSection />
      <BenefitsSection />
      <Banner />
      <PlansSection />
    </>
  );
}
