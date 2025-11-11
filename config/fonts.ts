import {
  Fira_Code as FontMono,
  Italiana as FontTitle,
  Josefin_Sans as FontBody,
  Poppins as FontSubtitle,
} from "next/font/google";

export const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const fontTitle = FontTitle({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
  display: "swap",
});

export const fontSubtitle = FontSubtitle({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-subtitle",
  display: "swap",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
