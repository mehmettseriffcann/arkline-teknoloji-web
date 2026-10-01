import type { Metadata } from "next";
import GamesNavbar from "@/components/games/GamesNavbar";
import GamesHero from "@/components/games/GamesHero";
import GamesShowcase from "@/components/games/GamesShowcase";
import GamesCulture from "@/components/games/GamesCulture";
import GamesCareers from "@/components/games/GamesCareers";
import GamesFooter from "@/components/games/GamesFooter";

export const metadata: Metadata = {
  title: "ARKLINE GAMES | World-Class Mobile Gaming Studio",
  description:
    "We craft extraordinary mobile game hits. Milyonların oynadığı Match-3, Runner, Merge ve strateji oyunlarımızla dünyayı eğlendiriyoruz.",
  keywords: [
    "Arkline Games",
    "Mobile Games",
    "Casual Games",
    "Unity Game Developer",
    "Dream Games",
    "Peak Games",
    "Match-3",
  ],
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-pink-500 selection:text-white">
      <GamesNavbar />
      <main className="flex-1">
        <GamesHero />
        <GamesShowcase />
        <GamesCulture />
        <GamesCareers />
      </main>
      <GamesFooter />
    </div>
  );
}
