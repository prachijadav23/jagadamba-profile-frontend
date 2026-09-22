"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, Volume2, Subtitles, Film, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { videosList } from "@/data/videos";
import { VideoPlayerModal } from "@/components/video/VideoPlayerModal";

export function VideoReelSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("full-combined-tour");
  const [filterMode, setFilterMode] = useState<"top6" | "all">("top6");
  const [displayLang, setDisplayLang] = useState<"en" | "gu" | "hi">("en");

  // Capability reels (exclude full film from the grid)
  const capabilityReels = videosList.filter((v) => !v.isFullFilm);
  const displayedVideos =
    filterMode === "top6"
      ? capabilityReels.filter((v) => v.isCoreTop6)
      : capabilityReels;

  const handleOpenVideo = (id: string) => {
    setSelectedVideoId(id);
    setModalOpen(true);
  };

  const corporateFilmDescriptions = {
    en: "Experience all 12 manufacturing capabilities in a single continuous 45-second documentary tour: 300 mm CNC plate cutting sparks, 2,500 MT ready stockyard, 20-ton crane handling, ultrasonic UT flaw testing, and pan-India dispatch.",
    gu: "જગદંબા પ્રોફાઇલ વડોદરા પ્લાન્ટની સંપૂર્ણ ૪૫-સેકન્ડની કોર્પોરેટ ટૂર: ૩૦૦ mm હેવી પ્લેટ કટિંગ, ૭૫,૦૦૦ સ્ક્વેર ફીટ યાર્ડ, ૨૦ ટન ક્રેન હેન્ડલિંગ, અલ્ટ્રાસોનિક UT ટેસ્ટિંગ અને સમગ્ર ભારતમાં ઝડપી ડિસ્પેચ.",
    hi: "जगदम्बा प्रोफाइल वडोदरा प्लांट का 45 सेकंड का संपूर्ण कॉर्पोरेट टूर: 300 mm हैवी प्लेट कटिंग, 75,000 वर्ग फीट यार्ड, 20 टन क्रेन हैंडलिंग, अल्ट्रासोनिक UT टेस्टिंग और पूरे भारत में त्वरित डिस्पैच।",
  };

  const corporateFilmButtons = {
    en: "Watch Corporate Film (45s)",
    gu: "કોર્પોરેટ ફિલ્મ જુઓ (45s)",
    hi: "कॉर्पोरेट फिल्म देखें (45s)",
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] relative border-y border-slate-200">
      <Container className="relative z-10">
        {/* Header with Title and Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
          <SectionHeading
            index="02"
            kicker="Operations In Motion"
            title="Watch Our Steel Processing Capabilities"
            subtitle="Explore our 300 mm heavy plate cutting, 2,500 MT ready yard, ultrasonic testing, and pan-India logistics through high-impact visual reels, or watch the official corporate overview film."
            light={false}
            className="max-w-2xl"
          />

          {/* Controls: Filter Mode Tabs + Language Selector */}
          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            {/* Filter Tabs: Top 6 vs All 12 */}
            <div className="inline-flex rounded-btn bg-white p-1 border border-slate-200 shadow-sm">
              <button
                type="button"
                onClick={() => setFilterMode("top6")}
                className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                  filterMode === "top6"
                    ? "bg-[#F59E0B] text-[#0A1D33] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Core Operations (Top 6)
              </button>
              <button
                type="button"
                onClick={() => setFilterMode("all")}
                className={`px-3.5 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${
                  filterMode === "all"
                    ? "bg-[#F59E0B] text-[#0A1D33] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All 12 Capability Reels
              </button>
            </div>

            {/* Language Switcher for Video Content (English Default, Gujarati, Hindi) */}
            <div className="inline-flex items-center gap-1 rounded-btn bg-white p-1 border border-slate-200 shadow-sm text-xs">
              <span className="text-[11px] font-bold text-slate-500 uppercase px-2 flex items-center gap-1">
                <Globe2 size={13} className="text-[#D97706]" />
                <span className="hidden sm:inline">Language:</span>
              </span>
              <button
                type="button"
                onClick={() => setDisplayLang("en")}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  displayLang === "en"
                    ? "bg-[#0A1D33] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setDisplayLang("gu")}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  displayLang === "gu"
                    ? "bg-[#0A1D33] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                ગુજરાતી
              </button>
              <button
                type="button"
                onClick={() => setDisplayLang("hi")}
                className={`px-2.5 py-1 rounded font-bold transition-all cursor-pointer ${
                  displayLang === "hi"
                    ? "bg-[#0A1D33] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>

        {/* Featured Showcase: Official Corporate Film */}
        <div className="mb-10 rounded-2xl border border-slate-200 bg-gradient-to-r from-[#06121E] via-[#0A1D33] to-[#0C2340] p-6 sm:p-8 shadow-xl relative overflow-hidden text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#FBBF24] mb-3">
                <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-ping" />
                <span>Official Corporate Film &bull; 45 Seconds</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                Corporate Overview &amp; Facility Tour
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-200 max-w-2xl text-justify">
                {corporateFilmDescriptions[displayLang]}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs text-slate-300">
                <span className="font-semibold text-[#FBBF24] flex items-center gap-1">
                  <Volume2 size={14} className="text-[#F59E0B]" />
                  <span>Audio &amp; Subtitles:</span>
                </span>
                <span
                  onClick={() => setDisplayLang("en")}
                  className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors cursor-pointer ${
                    displayLang === "en" ? "bg-[#F59E0B] text-[#0A1D33] font-bold" : "bg-white/10 text-white"
                  }`}
                >
                  English
                </span>
                <span
                  onClick={() => setDisplayLang("gu")}
                  className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors cursor-pointer ${
                    displayLang === "gu" ? "bg-[#F59E0B] text-[#0A1D33] font-bold" : "bg-white/10 text-white"
                  }`}
                >
                  ગુજરાતી
                </span>
                <span
                  onClick={() => setDisplayLang("hi")}
                  className={`rounded px-2 py-0.5 text-[11px] font-medium transition-colors cursor-pointer ${
                    displayLang === "hi" ? "bg-[#F59E0B] text-[#0A1D33] font-bold" : "bg-white/10 text-white"
                  }`}
                >
                  हिन्दी
                </span>
                <span className="text-slate-500">&bull;</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-amber-200">
                  <Subtitles size={12} className="text-[#F59E0B]" />
                  <span>Live Captions</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <button
                type="button"
                onClick={() => handleOpenVideo("full-combined-tour")}
                className="w-full sm:w-auto lg:w-full flex items-center justify-center gap-2.5 rounded-btn bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1D33] px-6 py-3.5 text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg hover:shadow-gold-glow transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Play size={18} fill="currentColor" />
                <span>{corporateFilmButtons[displayLang]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Video Grid on Light Background (English Default, Multilingual Support) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${filterMode}-${displayLang}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {displayedVideos.map((video) => {
              const snippetText =
                displayLang === "en"
                  ? video.englishSubtitle
                  : displayLang === "gu"
                  ? video.gujaratiSubtitle
                  : video.hindiSubtitle;

              return (
                <motion.div
                  key={video.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    onClick={() => handleOpenVideo(video.id)}
                    className="group flex flex-col h-full rounded-card overflow-hidden bg-white border border-slate-200 hover:border-[#F59E0B] shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer p-3.5"
                  >
                    {/* Video Thumbnail Viewport */}
                    <div className="relative aspect-[16/10] overflow-hidden rounded-btn bg-slate-900 border border-slate-100">
                      <ImagePlaceholder
                        category={video.category}
                        label={video.screenText}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Top Order Number & Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 bg-[#0A1D33]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10.5px] font-bold text-[#FBBF24] border border-[#F59E0B]/30">
                        <span>#{video.orderNumber}</span>
                        <span className="opacity-40">&bull;</span>
                        <span>{video.badge}</span>
                      </div>

                      {/* Duration Pill */}
                      <span className="absolute top-2.5 right-2.5 z-10 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-white/90">
                        {video.duration}
                      </span>

                      {/* Centered Circular Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#0A1D33] shadow-md transition-all duration-200 group-hover:scale-110 group-hover:bg-[#F59E0B] group-hover:text-white">
                          <Play size={18} fill="currentColor" className="ml-0.5" />
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-3 flex flex-col flex-1 justify-between">
                      <div>
                        {/* Screen Text in Bold Amber */}
                        <p className="font-display text-[11px] font-bold uppercase tracking-wider text-[#D97706] line-clamp-1">
                          {video.screenText}
                        </p>

                        <h3 className="mt-1 font-display text-base font-bold text-[#0C2340] group-hover:text-[#D97706] transition-colors leading-snug">
                          {video.title}
                        </h3>

                        {/* Subtitle snippet (English by default, switches with language selector) */}
                        <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-2 text-justify">
                          {snippetText}
                        </p>
                      </div>

                      {/* Bottom Action Indicator */}
                      <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-slate-800">
                        <span className="flex items-center gap-1 text-[11px]">
                          <Volume2 size={13} className="text-[#F59E0B]" />
                          <span className="uppercase">{displayLang} &bull; VO</span>
                        </span>
                        <span className="text-[#D97706] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                          <span>Play Reel</span>
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Shared Video Player Modal */}
      <VideoPlayerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        activeVideoId={selectedVideoId}
        initialLanguage={displayLang}
      />
    </section>
  );
}
