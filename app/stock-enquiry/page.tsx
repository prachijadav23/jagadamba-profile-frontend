import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { SpecList } from "@/components/ui/Primitives";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Stock Enquiry",
  description:
    "Check availability of steel plate by grade, thickness, width, length, make and quantity — share your requirement and our team will confirm.",
};

export default function StockEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Stock Enquiry"
        title="Check Material Availability"
        subtitle="Share the grade, size and quantity you need. We'll confirm availability against current stock — no internal quantities are published on the website."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <EnquiryForm variant="stock" />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-card border border-hairline-light bg-surface-secondary p-6">
                <h3 className="font-display text-base font-bold text-ink-primary">
                  Prefer to call or WhatsApp?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Our team can confirm availability directly over phone or WhatsApp.
                </p>
                <div className="mt-5">
                  <SpecList
                    items={[
                      { label: "Office", value: company.phones.office.join(" / ") },
                      { label: "Inquiry", value: company.phones.inquiry.join(" / ") },
                      { label: "WhatsApp", value: company.whatsappDisplay },
                      { label: "Email", value: company.email },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
