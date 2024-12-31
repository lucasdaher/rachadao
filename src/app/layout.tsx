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
    type: "website",
    url: "https://rachadao.vercel.app/",
    title: "Rachadão - Compartilhe despesas de forma justa!",
    description:
      "Simplifique a divisão de despesas com o Rachadão. Chega de cálculos manuais, a gente resolve por você!",
    images: [
      {
        url: "assets/opengraph/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rachadão - Compartilhe despesas de forma justa!",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Rachadão",
              url: "https://localhost:3000",
              description:
                "Com o Rachadão, dividir despesas entre amigos ficou fácil, rápido e justo. Ideal para viagens, jantares ou qualquer evento em grupo!",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 bg-fixed bg-center bg-cover bg-no-repeat bg-[url('../assets/background.png')]`}
      >
        {children}
      </body>
    </html>
  );
}
