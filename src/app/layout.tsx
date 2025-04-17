import type { Metadata } from "next";
import './globals.css'
import icon from "@/public/img/logo.webp"

export const metadata: Metadata = {
  title: "Quimíca Fácil",
  description: "Aprenda química de forma fácil e sem rodeios! Conheça agora!",
  icons: {
    icon: icon.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
