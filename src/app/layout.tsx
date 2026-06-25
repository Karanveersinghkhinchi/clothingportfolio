import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/lib/data";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "3DOTCREATIVES | Fashion Production Studio",
    template: "%s | 3DOTCREATIVES",
  },
  description:
    "Fashion production studio creating campaign films, editorial photography, and visual commerce systems for clothing brands across India. We turn garments into obsession.",
  keywords: [
    "fashion production studio",
    "clothing campaign films",
    "fashion photography India",
    "editorial fashion",
    "campaign films India",
    "fashion visuals Jaipur",
    "clothing brand photography",
    "fashion reels",
    "catalogue shoots",
    "visual commerce",
  ],
  authors: [{ name: "3DOTCREATIVES", url: "https://3dotcreatives.in" }],
  creator: "3DOTCREATIVES",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://3dotcreatives.in",
    siteName: "3DOTCREATIVES",
    title: "3DOTCREATIVES | Fashion Production Studio",
    description:
      "We turn garments into obsession. Campaign films, editorial photography, and visual commerce systems for premium clothing brands.",
    images: [
      {
        url: "/visuals/photo-08.jpg",
        width: 1200,
        height: 630,
        alt: "3DOTCREATIVES — Fashion Production Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3DOTCREATIVES | Fashion Production Studio",
    description: "We turn garments into obsession.",
    images: ["/visuals/photo-08.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
          <CustomCursor />
        </SmoothScroll>
      </body>
    </html>
  );
}
