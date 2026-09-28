"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function IndustrialCompetence() {
  const competencePoints = [
    {
      title: "CNC Flame Cutting Up To 300 mm",
      desc: "Multi-torch oxy-fuel cutting for heavy machinery bases and structural plates.",
    },
    {
      title: "12 kW Fiber Laser Precision",
      desc: "Ultra-fast cutting for sheet metal with clean, burr-free edges and ±0.1 mm tolerance.",
    },
    {
      title: "Radial Drilling & Flange Machining",
      desc: "PCD bolt hole drilling, circular profiling, and counter-sinking for pressure flanges.",
    },
    {
      title: "100% Ultrasonic Testing (UT)",
      desc: "In-house Level II certified non-destructive testing for internal defect and lamination checks.",
    },
    {
      title: "Certified Prime Steel Only",
      desc: "Every plate backed by genuine Mill Test Certificates (MTC) from SAIL, Jindal & AM/NS.",
    },
    {
      title: "CAD/CAM High-Yield Nesting",
      desc: "Automated layout software maximizes plate utilization to give you the lowest per-kg cost.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Full-Width Rounded Industrial Photo */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <div className="relative h-96 sm:h-[480px] w-full">
                  <Image
                    src="/images/heavy-plate-cutting.jpg"
                    alt="Industrial Heavy Plate Cutting at Jagdamba Profile"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0F303F]/95 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FD6200] flex items-center justify-center text-white shrink-0">
                      <ShieldCheck size={22} strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Zero-Defect Quality Guarantee
                      </h4>
                      <p className="text-xs text-slate-300">
                        Inspected by certified engineers before dispatch from Vadodara.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Competence Checklist & CTA */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-[#FD6200]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FD6200]">
                  Proven Capability
                </span>
              </div>
            </Reveal>

            {/* Dual-Color Heading */}
            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.18] mb-5">
                <span className="text-[#FD6200]">Our industry-proven</span>{" "}
                <span className="text-[#0F303F]">competence</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                We combine state-of-the-art CNC machinery with strict metallurgical standards. Every cut profile is measured, deburred, and delivered with complete material traceability.
              </p>
            </Reveal>

            {/* 6-Item Checklist with Orange Checkmark Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
              {competencePoints.map((item, index) => (
                <Reveal key={item.title} delay={0.15 + index * 0.05}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FD6200] shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F303F] leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Get In Touch Button */}
            <Reveal delay={0.4}>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FD6200] hover:bg-[#E55500] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 active:scale-95"
                >
                  <span>Get In Touch Now!</span>
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
