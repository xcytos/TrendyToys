import "../styles/globals.css";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";

export const metadata = {
  title: "TrendyToys Demo",
  description: "UI-first demo e-commerce website for toys"
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} min-h-screen bg-background text-text-main`}
      >
        {props.children}
      </body>
    </html>
  );
}
