"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, Menu, X, PhoneCall, ChevronRight, Gamepad2, ArrowUpRight } from "lucide-react";

export default function Navbar() {
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
    { name: "Faaliyet Alanlarımız", href: "#faaliyetler" },
    { name: "Hakkımızda & Gücümüz", href: "#hakkimizda" },
    { name: "Hesaplama Araçları", href: "#hesaplayici" },
    { name: "Projeler & Sektörler", href: "#projeler" },
    { name: "İletişim & Teklif", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-amber-500 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-all duration-300">
              <Zap className="w-6 h-6 text-slate-950 fill-amber-300 stroke-slate-950 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white font-sans flex items-center gap-1.5">
                ARKLİNE <span className="text-amber-400">TEKNOLOJİ</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Elektrik & Enerji Çözümleri
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            {/* Arkline Games Link Button */}
            <Link
              href="/games"
              className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-purple-500/40 text-purple-200 hover:text-white hover:border-pink-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-pink-400 group-hover:rotate-12 transition-transform" />
              <span>Arkline Games</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-pink-500 text-white font-bold uppercase tracking-wider">
                Yeni
              </span>
            </Link>

            {/* Quick Contact & Quote CTA */}
            <a
              href="#iletisim"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Teklif Alın</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/games"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-950/80 border border-purple-500/50 text-purple-200"
            >
              <Gamepad2 className="w-3 h-3 text-pink-400" />
              <span>Games</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-amber-400 border-b border-slate-900"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/games"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-950/80 to-slate-900 border border-purple-500/30 text-purple-200"
            >
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-pink-400" />
                <span className="font-semibold text-sm">Arkline Games Stüdyosu</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-pink-400" />
            </Link>
            <a
              href="#iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 rounded-lg font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm shadow-md shadow-amber-500/20"
            >
              Hızlı Teklif & 7/24 İletişim
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
