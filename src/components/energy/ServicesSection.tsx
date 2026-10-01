"use client";

import { useState } from "react";

const SERVICES = [
  {
    id: "ag",
    number: "01",
    title: "Alçak Gerilim (AG) Sistemleri",
    desc: "Endüstriyel tesisler ve ticari yapılar için 0.4 kV seviyesinde güvenli AG dağıtım altyapısı.",
  },
  {
    id: "yg",
    number: "02",
    title: "Yüksek Gerilim (YG) Sistemleri",
    desc: "36 kV seviyesine kadar trafo merkezleri, YG hücreleri ve enerji nakil hatları kurulumu.",
  },
  {
    id: "sebeke",
    number: "03",
    title: "Elektrik Dağıtım ve Şebeke İşleri",
    desc: "Kentsel ve sanayi bölgelerinde yeraltı/havai hat şebeke altyapıları.",
  },
  {
    id: "taahhut",
    number: "04",
    title: "Elektrik Taahhüt ve Proje Uygulamaları",
    desc: "Konsept tasarımdan anahtar teslim uygulamaya, ruhsatlandırmaya kadar tam kapsam mühendislik.",
  },
  {
    id: "tesisat",
    number: "05",
    title: "İç Tesisat ve Anahtar Teslim",
    desc: "Kuvvetli ve zayıf akım iç tesisat, yangın algılama, veri altyapısı.",
  },
  {
    id: "pano",
    number: "06",
    title: "Pano İmalatı ve Montajı",
    desc: "IEC 61439 tip testli ADP, MCC ve otomasyon panoları imalatı.",
  },
  {
    id: "kompanzasyon",
    number: "07",
    title: "Kompanzasyon Sistemleri",
    desc: "Reaktif güç cezalarını %100 engelleyen harmonik filtreli kompanzasyon sistemleri.",
  },
  {
    id: "otomasyon",
    number: "08",
    title: "Otomasyon Sistemleri",
    desc: "PLC/SCADA mimarileri, enerji izleme ve bina otomasyonu (BMS) çözümleri.",
  },
  {
    id: "aydinlatma",
    number: "09",
    title: "Aydınlatma Sistemleri",
    desc: "Yüksek verimli LED, DALI akıllı otomasyon ve mimari aydınlatma projeleri.",
  },
  {
    id: "bakim",
    number: "10",
    title: "Arıza, Bakım ve Onarım",
    desc: "7/24 acil müdahale, termal kamera kontrolü ve periyodik bakım anlaşmaları.",
  },
  {
    id: "ges",
    number: "11",
    title: "GES – Güneş Enerji Sistemleri",
    desc: "Çatı ve arazi tipi anahtar teslim EPC güneş santrali projeleri, TEDAŞ onay süreçleri.",
  },
  {
    id: "fabrika",
    number: "12",
    title: "Fabrika ve Şantiye Elektrik Sistemleri",
    desc: "Ağır sanayi makine beslemeleri, geçici şantiye enerji sistemleri.",
  },
  {
    id: "altyapi",
    number: "13",
    title: "Enerji Altyapısı ve Dağıtım",
    desc: "Jeneratör senkronizasyonu, UPS sistemleri ve kritik altyapı enerji güvencesi.",
  },
];

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (title: string) => void;
}) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Faaliyet Alanlarımız
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              13 Alanda Uçtan Uca Elektrik Mühendisliği
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base text-neutral-500 leading-relaxed">
              Projeden uygulamaya, arızadan bakıma kadar tüm elektrik ihtiyaçlarınızda
              uluslararası standartlarda mühendislik hizmetleri sunuyoruz.
            </p>
          </div>
        </div>

        {/* Service list - Vestas-style accordion/list */}
        <div className="border-t border-neutral-200">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className="border-b border-neutral-200"
            >
              <button
                className="w-full py-6 flex items-start gap-8 text-left group cursor-pointer"
                onClick={() => setActive(active === s.id ? null : s.id)}
              >
                <span className="text-xs text-neutral-400 font-mono w-8 shrink-0 pt-0.5">
                  {s.number}
                </span>
                <div className="flex-1">
                  <span className="text-base font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {s.title}
                  </span>
                  {active === s.id && (
                    <p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-2xl">
                      {s.desc}
                    </p>
                  )}
                </div>
                <span className="text-neutral-400 text-xl leading-none shrink-0 mt-0.5">
                  {active === s.id ? "−" : "+"}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex items-center gap-4">
          <button
            onClick={() => onSelectService?.("Elektrik Mühendisliği Projesi")}
            className="px-6 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            Proje Teklifi Alın
          </button>
        </div>
      </div>
    </section>
  );
}
