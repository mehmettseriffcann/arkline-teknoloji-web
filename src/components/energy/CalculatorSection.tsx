"use client";

import { useState } from "react";
import { Calculator, Sun, Zap, TrendingDown, ArrowRight, ShieldAlert } from "lucide-react";

interface CalculatorProps {
  onQuoteWithData?: (info: string) => void;
}

export default function CalculatorSection({ onQuoteWithData }: CalculatorProps) {
  const [activeTab, setActiveTab] = useState<"compensation" | "solar">("compensation");

  // Kompanzasyon State
  const [monthlyBill, setMonthlyBill] = useState(250000); // TL
  const [reactivePenaltyRate, setReactivePenaltyRate] = useState(25); // %

  // GES State
  const [roofArea, setRoofArea] = useState(1500); // m²
  const [electricityUnitCost, setElectricityUnitCost] = useState(4.2); // TL/kWh

  // Kompanzasyon Hesapları
  const estimatedMonthlyPenalty = (monthlyBill * (reactivePenaltyRate / 100));
  const estimatedYearlySavings = estimatedMonthlyPenalty * 12;

  // GES Hesapları (100 m² ≈ 15 kWp ortalama)
  const estimatedKwp = Math.round((roofArea / 100) * 16);
  // Türkiye ortalama 1 kWp ≈ 1.450 kWh/yıl üretim
  const yearlySolarProduction = Math.round(estimatedKwp * 1450);
  const yearlySolarSavingsTL = Math.round(yearlySolarProduction * electricityUnitCost);
  const estimatedPaybackYears = (3.4).toFixed(1);

  const handleSendToQuote = () => {
    let summary = "";
    if (activeTab === "compensation") {
      summary = `Kompanzasyon İhtiyacı - Aylık Fatura: ${monthlyBill.toLocaleString("tr-TR")} TL, Ceza Oranı: %${reactivePenaltyRate}, Tahmini Yıllık Tasarruf: ${estimatedYearlySavings.toLocaleString("tr-TR")} TL`;
    } else {
      summary = `GES Çatı Projesi - Alan: ${roofArea} m², Tahmini Güç: ${estimatedKwp} kWp, Tahmini Yıllık Üretim: ${yearlySolarProduction.toLocaleString("tr-TR")} kWh`;
    }

    if (onQuoteWithData) {
      onQuoteWithData(summary);
    }
    const contactSection = document.getElementById("iletisim");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hesaplayici" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Mühendislik Simülasyonu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Enerji Verimliliği ve Tasarruf Simülatörü
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            İşletmenizin faturalarındaki reaktif güç cezalarını veya güneş enerjisi (GES) yatırımıyla
            elde edebileceğiniz yıllık kazancı anlık olarak hesaplayın.
          </p>

          {/* Toggle buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 mt-8">
            <button
              onClick={() => setActiveTab("compensation")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "compensation"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Reaktif Ceza & Kompanzasyon</span>
            </button>
            <button
              onClick={() => setActiveTab("solar")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "solar"
                  ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Güneş Enerjisi (GES) Getirisi</span>
            </button>
          </div>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl">
          {activeTab === "compensation" ? (
            /* Kompanzasyon Tab */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-300 font-medium">Aylık Elektrik Faturanız (TL)</label>
                    <span className="text-amber-400 font-bold">
                      {monthlyBill.toLocaleString("tr-TR")} TL
                    </span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={2000000}
                    step={10000}
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>20.000 TL</span>
                    <span>2.000.000 TL</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-300 font-medium">Reaktif Güç Ceza Oranı (%)</label>
                    <span className="text-amber-400 font-bold">%{reactivePenaltyRate}</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={50}
                    step={1}
                    value={reactivePenaltyRate}
                    onChange={(e) => setReactivePenaltyRate(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>%5 (Düşük)</span>
                    <span>%50 (Ağır Ceza)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    Mevzuata göre endüktif sınır %20, kapasitif sınır %15'tir. Bu sınırları aşan
                    tüketimlerde faturalara astronomik cezalar yansır.
                  </span>
                </div>
              </div>

              {/* Results Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Engellenecek Yıllık Ceza Kaybı
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-6">
                    {estimatedYearlySavings.toLocaleString("tr-TR")} TL / Yıl
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Aylık Ceza Maliyeti:</span>
                      <span className="font-bold text-red-400">
                        -{estimatedMonthlyPenalty.toLocaleString("tr-TR")} TL
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Arkline Kompanzasyon Sonrası Ceza:</span>
                      <span className="font-bold text-emerald-400">0 TL (Sıfır Ceza)</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Güç Katsayısı (Cos φ):</span>
                      <span className="font-bold text-cyan-400">0.99 (Optimum)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSendToQuote}
                  className="mt-8 w-full py-3.5 px-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Ücretsiz Reaktif Analiz Raporu İsteyin</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* GES Solar Tab */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-300 font-medium">Kullanılabilir Çatı Alanı (m²)</label>
                    <span className="text-amber-400 font-bold">{roofArea.toLocaleString("tr-TR")} m²</span>
                  </div>
                  <input
                    type="range"
                    min={200}
                    max={10000}
                    step={100}
                    value={roofArea}
                    onChange={(e) => setRoofArea(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>200 m² (Küçük Çatı)</span>
                    <span>10.000 m² (Büyük Sanayi)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <label className="text-slate-300 font-medium">Birim Elektrik Maliyeti (TL/kWh)</label>
                    <span className="text-amber-400 font-bold">{electricityUnitCost} TL/kWh</span>
                  </div>
                  <input
                    type="range"
                    min={2.5}
                    max={7.0}
                    step={0.1}
                    value={electricityUnitCost}
                    onChange={(e) => setElectricityUnitCost(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>2.5 TL (Toptan)</span>
                    <span>7.0 TL (Ticari/Sanayi)</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                  ⚡ Fabrika çatılarına kurulan GES projelerinde üretilen enerji önce öz tüketimde kullanılır,
                  fazlası şebekeye satılarak işletmeye ek gelir sağlar.
                </div>
              </div>

              {/* Results Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-1">
                    Yıllık Elektrik Tasarrufu
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-6">
                    {yearlySolarSavingsTL.toLocaleString("tr-TR")} TL / Yıl
                  </div>

                  <div className="space-y-3 pt-4 border-t border-slate-800 text-sm">
                    <div className="flex justify-between text-slate-300">
                      <span>Kurulabilecek Güç:</span>
                      <span className="font-bold text-white">{estimatedKwp} kWp</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Yıllık Temiz Elektrik:</span>
                      <span className="font-bold text-cyan-400">
                        {yearlySolarProduction.toLocaleString("tr-TR")} kWh
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Tahmini Amortisman:</span>
                      <span className="font-bold text-emerald-400">
                        ~{estimatedPaybackYears} Yıl (Hızlı Geri Dönüş)
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSendToQuote}
                  className="mt-8 w-full py-3.5 px-4 rounded-xl font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Çatınız İçin GES Fizibilite Talebi</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
