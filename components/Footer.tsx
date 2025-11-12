import Link from "next/link";

const footerLinks = [
  { label: "Protocolos", href: "/pricing" },
  { label: "Equipo", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/docs" },
];

const contacts = [
  { label: "Reservas", value: "+01 2345 6789" },
  { label: "Correo", value: "hola@correo.com" },
  { label: "Ciudad", value: "Tu ciudad, País" },
];

export const Footer = () => {
  return (
    <footer className="relative isolate w-full bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)] opacity-30" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 sm:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.65em] text-white/60">
              Clínica Silvia Romero
            </p>
            <h4 className="mt-4 text-balance text-3xl font-light tracking-[0.08em]">
              <span className="text-[#d4af37]">Ritualiza</span> tu cuidado con tecnología estética y calidez humana.
            </h4>
          </div>
          <button className="self-start rounded-full border border-white/40 px-10 py-3 text-xs font-semibold uppercase tracking-[0.4em] transition hover:border-white hover:bg-white/10">
            Agenda visita
          </button>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          {contacts.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.45em] text-white/40">{item.label}</p>
              <p className="mt-3 [font-family:var(--font-title)] text-2xl font-light text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 border-t border-white/10 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="text-balance text-sm text-white/70">
            Experiencias diseñadas para observar, pausar y sentirte escuchada. Agenda presencial o virtual.
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.4em] text-white/60">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.35em] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Silvia Romero. Todos los derechos reservados.</span>
          <span>Aviso de privacidad · Ética médica</span>
        </div>
      </div>
    </footer>
  );
};
