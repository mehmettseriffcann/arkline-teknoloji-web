"use client";

// Gram.gs "Join Us" style - simple list, no excess
const POSITIONS = [
  { title: "Senior Unity Developer", dept: "Engineering", location: "İstanbul / Uzaktan" },
  { title: "Lead 3D Game Artist", dept: "Art & Design", location: "İstanbul" },
  { title: "Game Economy Designer", dept: "Product", location: "Uzaktan" },
  { title: "UI/UX Designer", dept: "Design", location: "İstanbul" },
  { title: "Senior Product Manager", dept: "Product", location: "İstanbul" },
];

export default function GamesCareers() {
  return (
    <section id="careers" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-14">
          <div className="lg:col-span-1">
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Join Us</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4 leading-snug">
              Açık Pozisyonlar
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Pozisyon listede yoksa{" "}
              <a href="mailto:kariyer@arklinegames.com" className="underline hover:text-neutral-700">
                kariyer@arklinegames.com
              </a>{" "}
              adresine ulaşabilirsiniz.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="border-t border-neutral-200">
              {POSITIONS.map((p) => (
                <div
                  key={p.title}
                  className="py-5 border-b border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900">{p.title}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5">{p.dept} · {p.location}</p>
                  </div>
                  <a
                    href="mailto:kariyer@arklinegames.com"
                    className="text-xs border border-neutral-900 text-neutral-900 px-4 py-2 hover:bg-neutral-900 hover:text-white transition-colors shrink-0"
                  >
                    Başvur
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
