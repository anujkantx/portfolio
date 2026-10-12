import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F7F6F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Anujkant — Software Engineer & Product Builder",
    template: "%s | Anujkant",
  },
  description:
    "Editorial portfolio of Anujkant. Multidisciplinary software engineer exploring full-stack systems, applied AI, and cinematic visual storytelling.",
  keywords: [
    "Anujkant",
    "Software Engineer",
    "Product Builder",
    "Full-Stack Developer",
    "FastAPI",
    "Next.js",
    "AI Engineering",
    "IIT Madras",
    "GCET",
    "AirDose",
    "Studyit",
  ],
  authors: [{ name: "Anujkant" }],
  creator: "Anujkant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anujkant.dev",
    title: "Anujkant — Software Engineer & Product Builder",
    description:
      "Multidisciplinary builder working at the crossroads of full-stack engineering, applied artificial intelligence, and cinematic visual storytelling.",
    siteName: "Anujkant Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anujkant — Software Engineer & Product Builder",
    description:
      "Turning complex technical ideas into software people actually use.",
    creator: "@Anujkant_iitm",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--accent)] selection:text-white flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-[var(--text-primary)] focus:border focus:border-[var(--border-strong)] focus:shadow-md focus:rounded-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
