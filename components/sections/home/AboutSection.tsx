"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, ShieldCheck, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Resolution Facility Photography with Floating 22+ Years Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
              <Image
                src="/images/factory.jpg"
                alt="Jagdamba Profile 75,000 Sq. Ft. Facility"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Stat Card (Matching Palace Mockup 30+ card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-6 bg-white rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-100 max-w-[190px] text-center"
            >
              <div className="font-display text-4xl sm:text-5xl font-black text-[#e52229] leading-none">
                22<span className="text-2xl sm:text-3xl font-bold">+</span>
              </div>
              <p className="mt-2 text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">
                Years of Industry Experience
              </p>
            </motion.div>
          </div>

          {/* Right Column: Discover Story Content (Matching Palace Mockup) */}
          <div className="lg:col-span-6 flex flex-col items-start pt-6 lg:pt-0">
            {/* Red Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e52229] mb-3">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>DISCOVER OUR STORY</span>
            </div>

            {/* Uppercase Bold Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
              UNVEILING JAGDAMBA PROFILE INDUSTRIAL JOURNEY
            </h2>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 text-left">
              Jagdamba Profile Pvt. Ltd. has been at the forefront of Gujarat&apos;s steel processing ecosystem since 2002. From a 75,000 sq.ft. stockyard to 300 mm heavy CNC profile cutting, we eliminate project bottlenecks for heavy engineering, infrastructure, and pressure vessel fabricators across India.
            </p>

            {/* 2 Feature Items with Circular Pale Red Badge Icons */}
            <div className="mt-8 flex flex-col gap-6 w-full">
              {/* Feature 1: Client Centric Approach */}
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-50 text-[#e52229] border border-red-100 shadow-xs">
                  <Users size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#0F172A]">
                    Client Centric Approach
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    Tailored CNC profile cutting, custom nesting algorithms to reduce scrap, and flexible delivery schedules that align with your plant&apos;s erection deadlines.
                  </p>
                </div>
              </div>

              {/* Feature 2: Integrity & Transparency */}
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-50 text-[#e52229] border border-red-100 shadow-xs">
                  <ShieldCheck size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#0F172A]">
                    Integrity &amp; Quality Transparency
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                    100% heat number traceability, digital thickness testing, ASNT Level-II ultrasonic flaw detection, and original Mill Test Certificates (MTC) with every dispatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Read More Pill Button (Matching Palace Mockup) */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-[#e52229] hover:bg-[#c81920] text-white px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-red-glow transition-all duration-200 active:scale-95"
              >
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
