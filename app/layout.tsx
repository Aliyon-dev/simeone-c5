import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";

const minecraft = localFont({
  src: "./fonts/Minecraft.ttf",
  variable: "--font-minecraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aliyon Tembo - Portfolio",
  description: "Full stack engineer building human-centered tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={minecraft.variable}>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}