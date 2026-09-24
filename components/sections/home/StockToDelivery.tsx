"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    short: "Stock",
    title: "Steel Plate Stock",
    desc: "Over 2,500 MT prime multi-grade certified plates stored across our 75,000 sq.ft. yard.",
    image: "/images/steel-stock.jpg",
  },
  {
    step: "02",
    short: "CNC Cutting",
    title: "CNC Profile Cutting",
    desc: "Multi-torch heavy CNC oxy-fuel cutting up to 300 mm thickness with precision edge beveling.",
    image: "/images/cnc-profile-cutting.jpg",
  },
  {
    step: "03",
    short: "Laser",
    title: "12 kW Laser Cutting",
    desc: "High-speed, narrow kerf fiber laser cutting for 3 mm to 25 mm plates with zero taper.",
    image: "/images/laser-cutting.jpg",
  },
  {
    step: "04",
    short: "Drilling",
    title: "CNC Drilling",
    desc: "Radial and multi-spindle CNC drilling for tube sheets, flanges, and structural base plates.",
    image: "/images/cnc-drilling.jpg",
  },
  {
    step: "05",
    short: "UT",
    title: "Ultrasonic Testing",
    desc: "In-house ASNT Level-II certified flaw detection, laminar checking, and thickness verification.",
    image: "/images/ut-testing.jpg",
  },
  {
    step: "06",
    short: "Inspection",
    title: "Quality Inspection",
    desc: "Digital dimensional verification, heat number stamping, and Mill Test Certificate cross-check.",
    image: "/images/inspection.jpg",
  },
  {
    step: "07",
    short: "Handling",
    title: "Heavy Crane & Hydra",
    desc: "Safe movement using 4 × 20T overhead EOT cranes with electro-magnets and heavy hydra.",
    image: "/images/crane-handling.jpg",
  },
  {
    step: "08",
    short: "Delivery",
    title: "Customer Delivery",
    desc: "Weather-proof strapping, dispatch documentation, and pan-India project transport transit.",
    image: "/images/dispatch.jpg",
  },
];

export function StockToDelivery() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e52229] mb-2.5">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>OUR PROCESS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
              FROM STOCK TO DELIVERY
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed text-left">
              From Steel Plate to Finished Profile – Everything Under One Roof in Vadodara.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#e52229] hover:underline"
          >
            <span>Processing Details</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 8-Step Interactive Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Steps List (8 Steps) */}
          <div className="lg:col-span-8">
            {/* Desktop Horizontal Stepper Bar */}
            <div className="hidden lg:block relative mb-8">
              <div className="absolute left-0 right-0 top-4 h-[2px] bg-slate-200" />
              <div
                className="absolute left-0 top-4 h-[2px] bg-[#e52229] transition-all duration-300"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              />

              <div className="relative grid grid-cols-8 gap-2">
                {steps.map((item, index) => {
                  const isActive = activeStep === index;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className="group pt-8 text-left transition-colors cursor-pointer"
                    >
                      <span
                        className={`absolute top-0 font-display text-xs font-black transition-colors ${
                          isActive
                            ? "text-[#e52229] scale-110"
                            : "text-slate-400 group-hover:text-slate-700"
                        }`}
                      >
                        {item.step}
                      </span>
                      <p
                        className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                          isActive ? "text-[#e52229]" : "text-slate-500 group-hover:text-[#0F172A]"
                        }`}
                      >
                        {item.short}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step Selection Cards (Works great on both Mobile & Desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {steps.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? "bg-red-50/70 border-[#e52229] shadow-xs"
                        : "bg-slate-50/80 border-slate-200/90 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-black ${
                        isActive ? "text-[#e52229]" : "text-slate-400"
                      }`}
                    >
                      {item.step}
                    </span>
                    <h3
                      className={`mt-1 font-display text-xs sm:text-[13px] font-bold leading-snug line-clamp-1 ${
                        isActive ? "text-[#e52229]" : "text-[#0F172A]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Current Active Step Highlight Box */}
            <div className="mt-5 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e52229] text-white text-xs font-bold">
                  {current.step}
                </span>
                <h4 className="font-display text-base font-extrabold uppercase text-[#0F172A]">
                  {current.title}
                </h4>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic Process Visual */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-xs">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#e52229]">
                      Stage {current.step} of 08
                    </p>
                    <p className="text-xs font-bold text-[#0F172A] truncate">
                      {current.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
