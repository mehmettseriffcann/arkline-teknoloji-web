"use client";

import { useState } from "react";

const POSITIONS = [
  {
    title: "Senior Unity Game Developer",
    dept: "Engineering",
    location: "İstanbul (Hibrit)",
    type: "Tam Zamanlı",
  },
  {
    title: "Lead 3D Game Artist",
    dept: "Art & Design",
    location: "İstanbul (Hibrit)",
    type: "Tam Zamanlı",
  },
  {
    title: "Game Economy Designer",
    dept: "Product",
    location: "Uzaktan",
    type: "Tam Zamanlı",
  },
  {
    title: "UI/UX & Motion Designer",
    dept: "Art & Design",
    location: "İstanbul (Hibrit)",
    type: "Tam Zamanlı",
  },
  {
    title: "Senior Product Manager (LiveOps)",
    dept: "Product",
    location: "İstanbul",
    type: "Tam Zamanlı",
  },
];

export default function GamesCareers() {
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <section id="careers" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header - Dream Games style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-4">
              Kariyer
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 leading-tight">
              Aramıza Katılın
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-base text-neutral-500 leading-relaxed">
              Hızla büyüyen bir şirketin parçası olmak ve gerçek etki yaratmak istiyorsanız,
              sizinle tanışmak isteriz.
            </p>
          </div>
        </div>

        {/* Positions list */}
        <div className="border-t border-neutral-200">
          {POSITIONS.map((p) => (
            <div
              key={p.title}
              className="py-6 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-base font-semibold text-neutral-900 mb-1">{p.title}</h3>
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span>{p.dept}</span>
                  <span>·</span>
                  <span>{p.location}</span>
                  <span>·</span>
                  <span>{p.type}</span>
                </div>
              </div>
              <button
                onClick={() => setApplied(p.title)}
                className="shrink-0 text-sm font-semibold border border-neutral-900 text-neutral-900 px-4 py-2 hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
              >
                {applied === p.title ? "Başvuruldu ✓" : "Başvur"}
              </button>
            </div>
          ))}
        </div>

        {/* Open application */}
        <div className="mt-16 p-12 bg-white">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Aradığınız pozisyon listede yok mu?
            </h3>
            <p className="text-base text-neutral-500 mb-8">
              Açık pozisyon bulmak zorunda değilsiniz. Bize portfolio'nuzla ulaşın,
              en uygun rol birlikte bulunabilir.
            </p>
            <a
              href="mailto:kariyer@arklinegames.com"
              className="inline-block px-6 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors"
            >
              kariyer@arklinegames.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
