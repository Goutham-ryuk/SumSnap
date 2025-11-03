import type { Metadata } from "next";
import { Source_Sans_3 as FontSas } from "next/font/google";
import "./globals.css";

const fontSans = FontSas({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Neura Desk",
  description: "Neura Desk for all in one AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
