import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import PhoneIcon from "@mui/icons-material/Phone";
import Breadcrumbs from "@/app/components/Breadcrumbs";

const BRAND_RED = "#d63a0f";

export const metadata: Metadata = {
  title: "Convertible Top Replacement | White's Auto Glass & Trim",
  description:
    "Professional convertible top replacement and repair in Taylor, MI. Fabric and vinyl tops for all makes and models. Call (734) 783-1460.",
  keywords: [
    "convertible top replacement Taylor MI",
    "convertible roof repair Metro Detroit",
    "fabric convertible top Michigan",
    "vinyl convertible top replacement Detroit",
  ],
  openGraph: {
    title: "Convertible Top Replacement | White's Auto Glass & Trim",
    description:
      "Professional convertible top replacement and repair in Taylor, MI.",
    url: "https://whitesautoglass.com/services/convertible-top-replacement",
    siteName: "White's Auto Glass & Trim",
    type: "website",
  },
};

const INCLUDES = [
  "Fabric and vinyl convertible top replacement",
  "All makes and models accepted",
  "Full removal of old top and hardware inspection",
  "Professional fitting and weatherproofing",
  "Repair of tears, leaks, and worn sections",
  "All work backed by our satisfaction guarantee",
];

export default function ConvertibleTopReplacementPage() {
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
            { label: "Convertible Top Replacement" },
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
              Convertible Top{" "}
              <Box component="span" sx={{ color: BRAND_RED }}>
                Replacement
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
              A worn or damaged convertible top does not just hurt the look of
              your vehicle — it can leak, let in wind noise, and leave your
              interior exposed to the elements. Michigan weather is tough on
              convertible tops, and over time even well-maintained tops will
              need to be replaced.
            </Typography>
            <Typography
              sx={{ color: "#444", fontSize: "16px", lineHeight: 2, mb: 3 }}
            >
              At White&apos;s Auto Glass &amp; Trim, convertible top replacement
              is one of our specialties. We work with both fabric and vinyl tops
              across all makes and models. We take care of everything from
              removing the old top and inspecting the hardware to fitting and
              weatherproofing the new one.
            </Typography>
            <Typography sx={{ color: "#444", fontSize: "16px", lineHeight: 2 }}>
              If your top has a tear or a small leak but does not need a full
              replacement, we can repair that too. Give us a call and we will
              assess what your car needs and give you an honest quote.
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
