"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Boxes,
  MessageCircle,
  Upload,
  Phone,
  Play,
  X,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";

const rotatingKeywords = [
  "HEAVY CUTTING UP TO 300 MM",
  "MULTIPLE GRADES READY STOCK",
  "FAST DISPATCH ACROSS INDIA",
  "CNC PROFILE CUTTING",
  "QUALITY CHECKED WITH UT",
];

export function Hero() {
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92svh] lg:min-h-[96svh] flex flex-col justify-between overflow-hidden pt-32 sm:pt-36 pb-8 text-white">
      {/* Real Industrial Steel Photo/Video at the back of homepage starting portion */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/steel-coils-hero.jpg"
          alt="Heavy Industrial Steel Processing & Coils Facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        {/* Dark Cinematic Industrial Overlay matching Photo 1 (Golden & Navy highlights) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#06121E]/95 via-[#0A1D33]/90 to-[#0C2340]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#06121E_95%)] opacity-85" />
        <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-15" />
      </div>

      {/* Decorative corner accent blocks inspired by industrial plate framing */}
      <div className="pointer-events-none absolute top-0 right-0 w-16 h-28 bg-[#0C2340]/80 border-b-2 border-l-2 border-[#F59E0B]/40 hidden md:block z-10" />
      <div className="pointer-events-none absolute bottom-16 left-0 w-16 h-28 bg-[#0C2340]/80 border-t-2 border-r-2 border-[#F59E0B]/40 hidden md:block z-10" />

      <Container className="relative z-10 w-full my-auto py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-8 max-w-2xl">
            {/* Top Eyebrow in Photo 1 Gold — Item 15 Requested Text */}
            <div className="mb-3">
              <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.16em] text-[#FBBF24]">
                STEEL TRADING &amp; CNC PROFILE CUTTING EXPERTS
              </span>
            </div>

            {/* Pill Badge with Gold Accent */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#0A1D33]/85 px-3.5 py-1 text-xs font-mono font-semibold tracking-wide text-amber-100 backdrop-blur-sm shadow-sm">
              <ShieldCheck size={14} className="text-[#F59E0B]" />
              <span>STOCK &bull; CNC &bull; LASER &bull; UT &bull; LOGISTICS</span>
            </div>

            {/* Main Title with Signature Vertical Gold Bar from Photo 1 */}
            <div className="border-l-4 border-[#F59E0B] pl-4 sm:pl-5">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-black tracking-tight leading-[1.04]">
                <span className="text-white">JAGDAMBA </span>
                <span className="text-[#F59E0B]">PROFILE</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-200 mt-1">
                  Pvt. Ltd.
                </span>
              </h1>
            </div>

            {/* Item 15 Subheading: Serving Industry Since 2002 | Multiple Grades | Up To 300 MM Cutting | Fast Dispatch Across India */}
            <p className="mt-4 font-sans text-xs sm:text-sm font-bold text-[#FBBF24] tracking-wide">
              Serving Industry Since 2002 &bull; Multiple Grades &bull; Up To 300 MM Cutting &bull; Fast Dispatch Across India
            </p>

            {/* Tagline */}
            <p className="mt-3 font-display text-lg sm:text-xl font-semibold text-white/95">
              Precision in Steel. Strength in Every Cut.
            </p>

            {/* Big Bold Animated Rotating Text in Golden Amber */}
            <div className="mt-6 mb-2">
              <div className="h-12 sm:h-14 overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rotatingKeywords[keywordIndex]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-wide text-[#FBBF24]"
                  >
                    {rotatingKeywords[keywordIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Vibrant Gold horizontal indicator */}
              <div className="h-[3.5px] w-20 bg-[#F59E0B] rounded-full mt-1.5" />
            </div>

            {/* Supporting Text — Strictly Justified as requested */}
            <p className="mt-5 text-xs sm:text-[13.5px] leading-relaxed text-slate-300 max-w-xl text-justify">
              Steel Plates | CNC Profile Cutting | Laser Cutting | CNC Drilling | Ultrasonic Testing | Complete Steel Processing Solutions under one integrated roof in Vadodara, Gujarat.
            </p>
          </div>

          {/* Right Center: Circular Play Video Button (As in 2nd photo) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center py-6 lg:py-0">
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              aria-label="Play corporate overview film"
              className="group relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white text-[#0C2340] shadow-[0_0_40px_rgba(245,158,11,0.35)] transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
            >
              {/* Pulsing golden amber ring */}
              <span className="absolute -inset-2 rounded-full border-2 border-[#F59E0B]/60 animate-ping opacity-60 pointer-events-none" />
              <span className="absolute -inset-3 rounded-full border border-white/40 pointer-events-none" />

              <Play size={36} fill="#0C2340" className="ml-1 text-[#0C2340] transition-transform duration-300 group-hover:scale-110" />
            </button>
            <span className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-white group-hover:text-[#FBBF24] transition-colors flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Watch Corporate Film (45s)
            </span>
            <div className="mt-2 flex items-center gap-1.5 text-[11px] text-[#FBBF24] font-bold bg-[#06121E]/80 px-2.5 py-0.5 rounded-full border border-[#F59E0B]/30">
              <span>English &bull; ગુજરાતી &bull; हिन्दी</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Horizontal 5-Button Action Bar (Photo 1 Gold Theme) */}
      <div className="relative z-10 w-full mt-auto pt-6 border-t border-[#F59E0B]/30 bg-[#081729]/85 backdrop-blur-md">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 py-3">
            {/* Button 1: Solid Vibrant Golden Amber GET A QUOTE (matching Photo 1) */}
            <Link
              href="/quote"
              className="flex items-center justify-center gap-2 rounded bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1D33] px-3.5 py-3 text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-sm hover:shadow-gold-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <FileText size={15} strokeWidth={2.4} className="shrink-0 text-[#0A1D33]" />
              <span>GET A QUOTE</span>
            </Link>

            {/* Button 2: CHECK MATERIAL AVAILABILITY */}
            <Link
              href="/stock-enquiry"
              className="flex items-center justify-center gap-2 rounded border border-[#F59E0B]/35 bg-[#0C2340]/70 hover:border-[#F59E0B] hover:bg-[#0C2340] text-white px-3.5 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Boxes size={15} strokeWidth={2} className="shrink-0 text-[#F59E0B]" />
              <span>CHECK MATERIAL AVAILABILITY</span>
            </Link>

            {/* Button 3: SEND REQUIREMENT ON WHATSAPP */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Jagdamba Profile, I'd like to inquire about steel plate / profile cutting requirements."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-[#F59E0B]/35 bg-[#0C2340]/70 hover:border-[#F59E0B] hover:bg-[#0C2340] text-white px-3.5 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <MessageCircle size={15} strokeWidth={2} className="shrink-0 text-[#F59E0B]" />
              <span>SEND ON WHATSAPP</span>
            </a>

            {/* Button 4: UPLOAD DRAWING */}
            <Link
              href="/quote#upload"
              className="flex items-center justify-center gap-2 rounded border border-[#F59E0B]/35 bg-[#0C2340]/70 hover:border-[#F59E0B] hover:bg-[#0C2340] text-white px-3.5 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Upload size={15} strokeWidth={2} className="shrink-0 text-[#F59E0B]" />
              <span>UPLOAD DRAWING</span>
            </Link>

            {/* Button 5: CONTACT SALES TEAM */}
            <a
              href={`tel:+91${company.phones.office[0]}`}
              className="flex items-center justify-center gap-2 rounded border border-[#F59E0B]/35 bg-[#0C2340]/70 hover:border-[#F59E0B] hover:bg-[#0C2340] text-white px-3.5 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <Phone size={15} strokeWidth={2} className="shrink-0 text-[#F59E0B]" />
              <span>CONTACT SALES TEAM</span>
            </a>
          </div>
        </Container>
      </div>

      {/* Full Multi-Reel Video Modal */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeVideoId="full-combined-tour"
      />
    </section>
  );
}
