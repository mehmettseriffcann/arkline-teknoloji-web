"use client";

export default function WhyUsSection() {
  return (
    <section id="hakkimizda" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Two-column layout - Dream Games / Vestas style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: text */}
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">
              Hakkımızda
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight mb-8">
              Türkiye'nin Enerji Altyapısını İnşa Ediyoruz
            </h2>
            <div className="space-y-5 text-base text-neutral-500 leading-relaxed">
              <p>
                Arkline Teknoloji olarak, sanayi kuruluşlarından megavat ölçekli güneş
                santrallerine, akıllı binalardan yüksek gerilim trafo merkezlerine kadar
                uçtan uca elektrik mühendisliği hizmetleri sunuyoruz.
              </p>
              <p>
                EMO yetkili mühendis kadromuz ve IEC 61439 tip testli pano imalat atölyemizle,
                her projeyi uluslararası standartlarda teslim ediyoruz.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                ["15+", "Yıl deneyim"],
                ["500+", "Tamamlanan proje"],
                ["50+ MW", "Kurulu GES kapasitesi"],
                ["%99.9", "Sistem sürekliliği"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-neutral-900">{num}</div>
                  <div className="text-sm text-neutral-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: capability list */}
          <div>
            <div className="space-y-0 border-t border-neutral-200">
              {[
                "EMO Yetkili Mühendis Kadrosu",
                "IEC 61439 Tip Testli Pano İmalatı",
                "TEDAŞ / EDAŞ Kabul Süreci Yönetimi",
                "ISO 9001 Kalite Yönetim Sistemi",
                "ISO 45001 İş Sağlığı ve Güvenliği",
                "7/24 Termal Kamera ve Kestirimci Bakım",
                "Anahtar Teslim EPC GES Projeleri",
                "Harmonik Filtreli Kompanzasyon Sistemleri",
              ].map((item) => (
                <div
                  key={item}
                  className="py-4 border-b border-neutral-200 flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
