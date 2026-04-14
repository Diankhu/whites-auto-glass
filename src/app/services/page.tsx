import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ChairIcon from "@mui/icons-material/Chair";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Link from "next/link";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "Services | White's Auto Glass & Trim",
  description:
    "White's Auto Glass & Trim offers windshield replacement, windshield repair, back glass replacement, convertible top replacement, seat upholstery repair, water leak repair, and more throughout Metro Detroit.",
  keywords: [
    "windshield replacement Taylor MI",
    "windshield repair Metro Detroit",
    "auto glass repair Taylor MI",
    "convertible top replacement Michigan",
    "mobile windshield replacement Detroit",
    "back glass replacement Michigan",
    "seat upholstery repair Taylor MI",
    "water leak repair auto glass",
  ],
  openGraph: {
    title: "Services | White's Auto Glass & Trim",
    description:
      "Family-owned auto glass repair and replacement serving Metro Detroit for 30+ years. Mobile service available.",
    url: "https://whitesautoglass.com/services",
    siteName: "White's Auto Glass & Trim",
    type: "website",
  },
};

const SERVICES = [
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Windshield Replacement",
    description: "Full OEM-quality replacement for all makes and models.",
    href: "/services/windshield-replacement",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Back Glass Replacement",
    description: "Rear window replacement including heated rear glass.",
    href: "/services/back-glass-replacement",
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Stone Chip Repair",
    description:
      "Using advanced resins and proven techniques, we stop chips from becoming cracks.",
    href: "/services/stone-chip-repair",
  },
  {
    icon: <ChairIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Seat Upholstery Repair",
    description:
      "Restore torn, burned, or worn seats back to like-new condition.",
    href: "/services/seat-upholstery-repair",
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Water Leak Repair",
    description:
      "We find and seal leaks from windows, sunroofs, and door seals — and stand by our work.",
    href: "/services/water-leak-repair",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Convertible Top Replacement",
    description:
      "Full fabric and vinyl convertible top replacement and repair.",
    href: "/services/convertible-top-replacement",
  },
  {
    icon: <VolumeOffIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Cabin Noise & Rattle Repair",
    description:
      "We track down and eliminate rattles, squeaks, and interior noises for good.",
    href: "/services/cabin-noise-rattle-repair",
  },
];

export default function ServicesPage() {
  return (
    <Box>
      {/* Hero banner */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#0f0f0f",
          px: { xs: 4, md: 12 },
          py: { xs: 10, md: 16 },
          overflow: "hidden",
          borderBottom: `3px solid ${BRAND_RED}`,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            background:
              "radial-gradient(ellipse at top right, rgba(214,58,15,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1, maxWidth: 700 }}>
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
              What We Offer
            </Typography>
          </Box>

          <Typography
            component="h1"
            sx={{
              color: "#fff",
              fontSize: { xs: "40px", md: "64px" },
              fontWeight: 700,
              textTransform: "uppercase",
              fontFamily: "'Arial Black', Arial, sans-serif",
              lineHeight: 1.04,
              letterSpacing: "-0.5px",
              mb: 3,
            }}
          >
            Our{" "}
            <Box component="span" sx={{ color: BRAND_RED }}>
              Services
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "#888",
              fontSize: "16px",
              lineHeight: 1.8,
              maxWidth: 520,
            }}
          >
            From a quick chip repair to a full convertible top replacement —
            White&apos;s Auto Glass &amp; Trim handles it all. Family-owned,
            honest pricing, and mobile service available throughout Metro
            Detroit.
          </Typography>
        </Box>
      </Box>
      {/* Breadcrumb sits here, above everything else */}
      {/* Services grid */}
      <Box
        sx={{
          bgcolor: "#f5f5f5",
          px: { xs: 4, md: 12 },
          py: { xs: 8, md: 12 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: 3,
          }}
        >
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  border: "1px solid #e8e8e8",
                  borderRadius: "4px",
                  borderTop: `3px solid ${BRAND_RED}`,
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  height: "100%",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    borderColor: BRAND_RED,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    bgcolor: "#f5f5f5",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  sx={{
                    color: "#111",
                    fontSize: "15px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    fontFamily: "'Arial Black', Arial, sans-serif",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  sx={{ color: "#777", fontSize: "14px", lineHeight: 1.75 }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
