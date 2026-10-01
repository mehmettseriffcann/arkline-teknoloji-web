"use client";

import Link from "next/link";
import { Gamepad2, ArrowLeft, Zap, Heart } from "lucide-react";

export default function GamesFooter() {
  return (
    <footer className="bg-slate-950 border-t border-purple-950/40 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-900">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-black text-white tracking-wider">
                ARKLINE <span className="text-pink-400">GAMES</span>
              </span>
              <p className="text-xs text-slate-400">
                An Arkline Technology Mobile Gaming Studio
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-amber-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Ana Şirket: Arkline Teknoloji (Elektrik & Enerji)</span>
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} Arkline Games Studios. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Community Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
