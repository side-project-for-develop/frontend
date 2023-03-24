import React from "react";
import "./globals.css";
import Providers from "./Providers";
import BottomNav from "@/components/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="bg-red-300">
            <section className="relative max-w-[420px] min-w-[320px] h-screen m-auto overflow-y-scroll bg-white shadow-xl">
              {children}
              {/* <BottomNav /> */}
            </section>
          </main>
        </Providers>
      </body>
    </html>
  );
}
