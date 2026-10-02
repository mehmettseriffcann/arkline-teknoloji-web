"use client";

import { useState } from "react";
import { COMPANY } from "@/lib/company";
import { ALL_SERVICES } from "@/lib/services";

const EMPTY = { name: "", company: "", phone: "", email: "", service: "", message: "" };

const inputCls =
  "w-full bg-brand-light border border-white/15 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder-white/30";
const labelCls = "block text-xs text-white/60 mb-2";

export default function ContactSection({ initialService }: { initialService?: string }) {
  const [opened, setOpened] = useState(false);
  const [form, setForm] = useState(EMPTY);

  const [prevService, setPrevService] = useState(initialService);
  if (initialService !== prevService) {
    setPrevService(initialService);
    if (initialService) {
      setForm((f) => ({ ...f, service: initialService }));
      setOpened(false);
    }
  }

  // Sunucu tarafı form altyapısı olmadığı için talep, kullanıcının e-posta uygulamasında hazırlanır.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Teklif talebi${form.service ? ` – ${form.service}` : ""}`;
    const body = [
      `Ad Soyad: ${form.name}`,
      form.company ? `Firma: ${form.company}` : null,
      `Telefon: ${form.phone}`,
      `E-posta: ${form.email}`,
      form.service ? `Hizmet: ${form.service}` : null,
      "",
      form.message,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <section id="iletisim" className="bg-brand py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-medium text-accent">İletişim</p>
            <h2 className="mb-8 text-3xl font-light leading-tight text-white lg:text-5xl">
              Projenizi birlikte hayata geçirelim
            </h2>
            <p className="mb-12 max-w-md text-base leading-relaxed text-white/60">
              İhtiyacınızı paylaşın, size uygun teknik çözümü ve teklifi hazırlayalım.
            </p>

            <dl className="space-y-6">
              {COMPANY.phone && (
                <div>
                  <dt className="mb-1 text-xs text-white/50">Telefon</dt>
                  <dd>
                    <a href={COMPANY.phone.href} className="text-xl text-white hover:text-accent transition-colors">
                      {COMPANY.phone.display}
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt className="mb-1 text-xs text-white/50">E-posta</dt>
                <dd>
                  <a href={`mailto:${COMPANY.email}`} className="text-xl text-white hover:text-accent transition-colors">
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs text-white/50">Konum</dt>
                <dd className="text-xl text-white">{COMPANY.city}</dd>
              </div>
            </dl>
          </div>

          <div>
            {opened ? (
              <div className="flex h-full items-center justify-center border border-white/15 p-10 text-center">
                <div>
                  <h3 className="mb-3 text-xl font-medium text-white">E-posta uygulamanız açıldı</h3>
                  <p className="text-sm text-white/60">
                    Talebinizi tamamlamak için hazırlanan e-postayı gönderin. Uygulama açılmadıysa{" "}
                    <a href={`mailto:${COMPANY.email}`} className="text-accent underline">
                      {COMPANY.email}
                    </a>{" "}
                    adresine yazabilirsiniz.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setOpened(false); setForm(EMPTY); }}
                    className="mt-8 cursor-pointer text-sm text-white/60 underline hover:text-white"
                  >
                    Yeni talep oluştur
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Ad Soyad *</label>
                    <input required type="text" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputCls} />
                  </div>
                  <div>
                    <label className={labelCls}>Firma</label>
                    <input type="text" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputCls} />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>Telefon *</label>
                    <input required type="tel" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputCls} placeholder="05XX XXX XX XX" />
                  </div>
                  <div>
                    <label className={labelCls}>E-posta *</label>
                    <input required type="email" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Hizmet</label>
                  <select value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputCls}>
                    <option value="">Seçiniz</option>
                    {ALL_SERVICES.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Proje detayı</label>
                  <textarea rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                    placeholder="Projeniz hakkında kısa bilgi verin..." />
                </div>
                <button type="submit"
                  className="w-full cursor-pointer bg-accent py-4 text-sm font-semibold text-white transition-colors hover:bg-accent/85">
                  Teklif talebi oluştur
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
