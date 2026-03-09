import React from "react";
import {
  Box, Container, Grid, Typography, Stack, Divider, IconButton
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchBar from "../EditComponent/Searchbar";
import PrimaryButton from "../EditComponent/Button";

const Footer = () => {
  return (
    <Box className="footer-wrapper">
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography className="footer-brand-name" variant="h6">
              Sitemark
            </Typography>
            <Typography className="footer-newsletter-title">
              Join the newsletter
            </Typography>
            <Typography className="footer-newsletter-desc">
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <Typography className="footer-newsletter-sub">
              Enter
            </Typography>

            <Stack className="footer-input-row" direction="row" spacing={0} alignItems="center"
             sx={{
                  gap: { xs: '16px', sm: 2 } 
                }}
              >
              <SearchBar width="60%" />
              <PrimaryButton />
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="flex-end" spacing={6}>
              <Grid item>
                <Typography className="footer-col-title">Product</Typography>
                <Stack spacing={1}>
                  <Typography className="footer-link">Features</Typography>
                  <Typography className="footer-link">Testimonials</Typography>
                  <Typography className="footer-link">Highlights</Typography>
                  <Typography className="footer-link">Pricing</Typography>
                  <Typography className="footer-link">FAQs</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography className="footer-col-title">Company</Typography>
                <Stack spacing={1}>
                  <Typography className="footer-link">About us</Typography>
                  <Typography className="footer-link">Careers</Typography>
                  <Typography className="footer-link">Press</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <Typography className="footer-col-title">Legal</Typography>
                <Stack spacing={1}>
                  <Typography className="footer-link">Terms</Typography>
                  <Typography className="footer-link">Privacy</Typography>
                  <Typography className="footer-link">Contact</Typography>
                </Stack>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
        <Divider className="footer-divider" />
        <Stack  className="footer-bottom" direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", sm: "center" }} spacing={2}>
          <Box className="footer-bottom-left">
            <Typography className="footer-bottom-link">
              Privacy Policy • Terms of Service
            </Typography>
            <Typography className="footer-bottom-link">
              Copyright © Sitemark 2026
            </Typography>
          </Box>
          <Stack className="footer-social-row" direction="row" spacing={1}>
            <IconButton className="footer-social-btn">
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton className="footer-social-btn">
              <XIcon fontSize="small" />
            </IconButton>
            <IconButton className="footer-social-btn">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>

        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;