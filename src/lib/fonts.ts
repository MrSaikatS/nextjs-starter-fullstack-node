import { Geist, Geist_Mono, Inter } from "next/font/google";

export const interHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});
