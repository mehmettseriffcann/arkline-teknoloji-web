"use client";

const PROJECTS = [
  {
    category: "Yüksek Gerilim",
    title: "OSB Trafo Merkezi – 36 kV Dağıtım",
    detail: "45 fabrikaya kesintisiz enerji. 2×2500 kVA trafo, gaz yalıtımlı YG hücreleri ve SCADA entegrasyonu.",
    tags: ["Anahtar Teslim", "EDAŞ Kabulü", "Ring Şebeke"],
  },
  {
    category: "Güneş Enerjisi",
    title: "Otomotiv Yan Sanayi – 8.4 MWp Çatı GES",
    detail: "Yıllık 12,5 GWh temiz elektrik üretimi. 18.200 panel, Tier-1 invertörler, 3.1 yıl geri dönüş süresi.",
    tags: ["EPC Taahhüt", "TEDAŞ Onaylı", "Uzaktan İzleme"],
  },
  {
    category: "Pano & Otomasyon",
    title: "Entegre Gıda Tesisi – MCC & SCADA",
    detail: "4000A ADP, 32 çıkışlı MCC, Siemens S7-1500 PLC, harmonik filtreli kompanzasyon.",
    tags: ["Form 4b Pano", "Cos φ: 0.99", "Tip Testli"],
  },
  {
    category: "İç Tesisat",
    title: "120.000 m² Karma Proje – Kuvvetli & Zayıf Akım",
    detail: "Busbar dağıtım, yangın algılama, kartlı geçiş, 3×1600 kVA jeneratör senkronizasyonu.",
    tags: ["Anahtar Teslim", "Yangın Güvenliği", "Fiber Altyapı"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projeler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Projeler
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
              Referans Çalışmalarımız
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base text-neutral-500 leading-relaxed">
              Sanayiden yenilenebilir enerjiye, farklı sektörlerde hayata geçirdiğimiz seçkin projeler.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {PROJECTS.map((p) => (
            <div key={p.title} className="bg-white p-10 flex flex-col justify-between group hover:bg-neutral-50 transition-colors">
              <div>
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">
                  {p.category}
                </p>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {p.detail}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
