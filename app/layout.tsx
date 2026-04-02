import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ASCII Inc - Character-Based Artwork Marketplace",
    template: "%s | ASCII Inc",
  },
  description:
    "Discover and collect unique ASCII art. ASCII Inc is a curated marketplace for character-based artwork by skilled artists worldwide.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://asciiinc.com"
  ),
  openGraph: {
    type: "website",
    siteName: "ASCII Inc",
    title: "ASCII Inc - Character-Based Artwork Marketplace",
    description:
      "Discover and collect unique ASCII art. A curated marketplace for character-based artwork.",
  },
  twitter: {
    card: "summary",
    title: "ASCII Inc - Character-Based Artwork Marketplace",
    description:
      "Discover and collect unique ASCII art from skilled artists worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
