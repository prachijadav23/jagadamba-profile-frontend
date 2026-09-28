"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Gauge,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  SlidersHorizontal,
  Flame,
  Play,
  Maximize2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";

const facilityBays = [
  {
    id: "laser",
    tabLabel: "12 kW Fiber Laser",
    shortLabel: "Laser 12kW",
    bayTitle: "12 kW Ultra-High Speed Fiber Laser Bay",
    image: "/images/laser-cutting.jpg",
    badge: "Bay 01 · Laser Precision",
    statusText: "Active CNC Cutting · Nitrogen Assist",
    feedRate: "4,800 mm/min",
    thickness: "0.5 mm – 25 mm",
    tolerance: "±0.1 mm",
    description: "High-speed laser cutting delivering mirror-finish burr-free edges with zero thermal distortion.",
  },
  {
    id: "flame",
    tabLabel: "300mm Flame Cutting",
    shortLabel: "300mm Flame",
    bayTitle: "CNC Multi-Torch Heavy Flame Cutting Bay",
    image: "/images/heavy-plate-cutting.jpg",
    badge: "Bay 02 · Heavy Profiling",
    statusText: "4-Torch Oxy-Fuel · Active Processing",
    feedRate: "Heavy Bed CNC",
    thickness: "Up to 300 mm",
    tolerance: "±0.5 mm – ±0.8 mm",
    description: "Heavy plate cutting for industrial machinery beds, press frames, and heavy earthmoving components.",
  },
  {
    id: "stockyard",
    tabLabel: "2,500+ MT Stockyard",
    shortLabel: "2,500T Stock",
    bayTitle: "75,000 Sq. Ft. Certified Plate Stockyard",
    image: "/images/steel-yard.jpg",
    badge: "Bay 03 · Raw Stock",
    statusText: "Ready In-Stock · Immediate Loading",
    feedRate: "4× 20T Cranes",
    thickness: "3 mm – 300 mm",
    tolerance: "SAIL • Jindal • AM/NS",
    description: "Over 2,500 MT ready inventory in IS 2062, Sailhard, Hardox, and Boiler Quality plates.",
  },
  {
    id: "ut-lab",
    tabLabel: "Ultrasonic UT Lab",
    shortLabel: "UT Lab NDT",
    bayTitle: "In-House NDT Testing & UT Verification Lab",
    image: "/images/ut-testing.jpg",
    badge: "Bay 04 · Quality Lab",
    statusText: "Level II NDT · 100% Tested",
    feedRate: "Flaw Detection",
    thickness: "Full Thickness Range",
    tolerance: "100% Defect-Free",
    description: "Internal lamination and defect testing with original Mill Test Certificates (MTC) for critical projects.",
  },
];

const plateThicknessOptions = [
  {
    label: "0.5 – 12 mm Sheet",
    short: "0.5–12mm",
    process: "12 kW Fiber Laser",
    tolerance: "±0.1 mm (Mirror finish)",
    grades: "CR, HR, Stainless, MS",
  },
  {
    label: "16 – 60 mm Medium Plate",
    short: "16–60mm",
    process: "High-Def CNC Flame / Laser",
    tolerance: "±0.3 mm (Square edge)",
    grades: "IS 2062 E250 / E350, Sailhard",
  },
  {
    label: "70 – 300 mm Heavy Plate",
    short: "70–300mm",
    process: "Multi-Torch CNC Oxy-Fuel",
    tolerance: "±0.8 mm (Deep penetration)",
    grades: "SA516 Gr 70 Boiler, Hardox 400",
  },
];

