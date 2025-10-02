import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/core/Navbar";
import Footer from "@/components/core/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beranda | Kopi Kita Cafe",
  description:
    "Kopi Kita adalah toko kopi online yang menyediakan berbagai pilihan kopi berkualitas, mulai dari biji kopi pilihan hingga menu racikan spesial. Nikmati pengalaman ngopi terbaik dari rumah Anda.",
  keywords: [
    "kopi",
    "toko kopi online",
    "kopi nusantara",
    "biji kopi",
    "kopi kita",
    "ngopi",
    "coffee shop",
  ],
  authors: [{ name: "Kopi Kita Team" }],
  openGraph: {
    title: "Kopi Kita Cafe",
    description:
      "Nikmati kopi berkualitas dengan cita rasa terbaik. Kopi Kita menghadirkan pilihan kopi nusantara hingga racikan spesial langsung ke rumah Anda.",
    url: "https://kopikita.com",
    siteName: "Kopi Kita",
    images: [
      {
        url: "/assets/image.png",
        width: 1200,
        height: 630,
        alt: "Kopi Kita - Toko Kopi Online",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kopi Kita - Toko Kopi Online",
    description:
      "Temukan kopi favoritmu di Kopi Kita. Dari biji kopi pilihan hingga menu racikan spesial, semuanya tersedia secara online.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
