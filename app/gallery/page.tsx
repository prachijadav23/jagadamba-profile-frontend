import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Multimedia Gallery & Plant Tour",
  description:
    "Explore our 75,000 sq.ft. facility, 300 mm CNC cutting, 2,500 MT ready stockyard, and 20-ton crane handling through official marketing videos and high-resolution photography.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Multimedia Gallery"
        title="Facility Tour, Marketing Videos & Photography"
        subtitle="Experience our 75,000 sq.ft. facility, 300 mm CNC cutting operations, multi-grade plate yard, and pan-India dispatch through official video reels and high-resolution plant imagery."
      />
      <section className="py-14 sm:py-20 bg-white min-h-[60vh]">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
