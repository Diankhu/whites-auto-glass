"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Script from "next/script";

const BRAND_RED = "#d63a0f";

export default function TestimonialsSection() {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        pt: { xs: 8, md: 10 },
        pb: { xs: 6, md: 10 },
        px: { xs: 3, md: 12 },
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            mb: 2,
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
            What Our Customers Say
          </Typography>
          <Box sx={{ width: 28, height: 2, bgcolor: BRAND_RED }} />
        </Box>

        <Typography
          component="h2"
          sx={{
            color: "#111",
            fontSize: { xs: "32px", md: "46px" },
            fontWeight: 700,
            textTransform: "uppercase",
            fontFamily: "'Arial Black', Arial, sans-serif",
            lineHeight: 1.06,
            letterSpacing: "-0.5px",
            mb: 1,
          }}
        >
          Don&apos;t Take Our Word For It
        </Typography>

        <Typography sx={{ color: "#888", fontSize: "15px" }}>
          4.8 stars · 395+ Google Reviews
        </Typography>
      </Box>

      {/* Elevated widget container */}
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          bgcolor: "#fff",
          borderRadius: "6px",
          border: "1px solid #e8e8e8",
          borderTop: `3px solid ${BRAND_RED}`,
          p: { xs: 3, md: 4 },
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        }}
      >
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
        <div
          className="elfsight-app-957768cb-57de-4252-81fb-c8aefbceaceb"
          data-elfsight-app-lazy
        />
      </Box>
    </Box>
  );
}
