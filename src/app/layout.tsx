import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Oswald } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gloriasp2b.vercel.app"),
  title: "GLORIAS BASKETBALL | SMK Pasundan 2 Banjaran",
  description:
    "Website Resmi Ekstrakurikuler Bola Basket SMK Pasundan 2 Banjaran (Glorias P2B). Forged in Glory, Played with Pride.",
  keywords: [
    "Glorias Basketball",
    "SMK Pasundan 2 Banjaran",
    "Eskul Basket Banjaran",
    "Glorias P2B",
    "Basket SMK Pasundan 2 Banjaran",
    "DBL Bandung",
    "Basketball Club",
  ],
  authors: [{ name: "Glorias Basketball P2B" }],
  icons: {
    icon: "/img/Glorias.jpg",
  },
  openGraph: {
    title: "GLORIAS BASKETBALL • SMK Pasundan 2 Banjaran",
    description:
      "Website Resmi Ekstrakurikuler Bola Basket SMK Pasundan 2 Banjaran. Pembinaan karakter atletik, disiplin, dan mental juara.",
    url: "https://gloriasp2b.vercel.app",
    siteName: "Glorias Basketball P2B",
    images: [
      {
        url: "/img/DSCF0436.jpg",
        width: 1200,
        height: 630,
        alt: "Glorias Basketball Team SMK Pasundan 2 Banjaran",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakartaSans.variable} ${oswald.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#07090E] text-slate-100 antialiased selection:bg-[#ff5500] selection:text-white">
        {children}
      </body>
    </html>
  );
}
