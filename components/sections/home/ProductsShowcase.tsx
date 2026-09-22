"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const products = [
  {
    title: "Prime Steel Plates Stock",
    href: "/products/steel-plates",
    desc: "3 mm to 300 mm ready stock across carbon, structural, boiler quality and alloy grades with complete MTC traceability.",
    category: "steel-stock",
    specs: ["Thickness: 3 mm – 300 mm", "Widths: Up to 3,500 mm", "Lengths: Up to 14,000 mm"],
  },
  {
    title: "Authorized Primary Makes",
    href: "/products/steel-makes",
    desc: "Direct stockist & supplier for Jindal, SAIL, JSW, Tata Steel, AM/NS India, plus tested imported European plates.",
    category: "steel-yard",
    specs: ["Jindal Steel & Power", "SAIL / Tata / JSW / AM/NS", "Complete Heat Test Certs"],
  },
  {
    title: "Material Categories & Grades",
    href: "/products/material-categories",
    desc: "Boiler Quality (SA516 Gr 60/70), High-Tensile (S355J2+N), Structural (IS 2062 E250/E350), Alloy & Wear Resistant plates.",
    category: "components",
    specs: ["Boiler & Pressure Vessel", "High Yield Structural", "Abrasion Resistant Hardox/Raex"],
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-18 sm:py-24 bg-white relative">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="04"
            kicker="Stock & Products"
            title="Prime steel plate, ready to move"
            subtitle="Approx. 2,500 MT of ready yard stock available for immediate profile cutting, drilling, and expedited dispatch."
            className="max-w-xl"
          />
          <Reveal>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-btn border border-[#133E87]/30 bg-[#EBF2FA] px-4 py-2 text-sm font-bold text-[#0C2340] transition-colors hover:bg-[#0C2340] hover:text-white"
            >
              <span>View All Products</span>
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={p.href}
                className="group relative flex flex-col h-full overflow-hidden rounded-card border border-slate-200 bg-white p-3 shadow-subtle transition-all duration-250 hover:border-[#133E87]/50 hover:shadow-card-hover"
              >
                {/* Thin gold accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-transparent group-hover:bg-[#F59E0B] transition-colors duration-200 z-30" />

                <div className="relative aspect-[16/10] overflow-hidden rounded-btn">
                  <ImagePlaceholder category={p.category} label={p.title} className="h-full w-full" />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950/70 to-transparent pointer-events-none" />
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-btn bg-white/95 text-[#0C2340] shadow-sm transition-all duration-250 ease-out group-hover:bg-[#F59E0B] group-hover:text-navy-950">
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </span>
                </div>

                <div className="p-3.5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-primary transition-colors group-hover:text-[#D97706]">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-600 text-justify">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-col gap-1.5">
                    {p.specs.map((spec) => (
                      <span key={spec} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={13} className="text-[#F59E0B] shrink-0" />
                        <span>{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
