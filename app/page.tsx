import { Hero } from "@/components/sections/home/Hero";
import { TrustStats } from "@/components/sections/home/TrustStats";
import { VideoReelSection } from "@/components/sections/home/VideoReelSection";
import { AboutSection } from "@/components/sections/home/AboutSection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProductsShowcase } from "@/components/sections/home/ProductsShowcase";
import { SteelWeightCalculator } from "@/components/sections/home/SteelWeightCalculator";
import { InfrastructureSection } from "@/components/sections/home/InfrastructureSection";
import { IndustriesSection } from "@/components/sections/home/IndustriesSection";
import { QualitySection } from "@/components/sections/home/QualitySection";
import { ApplicationsSection } from "@/components/sections/home/ApplicationsSection";
import { CTASection } from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <VideoReelSection />
      <AboutSection />
      <WhyChooseUs />
      <ProductsShowcase />
      <SteelWeightCalculator />
      <InfrastructureSection />
      <IndustriesSection />
      <QualitySection />
      <ApplicationsSection />
      <CTASection />
    </>
  );
}
