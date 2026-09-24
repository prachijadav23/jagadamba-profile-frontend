"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { stats, company } from "@/data/company";

const steelBrands = [
  "JINDAL STEEL & POWER",
  "SAIL (STEEL AUTHORITY OF INDIA)",
  "TATA STEEL",
  "JSW STEEL",
  "AM/NS INDIA",
  "IMPORTED BOILER & ALLOY PLATES",
];

const capabilityStrip = [
  "CNC High-Definition Profile Cutting",
  "Fiber Laser Cutting (High Power)",
  "CNC Multi-Spindle Radial Drilling",
  "Level-II Ultrasonic Testing (UT)",
  "20T Overhead Crane & Magnet Handling",
  "Dedicated Fleet Transport Facility",
];

export function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-14 sm:py-18 border-y border-[#133E87]/40">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-30" />

      <Container className="relative z-10">
        {/* Steel Makes Ticker (Professional, Discrete) */}
        <div className="mb-10 border-b border-white/10 pb-6 overflow-hidden">
          <p className="text-center font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-red-400 mb-4">
            Primary Steel Makes Stocked &amp; Processed
          </p>
          <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex whitespace-nowrap gap-10 text-[13px] font-display font-extrabold tracking-wider text-white/70 py-1"
            >
              {[...steelBrands, ...steelBrands].map((brand, i) => (
                <span key={i} className="flex items-center gap-5">
                  <span className="hover:text-red-400 transition-colors">{brand}</span>
                  <span className="text-[#e52229] font-bold">&bull;</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 4 Core Verified Statistics */}
        <RevealStagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-card border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm transition-colors hover:border-[#e52229]/50 hover:bg-white/[0.06]"
            >
              <div className="absolute top-0 left-0 h-0.5 w-12 bg-[#e52229]" />
              <div className="font-display text-stat-mobile font-extrabold tabular-nums text-white sm:text-stat tracking-tight">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs sm:text-sm font-semibold leading-snug text-slate-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </RevealStagger>

        {/* Capability Strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          {capabilityStrip.map((cap) => (
            <span
              key={cap}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#e52229]" />
              <span>{cap}</span>
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
