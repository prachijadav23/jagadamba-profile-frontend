"use client";

import { Award, Clock, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ThreeFeatureColumns() {
  const features = [
    {
      icon: Award,
      title: "Experience And Expertise",
      description:
        "Over two decades of precision profile cutting know-how, skilled machine operators, and strict adherence to industrial engineering tolerances.",
      href: "/about",
      linkText: "Our Story",
    },
    {
      icon: Clock,
      title: "Reliability And Timeliness",
      description:
        "With 2,500+ MT of prime certified steel always in stock, we eliminate raw material delays and deliver cut profiles exactly when promised.",
      href: "/services",
      linkText: "Processing Speed",
    },
    {
      icon: Layers,
      title: "Comprehensive Services",
      description:
        "Everything under one roof: multi-torch flame cutting up to 300 mm, 12 kW fiber laser, radial drilling, beveling, and certified ultrasonic UT testing.",
      href: "/machinery",
      linkText: "View Equipment",
    },
  ];

  return (
    <section className="py-14 sm:py-16 bg-slate-50 border-y border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow group flex flex-col h-full">
                  {/* Outline Orange Icon Container */}
                  <div className="w-14 h-14 rounded-lg bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FD6200] mb-6 group-hover:bg-[#FD6200] group-hover:text-white transition-colors duration-200">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F303F] mb-3 group-hover:text-[#FD6200] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FD6200] hover:text-[#0F303F] transition-colors pt-4 border-t border-slate-100"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight size={13} strokeWidth={2.4} />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
