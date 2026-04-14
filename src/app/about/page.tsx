import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "About Us | White's Auto Glass & Trim",
  description:
    "Family-owned and operated for over 30 years, White's Auto Glass & Trim has been serving the Metro Detroit area with honest, reliable auto glass services since day one.",
  keywords: [
    "White's Auto Glass Taylor MI",
    "family owned auto glass Michigan",
    "auto glass Metro Detroit",
    "about White's Auto Glass",
  ],
  openGraph: {
    title: "About Us | White's Auto Glass & Trim",
    description:
      "Family-owned and operated for over 30 years, serving Metro Detroit with honest, reliable auto glass service.",
    url: "https://whitesautoglass.com/about",
    siteName: "White's Auto Glass & Trim",
    type: "website",
  },
};

const VALUES = [
  "Family-owned and operated since day one",
  "Serving Metro Detroit for 30+ years",
  "Honest pricing with no surprises",
  "We stand behind every repair we do",
  "Mobile service — we come to you",
  "Trusted by thousands of Metro Detroit drivers",
];

export default function AboutPage() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Box
        sx={{
          px: { xs: 4, md: 12 },
          py: { xs: 8, md: 14 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 6, md: 12 },
          alignItems: "center",
          maxWidth: 2000,
          mx: "auto",
        }}
      >
        {/* Left — content */}
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}
          >
            <Box sx={{ width: 28, height: 2, bgcolor: BRAND_RED }} />
            <Typography
              sx={{
                color: BRAND_RED,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Our Story
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              color: "#111",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'Arial Black', Arial, sans-serif",
              lineHeight: 1.06,
              letterSpacing: "-0.5px",
              mb: 3,
            }}
          >
            Who We{" "}
            <Box component="span" sx={{ color: BRAND_RED }}>
              Are
            </Box>
          </Typography>

          <Typography
            sx={{ color: "#555", fontSize: "15px", lineHeight: 1.85, mb: 2.5 }}
          >
            At White&apos;s Auto Glass, we&apos;re more than just a repair shop
            — we&apos;re a family. Proudly family-owned and operated for over 30
            years, we&apos;ve been serving the Metro Detroit area with honest,
            reliable, and top-quality auto glass services since day one.
          </Typography>

          <Typography
            sx={{ color: "#555", fontSize: "15px", lineHeight: 1.85, mb: 2.5 }}
          >
            What started as a small family operation has grown into a trusted
            name in the community, known for our attention to detail, friendly
            service, and commitment to getting the job done right. Whether you
            need a simple chip repair, full windshield replacement, help with
            water leaks or rattles, seat upholstery repair, or even a
            convertible top replacement — we&apos;ve got you covered.
          </Typography>

          <Typography
            sx={{ color: "#555", fontSize: "15px", lineHeight: 1.85, mb: 5 }}
          >
            We treat every customer like family because that&apos;s how we
            believe business should be done. When you bring your vehicle to
            White&apos;s Auto Glass & Trim, you&apos;re not just getting expert
            service — you&apos;re getting care that comes from decades of
            experience and a genuine passion for what we do.
          </Typography>

          {/* Values list */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
            }}
          >
            {VALUES.map((value) => (
              <Box
                key={value}
                sx={{ display: "flex", alignItems: "flex-start", gap: 1.25 }}
              >
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    bgcolor: BRAND_RED,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: "2px",
                  }}
                >
                  <CheckIcon sx={{ fontSize: 12, color: "#fff" }} />
                </Box>
                <Typography
                  sx={{ color: "#444", fontSize: "13px", lineHeight: 1.6 }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right — image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "580px" },
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid #e0e0e0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}
        >
          <Image
            src="/building.jpg"
            alt="White's Auto Glass & Trim storefront at 11310 Allen Rd, Taylor MI"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          {/* Red left accent bar */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "4px",
              height: "100%",
              bgcolor: BRAND_RED,
              zIndex: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
