"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { primaryNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MobileDrawer } from "./MobileDrawer";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const navItems = primaryNav;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Information Bar: Deep Petrol Navy (#0A222D) with Vibrant Orange Accents (#FD6200) */}
      <div className="bg-[#0A222D] text-white text-[11px] sm:text-xs py-2 border-b border-[#143B4E]">
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Industrial Tag & Location */}
            <div className="flex items-center gap-2.5 sm:gap-6">
              <span className="font-extrabold tracking-wider text-[#FD6200] uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FD6200] animate-pulse" />
                STEEL PROCESSING &middot; VADODARA
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                <MapPin size={12} className="text-[#FD6200] shrink-0" />
                <span>Vadodara, Gujarat, India</span>
              </span>
            </div>

            {/* Right: Working Hours / Direct Email / Quick Mobile Phone */}
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="hidden lg:inline text-slate-400 font-medium">
                Mon - Sat: 8:00 AM - 8:00 PM
              </span>
              <span className="hidden lg:inline text-white/20">|</span>
              <a
                href="mailto:jagdambaprofile@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#FD6200] transition-colors"
              >
                <Mail size={12} className="text-[#FD6200] shrink-0" />
                <span>jagdambaprofile@gmail.com</span>
              </a>
              <a
                href="tel:+919824917250"
                className="sm:hidden flex items-center gap-1 text-[#FD6200] font-bold text-[11px]"
              >
                <Phone size={11} className="shrink-0" />
                <span>+91 98249 17250</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Solid White Navbar */}
      <div className="bg-white text-[#0F303F] shadow-xs border-b border-slate-200">
        <Container>
          <div className="flex h-16 sm:h-20 items-center justify-between gap-3 sm:gap-4">
            {/* Official Logo */}
            <Link href="/" className="flex items-center select-none group py-1 shrink-0">
              <div className="relative h-10 sm:h-12 w-auto flex items-center">
                <Image
                  src="/images/logo-tight.png"
                  alt="Jagdamba Profile Pvt. Ltd."
                  width={210}
                  height={62}
                  priority
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
                />
              </div>
            </Link>

            {/* Clean Horizontal Navigation for Desktop */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => item.children && setOpenMenu(item.label)}
                    onMouseLeave={() => item.children && setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "relative flex items-center gap-1 text-[13px] xl:text-sm font-bold tracking-tight transition-colors",
                        isActive
                          ? "text-[#FD6200]"
                          : "text-[#0F303F] hover:text-[#FD6200]"
                      )}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          size={13}
                          strokeWidth={2.4}
                          className={`transition-transform duration-200 ${
                            openMenu === item.label ? "rotate-180 text-[#FD6200]" : "opacity-60"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {item.children && openMenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 top-full pt-2 w-64 z-50"
                        >
                          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded-lg px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-orange-50 hover:text-[#FD6200] transition-colors"
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
            </nav>

            {/* Signature Right Side for Desktop: Call Anytime Widget + Quote Button */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 shrink-0">
              <a
                href="tel:+919824917250"
                className="flex items-center gap-3 group text-left"
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#FD6200] group-hover:bg-[#FD6200] group-hover:text-white transition-colors duration-200">
                  <Phone size={17} strokeWidth={2.4} />
                </div>
                <div className="leading-tight">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Call Anytime
                  </span>
                  <span className="block text-sm font-extrabold text-[#0F303F] group-hover:text-[#FD6200] transition-colors">
                    +91 98249 17250
                  </span>
                </div>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-[#FD6200] hover:bg-[#E55500] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-md transition-all duration-200 active:scale-95"
              >
                Get A Quote
              </Link>
            </div>

            {/* Enhanced Mobile & Tablet Action Header Bar */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+919824917250"
                aria-label="Call Jagdamba Profile"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-orange-50 text-[#FD6200] border border-orange-200 text-xs font-bold hover:bg-[#FD6200] hover:text-white transition-colors"
              >
                <Phone size={13} strokeWidth={2.4} />
                <span className="hidden sm:inline">Call</span>
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-[#FD6200] hover:bg-[#E55500] text-white px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs transition-colors"
              >
                Quote
              </Link>

              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setDrawerOpen(true)}
                className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-lg border border-slate-300 text-[#0F303F] hover:bg-slate-100 transition-colors"
              >
                <Menu size={19} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
