"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Play,
  Film,
  Camera,
  Layers,
  Volume2,
  Subtitles,
  Globe2,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Expand,
  CheckCircle2,
} from "lucide-react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { videosList, fullCombinedFilm } from "@/data/videos";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";
import { cn } from "@/lib/utils";

type MediaTab = "all" | "videos" | "photos";

export function GalleryGrid() {
  const [activeMediaTab, setActiveMediaTab] = useState<MediaTab>("all");
  const [activePhotoCat, setActivePhotoCat] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("full-combined-tour");

  // Video language state for corporate film & cards
  const [videoLang, setVideoLang] = useState<"en" | "gu" | "hi">("en");

  const capabilityReels = videosList.filter((v) => !v.isFullFilm);

  const filteredPhotos = galleryItems.filter(
    (item) => activePhotoCat === "All" || item.category === activePhotoCat
  );

  const handleOpenVideo = (id: string) => {
    setSelectedVideoId(id);
    setVideoModalOpen(true);
  };

  const openLightbox = (id: string) => {
    const idx = filteredPhotos.findIndex((f) => f.id === id);
    setLightboxIndex(idx);
  };

  const stepLightbox = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filteredPhotos.length) % filteredPhotos.length;
    setLightboxIndex(next);
  };

  const corporateFilmDescriptions = {
    en: "Experience all 12 manufacturing capabilities in a single continuous 45-second documentary tour: 300 mm CNC plate cutting sparks, 2,500 MT ready stockyard, 20-ton crane handling, ultrasonic UT flaw testing, and pan-India dispatch.",
    gu: "જગદંબા પ્રોફાઇલ વડોદરા પ્લાન્ટની સંપૂર્ણ ૪૫-સેકન્ડની કોર્પોરેટ ટૂર: ૩૦૦ mm હેવી પ્લેટ કટિંગ, ૭૫,૦૦૦ સ્ક્વેર ફીટ યાર્ડ, ૨૦ ટન ક્રેન હેન્ડલિંગ, અલ્ટ્રાસોનિક UT ટેસ્ટિંગ અને સમગ્ર ભારતમાં ઝડપી ડિસ્પેચ.",
    hi: "जगदम्बा प्रोफाइल वडोदरा प्लांट का 45 सेकंड का संपूर्ण कॉर्पोरेट टूर: 300 mm हैवी प्लेट कटिंग, 75,000 वर्ग फीट यार्ड, 20 टन क्रेन हैंडलिंग, अल्ट्रासोनिक UT टेस्टिंग और पूरे भारत में त्वरित डिस्पैच।",
  };

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Top Media Tabs (All Media, Marketing Videos, Plant Photography) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div className="inline-flex rounded-xl bg-slate-100 p-1.5 border border-slate-200/80 shadow-inner">
          <button
            type="button"
            onClick={() => setActiveMediaTab("all")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer",
              activeMediaTab === "all"
                ? "bg-[#0C2340] text-white shadow-sm"
                : "text-slate-600 hover:text-[#0C2340]"
            )}
          >
            <Layers size={15} />
            <span>All Media</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMediaTab("videos")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer",
              activeMediaTab === "videos"
                ? "bg-[#e52229] text-white shadow-sm"
                : "text-slate-600 hover:text-[#e52229]"
            )}
          >
            <Film size={15} />
            <span>Marketing Videos (13)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMediaTab("photos")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer",
              activeMediaTab === "photos"
                ? "bg-[#0C2340] text-white shadow-sm"
                : "text-slate-600 hover:text-[#0C2340]"
            )}
          >
            <Camera size={15} />
            <span>Plant Photos (14)</span>
          </button>
        </div>

        {/* Language Selector for Video Reels */}
        {(activeMediaTab === "all" || activeMediaTab === "videos") && (
          <div className="inline-flex items-center gap-1.5 rounded-xl bg-white p-1.5 border border-slate-200 shadow-sm text-xs">
            <span className="text-[11px] font-bold text-slate-500 uppercase px-2 flex items-center gap-1">
              <Globe2 size={13} className="text-[#e52229]" />
              <span className="hidden sm:inline">Audio Language:</span>
            </span>
            <button
              type="button"
              onClick={() => setVideoLang("en")}
              className={cn(
                "px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer",
                videoLang === "en"
                  ? "bg-[#0C2340] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0C2340]"
              )}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setVideoLang("gu")}
              className={cn(
                "px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer",
                videoLang === "gu"
                  ? "bg-[#0C2340] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0C2340]"
              )}
            >
              ગુજરાતી
            </button>
            <button
              type="button"
              onClick={() => setVideoLang("hi")}
              className={cn(
                "px-2.5 py-1 rounded-md font-bold transition-all cursor-pointer",
                videoLang === "hi"
                  ? "bg-[#0C2340] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#0C2340]"
              )}
            >
              हिन्दी
            </button>
          </div>
        )}
      </div>

      {/* SECTION 1: MARKETING VIDEOS & CORPORATE FILM SHOWCASE */}
      {(activeMediaTab === "all" || activeMediaTab === "videos") && (
        <section className="flex flex-col gap-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e52229] mb-2">
                <Film size={13} />
                <span>Executive Video Showcase</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0C2340]">
                Official Corporate Film &amp; Operations In Motion
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl">
                Watch our 300 mm cutting, 75,000 sq.ft. stockyard, 20-ton crane handling, and ultrasonic UT flaw testing through official high-definition marketing videos.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleOpenVideo("full-combined-tour")}
              className="inline-flex items-center gap-2 rounded-full bg-[#e52229] hover:bg-[#c81920] text-white px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm hover:shadow-red-glow transition-all cursor-pointer self-start sm:self-auto shrink-0"
            >
              <Play size={15} fill="currentColor" />
              <span>Watch Full Film (45s)</span>
            </button>
          </div>

          {/* Featured In-Page HTML5 Video Player */}
          <div className="rounded-3xl border border-slate-200/90 bg-[#0A1D33] overflow-hidden shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Native HTML5 Video Player (Left 7 Cols) */}
              <div className="lg:col-span-7 bg-black relative aspect-video flex items-center justify-center">
                <video
                  key={`hero-film-${videoLang}`}
                  src={
                    videoLang === "gu"
                      ? "/videos/full-combined-tour.mp4"
                      : videoLang === "hi"
                      ? "/videos/full-combined-tour_hi.mp4"
                      : "/videos/full-combined-tour_en.mp4"
                  }
                  poster="/images/factory-hero.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  Your browser does not support HTML5 video.
                </video>

                {/* Corner Branding Tag */}
                <div className="absolute top-3 left-3 pointer-events-none z-10">
                  <span className="inline-flex items-center gap-2 bg-[#0A1D33]/90 backdrop-blur-md border border-[#e52229]/60 px-3 py-1 rounded-md text-[11px] font-bold text-white uppercase">
                    <span className="h-2 w-2 rounded-full bg-[#e52229] animate-ping" />
                    <span>Official 45s Corporate Film</span>
                  </span>
                </div>
              </div>

              {/* Video Details & Multilingual Audio Controls (Right 5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#0A1D33] to-[#06121E]">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-400">
                    Jagdamba Profile Pvt. Ltd. &bull; Vadodara Plant
                  </span>
                  <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                    Plant Overview &amp; Facility Tour
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                    {corporateFilmDescriptions[videoLang]}
                  </p>

                  {/* Subtitle Snippet */}
                  <div className="mt-4 rounded-xl border border-[#e52229]/30 bg-[#06121E]/95 p-3.5 shadow-inner">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-red-400 uppercase tracking-wider">
                        <Subtitles size={13} className="text-[#e52229]" />
                        <span>Live Captions ({videoLang.toUpperCase()})</span>
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-200 leading-snug">
                      {videoLang === "en"
                        ? fullCombinedFilm.englishSubtitle
                        : videoLang === "gu"
                        ? fullCombinedFilm.gujaratiSubtitle
                        : fullCombinedFilm.hindiSubtitle}
                    </p>
                  </div>
                </div>

                {/* Standalone Voiceover Track Player */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Volume2 size={14} className="text-[#e52229]" />
                      <span>Audio Voiceover ({videoLang.toUpperCase()}):</span>
                    </span>
                    <span className="text-[10px] font-mono text-red-400">Studio Mastered</span>
                  </div>
                  <audio
                    key={`aud-overview-${videoLang}`}
                    controls
                    preload="none"
                    src={`/audio/full-combined-tour_${videoLang}.mp3`}
                    className="w-full h-8 rounded"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid of 12 Capability Marketing Reels */}
          <div className="mt-4">
            <h3 className="font-display text-xl font-bold text-[#0C2340] mb-5 flex items-center gap-2">
              <span>Capability Video Reels</span>
              <span className="text-xs font-bold text-slate-400 font-mono">({capabilityReels.length} Reels)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {capabilityReels.map((video) => {
                const snippet =
                  videoLang === "en"
                    ? video.englishSubtitle
                    : videoLang === "gu"
                    ? video.gujaratiSubtitle
                    : video.hindiSubtitle;

                return (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200/90 hover:border-[#e52229] shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 p-3.5 cursor-pointer"
                    onClick={() => handleOpenVideo(video.id)}
                  >
                    {/* Video Thumbnail Viewport with Real Video Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900 border border-slate-100">
                      <video
                        src={`/videos/${video.id}_en.mp4`}
                        poster={`/images/${video.category}.jpg`}
                        preload="metadata"
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Top Order Number & Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-[#0A1D33]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10.5px] font-bold text-red-400 border border-[#e52229]/30">
                        <span>#{video.orderNumber}</span>
                        <span className="opacity-40">&bull;</span>
                        <span>{video.badge}</span>
                      </div>

                      {/* Duration Pill */}
                      <span className="absolute top-2.5 right-2.5 z-10 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-white/90">
                        {video.duration}
                      </span>

                      {/* Centered Circular Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#0A1D33] shadow-md transition-all duration-200 group-hover:scale-115 group-hover:bg-[#e52229] group-hover:text-white">
                          <Play size={20} fill="currentColor" className="ml-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-3 flex flex-col flex-1 justify-between">
                      <div>
                        <p className="font-display text-[11px] font-bold uppercase tracking-wider text-[#e52229] line-clamp-1">
                          {video.screenText}
                        </p>
                        <h4 className="mt-1 font-display text-base font-bold text-[#0C2340] group-hover:text-[#e52229] transition-colors leading-snug">
                          {video.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 text-justify">
                          {snippet}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Volume2 size={13} className="text-[#e52229]" />
                          <span className="uppercase">{videoLang} Audio</span>
                        </span>
                        <span className="text-[#e52229] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                          <span>Play Video</span>
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: PLANT & INFRASTRUCTURE PHOTOGRAPHY */}
      {(activeMediaTab === "all" || activeMediaTab === "photos") && (
        <section className="flex flex-col gap-6">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#003B5C] mb-2">
                <Camera size={13} />
                <span>Facility Photography</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0C2340]">
                Inside the Processing Facility &amp; Yard
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl">
                High-resolution photography of our factory sheds, steel plate storage yard, CNC cutting beds, crane bays, and dispatch fleet.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 self-start sm:self-auto">
              {(["All", ...galleryCategories] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActivePhotoCat(cat)}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer",
                    activePhotoCat === cat
                      ? "bg-[#0C2340] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-[#0C2340]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredPhotos.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => openLightbox(item.id)}
                  className="group relative aspect-square overflow-hidden rounded-2xl text-left bg-slate-900 border border-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e52229] cursor-pointer"
                >
                  <Image
                    src={`/images/${item.imageCategory}.jpg`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Expand icon */}
                  <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/95 text-[#0C2340] opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md">
                    <Expand size={15} />
                  </span>

                  {/* Category Pill on Hover */}
                  <span className="absolute left-3 top-3 inline-block rounded-md bg-[#003B5C]/90 px-2 py-0.5 text-[10px] font-bold text-white uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {item.category}
                  </span>

                  {/* Title Bar on Hover */}
                  <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-xs sm:text-[13px] font-bold text-white leading-tight block">
                      {item.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      )}

      {/* Shared Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                stepLightbox(-1);
              }}
              className="absolute left-4 sm:left-8 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:bg-white/15 transition-colors z-20 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                stepLightbox(1);
              }}
              className="absolute right-4 sm:right-8 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:bg-white/15 transition-colors z-20 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={filteredPhotos[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-[16/10] overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10"
            >
              <Image
                src={`/images/${filteredPhotos[lightboxIndex].imageCategory}.jpg`}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white">
                <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block">
                  {filteredPhotos[lightboxIndex].category}
                </span>
                <h4 className="text-base sm:text-lg font-bold">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Video Player Modal for detailed playback */}
      <VideoPlayerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        activeVideoId={selectedVideoId}
        initialLanguage={videoLang}
      />
    </div>
  );
}
