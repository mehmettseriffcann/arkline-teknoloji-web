import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ARKLİNE TEKNOLOJİ | Elektrik & Enerji Çözümleri",
  description:
    "Alçak ve yüksek gerilim, elektrik taahhüt, pano imalatı, otomasyon ve güneş enerjisi hizmetleri.",
  authors: [{ name: "Arkline Teknoloji" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-brand antialiased">
        {children}
      </body>
    </html>
  );
}
