"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, FileUp, Layers, Home } from "lucide-react";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function MobileBottomNav() {
  const pathname = usePathname();

  const whatsappMessage = encodeURIComponent(
    "Hello Jagdamba Profile, I want to inquire about steel plates / CNC cutting service."
  );

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-3 pb-2 pt-1 pointer-events-auto">
        <nav
          aria-label="Mobile Quick Actions"
          className="flex items-center justify-around rounded-2xl bg-[#0A222D]/95 backdrop-blur-lg border border-[#1E4B62] shadow-[0_8px_30px_rgb(0,0,0,0.5)] py-2 px-1 text-white"
        >
          {/* 1. Home / Explore */}
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[58px] py-1 px-1 text-[10px] font-bold tracking-tight transition-colors",
              pathname === "/" ? "text-[#FD6200]" : "text-slate-300 hover:text-white"
            )}
          >
            <Home size={18} strokeWidth={pathname === "/" ? 2.5 : 2} />
            <span>Home</span>
          </Link>

          {/* 2. Steel Stock / Grades */}
          <Link
            href="/grades"
            className={cn(
              "flex flex-col items-center justify-center gap-1 min-w-[58px] py-1 px-1 text-[10px] font-bold tracking-tight transition-colors",
              pathname.startsWith("/grades") ? "text-[#FD6200]" : "text-slate-300 hover:text-white"
            )}
          >
            <Layers size={18} strokeWidth={pathname.startsWith("/grades") ? 2.5 : 2} />
            <span>Stock</span>
          </Link>

          {/* 3. Center Highlight: Instant Quote */}
          <Link
            href="/quote"
            className="flex flex-col items-center justify-center -mt-5 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#E55500] to-[#FD6200] shadow-[0_0_18px_rgba(253,98,0,0.65)] flex items-center justify-center text-white transition-transform group-hover:scale-105 active:scale-95 border-2 border-[#0A222D]">
              <FileUp size={20} strokeWidth={2.4} />
            </div>
            <span className="text-[10px] font-extrabold text-[#FD6200] mt-1 tracking-tight">
              Get Quote
            </span>
          </Link>

          {/* 4. WhatsApp Direct */}
          <a
            href={`https://wa.me/${company.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 min-w-[58px] py-1 px-1 text-[10px] font-bold tracking-tight text-slate-300 hover:text-[#25D366] transition-colors"
          >
            <MessageCircle size={18} strokeWidth={2} className="text-[#25D366]" />
            <span>WhatsApp</span>
          </a>

          {/* 5. Direct Phone Call */}
          <a
            href="tel:+919824917250"
            className="flex flex-col items-center justify-center gap-1 min-w-[58px] py-1 px-1 text-[10px] font-bold tracking-tight text-slate-300 hover:text-[#FD6200] transition-colors"
          >
            <Phone size={18} strokeWidth={2} className="text-[#FD6200]" />
            <span>Call</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
