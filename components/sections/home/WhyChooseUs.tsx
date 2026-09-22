"use client";

import * as Icons from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { whyChooseUs } from "@/data/company";
import { cn } from "@/lib/utils";

// First and fifth items read as prominent headline tiles in the bento grid
const featured = new Set([0, 4]);

export function WhyChooseUs() {
  return (
    <section className="bg-slate-100/70 py-18 sm:py-24 relative overflow-hidden border-t border-slate-200/80">
      <Container>
        <SectionHeading
          index="03"
          kicker="Why Choose Us"
          title="Capability that shows up in every single order"
          subtitle="From 3 mm precision laser cutting to 300 mm heavy plate profile cutting, our complete facility is built to eliminate project bottlenecks."
          align="left"
        />

        <RevealStagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ??
              Icons.CheckCircle2;
            const big = featured.has(i);

            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-card border p-6 transition-all duration-250",
                  big
                    ? "bg-[#0C2340] border-[#133E87]/60 sm:col-span-2 lg:row-span-2 shadow-card"
                    : "bg-white border-slate-200 hover:border-[#133E87]/50 hover:shadow-card-hover"
                )}
              >
                {/* Thin gold accent line on hover */}
                <div
                  className={cn(
                    "absolute top-0 left-0 right-0 h-[3px] transition-all duration-250",
                    big
                      ? "bg-[#F59E0B]"
                      : "bg-transparent group-hover:bg-[#F59E0B]"
                  )}
                />

                {big && (
                  <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-30" />
                )}

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span
                      className={cn(
                        "grid h-11 w-11 place-items-center rounded-btn transition-colors",
                        big
                          ? "bg-[#F59E0B] text-navy-950 font-bold"
                          : "bg-[#FEF3C7] text-[#92400E] group-hover:bg-[#F59E0B] group-hover:text-navy-950"
                      )}
                    >
                      <Icon size={20} strokeWidth={2} />
                    </span>

                    <h3
                      className={cn(
                        "mt-5 font-display text-lg font-bold tracking-tight",
                        big ? "text-white" : "text-[#0C2340] group-hover:text-[#D97706]"
                      )}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed text-justify",
                        big ? "text-slate-200" : "text-slate-600"
                      )}
                    >
                      {item.body}
                    </p>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-white/10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
                    <span className={big ? "text-[#FBBF24]" : "text-[#D97706] group-hover:text-[#0C2340]"}>
                      Verified Standard
                    </span>
                    <span className={cn("transition-transform duration-200 group-hover:translate-x-1", big ? "text-[#FBBF24]" : "text-[#D97706]")}>&rarr;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
