import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bisk — Lower medication costs for med spas",
  description: "Bisk connects med spas to a vetted network of compounding pharmacies so you pay less for the same medications.",
  openGraph: {
    title: "Bisk — Lower medication costs for med spas",
    description: "Save 20–40% on compounding medications through our pharmacy network.",
    siteName: "Bisk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
