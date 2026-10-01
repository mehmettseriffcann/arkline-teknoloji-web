"use client";

// Peak / Gram style culture section - English
export default function GamesCulture() {
  return (
    <section id="culture" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&auto=format&fit=crop"
            alt="Studio"
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Life at Arkline</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-snug">
              Everyone shapes the product.
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              We work in small, autonomous teams where every person has a real opportunity
              to contribute and make an impact.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              If you want to be part of a fast-growing studio, we'd love to hear from you.
            </p>

            <div className="mt-10 border-t border-neutral-200 pt-8">
              {[
                ["Quality", "High standards in every detail."],
                ["Speed", "Fast iteration, fast learning."],
                ["Ownership", "Small teams, real impact."],
              ].map(([title, desc]) => (
                <div key={title} className="py-4 border-b border-neutral-100 flex gap-6">
                  <span className="text-xs font-semibold text-neutral-900 w-20 shrink-0 pt-0.5">{title}</span>
                  <span className="text-xs text-neutral-400">{desc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="mailto:careers@arklinegames.com"
                className="inline-block px-5 py-2.5 bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-700 transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
