import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center bg-navy-950 pt-[var(--nav-height)] text-white">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-25" />
      <Container className="relative text-center">
        <p className="font-display text-8xl sm:text-9xl font-black tracking-tight text-white/10 select-none">404</p>
        <h1 className="-mt-8 sm:-mt-10 font-display text-2xl sm:text-4xl font-extrabold text-white">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-300 text-justify">
          The requested engineering resource or page may have moved. You can return to the homepage or submit your drawing directly.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button href="/" variant="primary" showArrow>
            Back to Home
          </Button>
          <Button href="/quote" variant="outline-light">
            Request a Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
