"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Factory,
  Scissors,
  Crosshair,
  ShieldCheck,
  Layers,
  Truck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const features = [
  {
    icon: Factory,
    title: "Stock + Processing",
    subtitle: "Plates and cutting under one roof",
    desc: "Over 2,500 MT plate inventory paired with direct in-house CNC and laser cutting bays.",
    href: "/products/steel-plates",
  },
  {
    icon: Scissors,
    title: "CNC Profile Cutting",
    subtitle: "Large-format beds for heavy plate",
    desc: "Cutting up to 300 mm thickness with precision multi-torch oxy-fuel profiling.",
    href: "/services/cnc-profile-cutting",
  },
  {
    icon: Crosshair,
    title: "12 kW Laser Cutting",
    subtitle: "Fast, accurate profile cutting",
    desc: "Clean-edge cutting for 3 mm to 25 mm sheets with zero taper and minimal heat distortion.",
    href: "/services/laser-cutting",
  },
  {
    icon: ShieldCheck,
    title: "UT & Traceability",
    subtitle: "ASTM / EN testing support",
    desc: "Level-II ultrasonic testing, laminar checks, digital thickness meters & 100% heat traceability.",
    href: "/quality",
  },
  {
    icon: Layers,
    title: "Project Grades",
    subtitle: "Structural to wear-resistant",
    desc: "IS 2062, S355J2+N, SA516 Gr 70, C45, Hardox 400/500 — with original Mill Test Certificates.",
    href: "/grades",
  },
  {
    icon: Truck,
    title: "Dispatch Ready",
    subtitle: "Crane, Hydra & logistics",
    desc: "4 × 20T overhead cranes, yard hydra loading, and established pan-India transport network.",
    href: "/contact",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 relative border-b border-slate-200">
      <Container>
        {/* Header with Request Quote Button on Right (Matching finalj-wheat.vercel.app & Palace layout) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e52229] mb-2.5">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>WHY BUYERS CHOOSE US</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
              BUILT FOR INDUSTRIAL PROJECTS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-left">
              From raw plate stock to finished cut profiles, our complete Vadodara plant eliminates project bottlenecks.
            </p>
          </div>

          <div className="shrink-0 self-start sm:self-auto">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-full bg-[#e52229] hover:bg-[#c81920] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-red-glow transition-all duration-200 active:scale-95"
            >
              <span>Request a Quote</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* 6 Clean Feature Cards (Matching finalj-wheat.vercel.app) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                whileHover={{ y: -5 }}
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#e52229]/50 hover:shadow-lg transition-all duration-300"
                >
                  {/* Top Red Hover Indicator */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-transparent group-hover:bg-[#e52229] transition-colors duration-200" />

                  <div>
                    {/* Pale Red Circular Icon Badge (Palace Mockup Style) */}
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-red-50 text-[#e52229] border border-red-100 group-hover:bg-[#e52229] group-hover:text-white transition-colors duration-200">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    <h3 className="mt-5 font-display text-base sm:text-lg font-bold uppercase tracking-tight text-[#0F172A] group-hover:text-[#e52229] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#e52229]">
                      {item.subtitle}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed text-left">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#e52229] transition-colors">
                    <span>Explore Specifications</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
