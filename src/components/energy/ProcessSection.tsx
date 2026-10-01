"use client";

import { CheckCircle, Search, PenTool, Factory, ShieldCheck, Headphones } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5 text-amber-400" />,
      title: "Saha Keşfi & Analiz",
      desc: "Uzman mühendislerimiz tesisinizde gerilim düşümü, güç kalitesi ve harmonik ölçümleri yaparak mevcut durumu netleştirir.",
    },
    {
      num: "02",
      icon: <PenTool className="w-5 h-5 text-sky-400" />,
      title: "Projelendirme & Yasal Onay",
      desc: "AutoCAD/BIM destekli tek hat şemaları, yük tabloları hazırlanır; TEDAŞ, EDAŞ ve belediye ruhsat onayları eksiksiz alınır.",
    },
    {
      num: "03",
      icon: <Factory className="w-5 h-5 text-purple-400" />,
      title: "Tip Testli Pano İmalatı",
      desc: "Arkline atölyelerinde IEC 61439 standartlarında şalt malzeme montajı, bara bükümü ve fabrika kabul testleri (FAT) tamamlanır.",
    },
    {
      num: "04",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "Saha Montajı & Testler",
      desc: "Kablo çekimleri, hücre montajları, röle ayarları, topraklama direnci ve izolasyon testleri sıfır hata toleransıyla yapılır.",
    },
    {
      num: "05",
      icon: <Headphones className="w-5 h-5 text-amber-400" />,
      title: "Devreye Alma & 7/24 Bakım",
      desc: "Tesis enerjilendirilir, resmi kabul tutanakları imzalanır ve sistem 7/24 uzaktan izleme & periyodik servis güvencesine alınır.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Mühendislik Metodolojimiz</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Projeden Devreye Almaya Adım Adım Güven
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Elektrik enerjisi hata kabul etmez. Her aşamada çift kontrol, ileri mühendislik simülasyonları
            ve disiplinli saha yönetimi uyguluyoruz.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-800 group-hover:text-amber-500/30 transition-colors">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Kalite Onaylı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
