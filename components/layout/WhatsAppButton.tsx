"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/company";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const message = encodeURIComponent(
    "Hello Jagdamba Profile, I'd like to share a steel plate / cutting requirement."
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
        >
          <a
            href={`https://wa.me/${company.whatsapp}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send your requirement on WhatsApp"
            className="flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 shadow-[0_0_22px_rgba(37,211,102,0.65)] hover:shadow-[0_0_28px_rgba(37,211,102,0.85)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 select-none"
          >
            <MessageCircle size={20} strokeWidth={2.4} fill="white" className="text-[#25D366] shrink-0" />
            <span className="font-sans text-xs sm:text-sm font-bold tracking-wide">
              Send Your Requirement
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
