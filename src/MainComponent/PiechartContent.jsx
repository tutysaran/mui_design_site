import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchBar from '../EditComponent/Searchbar'
import PrimaryButton from '../EditComponent/Button'

const PiechartContent = () => {
  return (
    <>
      <Box className="piechart-wrapper">

        <Typography className="piechart-heading" variant="h2" align="center">
          Our last <span className="piechart-heading-highlight">products</span>
        </Typography>

        <Typography className="piechart-subheading" variant="body1" align="center">
          Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your needs. <br />
          Elevate your experience with top-tier features and services.
        </Typography>

        <Stack className="piechart-action-row" direction="row" spacing={0} justifyContent="center" alignItems="center"
          sx={{
            gap: { xs: '16px', sm: 2 } 
          }}
        >
          <SearchBar width="20%" />
          <PrimaryButton />
        </Stack>

        <Typography className="piechart-terms" variant="body1" align="center">
          By clicking "Start now" you agree to our{' '}
          <a href="#" className="piechart-terms-link">Terms & Conditions.</a>
        </Typography>


      </Box>
    </>
  )
}

export default PiechartContent