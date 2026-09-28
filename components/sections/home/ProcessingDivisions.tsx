"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessingDivisions() {
  const divisions = [
    {
      title: "CNC Heavy Flame Cutting Bay",
      tag: "Up to 300 mm Plates",
      desc: "Multi-torch oxy-fuel cutting for heavy machine beds, press frames, and earthmoving components.",
      image: "/images/cnc-profile-cutting.jpg",
      href: "/services/cnc-profile-cutting",
    },
    {
      title: "12 kW High-Speed Laser Bay",
      tag: "±0.1 mm Precision",
      desc: "Nitrogen & oxygen fiber laser cutting with mirror-finish edge quality for sheets and enclosures.",
      image: "/images/laser-cutting.jpg",
      href: "/services/laser-cutting",
    },
    {
      title: "75,000 Sq. Ft. Steel Stockyard",
      tag: "2,500+ MT In-Stock",
      desc: "Ready inventory in IS 2062, Sailhard, Hardox, and Boiler Quality plates for immediate cutting.",
      image: "/images/steel-yard.jpg",
      href: "/grades",
    },
    {
      title: "In-House Testing & UT Lab",
      tag: "100% UT Level II",
      desc: "Non-destructive ultrasonic testing, hardness verification, and complete Mill Test Certificates.",
      image: "/images/ut-testing.jpg",
      href: "/quality",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
      <Container>
        {/* Centered Dual-Color Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-[#FD6200]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FD6200]">
                Specialized Divisions
              </span>
              <span className="w-6 h-0.5 bg-[#FD6200]" />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.18] mb-4">
              <span className="text-[#FD6200]">Specialized</span>{" "}
              <span className="text-[#0F303F]">processing divisions</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Purpose-built processing bays equipped to handle from delicate 0.5 mm sheet metal up to 300 mm structural steel plates.
            </p>
          </Reveal>
        </div>

        {/* 4 Rounded Industrial Cards with Dark Petrol Navy Caption Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Link
                href={item.href}
                className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-slate-200 hover:-translate-y-1 h-full flex flex-col"
              >
                {/* Card Top Image */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A222D]/90 backdrop-blur-xs text-white text-[11px] font-extrabold px-2.5 py-1 rounded border border-white/10 uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Card Bottom Solid Petrol Navy Caption Bar (#0F303F) */}
                <div className="bg-[#0F303F] text-white p-5 grow flex flex-col justify-between transition-colors group-hover:bg-[#0A222D]">
                  <div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FD6200] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] pt-3 border-t border-white/10">
                    <span>Explore Bay</span>
                    <ArrowRight
                      size={13}
                      strokeWidth={2.4}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
