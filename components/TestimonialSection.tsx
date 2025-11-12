"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mariana F.",
    location: "CDMX",
    review:
      "La mejor atención que he recibido. Desde la recepción hasta el seguimiento digital sentí que mi piel estaba en las manos más expertas.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    protocol: "Glow integral",
  },
  {
    name: "Lucía A.",
    location: "Guadalajara",
    review:
      "Explican cada paso, respetan tu tiempo y personalizan todo. Los resultados se ven naturales, como yo pero descansada.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    protocol: "Armonización perioral",
  },
  {
    name: "Valeria R.",
    location: "Monterrey",
    review:
      "Se siente como un review premium de Google: fotos del antes y después, seguimiento y un trato impecable. Súper recomendado.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    protocol: "Definición mandibular",
  },
  {
    name: "Andrea C.",
    location: "Querétaro",
    review:
      "Nunca me habían escuchado con tanta paciencia. Adaptaron el plan a mis viajes y a mi estilo de vida. Volveré siempre.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=200&q=80",
    protocol: "Reset corporal",
  },
];

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 sm:px-10">
        <div className="flex flex-wrap items-center gap-4 text-white/80">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.5em]">
            <span className="rounded-full bg-white px-2 py-1 text-[0.65rem] font-bold text-black">G</span>
            <span className="text-[#d4af37]">Google Reviews</span>
          </div>
          <p className="text-sm text-white/60">4.98 · Experiencias reales verificadas</p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article
                key={item.name}
                className="flex w-full flex-shrink-0 flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_35px_120px_rgba(0,0,0,0.55)] sm:px-10"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image src={item.avatar} alt={item.name} fill className="object-cover" sizes="64px" />
                  </div>
                  <div>
                    <p className="text-base font-semibold tracking-[0.25em] uppercase">{item.name}</p>
                    <p className="text-xs tracking-[0.45em] uppercase text-white/60">
                      {item.location} · {item.protocol}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={`${item.name}-${idx}`} className="text-[#d4af37]">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-balance text-lg text-white/80">{item.review}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Mostrar testimonial ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? "w-10 bg-white" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
