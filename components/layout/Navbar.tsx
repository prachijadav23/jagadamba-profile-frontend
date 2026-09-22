"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, MapPin, Phone, Mail } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { MobileDrawer } from "./MobileDrawer";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "CNC Profile Cutting", href: "/services/cnc-profile-cutting" },
        { label: "Fiber Laser Cutting", href: "/services/laser-cutting" },
        { label: "CNC Drilling & Flanges", href: "/services/cnc-drilling" },
        { label: "Heavy Plate Cutting", href: "/services/heavy-plate-cutting" },
        { label: "Ultrasonic UT Testing", href: "/services/ut-testing" },
      ],
    },
    { label: "Machinery", href: "/machinery" },
    { label: "Grades", href: "/grades" },
    { label: "Quality", href: "/quality" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top Information Bar (Corporate Steel Navy Background with Gold Accents) */}
      <div className="bg-[#0C2340] text-white text-[11px] sm:text-xs py-1.5 border-b border-[#08182E]">
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Steel Processing · Vadodara | Location */}
            <div className="flex items-center gap-3 sm:gap-6">
              <span className="font-bold tracking-wider text-[#FBBF24] uppercase">
                STEEL PROCESSING &middot; VADODARA
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                <MapPin size={12} className="text-[#F59E0B] shrink-0" />
                <span>Vadodara, Gujarat, India</span>
              </span>
            </div>

            {/* Right: Phone & Email with gold icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+919824917250"
                className="flex items-center gap-1.5 text-white/90 hover:text-[#FBBF24] transition-colors"
              >
                <Phone size={12} className="text-[#F59E0B] shrink-0" />
                <span className="font-medium">+91 9824917250</span>
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a
                href="mailto:jagdambaprofile@gmail.com"
                className="hidden sm:flex items-center gap-1.5 text-white/90 hover:text-[#FBBF24] transition-colors"
              >
                <Mail size={12} className="text-[#F59E0B] shrink-0" />
                <span>jagdambaprofile@gmail.com</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Solid White Navbar */}
      <div className="bg-white text-[#0C2340] shadow-sm border-b border-slate-200">
        <Container>
          <div className="flex h-[64px] sm:h-[68px] items-center justify-between">
            {/* Logo: JAGDAMBA PROFILE with Photo 1 Golden Amber brand accent */}
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tight flex items-baseline">
                <span className="text-[#0C2340]">JAGDAMBA</span>
                <span className="text-[#F59E0B] ml-1.5 font-black">PROFILE</span>
              </span>
              <span className="hidden sm:inline-block h-4 w-px bg-slate-300 mx-1" />
              <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                Vadodara
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.children && setOpenMenu(item.label)}
                    onMouseLeave={() => item.children && setOpenMenu(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13.5px] font-semibold transition-colors ${
                        isActive
                          ? "text-[#0C2340] font-bold"
                          : "text-slate-600 hover:text-[#0C2340]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          size={13}
                          strokeWidth={2.2}
                          className={`transition-transform duration-200 ${
                            openMenu === item.label ? "rotate-180 text-[#F59E0B]" : "opacity-60"
                          }`}
                        />
                      )}

                      {/* Active underline in vibrant gold */}
                      {isActive && (
                        <motion.span
                          layoutId="activeNavUnderline"
                          className="absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-[#F59E0B] rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
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
                          className="absolute left-0 top-full pt-1.5 w-60 z-50"
                        >
                          <div className="overflow-hidden rounded-card border border-slate-200 bg-white p-1.5 shadow-lg">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block rounded px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0C2340] transition-colors"
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

            {/* Right Side: Get Quote Button (Photo 1 Vibrant Golden Amber) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-[6px] bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1D33] px-5 py-2 text-[13.5px] font-black tracking-wide shadow-sm hover:shadow-gold-glow transition-all duration-200 active:scale-[0.98]"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
              className="grid h-9 w-9 place-items-center rounded border border-slate-300 text-[#0C2340] hover:bg-slate-100 lg:hidden transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
