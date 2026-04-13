import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Setting a solid default global SEO baseline
export const metadata: Metadata = {
  title: "White's Auto Glass & Trim",
  description:
    "Metro Detroit's trusted family-owned auto glass repair and replacement service. Over 30 years of experience.",
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
      {/* bg-[#0b0f19] ensures the background matches the dark theme if a page is short.
        min-h-screen and flex-col allow the footer to stay at the bottom of the screen.
      */}
      <body className="min-h-screen flex flex-col bg-[#0b0f19] m-0 p-0">
        <Navbar />

        {/* flex-grow forces the main content area to expand and push the footer down */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
