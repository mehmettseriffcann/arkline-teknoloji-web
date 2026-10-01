"use client";

import Link from "next/link";

export default function GamesFooter() {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <p className="text-base font-bold text-white mb-3">ARKLINE GAMES</p>
            <p className="text-sm text-neutral-500 leading-relaxed mb-6">
              İstanbul merkezli, küresel ölçekli mobil oyun şirketi.
            </p>
            <Link
              href="/"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              ← Arkline Teknoloji
            </Link>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-5">Şirket</p>
            <ul className="space-y-3">
              {[
                ["Hakkımızda", "#about"],
                ["Oyunlar", "#games"],
                ["Kariyer", "#careers"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest mb-5">İletişim</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@arklinegames.com" className="text-sm text-neutral-400 hover:text-white transition-colors">
                  info@arklinegames.com
                </a>
              </li>
              <li className="text-sm text-neutral-400">İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Arkline Games</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-neutral-600 hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="text-xs text-neutral-600 hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
