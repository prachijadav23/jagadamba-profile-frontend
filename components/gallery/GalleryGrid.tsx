"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  Film,
  Camera,
  Layers,
  Sparkles,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Cpu,
  Boxes,
  Maximize2,
} from "lucide-react";
import { galleryCategories, galleryItems, GalleryCategory, GalleryItem } from "@/data/gallery";
import { videosList, fullCombinedFilm, VideoItem } from "@/data/videos";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";
import { cn } from "@/lib/utils";

type ActiveTab = "all" | "videos" | GalleryCategory;

export function GalleryGrid() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("full-combined-tour");

  // Top core videos for preview
  const featuredVideos = videosList.slice(0, 7);

  const handleOpenVideo = (id: string) => {
    setSelectedVideoId(id);
    setVideoModalOpen(true);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const stepLightbox = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + galleryItems.length) % galleryItems.length;
    setLightboxIndex(next);
  };

  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {/* 1. Simple, Clean Category Filter Bar */}
      <div className="sticky top-20 z-30 -mx-4 px-4 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer",
              activeTab === "all"
                ? "bg-[#0A222D] text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            <Layers size={14} className={activeTab === "all" ? "text-[#FD6200]" : "text-slate-500"} />
            <span>All Sections</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("videos")}
            className={cn(
              "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer",
              activeTab === "videos"
                ? "bg-[#FD6200] text-white shadow-xs"
                : "bg-orange-50 text-[#FD6200] border border-orange-200 hover:bg-orange-100"
            )}
          >
            <Film size={14} />
            <span>Videos &amp; Reels ({videosList.length})</span>
          </button>

          {galleryCategories.map((cat) => {
            const count = galleryItems.filter((i) => i.category === cat).length;
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={cn(
                  "flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer",
                  isActive
                    ? "bg-[#0A222D] text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                <span>{cat}</span>
                <span className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full",
                  isActive ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. SECTION 1: VIDEOS & PROCESS REELS */}
      {(activeTab === "all" || activeTab === "videos") && (
        <section id="section-videos" className="flex flex-col gap-6 pt-2">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Film size={12} />
                <span>Motion Media &amp; Facility Tours</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
                Plant Operations &amp; Machinery In Motion
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Watch our 300 mm CNC flame cutting, 12 kW fiber laser, 20-ton crane loading, and ultrasonic testing in action.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenVideo("full-combined-tour")}
              className="inline-flex items-center gap-2 rounded-md bg-[#FD6200] hover:bg-[#E55500] text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-all self-start sm:self-auto shrink-0"
            >
              <Play size={13} fill="currentColor" />
              <span>Watch Full Plant Tour (45s)</span>
            </button>
          </div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => handleOpenVideo(video.id)}
                className="group relative rounded-xl overflow-hidden border border-slate-200 bg-[#0A222D] shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <Image
                    src={`/images/${video.category === "cnc-profile-cutting" ? "heavy-plate-cutting" : video.category === "transport" ? "dispatch" : video.category === "ut-testing" ? "ut-testing" : video.category === "steel-yard" ? "steel-yard" : "facility"}.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#FD6200] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono font-bold text-white">
                    {video.duration}
                  </span>

                  {/* Top Badge */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0A222D]/90 backdrop-blur-xs text-[10px] font-bold text-[#FD6200] uppercase tracking-wider border border-white/10">
                    {video.badge}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-3.5 bg-[#0F303F] text-white flex-1 flex flex-col justify-between">
                  <h3 className="text-sm font-bold group-hover:text-[#FD6200] transition-colors leading-tight mb-1">
                    {video.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {video.screenText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION 2: CNC & LASER CUTTING OPERATIONS */}
      {(activeTab === "all" || activeTab === "CNC & Laser Cutting") && (
        <section id="section-cutting" className="flex flex-col gap-6 pt-2">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Cpu size={12} />
              <span>Machine Processing Operations</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
              CNC Flame &amp; 12 kW Fiber Laser Cutting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              High-definition oxy-fuel flame cutting up to 300 mm thickness, high-speed fiber laser cutting, and radial drilling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryItems
              .filter((i) => i.category === "CNC & Laser Cutting")
              .map((item) => {
                const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
                return (
                  <PhotoCard key={item.id} item={item} onOpen={() => openLightbox(globalIndex)} />
                );
              })}
          </div>
        </section>
      )}

      {/* 4. SECTION 3: STEEL STOCKYARD (2,500+ MT) */}
      {(activeTab === "all" || activeTab === "Stockyard & Plates") && (
        <section id="section-stockyard" className="flex flex-col gap-6 pt-2">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Boxes size={12} />
              <span>Certified Heavy Plate Inventory</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
              75,000 Sq. Ft. Certified Steel Plate Stockyard
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Approx. 2,500 MT ready inventory in IS 2062, Sailhard, Hardox 400, and Boiler Quality SA516 Gr 70 plates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {galleryItems
              .filter((i) => i.category === "Stockyard & Plates")
              .map((item) => {
                const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
                return (
                  <PhotoCard key={item.id} item={item} onOpen={() => openLightbox(globalIndex)} />
                );
              })}
          </div>
        </section>
      )}

      {/* 5. SECTION 4: DISPATCH, CRANES & LOGISTICS */}
      {(activeTab === "all" || activeTab === "Dispatch & Logistics") && (
        <section id="section-dispatch" className="flex flex-col gap-6 pt-2">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Truck size={12} />
              <span>Material Handling &amp; Dispatch</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
              20-Ton Overhead Cranes &amp; Pan-India Dispatch
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              5x 20-ton EOT cranes, mobile Hydra yard handling, and dedicated flatbed transport fleet for fast delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {galleryItems
              .filter((i) => i.category === "Dispatch & Logistics")
              .map((item) => {
                const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
                return (
                  <PhotoCard key={item.id} item={item} onOpen={() => openLightbox(globalIndex)} />
                );
              })}
          </div>
        </section>
      )}

      {/* 6. SECTION 5: QUALITY INSPECTION & UT TESTING */}
      {(activeTab === "all" || activeTab === "Testing & Quality UT") && (
        <section id="section-quality" className="flex flex-col gap-6 pt-2">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <ShieldCheck size={12} />
              <span>Non-Destructive Testing Lab</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
              Ultrasonic (UT) Testing &amp; Quality Verification
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Level II certified non-destructive flaw detection, digital thickness measurement, and original Mill Test Certificates (MTC).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {galleryItems
              .filter((i) => i.category === "Testing & Quality UT")
              .map((item) => {
                const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
                return (
                  <PhotoCard key={item.id} item={item} onOpen={() => openLightbox(globalIndex)} />
                );
              })}
          </div>
        </section>
      )}

      {/* 7. SECTION 6: FINISHED COMPONENTS */}
      {(activeTab === "all" || activeTab === "Finished Components") && (
        <section id="section-components" className="flex flex-col gap-6 pt-2">
          <div className="border-b border-slate-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-orange-50 text-[#FD6200] border border-orange-200 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles size={12} />
              <span>Finished Cut Profiles</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F303F]">
              Precision Cut Profiles, Rings &amp; Machine Bases
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Custom circular blanks, foundation base plates, counterweights, and machinery beds delivered ready for machining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {galleryItems
              .filter((i) => i.category === "Finished Components")
              .map((item) => {
                const globalIndex = galleryItems.findIndex((g) => g.id === item.id);
                return (
                  <PhotoCard key={item.id} item={item} onOpen={() => openLightbox(globalIndex)} />
                );
              })}
          </div>
        </section>
      )}

      {/* 8. Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={closeLightbox} />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-[#0A222D] border border-white/20 shadow-2xl text-white"
            >
              {/* Image Preview Box */}
              <div className="relative aspect-video sm:aspect-[16/10] w-full bg-black">
                <Image
                  src={galleryItems[lightboxIndex].image}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close image preview"
                  className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-black/70 hover:bg-[#FD6200] text-white transition-colors"
                >
                  <X size={18} />
                </button>

                {/* Prev / Next Buttons */}
                <button
                  type="button"
                  onClick={() => stepLightbox(-1)}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 hover:bg-[#FD6200] text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => stepLightbox(1)}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-black/60 hover:bg-[#FD6200] text-white transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Caption & Specs */}
              <div className="p-4 sm:p-5 bg-[#0F303F] border-t border-[#143B4E]">
                <div className="flex items-center justify-between gap-3 mb-1.5 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FD6200]">
                    {galleryItems[lightboxIndex].badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {lightboxIndex + 1} of {galleryItems.length}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 9. Video Player Modal */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeVideoId={selectedVideoId}
      />
    </div>
  );
}

// Reusable Photo Card Component
function PhotoCard({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="group relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Spec Badge */}
        <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded bg-[#0A222D]/90 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
          {item.badge}
        </div>

        {/* Hover Expand Icon */}
        <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#FD6200] text-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
          <Maximize2 size={14} />
        </div>
      </div>

      <div className="p-3.5 bg-white flex flex-col justify-between flex-1">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FD6200] block mb-1">
            {item.spec}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-[#0F303F] group-hover:text-[#FD6200] transition-colors leading-snug">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
