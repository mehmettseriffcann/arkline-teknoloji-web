"use client";

// Dream Games "Life at Dream" section - simple two-column text + image placeholder
export default function GamesCulture() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">
              Kültürümüz
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-8">
              Dream Games'ten İlham Alan Bir Stüdyo
            </h2>
            <div className="space-y-5 text-base text-neutral-500 leading-relaxed">
              <p>
                Arkline Games'te herkes nihai ürüne gerçekten katkıda bulunma ve
                şirketi etkileme fırsatına sahiptir.
              </p>
              <p>
                Sanat, teknoloji ve oyuncu odaklı tasarımı harmanlayarak milyonlarca
                insanın sevdiği oyunlar yaratıyoruz.
              </p>
              <p>
                Büyüyen bir şirketin parçası olmak istiyorsanız, sizi arıyor olabiliriz.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                ["50+", "Kişilik ekip"],
                ["4", "Yayınlanan oyun"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-neutral-900">{num}</div>
                  <div className="text-sm text-neutral-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder */}
          <div className="aspect-square bg-neutral-100 flex items-center justify-center">
            <span className="text-neutral-300 text-sm uppercase tracking-widest select-none">
              Stüdyo Fotoğrafı
            </span>
          </div>
        </div>

        {/* Values - simple list like Dream Games */}
        <div className="mt-24 border-t border-neutral-200">
          {[
            ["Kalite Önce", "Tavizsiz grafik kalitesi, akıcı oynanış ve kısa yükleme süreleri."],
            ["Veri ve Sezgi", "Oyuncu davranışlarını anlayan tasarım kararları."],
            ["Küçük, Otonom Ekipler", "Her ekip kendi oyununun gerçek sahibidir."],
            ["Küresel Bakış Açısı", "İstanbul'dan dünya pazarına ürün geliştirme."],
          ].map(([title, desc]) => (
            <div key={title} className="py-8 border-b border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
