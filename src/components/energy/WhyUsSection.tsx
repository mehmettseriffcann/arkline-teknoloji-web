"use client";

import { ShieldCheck, Award, Cpu, Clock, Layers, CheckCircle2 } from "lucide-react";

export default function WhyUsSection() {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Uluslararası Standartlarda Mühendislik",
      desc: "Tüm pano imalatlarımız ve saha montajlarımız IEC 61439-1/2, TSE ve ISO 9001 kalite standartlarına uygun, tip testli ve onaylı bileşenlerle gerçekleştirilir.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Sıfır İş Kazası & Yüksek Güvenlik",
      desc: "Yüksek gerilim ve şebeke çalışmalarında can ve mal güvenliği kırmızı çizgimizdir. ISO 45001 İSG standartlarını tavizsiz uygularız.",
    },
    {
      icon: <Layers className="w-6 h-6 text-sky-400" />,
      title: "Tek Elden Anahtar Teslim Taahhüt",
      desc: "Fizibilite, proje çizimi, yasal kurum onayları (TEDAŞ/EDAŞ), pano imalatı, kablolama, test ve kabul süreçlerini tek muhatapla yönetin.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Akıllı Enerji ve Kestirimci İzleme",
      desc: "Geleneksel elektrikçiliğin ötesinde, IoT tabanlı telemetri ve termal analiz ile arızalar daha oluşmadan önce tespit edilir ve önlenir.",
    },
  ];

  return (
    <section id="hakkimizda" className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Kurumsal Güven & Vizyon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              Türkiye'nin Enerji Altyapısında <br />
              <span className="text-amber-400">Güven ve Prestijin Simgesi</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Arkline Teknoloji olarak, sanayi kuruluşlarından megavat ölçekli güneş santrallerine,
              akıllı binalardan yüksek gerilim trafo merkezlerine kadar Türkiye'nin enerji omurgasını
              inşa ediyoruz.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
              Mühendislik disiplinimiz, tecrübeli saha kadromuz ve en son teknoloji test cihazlarımızla;
              enerjinizi kesintisiz, verimli ve güvenli kılmak için 7/24 çalışıyoruz.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "EMO Yetkili Mühendis Kadrosu",
                "Tip Testli Pano İmalat Parkuru",
                "TEDAŞ / EDAŞ Kabul Garantisi",
                "7/24 Termal & Kestirimci Bakım",
                "Harmonik & Reaktif Ceza İptali",
                "Tier-1 GES Komponentleri",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4 border-t border-slate-800">
              <div>
                <div className="text-2xl font-bold text-white">15+ Yıl</div>
                <div className="text-xs text-slate-400">Kümülatif Sektör Deneyimi</div>
              </div>
              <div className="h-8 w-[1px] bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">%100</div>
                <div className="text-xs text-slate-400">Müşteri Memnuniyeti & Teslimat</div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
