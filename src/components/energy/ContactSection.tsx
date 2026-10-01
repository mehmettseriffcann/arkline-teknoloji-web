"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Zap,
  ShieldAlert,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

interface ContactProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    serviceType: initialService || "",
    city: "İstanbul",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 bg-slate-900/90 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Zap className="w-3.5 h-3.5 fill-amber-400" />
                <span>İletişim & Teklif</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
                Projenizi Birlikte <br />
                <span className="text-amber-400">Hayata Geçirelim</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                İster yeni bir fabrika yatırımı, ister trafo merkezi güç artırımı veya çatı GES projesi...
                Mühendislerimiz size en uygun teknik çözümü ve şeffaf fiyatlandırmayı sunmak için hazır.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Emergency Hotline */}
              <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    7/24 Acil Arıza & Nöbetçi Ekip
                  </div>
                  <a
                    href="tel:+908503000000"
                    className="text-lg font-extrabold text-white hover:text-red-300 transition-colors"
                  >
                    +90 (850) 300 00 00
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Tüm acil trafo, pano ve şebeke arızalarında 7/24 sahaya intikal.
                  </p>
                </div>
              </div>

              {/* General Office Phone */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Merkez Ofis & Proje Hattı
                  </div>
                  <a
                    href="tel:+902120000000"
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    +90 (212) 000 00 00
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Hafta içi 08:30 - 18:30</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Kurumsal E-Posta
                  </div>
                  <a
                    href="mailto:info@arklineteknoloji.com"
                    className="text-base font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    info@arklineteknoloji.com
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Mühendislik & Satış Teklifleri</p>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Genel Merkez & Atölye
                  </div>
                  <p className="text-sm text-slate-200 font-medium">
                    Arkline Teknoloji Plaza, Organize Sanayi Bölgesi, İstanbul / Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/95 border border-slate-800 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Teklif Talebiniz Alındı!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Mühendislik ekibimiz talebinizi inceleyerek en geç 2 saat içerisinde teknik ve ticari
                    detaylarla tarafınıza dönüş yapacaktır.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        company: "",
                        phone: "",
                        email: "",
                        serviceType: "",
                        city: "İstanbul",
                        message: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white mt-4 transition-colors"
                  >
                    Yeni Talep Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Hızlı Proje & Teklif Formu</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      İhtiyacınızı belirtin, mühendislerimiz ücretsiz keşif ve maliyet analizi hazırlasın.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Adınız & Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Firma / Kurum Adı
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Örn: ABC Sanayi A.Ş."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="05XX XXX XX XX"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        E-Posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ahmet@firma.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        İlgilenilen Faaliyet Alanı *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-amber-500/60 transition-colors"
                      >
                        <option value="">Seçiniz...</option>
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Diger">Diğer / Özel Mühendislik Projesi</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Proje Şehri / Lokasyon
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="İstanbul, Kocaeli, Bursa..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Proje Detayı veya İhtiyacınız
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mevcut kurulu güç, trafo kVA değeri veya çatı m² bilgisi varsa ekleyebilirsiniz..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-amber-500/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-base shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Ücretsiz Mühendislik Teklifi Al</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-500">
                    Bilgileriniz 6698 sayılı KVKK kapsamında gizli tutulur ve 3. şahıslarla paylaşılmaz.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
