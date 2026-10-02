import { COMPANY } from "@/lib/company";
import { SERVICE_GROUPS } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="mb-3 text-base font-bold tracking-tight text-white">ARKLİNE TEKNOLOJİ</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Elektrik ve enerji çözümleri.
            </p>
          </div>
          <div>
            <p className="mb-5 text-xs text-white/40">Faaliyet Alanları</p>
            <ul className="space-y-3">
              {SERVICE_GROUPS.map((g) => (
                <li key={g.id}>
                  <a href="#hizmetler" className="text-sm text-white/70 hover:text-white transition-colors">
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs text-white/40">İletişim</p>
            <ul className="space-y-3 text-sm text-white/70">
              {COMPANY.phone && (
                <li>
                  <a href={COMPANY.phone.href} className="hover:text-white transition-colors">
                    {COMPANY.phone.display}
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li>{COMPANY.city}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {COMPANY.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
