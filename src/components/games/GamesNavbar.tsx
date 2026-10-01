"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Gamepad2, ArrowLeft, Menu, X, Sparkles, Briefcase } from "lucide-react";

export default function GamesNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Oyunlarımız", href: "#games" },
    { name: "Kültür & Değerler", href: "#culture" },
    { name: "Açık Pozisyonlar (Kariyer)", href: "#careers" },
    { name: "Stüdyo Hakkında", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-purple-900/30 shadow-xl shadow-purple-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/games" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-400 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:scale-105 transition-transform duration-300">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white font-sans flex items-center gap-1.5">
                ARKLINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">GAMES</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Mobile Game Studio
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-300 hover:text-pink-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Back to Energy Site */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>⚡ Arkline Teknoloji (Enerji)</span>
            </Link>

            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-pink-500/20 transition-all"
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Aramıza Katılın</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-900 border border-slate-700 text-slate-300"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Enerji</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-purple-900/40 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-200 hover:text-pink-400 border-b border-slate-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 text-amber-400"
            >
              ⚡ Arkline Teknoloji (Enerji Web Sitesi)
            </Link>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
            >
              Açık Pozisyonlar (Kariyer)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