export function IndustrialHero() {
  const [activeBayIndex, setActiveBayIndex] = useState(0);
  const [selectedSpec, setSelectedSpec] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Auto-cycle bays every 5.5 seconds unless paused by user interaction
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveBayIndex((prev) => (prev + 1) % facilityBays.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeBay = facilityBays[activeBayIndex];

  return (
    <>
      <section className="group relative min-h-[92vh] flex items-center bg-[#0A222D] text-white pt-[calc(var(--nav-height)+50px)] sm:pt-[calc(var(--nav-height)+60px)] pb-14 sm:pb-16 overflow-hidden">
        {/* Dynamic Background Media with Cinematic Hover Scale and Glass Filters */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Background Loop Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/factory-hero.jpg"
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-25 filter brightness-90 contrast-110"
          >
            <source src="/videos/full-combined-tour.mp4" type="video/mp4" />
          </video>

          {/* Fallback Image behind video if video fails or while loading */}
          <Image
            src="/images/factory-hero.jpg"
            alt="Jagdamba Steel Facility"
            fill
            priority
            className="-z-10 object-cover object-center opacity-25"
          />

          {/* Layered Glassmorphic Gradients & Depth Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A222D]/98 via-[#0A222D]/90 to-[#0A222D]/75 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A222D] via-transparent to-[#0A222D]/60" />
          <div className="absolute inset-0 bg-technical-grid opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

          {/* Ambient Workshop Laser & Radial Ember Sparks Glow */}
          <div className="pointer-events-none absolute -top-28 -left-28 w-[520px] h-[520px] rounded-full bg-[#FD6200]/15 blur-3xl transition-opacity duration-700 group-hover:opacity-30" />
          <div className="pointer-events-none absolute -bottom-24 right-1/4 w-[480px] h-[480px] rounded-full bg-[#FD6200]/10 blur-3xl transition-opacity duration-700 group-hover:opacity-25" />

          {/* Workshop Ember Sparks */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <span className="absolute left-[15%] bottom-10 w-1.5 h-1.5 rounded-full bg-[#FD6200] animate-ember-1" />
            <span className="absolute left-[35%] bottom-8 w-2 h-2 rounded-full bg-orange-400 animate-ember-2" />
            <span className="absolute left-[65%] bottom-16 w-1.5 h-1.5 rounded-full bg-[#FD6200] animate-ember-3" />
            <span className="absolute left-[85%] bottom-12 w-2 h-2 rounded-full bg-orange-300 animate-ember-4" />
          </div>
        </div>

        <Container className="relative z-10 py-4 sm:py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Value Proposition, Mobile Visual Showcase, & Spec Explorer */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Live Gujarat Leader Eyebrow Badge with Frosted Glass Filter */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FD6200] shadow-[0_4px_20px_rgba(0,0,0,0.25)] mb-4 sm:mb-5 hover:border-[#FD6200]/60 transition-colors"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FD6200] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FD6200]" />
                </span>
                <span>Gujarat&apos;s Leading Heavy Steel Processing Center</span>
              </motion.div>

              {/* Main Dual-Color Headline with Brand Orange Shimmer */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-4 sm:mb-5 text-balance"
              >
                <span className="text-white drop-shadow-sm">Reliable Steel Plates &amp; </span>
                <span className="animate-molten bg-gradient-to-r from-[#FD6200] via-[#FFA466] to-[#FD6200] text-transparent bg-clip-text drop-shadow-[0_0_24px_rgba(253,98,0,0.3)]">
                  Precision Profile Cutting
                </span>
              </motion.h1>

              {/* Humanized Conversational Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl leading-relaxed mb-6"
              >
                Serving India&apos;s heavy engineering, power, and manufacturing sectors with certified plates up to 300 mm thickness, cut to exact engineering drawings with zero compromise on quality and speed.
              </motion.p>

              {/* Mobile & Tablet Specific Visual Showcase (Visible only on mobile/tablet screens < lg) */}
              <div className="block lg:hidden mb-6">
                <div className="rounded-2xl overflow-hidden border border-white/20 bg-white/[0.04] backdrop-blur-xl shadow-2xl">
                  {/* Horizontal Scrolling Bay Pills for Mobile */}
                  <div className="flex items-center gap-1.5 p-1.5 bg-[#0A222D]/90 backdrop-blur-md border-b border-white/10 overflow-x-auto no-scrollbar">
                    {facilityBays.map((bay, idx) => (
                      <button
                        key={bay.id}
                        type="button"
                        onClick={() => {
                          setActiveBayIndex(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all ${
                          activeBayIndex === idx
                            ? "bg-[#FD6200] text-white shadow-xs"
                            : "text-slate-300 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {bay.shortLabel}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Active Bay Screen */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeBay.id}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={activeBay.image}
                          alt={activeBay.bayTitle}
                          fill
                          priority
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A222D] via-black/30 to-transparent" />
                      </motion.div>
                    </AnimatePresence>

                    {/* Laser line animation */}
                    <div className="pointer-events-none absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FD6200] to-transparent shadow-[0_0_12px_#FD6200] animate-laser-sweep z-20" />

                    {/* HUD Badge with Glass Filter */}
                    <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/15 text-[9px] font-mono font-bold text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                      <span>{activeBay.statusText}</span>
                    </div>

                    {/* Floating Tolerance Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-orange-500/40 text-[10px] font-bold text-white">
                      <Zap size={11} className="text-[#FD6200]" />
                      <span>Tol: {activeBay.tolerance}</span>
                    </div>

                    {/* Progress Line */}
                    <div className="absolute bottom-0 inset-x-0 h-1 bg-black/40 z-20">
                      <motion.div
                        key={activeBayIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5.5, ease: "linear" }}
                        className="h-full bg-[#FD6200]"
                      />
                    </div>
                  </div>

                  {/* Mobile Bay Summary */}
                  <div className="p-3.5 bg-[#0A222D]/95 backdrop-blur-md text-xs border-t border-white/10">
                    <div className="flex items-center justify-between font-bold text-[#FD6200] text-[11px] mb-1">
                      <span>{activeBay.badge}</span>
                      <span className="text-slate-400 font-normal">{activeBay.feedRate}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                      {activeBay.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Plate Spec & Tolerance Selector with Glass Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 sm:mb-8 p-4 sm:p-5 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-xl max-w-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:border-[#FD6200]/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
                  <span className="font-bold text-[#FD6200] uppercase tracking-wider flex items-center gap-1.5">
                    <Gauge size={15} /> Instant Process &amp; Tolerance Guide:
                  </span>
                  <span className="text-[10px] text-slate-400 bg-white/10 px-2 py-0.5 rounded-full border border-white/10">Tap to test specs</span>
                </div>

                {/* Selector Pills */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {plateThicknessOptions.map((opt, i) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setSelectedSpec(i)}
                      className={`px-2.5 py-2.5 rounded-lg text-[11px] sm:text-xs font-bold transition-all text-center cursor-pointer ${
                        selectedSpec === i
                          ? "bg-gradient-to-r from-[#E55500] to-[#FD6200] text-white shadow-md shadow-orange-500/20 border border-[#FD6200]"
                          : "bg-white/[0.07] text-slate-300 hover:bg-white/[0.12] hover:text-white border border-white/10"
                      }`}
                    >
                      <span className="hidden sm:inline">{opt.label}</span>
                      <span className="sm:hidden">{opt.short}</span>
                    </button>
                  ))}
                </div>

                {/* Live Spec Output */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs leading-tight text-slate-300">
                  <div className="p-2 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Best Process:</span>
                    <strong className="text-white font-semibold text-xs sm:text-[13px]">{plateThicknessOptions[selectedSpec].process}</strong>
                  </div>
                  <div className="p-2 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Tolerance:</span>
                    <strong className="text-[#FD6200] font-semibold text-xs sm:text-[13px]">{plateThicknessOptions[selectedSpec].tolerance}</strong>
                  </div>
                  <div className="col-span-2 sm:col-span-1 p-2 rounded-lg bg-black/20 border border-white/5">
                    <span className="text-slate-400 block text-[10px] uppercase font-medium">Ready Grades:</span>
                    <strong className="text-slate-200 font-semibold text-xs sm:text-[13px]">{plateThicknessOptions[selectedSpec].grades}</strong>
                  </div>
                </div>
              </motion.div>

              {/* Action Row with Direct Watch Tour Modal Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10"
              >
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#E55500] to-[#FD6200] hover:from-[#FD6200] hover:to-[#FF771C] text-white px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all duration-200 active:scale-95 flex-1 sm:flex-initial"
                >
                  <span>Get Instant Quote</span>
                  <ArrowRight size={15} strokeWidth={2.4} />
                </Link>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/[0.07] hover:bg-white/[0.14] text-white border border-white/20 hover:border-[#FD6200]/60 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-200 cursor-pointer flex-1 sm:flex-initial"
                >
                  <Play size={14} fill="currentColor" className="text-[#FD6200]" />
                  <span>Watch Plant Tour</span>
                </button>

                {/* Call Anytime Glass Widget */}
                <a
                  href="tel:+919824917250"
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/15 hover:border-[#FD6200] hover:bg-white/[0.1] backdrop-blur-md text-white transition-all group flex-1 sm:flex-initial"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FD6200]/20 flex items-center justify-center text-[#FD6200] group-hover:bg-[#FD6200] group-hover:text-white transition-colors">
                    <Phone size={15} strokeWidth={2.4} />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      Call Anytime
                    </span>
                    <span className="block text-xs sm:text-sm font-extrabold text-white group-hover:text-[#FD6200] transition-colors">
                      +91 98249 17250
                    </span>
                  </div>
                </a>
              </motion.div>

              {/* Quick Metrics Bar in Frosted Glass Tiles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-5 border-t border-white/10"
              >
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[#FD6200]/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#FD6200]">22+</div>
                  <div className="text-xs font-medium text-slate-300">Years Experience</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[#FD6200]/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">2,500+ MT</div>
                  <div className="text-xs font-medium text-slate-300">Prime Stockyard</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[#FD6200]/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-extrabold text-[#FD6200]">Up to 300mm</div>
                  <div className="text-xs font-medium text-slate-300">Heavy Flame Cut</div>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-[#FD6200]/40 transition-colors">
                  <div className="text-xl sm:text-2xl font-extrabold text-white">100% UT</div>
                  <div className="text-xs font-medium text-slate-300">Certified Tested</div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Desktop/Tablet Interactive 4-Bay Machine Showcase with Glass Filter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block lg:col-span-5 xl:col-span-5 relative group/bay"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Bay Selector Navigation Tabs with Glass Filter */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-t-2xl bg-[#0A222D]/90 backdrop-blur-xl border-t border-x border-white/15 overflow-x-auto no-scrollbar">
                {facilityBays.map((bay, idx) => (
                  <button
                    key={bay.id}
                    type="button"
                    onClick={() => {
                      setActiveBayIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className={`flex-1 min-w-[70px] py-2 px-2.5 rounded-lg text-[11px] font-bold tracking-tight text-center transition-all cursor-pointer ${
                      activeBayIndex === idx
                        ? "bg-[#FD6200] text-white shadow-xs"
                        : "text-slate-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {bay.tabLabel}
                  </button>
                ))}
              </div>

              {/* Main Visual Display Screen with Active Bay Image & Laser Animation */}
              <div className="relative rounded-b-2xl overflow-hidden border border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.6)] bg-[#0A222D]/90 backdrop-blur-xl">
                <div className="relative h-72 sm:h-88 md:h-96 w-full overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBay.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeBay.image}
                        alt={activeBay.bayTitle}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 group-hover/bay:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A222D] via-black/20 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Animated Glowing Laser Sweep Line */}
                  <div className="pointer-events-none absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#FD6200] to-transparent shadow-[0_0_14px_#FD6200] animate-laser-sweep z-20">
                    <div className="absolute right-1/3 -top-1 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_#FD6200] animate-ping" />
                  </div>

                  {/* HUD Telemetry Overlay in Top Left with Glass Filter */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-xl border border-white/20 text-[10px] font-mono font-bold tracking-wider text-white shadow-lg">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>{activeBay.statusText}</span>
                  </div>

                  {/* Live Auto-Cycle Progress Indicator Bar */}
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-black/40 z-20">
                    <motion.div
                      key={activeBayIndex}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.5, ease: "linear" }}
                      className="h-full bg-[#FD6200]"
                    />
                  </div>

                  {/* Floating Glassmorphic Spec Badge: Top Right */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-12 right-3 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-xl border border-orange-500/40 text-white shadow-xl"
                  >
                    <Zap size={14} className="text-[#FD6200]" />
                    <div className="text-left leading-none">
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">Tolerance</span>
                      <strong className="text-xs font-bold text-white">{activeBay.tolerance}</strong>
                    </div>
                  </motion.div>

                  {/* Floating Glassmorphic Spec Badge: Bottom Left */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-4 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-xl border border-white/20 text-white shadow-xl"
                  >
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <div className="text-left leading-none">
                      <span className="block text-[9px] uppercase tracking-wider text-slate-400">Plate Range</span>
                      <strong className="text-xs font-bold text-white">{activeBay.thickness}</strong>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Bay Information Card with Glass Filter */}
                <div className="p-5 bg-[#0A222D]/95 backdrop-blur-xl border-t border-white/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FD6200]">
                      {activeBay.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Feed: {activeBay.feedRate}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                    {activeBay.bayTitle}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeBay.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Corporate Film Video Player Modal */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeVideoId="full-combined-tour"
      />
    </>
  );
}
