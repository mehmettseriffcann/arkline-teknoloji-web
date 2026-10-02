"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-base font-bold text-white mb-3">ARKLİNE TEKNOLOJİ</p>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet.
              Enerjinin güvenilir adresi.
            </p>
            <Link
              href="/games"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Arkline Games →
            </Link>
          </div>

          {/* Hizmetler */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-5">Hizmetler</p>
            <ul className="space-y-3">
              {[
                "Alçak & Yüksek Gerilim",
                "GES Güneş Enerjisi",
                "Pano İmalatı",
                "Kompanzasyon",
                "Otomasyon",
                "Bakım & Servis",
              ].map((s) => (
                <li key={s}>
                  <a href="#hizmetler" className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-5">İletişim</p>
            <ul className="space-y-3">
              <li className="text-sm text-neutral-400">+90 (850) 300 00 00</li>
              <li>
                <a href="mailto:info@arklineteknoloji.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  info@arklineteknoloji.com
                </a>
              </li>
              <li className="text-sm text-neutral-400">Elazığ</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Arkline Teknoloji. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-600 cursor-pointer hover:text-neutral-400">KVKK</span>
            <span className="text-xs text-neutral-600 cursor-pointer hover:text-neutral-400">Gizlilik Politikası</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
