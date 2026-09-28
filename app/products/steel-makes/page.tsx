import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { steelMakes } from "@/data/products";

export const metadata: Metadata = {
  title: "Steel Makes — Jindal, SAIL, JSW, Tata Steel, AM/NS India",
  description:
    "Steel plate sourced from Jindal Steel, SAIL, JSW Steel, Tata Steel and AM/NS India (ArcelorMittal Nippon Steel), plus imported / China-origin material subject to availability.",
};

export default function SteelMakesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Steel Makes"
        title="Sourced from India's Leading Steel Mills"
        subtitle="Primary domestic makes plus certified international mills, subject to grade, size, thickness and ready stockyard inventory."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Request a Quote</Button>
        </div>
      </PageHero>

      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <SectionHeading kicker="Make Availability" title="Choose your preferred mill source" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steelMakes.map((make, i) => (
              <Reveal key={make.name} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#FD6200]/50 hover:shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="relative h-14 w-full flex items-center justify-start mb-4 border-b border-slate-100 pb-3">
                      {make.logo ? (
                        <Image
                          src={make.logo}
                          alt={make.name}
                          width={150}
                          height={44}
                          className="max-h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <span className="grid h-11 px-3 place-items-center rounded-lg bg-orange-50 font-display text-xs font-bold text-[#FD6200] border border-orange-200 uppercase tracking-wider">
                          Special Import
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0A222D] group-hover:text-[#FD6200] transition-colors">
                      {make.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {make.note}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#FD6200] transition-colors">
                    <span>In-Stock &amp; Process Ready</span>
                    <span>&bull;</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
