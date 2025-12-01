import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageNavigator from "@/components/PageNavigator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HushNetwork - Decentralized Social Future",
  description: "Reclaim your privacy and data ownership on a blockchain-powered social network. Zero fees, true ownership, community-driven governance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <PageNavigator />
        {children}
      </body>
    </html>
  );
}
