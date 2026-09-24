"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Flame,
  Scissors,
  Zap,
  CircleDot,
  Warehouse,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    icon: Flame,
    title: "Heavy Plate Cutting",
    spec: "Up to 300 mm Thickness",
    count: "Oxy-Fuel Heavy CNC",
    href: "/services/heavy-plate-cutting",
    desc: "Single-pass heavy plate cutting with superior edge squareness and minimal HAZ.",
  },
  {
    icon: Scissors,
    title: "CNC Profile Cutting",
    spec: "Rings, Circles & Flanges",
    count: "4 CNC Multi-Torch",
    href: "/services/cnc-profile-cutting",
    desc: "Complex CAD shapes, base plates, gear blanks and custom industrial profiles.",
  },
  {
    icon: Zap,
    title: "Fiber Laser Cutting",
    spec: "Ultra-High Precision",
    count: "3mm – 25mm Sheets",
    href: "/services/laser-cutting",
    desc: "Narrow kerf width, zero taper, micro-burr finish for high-tolerance engineering.",
  },
  {
    icon: CircleDot,
    title: "CNC Drilling & Flanges",
    spec: "Radial & Multi-Spindle",
    count: "PCD & Tube Sheets",
    href: "/services/cnc-drilling",
    desc: "Flange bolt holes, tube sheets, baffle plates and structural drilled components.",
  },
  {
    icon: Warehouse,
    title: "Ready Stockyard",
    spec: "75,000 Sq.Ft. Facility",
    count: "2,500 MT Inventory",
    href: "/products/steel-plates",
    desc: "Organized grade-wise and thickness-wise storage with 4 x 20-ton crane handling.",
  },
  {
    icon: ShieldCheck,
    title: "Ultrasonic UT Testing",
    spec: "Level-II Certified",
    count: "100% Defect-Free",
    href: "/services/ut-testing",
    desc: "Internal flaw detection, laminar checking, thickness verification with mill MTC.",
  },
];

export function ExploreCapabilities() {
  return (
    <section className="py-16 sm:py-22 bg-[#F8FAFC] relative border-b border-slate-200">
      <Container>
        {/* Section Heading matching reference mockup */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e52229] mb-2.5">
            <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
            <span>CAPABILITIES &amp; SERVICES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0C2340] tracking-tight leading-tight">
            Explore Processing Capabilities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-center">
            Comprehensive steel processing from raw prime plates to finished precision machine parts under one roof in Vadodara.
          </p>
        </div>

        {/* 6 Clean Category Cards (Inspired by Reference Design 'Explore Apartment Types') */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col items-center text-center h-full p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#e52229]/50 shadow-sm hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
                >
                  {/* Circular Dark Navy Icon Badge with Subtle Gradient */}
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-[#0C2340] text-white shadow-md transition-all duration-300 group-hover:bg-[#e52229] group-hover:scale-110 mb-4">
                    <Icon size={26} strokeWidth={1.8} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#0C2340] group-hover:text-[#e52229] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Spec Badge / Subtext */}
                  <span className="mt-1.5 text-[11px] font-semibold text-slate-500 line-clamp-1">
                    {item.spec}
                  </span>

                  {/* Count / Metric Tag */}
                  <span className="mt-3 inline-block rounded-full bg-slate-100 group-hover:bg-red-50 px-2.5 py-0.5 text-[10.5px] font-bold text-slate-700 group-hover:text-[#e52229] transition-colors">
                    {item.count}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Bar: Link to all services */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0C2340] hover:text-[#e52229] transition-colors group"
          >
            <span>View All Engineering Services &amp; Technical Capabilities</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1 text-[#e52229]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
