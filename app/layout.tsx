import type { Metadata } from "next";
import localFont from "next/font/local";
import { Varela_Round, Pacifico, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "./components/themeProvider";
import { TooltipProvider } from "@/components/ui/tooltip";

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

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: "400",
});
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["700", "900"],
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
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${varelaRound.variable} ${pacifico.variable} ${roboto.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            {children}
            <Toaster richColors theme="light" closeButton />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
