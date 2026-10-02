"use client";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Real photo from Unsplash - electrical substation */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80&auto=format&fit=crop"
        alt="Elektrik altyapısı"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Elektrik ve Enerji Çözümleri
          </h1>
          <p className="text-base text-white/70 leading-relaxed mb-8 max-w-md">
            Proje tasarımından kuruluma, bakımdan onarıma kadar
            elektrik mühendisliği hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#hizmetler"
              className="px-5 py-2.5 bg-white text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition-colors"
            >
              Hizmetlerimiz
            </a>
            <a
              href="#iletisim"
              className="px-5 py-2.5 border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
