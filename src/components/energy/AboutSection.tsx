const STEPS = [
  ["Keşif ve Proje", "İhtiyacın yerinde incelenmesi ve projelendirme."],
  ["Uygulama", "Montaj, kablolama ve saha işlerinin yürütülmesi."],
  ["Devreye Alma", "Testler ve sistemin işletmeye alınması."],
  ["Bakım ve Servis", "Periyodik bakım ile arıza ve onarım hizmetleri."],
];

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1000&q=75&auto=format&fit=crop"
              alt="Endüstriyel tesis"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-medium text-accent">Hakkımızda</p>
            <h2 className="mb-8 text-3xl font-light leading-tight text-brand lg:text-5xl">
              Elektrik mühendisliği hizmetleri
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-brand/70">
              <p>
                Alçak ve yüksek gerilim sistemlerinden güneş enerjisi kurulumlarına,
                pano imalatından otomasyon projelerine kadar geniş bir alanda hizmet
                veriyoruz.
              </p>
              <p>
                Projelerimizi sektör standartlarına uygun olarak yürütür,
                müşterilerimizin ihtiyaçlarına göre çözümler geliştiririz.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mt-20 border-t border-neutral-200 pt-14">
          <h3 className="mb-10 text-2xl font-light text-brand">Çalışma sürecimiz</h3>
          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, desc], i) => (
              <li key={title} className="border-l-2 border-accent pl-5">
                <span className="text-sm text-brand/40">0{i + 1}</span>
                <p className="mt-1 mb-2 text-lg font-medium text-brand">{title}</p>
                <p className="text-sm leading-relaxed text-brand/60">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
