import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

const DATA = [
  { id: "todo-0", name: "Eat", complete: true },
  { id: "todo-1", name: "Sleep", complete: false },
  { id: "todo-2", name: "Rave", complete: false },
];

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
        <Home tasks={DATA}></Home>
      </body>
    </html>
  );
}
