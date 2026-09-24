"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageSquare, FileUp, Clock, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function IndustrialCTA() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <Container>
        <Reveal>
          <div className="relative rounded-2xl bg-gradient-to-br from-[#0A222D] via-[#0F303F] to-[#0A222D] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-[#143B4E]">
            {/* Subtle Industrial Grid Background */}
            <div className="absolute inset-0 bg-technical-grid opacity-15 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#FF5E3A]/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF5E3A]/15 border border-[#FF5E3A]/30 text-xs font-bold uppercase tracking-wider text-[#FF5E3A] mb-5">
                <FileUp size={14} />
                <span>Fast Engineering Quote</span>
              </div>

              {/* Dual-Color Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.14] mb-5">
                <span className="text-white">Need Precision Cut Steel?</span>{" "}
                <span className="text-[#FF5E3A]">Send Us Your Drawing</span>
              </h2>

              {/* Humanized Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                Send us your CAD files (DXF, DWG, STEP) or PDF sketches with required steel grade and thickness. Our engineering team calculates optimal plate nesting and replies with an itemized quote within 2 hours.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#FF5E3A] shrink-0" />
                  <span>2-Hour Quote Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#FF5E3A] shrink-0" />
                  <span>Free CAD Nesting Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-[#FF5E3A] shrink-0" />
                  <span>Direct Plant / Site Dispatch</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF5E3A] hover:bg-[#E54D28] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-200 active:scale-95"
                >
                  <span>Upload Drawing For Quote</span>
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>

                <a
                  href="https://wa.me/919824917250?text=Hello%20Jagdamba%20Profile,%20I%20have%20a%20steel%20cutting%20drawing%20to%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-200 active:scale-95"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Your Drawing</span>
                </a>

                <a
                  href="tel:+919824917250"
                  className="inline-flex items-center gap-2.5 px-4 py-3 rounded-md bg-white/10 hover:bg-white/15 text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <Phone size={14} className="text-[#FF5E3A]" />
                  <span>+91 98249 17250</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
