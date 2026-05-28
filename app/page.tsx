import HeroSection         from "@/components/sections/HeroSection";
import FeaturesSection     from "@/components/sections/FeaturesSection";
import AppShowcase         from "@/components/sections/AppShowcase";
import AiCropScanSection   from "@/components/sections/AiCropScanSection";
import WhyGraziLinkSection from "@/components/sections/WhyGraziLinkSection";
import LanguageSection     from "@/components/sections/LanguageSection";
import PrivacySection      from "@/components/sections/PrivacySection";
import CTASection          from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AppShowcase />
      <AiCropScanSection />
      <WhyGraziLinkSection />
      <LanguageSection />
      <PrivacySection />
      <CTASection />
    </main>
  );
}
