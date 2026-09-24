import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A222D] via-[#0F303F] to-[#0A222D] pb-16 pt-[calc(var(--nav-height)+56px)] sm:pt-[calc(var(--nav-height)+76px)] text-white border-b border-[#143B4E]">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-20" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#FF5E3A]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FF5E3A]/40 to-transparent" />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#FF5E3A]">
            <span className="h-0.5 w-8 bg-[#FF5E3A]" />
            <span>{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-h2-mobile font-extrabold tracking-tight text-white sm:text-h2">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300 text-justify">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </Container>
    </section>
  );
}

