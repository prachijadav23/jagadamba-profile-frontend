import { IndustrialHero } from "@/components/sections/home/IndustrialHero";
import { TickerSection } from "@/components/sections/home/TickerSection";
import { IndustrialOverview } from "@/components/sections/home/IndustrialOverview";
import { ThreeFeatureColumns } from "@/components/sections/home/ThreeFeatureColumns";
import { IndustrialCompetence } from "@/components/sections/home/IndustrialCompetence";
import { ProcessingDivisions } from "@/components/sections/home/ProcessingDivisions";
import { IndustrialCTA } from "@/components/sections/home/IndustrialCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. AeroLogix Industrial Hero: Dual-Color Headline + Call Anytime Widget */}
      <IndustrialHero />

      {/* 2. Marquee Ticker: Certified Steel Mills & Capabilities */}
      <TickerSection />

      {/* 3. Section 1 (AeroLogix): Dual-Color Overview + Asymmetric Double-Image + 22+ Years Badge */}
      <IndustrialOverview />

      {/* 4. Section 1 Sub-Row: 3 Feature Columns with Outline Orange Icons */}
      <ThreeFeatureColumns />

      {/* 5. Section 2 (AeroLogix): Plant Visual + Industry-Proven Competence Checklist */}
      <IndustrialCompetence />

      {/* 6. Section 3 (AeroLogix): 4 Specialized Processing Divisions with Dark Petrol Navy Caption Bars */}
      <ProcessingDivisions />

      {/* 7. AeroLogix Industrial Inquiry & Drawing Quote CTA Banner */}
      <IndustrialCTA />
    </>
  );
}
