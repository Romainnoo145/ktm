import type { Metadata } from "next";
import { Poppins, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "KTM - Koopmans Timmerwerken Maasbree",
  description: "Specialist in timmerwerk, renovatie, verbouwingen en onderhoud van woningen en bedrijfspanden.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className={`${poppins.variable} ${lora.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
