import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["800"], variable: "--font-bricolage" });
const figtree = Figtree({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: "Six7 – Sandwiches och café i Helsingborg",
  description:
    "Six7 är en sandwichbutik och ett café på Carl Krooks gata 33 i Helsingborg. Sandwiches, drycker och smaker med mellanösterninfluenser.",
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
