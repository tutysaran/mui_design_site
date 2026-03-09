import React from 'react'
import { Container,Typography ,Box } from '@mui/material'
import Dashboard from '../assets/images/dashboard1.jpg'
import Brandicon from '../assets/images/brandicon.jpg'
const BrandContent = () => {
  return (
    <>
     <Container sx={{bgcolor:"white",mt:5,mb:5}}> <img src={Dashboard} alt="Dashboard Image" style={{ width: "100%", height: "400px", objectFit: "cover", marginTop: "20px" }} />
     <Typography variant='h6' align='center' sx={{ fontWeight: "500",fontFamily:"sans-serif",pt: 4}}>
        Trusted By The Best Company</Typography>
        <Box direction="row" display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" mt={4}>
        <img src={Brandicon} alt="Brand Icon" style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }} />
        <img src={Brandicon} alt="Brand Icon" style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }} />
        <img src={Brandicon} alt="Brand Icon" style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }} />
        <img src={Brandicon} alt="Brand Icon" style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }} />
        <img src={Brandicon} alt="Brand Icon" style={{ width: "100px", height: "100px", margin: "20px auto", display: "block" }} />
    </Box>  </Container>
   
    
    </>
  )
}

export default BrandContent