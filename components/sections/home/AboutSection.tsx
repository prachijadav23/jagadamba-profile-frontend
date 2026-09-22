"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { CheckCircle2, ShieldCheck, Award } from "lucide-react";

const coreCapabilities = [
  "Prime Steel Plate Stock (3 mm – 300 mm)",
  "High-Definition CNC Profile Cutting",
  "Precision Fiber Laser Cutting Bay",
  "CNC Multi-Spindle Radial Drilling",
  "Level-II Ultrasonic Testing (UT)",
  "Thickness Verification & Spectro Testing",
  "100% Heat Traceability & MTC Records",
  "In-House 20T Cranes & Transport Fleet",
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <Container>
        {/* Section Heading Centered matching Screenshot 2 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Reveal>
            <div className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#D97706] mb-3">
              WHAT WE DELIVER
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0C2340]">
              Jagdamba Profile Pvt. Ltd. &mdash; complete steel solutions under one roof
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700 text-justify">
              {company.description}
            </p>
          </Reveal>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Capabilities List */}
          <div className="lg:col-span-6">
            <Reveal delay={0.14}>
              <h3 className="font-display text-xl font-bold text-[#0C2340] mb-4">
                Core Capabilities &amp; Processing Services
              </h3>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {coreCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#F59E0B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Quality Philosophy Strip */}
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-2">
                {company.philosophy.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-3 py-1 text-xs font-bold text-[#0C2340] border border-slate-200">
                      {step}
                    </span>
                    {i < company.philosophy.length - 1 && (
                      <span className="text-slate-300 font-bold">&bull;</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button href="/about" variant="primary" showArrow>
                  More About Us
                </Button>
                <Button href="/downloads" variant="outline">
                  Download Company Profile
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Facility Photography & Key Verification Card */}
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <div className="relative">
                {/* 75,000 sq ft facility photography */}
                <div className="aspect-[4/3] overflow-hidden rounded-card border border-slate-200 shadow-card">
                  <ImagePlaceholder
                    category="factory"
                    label="75,000 Sq. Ft. Facility & Dedicated Bay"
                    className="h-full w-full"
                  />
                </div>

                {/* Key Facts Card */}
                <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-card border border-slate-200 bg-slate-50 p-4 shadow-subtle">
                    <div className="flex items-center gap-2 text-[#0C2340]">
                      <Award size={16} className="text-[#F59E0B]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Established</span>
                    </div>
                    <p className="mt-1 font-display text-lg font-black text-[#0C2340]">
                      Since {company.since}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">2+ Decades Industry Experience</p>
                  </div>

                  <div className="rounded-card border border-slate-200 bg-slate-50 p-4 shadow-subtle">
                    <div className="flex items-center gap-2 text-[#0C2340]">
                      <ShieldCheck size={16} className="text-[#F59E0B]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Quality Certified</span>
                    </div>
                    <p className="mt-1 font-display text-lg font-black text-[#0C2340]">
                      ISO 9001:2015
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Full MTC &amp; UT Traceability</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
