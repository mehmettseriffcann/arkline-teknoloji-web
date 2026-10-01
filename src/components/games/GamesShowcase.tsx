"use client";

// Circle.gs style: each game gets its own full row with icon + screenshot + store buttons
const GAMES = [
  {
    id: "royal-quest",
    title: "Royal Quest",
    genre: "Match-3 Puzzle",
    desc: "Bulmaca mekanikleriyle bölümleri tamamla, krallığını yeniden inşa et.",
    // Mobile game screenshot style image
    img: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&q=75&auto=format&fit=crop",
    platforms: ["App Store", "Google Play"],
    live: true,
  },
  {
    id: "cyber-circuit",
    title: "Cyber Circuit",
    genre: "Rhythm Runner",
    desc: "Müzik ritmiyle senkronize, hızlı tempolu bir koşu oyunu.",
    img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&q=75&auto=format&fit=crop",
    platforms: ["App Store", "Google Play"],
    live: true,
  },
  {
    id: "bloom-valley",
    title: "Bloom Valley",
    genre: "Merge & Puzzle",
    desc: "Nesneleri birleştir, hikayeni ilerlet, vadiyi keşfet.",
    img: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&q=75&auto=format&fit=crop",
    platforms: ["App Store", "Google Play"],
    live: true,
  },
  {
    id: "project-nexus",
    title: "Project Nexus",
    genre: "1v1 Strategy",
    desc: "Gerçek zamanlı rekabetçi strateji. Yakında.",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=75&auto=format&fit=crop",
    platforms: [],
    live: false,
  },
];

export default function GamesShowcase() {
  return (
    <section id="games" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Games</p>
          <h2 className="text-3xl font-bold text-neutral-900">Oyunlarımız</h2>
        </div>

        {/* Circle.gs / Gram.gs style: each game in a row */}
        <div className="space-y-px bg-neutral-200">
          {GAMES.map((g) => (
            <div key={g.id} className="bg-white">
              <div className="flex flex-col md:flex-row">
                {/* Game image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.img}
                  alt={g.title}
                  className="w-full md:w-64 h-44 md:h-auto object-cover shrink-0"
                />
                {/* Game info */}
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <p className="text-xs text-neutral-400 uppercase tracking-widest">{g.genre}</p>
                      {!g.live && (
                        <span className="text-xs border border-neutral-200 text-neutral-400 px-2 py-0.5">
                          Yakında
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{g.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed max-w-md">{g.desc}</p>
                  </div>

                  {g.live && g.platforms.length > 0 && (
                    <div className="flex gap-3 mt-6">
                      {g.platforms.map((p) => (
                        <button
                          key={p}
                          className="text-xs border border-neutral-300 text-neutral-700 px-4 py-2 hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
