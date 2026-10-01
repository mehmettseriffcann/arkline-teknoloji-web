"use client";

import { X, CheckCircle, Zap, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";

interface ModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onSelectForQuote,
}: ModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">
                Faaliyet Alanı #{service.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Detailed Paragraph */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Kapsam & Mühendislik Yaklaşımı
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">{service.fullDesc}</p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Uygulama ve Hizmet Başlıkları
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-sm text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Teknik Standartlar & Kapasite
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/40 border border-slate-800 flex flex-col"
                >
                  <span className="text-[11px] text-slate-400 font-medium">{spec.label}</span>
                  <span className="text-xs font-bold text-amber-300 mt-1">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white"
          >
            Kapat
          </button>

          <button
            onClick={() => {
              onSelectForQuote(service.title);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Bu Hizmet İçin Teklif Alın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
