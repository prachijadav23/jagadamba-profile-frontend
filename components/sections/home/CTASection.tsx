"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FileUp, FileText, PackageSearch, MessageCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section className="bg-white py-16 sm:py-24 relative border-t border-slate-200">
      <Container>
        {/* Upper Card: Have a Drawing? (Matching finalj-wheat.vercel.app) */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 lg:p-16 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] mb-3">
                <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
                <span>PROJECT ENQUIRY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
                HAVE A DRAWING?
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 max-w-xl text-left">
                Share grade, plate thickness and CAD drawings. The Vadodara technical team replies promptly with stock availability, cutting tolerances, and dispatch scheduling.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/quote#upload"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FD6200] hover:bg-[#E55500] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-red-glow transition-all duration-200 active:scale-95"
              >
                <FileUp size={16} />
                <span>Upload Drawing</span>
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-100 text-[#0F172A] border border-slate-300 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs hover:border-[#FD6200] transition-all duration-200 active:scale-95"
              >
                <span>Get a Quote</span>
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hello Jagdamba Profile, I want to send a steel drawing requirement."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xs transition-all duration-200 active:scale-95"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Sales</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower 3 Clear Paths (Matching finalj-wheat.vercel.app "Ready When Your Project Is") */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] mb-2">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>NEXT STEP</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#0F172A]">
              READY WHEN YOUR PROJECT IS
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Three clear channels — quote, stock check, or WhatsApp — pick what fits your timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Option 1: Request a Quote (Palace Red Card) */}
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Link
                href="/quote"
                className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-[#FD6200] text-white shadow-md hover:shadow-red-glow transition-all"
              >
                <div>
                  <FileText size={24} className="mb-4 text-white/90" />
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide">
                    Request a Quote
                  </h4>
                  <p className="mt-2 text-xs text-white/90 leading-relaxed text-left">
                    Send drawings, grade &amp; quantity for a fast commercial response with complete MTC support.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span>Start Quote</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>

            {/* Option 2: Check Stock */}
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <Link
                href="/products/steel-plates"
                className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 text-[#0F172A] shadow-xs hover:border-[#FD6200] transition-all"
              >
                <div>
                  <PackageSearch size={24} className="mb-4 text-[#FD6200]" />
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide">
                    Check Material Stock
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
                    Ask availability for plates, grades and processing slots at our 75,000 sq.ft. Vadodara yard.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#FD6200]">
                  <span>View Plate Stock</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            </motion.div>

            {/* Option 3: WhatsApp Sales */}
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  "Hello Jagdamba Profile, I want to inquire about urgent steel plate cutting."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 text-[#0F172A] shadow-xs hover:bg-[#25D366]/15 hover:border-[#25D366] transition-all"
              >
                <div>
                  <MessageCircle size={24} className="mb-4 text-[#25D366]" />
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-[#0D6832]">
                    WhatsApp Sales
                  </h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed text-left">
                    Chat directly with our technical team for immediate project support and urgent dispatches.
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#25D366]/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0D6832]">
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
