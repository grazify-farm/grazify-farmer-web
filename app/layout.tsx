import type { Metadata, Viewport } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const TITLE       = `${SITE.appName} – ${SITE.appTagline} ${SITE.attribution}`;
const SHORT_TITLE = `${SITE.appName} – ${SITE.appTagline}`;
const DESCRIPTION = `${SITE.appName} ${SITE.attribution} is a farmer community app for connecting farmers, sharing farming knowledge, scanning crops for possible disease or stress, and staying updated with agriculture news.`;
const OG_BLURB    = `Connect with farmers, share knowledge, scan crops, and stay updated with farmer-focused news using ${SITE.appName} ${SITE.attribution}.`;
const SITE_URL    = process.env.NEXT_PUBLIC_SITE_URL ?? "https://grazify-farmer-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  TITLE,
    template: `%s | ${SHORT_TITLE}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.appName,
  authors: [{ name: SITE.companyName }],
  creator: SITE.companyName,
  publisher: SITE.companyName,
  keywords: [
    "GraziLink", "Grazify", "farmer community", "Indian farmers",
    "AI crop scan", "crop disease detection", "agriculture app",
    "farming app", "farmer chat", "farm news",
  ],
  openGraph: {
    type:        "website",
    siteName:    SITE.appName,
    title:       TITLE,
    description: OG_BLURB,
    url:         SITE_URL,
    locale:      "en_IN",
  },
  twitter: {
    card:        "summary_large_image",
    title:       TITLE,
    description: OG_BLURB,
  },
  robots: {
    index:   true,
    follow:  true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAF8F0" },
    { media: "(prefers-color-scheme: dark)",  color: "#1A1A1A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
