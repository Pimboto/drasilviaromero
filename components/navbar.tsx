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

  const closeMenu = () => setIsMenuOpen(false);

  const wrapperClasses = clsx(
    "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out backdrop-blur-lg border-b border-transparent",
    isScrolled ? "bg-black/90 border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.55)]" : "bg-transparent",
  );

  const navLinkClasses =
    "text-xs [font-family:var(--font-subtitle)] uppercase tracking-[0.45em] text-white/80 transition-colors duration-300 hover:text-white"; // subtle spacing for luxe feel

  return (
    <>
      <header className={wrapperClasses}>
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 hover:border-white/60"
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
            <Link href="/" aria-label="Go to homepage" className="flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Silvia Romero Logo"
                width={64}
                height={64}
                priority
                className="h-12 w-12 object-contain drop-shadow-[0_10px_20px_rgba(255,255,255,0.35)] transition-transform duration-500 ease-out"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <Button
              as={Link}
              href="#booking"
              radius="full"
              className="[font-family:var(--font-title)] text-xs uppercase tracking-[0.4em] text-white border border-white/40 bg-white/10 backdrop-blur hover:bg-white/20"
            >
              Book
            </Button>
          </div>

          <Link href="/" aria-label="Silvia Romero Home" className="hidden items-center justify-center md:flex">
            <Image
              src="/logo.png"
              alt="Silvia Romero Logo"
              width={120}
              height={120}
              priority
              className="h-20 w-20 object-contain drop-shadow-[0_22px_36px_rgba(255,255,255,0.35)] transition-transform duration-500 ease-out hover:scale-105"
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
              className="[font-family:var(--font-sans)] text-sm uppercase tracking-[0.6em] text-white/80 border border-white/30 px-4 py-2 rounded-full transition-all duration-300 hover:text-white hover:border-white/60"
            >
              {language === "es" ? "ES" : "ENG"}
            </button>
          </div>
      </div>
    </header>

    <div
      className={clsx(
        "md:hidden overflow-hidden bg-black/90 text-white transition-[max-height,opacity] duration-500 ease-out backdrop-blur-lg",
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <div className="flex flex-col gap-6 px-6 pb-8 pt-24">
        {primaryLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="[font-family:var(--font-subtitle)] text-base uppercase tracking-[0.5em] text-white/80 transition-colors hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <div className="flex items-center justify-between pt-4">
          <Button
            as={Link}
            href="#booking"
            radius="full"
            className="[font-family:var(--font-title)] text-xs uppercase tracking-[0.5em] text-white border border-white/30 bg-white/10 px-6"
            onClick={closeMenu}
          >
            Book Now
          </Button>
          <button
            type="button"
            onClick={() => setLanguage((prev) => (prev === "es" ? "eng" : "es"))}
            className="[font-family:var(--font-sans)] text-sm uppercase tracking-[0.5em] text-white/80 border border-white/30 px-4 py-2 rounded-full"
          >
            {language === "es" ? "ES" : "ENG"}
          </button>
        </div>
      </div>
    </div>
  </>
);
};
