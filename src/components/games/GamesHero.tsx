"use client";

// Gram Games style: full-width video/image hero with title overlay
// Circle.gs style: centered, single game focus
export default function GamesHero() {
  return (
    <>
      {/* Gram Games style: full-width dark hero with overlay text */}
      <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center pt-14 overflow-hidden bg-neutral-900">
        {/* Background: colorful game-themed photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&auto=format&fit=crop"
          alt="Gaming"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Content - center, like Gram Games "Building bonds through play" */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Oyun yapıyoruz.
          </h1>
          <p className="text-base text-white/60 leading-relaxed mb-8 max-w-md mx-auto">
            Arkline Games, İstanbul merkezli bir mobil oyun şirketidir.
            Eğlenceli, kaliteli oyunlar üretiyoruz.
          </p>
          <a
            href="#games"
            className="inline-block px-6 py-3 bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors"
          >
            Oyunlarımız
          </a>
        </div>
      </section>

      {/* About - Peak style: clean white section below hero */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-snug">
                Teknoloji ile yaratıcılığı birleştiriyoruz.
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                Arkline Games olarak mobil oyunculara yüksek kaliteli, ilgi çekici deneyimler
                sunmak için çalışıyoruz.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                İstanbul ve Londra ofislerimizden dünya genelinde milyonlarca oyuncuya ulaşıyoruz.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75&auto=format&fit=crop"
              alt="Takım çalışması"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
