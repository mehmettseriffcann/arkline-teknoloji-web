"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] bg-neutral-900 flex items-end">
      {/* Full-screen dark background - energy industry uses dark hero + one accent color */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-neutral-800"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #111 0%, #1a1a1a 50%, #0f172a 100%)",
        }}
      />

      {/* Single subtle horizontal line - Vestas-style minimal element */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-white/5" />

      {/* Content - bottom-left aligned like Ørsted, Vestas */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">
            Elektrik & Enerji Çözümleri
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
            Gücünüzü
            <br />
            Geleceğe
            <br />
            Taşıyoruz.
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed mb-10 max-w-lg">
            Projeden uygulamaya, arızadan bakıma kadar tüm elektrik ihtiyaçlarınızda
            profesyonel mühendislik hizmetleri.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#hizmetler"
              className="px-6 py-3 bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#iletisim"
              className="px-6 py-3 border border-white/30 text-white text-sm font-semibold hover:border-white/60 transition-colors"
            >
              İletişime Geçin
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats bar - like Enerjisa */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {[
              ["500+", "Tamamlanan Proje"],
              ["50+ MW", "Kurulu GES"],
              ["13", "Faaliyet Alanı"],
              ["7/24", "Teknik Destek"],
            ].map(([num, label]) => (
              <div key={label} className="py-5 px-6 first:pl-0">
                <div className="text-2xl font-bold text-white">{num}</div>
                <div className="text-xs text-neutral-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
