import type { Metadata, Viewport } from "next";
import GamesNavbar from "@/components/games/GamesNavbar";
import GamesHero from "@/components/games/GamesHero";
import GamesPlaceholder from "@/components/games/GamesPlaceholder";
import GamesCulture from "@/components/games/GamesCulture";
import GamesFooter from "@/components/games/GamesFooter";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Arkline Games | Mobile Game Studio",
  description: "Arkline Games is a mobile game studio.",
};

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <GamesNavbar />
      <main>
        <GamesHero />
        <GamesPlaceholder />
        <GamesCulture />
      </main>
      <GamesFooter />
    </div>
  );
}
