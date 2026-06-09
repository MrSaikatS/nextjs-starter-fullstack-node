import { Noto_Sans, Nunito_Sans } from "next/font/google";

export const notoSansHeading = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
