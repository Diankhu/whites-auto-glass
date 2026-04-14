import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "Contact Us | White's Auto Glass & Trim",
  description:
    "Contact White's Auto Glass & Trim in Taylor, MI. Call us at (734) 783-1460. Serving Metro Detroit for 30+ years with honest, reliable auto glass service.",
  keywords: [
    "contact White's Auto Glass",
    "auto glass Taylor MI phone number",
    "windshield repair Metro Detroit contact",
    "White's Auto Glass address",
  ],
  openGraph: {
    title: "Contact Us | White's Auto Glass & Trim",
    description:
      "Call or visit White's Auto Glass & Trim at 11310 Allen Rd, Taylor MI. Mon–Fri 9AM–5:30PM.",
    url: "https://whitesautoglass.com/contact",
    siteName: "White's Auto Glass & Trim",
    type: "website",
  },
};

const HOURS = [
  { day: "Monday", hours: "9:00 AM – 5:30 PM", open: true },
  { day: "Tuesday", hours: "9:00 AM – 5:30 PM", open: true },
  { day: "Wednesday", hours: "9:00 AM – 5:30 PM", open: true },
  { day: "Thursday", hours: "9:00 AM – 5:30 PM", open: true },
  { day: "Friday", hours: "9:00 AM – 5:30 PM", open: true },
  { day: "Saturday", hours: "Closed", open: false },
  { day: "Sunday", hours: "Closed", open: false },
];

export default function ContactPage() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Box
        sx={{
          px: { xs: 4, md: 12 },
          py: { xs: 8, md: 14 },
          maxWidth: 1400,
          mx: "auto",
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
            component="h1"
            sx={{
              color: "#111",
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'Arial Black', Arial, sans-serif",
              lineHeight: 1.04,
              letterSpacing: "-0.5px",
              mb: 2,
            }}
          >
            Contact{" "}
            <Box component="span" sx={{ color: BRAND_RED }}>
              Us
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: 480,
            }}
          >
            Ready to get your glass fixed? Give us a call or stop by the shop.
            We are here Monday through Friday and happy to help.
          </Typography>
        </Box>

        {/* Three cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: 4,
          }}
        >
          {/* Phone */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "4px",
              borderTop: `3px solid ${BRAND_RED}`,
              border: "1px solid #e8e8e8",
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PhoneIcon sx={{ fontSize: 24, color: BRAND_RED }} />
            </Box>

            <Typography
              sx={{
                color: "#111",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Call Us
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                component="a"
                href="tel:7347831460"
                sx={{
                  color: BRAND_RED,
                  fontSize: "26px",
                  fontWeight: 700,
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  textDecoration: "none",
                  display: "block",
                  lineHeight: 1.2,
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
                  fontSize: "18px",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "block",
                  "&:hover": { color: BRAND_RED },
                }}
              >
                (313) 220-2622
              </Typography>
            </Box>

            <Typography
              sx={{ color: "#999", fontSize: "13px", lineHeight: 1.7 }}
            >
              Give us a call and we will get you scheduled. Most repairs can be
              done same day or next day.
            </Typography>
          </Box>

          {/* Location */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "4px",
              borderTop: `3px solid ${BRAND_RED}`,
              border: "1px solid #e8e8e8",
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 24, color: BRAND_RED }} />
            </Box>

            <Typography
              sx={{
                color: "#111",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Our Location
            </Typography>

            <Box>
              <Typography
                sx={{
                  color: "#111",
                  fontSize: "22px",
                  fontWeight: 700,
                  fontFamily: "'Arial Black', Arial, sans-serif",
                  lineHeight: 1.2,
                }}
              >
                11310 Allen Rd
              </Typography>
              <Typography
                sx={{ color: "#888", fontSize: "18px", fontWeight: 700 }}
              >
                Taylor, MI 48180
              </Typography>
            </Box>

            <Typography
              component="a"
              href="https://maps.google.com/?q=11310+Allen+Rd+Taylor+MI+48180"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: BRAND_RED,
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Get Directions →
            </Typography>
          </Box>

          {/* Hours */}
          <Box
            sx={{
              bgcolor: "#fff",
              borderRadius: "4px",
              borderTop: `3px solid ${BRAND_RED}`,
              border: "1px solid #e8e8e8",
              p: 4,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 52,
                height: 52,
                bgcolor: "#fff0ec",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AccessTimeIcon sx={{ fontSize: 24, color: BRAND_RED }} />
            </Box>

            <Typography
              sx={{
                color: "#111",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Business Hours
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {HOURS.map((row, i) => (
                <Box
                  key={row.day}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1,
                    borderBottom:
                      i < HOURS.length - 1 ? "1px solid #f5f5f5" : "none",
                  }}
                >
                  <Typography
                    sx={{ color: row.open ? "#444" : "#bbb", fontSize: "14px" }}
                  >
                    {row.day}
                  </Typography>
                  <Typography
                    sx={{
                      color: row.open ? "#111" : "#bbb",
                      fontSize: "14px",
                      fontWeight: row.open ? 700 : 400,
                    }}
                  >
                    {row.hours}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
