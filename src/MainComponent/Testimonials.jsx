import React from "react";
import { Typography, Box, Avatar, Card, CardContent } from "@mui/material";
import testimonialsData from "./Testimonialsdata.json";

const CompanyLogo = ({ name }) => (
  <Typography className="testimonial-company-logo" variant="body2">
    {name}
  </Typography>
);

export default function Testimonials() {
  return (
    <Box className="testimonials-fullbleed">
      <Box className="testimonials-inner">
        <Typography className="testimonials-title" variant="h4" align="center">
          {testimonialsData.title}
        </Typography>

        <Typography className="testimonials-subtitle" variant="body1" align="center">
          <span className="testimonials-subtitle-line">{testimonialsData.subtitle1}</span>
          <span className="testimonials-subtitle-line">{testimonialsData.subtitle2}</span>
        </Typography>
        <Box className="testimonials-grid">
          {testimonialsData.testimonials.map((t) => (
            <Card key={t.id} className="testimonial-card" variant="outlined">
              <CardContent className="testimonial-card-content">
                <Typography className="testimonial-review-text" variant="body2">
                  {t.text}
                </Typography>
                <Box className="testimonial-divider" />
                <Box className="testimonial-footer">
                  <Box className="testimonial-author">
                    <Avatar
                      className="testimonial-avatar"
                      src={t.avatar}
                      alt={t.name}
                    />
                    <Box className="testimonial-author-info">
                      <Typography className="testimonial-author-name">
                        {t.name}
                      </Typography>
                      <Typography className="testimonial-author-role">
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                  <CompanyLogo name={t.company} />
                </Box>

              </CardContent>
            </Card>
          ))}
        </Box>

      </Box>
    </Box>
  );
}