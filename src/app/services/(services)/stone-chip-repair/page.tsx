import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import PhoneIcon from "@mui/icons-material/Phone";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "Stone Chip Repair | White's Auto Glass & Trim",
  description:
    "Fast stone chip repair in Taylor, MI. Stop chips before they spread into cracks. Mobile service available throughout Metro Detroit. Call (734) 783-1460.",
  keywords: [
    "stone chip repair Taylor MI",
    "rock chip repair Metro Detroit",
    "windshield chip repair Michigan",
    "auto glass chip repair Detroit",
  ],
  openGraph: {
    title: "Stone Chip Repair | White's Auto Glass & Trim",
    description:
      "Fast stone chip repair in Taylor, MI. Stop chips before they spread.",
    url: "https://whitesautoglass.com/services/stone-chip-repair",
    siteName: "White's Auto Glass & Trim",
    type: "website",
  },
};

const INCLUDES = [
  "Repair of chips, bullseyes, and star breaks",
  "Professional resin injection for lasting results",
  "Prevents chips from spreading into full cracks",
  "Restores optical clarity to the repair area",
  "Mobile service available — we come to you",
  "All work backed by our satisfaction guarantee",
];

export default function StoneChipRepairPage() {
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
        {/* Breadcrumb sits here, above everything else */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Stone Chip Repair" },
          ]}
        />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1.6fr" },
            gap: { xs: 6, md: 12 },
            mb: { xs: 8, md: 12 },
          }}
        >
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
                Our Services
              </Typography>
            </Box>
            <Typography
              component="h1"
              sx={{
                color: "#111",
                fontSize: { xs: "36px", md: "52px" },
                fontWeight: 700,
                textTransform: "uppercase",
                fontFamily: "'Arial Black', Arial, sans-serif",
                lineHeight: 1.04,
                letterSpacing: "-0.5px",
                mb: 3,
              }}
            >
              Stone Chip{" "}
              <Box component="span" sx={{ color: BRAND_RED }}>
                Repair
              </Box>
            </Typography>
            <Typography
              sx={{ color: "#666", fontSize: "15px", lineHeight: 1.8, mb: 5 }}
            >
              Serving Metro Detroit from our shop in Taylor, MI.
            </Typography>
            <Box
              sx={{ width: "100%", height: "1px", bgcolor: "#e8e8e8", mb: 4 }}
            />
            <Typography
              sx={{
                color: "#999",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Give us a call
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 280,
              }}
            >
              <Button
                component="a"
                href="tel:7347831460"
                startIcon={<PhoneIcon />}
                sx={{
                  bgcolor: BRAND_RED,
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  px: 3,
                  py: 1.75,
                  borderRadius: "2px",
                  "&:hover": { bgcolor: "#bf3309" },
                }}
              >
                (734) 783-1460
              </Button>
              <Button
                component="a"
                href="tel:3132202622"
                sx={{
                  bgcolor: "transparent",
                  color: "#666",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  px: 3,
                  py: 1.75,
                  borderRadius: "2px",
                  border: "1px solid #ddd",
                  "&:hover": {
                    borderColor: BRAND_RED,
                    color: BRAND_RED,
                    bgcolor: "transparent",
                  },
                }}
              >
                (313) 220-2622
              </Button>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ color: "#444", fontSize: "16px", lineHeight: 2, mb: 3 }}
            >
              Driving on Michigan roads means stone chips are practically
              inevitable. A small chip from a piece of road debris might seem
              harmless at first, but it only takes one cold night or a hard bump
              to turn that chip into a crack that runs across your entire
              windshield.
            </Typography>
            <Typography
              sx={{ color: "#444", fontSize: "16px", lineHeight: 2, mb: 3 }}
            >
              The good news is that most chips can be repaired quickly and
              affordably. At White&apos;s Auto Glass &amp; Trim, we inject
              professional-grade resin into the damage to seal it, restore
              clarity, and stop it from spreading. Most repairs take less than
              30 minutes.
            </Typography>
            <Typography sx={{ color: "#444", fontSize: "16px", lineHeight: 2 }}>
              The sooner you get a chip repaired, the better the result. If you
              are not sure whether your damage qualifies for a repair, give us a
              call — we will be straight with you about what is possible.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "1px",
            bgcolor: "#e0e0e0",
            mb: { xs: 6, md: 8 },
          }}
        />
        <Box
          sx={{
            bgcolor: "#fff",
            borderRadius: "4px",
            borderTop: `3px solid ${BRAND_RED}`,
            border: "1px solid #e8e8e8",
            p: { xs: 5, md: 8 },
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              color: "#111",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              mb: 4,
            }}
          >
            What&apos;s Included
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 3,
            }}
          >
            {INCLUDES.map((item) => (
              <Box
                key={item}
                sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
              >
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: BRAND_RED,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: "2px",
                  }}
                >
                  <CheckIcon sx={{ fontSize: 14, color: "#fff" }} />
                </Box>
                <Typography
                  sx={{ color: "#555", fontSize: "15px", lineHeight: 1.75 }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
