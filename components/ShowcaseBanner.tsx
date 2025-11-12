import Image from "next/image";

export const ShowcaseBanner = () => {
  return (
    <section className="relative isolate w-full bg-white text-gray-900">
      <div className="relative left-1/2 flex w-screen -translate-x-1/2 flex-col">
        <div className="relative ml-auto w-[50%] max-w-xl md:w-[38%] md:max-w-none md:pr-[8vw]">
          <div className="relative h-[360px] overflow-hidden shadow-[0_35px_90px_rgba(15,23,42,0.18)] md:h-[440px] md:-translate-y-8 md:z-20">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Detalle de cosméticos profesionales sobre mármol"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 60vw, 90vw"
              priority
            />
          </div>
        </div>

        <div className="relative mt-[-10vw] h-[85vh] min-h-[640px]">
          <Image
            src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?auto=format&fit=crop&w=2000&q=80"
            alt="Retrato artístico en blanco y negro"
            fill
            className="object-cover grayscale"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <span className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-white/80">
              Cuidado hecho a tu medida
            </span>
            <p className="mt-6 max-w-3xl text-balance [font-family:var(--font-title)] text-4xl font-light tracking-[0.06em] text-white sm:text-5xl">
              “Te recibimos como <span className="text-[#d4af37]">mereces</span>: con tiempo, escucha y protocolos que honran tu historia y tu piel.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
