"use client";

import { Zap, ShieldCheck, Clock, ArrowRight, Award, Flame, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950">
      {/* Background Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle circuit line animation simulator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-amber-400 to-transparent animate-pulse delay-700" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-amber-500/10 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="font-semibold">ARKLİNE TEKNOLOJİ</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Enerjinin Güvenilir Adresi ⚡</span>
          </div>

          {/* Main Slogan & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Gücünüzü{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-cyan-400">
              Geleceğe
            </span>{" "}
            Taşıyoruz.
          </h1>

          {/* Subtitle / Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal mb-8 max-w-3xl mx-auto leading-relaxed">
            Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet.
            <span className="block mt-2 text-slate-400 text-base sm:text-lg">
              Alçak ve yüksek gerilimden GES kurulumlarına, pano imalatından 7/24 arıza ve bakıma
              kadar tüm endüstriyel ve ticari enerji ihtiyaçlarınızda yanınızdayız.
            </span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#faaliyetler"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/25 transition-all duration-200 group"
            >
              <Zap className="w-5 h-5 fill-slate-950" />
              <span>13 Faaliyet Alanımızı Keşfedin</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#iletisim"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 transition-all duration-200 backdrop-blur-sm"
            >
              <span>Ücretsiz Keşif & Proje Teklifi</span>
            </a>

            <a
              href="tel:+905000000000"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-500/30 transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-red-400" />
              <span>7/24 Acil Arıza Hattı</span>
            </a>
          </div>

          {/* Trust Highlights / Metric Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">500+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Tamamlanan Proje</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">50+ MW</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Kurulu GES Kapasitesi</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">%99.9</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Sistem Sürekliliği</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 mb-1">7 / 24</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">Kesintisiz Teknik Müdahale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
