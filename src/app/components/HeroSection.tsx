"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const BRAND_RED = "#d63a0f";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#0f0f0f",
        minHeight: { xs: "auto", md: "560px" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background van image */}
      <Box
        component="img"
        src="/van-image.jpg"
        alt=""
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "100%", md: "70%" },
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
        }}
      />

      {/* Fade overlay — dark on left, transparent on right */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to right, #0f0f0f 0%, #0f0f0f 38%, #0f0f0f 48%, rgba(15,15,15,0.85) 58%, rgba(15,15,15,0.3) 72%, rgba(15,15,15,0.0) 85%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 12 },
          py: { xs: 6, md: 10 },
          maxWidth: 580,
        }}
      >
        {/* Eyebrow */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 2.5,
          }}
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
            Taylor, MI · Metro Detroit
          </Typography>
        </Box>

        {/* Headline */}
        <Typography
          component="h1"
          sx={{
            color: "#fff",
            fontSize: { xs: "36px", md: "52px" },
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1.06,
            letterSpacing: "-0.5px",
            fontFamily: "'Arial Black', Arial, sans-serif",
            mb: 2.5,
          }}
        >
          Your Family&apos;s{" "}
          <Box component="span" sx={{ color: BRAND_RED }}>
            Auto Glass
          </Box>
          {" &"}
          <br />
          Trim Experts
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            color: "#999",
            fontSize: "15px",
            lineHeight: 1.75,
            mb: 4,
            maxWidth: 420,
          }}
        >
          Family-owned and operated for 30+ years. Windshield repairs,
          replacements, convertible tops, and more — we come to you.
        </Typography>

        {/* Stats row */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 5,
            pt: 4,
            borderTop: "1px solid #222",
          }}
        >
          {[
            { num: "30+", label: "Years in Business" },
            { num: "20+", label: "Cities Served" },
            { num: "5★", label: "Customer Rated" },
          ].map((stat) => (
            <Box key={stat.label}>
              <Typography
                sx={{
                  color: BRAND_RED,
                  fontSize: "26px",
                  fontWeight: 700,
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </Typography>
              <Typography
                sx={{
                  color: "#666",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  mt: 0.5,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
