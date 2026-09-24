"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function IndustrialOverview() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: AeroLogix Text Content */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-6 h-0.5 bg-[#FF5E3A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5E3A]">
                  Who We Are
                </span>
              </div>
            </Reveal>

            {/* Dual-Color Heading matching AeroLogix */}
            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.18] mb-6">
                <span className="text-[#FF5E3A]">Providing full range</span>{" "}
                <span className="text-[#0F303F]">of steel processing</span>
              </h2>
            </Reveal>

            {/* Two Humanized Paragraphs */}
            <Reveal delay={0.12}>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                Jagdamba Profile Pvt. Ltd. has been at the forefront of heavy steel profile cutting and fabrication since 2002. From our 75,000 sq. ft. modern facility in Vadodara, Gujarat, we supply precision-cut steel components to machine builders, infrastructure projects, and heavy engineering leaders across India.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Whether you need high-volume 12 kW fiber laser sheets or multi-torch CNC flame cutting up to 300 mm thick plates, we stock prime certified steel and cut it to your exact engineering tolerances — delivered on time, every time.
              </p>
            </Reveal>

            {/* Key Capabilities List */}
            <Reveal delay={0.22}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F303F]">
                  <CheckCircle2 size={16} className="text-[#FF5E3A] shrink-0" />
                  <span>Up to 300 mm Flame Cutting</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F303F]">
                  <CheckCircle2 size={16} className="text-[#FF5E3A] shrink-0" />
                  <span>12 kW Fiber Laser Precision</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F303F]">
                  <CheckCircle2 size={16} className="text-[#FF5E3A] shrink-0" />
                  <span>2,500+ MT Certified Inventory</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F303F]">
                  <CheckCircle2 size={16} className="text-[#FF5E3A] shrink-0" />
                  <span>In-House Ultrasonic UT Lab</span>
                </div>
              </div>
            </Reveal>

            {/* AeroLogix Action Row: Discover More Button + Call Anytime Widget */}
            <Reveal delay={0.26}>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#FF5E3A] hover:bg-[#E54D28] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 active:scale-95"
                >
                  <span>Discover More</span>
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>

                {/* Call Anytime Widget */}
                <a
                  href="tel:+919824917250"
                  className="flex items-center gap-3 group text-left"
                >
                  <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center text-[#FF5E3A] group-hover:bg-[#FF5E3A] group-hover:text-white transition-colors duration-200">
                    <Phone size={18} strokeWidth={2.4} />
                  </div>
                  <div className="leading-tight">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Call Anytime
                    </span>
                    <span className="block text-sm sm:text-base font-extrabold text-[#0F303F] group-hover:text-[#FF5E3A] transition-colors">
                      +91 98249 17250
                    </span>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: AeroLogix Overlapping Double-Image Layout */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal delay={0.15}>
              <div className="relative pt-6 sm:pt-8 pr-4 sm:pr-8">
                {/* Dot Grid Pattern in Background */}
                <div className="absolute -top-4 -right-4 w-40 h-40 bg-radial-dots opacity-40 pointer-events-none" />

                {/* Primary Large Image */}
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/images/facility.jpg"
                    alt="Jagdamba Vadodara Steel Processing Facility"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Overlapping Secondary Image */}
                <div className="relative -mt-20 sm:-mt-24 ml-auto w-3/5 sm:w-1/2 h-44 sm:h-56 rounded-xl overflow-hidden shadow-2xl border-4 border-white z-10">
                  <Image
                    src="/images/steel-yard.jpg"
                    alt="Jagdamba Stockyard with 2500+ MT Certified Steel"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Stat Card: 22+ Years Of Experience */}
                <div className="absolute top-12 -left-4 sm:-left-8 z-20 bg-white rounded-xl p-5 shadow-2xl border border-slate-100 max-w-[210px]">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5E3A] leading-none mb-1">
                    22+
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0F303F] leading-snug">
                    Years Of Experience
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    In Precision Heavy Steel Processing
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
