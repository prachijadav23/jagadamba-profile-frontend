"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

const baseStyles =
  "relative inline-flex items-center justify-center gap-2.5 rounded-btn font-sans font-semibold tracking-wide select-none whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#133E87] cursor-pointer transition-colors duration-200 ease-out";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1D33] font-bold shadow-sm hover:shadow-gold-glow border border-[#F59E0B]",
  secondary:
    "bg-[#0C2340] hover:bg-[#133E87] text-white shadow-sm hover:shadow-navy-glow border border-[#133E87]",
  outline:
    "bg-transparent text-[#0C2340] border border-[#0C2340]/40 hover:border-[#F59E0B] hover:bg-[#0C2340] hover:text-white shadow-subtle",
  "outline-light":
    "bg-transparent text-white border border-white/50 hover:border-[#F59E0B] hover:text-[#FBBF24] hover:bg-white/15 shadow-subtle",
  ghost:
    "bg-transparent text-[#2D4B6E] hover:text-[#0C2340] hover:bg-slate-100",
};

const sizes: Record<Size, string> = {
  sm: "text-xs sm:text-sm px-4 py-2",
  md: "text-sm sm:text-[15px] px-5 py-2.5 sm:py-3",
  lg: "text-base sm:text-lg px-7 py-3.5 sm:py-4",
};

interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  disabled?: boolean;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  type = "button",
  target,
  disabled = false,
}: ButtonProps) {
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    disabled && "pointer-events-none opacity-50 cursor-not-allowed",
    "group",
    className
  );

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight
            size={size === "lg" ? 18 : 16}
            strokeWidth={2.2}
            className="transition-transform duration-200 ease-out group-hover:translate-x-1.5"
          />
        )}
      </span>
    </>
  );

  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { scale: 0.98, y: 0 },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={buttonClasses} target={target}>
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...motionProps}
    >
      {innerContent}
    </motion.button>
  );
}
