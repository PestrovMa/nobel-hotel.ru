import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Резиденція Братьевъ Нобель — Старица, Тверская область",
  description:
    "Бутик-эко-резиденция о шестнадцати домах на берегу Волги в Старице. Открыто круглый год.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
