"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function GamesNavbar() {
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
        scrolled ? "bg-white border-b border-neutral-100" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/games" className="text-lg font-bold text-neutral-900 tracking-tight">
          ARKLINE GAMES
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Hakkımızda", "#about"],
            ["Oyunlar", "#games"],
            ["Kariyer", "#careers"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {label}
            </a>
          ))}
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            ← Arkline Teknoloji
          </Link>
          <a
            href="#careers"
            className="text-sm font-semibold bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-700 transition-colors"
          >
            Açık Pozisyonlar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-900"
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-neutral-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {[
              ["Hakkımızda", "#about"],
              ["Oyunlar", "#games"],
              ["Kariyer", "#careers"],
              ["← Arkline Teknoloji", "/"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
