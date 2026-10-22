import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const teko = localFont({
  src: [
    { path: "./fonts/Teko-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Teko-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-teko",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modena Motori",
  description:
    "Modena Motori fa conoscere la cultura e la tradizione automobilistica italiana.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={teko.variable}>
      <body>{children}</body>
    </html>
  );
}
