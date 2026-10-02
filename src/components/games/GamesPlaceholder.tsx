"use client";

// Empty games section - placeholder, no games listed yet
export default function GamesPlaceholder() {
  return (
    <section id="games" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Games</p>
          <h2 className="text-3xl font-bold text-neutral-900">Our Games</h2>
        </div>

        {/* Coming soon placeholder */}
        <div className="border border-neutral-200 bg-white py-20 flex flex-col items-center justify-center text-center">
          <p className="text-sm text-neutral-400">Coming soon.</p>
        </div>
      </div>
    </section>
  );
}
