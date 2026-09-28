"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowBackToTop(latest > 350);
    });
  }, [scrollY]);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top horizontal reading progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#02496E] via-[#FD6200] to-orange-400 shadow-[0_0_8px_rgba(253,98,0,0.6)] z-[9999] pointer-events-none"
      />

      {/* Floating back-to-top button positioned safely above the WhatsApp button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-[74px] right-5 sm:bottom-[76px] sm:right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-[#0A222D]/95 text-white shadow-card backdrop-blur-sm border border-[#143B4E] transition-colors hover:border-[#FD6200] hover:text-[#FD6200] group"
          >
            {/* Circular progress SVG */}
            <svg className="absolute inset-0 h-full w-full -rotate-90 p-1" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="currentColor"
                strokeWidth="2"
                fill="transparent"
                className="text-white/15"
              />
              <circle
                cx="22"
                cy="22"
                r="18"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="transparent"
                strokeDasharray={113.1}
                strokeDashoffset={113.1 - (113.1 * scrollPercentage) / 100}
                strokeLinecap="round"
                className="text-[#FD6200] transition-all duration-150"
              />
            </svg>

            <ArrowUp size={16} strokeWidth={2.5} className="relative z-10 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
