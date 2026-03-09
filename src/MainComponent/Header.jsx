import React from 'react'
import { Box, Typography, Stack, Button, IconButton } from '@mui/material';
import DropdownButton from '../EditComponent/SelectComponent';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LightModeIcon from '@mui/icons-material/LightMode';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const Header = () => {
  return (
    <Box className="header-wrapper">
      <Stack className="header-container" direction="row" justifyContent="space-between" alignItems="center">

        {/* Left Section */}
        <Stack className="header-left" direction="row" alignItems="center" spacing={1}>
          <ArrowBackIcon className="header-back-icon" fontSize="small" />
          <Button
            className="header-back-btn"
            size="small"
            variant="text"
            sx={{ display: { xs: "none", sm: "inline-flex" } }}
          >
            Back To Template
          </Button>
        </Stack>

        {/* Right Section */}
        <Stack className="header-right" direction="row" alignItems="center" spacing={1}>

          {/* Desktop Dropdown */}
          <Box className="header-dropdown-desktop" sx={{ display: { xs: "none", sm: "block" } }}>
            <DropdownButton />
          </Box>

          {/* Mobile Color Button */}
          <Box className="header-color-mobile" sx={{ display: { xs: "block", sm: "none" } }}>
            <Button className="header-color-btn">
              <ColorLensIcon className="header-color-icon" />
            </Button>
          </Box>

          {/* Theme Toggle Button */}
          <IconButton className="header-theme-toggle">
            <LightModeIcon className="header-theme-icon" fontSize="small" />
          </IconButton>

        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;