"use client";

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const BRAND_RED = "#d63a0f";
const NAV_BG = "#0f0f0f";
const NAV_HEIGHT = 90;

export default function Navbar() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (drawerOpen) setDrawerOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: NAV_BG,
        borderBottom: scrolled ? `2px solid ${BRAND_RED}` : "2px solid #1a1a1a",
        transition: "border-color 0.3s ease",
        height: NAV_HEIGHT,
        justifyContent: "center",
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          px: { xs: 3, md: 6 },
          height: NAV_HEIGHT,
          minHeight: `${NAV_HEIGHT}px !important`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          {/* Circular logo container */}
          <Box
            sx={{
              position: "relative",
              width: 76,
              height: 76,
              flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              border: `2px solid ${BRAND_RED}`,
            }}
          >
            <Image
              src="/logo.png"
              alt="White's Auto Glass & Trim"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Company name */}
          <Box>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "22px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                lineHeight: 1.15,
                fontFamily: "'Arial Black', Arial, sans-serif",
              }}
            >
              White&apos;s Auto Glass
            </Typography>
            <Typography
              sx={{
                color: BRAND_RED,
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                lineHeight: 1.5,
              }}
            >
              & Trim · Taylor, MI
            </Typography>
          </Box>
        </Link>

        {/* Desktop links */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  disableRipple
                  sx={{
                    color: isActive ? BRAND_RED : "#aaa",
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    px: 2.5,
                    py: 1,
                    borderRadius: 0,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      bgcolor: BRAND_RED,
                      transition: "width 0.22s ease",
                    },
                    "&:hover": {
                      color: "#fff",
                      bgcolor: "transparent",
                      "&::after": { width: "100%" },
                    },
                  }}
                >
                  {link.label}
                </Button>
              );
            })}

            <Box sx={{ width: "1px", height: 28, bgcolor: "#2a2a2a", mx: 2 }} />

            <Button
              component="a"
              href="tel:7347831460"
              startIcon={<PhoneIcon sx={{ fontSize: "16px !important" }} />}
              sx={{
                color: "#aaa",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "none",
                whiteSpace: "nowrap",
                px: 1.5,
                "&:hover": { color: "#fff", bgcolor: "transparent" },
              }}
            >
              (734) 783-1460
            </Button>
          </Box>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{ color: "#fff", p: 1 }}
            aria-label="Open menu"
          >
            <MenuIcon sx={{ fontSize: 28 }} />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          paper: {
            sx: {
              bgcolor: NAV_BG,
              width: 280,
              borderLeft: `2px solid ${BRAND_RED}`,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            borderBottom: "1px solid #1e1e1e",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Menu
          </Typography>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "#888", p: 0.5 }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        <List disablePadding sx={{ mt: 1 }}>
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={link.href}
                  sx={{
                    px: 3,
                    py: 1.75,
                    borderLeft: isActive
                      ? `3px solid ${BRAND_RED}`
                      : "3px solid transparent",
                    "&:hover": { bgcolor: "#1a1a1a" },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: {
                        sx: {
                          color: isActive ? BRAND_RED : "#ccc",
                          fontSize: "13px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider sx={{ borderColor: "#1e1e1e", my: 2 }} />

        <Box sx={{ px: 3 }}>
          <Button
            component="a"
            href="tel:7347831460"
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{
              color: "#bbb",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "none",
              justifyContent: "flex-start",
              px: 0,
              "&:hover": { color: "#fff", bgcolor: "transparent" },
            }}
          >
            (734) 783-1460
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
}
