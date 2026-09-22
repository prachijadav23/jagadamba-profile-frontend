"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { oneRoofFlow } from "@/data/quality";
import { applications } from "@/data/industries";

function FlowNode({
  step,
  index,
  total,
}: {
  step: (typeof oneRoofFlow)[number];
  index: number;
  total: number;
}) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[step.icon] ?? Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0.3, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.45, delay: (index / total) * 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2.5 text-center group"
    >
      <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#133E87]/60 bg-[#0C2340] shadow-sm transition-colors group-hover:border-[#F59E0B] group-hover:bg-[#F59E0B]/20">
        <Icon size={18} strokeWidth={1.8} className="text-[#FBBF24] group-hover:text-white transition-colors" />
      </span>
      <span className="max-w-[92px] text-[11.5px] font-bold leading-tight text-slate-300 group-hover:text-white transition-colors">
        {step.label}
      </span>
    </motion.div>
  );
}

function OneRoofFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative py-4">
      <div className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-white/10 sm:block" />
      <motion.div
        style={{ scaleX: lineScale, transformOrigin: "left" }}
        className="absolute left-0 right-0 top-[22px] hidden h-0.5 bg-[#F59E0B] sm:block"
      />
      <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-9 lg:gap-x-2">
        {oneRoofFlow.map((step, i) => (
          <FlowNode key={step.label} step={step} index={i} total={oneRoofFlow.length} />
        ))}
      </div>
    </div>
  );
}

export function ApplicationsSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-18 sm:py-24 text-white border-t border-[#133E87]/40">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />

      <Container className="relative z-10">
        <SectionHeading
          index="08"
          kicker="Applications & End-Use"
          title="From raw mill plate to precision profile — all under one roof"
          subtitle="An integrated flow eliminating multiple vendor coordination, freight delays, and scrap overhead for engineering projects."
          light
        />

        <div className="mt-12">
          <OneRoofFlow />
        </div>

        {/* Application Cards Grid */}
        <div className="mt-14 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {applications.map((app, i) => (
            <Reveal key={app} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden rounded-card border border-white/10 shadow-sm transition-all hover:border-[#F59E0B]/60">
                <ImagePlaceholder
                  category="components"
                  label={app}
                  className="h-full w-full"
                  compact
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent p-3 flex items-end">
                  <span className="text-xs font-bold text-white group-hover:text-[#FBBF24] transition-colors">
                    {app}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
