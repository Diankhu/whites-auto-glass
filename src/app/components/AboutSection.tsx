"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

const BRAND_RED = "#d63a0f";

const PERKS = [
  "Family-owned and operated since day one",
  "Serving Metro Detroit for 30+ years",
  "Mobile service — we come to you",
  "Honest pricing, no surprises",
  "We stand behind every repair",
];

export default function AboutSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#1a1a1a",
        py: { xs: 8, md: 14 },
        px: { xs: 3, md: 12 },
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 6, md: 10 },
        alignItems: "center",
        // Subtle noise texture for premium feel
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          pointerEvents: "none",
          zIndex: 0,
        },
        // Faint red glow top-right for depth
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(ellipse at top right, rgba(214,58,15,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        },
      }}
    >
      {/* Left — image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: { xs: "280px", md: "520px" },
          borderRadius: "4px",
          overflow: "hidden",
          // Glossy border effect
          outline: "1px solid rgba(255,255,255,0.06)",
          outlineOffset: "-1px",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src="/building.jpg"
          alt="White's Auto Glass & Trim storefront"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Red accent bar */}
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
        {/* Subtle gloss sheen on the image */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Right — content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
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

        {/* Headline */}
        <Typography
          component="h2"
          sx={{
            color: "#fff",
            fontSize: { xs: "30px", md: "42px" },
            fontWeight: 700,
            fontFamily: "'Arial Black', Arial, sans-serif",
            textTransform: "uppercase",
            lineHeight: 1.08,
            letterSpacing: "-0.5px",
            mb: 3,
            // Subtle text gloss
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          More Than a Shop —<br />
          <Box component="span" sx={{ color: BRAND_RED }}>
            We&apos;re a Family.
          </Box>
        </Typography>

        {/* Body */}
        <Typography
          sx={{ color: "#999", fontSize: "15px", lineHeight: 1.8, mb: 2 }}
        >
          Proudly family-owned and operated for over 30 years, we&apos;ve been
          serving the Metro Detroit area with honest, reliable, and top-quality
          auto glass services since day one.
        </Typography>
        <Typography
          sx={{ color: "#999", fontSize: "15px", lineHeight: 1.8, mb: 4 }}
        >
          When you bring your vehicle to White&apos;s Auto Glass & Trim,
          you&apos;re not just getting expert service — you&apos;re getting care
          that comes from decades of experience and a genuine passion for what
          we do.
        </Typography>

        {/* Perk list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.25,
            mb: 5,
            p: 3,
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "4px",
            // Glossy card feel
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {PERKS.map((perk) => (
            <Box
              key={perk}
              sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
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
                  boxShadow: "0 0 8px rgba(214,58,15,0.4)",
                }}
              >
                <CheckIcon sx={{ fontSize: 12, color: "#fff" }} />
              </Box>
              <Typography
                sx={{ color: "#ccc", fontSize: "14px", fontWeight: 500 }}
              >
                {perk}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA */}
        <Button
          href="/about"
          component="a"
          sx={{
            bgcolor: BRAND_RED,
            color: "#fff",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            px: 4,
            py: 1.75,
            borderRadius: "2px",
            boxShadow: "0 4px 14px rgba(214,58,15,0.3)",
            "&:hover": {
              bgcolor: "#bf3309",
              boxShadow: "0 4px 20px rgba(214,58,15,0.45)",
            },
          }}
        >
          Learn More About Us
        </Button>
      </Box>
    </Box>
  );
}
