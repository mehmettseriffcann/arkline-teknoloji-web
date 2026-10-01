import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ARKLİNE TEKNOLOJİ | Elektrik & Enerji Çözümleri",
  description:
    "Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet.",
  authors: [{ name: "Arkline Teknoloji" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
