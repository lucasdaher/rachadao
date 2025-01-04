import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rachadao.vercel.app"),
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
    images: "/og-image.png",
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
        className={`${inter.variable} font-inter antialiased bg-fixed bg-center bg-cover bg-no-repeat bg-[url('../assets/backgrounds/bg-green-02.png')]`}
      >
        {children}
      </body>
    </html>
  );
}
