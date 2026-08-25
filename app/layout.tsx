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
  metadataBase: new URL("https://samjah-music.com"),
  title: {
    default: "Samjah Music | Hintergrundmusik für deine Location",
    template: "%s | Samjah Music",
  },
  description:
    "Professionelle Hintergrundmusik und atmosphärische Soundscapes für Cafés, Restaurants, Hotels, Bars und Lounges.",
  keywords: [
    "Hintergrundmusik",
    "GEMA freie Musik",
    "Musik für Cafés",
    "Musik für Restaurants",
    "Musik für Hotels",
    "Musik für Bars",
    "LoFi",
    "Lounge Musik",
    "Samjah Music",
  ],
  authors: [{ name: "Benjamin Brändle" }],
  creator: "Benjamin Brändle",
  publisher: "Samjah Music",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://samjah-music.com",
    siteName: "Samjah Music",
    title: "Samjah Music | Hintergrundmusik für deine Location",
    description:
      "Professionelle Hintergrundmusik und atmosphärische Soundscapes für Cafés, Restaurants, Hotels, Bars und Lounges.",
    images: [
      {
        url: "/images/landing/hero.png",
        width: 1200,
        height: 630,
        alt: "Samjah Music",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samjah Music | Hintergrundmusik für deine Location",
    description:
      "Professionelle Hintergrundmusik und atmosphärische Soundscapes für Cafés, Restaurants, Hotels, Bars und Lounges.",
    images: ["/images/landing/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}