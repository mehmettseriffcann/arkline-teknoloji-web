"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function GamesNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/games" className="font-bold text-neutral-900 text-base tracking-tight">
          Arkline Games
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {[
            ["Our Story", "#about"],
            ["Games", "#games"],
            ["Join Us", "#careers"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
              {label}
            </a>
          ))}
          <Link href="/" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            ← Energy
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-neutral-700">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-4 flex flex-col gap-4">
          {[["Our Story", "#about"], ["Games", "#games"], ["Join Us", "#careers"], ["← Energy", "/"]].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setOpen(false)} className="text-sm text-neutral-600">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
