import type { Metadata, Viewport } from "next";
import GamesNavbar from "@/components/games/GamesNavbar";
import GamesHero from "@/components/games/GamesHero";
import GamesShowcase from "@/components/games/GamesShowcase";
import GamesCulture from "@/components/games/GamesCulture";
import GamesCareers from "@/components/games/GamesCareers";
import GamesFooter from "@/components/games/GamesFooter";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arkline Games | Mobile Gaming Studio",
  description:
    "İstanbul merkezli, milyonların oynadığı yüksek kaliteli mobil oyunlar üreten stüdyo.",
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <GamesNavbar />
      <main>
        <GamesHero />
        <GamesShowcase />
        <GamesCulture />
        <GamesCareers />
      </main>
      <GamesFooter />
    </div>
  );
}
