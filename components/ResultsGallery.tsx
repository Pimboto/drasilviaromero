import Image from "next/image";

const cases = [
  {
    area: "Bio-remodelación facial",
    before: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1506898665063-3ff2015a8982?auto=format&fit=crop&w=900&q=80",
    note: "3 sesiones / 6 semanas",
  },
  {
    area: "Armonización perioral",
    before: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1542838686-73e4230d3162?auto=format&fit=crop&w=900&q=80",
    note: "2 sesiones / 4 semanas",
  },
  {
    area: "Definición mandibular",
    before: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=900&q=80",
    note: "1 sesión / ácido hialurónico",
  },
  {
    area: "Glow corporal",
    before: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    after: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    note: "4 sesiones / ritual detox",
  },
];

export const ResultsGallery = () => {
  return (
    <section className="relative isolate w-full bg-white text-gray-900">
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-24 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-gray-500">
                What are the results
              </p>
              <h3 className="mt-4 text-balance [font-family:var(--font-title)] text-3xl font-light tracking-[0.08em] sm:text-4xl">
                <span className="text-[#d4af37]">Antes y después</span> curados con criterio médico.
              </h3>
            </div>
            <p className="max-w-xl text-sm text-gray-600">
              Cada protocolo se documenta con luz clínica y seguimiento digital para asegurar la evolución
              natural del tejido. Aquí algunos de los resultados más solicitados.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {cases.map((item) => (
              <article key={item.area} className="group relative overflow-hidden border border-gray-200 bg-gray-50">
                <div className="flex flex-col gap-4 px-6 pt-6 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="[font-family:var(--font-subtitle)] text-sm uppercase tracking-[0.4em] text-gray-500">
                    {item.area}
                  </p>
                  <span className="text-xs uppercase tracking-[0.4em] text-gray-400">{item.note}</span>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.before}
                      alt={`Antes de ${item.area}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-gray-900">
                      Antes
                    </span>
                  </div>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.after}
                      alt={`Después de ${item.area}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/40" />
                    <span className="absolute left-4 top-4 rounded-full bg-gray-900/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-white">
                      Después
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="rounded-full border border-gray-900 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-gray-900 transition hover:bg-gray-900 hover:text-white">
              Ver más casos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
