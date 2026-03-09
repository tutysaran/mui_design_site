import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  IconButton,
  Drawer,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "Features",
    "Testimonials",
    "Highlights",
    "Pricing",
    "FAQ",
    "Blog",
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "transparent",
          pt: 2,
        }}
      >
        <Container maxWidth="lg">
          {/* Floating Rounded Bar */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(12px)",
              borderRadius: "20px",
              px: 3,
              py: 0.8,
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                justifyContent: "space-between",
                minHeight: "44px !important",
              }}
            >
              {/* Logo */}
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Sitemark
              </Typography>

              {/* Desktop Menu */}
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#1e293b",
                      fontWeight: 500,
                      textTransform: "none",
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </Stack>
              <Stack direction="row"spacing={2} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
                <Button sx={{ textTransform: "none", color: "#1e293b" }}>
                  Sign in
                </Button>

                <Button
                  variant="contained"
                  sx={{ textTransform: "none",borderRadius: "12px", px: 2.5, background: "#0f172a",
                    "&:hover": {background: "#000",},}} >
                  Sign up
                </Button>
              </Stack>

              <IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={() => setOpen(true)} >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Box>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 3 }}>
          <Stack spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => setOpen(false)}
                sx={{ justifyContent: "flex-start", textTransform: "none" }}
              >
                {item}
              </Button>
            ))}
            <Button sx={{ justifyContent: "flex-start" }}>Sign in</Button>
            <Button variant="contained" sx={{ borderRadius: "10px" }}>
              Sign up
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
