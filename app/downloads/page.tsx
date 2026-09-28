import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { Download, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { documents } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Downloads & Certifications",
  description:
    "Company profile, product brochure, ISO 9001:2015, MSME/Udyam and GST registration — vendor registration documents for Jagdamba Profile Pvt. Ltd.",
};

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads & Certifications"
        title="Vendor Registration Documents"
        subtitle="ISO, MSME/Udyam and GST documents are available for vendor onboarding, supplier evaluation and statutory verification."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[doc.icon] ?? Icons.FileText;
              return (
                <Reveal key={doc.name} delay={(i % 3) * 0.06}>
                  <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-orange-50 text-[#FD6200] border border-orange-200">
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-[#0A222D]">{doc.name}</h3>
                      {"ref" in doc && doc.ref && (
                        <p className="mt-1 text-xs text-slate-500">{doc.ref}</p>
                      )}
                    </div>
                    {doc.status === "available" ? (
                      <a
                        href={`mailto:${company.email}?subject=Request for Document: ${encodeURIComponent(doc.name)}`}
                        className="mt-5 flex w-fit items-center gap-2 rounded-lg bg-[#FD6200] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#E55500]"
                      >
                        <Download size={14} />
                        Request Copy
                      </a>
                    ) : (
                      <span className="mt-5 flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-500">
                        <Clock size={14} />
                        On Request
                      </span>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-14 rounded-card border border-hairline-orange bg-orange-100/40 p-6 sm:p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.05em] text-orange-800">
              Registration Reference
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-ink-muted">ISO 9001:2015</p>
                <p className="mt-1 text-sm font-semibold text-ink-primary">
                  Valid until {company.registrations.isoValidUntil}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">MSME / Udyam</p>
                <p className="mt-1 text-sm font-semibold text-[#0A222D]">{company.registrations.udyam}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500">GST</p>
                <p className="mt-1 text-sm font-semibold text-[#0A222D]">GSTIN {company.registrations.gst}</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Official certified documentation including ISO certifications, MSME registration records, and GST certificates are released upon request during formal vendor registration or RFQ evaluation. ISO validity is governed by periodic surveillance audit terms.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeading kicker="Vendor Support" title="Need custom compliance or documentation?" />
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Direct all vendor registration questionnaires and audit requests to{" "}
              <a href={`mailto:${company.email}`} className="font-semibold text-[#FD6200] underline">
                {company.email}
              </a>
              . Our compliance desk responds within 24 business hours.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
