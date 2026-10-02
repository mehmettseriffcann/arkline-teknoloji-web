"use client";

export default function WhyUsSection() {
  return (
    <section id="hakkimizda" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Hakkımızda</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-7 leading-snug">
              Elektrik Mühendisliği Hizmetleri
            </h2>
            <div className="space-y-4 text-sm text-neutral-500 leading-relaxed">
              <p>
                Alçak ve yüksek gerilim sistemlerinden güneş enerjisi kurulumlarına,
                pano imalatından otomasyon projelerine kadar geniş bir alanda hizmet veriyoruz.
              </p>
              <p>
                Projelerimizi sektör standartlarına uygun olarak yürütür,
                müşterilerimizin ihtiyaçlarına göre çözümler geliştiririz.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                ["13", "Hizmet alanı"],
                ["7/24", "Teknik destek"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-neutral-900">{num}</div>
                  <div className="text-xs text-neutral-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Real photo - solar panels / energy */}
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75&auto=format&fit=crop"
              alt="Güneş enerji panelleri"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>

        {/* Simple capability list */}
        <div className="mt-16 border-t border-neutral-200 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "EMO Yetkili Mühendis",
            "IEC 61439 Tip Testli Pano",
            "TEDAŞ / EDAŞ Süreci",
            "ISO 9001 Kalite",
            "ISO 45001 İSG",
            "Termal Kamera Bakım",
            "GES EPC Taahhüt",
            "Harmonik Filtre",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-600 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
