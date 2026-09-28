"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const facilityTourItems = [
  {
    title: "COVERED SHED & CNC BAY",
    spec: "26,000 Sq. Ft. Facility",
    image: "/images/facility.jpg",
    href: "/machinery",
  },
  {
    title: "12 KW LASER LINE",
    spec: "Fiber Laser Cutting",
    image: "/images/laser-cutting.jpg",
    href: "/services/laser-cutting",
  },
  {
    title: "OPEN PLATE YARD",
    spec: "75,000 Sq. Ft. Stockyard",
    image: "/images/steel-yard.jpg",
    href: "/products/steel-plates",
  },
  {
    title: "LOADING & DISPATCH",
    spec: "Hydra & Fleet Transit",
    image: "/images/dispatch.jpg",
    href: "/contact",
  },
];

export function FeaturedProcessing() {
  const [activeDot, setActiveDot] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-y border-slate-200/80 relative">
      <Container>
        {/* Top Header with Carousel Arrows (Matching Palace Mockup Section 3) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            {/* Red Eyebrow */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] mb-2.5">
              <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
              <span>PLANT VISUALS</span>
            </div>
            {/* Uppercase Bold Headline with Period */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[40px] font-extrabold uppercase tracking-tight text-[#0F172A] leading-tight">
              TAKE A TOUR ACROSS OUR PLANT &amp; INFRASTRUCTURE.
            </h2>
          </div>

          {/* Carousel Arrow Controls (Matching Palace Mockup Top Right) */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveDot((prev) => (prev > 0 ? prev - 1 : 3))}
              aria-label="Previous facility item"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-[#FD6200] hover:text-[#FD6200] transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => setActiveDot((prev) => (prev < 3 ? prev + 1 : 0))}
              aria-label="Next facility item"
              className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-[#FD6200] hover:text-[#FD6200] transition-colors shadow-xs active:scale-95 cursor-pointer"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </div>

        {/* 4 Vertical Rounded Image Cards (Matching Palace Mockup 4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {facilityTourItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={item.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300"
              >
                {/* Full Bleed Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                />

                {/* Dark Gradient Overlay at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Card Text Content Positioned at Bottom (Matching Palace Mockup) */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-white flex flex-col justify-end">
                  {/* Subtle Subtitle / Count text */}
                  <span className="text-[11px] font-semibold text-slate-300 tracking-wide block">
                    {item.spec}
                  </span>

                  {/* Bold Uppercase Location/Name */}
                  <h3 className="mt-1 font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-white group-hover:text-[#FD6200] transition-colors leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots at Bottom with Active Dot in Red (Matching Palace Mockup) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveDot(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-200 cursor-pointer ${
                activeDot === idx
                  ? "h-2 w-6 rounded-full bg-[#FD6200]"
                  : "h-2 w-2 rounded-full bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
