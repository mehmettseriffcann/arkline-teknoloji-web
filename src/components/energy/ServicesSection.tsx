"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SERVICE_GROUPS, ALL_SERVICES } from "@/lib/services";
import ArrowLink from "./ArrowLink";

export default function ServicesSection({
  onSelectService,
}: {
  onSelectService?: (title: string) => void;
}) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const visible = activeGroup
    ? SERVICE_GROUPS.find((g) => g.id === activeGroup)!.services
    : ALL_SERVICES;

  const showGroup = (id: string) => {
    setActiveGroup(id);
    document.getElementById("hizmet-listesi")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hizmetler">
      {/* Group overview */}
      <div className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-14 text-3xl font-light text-brand lg:text-5xl">
            Faaliyet Alanlarımız
          </h2>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {SERVICE_GROUPS.map((g) => (
              <div key={g.id} className="flex flex-col">
                <h3 className="mb-4 text-2xl font-light leading-tight text-accent">
                  {g.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-brand/70">
                  {g.summary}
                </p>
                <ArrowLink onClick={() => showGroup(g.id)}>
                  {g.services.length} hizmeti inceleyin
                </ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service cards */}
      <div id="hizmet-listesi" className="scroll-mt-16 bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {[{ id: null, title: "Tümü" }, ...SERVICE_GROUPS].map((g) => (
              <button
                key={g.id ?? "all"}
                type="button"
                onClick={() => setActiveGroup(g.id)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeGroup === g.id
                    ? "border-brand bg-brand text-white"
                    : "border-neutral-300 text-brand/70 hover:border-brand hover:text-brand"
                }`}
              >
                {g.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((s) => (
              <button
                key={s.title}
                type="button"
                onClick={() => onSelectService?.(s.title)}
                className="group flex cursor-pointer flex-col border border-neutral-200 bg-white text-left transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-lg font-medium text-brand">{s.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-brand/60">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                    Teklif isteyin
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
