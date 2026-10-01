"use client";

import { Sparkles, Gamepad2, Trophy, Star, ArrowDown, ArrowRight } from "lucide-react";

export default function GamesHero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Radial Purple & Pink Gradients */}
      <div className="absolute inset-0 bg-radial-games opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[300px] bg-pink-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating game geometric badges */}
      <div className="absolute top-36 left-12 hidden lg:flex items-center gap-2 p-3 rounded-2xl bg-purple-950/40 border border-purple-500/20 backdrop-blur-md animate-bounce duration-1000">
        <span className="text-2xl">👑</span>
        <div className="text-left">
          <div className="text-xs font-bold text-white">#1 Top Grossing</div>
          <div className="text-[10px] text-purple-300">Match-3 Category</div>
        </div>
      </div>

      <div className="absolute bottom-28 right-16 hidden lg:flex items-center gap-2 p-3 rounded-2xl bg-pink-950/40 border border-pink-500/20 backdrop-blur-md animate-pulse">
        <span className="text-2xl">⚡</span>
        <div className="text-left">
          <div className="text-xs font-bold text-white">50M+ Downloads</div>
          <div className="text-[10px] text-pink-300">Worldwide Players</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
        {/* Top Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-purple-500/15 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>ARKLINE GAMES • World-Class Mobile Hits</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.08]">
          Milyonların Kalbine Dokunan <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
            Kusursuz Oyun Deneyimleri
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
          Sanat, teknoloji ve oyuncu odaklı mühendisliği bir araya getirerek zamansız mobil hitler
          üretiyoruz. İstanbul'dan tüm dünyaya eğlence ihraç ediyoruz.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#games"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:to-pink-500 text-white shadow-xl shadow-pink-500/25 transition-all group"
          >
            <Gamepad2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Oyunlarımızı Keşfedin</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#careers"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold bg-slate-900/90 hover:bg-slate-800 text-white border border-purple-900/60 hover:border-pink-500/40 transition-all backdrop-blur-sm"
          >
            <span>Açık Pozisyonlar & Kültür</span>
          </a>
        </div>

        {/* Studio Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-purple-950/60">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-purple-900/30 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-1">
              50M+
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Global İndirme</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-purple-900/30 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1 flex items-center justify-center gap-1">
              <span>4.85</span>
              <Star className="w-5 h-5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Ortalama Mağaza Puanı</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-purple-900/30 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">160+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Ulaşılan Ülke</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/50 border border-purple-900/30 backdrop-blur-sm">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">120 FPS</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Ultra Akıcı Performans</div>
          </div>
        </div>
      </div>
    </section>
  );
}
