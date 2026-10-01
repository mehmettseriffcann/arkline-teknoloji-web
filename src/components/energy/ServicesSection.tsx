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

        <div className="border-t border-neutral-200">
          {SERVICES.map((s) => (
            <div key={s.number} className="border-b border-neutral-200">
              <button
                className="w-full py-5 flex items-start gap-6 text-left group cursor-pointer"
                onClick={() => setActive(active === s.number ? null : s.number)}
              >
                <span className="text-xs text-neutral-300 font-mono w-6 shrink-0 pt-0.5">{s.number}</span>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-500 transition-colors">
                    {s.title}
                  </span>
                  {active === s.number && (
                    <p className="mt-2.5 text-sm text-neutral-500 leading-relaxed max-w-lg">{s.desc}</p>
                  )}
                </div>
                <span className="text-neutral-300 shrink-0 text-lg">{active === s.number ? "−" : "+"}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
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
