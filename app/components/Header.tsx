"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/our-story", label: "Our Story" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl">
      <div
        className={`flex items-center justify-between px-4 py-2 border-3 border-navy rounded-3xl bg-cream/90 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "shadow-[5px_5px_0px_var(--color-navy)] py-2.5"
            : "shadow-[3px_3px_0px_var(--color-navy)] py-3"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-wider text-navy cursor-pointer group"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-navy bg-[#0b3aa8] shadow-[2px_2px_0px_var(--color-navy)] transition-transform duration-200 group-hover:scale-110">
            <Image
              src="/logo.png"
              alt="Sai Laban Logo"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <Image
            src="/sai_logo_trim.png"
            alt="Sai Laban"
            width={1139}
            height={190}
            className="h-6 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer rounded-full px-4 py-1.5 border-2 ${
                  isActive
                    ? "bg-navy text-cream border-navy shadow-[2px_2px_0px_var(--color-sky)]"
                    : "text-navy border-transparent hover:border-navy/15 hover:bg-navy/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-navy text-navy hover:bg-navy/10 transition-colors duration-200 cursor-pointer md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="mt-2 flex flex-col gap-1 border-3 border-navy rounded-2xl bg-cream/95 backdrop-blur-md p-3 shadow-[5px_5px_0px_var(--color-navy)] md:hidden animate-in fade-in slide-in-from-top-3 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`min-h-11 rounded-xl px-4 py-2.5 font-display text-base font-bold cursor-pointer border-2 transition-all duration-200 flex items-center ${
                  isActive
                    ? "bg-navy text-cream border-navy shadow-[2px_2px_0px_var(--color-sky)]"
                    : "text-navy border-transparent hover:bg-navy/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}

