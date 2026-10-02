import ArrowLink from "./ArrowLink";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] items-end overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80&auto=format&fit=crop"
        alt="Enerji nakil hattı"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/30 to-brand/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="max-w-xl bg-brand/70 p-8 backdrop-blur-md lg:p-10">
          <h1 className="mb-6 text-4xl font-light leading-[1.1] text-white lg:text-6xl">
            Elektrik ve Enerji Çözümleri
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-white/75">
            Proje tasarımından kuruluma, bakımdan onarıma kadar elektrik
            mühendisliği hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <ArrowLink href="#hizmetler" tone="light">
              Faaliyet alanlarımız
            </ArrowLink>
            <ArrowLink href="#iletisim" tone="light">
              Teklif isteyin
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
