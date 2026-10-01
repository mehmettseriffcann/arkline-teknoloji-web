"use client";

// Dream Games style: full-width hero image (placeholder), big title below or overlay
export default function GamesHero() {
  return (
    <>
      {/* Full-width hero image block - Dream Games uses a full bleed character image */}
      <div className="w-full h-[70vh] min-h-[500px] bg-neutral-100 mt-16 flex items-end">
        {/* Background - placeholder for actual game artwork */}
        <div className="w-full h-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-50 flex items-center justify-center relative">
          <span className="text-neutral-300 text-sm uppercase tracking-widest select-none">
            Game Artwork
          </span>
        </div>
      </div>

      {/* Below hero content - Dream Games places studio identity below the image */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Milyonların Oynadığı Oyunlar Yapıyoruz.
              </h1>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-base text-neutral-500 leading-relaxed">
                Arkline Games, İstanbul merkezli bir mobil oyun şirketidir. Yüksek kaliteli
                karakterler ve sürükleyici oynanış deneyimleri yaratmaya odaklanıyoruz.
              </p>
              <p className="text-base text-neutral-500 leading-relaxed">
                Amacımız, teknoloji ile yaratıcılığı birleştirerek yıllarca oynanacak
                yüksek kaliteli mobil oyunlar geliştirmektir.
              </p>
              <div className="pt-4">
                <a
                  href="#careers"
                  className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors"
                >
                  Kariyer Fırsatları
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200 border-t border-b border-neutral-200">
            {[
              ["50M+", "Global İndirme"],
              ["160+", "Ülke"],
              ["4.8★", "Ortalama Puan"],
              ["2024", "Kuruluş"],
            ].map(([num, label]) => (
              <div key={label} className="py-8 px-8 first:pl-0">
                <div className="text-3xl font-bold text-neutral-900">{num}</div>
                <div className="text-sm text-neutral-400 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
