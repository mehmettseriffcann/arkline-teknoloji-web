import { ArrowRight } from "lucide-react";
import { SERVICE_GROUPS } from "@/lib/services";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[680px] flex-col overflow-hidden bg-brand">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80&auto=format&fit=crop"
        alt="Enerji nakil hattı"
        className="hero-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/75 to-brand/10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-sm font-medium tracking-wide text-accent">
              Elektrik · Enerji · Otomasyon
            </span>
          </div>
          <h1 className="mb-8 text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Elektrik ve enerji{" "}
            <span className="font-semibold">çözümleri</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/70">
            Proje tasarımından kuruluma, bakımdan onarıma kadar elektrik
            mühendisliği hizmetleri sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#iletisim"
              className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent/85"
            >
              Teklif isteyin
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#hizmetler"
              className="inline-flex items-center border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand"
            >
              Faaliyet alanlarımız
            </a>
          </div>
        </div>
      </div>

      {/* Service group strip */}
      <div className="relative z-10 border-t border-white/15">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-8">
          {SERVICE_GROUPS.map((g, i) => (
            <a
              key={g.id}
              href="#hizmetler"
              className={`group flex items-center justify-between gap-3 py-5 pr-4 transition-colors lg:py-7 ${
                i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""
              } ${i % 2 === 1 ? "border-l border-white/15 pl-4 lg:pl-6" : ""}`}
            >
              <span className="text-sm text-white/75 transition-colors group-hover:text-white lg:text-base">
                {g.title}
              </span>
              <ArrowRight
                size={16}
                className="shrink-0 text-accent transition-transform group-hover:translate-x-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
