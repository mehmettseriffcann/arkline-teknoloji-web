"use client";

// Gram Games / Peak style culture section
export default function GamesCulture() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&auto=format&fit=crop"
            alt="Ofis"
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Life at Arkline</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-snug">
              Herkes ürüne katkıda bulunur.
            </h2>
            <div className="space-y-4 text-sm text-neutral-500 leading-relaxed">
              <p>
                Hızla büyüyen bir şirketin parçası olmak istiyorsanız sizinle çalışmak isteriz.
              </p>
              <p>
                Küçük, özerk ekiplerle çalışıyor, hızlı kararlar alıyor ve oyunculardan
                doğrudan geri bildirim alıyoruz.
              </p>
            </div>

            <div className="mt-10 border-t border-neutral-200 pt-8 space-y-0">
              {[
                ["Kalite", "Her detayda yüksek standart."],
                ["Hız", "Hızlı test, hızlı öğrenme."],
                ["Etki", "Küçük ekip, büyük ürün."],
              ].map(([title, desc]) => (
                <div key={title} className="py-4 border-b border-neutral-100 flex gap-6">
                  <span className="text-xs font-semibold text-neutral-900 w-20 shrink-0 pt-0.5">{title}</span>
                  <span className="text-xs text-neutral-500">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
