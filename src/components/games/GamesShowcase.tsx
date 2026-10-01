"use client";

const GAMES = [
  {
    title: "Royal Quest: Match & Kingdom",
    genre: "Match-3 Puzzle",
    status: "Live",
    desc: "Büyüleyici karakterler ve sürükleyici bulmaca mekaniğiyle dünya genelinde 25 milyondan fazla oyuncunun tercihi.",
  },
  {
    title: "Cyber Circuit: 2088",
    genre: "Rhythm Runner",
    status: "Live",
    desc: "Synthwave müzikler ve refleks tabanlı oynanışıyla neon ışıklı bir gelecekte geçen ritim koşusu.",
  },
  {
    title: "Bloom Valley: Merge Stories",
    genre: "Casual Merge",
    status: "Live",
    desc: "Huzur veren merge mekaniği ve hikaye odaklı karakterlerle dolu rahatlatıcı bir simülasyon deneyimi.",
  },
  {
    title: "Project Nexus",
    genre: "1v1 Strategy",
    status: "Yakında",
    desc: "Yeni nesil rekabetçi mobil strateji. Adil, derinlikli, hızlı.",
  },
];

export default function GamesShowcase() {
  return (
    <section id="games" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Oyunlarımız
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
              Oyunlarımız
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base text-neutral-500 leading-relaxed">
              Her biri milyonlarca oyuncuya ulaşan, yüksek kaliteli grafik ve
              sürükleyici oynanışla öne çıkan yapımlar.
            </p>
          </div>
        </div>

        {/* Games grid - Dream Games style: big image placeholder + minimal text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {GAMES.map((g) => (
            <div key={g.title} className="bg-white group cursor-pointer">
              {/* Image placeholder - replace with actual game art */}
              <div className="aspect-[4/3] bg-neutral-100 group-hover:bg-neutral-150 transition-colors flex items-center justify-center">
                <span className="text-neutral-300 text-sm uppercase tracking-widest select-none">
                  {g.genre}
                </span>
              </div>
              {/* Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
                    {g.genre}
                  </p>
                  <span className={`text-xs px-2 py-0.5 ${g.status === "Live" ? "bg-neutral-900 text-white" : "border border-neutral-300 text-neutral-500"}`}>
                    {g.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{g.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
