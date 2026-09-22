"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Film, Subtitles, ChevronLeft, ChevronRight } from "lucide-react";
import { videosList, VideoItem, fullCombinedFilm } from "@/data/videos";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeVideoId?: string;
  initialLanguage?: "en" | "gu" | "hi";
}

export function VideoPlayerModal({
  isOpen,
  onClose,
  activeVideoId = "full-combined-tour",
  initialLanguage = "en",
}: VideoPlayerModalProps) {
  const [selectedId, setSelectedId] = useState(activeVideoId);
  const [language, setLanguage] = useState<"en" | "gu" | "hi">(initialLanguage);

  useEffect(() => {
    if (activeVideoId) {
      setSelectedId(activeVideoId);
    }
  }, [activeVideoId]);

  useEffect(() => {
    if (initialLanguage) {
      setLanguage(initialLanguage);
    }
  }, [initialLanguage, isOpen]);

  const activeVideo =
    videosList.find((v) => v.id === selectedId) || fullCombinedFilm;

  const getVideoSrc = (id: string, lang: "gu" | "hi" | "en") => {
    if (lang === "gu") return `/videos/${id}.mp4`;
    if (lang === "hi") return `/videos/${id}_hi.mp4`;
    return `/videos/${id}_en.mp4`;
  };

  const getAudioSrc = (id: string, lang: "gu" | "hi" | "en") => {
    return `/audio/${id}_${lang}.mp3`;
  };

  const activeSubtitle =
    language === "en"
      ? activeVideo.englishSubtitle
      : language === "gu"
      ? activeVideo.gujaratiSubtitle
      : activeVideo.hindiSubtitle;

  const languageLabel =
    language === "en"
      ? "English"
      : language === "gu"
      ? "ગુજરાતી"
      : "हिन्दी";

  // Navigation for individual reels (exclude full film from reel indexing)
  const capabilityReels = videosList.filter((v) => !v.isFullFilm);
  const currentReelIndex = capabilityReels.findIndex((v) => v.id === selectedId);

  const handlePrevReel = () => {
    if (currentReelIndex > 0) {
      setSelectedId(capabilityReels[currentReelIndex - 1].id);
    } else {
      setSelectedId(capabilityReels[capabilityReels.length - 1].id);
    }
  };

  const handleNextReel = () => {
    if (currentReelIndex >= 0 && currentReelIndex < capabilityReels.length - 1) {
      setSelectedId(capabilityReels[currentReelIndex + 1].id);
    } else {
      setSelectedId(capabilityReels[0].id);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container: Focused, Clean & Clutter-Free */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#0A1D33] border border-[#F59E0B]/40 shadow-2xl z-10 my-auto flex flex-col max-h-[94vh]"
          >
            {/* Header: Clean & Simple */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#06121E] border-b border-white/10 text-white shrink-0">
              <div className="flex items-center gap-2.5 min-w-0 pr-2">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-[#F59E0B]/20 text-[#F59E0B]">
                  <Film size={15} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-bold text-white flex items-center gap-2 truncate">
                    <span>Jagdamba Profile</span>
                    <span className="text-[#F59E0B] font-normal">&bull;</span>
                    <span className="text-[#FBBF24] font-medium truncate">{activeVideo.title}</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {/* Switch to Corporate Film button only if watching an individual reel */}
                {!activeVideo.isFullFilm && (
                  <button
                    type="button"
                    onClick={() => setSelectedId("full-combined-tour")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F59E0B]/20 hover:bg-[#F59E0B] text-[#FBBF24] hover:text-[#0A1D33] px-3 py-1 text-xs font-bold transition-all border border-[#F59E0B]/40 cursor-pointer"
                  >
                    <Play size={11} fill="currentColor" />
                    <span>Watch Corporate Film</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close modal"
                  className="rounded-full p-1.5 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Video Viewport & Controls */}
            <div className="p-4 sm:p-6 overflow-y-auto flex flex-col bg-[#081729]">
              {/* 16:9 Native HTML5 Video Player */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-xl">
                <video
                  key={`${activeVideo.id}-${language}`}
                  src={getVideoSrc(activeVideo.id, language)}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="h-full w-full object-contain bg-black"
                >
                  Your browser does not support the video tag.
                </video>

                {/* On-Screen Screen Text Banner */}
                <div className="absolute top-3 left-3 pointer-events-none z-20 max-w-[85%]">
                  <div className="inline-flex items-center gap-2 bg-[#0A1D33]/90 backdrop-blur-md border border-[#F59E0B]/80 px-3 py-1 rounded shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-ping shrink-0" />
                    <span className="font-display text-xs sm:text-[13px] font-black tracking-wide text-white uppercase truncate">
                      {activeVideo.screenText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtitles Strip Below Video */}
              <div className="mt-3.5 rounded-xl border border-[#F59E0B]/30 bg-[#06121E]/95 p-3 sm:p-3.5 shadow-inner">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#FBBF24] uppercase tracking-wider">
                    <Subtitles size={13} className="text-[#F59E0B]" />
                    <span>Subtitles ({languageLabel})</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-1.5 py-0.5 rounded border border-[#F59E0B]/20">
                    LIVE CC
                  </span>
                </div>
                <p className="text-xs sm:text-[13.5px] font-semibold text-slate-100 leading-snug tracking-wide">
                  {activeSubtitle}
                </p>
              </div>

              {/* Audio Language Switcher & Controls (English Default, Gujarati, Hindi) */}
              <div className="mt-3.5 rounded-xl border border-white/10 bg-[#0C2340]/90 p-3.5 sm:p-4">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  {/* Audio Language Label */}
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-[#F59E0B]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Audio Language
                    </span>
                  </div>

                  {/* 3-Language Buttons */}
                  <div className="inline-flex items-center rounded-lg bg-[#06121E] p-1 border border-white/10 text-xs shadow-inner">
                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`px-3 py-1.5 rounded font-bold transition-all cursor-pointer ${
                        language === "en"
                          ? "bg-[#F59E0B] text-[#0A1D33] shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("gu")}
                      className={`px-3 py-1.5 rounded font-bold transition-all cursor-pointer ${
                        language === "gu"
                          ? "bg-[#F59E0B] text-[#0A1D33] shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      ગુજરાતી
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage("hi")}
                      className={`px-3 py-1.5 rounded font-bold transition-all cursor-pointer ${
                        language === "hi"
                          ? "bg-[#F59E0B] text-[#0A1D33] shadow-sm"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      हिन्दी
                    </button>
                  </div>
                </div>

                {/* Standalone Voice Track + Navigation */}
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-slate-300">
                      Voice Track ({languageLabel}):
                    </span>
                    <audio
                      key={`aud-${activeVideo.id}-${language}`}
                      controls
                      preload="auto"
                      src={getAudioSrc(activeVideo.id, language)}
                      className="h-7 w-52 sm:w-64 max-w-full rounded"
                    />
                  </div>

                  {/* Previous / Next Reel Navigation for individual clips */}
                  {!activeVideo.isFullFilm && currentReelIndex >= 0 && (
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400">
                        Reel {currentReelIndex + 1} of {capabilityReels.length}
                      </span>
                      <div className="inline-flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handlePrevReel}
                          className="rounded p-1 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Previous Reel"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextReel}
                          className="rounded p-1 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          title="Next Reel"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
