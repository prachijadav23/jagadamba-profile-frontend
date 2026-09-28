"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const row1Mills = [
  { name: "AM/NS India", logo: "/mills/amns.svg", label: "ArcelorMittal Nippon Steel India" },
  { name: "Jindal Steel & Power", logo: "/mills/jindal.svg", label: "Jindal Steel & Power Limited" },
  { name: "SAIL", logo: "/mills/sail.svg", label: "Steel Authority of India Limited" },
  { name: "JSW Steel", logo: "/mills/jsw.svg", label: "JSW Steel Limited" },
  { name: "Tata Steel", logo: "/mills/tata.svg", label: "Tata Steel Limited" },
];

const row2Mills = [
  { name: "SSAB Hardox", logo: "/mills/ssab.svg", label: "SSAB Swedish Steel / Hardox" },
  { name: "Uttam Galva", logo: "/mills/uttam.svg", label: "Uttam Galva Steels" },
  { name: "NISCO", logo: "/mills/nisco.svg", label: "National Iron & Steel Co." },
  { name: "POSCO", logo: "/mills/posco.svg", label: "POSCO Steel" },
  { name: "Essar Steel", logo: "/mills/essar.svg", label: "Essar Steel" },
];

export function OurResources() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-16 sm:py-20 select-none">
      <Container>
        {/* Header matching reference mockup */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] mb-2">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>STEEL FROM LEADING MILLS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0C2340] tracking-tight">
              Our Resources
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
              Materials from leading Indian and international steel manufacturers, with applicable Mill Test Certificates and traceability documents.
            </p>
          </div>

          <Link
            href="/products/steel-makes"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FD6200] hover:text-[#E55500] transition-colors group shrink-0"
          >
            <span>All Material Sources</span>
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>

      {/* 2-Row Infinite Logo Marquee Strip */}
      <div className="flex flex-col gap-4 sm:gap-5" aria-label="Steel Mill Partner Logos">
        {/* Row 1: Marquee moving left */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex w-max gap-3 sm:gap-4 py-1"
          >
            {[...row1Mills, ...row1Mills, ...row1Mills, ...row1Mills].map((mill, idx) => (
              <div
                key={`${mill.name}-${idx}`}
                title={mill.label}
                className="group flex h-[88px] sm:h-[100px] w-[160px] sm:w-[190px] shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xs hover:border-[#FD6200]/60 hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-10 sm:h-12 w-full flex items-center justify-center">
                  <Image
                    src={mill.logo}
                    alt={mill.name}
                    width={160}
                    height={48}
                    className="max-h-10 sm:max-h-11 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Marquee moving right */}
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex w-max gap-3 sm:gap-4 py-1"
          >
            {[...row2Mills, ...row2Mills, ...row2Mills, ...row2Mills].map((mill, idx) => (
              <div
                key={`${mill.name}-${idx}`}
                title={mill.label}
                className="group flex h-[88px] sm:h-[100px] w-[160px] sm:w-[190px] shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-3 sm:p-4 shadow-xs hover:border-[#FD6200]/60 hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-10 sm:h-12 w-full flex items-center justify-center">
                  <Image
                    src={mill.logo}
                    alt={mill.name}
                    width={160}
                    height={48}
                    className="max-h-10 sm:max-h-11 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
