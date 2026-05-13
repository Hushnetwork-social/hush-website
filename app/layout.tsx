import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import {
  defaultDescription,
  defaultTitle,
  organizationJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/app/seo";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "privacy-first remote voting",
  keywords: [
    "HushVoting",
    "HushNetwork",
    "online voting software",
    "election software",
    "privacy-first voting",
    "online voting for associations",
    "association voting",
    "secret ballot online voting",
    "private online voting",
    "verifiable voting",
    "remote voting",
    "digital governance",
    "HushFeeds",
    "HushSocial",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icons/hushnetwork_icon_transparent_subtle_glow.png",
        width: 1254,
        height: 1254,
        alt: "HushNetwork privacy infrastructure icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/icons/hushnetwork_icon_transparent_subtle_glow.png"],
  },
  icons: {
    icon: "/icons/hushnetwork_icon_transparent_subtle_glow.png",
    apple: "/icons/hushnetwork_icon_transparent_subtle_glow.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <StructuredData data={[organizationJsonLd, websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}
