"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export const InitialLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={clsx(
        "fixed inset-0 z-[1000] flex items-center justify-center bg-black text-white transition-all duration-700 ease-out",
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.6em] text-white/70">
          <span className="h-2 w-2 rounded-full bg-[#d4af37] animate-ping" />
          Cargando
        </div>
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20">
          <div className="absolute inset-0 rounded-full border-t-2 border-[#d4af37] animate-[spin_2.5s_linear_infinite]" />
          <span className="[font-family:var(--font-title)] text-4xl tracking-[0.05em] text-white">SR</span>
        </div>
        <p className="max-w-sm text-base text-white/80">
          Preparando una experiencia <span className="text-[#d4af37]">sensorial</span> a tu medida.
        </p>
      </div>
    </div>
  );
};
