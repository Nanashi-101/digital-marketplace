import type { Metadata } from "next";
import localFont from "next/font/local";
import { Varela_Round, M_PLUS_Rounded_1c, Pacifico, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-varela-round",
  weight: "400",
});

const MPlusRound = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  variable: "--font-plus-round",
  weight: "700",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export const metadata: Metadata = {
  title: "ChromaUI - The best UI/UX store in the market",
  description: "ChromaUI is the best UI/UX store in the market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} ${MPlusRound.variable} ${pacifico.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
