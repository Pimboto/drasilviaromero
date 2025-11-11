import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen w-full items-stretch overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-image.png"
          alt="Elegantly lit models showcasing radiant skin"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_45%)] opacity-70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-black/70 to-black" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-6 pb-40 pt-32 text-center text-white sm:px-10 sm:pt-36 lg:pt-44">
        <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-white/70">
          Clinica Silvia Romero
        </p>
        <h1 className="mt-6 [font-family:var(--font-title)] text-4xl font-light leading-tight tracking-[0.08em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Tu potencial estetico te esta esperando
        </h1>
        <span className="mt-8 block h-px w-24 bg-white/60" />
        <p className="mt-6 max-w-3xl [font-family:var(--font-subtitle)] text-sm uppercase tracking-[0.5em] text-white/70 sm:text-base">
          Protocolos signature de medicina estetica para rostro y cuerpo con tecnologia de vanguardia.
        </p>
        <a
          href="#cta-section"
          className="group mt-auto flex flex-col items-center gap-4 text-white/70"
          aria-label="Desplazarse a la sección de protocolos personalizados"
        >
          <span className="[font-family:var(--font-subtitle)] text-[0.7rem] uppercase tracking-[0.8em]">
            Scroll
          </span>
          <span className="relative flex h-16 w-10 items-start justify-center rounded-full border border-white/30 bg-white/5 p-3 transition group-hover:border-white/60 group-hover:bg-white/10">
            <span className="h-2 w-2 rounded-full bg-white/80 animate-scroll-indicator" />
          </span>
        </a>
      </div>
    </section>
  );
};
