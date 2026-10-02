"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-white border-b border-neutral-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            ARKLİNE
          </span>
          <span
            className={`text-lg font-bold tracking-tight transition-colors ${
              scrolled ? "text-neutral-900" : "text-white"
            }`}
          >
            TEKNOLOJİ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Hizmetler", "#hizmetler"],
            ["Hakkımızda", "#hakkimizda"],
            ["İletişim", "#iletisim"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-neutral-600 hover:text-neutral-900"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}

          <Link
            href="/games"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? "text-neutral-600 hover:text-neutral-900"
                : "text-white/80 hover:text-white"
            }`}
          >
            Games
          </Link>

          <a
            href="#iletisim"
            className="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-700 transition-colors"
          >
            Teklif Alın
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-neutral-900" : "text-white"}`}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {[
              ["Hizmetler", "#hizmetler"],
              ["Hakkımızda", "#hakkimizda"],
              ["İletişim", "#iletisim"],
              ["Games", "/games"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
              >
                {label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 text-center"
            >
              Teklif Alın
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
