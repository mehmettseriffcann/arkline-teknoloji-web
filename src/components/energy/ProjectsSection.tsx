"use client";

const PROJECTS = [
  {
    category: "Yüksek Gerilim",
    title: "OSB Trafo Merkezi – 36 kV",
    detail: "45 fabrikaya enerji dağıtımı. 2×2500 kVA trafo, gaz yalıtımlı YG hücreleri.",
    // Electrical substation photo
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=75&auto=format&fit=crop",
  },
  {
    category: "Güneş Enerjisi",
    title: "Çatı GES – 8.4 MWp",
    detail: "Sanayi tesisi çatısında 18.200 panel kurulumu ve şebeke bağlantısı.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=75&auto=format&fit=crop",
  },
  {
    category: "Pano & Otomasyon",
    title: "Gıda Tesisi – MCC & SCADA",
    detail: "4000A ADP, 32 çıkışlı MCC, PLC programlama ve enerji izleme.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=75&auto=format&fit=crop",
  },
  {
    category: "İç Tesisat",
    title: "120.000 m² Karma Proje",
    detail: "Busbar dağıtım, yangın algılama ve jeneratör senkronizasyonu.",
    img: "https://images.unsplash.com/photo-1565620551738-39b9d35f5ac9?w=600&q=75&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projeler" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Projeler</p>
          <h2 className="text-3xl font-bold text-neutral-900">Referans Çalışmalar</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((p) => (
            <div key={p.title} className="group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-video object-cover mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-2">{p.category}</p>
              <h3 className="text-base font-semibold text-neutral-900 mb-1.5">{p.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
