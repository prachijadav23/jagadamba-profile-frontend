"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Upload,
  Search,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";
import { company } from "@/data/company";

/* ── Animation variants ──────────────────────────────────────────────── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ══════════════════════════════════════════════════════════════════════
   INDUSTRIAL HERO — Company Name + Tagline + Services + 4 CTAs
   ══════════════════════════════════════════════════════════════════════ */
export function IndustrialHero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax on background */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <>
      <section
        ref={sectionRef}
        className="group relative min-h-[100svh] flex items-center bg-[#0A222D] text-white overflow-hidden"
      >
        {/* ── Background Image with Parallax ────────────────────────── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div
            className="absolute inset-0"
            style={{ y: bgY, scale: bgScale }}
          >
            <Image
              src="/images/facility.jpg"
              alt="Jagdamba Profile steel processing facility"
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>

          {/* Dark overlay — heavier on left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A222D]/[0.92] via-[#0A222D]/[0.78] to-[#0A222D]/[0.50]" />
          {/* Bottom gradient for blending into the next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A222D]/40 via-transparent to-[#0A222D]/80" />
        </div>

        {/* Subtle ember sparks */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <span className="absolute left-[15%] bottom-20 w-1.5 h-1.5 rounded-full bg-[#FD6200] animate-ember-1" />
          <span className="absolute left-[45%] bottom-14 w-2 h-2 rounded-full bg-orange-400 animate-ember-2" />
          <span className="absolute left-[70%] bottom-28 w-1.5 h-1.5 rounded-full bg-[#FD6200] animate-ember-3" />
          <span className="absolute left-[90%] bottom-18 w-2 h-2 rounded-full bg-orange-300 animate-ember-4" />
        </div>

        {/* ── Main Content ──────────────────────────────────────────── */}
        <Container className="relative z-10 pt-[calc(var(--nav-height)+48px)] sm:pt-[calc(var(--nav-height)+72px)] pb-16 sm:pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            {/* ── Company Name — Big Bold Headline ──────────────────── */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[40px] sm:text-6xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tight leading-[1.05] mb-6 sm:mb-8"
            >
              <span className="text-white">Jagdamba </span>
              <span className="animate-molten bg-gradient-to-r from-[#FD6200] via-[#FFA466] to-[#FD6200] text-transparent bg-clip-text">
                Profile
              </span>
              <br />
              <span className="text-white">Pvt. Ltd.</span>
            </motion.h1>

            {/* ── Tagline ───────────────────────────────────────────── */}
            <motion.p
              variants={fadeUp}
              className="font-display text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.08em] mb-4 sm:mb-5"
            >
              <span className="text-white">Where Steel Shapes </span>
              <span className="text-[#FD6200]">
                Stronger Industries.
              </span>
            </motion.p>

            {/* ── Services List ──────────────────────────────────────── */}
            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-8 sm:mb-10 max-w-2xl"
            >
              Steel Plates | CNC Profile Cutting | Laser Cutting | CNC Drilling
              | Ultrasonic Testing | Complete Steel Processing Solutions
            </motion.p>

            {/* ── 4 CTA Buttons ─────────────────────────────────────── */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3"
            >
              {/* 1. Get a Quote — Primary Orange */}
              <Link
                href="/quote"
                className="group/btn relative inline-flex items-center justify-center gap-2 rounded-md bg-[#FD6200] hover:bg-[#E55500] text-white px-5 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#FD6200]/25 hover:shadow-[#FD6200]/40 transition-all duration-300 active:scale-[0.97] overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative">Get a Quote</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.4}
                  className="relative transition-transform duration-300 group-hover/btn:translate-x-1"
                />
              </Link>

              {/* 2. Upload Drawing — Dark / outline */}
              <Link
                href="/quote#upload"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0A222D] hover:bg-[#0F303F] text-white border border-white/25 hover:border-[#FD6200]/60 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Upload size={14} strokeWidth={2.4} />
                <span>Upload Drawing</span>
              </Link>

              {/* 3. Check Material — Dark / outline */}
              <Link
                href="/stock-enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0A222D] hover:bg-[#0F303F] text-white border border-white/25 hover:border-[#FD6200]/60 px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
              >
                <Search size={14} strokeWidth={2.4} />
                <span>Check Material</span>
              </Link>

              {/* 4. WhatsApp Sales — Green */}
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hello Jagdamba Profile, I want to inquire about steel requirements."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1EBB5A] text-white px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/35 transition-all duration-300 active:scale-[0.97]"
              >
                <MessageCircle size={14} strokeWidth={2.4} />
                <span>WhatsApp Sales</span>
              </a>
            </motion.div>
          </motion.div>
        </Container>

        {/* ── Scroll Indicator ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={18} className="text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Video Player Modal ──────────────────────────────────────── */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeVideoId="full-combined-tour"
      />
    </>
  );
}
