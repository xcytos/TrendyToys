import "../styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TrendyToys Demo",
  description: "UI-first demo e-commerce website for toys"
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-text-main">
        {props.children}
      </body>
    </html>
  );
}
