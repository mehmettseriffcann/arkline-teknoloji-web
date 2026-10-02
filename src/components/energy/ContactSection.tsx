"use client";

import { useState, useEffect } from "react";

interface ContactProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    if (initialService) setForm((f) => ({ ...f, service: initialService }));
  }, [initialService]);

  return (
    <section id="iletisim" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <div>
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-6">
              İletişim
            </p>
            <h2 className="text-4xl font-bold text-white leading-tight mb-8">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-12">
              Mühendislik ekibimiz, ihtiyaçlarınızı dinleyip en uygun teknik çözümü ve
              şeffaf teklifi hazırlar.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">7/24 Acil Arıza Hattı</p>
                <a href="tel:+908503000000" className="text-xl font-semibold text-white hover:text-neutral-300 transition-colors">
                  +90 (850) 300 00 00
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Merkez Ofis</p>
                <a href="tel:+902120000000" className="text-base text-neutral-300 hover:text-white transition-colors">
                  +90 (212) 000 00 00
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">E-Posta</p>
                <a href="mailto:info@arklineteknoloji.com" className="text-base text-neutral-300 hover:text-white transition-colors">
                  info@arklineteknoloji.com
                </a>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Adres</p>
                <p className="text-base text-neutral-300">
                  Elazığ
                </p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-6">✓</div>
                  <h3 className="text-xl font-semibold text-white mb-3">Talebiniz Alındı</h3>
                  <p className="text-neutral-400 text-sm">
                    Mühendislerimiz en geç 2 saat içinde sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", company: "", phone: "", email: "", service: "", message: "" }); }}
                    className="mt-8 text-sm text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Yeni talep gönder
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">Ad Soyad *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder-neutral-600"
                      placeholder="Ahmet Yılmaz"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">Firma</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder-neutral-600"
                      placeholder="ABC Sanayi A.Ş."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">Telefon *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder-neutral-600"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">E-Posta *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors placeholder-neutral-600"
                      placeholder="ahmet@firma.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">Hizmet Türü</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors"
                  >
                    <option value="">Seçiniz</option>
                    {[
                      "Alçak Gerilim (AG) Sistemleri",
                      "Yüksek Gerilim (YG) Sistemleri",
                      "Elektrik Taahhüt ve Proje",
                      "Pano İmalatı ve Montajı",
                      "GES – Güneş Enerjisi",
                      "Kompanzasyon Sistemleri",
                      "Otomasyon Sistemleri",
                      "Arıza, Bakım ve Onarım",
                      "Diğer",
                    ].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wider">Proje Detayı</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white text-sm px-4 py-3 focus:outline-none focus:border-neutral-400 transition-colors resize-none placeholder-neutral-600"
                    placeholder="Projeniz hakkında kısa bilgi verin..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-neutral-900 text-sm font-semibold py-4 hover:bg-neutral-100 transition-colors cursor-pointer"
                >
                  Ücretsiz Teklif Alın
                </button>
                <p className="text-xs text-neutral-600 text-center">
                  Bilgileriniz KVKK kapsamında korunur.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
