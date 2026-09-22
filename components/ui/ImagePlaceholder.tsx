"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Factory,
  Layers,
  Scissors,
  Zap,
  CircleDot,
  Flame,
  MoveVertical,
  Truck,
  PackageCheck,
  Radar,
  Ruler,
  FileCheck2,
  ShieldCheck,
  Boxes,
  Warehouse,
  Wrench,
  Camera,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  factory: Factory,
  "steel-yard": Warehouse,
  "steel-stock": Layers,
  "cnc-profile-cutting": Scissors,
  "laser-cutting": Zap,
  "cnc-drilling": CircleDot,
  "heavy-plate-cutting": Flame,
  "crane-handling": MoveVertical,
  hydra: Truck,
  forklift: Truck,
  transport: Truck,
  components: Boxes,
  inspection: FileCheck2,
  "thickness-measurement": Ruler,
  "ut-testing": Radar,
  quality: ShieldCheck,
  machinery: Wrench,
  dispatch: PackageCheck,
  hero: Factory,
};

type Props = {
  category: keyof typeof iconMap | string;
  label?: string;
  filename?: string;
  className?: string;
  dark?: boolean;
  compact?: boolean;
  priority?: boolean;
};

export function ImagePlaceholder({
  category,
  label,
  filename,
  className,
  dark = true,
  compact = false,
  priority = false,
}: Props) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const Icon = iconMap[category] ?? Camera;
  // Default image path in public/images
  const imageSrc = filename && !filename.includes(".mp4") && !filename.includes("(") 
    ? filename 
    : `/images/${category}.jpg`;

  return (
    <div
      className={cn(
        "group relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-dark-950",
        className
      )}
    >
      {/* Real Image Render */}
      {!hasError && (
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={label || `${category} visual`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={cn(
              "object-cover object-center transition-all duration-700 ease-out group-hover:scale-105",
              loaded ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-105 blur-sm"
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setHasError(true)}
          />
          {/* Subtle industrial vignette & technical gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/25 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply pointer-events-none" />
        </div>
      )}

      {/* Fallback Technical Grid if image fails */}
      {hasError && (
        <>
          <div
            className={cn(
              "absolute inset-0",
              dark ? "bg-technical-grid" : "bg-technical-grid-light"
            )}
          />
          <div className="relative z-10 flex flex-col items-center gap-2.5 px-6 text-center">
            <Icon
              size={compact ? 22 : 30}
              strokeWidth={1.5}
              className={dark ? "text-[#38BDF8]" : "text-[#133E87]"}
            />
            {label && !compact && (
              <span
                className={cn(
                  "max-w-[220px] font-sans text-[11px] font-medium uppercase tracking-[0.08em]",
                  dark ? "text-white/60" : "text-[#0C2340]"
                )}
              >
                {label}
              </span>
            )}
          </div>
        </>
      )}

      {/* Industrial corner brackets */}
      <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#38BDF8]/60 z-20 transition-all duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[#38BDF8]/60 z-20 transition-all duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#38BDF8]/60 z-20 transition-all duration-300 group-hover:scale-110" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#38BDF8]/60 z-20 transition-all duration-300 group-hover:scale-110" />

      {/* Branded tech badge on hover */}
      {label && !compact && (
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded bg-[#0A1D33]/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#7DD3FC] backdrop-blur-md border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
