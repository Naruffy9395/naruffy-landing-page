import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahyom — Software, Branding & Automation Studio",
  description:
    "Websites, automation, and AI systems crafted with clarity and performance.",
  metadataBase: new URL("https://sahyom.com"),
  openGraph: {
    title: "Sahyom — Software, Branding & Automation Studio",
    description:
      "Websites, automation, and AI systems crafted with clarity and performance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
