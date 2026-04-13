import { Box } from "@mui/material";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";

// 1. THIS IS YOUR SEO METADATA
export const metadata = {
  title: "White's Auto Glass & Trim | Metro Detroit's Trusted Experts",
  description:
    "Family-owned mobile auto glass repair and replacement in Metro Detroit. Over 30 years of experience. Windshield replacement, leak repair, and more.",
  keywords:
    "auto glass repair, windshield replacement, mobile auto glass, Metro Detroit, Taylor MI, convertible top replacement",
};

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
    </Box>
  );
}
