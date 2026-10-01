"use client";

import Link from "next/link";
import { Zap, Gamepad2, Mail, Phone, MapPin, ArrowUp, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner with Motto */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-amber-400">
              ARKLİNE TEKNOLOJİ
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Gücünüzü Geleceğe Taşıyoruz. ⚡
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Projeden uygulamaya, arızadan bakıma kadar tüm elektrik ihtiyaçlarınızda yanınızdayız.
              Enerjinin Güvenilir Adresi.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/games"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/40 text-purple-200 hover:text-white hover:border-pink-400 transition-all text-xs font-semibold"
            >
              <Gamepad2 className="w-4 h-4 text-pink-400" />
              <span>Arkline Games Stüdyosunu Keşfedin</span>
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              aria-label="Yukarı çık"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-sky-600 to-amber-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-slate-950 fill-amber-300 stroke-slate-950" />
              </div>
              <span className="text-xl font-black text-white tracking-wider">
                ARKLİNE <span className="text-amber-400">TEKNOLOJİ</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet.
              Alçak ve yüksek gerilim, trafo merkezleri, GES güneş enerjisi ve tip testli pano imalatı.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>• EMO (Elektrik Mühendisleri Odası) Onaylı</div>
              <div>• ISO 9001 / ISO 14001 / ISO 45001 Kalite Belgeli</div>
              <div>• IEC 61439 Tip Testli İmalat Standartları</div>
            </div>
          </div>

          {/* Faaliyet Alanlarımız Col 1 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Faaliyet Alanları
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <a
                    href="#faaliyetler"
                    className="hover:text-amber-400 transition-colors line-clamp-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Faaliyet Alanlarımız Col 2 */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Mühendislik & GES
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.slice(7).map((s) => (
                <li key={s.id}>
                  <a
                    href="#faaliyetler"
                    className="hover:text-amber-400 transition-colors line-clamp-1"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate / Contact Col */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Hızlı İletişim
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+908503000000" className="hover:text-white">
                  +90 (850) 300 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:info@arklineteknoloji.com" className="hover:text-white">
                  info@arklineteknoloji.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>Organize Sanayi Bölgesi, İstanbul</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/games"
                  className="text-xs text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1.5"
                >
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>Arkline Games Gaming Studio →</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} ARKLİNE TEKNOLOJİ SAN. VE TİC. A.Ş. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Gizlilik Politikası</span>
            <span className="hover:text-slate-300 cursor-pointer">KVKK Aydınlatma Metni</span>
            <span className="hover:text-slate-300 cursor-pointer">Kalite Politikamız</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
