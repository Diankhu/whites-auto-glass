"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
  "Farmington Hills",
  "Troy",
  "Westland",
  "Woodhaven",
  "And More",
];

export default function ContactSection() {
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#f5f5f5",
        py: { xs: 8, md: 14 },
        px: { xs: 3, md: 12 },
        overflow: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "35%",
          height: "50%",
          background:
            "radial-gradient(ellipse at bottom left, rgba(214,58,15,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* Section header */}
      <Box sx={{ mb: 8 }}>
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
            Get in Touch
          </Typography>
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
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: "#666",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: 480,
          }}
        >
          Ready to get your glass fixed? Give us a call or stop by — we&apos;re
          here Monday through Friday.
        </Typography>
      </Box>

      {/* Main content grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Left col — contact info cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Phone */}
          <Box
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: "4px",
              p: 3.5,
              display: "flex",
              gap: 2.5,
              alignItems: "flex-start",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8)",
              borderTop: `3px solid ${BRAND_RED}`,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <PhoneIcon sx={{ fontSize: 20, color: BRAND_RED }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#111",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 1,
                }}
              >
                Call Us
              </Typography>
              <Typography
                component="a"
                href="tel:7347831460"
                sx={{
                  color: BRAND_RED,
                  fontSize: "22px",
                  fontWeight: 700,
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  textDecoration: "none",
                  display: "block",
                  mb: 0.5,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                (734) 783-1460
              </Typography>
              <Typography
                component="a"
                href="tel:3132202622"
                sx={{
                  color: "#888",
                  fontSize: "16px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "block",
                  "&:hover": { color: BRAND_RED },
                }}
              >
                (313) 220-2622
              </Typography>
            </Box>
          </Box>

          {/* Hours */}
          <Box
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: "4px",
              p: 3.5,
              display: "flex",
              gap: 2.5,
              alignItems: "flex-start",
              borderTop: `3px solid ${BRAND_RED}`,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 20, color: BRAND_RED }} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#111",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 1.5,
                }}
              >
                Business Hours
              </Typography>
              {[
                {
                  day: "Monday – Friday",
                  hours: "9:00 AM – 5:30 PM",
                  open: true,
                },
                { day: "Saturday – Sunday", hours: "Closed", open: false },
              ].map((row) => (
                <Box
                  key={row.day}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    borderBottom: "1px solid #f0f0f0",
                    "&:last-child": { borderBottom: "none" },
                  }}
                >
                  <Typography sx={{ color: "#555", fontSize: "14px" }}>
                    {row.day}
                  </Typography>
                  <Typography
                    sx={{
                      color: row.open ? "#111" : "#bbb",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {row.hours}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Location */}
          <Box
            sx={{
              bgcolor: "#fff",
              border: "1px solid #e8e8e8",
              borderRadius: "4px",
              p: 3.5,
              display: "flex",
              gap: 2.5,
              alignItems: "flex-start",
              borderTop: `3px solid ${BRAND_RED}`,
            }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LocationOnIcon sx={{ fontSize: 20, color: BRAND_RED }} />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#111",
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  mb: 1,
                }}
              >
                Our Location
              </Typography>
              <Typography
                sx={{ color: "#555", fontSize: "15px", lineHeight: 1.7 }}
              >
                11310 Allen Rd
                <br />
                Taylor, MI 48180
              </Typography>
              <Button
                component="a"
                href="https://maps.google.com/?q=11310+Allen+Rd+Taylor+MI+48180"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 1.5,
                  color: BRAND_RED,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  p: 0,
                  minWidth: 0,
                  "&:hover": {
                    bgcolor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Get Directions →
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Right col — service areas */}
        <Box
          sx={{
            bgcolor: "#fff",
            border: "1px solid #e8e8e8",
            borderRadius: "4px",
            p: 4,
            borderTop: `3px solid ${BRAND_RED}`,
          }}
        >
          <Typography
            sx={{
              color: "#111",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              mb: 0.5,
            }}
          >
            Service Areas
          </Typography>
          <Typography sx={{ color: "#888", fontSize: "13px", mb: 3 }}>
            We serve the greater Metro Detroit area including:
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 0,
            }}
          >
            {SERVICE_AREAS.map((area, i) => (
              <Box
                key={area}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  py: 1,
                  borderBottom:
                    i < SERVICE_AREAS.length - 2 ? "1px solid #f5f5f5" : "none",
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    bgcolor: BRAND_RED,
                    borderRadius: "50%",
                    flexShrink: 0,
                  }}
                />
                <Typography sx={{ color: "#555", fontSize: "14px" }}>
                  {area}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              mt: 4,
              pt: 3,
              borderTop: "1px solid #f0f0f0",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ color: "#888", fontSize: "13px" }}>
              Not sure if we cover your area?
            </Typography>
            <Button
              component="a"
              href="tel:7347831460"
              sx={{
                bgcolor: BRAND_RED,
                color: "#fff",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                px: 3,
                py: 1.5,
                borderRadius: "2px",
                alignSelf: "flex-start",
                "&:hover": { bgcolor: "#bf3309" },
              }}
            >
              Give Us a Call
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
