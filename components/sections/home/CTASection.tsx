"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { MessageCircle, Phone, FileText } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0C2340] via-[#0A1D33] to-[#06121E] py-18 sm:py-24 text-white border-t border-[#133E87]/40">
      {/* Subtle engineering grid & ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#133E87]/25 blur-3xl" />
      <div className="pointer-events-none absolute -top-16 -left-16 h-80 w-80 rounded-full bg-[#38BDF8]/15 blur-3xl" />

      <Container className="relative z-10 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded bg-[#0C2340]/90 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#FBBF24] border border-[#F59E0B]/40 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span>Ready for Immediate Quotation &amp; Dispatch</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-h2-mobile sm:text-h2 font-extrabold text-white">
            Need Precision Steel Processing?
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 text-justify">
            Tell us what you need. Our team will help you with material availability,
            cutting, drilling and processing requirements from our 75,000 sq. ft. Vadodara plant.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
            <Button href="/quote" variant="primary" size="lg" showArrow>
              Get a Quote
            </Button>
            <Button
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                "Hello Jagdamba Profile, I'd like to get a quote for steel plate / profile cutting."
              )}`}
              variant="outline-light"
              size="lg"
              target="_blank"
            >
              Send on WhatsApp
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
