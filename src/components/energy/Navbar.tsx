"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const LINKS = [
  ["Faaliyet Alanları", "#hizmetler"],
  ["Hakkımızda", "#hakkimizda"],
  ["İletişim", "#iletisim"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        solid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className={`text-lg font-bold tracking-tight transition-colors ${solid ? "text-brand" : "text-white"}`}
        >
          ARKLİNE <span className="font-light">TEKNOLOJİ</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={`text-sm transition-colors ${
                solid ? "text-brand/70 hover:text-brand" : "text-white/85 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#iletisim"
            className="bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/85"
          >
            Teklif İsteyin
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${solid ? "text-brand" : "text-white"}`}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white md:hidden">
          <div className="flex flex-col gap-4 px-6 py-5">
            {LINKS.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-base text-brand"
              >
                {label}
              </a>
            ))}
            <a
              href="#iletisim"
              onClick={() => setOpen(false)}
              className="bg-accent px-4 py-3 text-center text-sm font-medium text-white"
            >
              Teklif İsteyin
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
