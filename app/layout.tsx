import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter, Space_Grotesk } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--font-minecraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARCH/ENG/DEV Portfolio",
  description: "Multi-Disciplinary Systems Architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${minecraft.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}