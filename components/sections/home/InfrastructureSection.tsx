"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SpecList } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { capacitySpecs } from "@/data/company";

export function InfrastructureSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-18 sm:py-24 text-white border-t border-[#133E87]/40">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 lg:items-center">
          {/* Left Column: Heading, Tech Specs & Action */}
          <div className="lg:col-span-6">
            <SectionHeading
              index="05"
              kicker="Infrastructure & Capacity"
              title="Built for heavy scale, engineered for precision"
              subtitle="A 75,000 sq. ft. covered heavy processing facility built to handle both bulk raw plate stock and tight-tolerance CNC cut profiles under one roof."
              light
            />
            <Reveal delay={0.12}>
              <div className="mt-7 rounded-card border border-white/15 bg-navy-900/80 p-5 shadow-card">
                <SpecList items={capacitySpecs.slice(0, 6)} light />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Button href="/infrastructure" variant="primary" showArrow>
                  Explore Infrastructure
                </Button>
                <Button href="/machinery" variant="outline-light">
                  Machinery Specifications
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Industrial Equipment & Facility Imagery */}
          <div className="lg:col-span-6">
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                {/* 75,000 sq ft main shed */}
                <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-card border border-white/15 shadow-card">
                  <ImagePlaceholder
                    category="facility"
                    label="75,000 Sq. Ft. Covered Processing Plant & Yard"
                    className="h-full w-full"
                  />
                </div>

                {/* CNC Torch Bay */}
                <div className="aspect-square overflow-hidden rounded-card border border-white/15 shadow-card">
                  <ImagePlaceholder
                    category="cnc-profile-cutting"
                    label="CNC Multi-Torch Bay"
                    className="h-full w-full"
                    compact
                  />
                </div>

                {/* 20T Crane Handling */}
                <div className="aspect-square overflow-hidden rounded-card border border-white/15 shadow-card">
                  <ImagePlaceholder
                    category="crane-handling"
                    label="20T Heavy Overhead EOT Crane"
                    className="h-full w-full"
                    compact
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
