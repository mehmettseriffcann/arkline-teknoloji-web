"use client";

// Gram Games style: dark hero with centered text
export default function GamesHero() {
  return (
    <>
      {/* Full-width dark hero */}
      <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center pt-14 overflow-hidden bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&auto=format&fit=crop"
          alt="Gaming"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-6 max-w-xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-5">
            We make games.
          </h1>
          <p className="text-sm text-white/55 leading-relaxed max-w-sm mx-auto">
            Arkline Games is an Istanbul-based mobile game studio.
          </p>
        </div>
      </section>

      {/* About - clean white section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-neutral-400 uppercase tracking-widest mb-4">Our Story</p>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 leading-snug">
                Technology meets creativity.
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                We combine technology and creativity to develop high-quality mobile games
                that will be played for years.
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Our studio is focused on building great experiences — from core gameplay
                to the smallest detail.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=75&auto=format&fit=crop"
              alt="Team"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
