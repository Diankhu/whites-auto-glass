import type { Metadata } from "next";
import ThemeRegistry from "./lib/ThemeRegistry";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

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
    <html lang="en">
      <body
        style={{
          backgroundColor: "#0f0f0f",
          margin: 0,
          padding: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeRegistry>
          <Navbar />
          <main style={{ flexGrow: 1 }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
