"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Lock background scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-[#0A1D33] text-white shadow-2xl border-l border-white/10"
          >
            {/* Header with official logo image & close button */}
            <div className="flex h-18 items-center justify-between border-b border-white/10 px-5 py-3">
              <Link href="/" onClick={onClose} className="bg-white rounded-lg px-2.5 py-1.5 shadow-sm inline-flex items-center">
                <Image
                  src="/images/logo-tight.png"
                  alt="Jagdamba Profile Pvt. Ltd."
                  width={140}
                  height={42}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-btn border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav list */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col divide-y divide-white/10">
                {primaryNav.map((item) => (
                  <div key={item.href} className="py-2.5">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.children) onClose();
                        }}
                        className="font-display text-[16px] font-bold text-white hover:text-orange-400 transition-colors py-1 block flex-1"
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          type="button"
                          aria-label={`Expand ${item.label}`}
                          onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                          className="grid h-9 w-9 place-items-center text-white/70 hover:text-red-400 transition-colors"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-250 ${
                              expanded === item.label ? "rotate-180 text-[#e52229]" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu Accordion */}
                    <AnimatePresence>
                      {item.children && expanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-1.5 py-2 pl-3 border-l-2 border-[#e52229]/50 ml-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={onClose}
                                className="text-sm font-medium text-white/70 hover:text-red-400 transition-colors py-1.5"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTAs inside mobile drawer */}
              <div className="mt-8 flex flex-col gap-3">
                <Button href="/quote" variant="primary" size="md" onClick={onClose} className="w-full justify-center bg-[#e52229] hover:bg-[#c81920] text-white font-bold" showArrow>
                  Get a Quote
                </Button>
                <Button href="/stock-enquiry" variant="outline-light" size="md" onClick={onClose} className="w-full justify-center">
                  Check Stock Availability
                </Button>
              </div>

              {/* Direct phone and address in drawer */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col gap-2.5 text-xs text-white/60">
                <a
                  href={`tel:+91${company.phones.office[0]}`}
                  className="flex items-center gap-2 text-white/80 hover:text-red-400"
                >
                  <Phone size={13} className="text-[#e52229]" />
                  <span>Call: +91 {company.phones.office[0]}</span>
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-white/80 hover:text-red-400"
                >
                  <Mail size={13} className="text-[#e52229]" />
                  <span>{company.email}</span>
                </a>
                <span className="flex items-start gap-2 text-white/60">
                  <MapPin size={13} className="text-[#e52229] shrink-0 mt-0.5" />
                  <span>{company.address.line1}, {company.address.line2}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
