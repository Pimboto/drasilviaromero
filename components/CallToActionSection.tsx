"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const treatments = [
  {
    title: "Lifting luminoso",
    copy: "Radiofrecuencia fraccionada con bioestimuladores para un contorno firme y uniforme.",
  },
  {
    title: "Escultura profilar",
    copy: "Inyectables estratégicos que definen mentón y pómulos sin alterar tu expresión.",
  },
  {
    title: "Glow infusion",
    copy: "Peelings en capas y mesoterapia de vitaminas para recuperar luz y suavidad.",
  },
  {
    title: "Reset corporal",
    copy: "Drenaje linfático y aparatología reductiva para modelar zonas rebeldes.",
  },
];

const stats = [
  { label: "Clientes satisfechos", value: 940 },
  { label: "Años de experiencia", value: 18 },
  { label: "Protocolos signature", value: 32 },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const CallToActionSection = () => {
  const [animatedStats, setAnimatedStats] = useState(() => stats.map(() => 0));

  useEffect(() => {
    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const tick = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setAnimatedStats(stats.map((stat) => Math.round(stat.value * eased)));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section id="cta-section" className="relative isolate w-full overflow-hidden bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-24 sm:px-10">
        <div className="max-w-3xl">
          <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-white/60">
            Agenda tu diagnostico
          </p>
          <h2 className="mt-6 [font-family:var(--font-title)] text-3xl font-light leading-tight tracking-[0.1em] sm:text-4xl md:text-5xl">
            Protocolos personalizados para piel, contorno y bienestar integral.
          </h2>
          <p className="mt-5 text-base text-white/80 sm:text-lg">
            Evaluamos tu estilo de vida, rutina y metas estéticas para diseñar un plan holístico que
            combine aparatología, técnicas médicas y rituales sensoriales. Cada sesión termina con
            recomendaciones de mantenimiento para sostener el resultado en casa.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {treatments.map((item) => (
              <div key={item.title}>
                <p className="[font-family:var(--font-subtitle)] text-sm uppercase tracking-[0.4em] text-white/70">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-white/80">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative left-1/2 mt-10 w-screen -translate-x-1/2">
        <div className="absolute inset-0 -z-20 bg-black" aria-hidden />
        <div
          className="absolute inset-x-0 top-1/2 -z-10 h-full bg-white md:top-[44%]"
          aria-hidden
        />
        <div className="relative flex h-[600px] flex-col gap-6 md:h-[740px] md:flex-row md:items-center md:gap-0">
          <div className="relative h-[380px] w-full flex-1 overflow-hidden md:h-[700px] md:-mr-[8vw] md:-translate-y-20">
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
              alt="Interior cálido y minimalista de la clínica Silvia Romero"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          <div className="relative h-[420px] w-full flex-1 overflow-hidden md:h-[780px] md:-ml-[12vw] md:translate-y-16 md:z-10 md:drop-shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              alt="Paciente posando con la piel luminosa después del tratamiento"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full bg-white px-6 pb-24 pt-24 text-gray-900 sm:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1200&q=80"
              alt="Dra. Silvia Romero atendiendo a una paciente en cabina"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-gray-900">
              Dra. Romero
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-gray-500">
                Sobre nosotros
              </p>
              <h3 className="mt-6 [font-family:var(--font-title)] text-3xl font-light leading-tight tracking-[0.08em] text-gray-900 sm:text-4xl">
                Medicina estética con raíces latinas y precisión europea.
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                La clínica está ubicada en Av. Paseo de la Reforma, Ciudad de México. Liderada por la Dra.
                Silvia Romero, cirujana estética con más de 18 años perfeccionando protocolos personalizados
                para piel, contorno facial y bienestar integral. Nuestro equipo combina técnicas médicas,
                rituales sensoriales y seguimiento digital para extender cada resultado en casa.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <p className="[font-family:var(--font-subtitle)] text-4xl font-semibold tracking-[0.15em] text-gray-900">
                    +{animatedStats[index]}
                  </p>
                  <p className="text-xs uppercase tracking-[0.45em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-gray-900 px-10 py-3 text-sm font-medium uppercase tracking-[0.3em] text-white transition hover:bg-gray-700">
                Conoce más
              </button>
              <p className="text-sm text-gray-500">
                Agenda tu visita privada o solicita una videollamada de diagnóstico inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
