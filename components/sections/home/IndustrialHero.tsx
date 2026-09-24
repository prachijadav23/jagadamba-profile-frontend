"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Layers, Gauge, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function IndustrialHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#0A222D] text-white pt-[calc(var(--nav-height)+60px)] pb-16 overflow-hidden">
      {/* Background Industrial Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/factory-hero.jpg"
          alt="Jagdamba Steel Profile Facility"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A222D] via-[#0A222D]/95 to-[#0A222D]/75" />
        <div className="absolute inset-0 bg-technical-grid opacity-15" />
      </div>

      <Container className="relative z-10 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Humanized Value Proposition */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Industrial Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-[#143B4E]/80 border border-[#22576F] text-xs font-bold uppercase tracking-wider text-[#FF5E3A] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF5E3A] animate-pulse" />
              <span>Gujarat&apos;s Leading Heavy Steel Processing Center</span>
            </motion.div>

            {/* AeroLogix Dual-Color Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-6 text-balance"
            >
              <span className="text-white">Reliable Steel Plates &amp; </span>
              <span className="text-[#FF5E3A]">Precision Profile Cutting</span>
            </motion.h1>

            {/* Humanized Conversational Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              Serving India&apos;s heavy engineering, power, and manufacturing sectors with certified plates up to 300 mm thickness, cut to exact engineering drawings with zero compromise on quality and speed.
            </motion.p>

            {/* AeroLogix Dual CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5 sm:gap-6 mb-12"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2.5 rounded-md bg-[#FF5E3A] hover:bg-[#E54D28] text-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-orange-glow transition-all duration-200 active:scale-95"
              >
                <span>Get Instant Quote</span>
                <ArrowRight size={16} strokeWidth={2.4} />
              </Link>

              {/* Signature AeroLogix Phone Widget */}
              <a
                href="tel:+919824917250"
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-md bg-[#143B4E]/60 border border-[#22576F]/60 text-white hover:border-[#FF5E3A] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-[#FF5E3A]/20 flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-colors">
                  <Phone size={16} strokeWidth={2.4} />
                </div>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Call Anytime
                  </span>
                  <span className="block text-sm font-extrabold text-white group-hover:text-[#FF5E3A] transition-colors">
                    +91 98249 17250
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#143B4E]"
            >
              <div>
                <div className="text-2xl font-extrabold text-[#FF5E3A]">22+</div>
                <div className="text-xs font-medium text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">2,500+ MT</div>
                <div className="text-xs font-medium text-slate-400">Prime Stockyard</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#FF5E3A]">Up to 300mm</div>
                <div className="text-xs font-medium text-slate-400">Heavy Flame Cut</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white">100% UT</div>
                <div className="text-xs font-medium text-slate-400">Certified Tested</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Industrial Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#22576F]/80 shadow-2xl bg-[#0F303F]">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/images/laser-cutting.jpg"
                  alt="High Speed 12kW Fiber Laser Cutting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A222D] via-transparent to-transparent" />
              </div>

              {/* Bottom Card Bar */}
              <div className="p-6 bg-[#0F303F] border-t border-[#143B4E]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E3A]">
                    Vadodara Facility Bay 1
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active Operations
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  12 kW High-Speed Fiber Laser &amp; CNC Multi-Torch Flame
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clean edges, tight tolerances (±0.1 mm), and direct mill test certification for all structural and boiler plates.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
