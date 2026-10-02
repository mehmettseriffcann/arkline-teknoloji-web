"use client";

import Link from "next/link";

export default function GamesNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/games" className="font-bold text-neutral-900 text-sm tracking-tight">
          Arkline Games
        </Link>
        <nav className="flex items-center gap-6">
          <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">About</a>
          <a href="#games" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Games</a>
          <a href="#culture" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">Culture</a>
          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">← Energy</Link>
          <a
            href="mailto:careers@arklinegames.com"
            className="text-sm font-medium bg-neutral-900 text-white px-4 py-1.5 hover:bg-neutral-700 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
