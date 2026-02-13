import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angloville Junior - Obóz Językowy z Native Speakerami 11-18 lat",
  description: "Przełam barierę językową w 7 dni! Obóz z Native Speakerami w formacie 1:2. Immersja językowa dla młodzieży 11-18 lat. Od 3200 zł. Sprawdź terminy!",
  keywords: "angloville, obóz językowy, native speakerzy, angielski dla młodzieży, immersja językowa, obozy językowe 2026",
  openGraph: {
    title: "Angloville Junior - Obóz Językowy z Native Speakerami",
    description: "Przełam barierę językową w 7 dni! Format 1:2 z native speakerami.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
