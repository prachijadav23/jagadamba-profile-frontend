"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

const steelGrades = [
  "All Primary Grades",
  "IS 2062 E250 / E350",
  "S355J2+N High Tensile",
  "SA516 Gr 70 Boiler Quality",
  "C45 Carbon Steel",
  "Hardox 400 / 500 Wear Plate",
];

const thicknessRanges = [
  "Any Thickness",
  "3 mm to 25 mm (Laser / CNC)",
  "25 mm to 100 mm (Heavy CNC)",
  "100 mm to 300 mm (Oxy-Fuel)",
];

const tabs = ["Heavy Cutting", "Ready Stock", "Custom Profiles"] as const;

export function Hero() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Heavy Cutting");
  const [selectedGrade, setSelectedGrade] = useState("All Primary Grades");
  const [selectedThickness, setSelectedThickness] = useState("Any Thickness");
  const [location, setLocation] = useState("Vadodara Plant / Pan-India");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/quote?tab=${encodeURIComponent(activeTab)}&grade=${encodeURIComponent(
        selectedGrade
      )}&thickness=${encodeURIComponent(selectedThickness)}`
    );
  };

  return (
    <section className="pt-[calc(var(--nav-height)+32px)] sm:pt-[calc(var(--nav-height)+44px)] pb-12 sm:pb-20 bg-white">
      <Container>
        {/* Sky-Blue / Ice-Blue Hero Card (Matching Palace Mockup) */}
        <div className="relative rounded-3xl lg:rounded-[36px] bg-gradient-to-r from-[#edf5fd] via-[#e8f2fc] to-[#dfeefb] border border-blue-100/80 p-6 sm:p-10 lg:p-14 overflow-hidden shadow-sm">
          {/* Background Industrial Skyline Visual on Right */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-25 lg:opacity-90 overflow-hidden mix-blend-multiply">
            <Image
              src="/images/facility.jpg"
              alt="Jagdamba Profile Modern Facility"
              fill
              priority
              className="object-cover object-center lg:object-right"
            />
            {/* Subtle Gradient Fade to Left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#edf5fd] via-[#edf5fd]/80 to-transparent hidden lg:block" />
          </div>

          {/* Hero Content (Left Side) */}
          <div className="relative z-10 max-w-2xl">
            {/* Small Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#FD6200] border border-red-100 shadow-xs mb-5"
            >
              <span className="h-2 w-2 rounded-full bg-[#FD6200] animate-pulse" />
              <span>SINCE 2002 &bull; VADODARA, GUJARAT</span>
            </motion.div>

            {/* Grand Headline with Curved Red Brush Underline (Matching Palace Mockup) */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#0F172A] leading-[1.08]"
            >
              DISCOVER NEXT PERFECT{" "}
              <span className="text-[#FD6200] relative inline-block">
                STEEL
                {/* Curved playful brush underline */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FD6200] overflow-visible"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 50 0, 100 12"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              ON JAGDAMBA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              className="mt-4 font-display text-base sm:text-lg font-bold uppercase tracking-wide text-[#0F172A]"
            >
              Precision in Steel. <span className="text-[#FD6200]">Strength in Every Cut.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-600 max-w-xl text-left"
            >
              Steel Plates &bull; CNC Profile Cutting &bull; Laser Cutting &bull; CNC Drilling &bull; Ultrasonic Testing &bull; Vadodara Plant
            </motion.p>

            {/* Floating Specification Search Bar (Matching Palace Mockup) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 max-w-xl"
            >
              {/* Filter Tabs (Buy / Rent / Sell style -> Heavy Cutting / Ready Stock / Custom Profiles) */}
              <div className="flex items-center gap-1.5 mb-2.5">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-[#FD6200] text-white shadow-sm"
                        : "bg-white/80 text-slate-700 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Floating White Search Card */}
              <form
                onSubmit={handleSearch}
                className="rounded-2xl bg-white p-3 sm:p-4 shadow-xl border border-slate-200/90 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 text-slate-900"
              >
                {/* Field 1: Location / Destination */}
                <div className="flex-1 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Location / Plant
                  </label>
                  <span className="block text-xs sm:text-[13px] font-bold text-[#0F172A] mt-0.5 truncate">
                    {location}
                  </span>
                </div>

                {/* Field 2: Steel Grade */}
                <div className="flex-1 px-3 py-1.5 border-b sm:border-b-0 sm:border-r border-slate-100">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Steel Grade
                  </label>
                  <select
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-[13px] font-bold text-[#0F172A] focus:outline-none cursor-pointer mt-0.5 truncate"
                  >
                    {steelGrades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 3: Thickness Range */}
                <div className="flex-1 px-3 py-1.5">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Thickness
                  </label>
                  <select
                    value={selectedThickness}
                    onChange={(e) => setSelectedThickness(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-[13px] font-bold text-[#0F172A] focus:outline-none cursor-pointer mt-0.5 truncate"
                  >
                    {thicknessRanges.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Square Vibrant Red Search Button (Matching Palace Mockup) */}
                <button
                  type="submit"
                  aria-label="Search steel specifications"
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#FD6200] hover:bg-[#E55500] text-white shadow-md hover:shadow-red-glow transition-all duration-200 active:scale-95 cursor-pointer self-center"
                >
                  <Search size={20} strokeWidth={2.4} />
                </button>
              </form>
            </motion.div>
            {/* Quick Action Pill Buttons (Matching finalj-wheat.vercel.app & Palace pill buttons) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FD6200] hover:bg-[#E55500] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-red-glow transition-all duration-200 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/quote#upload"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:border-[#FD6200] transition-all duration-200 active:scale-95"
              >
                <span>Upload Drawing</span>
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hello Jagdamba Profile, I want to send a steel requirement."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all duration-200 active:scale-95"
              >
                <span>WhatsApp Sales</span>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
