import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  index?: string;
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(index || kicker) && (
        <Reveal>
          <div
            className={cn(
              "mb-4 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.16em]",
              align === "center" && "justify-center",
              light ? "text-[#FBBF24]" : "text-[#D97706]"
            )}
          >
            {index && <span className="tabular-nums">{index}</span>}
            {index && kicker && (
              <span
                className={cn(
                  "h-0.5 w-8",
                  light ? "bg-[#FBBF24]/70" : "bg-[#F59E0B]"
                )}
              />
            )}
            {kicker && <span>{kicker}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-h2-mobile font-extrabold tracking-tight sm:text-h2 text-balance",
            light ? "text-white" : "text-[#0C2340]"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-4 text-base sm:text-lg leading-relaxed text-justify",
              light ? "text-slate-200" : "text-slate-700"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
