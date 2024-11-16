import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { WindowProvider } from "@/context/WindowContext";
import "./globals.css";
import { WindowViewport } from "@/components/windows/WindowViewport";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slate Web OS",
  description: "Web operating system by Slate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} p-16`}>
        <WindowViewport />
        {children}
      </body>
    </html>
  );
}
