"use client";

import { Sparkles, TrendingUp, Flame, Heart, Coffee, Laptop, Award, Compass } from "lucide-react";
import { CULTURE_VALUES } from "@/data/gamesData";

export default function GamesCulture() {
  const perks = [
    {
      icon: <Laptop className="w-5 h-5 text-pink-400" />,
      title: "En Üst Düzey Donanım",
      desc: "Tüm geliştiricilerimiz için en yeni Apple Silicon (M3/M4 Max) ve 4K ekran donanımları.",
    },
    {
      icon: <Coffee className="w-5 h-5 text-amber-400" />,
      title: "Hibrit & Esnek Yaşam",
      desc: "İster İstanbul Maslak stüdyomuzdan, ister evinizden odaklanın; saatleri değil çıktıları önemsiyoruz.",
    },
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      title: "Sınırsız Gelişim Bütçesi",
      desc: "GDC, Gamescom gibi global oyun konferansları ve profesyonel eğitim fonu.",
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: "Özel Sağlık & Wellness",
      desc: "Kapsamlı özel sağlık sigortası, spor ve mental sağlık destek programları.",
    },
  ];

  const getValueIcon = (name: string) => {
    switch (name) {
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-cyan-400" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-amber-400" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-rose-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-pink-400" />;
    }
  };

  return (
    <section id="culture" className="py-24 bg-slate-900/40 relative border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
            <span>Kültür ve Değerler</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Büyük Oyunlar, Harika Ekiplerle Doğar
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dream Games ve Peak ekolünde olduğu gibi, bürokrasiden uzak, şeffaf ve yalnızca
            mükemmel oyun üretmeye odaklanan otonom bir stüdyo kültürü kurduk.
          </p>
        </div>

        {/* Culture Values 4 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CULTURE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/80 border border-purple-950/80 hover:border-purple-600/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-950/50 border border-purple-800/40 flex items-center justify-center mb-5">
                  {getValueIcon(val.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Perks */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-950 to-purple-950/30 border border-purple-900/40">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Arkline Games Ekibinde Yaşam
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Yeteneklerimizin sadece üretmeye ve tasarlamaya odaklanması için en iyi koşulları sağlıyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-900/70 border border-purple-900/30 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 flex items-center justify-center mb-3">
                  {perk.icon}
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{perk.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
