import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ARKLİNE TEKNOLOJİ | Gücünüzü Geleceğe Taşıyoruz",
  description:
    "Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet. Alçak & Yüksek Gerilim, GES, Pano İmalatı, Otomasyon ve Mühendislik.",
  keywords: [
    "Arkline Teknoloji",
    "Elektrik Taahhüt",
    "Yüksek Gerilim",
    "Alçak Gerilim",
    "Güneş Enerji Sistemleri",
    "GES",
    "Pano İmalatı",
    "Kompanzasyon",
    "Enerji Altyapısı",
  ],
  authors: [{ name: "Arkline Teknoloji" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
