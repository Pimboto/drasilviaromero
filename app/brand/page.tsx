import Image from "next/image";

import { fontBody, fontMono, fontSubtitle, fontTitle } from "@/config/fonts";

const brandColors = [
  { name: "Oro Selén", value: "#d4af37", usage: "Accentos premium" },
  { name: "Negro Eclipse", value: "#050505", usage: "Fondos principales" },
  { name: "Marfil Bruma", value: "#f4f0ea", usage: "Bloques claros" },
  { name: "Gris Humo", value: "#8e8e8e", usage: "Texto de apoyo" },
];

const typographyScale = [
  { label: "Display", size: "56px", tracking: "0.08em", font: fontTitle.className },
  { label: "Heading", size: "36px", tracking: "0.08em", font: fontTitle.className },
  { label: "Subtitle", size: "14px", tracking: "0.6em", font: fontSubtitle.className },
  { label: "Body", size: "18px", tracking: "0.05em", font: fontBody.className },
  { label: "Mono Detail", size: "13px", tracking: "0.2em", font: fontMono.className },
];

export default function BrandIdentity() {
  return (
    <main className="flex flex-col overflow-hidden bg-black text-white">
      <section className="relative isolate w-full px-6 py-24 sm:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.15),_transparent_60%)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 text-center sm:text-left">
          <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.6em] text-white/60">
            Brand identity
          </p>
          <h1 className="text-balance [font-family:var(--font-title)] text-4xl font-light tracking-[0.08em] sm:text-5xl md:text-6xl">
            ADN visual de <span className="text-[#d4af37]">Clínica Silvia Romero</span>
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            Guía rápida para diseñar landing pages, presentaciones o campañas con consistencia sensorial. Mantén los
            contrastes altos, el espaciado generoso y los acentos dorados en un máximo del 10% del layout.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 text-gray-900 sm:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
          {brandColors.map((color) => (
            <div key={color.name} className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/80 p-6">
              <div className="h-32 w-full rounded-2xl" style={{ backgroundColor: color.value }} />
              <div className="text-xs uppercase tracking-[0.4em] text-gray-500">{color.usage}</div>
              <p className="[font-family:var(--font-title)] text-2xl text-gray-900">{color.name}</p>
              <code className="text-sm text-gray-600">{color.value}</code>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-6 py-20 sm:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <div>
            <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.6em] text-white/60">
              Tipografía
            </p>
            <h2 className="mt-4 text-balance [font-family:var(--font-title)] text-3xl font-light tracking-[0.08em] text-white sm:text-4xl">
              Jerarquías y atmósferas
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {typographyScale.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.45em] text-white/50">{item.label}</p>
                <p className={`${item.font} mt-4 text-white`} style={{ fontSize: item.size, letterSpacing: item.tracking }}>
                  Belleza consciente
                </p>
                <div className="mt-4 text-sm text-white/60">
                  {item.size} · Tracking {item.tracking}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 text-gray-900 sm:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.6em] text-gray-500">
              Logo & lockups
            </p>
            <h2 className="text-balance [font-family:var(--font-title)] text-3xl font-light tracking-[0.08em] text-gray-900 sm:text-4xl">
              Usos del emblema SR
            </h2>
            <p className="text-lg text-gray-600">
              Preferimos el logotipo centrado sobre fondos oscuros para la web y versiones monocromáticas sobre marfil
              para impresos. Mantén un área segura equivalente al diámetro del círculo exterior.
            </p>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>• Medidas recomendadas en hero: 96–120 px de alto</li>
              <li>• No aplicar sombras duras ni efectos 3D</li>
              <li>• Combinar únicamente con la paleta oficial</li>
            </ul>
          </div>
          <div className="grid gap-6">
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-black/90 px-10 py-12 text-white">
              <Image
                src="/logo.png"
                alt="Logo SR en negativo"
                width={140}
                height={140}
                priority
                className="h-32 w-32 object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="text-xs uppercase tracking-[0.5em] text-white/60">Versión inversa</span>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-3xl bg-[#f4f0ea] px-10 py-12 text-gray-900">
              <Image src="/logo.png" alt="Logo SR positivo" width={120} height={120} priority className="h-28 w-28 object-contain" />
              <span className="text-xs uppercase tracking-[0.5em] text-gray-500">Versión positiva</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
