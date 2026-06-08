import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import AnimatedBackground from "../components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafiul Islam | Full Stack Developer Portfolio",
  description:
    "Crafting modern, responsive, and high-performance web applications with Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-base-100 text-base-content selection:bg-primary selection:text-primary-content">
        <Providers>
          {/* Global animated background — visible behind every page */}
          <div className="fixed inset-0 z-0">
            <AnimatedBackground />
          </div>
          <div className="relative z-10 flex-grow flex flex-col">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
