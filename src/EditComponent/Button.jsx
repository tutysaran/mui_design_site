import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({
  children = "Start Now",
  onClick,
  fullWidth = false,
  sx = {},
  ...props
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      fullWidth={fullWidth}
      {...props}
      sx={{
        textTransform: "none",
        borderRadius: "12px",
        px: 3,
        py: 0.8,
        fontWeight: 600,
        backgroundColor: "#0f172a",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#000",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)"
        },
        ...sx
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;