import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BuildIcon from "@mui/icons-material/Build";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ChairIcon from "@mui/icons-material/Chair";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShieldIcon from "@mui/icons-material/Shield";
import StarIcon from "@mui/icons-material/Star";

const BRAND_RED = "#d63a0f";

const SERVICES = [
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Windshield Replacement",
    description: "Full OEM-quality replacement for all makes and models.",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Windshield Repair",
    description:
      "Fast chip and crack repairs before they spread — often under an hour.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Back Glass Replacement",
    description: "Rear window replacement including heated rear glass.",
  },
  {
    icon: <ChairIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Seat Upholstery Repair",
    description:
      "Restore torn, burned, or worn seats back to like-new condition.",
  },
  {
    icon: <WaterDropIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Water Leak Repair",
    description:
      "We find and seal leaks from windows, sunroofs, and door seals — and stand by our work.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Convertible Top Replacement",
    description:
      "Full fabric and vinyl convertible top replacement and repair.",
  },
  {
    icon: <VolumeOffIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Cabin Noise & Rattle Repair",
    description:
      "We track down and eliminate rattles, squeaks, and interior noises for good.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 28, color: BRAND_RED }} />,
    title: "Mobile Service",
    description:
      "Can't come to us? We come to you — at your home, office, or wherever is convenient.",
    highlight: true,
  },
];

const TRUST_BADGES = [
  {
    icon: <ShieldIcon sx={{ fontSize: 18, color: BRAND_RED }} />,
    label: "Fully Insured",
  },
  {
    icon: <StarIcon sx={{ fontSize: 18, color: BRAND_RED }} />,
    label: "5-Star Rated",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 18, color: BRAND_RED }} />,
    label: "Mobile Service",
  },
  {
    icon: <BuildIcon sx={{ fontSize: 18, color: BRAND_RED }} />,
    label: "30+ Years Experience",
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 18, color: BRAND_RED }} />,
    label: "Family Owned",
  },
];

export default function ServicesSection() {
  return (
    <Box
      sx={{ bgcolor: "#f5f5f5", py: { xs: 8, md: 12 }, px: { xs: 3, md: 12 } }}
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
            What we offer
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
            mb: 2,
          }}
        >
          Everything You Need
          <br />
          for Your Vehicle
        </Typography>

        <Typography
          sx={{
            color: "#666",
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: 520,
            mx: "auto",
            mb: 4,
          }}
        >
          One call. One family-owned company. Every detail handled — from a
          simple chip repair to a full convertible top replacement.
        </Typography>

        {/* Trust badge chips */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 1.5,
          }}
        >
          {TRUST_BADGES.map((badge) => (
            <Box
              key={badge.label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "999px",
                px: 2,
                py: 0.75,
              }}
            >
              {badge.icon}
              <Typography
                sx={{
                  color: "#111",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                }}
              >
                {badge.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Service cards — CSS grid, 4 cols desktop, 2 tablet, 1 mobile */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 2,
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
              p: 3.5,
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              transition: "border-color 0.2s, transform 0.2s",
              "&:hover": {
                borderColor: BRAND_RED,
                transform: "translateY(-2px)",
              },
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
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
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{ color: "#888", fontSize: "13px", lineHeight: 1.7 }}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
