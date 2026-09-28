"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

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
            className="absolute inset-0 bg-[#0A222D]/80 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative ml-auto flex h-full w-full max-w-sm flex-col bg-[#0A222D] text-white shadow-2xl border-l border-[#143B4E]"
          >
            {/* Header with official logo image & close button */}
            <div className="flex h-18 items-center justify-between border-b border-[#143B4E] px-5 py-3 bg-[#0F303F]">
              <Link href="/" onClick={onClose} className="bg-white rounded-lg px-2.5 py-1.5 shadow-sm inline-flex items-center">
                <Image
                  src="/images/logo-tight.png"
                  alt="Jagdamba Profile Pvt. Ltd."
                  width={160}
                  height={45}
                  className="h-8.5 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/20 text-white hover:bg-white/10 active:scale-95 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav list */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="flex flex-col divide-y divide-[#143B4E]">
                {primaryNav.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <div key={item.href} className="py-2.5">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!item.children) onClose();
                          }}
                          className={cn(
                            "font-display text-[15px] font-bold transition-colors py-1 block flex-1",
                            isActive ? "text-[#FD6200]" : "text-white hover:text-[#FD6200]"
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            type="button"
                            aria-label={`Expand ${item.label}`}
                            onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                            className="grid h-9 w-9 place-items-center text-white/70 hover:text-[#FD6200] transition-colors"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-250 ${
                                expanded === item.label ? "rotate-180 text-[#FD6200]" : ""
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
                            <div className="flex flex-col gap-1.5 py-2 pl-3 border-l-2 border-[#FD6200] ml-1 my-1">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={onClose}
                                  className="text-xs font-semibold text-slate-300 hover:text-[#FD6200] transition-colors py-1.5"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Call Anytime Widget in Drawer */}
              <div className="mt-6 p-4 rounded-xl bg-[#0F303F] border border-[#143B4E]">
                <a
                  href="tel:+919824917250"
                  className="flex items-center gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FD6200] group-hover:bg-[#FD6200] group-hover:text-white transition-colors duration-200 shrink-0">
                    <Phone size={18} strokeWidth={2.4} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Call Anytime
                    </span>
                    <span className="block text-sm font-extrabold text-white group-hover:text-[#FD6200] transition-colors">
                      +91 98249 17250
                    </span>
                  </div>
                </a>
              </div>

              {/* CTAs inside mobile drawer */}
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/quote"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-[#FD6200] hover:bg-[#E55500] text-white py-3 text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                >
                  <span>Get A Quote</span>
                  <ArrowRight size={14} strokeWidth={2.4} />
                </Link>
                <Link
                  href="/grades"
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-white/10 hover:bg-white/15 text-white py-3 text-xs font-bold uppercase tracking-wider border border-white/15 transition-colors"
                >
                  <span>Explore Steel Grades &amp; Stock</span>
                </Link>
              </div>

              {/* Direct address & email in drawer */}
              <div className="mt-6 pt-5 border-t border-[#143B4E] flex flex-col gap-2.5 text-xs text-slate-400">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FD6200] transition-colors"
                >
                  <Mail size={13} className="text-[#FD6200]" />
                  <span>{company.email}</span>
                </a>
                <span className="flex items-start gap-2 text-slate-400">
                  <MapPin size={13} className="text-[#FD6200] shrink-0 mt-0.5" />
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

