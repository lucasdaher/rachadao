import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rachadão - Compartilhe despesas de forma justa!",
  description:
    "Com o Rachadão, dividir despesas entre amigos ficou fácil, rápido e justo. Ideal para viagens, jantares ou qualquer evento em grupo!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Rachadão - Compartilhe despesas de forma justa!",
    description:
      "Simplifique a divisão de despesas com o Rachadão. Chega de cálculos manuais, a gente resolve por você!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rachadão - Compartilhe despesas de forma justa!",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 bg-fixed bg-center bg-cover bg-no-repeat bg-[url('../assets/backgrounds/bg-elysian-8.jpg')]`}
      >
        {children}
      </body>
    </html>
  );
}
