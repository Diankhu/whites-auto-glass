import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ChairIcon from "@mui/icons-material/Chair";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "Services | White's Auto Glass & Trim",
  description:
    "White's Auto Glass & Trim offers windshield replacement, windshield repair, back glass replacement, convertible top replacement, seat upholstery repair, water leak repair, and mobile service throughout Metro Detroit.",
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
    description:
      "Full OEM-quality windshield replacement for all makes and models. We source high-quality glass and ensure a clean, professional install every time.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Windshield Repair",
    description:
      "Got a chip or crack? We can repair most damage before it spreads — restoring clarity and structural integrity, often in under an hour.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Back Glass Replacement",
    description:
      "Rear window replacement for all vehicles including heated rear glass. We handle everything from small cars to trucks and SUVs.",
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Stone Chip Repair",
    description:
      "Using advanced resins and proven techniques, we stop chips from becoming cracks and restore the look of your windshield.",
  },
  {
    icon: <ChairIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Seat Upholstery Repair",
    description:
      "Restore torn, burned, or worn seats back to like-new condition. We work with a range of materials to match your vehicle's interior.",
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Water Leak Repair",
    description:
      "We diagnose and seal water intrusion from windows, sunroofs, and door seals. We stand behind our work — if the leak persists, we fix it at no extra cost.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Convertible Top Replacement",
    description:
      "Full fabric and vinyl convertible top replacement and repair for all makes. Restore your convertible's look, function, and weather protection.",
  },
  {
    icon: <VolumeOffIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Cabin Noise & Rattle Repair",
    description:
      "Distracting rattles and squeaks coming from your interior? We track down the source and eliminate it for good.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 32, color: BRAND_RED }} />,
    title: "Mobile Service",
    description:
      "Can't make it to our shop? We come to you. Our mobile team handles most repairs and replacements at your home, office, or wherever is convenient.",
    highlight: true,
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
            White&apos;s Auto Glass & Trim handles it all. Family-owned, honest
            pricing, and mobile service available throughout Metro Detroit.
          </Typography>
        </Box>
      </Box>

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
            <Box
              key={service.title}
              sx={{
                bgcolor: service.highlight ? "#fff5f2" : "#fff",
                border: service.highlight
                  ? `2px solid ${BRAND_RED}`
                  : "1px solid #e8e8e8",
                borderRadius: "4px",
                borderTop: `3px solid ${BRAND_RED}`,
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                },
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  bgcolor: service.highlight ? "#fde8e2" : "#f5f5f5",
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
                  color: service.highlight ? BRAND_RED : "#111",
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
          ))}
        </Box>
      </Box>
    </Box>
  );
}
