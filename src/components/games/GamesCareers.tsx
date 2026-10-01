"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle, Send, X } from "lucide-react";
import { CAREER_POSITIONS, JobPosition } from "@/data/gamesData";

export default function GamesCareers() {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [activeJobModal, setActiveJobModal] = useState<JobPosition | null>(null);
  const [isApplied, setIsApplied] = useState(false);
  const [appForm, setAppForm] = useState({
    name: "",
    email: "",
    portfolio: "",
    message: "",
  });

  const departments = ["All", "Engineering", "Art & Design", "Product"];

  const filteredJobs = CAREER_POSITIONS.filter((job) =>
    selectedDept === "All" ? true : job.department === selectedDept
  );

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplied(true);
  };

  return (
    <section id="careers" className="py-24 bg-slate-950 relative border-t border-purple-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kariyer @ Arkline Games</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            En İyilerle Birlikte Dünyayı Eğlendirin
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Bizimle çalışarak global mobil oyun sektörünün zirvesinde yer alacak, milyonlarca
            oyuncuya ulaşan projelerde doğrudan söz sahibi olacaksınız.
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {dept === "All" ? "Tüm Pozisyonlar" : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="p-6 rounded-2xl bg-slate-900/80 border border-purple-950/70 hover:border-pink-500/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                    {job.department}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span className="text-xs text-slate-400">{job.experience}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{job.type}</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setActiveJobModal(job);
                  setIsApplied(false);
                }}
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 group-hover:bg-pink-600 text-white transition-all cursor-pointer"
              >
                <span>İncele & Başvur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Application Modal */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-slate-900 border border-purple-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">
                  {activeJobModal.department} • {activeJobModal.experience}
                </span>
                <h3 className="text-2xl font-black text-white mt-1">{activeJobModal.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeJobModal.location}</p>
              </div>
              <button
                onClick={() => setActiveJobModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800/60"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {activeJobModal.description}
            </p>

            <div className="mb-6 space-y-2">
              <div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
                Aradığımız Yetkinlikler:
              </div>
              {activeJobModal.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            {/* Application Form */}
            {isApplied ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Başvurunuz Başarıyla İletildi!</h4>
                <p className="text-xs text-slate-300">
                  İnceleme sürecimizin ardından en kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz!
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-3 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Hızlı Başvuru Gönderin
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız"
                    value={appForm.name}
                    onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-Posta Adresiniz"
                    value={appForm.email}
                    onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-pink-500"
                  />
                </div>
                <input
                  type="url"
                  required
                  placeholder="LinkedIn / GitHub / ArtStation / Portfolio Linki"
                  value={appForm.portfolio}
                  onChange={(e) => setAppForm({ ...appForm, portfolio: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-pink-500"
                />
                <textarea
                  rows={2}
                  placeholder="Kısaca kendinizden ve motivasyonunuzdan bahsedin..."
                  value={appForm.message}
                  onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-pink-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs shadow-lg shadow-pink-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Başvurumu Gönder</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
