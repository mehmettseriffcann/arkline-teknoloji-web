"use client";

import { useState } from "react";
import { Star, Download, Play, CheckCircle2, Apple, PlaySquare, ArrowUpRight } from "lucide-react";
import { GAMES_DATA, GameTitle } from "@/data/gamesData";

export default function GamesShowcase() {
  const [activeGameModal, setActiveGameModal] = useState<GameTitle | null>(null);

  return (
    <section id="games" className="py-24 bg-slate-950 relative border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Stüdyo Portföyümüz</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Milyonların Oynadığı Oyunlarımız
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dream Games ve Peak ekolünü benimseyen stüdyomuzda, her detayında oyuncu memnuniyeti ve
            mükemmel optimizasyon bulunan yapımlar üretiyoruz.
          </p>
        </div>

        {/* Games Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {GAMES_DATA.map((game) => (
            <div
              key={game.id}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 to-purple-950/20 border border-purple-900/40 hover:border-pink-500/50 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge & Genre */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-500/20">
                    {game.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-bold bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span>{game.rating}</span>
                    <span className="text-slate-500 text-xs font-normal">({game.reviewsCount})</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {game.title}
                </h3>
                <div className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-4">
                  {game.genre}
                </div>
                <p className="text-slate-300 text-sm font-medium mb-3 italic">
                  "{game.tagline}"
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {game.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8 bg-slate-950/60 p-4 rounded-2xl border border-slate-900">
                  {game.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons & Stores */}
              <div className="pt-6 border-t border-purple-900/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {game.status === "live" ? (
                    <>
                      <button
                        onClick={() => setActiveGameModal(game)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        <PlaySquare className="w-4 h-4 text-pink-400" />
                        <span>Oynanış Fragmanı</span>
                      </button>
                      <span className="text-xs text-slate-500 font-medium">
                        {game.downloads}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs text-purple-300 font-semibold bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-700/50">
                      🚀 Çok Yakında Mağazalarda
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveGameModal(game)}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white transition-all shadow-md shadow-pink-500/20 cursor-pointer"
                  >
                    Detayları Gör
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Game Detail Modal */}
      {activeGameModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-slate-900 border border-purple-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                  {activeGameModal.genre}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {activeGameModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveGameModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {activeGameModal.description}
            </p>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-900/50 mb-6 space-y-2">
              <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
                Teknik Öne Çıkanlar:
              </div>
              {activeGameModal.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 font-medium">
                Mevcut: {activeGameModal.platforms.join(", ")}
              </span>
              <button
                onClick={() => setActiveGameModal(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-pink-500 hover:bg-pink-400 text-white cursor-pointer"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
