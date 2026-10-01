"use client";

import { useState } from "react";
import {
  Zap,
  Activity,
  Network,
  FileCheck2,
  Home,
  Cpu,
  Gauge,
  Workflow,
  SunMedium,
  Wrench,
  Sun,
  Building2,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";
import { SERVICES_DATA, CATEGORIES, ServiceItem } from "@/data/servicesData";
import ServiceDetailModal from "./ServiceDetailModal";

interface ServicesProps {
  onSelectServiceForQuote?: (title: string) => void;
}

export default function ServicesSection({ onSelectServiceForQuote }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "Network":
        return <Network className="w-6 h-6" />;
      case "FileCheck2":
        return <FileCheck2 className="w-6 h-6" />;
      case "Home":
        return <Home className="w-6 h-6" />;
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "Gauge":
        return <Gauge className="w-6 h-6" />;
      case "Workflow":
        return <Workflow className="w-6 h-6" />;
      case "SunMedium":
        return <SunMedium className="w-6 h-6" />;
      case "Wrench":
        return <Wrench className="w-6 h-6" />;
      case "Sun":
        return <Sun className="w-6 h-6" />;
      case "Building2":
        return <Building2 className="w-6 h-6" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleQuoteSelect = (title: string) => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(title);
    }
    const contactSection = document.getElementById("iletisim");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faaliyetler" className="py-24 bg-slate-950 relative border-t border-slate-900">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>Faaliyet Alanlarımız</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Enerjinin Her Kademesinde <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-200 to-sky-400">
              Uçtan Uca Mühendislik Çözümleri
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Projeden uygulamaya, arızadan bakıma kadar tüm elektrik ihtiyaçlarınızda yanınızdayız.
            Uluslararası standartlarda tip testli sistemler ve uzman mühendis kadromuzla hizmet veriyoruz.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800/80">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Faaliyet veya sistem ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
          </div>
        </div>

        {/* 13 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 group-hover:bg-amber-500/20 border border-slate-700/60 group-hover:border-amber-500/40 text-amber-400 flex items-center justify-center transition-all duration-300">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-amber-400/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Micro checklist preview */}
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-amber-400 transition-colors">
                <span>Teknik Detay & Kapsam</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            Aradığınız kriterlere uygun faaliyet alanı bulunamadı. Lütfen arama terimini değiştirin.
          </div>
        )}

        {/* Banner at bottom of services */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold text-cyan-400 tracking-wider uppercase">
              Özel Proje & Anahtar Teslim Mühendislik
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Tesisinize özel bir elektrik projesi mi planlıyorsunuz?
            </h4>
            <p className="text-slate-400 text-sm max-w-xl">
              Uzman mühendislerimiz saha keşfi yaparak en verimli, güvenli ve maliyet-etkin çözümü projelendirsin.
            </p>
          </div>
          <button
            onClick={() => handleQuoteSelect("Anahtar Teslim Elektrik Projesi")}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
          >
            Hemen Keşif Talebi Oluşturun
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={handleQuoteSelect}
      />
    </section>
  );
}
