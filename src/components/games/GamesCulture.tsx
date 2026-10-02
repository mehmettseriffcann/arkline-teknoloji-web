"use client";

// Simple culture/team section - no boastful claims
export default function GamesCulture() {
  return (
    <section id="culture" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=75&auto=format&fit=crop"
            alt="Studio"
            className="w-full aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Culture</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-snug">
              How we work.
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed mb-4">
              We work in small teams where everyone contributes to the product.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed">
              If you'd like to join us, reach out below.
            </p>
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
