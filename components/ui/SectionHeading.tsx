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
              "mb-2.5 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider",
              align === "center" && "justify-center",
              light ? "text-[#FFA893]" : "text-[#FF5E3A]"
            )}
          >
            <span className="font-mono text-sm tracking-tight font-black">{"//"}</span>
            {index && <span className="tabular-nums">{index} &bull;</span>}
            {kicker && <span>{kicker}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance",
            light ? "text-white" : "text-[#0F303F]"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-3 text-sm sm:text-base leading-relaxed text-left",
              light ? "text-slate-300" : "text-slate-600"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
