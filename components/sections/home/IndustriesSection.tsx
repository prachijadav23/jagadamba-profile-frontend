"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="py-18 sm:py-24 bg-white relative">
      <Container>
        <SectionHeading
          index="07"
          kicker="Industries We Serve"
          title="Where our steel goes to work"
          subtitle="Supplying heavy engineering, power, defense, and manufacturing leaders across Gujarat and Pan-India."
        />

        <RevealStagger className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[ind.icon] ?? Icons.Factory;
            return (
              <motion.div
                key={ind.name}
                variants={staggerItem}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/4.5] overflow-hidden rounded-2xl bg-[#0A1D33] border border-[#133E87]/40 p-4 sm:p-5 flex flex-col justify-between shadow-subtle hover:border-[#FD6200]/60 hover:shadow-card-hover transition-all"
              >
                <div className="absolute inset-0 bg-technical-grid opacity-25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#133E87]/40 text-[#FD6200] border border-[#133E87]/60 group-hover:bg-[#FD6200] group-hover:text-white transition-colors">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="block h-0.5 w-6 bg-[#FD6200] mb-2 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  <h3 className="font-display text-sm sm:text-[15px] font-bold leading-snug text-white">
                    {ind.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
