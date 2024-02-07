import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

export const metadata: Metadata = {
  title: "Todo II",
  description: "Todo app with a minimal interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen flex min-h-screen flex-col text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
