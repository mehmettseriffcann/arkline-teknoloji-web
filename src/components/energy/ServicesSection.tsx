"use client";

import { useState } from "react";

const SERVICES = [
  { number: "01", title: "Alçak Gerilim (AG) Sistemleri", desc: "0.4 kV seviyesinde dağıtım panoları, kablolama ve bağlantı altyapısı." },
  { number: "02", title: "Yüksek Gerilim (YG) Sistemleri", desc: "Trafo merkezleri, YG hücreleri, enerji nakil hatları." },
  { number: "03", title: "Elektrik Dağıtım ve Şebeke İşleri", desc: "Yeraltı kablo hatları ve havai şebeke altyapısı." },
  { number: "04", title: "Elektrik Taahhüt ve Proje", desc: "Proje çiziminden ruhsata, sahaya kadar tam kapsam." },
  { number: "05", title: "İç Tesisat", desc: "Kuvvetli ve zayıf akım iç tesisat, veri, yangın algılama." },
  { number: "06", title: "Pano İmalatı ve Montajı", desc: "ADP, MCC ve otomasyon panoları imalatı ve montajı." },
  { number: "07", title: "Kompanzasyon Sistemleri", desc: "Reaktif güç kompanzasyonu ve harmonik filtre sistemleri." },
  { number: "08", title: "Otomasyon Sistemleri", desc: "PLC, SCADA ve bina yönetim sistemleri." },
  { number: "09", title: "Aydınlatma Sistemleri", desc: "LED dönüşüm, akıllı otomasyon ve mimari aydınlatma." },
  { number: "10", title: "Arıza, Bakım ve Onarım", desc: "7/24 müdahale ve periyodik bakım hizmetleri." },
  { number: "11", title: "GES – Güneş Enerjisi", desc: "Çatı ve arazi tipi güneş santrali kurulumu." },
  { number: "12", title: "Fabrika ve Şantiye Elektriği", desc: "Ağır sanayi ve geçici şantiye enerji sistemleri." },
  { number: "13", title: "Enerji Altyapısı ve Dağıtım", desc: "Jeneratör, UPS ve kritik altyapı sistemleri." },
];

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (title: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Hizmetler</p>
          <h2 className="text-3xl font-bold text-neutral-900">Faaliyet Alanlarımız</h2>
        </div>

        {/* 3-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {SERVICES.map((s) => (
            <button
              key={s.number}
              onClick={() => setActive(active === s.number ? null : s.number)}
              className="group text-left bg-white p-7 hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl font-light text-neutral-200 select-none">{s.number}</span>
                <span className="text-neutral-300 text-xl group-hover:text-neutral-500 transition-colors">
                  {active === s.number ? "−" : "+"}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-600 transition-colors leading-snug">
                {s.title}
              </h3>
              {active === s.number && (
                <p className="mt-3 text-xs text-neutral-400 leading-relaxed">{s.desc}</p>
              )}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => onSelectService?.("Genel Hizmet Talebi")}
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Teklif Alın
          </button>
        </div>
      </div>
    </section>
  );
}
