import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const FeedbackAns = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <Container maxWidth="md" sx={{ py: 6 }}>
      
      <Typography variant="h5"align="center"sx={{ fontWeight: 600, mb: 4 }}>
        Frequently asked questions
      </Typography>

      <Box sx={{ 
        '& .MuiAccordion-root': { margin: 0, 
        '&:before': {display: 'none',},
        '&.Mui-expanded': {margin: 0,},},
        '& .MuiAccordion-root:not(:last-child)': {borderBottom: '1px solid #e0e0e0',}
      }}>
        <Accordion expanded={expanded === "panel1"}onChange={handleChange("panel1")}disableGutters square >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>
              How do I contact customer support if I have a question or issue?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              You can reach our customer support team by emailing 
              <strong> support@email.com </strong>
              or calling our toll-free number.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel2"}onChange={handleChange("panel2")}disableGutters square>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>
              Can I return the product if it doesn't meet my expectations?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Yes, returns are accepted within 30 days.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "panel3"}onChange={handleChange("panel3")}disableGutters square>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>
              What makes your product stand out from others in the market?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              High quality, innovation, and strong support.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expanded === "panel4"} onChange={handleChange("panel4")} disableGutters square>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography fontWeight={500}>
              Is there a warranty on the product?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Yes, one-year warranty covering manufacturing defects.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Box>
    </Container>
    </>
  );
};

export default FeedbackAns;