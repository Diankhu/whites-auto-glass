"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BRAND_RED = "#d63a0f";

const SERVICE_AREAS = [
  "Detroit",
  "Livonia",
  "Dearborn",
  "Southgate",
  "Taylor",
  "Belleville",
  "Royal Oak",
  "Flat Rock",
  "Trenton",
  "Wyandotte",
  "Auburn Hills",
  "Warren",
  "Romulus",
  "Allen Park",
  "Westland",
  "Farmington Hills",
  "Troy",
  "Riverview",
  "Woodhaven",
  "And More",
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#0f0f0f",
        borderTop: `3px solid ${BRAND_RED}`,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "40%",
          height: "60%",
          background:
            "radial-gradient(ellipse at top right, rgba(214,58,15,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 4, md: 12 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.4fr 0.7fr 2fr" },
          gap: { xs: 8, md: 10 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Col 1 — Brand + contact */}
        <Box>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 68,
                height: 68,
                borderRadius: "50%",
                overflow: "hidden",
                border: `2px solid ${BRAND_RED}`,
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="White's Auto Glass & Trim"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  lineHeight: 1.2,
                  fontFamily: "'Arial Black', Arial, sans-serif",
                }}
              >
                White&apos;s Auto Glass
              </Typography>
              <Typography
                sx={{
                  color: BRAND_RED,
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                }}
              >
                & Trim · Taylor, MI
              </Typography>
            </Box>
          </Link>

          <Typography
            sx={{
              color: "#666",
              fontSize: "14px",
              lineHeight: 1.9,
              mb: 4,
              maxWidth: 280,
            }}
          >
            Family-owned and operated for 30+ years. Serving Metro Detroit with
            honest, reliable auto glass service.
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <PhoneIcon
                sx={{
                  fontSize: 18,
                  color: BRAND_RED,
                  mt: "2px",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography
                  component="a"
                  href="tel:7347831460"
                  sx={{
                    color: "#ccc",
                    fontSize: "16px",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "block",
                    "&:hover": { color: BRAND_RED },
                  }}
                >
                  (734) 783-1460
                </Typography>
                <Typography
                  component="a"
                  href="tel:3132202622"
                  sx={{
                    color: "#555",
                    fontSize: "14px",
                    textDecoration: "none",
                    display: "block",
                    "&:hover": { color: BRAND_RED },
                  }}
                >
                  (313) 220-2622
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <LocationOnIcon
                sx={{
                  fontSize: 18,
                  color: BRAND_RED,
                  mt: "2px",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}
              >
                11310 Allen Rd
                <br />
                Taylor, MI 48180
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
              <AccessTimeIcon
                sx={{
                  fontSize: 18,
                  color: BRAND_RED,
                  mt: "2px",
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography sx={{ color: "#ccc", fontSize: "14px" }}>
                  Mon–Fri: 9:00 AM – 5:30 PM
                </Typography>
                <Typography sx={{ color: "#444", fontSize: "14px" }}>
                  Sat–Sun: Closed
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Col 2 — Nav links */}
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              mb: 3.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ width: 16, height: 2, bgcolor: BRAND_RED }} />
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: "#666",
                  fontSize: "15px",
                  textDecoration: "none",
                  py: 1,
                  borderBottom: "1px solid #161616",
                  transition: "color 0.2s, padding-left 0.2s",
                  "&:hover": { color: BRAND_RED, pl: 1 },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Col 3 — Service areas */}
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              mb: 3.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box sx={{ width: 16, height: 2, bgcolor: BRAND_RED }} />
            Service Areas
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              rowGap: "14px",
              columnGap: "8px",
            }}
          >
            {SERVICE_AREAS.map((area) => (
              <Typography
                key={area}
                sx={{
                  color: area === "And More" ? BRAND_RED : "#666",
                  fontSize: "14px",
                  fontWeight: area === "And More" ? 700 : 400,
                  "&:hover": { color: "#ccc" },
                  cursor: "default",
                }}
              >
                {area}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom bar */}
      <Box
        sx={{
          px: { xs: 4, md: 12 },
          py: 3,
          borderTop: "1px solid #1a1a1a",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography sx={{ color: "#333", fontSize: "13px" }}>
          © {new Date().getFullYear()} White&apos;s Auto Glass & Trim. All
          rights reserved.
        </Typography>
        <Typography sx={{ color: "#333", fontSize: "13px" }}>
          Taylor, MI · Metro Detroit&apos;s Auto Glass Experts
        </Typography>
      </Box>
    </Box>
  );
}
