"use client";

import Link from "next/link";

export default function GamesFooter() {
  return (
    <footer className="bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          <div>
            <p className="font-bold text-white text-sm mb-2">Arkline Games</p>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              A mobile game studio.
            </p>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4">Studio</p>
              <ul className="space-y-2.5">
                <li><a href="#about" className="text-xs text-neutral-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#culture" className="text-xs text-neutral-400 hover:text-white transition-colors">Culture</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-600 uppercase tracking-widest mb-4">Contact</p>
              <ul className="space-y-2.5">
                <li>
                  <a href="mailto:info@arklinegames.com" className="text-xs text-neutral-400 hover:text-white transition-colors">
                    info@arklinegames.com
                  </a>
                </li>
                <li>
                  <Link href="/" className="text-xs text-neutral-400 hover:text-white transition-colors">
                    Arkline Energy →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Arkline Games</p>
          <div className="flex gap-5">
            <span className="text-xs text-neutral-600 cursor-pointer hover:text-neutral-400">Privacy</span>
            <span className="text-xs text-neutral-600 cursor-pointer hover:text-neutral-400">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
