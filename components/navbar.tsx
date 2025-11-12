"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@heroui/button";

const primaryLinks = [
  { label: "Face", href: "#face" },
  { label: "Body", href: "#body" },
  { label: "Technologies", href: "#technologies" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"es" | "eng">("es");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const wrapperClasses = clsx(
    "fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-2xl transition-colors duration-500 ease-out",
    isScrolled ? "bg-black/85 border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.45)]" : "bg-transparent",
  );

  const navLinkClasses =
    "text-xs [font-family:var(--font-subtitle)] uppercase tracking-[0.45em] text-white/80 transition-colors duration-300 hover:text-white"; // subtle spacing for luxe feel

  const languageButtonClasses =
    "[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.45em] border px-5 py-2 rounded-full transition-colors duration-300";

  return (
    <>
      <header className={wrapperClasses}>
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="hidden flex-1 items-center gap-8 md:flex">
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className={navLinkClasses} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-1 items-center justify-between md:hidden">
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:border-white"
            >
              <span className="relative flex h-3 w-4 flex-col justify-between">
                <span
                  className={clsx(
                    "block h-0.5 rounded-full bg-white transition-transform duration-300 ease-out",
                    isMenuOpen && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={clsx(
                    "block h-0.5 rounded-full bg-white transition-opacity duration-300 ease-out",
                    isMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={clsx(
                    "block h-0.5 rounded-full bg-white transition-transform duration-300 ease-out",
                    isMenuOpen && "-translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
            <Link href="/" aria-label="Ir al inicio" className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Silvia Romero Logo"
                width={72}
                height={72}
                priority
                className="h-14 w-14 object-contain transition-transform duration-500 ease-out"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === "es" ? "eng" : "es"))}
              className={clsx(
                languageButtonClasses,
                "border-white/40 text-white/80 hover:border-white hover:text-white",
              )}
            >
              {language === "es" ? "ES" : "ENG"}
            </button>
          </div>

          <Link href="/" aria-label="Silvia Romero Home" className="hidden items-center justify-center md:flex">
            <Image
              src="/logo.png"
              alt="Silvia Romero Logo"
              width={160}
              height={160}
              priority
              className="h-24 w-24 object-contain transition-transform duration-500 ease-out hover:scale-105"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
            <Button
              as={Link}
              href="#booking"
              radius="full"
              className="[font-family:var(--font-title)] text-xs uppercase tracking-[0.5em] text-white border border-white/40 bg-white/5 px-8 py-5 transition-all duration-300 ease-out hover:bg-white/20 hover:-translate-y-0.5"
            >
              Book Now
            </Button>
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === "es" ? "eng" : "es"))}
              className={clsx(
                languageButtonClasses,
                "border-white/30 text-white/80 hover:border-white hover:text-white",
              )}
            >
              {language === "es" ? "ES" : "ENG"}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black/95 text-white md:hidden">
          <div className="mt-24 flex flex-1 flex-col gap-8 px-6 pb-12">
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="[font-family:var(--font-subtitle)] text-lg uppercase tracking-[0.5em] text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button
              as={Link}
              href="#booking"
              radius="full"
              onClick={closeMenu}
              className="[font-family:var(--font-title)] text-xs uppercase tracking-[0.5em] text-white border border-white/30 bg-white/10 px-6 py-6 transition hover:bg-white/20"
            >
              Book Now
            </Button>
            <button
              type="button"
              onClick={() => setLanguage((prev) => (prev === "es" ? "eng" : "es"))}
              className={clsx(languageButtonClasses, "border-white/30 text-white/80 hover:border-white hover:text-white")}
            >
              {language === "es" ? "ES" : "ENG"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
