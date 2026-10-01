"use client";

import { Building2, Zap, Sun, Factory, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Organize Sanayi Bölgesi 36kV Trafo & Dağıtım Merkezi",
      category: "Yüksek Gerilim (YG) & Şebeke",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      stats: "2x2500 kVA Trafo | 36 kV Gaz Yalıtımlı Hücreler",
      desc: "45 fabrikanın kesintisiz beslendiği organize sanayi trafo merkezinin anahtar teslim inşaat, elektro montaj ve SCADA entegrasyonu.",
      badge: "Tamamlandı",
      metrics: ["%99.99 Süreklilik", "Ring Şebeke", "EDAŞ Kabulü"],
    },
    {
      title: "Otomotiv Yan Sanayi 8.4 MWp Çatı & Arazi GES Santrali",
      category: "Güneş Enerjisi (GES EPC)",
      icon: <Sun className="w-5 h-5 text-amber-400" />,
      stats: "8.4 MWp Güç | 18.200 Adet Tier-1 Panel",
      desc: "Yıllık 12.500.000 kWh temiz elektrik üreten, işletmenin karbon ayak izini sıfırlayan anahtar teslim çatı GES kurulumu.",
      badge: "Aktif Üretimde",
      metrics: ["3.1 Yıl Geri Dönüş", "Sıfır Karbon", "TEDAŞ Onaylı"],
    },
    {
      title: "Entegre Gıda Tesisi Form 4b MCC & Otomasyon Panoları",
      category: "Pano İmalatı & Otomasyon",
      icon: <Factory className="w-5 h-5 text-sky-400" />,
      stats: "4000A ADP | 32 Çıkışlı Akıllı MCC",
      desc: "Siemens S7-1500 PLC ve SCADA destekli, harmonik filtreli kompanzasyon ve enerji izleme yazılımı entegrasyonu.",
      badge: "Tip Testli Form 4b",
      metrics: ["Cos φ: 0.99", "Uzaktan İzleme", "Form 4b İzolasyon"],
    },
    {
      title: "Karma Yaşam Projesi (Rezidans & AVM) Kuvvetli/Zayıf Akım",
      category: "İç Tesisat & Altyapı",
      icon: <Building2 className="w-5 h-5 text-purple-400" />,
      stats: "120.000 m² Kapalı Alan | 3x1600 kVA Jeneratör",
      desc: "Busbar dağıtım hatları, yangın ihbar, kartlı geçiş, jeneratör senkronizasyonu ve merkezi UPS altyapısı.",
      badge: "Anahtar Teslim",
      metrics: ["Acil Senkronizasyon", "Yangın Güvenliği", "Cat6A Altyapı"],
    },
  ];

  return (
    <section id="projeler" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>Sektörel Referanslar</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Gurur Duyduğumuz Başarı Hikayeleri
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Sanayiden yenilenebilir enerjiye, Türkiye genelinde hayata geçirdiğimiz yüksek mühendislik projelerinden seçkiler.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    {proj.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {proj.title}
                </h3>

                <div className="text-xs font-bold text-amber-400/90 mb-4 bg-amber-500/10 inline-block px-3 py-1.5 rounded-lg border border-amber-500/20">
                  {proj.stats}
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
                {proj.metrics.map((metric, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-slate-300 text-xs border border-slate-800"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{metric}</span>
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
