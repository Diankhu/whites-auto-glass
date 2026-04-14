import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BRAND_RED = "#d63a0f";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mb: 4,
        flexWrap: "wrap",
      }}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Box
            key={item.label}
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            {item.href && !isLast ? (
              <Link href={item.href} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    color: "#888",
                    fontSize: "13px",
                    "&:hover": { color: BRAND_RED },
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            ) : (
              <Typography
                sx={{
                  color: isLast ? "#111" : "#888",
                  fontSize: "13px",
                  fontWeight: isLast ? 700 : 400,
                }}
              >
                {item.label}
              </Typography>
            )}
            {!isLast && (
              <ChevronRightIcon sx={{ fontSize: 14, color: "#ccc" }} />
            )}
          </Box>
        );
      })}
    </Box>
  );
}
