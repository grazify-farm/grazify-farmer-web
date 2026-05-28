import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "GraziLink – Farmer Community App by Grazify",
  description:
    "GraziLink by Grazify is a farmer community app for connecting farmers, sharing farming knowledge, scanning crops for possible disease or stress, and staying updated with agriculture news.",
  openGraph: {
    title: "GraziLink – Farmer Community App by Grazify",
    description:
      "Connect with farmers, share knowledge, scan crops, and stay updated with farmer-focused news using GraziLink by Grazify.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-quicksand`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
