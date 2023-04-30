"use client";

import React from "react";
import "./globals.css";
import Providers from "./Providers";
import BottomNav from "@/components/BottomNav";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="bg-red-300">
            <section className="relative max-w-[420px] min-w-[280px] h-screen m-auto overflow-y-scroll bg-white shadow-xl">
              {children}
              {pathname !== "/" && <BottomNav />}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
