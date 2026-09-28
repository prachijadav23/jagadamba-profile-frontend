"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  {
    value: "26,000",
    unit: "Sq. Ft.",
    label: "Covered Processing Shed",
    desc: "State-of-the-art CNC, laser cutting & drilling bay",
  },
  {
    value: "75,000",
    unit: "Sq. Ft.",
    label: "Steel Plate Storage Yard",
    desc: "Over 2,500 MT multi-grade certified plates",
  },
  {
    value: "4 × 20 Ton",
    unit: "Capacity",
    label: "Overhead Cranes",
    desc: "Heavy plate handling & magnet lifting",
  },
  {
    value: "12 kW",
    unit: "Power",
    label: "Laser Cutting Machine",
    desc: "High-speed precision profiles with clean edges",
  },
];

const capabilityPills = [
  "CNC Profile Cutting",
  "CNC Drilling",
  "Ultrasonic Testing",
  "Hydra Loading & Unloading",
  "Ultrasonic Thickness Measurement",
  "Transport Facility",
];

export function StrengthInNumbers() {
  return (
    <section className="py-16 sm:py-22 bg-white relative border-b border-slate-200">
      <Container>
        {/* Section Heading matching Palace red eyebrow */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] mb-2.5">
            <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
            <span>CAPABILITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
            STRENGTH IN NUMBERS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-left">
            Dedicated infrastructure engineered for high-tonnage processing, tight tolerances, and rapid turnarounds in Vadodara.
          </p>
        </div>

        {/* 4 Clean Stats Grid (Matching finalj-wheat.vercel.app) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 shadow-xs hover:border-[#FD6200]/40 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              {/* Stat Value */}
              <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] tabular-nums">
                {stat.value}
              </p>
              {/* Unit Tag */}
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FD6200]">
                {stat.unit}
              </p>
              {/* Label */}
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-[#0F172A]">
                {stat.label}
              </h3>
              {/* Subtitle */}
              <p className="mt-1 text-xs text-slate-500 leading-relaxed text-left">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Capability Tags Below Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-2.5 pt-6 border-t border-slate-100"
        >
          {capabilityPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-700 hover:border-[#FD6200] hover:text-[#FD6200] transition-colors shadow-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FD6200]" />
              <span>{pill}</span>
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
