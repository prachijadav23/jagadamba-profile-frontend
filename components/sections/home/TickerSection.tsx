"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Steel Plates",
  "CNC Profile Cutting",
  "12 kW Laser Cutting",
  "CNC Drilling",
  "Oxy-Fuel Cutting",
  "Ultrasonic Testing",
  "Thickness Meter",
  "20T Overhead Cranes",
  "Hydra Loading",
  "Full Logistics",
  "Mill Traceability",
  "Project Dispatch",
];

const millBrands = [
  "JINDAL STEEL & POWER",
  "SAIL (STEEL AUTHORITY OF INDIA)",
  "JSW STEEL",
  "TATA STEEL",
  "AM/NS INDIA",
  "POSCO STEEL",
  "ESSAR STEEL",
  "SSAB HARDOX",
  "UTTAM VALUE",
  "NISCO",
];

export function TickerSection() {
  return (
    <section className="border-y border-[#143B4E] bg-[#0A222D] py-4 text-white overflow-hidden select-none">
      {/* Row 1: Processing Capabilities */}
      <div className="relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-0 py-1"
        >
          {[...capabilities, ...capabilities].map((cap, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-3 px-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-200"
            >
              <span className="text-[#FD6200] font-black text-xs">◆</span>
              <span>{cap}</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Steel From Leading Mills */}
      <div className="mt-2.5 pt-2.5 border-t border-white/10 relative flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
          className="flex whitespace-nowrap gap-0 py-0.5"
        >
          {[...millBrands, ...millBrands].map((mill, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-3 px-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-300 hover:text-white transition-colors"
            >
              <span className="text-[#FD6200] font-black text-[10px]">&bull;</span>
              <span>{mill}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

