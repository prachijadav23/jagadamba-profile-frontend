"use client";

import { CheckCircle2, ShieldCheck, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { qualitySupport, traceabilityWorkflow } from "@/data/quality";
import { motion } from "framer-motion";

export function QualitySection() {
  return (
    <section className="bg-navy-900 py-18 sm:py-24 text-white relative overflow-hidden border-t border-[#133E87]/40">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12 items-center">
          {/* Left Column: Heading, Quality Items & CTA */}
          <div className="lg:col-span-5">
            <SectionHeading
              index="06"
              kicker="Quality & Traceability"
              title="Documented material support at every stage"
              subtitle="Every plate and profile cut component leaves our Vadodara plant with verified heat numbers, thickness verification, and complete Mill Test Certificates (MTC)."
              light
            />

            <RevealStagger className="mt-7 flex flex-col gap-2.5">
              {qualitySupport.slice(0, 6).map((item) => (
                <motion.div
                  key={item}
                  variants={staggerItem}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#e52229]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </RevealStagger>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button href="/quality" variant="primary" showArrow className="bg-[#e52229] hover:bg-[#c81920] text-white">
                  Quality &amp; Traceability
                </Button>
                <Button href="/contact" variant="outline-light">
                  Request Sample Reports
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: UT Testing Image & 5-Stage Traceability Grid */}
          <div className="lg:col-span-7">
            <Reveal direction="right">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-white/15 shadow-card">
                <ImagePlaceholder
                  category="ut-testing"
                  filename="/images/ut-testing.jpg"
                  label="In-House Ultrasonic Testing (UT) & Flaw Detection"
                  className="h-full w-full"
                />
              </div>
            </Reveal>

            {/* Traceability 5-Stage Bento Strip */}
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-5">
              {traceabilityWorkflow.map((stage, i) => (
                <div
                  key={stage.stage}
                  className="rounded-xl border border-white/10 bg-navy-950/80 p-3.5 backdrop-blur-sm"
                >
                  <span className="font-mono text-xs font-bold text-red-400">0{i + 1}</span>
                  <h4 className="mt-1 font-display text-[12.5px] font-bold text-white leading-tight">
                    {stage.stage}
                  </h4>
                  <p className="mt-1 text-[11px] leading-snug text-slate-400 text-justify">
                    {stage.support}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
