"use client";

import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Alçak Gerilim Sistemleri",
    desc: "0.4 kV seviyesinde dağıtım panoları, kablolama ve bağlantı altyapısı.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Yüksek Gerilim Sistemleri",
    desc: "Trafo merkezleri, YG hücreleri, enerji nakil hatları.",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Elektrik Dağıtım ve Şebeke",
    desc: "Yeraltı kablo hatları ve havai şebeke altyapısı.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Elektrik Taahhüt ve Proje",
    desc: "Proje çiziminden ruhsata, sahaya kadar tam kapsam.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "İç Tesisat",
    desc: "Kuvvetli ve zayıf akım iç tesisat, veri, yangın algılama.",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "06",
    title: "Pano İmalatı ve Montajı",
    desc: "ADP, MCC ve otomasyon panoları imalatı ve montajı.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "07",
    title: "Kompanzasyon Sistemleri",
    desc: "Reaktif güç kompanzasyonu ve harmonik filtre sistemleri.",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "08",
    title: "Otomasyon Sistemleri",
    desc: "PLC, SCADA ve bina yönetim sistemleri.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "09",
    title: "Aydınlatma Sistemleri",
    desc: "LED dönüşüm, akıllı otomasyon ve mimari aydınlatma.",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "10",
    title: "Arıza, Bakım ve Onarım",
    desc: "7/24 müdahale ve periyodik bakım hizmetleri.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "11",
    title: "GES – Güneş Enerjisi",
    desc: "Çatı ve arazi tipi güneş santrali kurulumu.",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "12",
    title: "Fabrika ve Şantiye Elektriği",
    desc: "Ağır sanayi ve geçici şantiye enerji sistemleri.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70&auto=format&fit=crop",
  },
  {
    number: "13",
    title: "Enerji Altyapısı ve Dağıtım",
    desc: "Jeneratör, UPS ve kritik altyapı sistemleri.",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=70&auto=format&fit=crop",
  },
];

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (title: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="hizmetler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Hizmetler</p>
          <h2 className="text-3xl font-bold text-neutral-900">Faaliyet Alanlarımız</h2>
        </div>

        {/* Photo card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100">
          {SERVICES.map((s) => (
            <div
              key={s.number}
              className="relative overflow-hidden aspect-[4/3] group cursor-pointer"
              onMouseEnter={() => setHovered(s.number)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Always-on dark overlay */}
              <div className="absolute inset-0 bg-black/45 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs text-white/40 font-mono mb-2">{s.number}</span>
                <h3 className="text-sm font-semibold text-white leading-snug">{s.title}</h3>
                {/* Description fades in on hover */}
                <p
                  className={`text-xs text-white/70 leading-relaxed mt-2 transition-all duration-300 ${
                    hovered === s.number ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                  } overflow-hidden`}
                >
                  {s.desc}
                </p>
              </div>
            </div>
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
