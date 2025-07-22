import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";

// const playfair_display = Playfair_Display({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-playfair",
// });

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

// const inter = Inter({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

export const metadata: Metadata = {
  title: "RFR Portfolio",
  description: "Modern & Minimalist JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} font-poppins antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
