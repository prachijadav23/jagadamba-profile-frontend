"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter((item) => active === "All" || item.category === active);

  const openAt = (id: string) => {
    const idx = filtered.findIndex((f) => f.id === id);
    setLightboxIndex(idx);
  };

  const step = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter gallery by category"
        className="flex flex-wrap gap-2.5"
      >
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors",
              active === cat
                ? "border-[#0C2340] bg-[#0C2340] text-white"
                : "border-hairline-medium bg-white text-ink-secondary hover:border-[#133E87]/40"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openAt(item.id)}
              className="group relative aspect-square overflow-hidden rounded-card text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#133E87]"
            >
              <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} className="h-full w-full">
                <ImagePlaceholder category={item.imageCategory} className="h-full w-full" compact />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#0C2340] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand size={14} />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-3 text-[12.5px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.title}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-dark-950/95 p-5"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
            >
              <X size={20} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white sm:left-8"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white sm:right-8"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={filtered[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-card"
            >
              <ImagePlaceholder category={filtered[lightboxIndex].imageCategory} label={filtered[lightboxIndex].title} className="h-full w-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
