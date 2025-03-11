"use client";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { ThemeProvider } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        {/* Manually add meta tags here */}
        <meta name="theme-color" content="#000319" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
